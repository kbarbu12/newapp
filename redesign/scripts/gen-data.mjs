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
// Upper bound is generous: some games really do have many divisions (Valhalla's
// 22 territory arcs, Odyssey's 30 Greek regions) and those are real, authored.
const CH_MIN = 2, CH_MAX = 32;

// Games whose configured axis is missing or only a generic "Category" still
// have real place data in each quest's `location`. Derive their divisions from
// it: first pattern that matches wins, in the game's own progression order.
// (Patterns are ordered — more specific areas before the broader ones.)
const LOCATION_AXIS = {
  "Sekiro: Shadows Die Twice": {
    label: "Area",
    // Sekiro's locations are literally "Area – Sub-location".
    groups: [
      ["Ashina Reservoir", /ashina reservoir/i],
      ["Ashina Outskirts", /ashina outskirts/i],
      ["Hirata Estate", /hirata/i],
      ["Ashina Castle", /ashina castle/i],
      ["Sunken Valley", /sunken valley/i],
      ["Senpou Temple", /senpou|mt\. kongo/i],
      ["Ashina Depths", /ashina depths|mibu village/i],
      ["Fountainhead Palace", /fountainhead/i],
      ["Dilapidated Temple", /dilapidated temple/i],
    ],
  },
  "Pillars of Eternity II: Deadfire": {
    label: "Region",
    groups: [
      ["Port Maje", /port maje/i],
      ["Neketaka", /neketaka|gullet|queen's berth|periki|arkemyr|old city|harbinger's watch/i],
      ["Poko Kohara", /poko kohara/i],
      ["Hasongo", /hasongo/i],
      ["Magran's Teeth", /magran's teeth|berkana/i],
      ["Tikawara", /tikawara/i],
      ["Sayuka", /sayuka/i],
      ["The Black Isles", /black isles/i],
      ["Ukaizo", /ukaizo|ori o ko/i],
      ["Caed Nua", /caed nua/i],
      ["The Deadfire Seas", /deadfire seas|various|islands/i],
    ],
  },
  "The Legend of Zelda: Tears of the Kingdom": {
    label: "Region",
    groups: [
      ["Great Sky Island", /great sky island|temple of time$|shrine of light/i],
      ["The Sky", /sky archipelago|sky island|dragonhead island|lomei labyrinth island|sky mine|flight range/i],
      ["The Depths", /depths|abandoned central mine|southern mine|yiga clan hideout|yiga blademaster|gisa crater|death caldera/i],
      ["Central Hyrule", /lookout landing|central hyrule|hyrule castle|royal hidden passage|temple of time ruins|emergency shelter|lucky clover|outskirt stable|coliseum ruins|rauru hillside|forgotten temple|satori mountain|tobio's hollow|lake intenoch|oakle's navel|hudson construction|^hyrule$/i],
      ["Hebra & Tabantha", /rito|hebra|tabantha|snowfield stable|selmie|northern icehouse|new serenne|toto lake|north lomei/i],
      ["Eldin", /goron|eldin|death mountain|foothill stable|cephla lake/i],
      ["Lanayru", /zora|lanayru|ralis channel|east reservoir|wetland stable|upland zorana/i],
      ["Gerudo", /gerudo|kara kara|spirit temple|ancient columns|south lomei/i],
      ["Necluda", /hateno|necluda|kakariko|dueling peaks|riverside stable|eventide|spring of (power|wisdom)/i],
      ["Faron", /faron|lurelin|highland stable|spring of courage|lake hylia|lakeside stable/i],
      ["Great Hyrule Forest", /korok forest|woodland stable|thyphlo/i],
      ["Akkala", /akkala|tarrey town|sokkala|bedrock bistro|rebonae|rikoka/i],
    ],
  },
};

// A few configs label their axis generically; give those the game's real word.
const TERM_OVERRIDE = {
  "Assassin's Creed Valhalla": "Arc",
  "Persona 5 Royal": "Questline",
};
const GENERIC_LABEL = /^(category|type)$/i;
const plural = (t) => (/s$/i.test(t) ? t : `${t}s`);
const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const byGame = {};
for (const q of quests) (byGame[q.game] ??= []).push(q);
const chaptersByGame = {};
const chapterIdByQuest = {};
const termByGame = {};
// Which underlying field each game's chapters came from, so the UI can hide the
// now-redundant generic Category/Region sub-filter that shows the same values.
const sourceByGame = {};

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
  const locAxis = LOCATION_AXIS[name];
  const axis = locAxis ? null : pickAxis(subFilterConfig?.[name]);
  const term =
    locAxis?.label ??
    TERM_OVERRIDE[name] ??
    (axis && !GENERIC_LABEL.test(axis.label) ? axis.label : "Questline");
  termByGame[name] = term;
  sourceByGame[name] = locAxis ? "location" : axis ? axis.field : "split";

  let groups;
  if (locAxis) {
    // Derive divisions from each quest's real `location` text.
    const seen = new Set();
    groups = locAxis.groups.map(([gname, re]) => {
      const ids = qs.filter((q) => !seen.has(q.id) && re.test(q.location ?? "")).map((q) => q.id);
      ids.forEach((id) => seen.add(id));
      return { name: gname, ids };
    });
    const rest = qs.filter((q) => !seen.has(q.id)).map((q) => q.id);
    if (rest.length) groups.push({ name: "Other Quests", ids: rest });
  } else if (axis) {
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
  GAMES[name].chapterSource = sourceByGame[name] ?? "split";
}

// ── Achievements (F2), synthesized per game ─────────────────────────────────
// The source data has no achievements, so we generate a small, meaningful set
// per game from the chapters + quest data we already have. Each achievement
// carries a machine-checkable `kind` the client evaluates against completed
// quests (see userState.achievementMet); nothing here is hand-authored trivia.
const ACHIEVEMENTS = {};
for (const [name, qs] of Object.entries(byGame)) {
  const sl = slug(name);
  const list = [];
  // First completion — a gentle starter.
  list.push({ id: `${sl}-first`, name: "First Steps", desc: `Complete your first quest in ${name}.`, kind: "count", n: 1 });
  // Clear each chapter/act/region…
  for (const c of chaptersByGame[name] ?? [])
    list.push({ id: `${sl}-clr-${c.id}`, name: `Clear ${c.name}`, desc: `Complete every quest in ${c.name}.`, kind: "chapter", chapterId: c.id });
  // Finish all main quests.
  if (qs.some((q) => questType(q) === "main"))
    list.push({ id: `${sl}-main`, name: "Story Complete", desc: `Complete every main quest in ${name}.`, kind: "type", qtype: "main" });
  // Conquer all the hard content.
  if (qs.some((q) => q.difficulty === "High"))
    list.push({ id: `${sl}-high`, name: "Trial by Fire", desc: `Complete every High-difficulty quest in ${name}.`, kind: "difficulty", difficulty: "High" });
  // A volume milestone for bigger games.
  if (qs.length >= 25)
    list.push({ id: `${sl}-25`, name: "Seasoned Adventurer", desc: `Complete 25 quests in ${name}.`, kind: "count", n: 25 });
  // 100%.
  list.push({ id: `${sl}-100`, name: "Completionist", desc: `Complete all ${qs.length} quests in ${name}.`, kind: "complete" });
  ACHIEVEMENTS[name] = list;
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
  "export interface Achievement {\n" +
  "  id: string; name: string; desc: string;\n" +
  "  kind: \"count\" | \"chapter\" | \"type\" | \"difficulty\" | \"complete\";\n" +
  "  n?: number; chapterId?: string; qtype?: QuestType; difficulty?: \"Low\" | \"Medium\" | \"High\";\n" +
  "}\n\n" +
  "export interface GameMeta {\n" +
  "  cover: string; abbr: string; accent: string; gradient: string;\n" +
  "  chapters: Chapter[];\n" +
  "  /** What this game calls its quest divisions — \"Realm\", \"District\", \"Act\", … */\n" +
  "  chapterTerm: string; chapterTermPlural: string;\n" +
  "  /** Field the chapters were derived from — the matching sub-filter is redundant. */\n" +
  "  chapterSource: string;\n" +
  "}\n\n" +
  `export const GAMES: Record<string, GameMeta> = ${JSON.stringify(GAMES, null, 2)};\n\n` +
  `export const QUESTS: Quest[] = ${JSON.stringify(QUESTS, null, 2)};\n\n` +
  `export const ACHIEVEMENTS: Record<string, Achievement[]> = ${JSON.stringify(ACHIEVEMENTS, null, 2)};\n`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, body);
console.log(
  `gen-data: wrote ${QUESTS.length} quests, ${Object.keys(GAMES).length} games -> ${path.relative(process.cwd(), OUT)}`
);
