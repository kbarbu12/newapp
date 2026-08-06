// Build-time data generator.
//
// The redesign renders the SAME quest data the live vanilla site ships, so the
// prod file is the single source of truth. We read
// ../ps5-rpg-sidequest-summarizer/data/quests.js (plain declarations, no
// exports), evaluate it, and emit a typed ESM module the React app imports.
// Run automatically via the `predev` / `prebuild` npm hooks.

import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROD_DATA = path.resolve(
  __dirname,
  "../../ps5-rpg-sidequest-summarizer/data/quests.js"
);
const OUT = path.resolve(__dirname, "../src/generated/data.ts");

// The deploy publishes the vanilla site under /newapp/classic/, so its images/
// dir lives at /newapp/classic/images/. Use an absolute URL so covers resolve
// no matter where the redesign is hosted (/staging/, /app/, or local dev).
const IMG_BASE = "https://kbarbu12.github.io/newapp/classic/";

// The prod file declares `const gameImages = {...}` and `const quests = [...]`
// with no exports. Append an export line, import it as a temp ESM module.
const src = fs.readFileSync(PROD_DATA, "utf8");
const tmp = path.join(os.tmpdir(), `quests-${Date.now()}.mjs`);
fs.writeFileSync(tmp, `${src}\nexport { quests, gameImages };\n`);
const { quests, gameImages } = await import(pathToFileURL(tmp).href);
fs.unlinkSync(tmp);

