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
fs.writeFileSync(tmp, `${src}\nexport { quests, gameImages, subFilterConfig };\n`);
const { quests, gameImages, subFilterConfig } = await import(pathToFileURL(tmp).href);
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
// The live site already authors, per game, the axis its players think in and
// what that axis is CALLED — `subFilterConfig` gives us the field, the native
// label ("Chapter", "Realm", "District", "Archstone", "Planet", "Act"…) and the
// ordered option list with display names. That config is the source of truth for
// chapters, so Black Myth gets its real six Chapters, BG3 its three Acts, and so
// on. Only a game with no config at all falls back to numbered groups.
const CH_MIN = 2, CH_MAX = 14;
// A few configs label their axis generically; give those the game's real word.
const TERM_OVERRIDE = {
  "Assassin's Creed Valhalla": "Arc",
  "Assassin's Creed Odyssey": "Questline",
  "Persona 5 Royal": "Questline",
  "Sekiro: Shadows Die Twice": "Questline",
  "Pillars of Eternity II: Deadfire": "Act", // no config — numbered fallback
};
const GENERIC_LABEL = /^(category|type)$/i;
const plural = (t) => (/s$/i.test(t) ? t : `${t}s`);
const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const byGame = {};
for (const q of quests) (byGame[q.game] ??= []).push(q);
const chaptersByGame = {};
const chapterIdByQuest = {};
const termByGame = {};

// Which configured axis reads as "chapters"? Prefer an explicit progression
// axis (act/chapter), then a place axis (region/planet/…), then whatever is
// left — skipping any axis with too few/many options to be a useful breakdown.
const pickAxis = (cfg) => {
  const axes = (Array.isArray(cfg) ? cfg : cfg ? [cfg] : []).filter(
    (a) => a && a.field && (a.options || []).length >= CH_MIN && a.options.length <= CH_MAX
  );
  return (
    axes.find((a) => /^(act|chapter)$/i.test(a.field)) ??
    axes.find((a) => a.field !== "category") ??
    axes[0]
  );
};

for (const [name, qs] of Object.entries(byGame)) {
  const axis = pickAxis(subFilterConfig?.[name]);
  const term =
    TERM_OVERRIDE[name] ??
    (axis && !GENERIC_LABEL.test(axis.label) ? axis.label : "Questline");
  termByGame[name] = term;

  let groups;
  if (axis) {
    // Follow the configured option order — that's the game's own progression.
    const val = (q) => (q[axis.field] == null ? null : String(q[axis.field]));
    const seen = new Set();
    groups = axis.options.map((o) => {
      const ids = qs.filter((q) => val(q) === String(o.value)).map((q) => q.id);
      ids.forEach((id) => seen.add(id));
      return { name: o.text || String(o.value), ids };
    });
    const rest = qs.filter((q) => !seen.has(q.id)).map((q) => q.id);
    if (rest.length) groups.push({ name: "Other Quests", ids: rest });
  } else {
    // No configured axis — split into evenly sized numbered groups (cap 10).
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