// accent = the bright end-stop of each game's gradient.
const lastHex = (g) => {
  const m = String(g).match(/#[0-9a-fA-F]{3,8}/g);
  return m ? m[m.length - 1] : "#c5933a";
};

const GAMES = {};
for (const [name, gi] of Object.entries(gameImages)) {
  GAMES[name] = {
    cover: IMG_BASE + gi.cover.replace(/^\.?\//, ""),
    abbr: gi.abbr,
    accent: lastHex(gi.gradient),
    gradient: gi.gradient,
    chapters: [], // filled in after chapter derivation below
  };
}

// A "real" walkthrough is a specific video/playlist link. Placeholder search
// links (…/results?search_query=…) don't count — mirror the live site
// (ps5-rpg-sidequest-summarizer/src/app.js:hasRealVideo) so the video filter
// and "With Video" stat match prod.
const hasRealVideo = (v) => !!v && !v.includes("/results");

// ── Quest type (3-value) ───────────────────────────────────────────────────
// The live data only carries main|side. "Optional" is derived: a side quest
// whose category names a clearly optional, non-story activity (collectibles,
// contracts, world events, diversions…). Everything else stays main/side.
const OPTIONAL_CAT =
  /optional|activit|collectib|world event|contract|favor|bounty|treasure|point of interest|mystic|diversion|race|championship|hunt|puzzle|shrine/i;
const questType = (q) =>
  q.type === "main" ? "main" : q.category && OPTIONAL_CAT.test(q.category) ? "optional" : "side";

// ── Point system (F7) ───────────────────────────────────────────────────────
const BASE = { main: 100, side: 50, optional: 25 };
const MULT = { Low: 1, Medium: 1.5, High: 2 };
const questPoints = (type, difficulty, missable) => {
  let p = BASE[type] * (MULT[difficulty] ?? 1);
  if (missable) p += 25; // don't-miss-a-missable bonus
  return Math.round(p / 5) * 5;
};

// ── Chapters (F1 tag + F3 rollup) ───────────────────────────────────────────
// Chapters group a game's quests into something meaningful to a player. We use
// the game's OWN data — narrative arc, region, or category — never invented
// labels, picking whichever real field yields a sensible number of chapters
// (2–14). The two games that carry none of those fields (Black Myth: Wukong,
// Zelda: TotK) are the only ones split into evenly sized "Part N" groups so
// their long lists still get a usable progress breakdown.
const CH_MIN = 2, CH_MAX = 14;
// What each game calls its own quest divisions. Players think in Realms (God of
// War), Districts (Cyberpunk), Planets (Jedi), Archstones (Demon's Souls) — not
// a generic "Chapter" — so the UI labels groups with the game's native term.
// Falls back to a term matching whichever field the grouping came from.
const TERM_BY_FIELD = { arc: "Arc", region: "Region", category: "Questline", split: "Part" };
const CHAPTER_TERM = {
  "God of War Ragnarök": "Realm",
  "Cyberpunk 2077: Ultimate Edition": "District",
  "Star Wars Jedi: Fallen Order": "Planet",
  "Star Wars Jedi: Survivor": "Planet",
  "Demon's Souls": "Archstone",
  "Assassin's Creed Valhalla": "Arc",
  // No grouping field in the data — numbered groups use the game's own term.
  "Black Myth: Wukong": "Chapter",
  "Pillars of Eternity II: Deadfire": "Act",
};
const plural = (t) => `${t}s`;
const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const byGame = {};
for (const q of quests) (byGame[q.game] ??= []).push(q);
const chaptersByGame = {};
const chapterIdByQuest = {};
const termByGame = {};
// Group a game's quests by one of its fields, quests missing the field last.
const groupByField = (qs, field) => {
  const keys = [...new Set(qs.map((q) => q[field]).filter(Boolean))];
  const groups = keys.map((k) => ({ name: k, ids: qs.filter((q) => q[field] === k).map((q) => q.id) }));
  const rest = qs.filter((q) => !q[field]).map((q) => q.id);
  if (rest.length) groups.push({ name: "Other Quests", ids: rest });
  return groups;
};
for (const [name, qs] of Object.entries(byGame)) {
  // Prefer arc (narrative), then region (place), then category (quest kind);
  // take the first whose distinct-count reads as chapters, not noise.
  const inRange = (f) => {
    const n = new Set(qs.map((q) => q[f]).filter(Boolean)).size;
    return n >= CH_MIN && n <= CH_MAX;
  };
  const field = ["arc", "region", "category"].find(inRange);
  // The game's own word for these divisions (Realm, District, Act, …).
  const term = CHAPTER_TERM[name] ?? TERM_BY_FIELD[field ?? "split"];
  termByGame[name] = term;
  let groups;
  if (field) {
    groups = groupByField(qs, field);
  } else {
    // No usable grouping data — split into evenly sized parts (cap 10), named
    // with the game's own term (e.g. Black Myth's "Chapter 1").
    const n = qs.length;
    const parts = Math.min(10, Math.max(n >= 10 ? 2 : 1, Math.round(n / 20)));
    const per = Math.ceil(n / parts);
    groups = [];
    for (let i = 0; i < n; i += per)
      groups.push({ name: `${term} ${groups.length + 1}`, ids: qs.slice(i, i + per).map((q) => q.id) });
  }
  const sl = slug(name);
  const chapters = groups
    .filter((g) => g.ids.length)
    .map((g, i) => ({ id: `${sl}-c${i + 1}`, name: g.name, questIds: g.ids }));
  chaptersByGame[name] = chapters;
  chapters.forEach((c) => c.questIds.forEach((id) => (chapterIdByQuest[id] = c.id)));
}
// Attach each game's chapters + its native division term to its GAMES entry.
for (const name of Object.keys(GAMES)) {
  GAMES[name].chapters = chaptersByGame[name] ?? [];
  const t = termByGame[name] ?? "Chapter";
  GAMES[name].chapterTerm = t;
  GAMES[name].chapterTermPlural = plural(t);
}

// Keep only the fields the design consumes.
const QUESTS = quests.map((q) => ({
  id: q.id,
  type: questType(q),
  game: q.game,
  title: q.title,
  ...(q.category ? { category: q.category } : {}),
  ...(q.arc ? { arc: q.arc } : {}),
  ...(chapterIdByQuest[q.id] ? { chapterId: chapterIdByQuest[q.id] } : {}),
  length: q.length,
  difficulty: q.difficulty,
  points: questPoints(questType(q), q.difficulty, !!q.missable),
  summary: q.summary,
  ...(q.location ? { location: q.location } : {}),
  ...(q.region ? { region: q.region } : {}),
  ...(q.aiTip ? { aiTip: q.aiTip } : {}),
  ...(hasRealVideo(q.video) ? { video: q.video } : {}),
  ...(q.reward ? { reward: q.reward } : {}),
  ...(Array.isArray(q.walkthrough) && q.walkthrough.length
    ? { walkthrough: q.walkthrough }
    : {}),
  // No source data yet for which quests are missable — defaults to false/
  // omitted until real per-quest data is authored (see quest-guide-
  // improvement-spec-2026-07-15.md).
  ...(q.missable ? { missable: true, ...(q.missableWindow ? { missableWindow: q.missableWindow } : {}) } : {}),
}));

const banner =
  "// AUTO-GENERATED by scripts/gen-data.mjs from the live quest data.\n" +
  "// Do not edit by hand — run `npm run gen:data` (or dev/build) to refresh.\n";

const body =
  banner +
  "\nexport type QuestType = \"main\" | \"side\" | \"optional\";\n\n" +
  "export interface Quest {\n" +
  "  id: number; type: QuestType; game: string; title: string; category?: string; arc?: string; chapterId?: string;\n" +
  "  length: \"short\" | \"medium\" | \"long\"; difficulty: \"Low\" | \"Medium\" | \"High\"; points: number;\n" +
  "  summary: string; location?: string; region?: string; aiTip?: string;\n" +
  "  video?: string; reward?: string; walkthrough?: string[];\n" +
  "  missable?: boolean; missableWindow?: string;\n" +
  "}\n\n" +
  "export interface Chapter { id: string; name: string; questIds: number[]; }\n\n" +
  "export interface GameMeta {\n" +
  "  cover: string; abbr: string; accent: string; gradient: string;\n" +
  "  chapters: Chapter[];\n" +
  "  /** What this game calls its quest divisions — \"Realm\", \"District\", \"Act\", … */\n" +
  "  chapterTerm: string; chapterTermPlural: string;\n" +
  "}\n\n" +
  `export const GAMES: Record<string, GameMeta> = ${JSON.stringify(GAMES, null, 2)};\n\n` +
  `export const QUESTS: Quest[] = ${JSON.stringify(QUESTS, null, 2)};\n`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, body);
console.log(
  `gen-data: wrote ${QUESTS.length} quests, ${Object.keys(GAMES).length} games -> ${path.relative(process.cwd(), OUT)}`
);
