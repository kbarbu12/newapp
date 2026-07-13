#!/usr/bin/env node
/**
 * Quest data audit — run with:  node scripts/audit.js
 *
 * Automates the checks we used to run by hand after every content pass, so the
 * 🔴/🟡/✅ coverage status is generated, not hand-maintained (PROGRESS.md
 * improvement #7). It reports two kinds of finding:
 *
 *   ERRORS  — data bugs that must be fixed. Exit code 1 so CI / a pre-commit
 *             hook fails: duplicate IDs, missing required fields, duplicate
 *             titles within a game, malformed / reused videos, and sub-filter
 *             values that don't match any configured option (typos).
 *
 *   COVERAGE — per-game listed-vs-target counts (informational, never fails).
 *             Targets are the "estimated full" numbers from PROGRESS.md §3;
 *             a game below target is flagged so the gap is visible at a glance.
 */
const fs = require("fs");
const path = require("path");

// ── Load data/quests.js (it declares consts, no module.exports) ──────────────
const dataPath = path.join(__dirname, "..", "data", "quests.js");
const src = fs.readFileSync(dataPath, "utf8");
const mod = new module.constructor();
mod._compile(src + "\n;module.exports={quests,subFilterConfig};", dataPath);
const { quests, subFilterConfig } = mod.exports;

const REQUIRED = ["id", "type", "game", "title", "location", "length", "difficulty", "reward", "summary", "aiTip", "video"];

// "Estimated full" per-game targets (PROGRESS.md §3 — Known gaps). Adjust as
// the real lists get enumerated. Games at/above target are considered covered.
const TARGETS = {
  "Cyberpunk 2077: Ultimate Edition": 150,
  "The Witcher 3: Wild Hunt": 100,
  "Final Fantasy VII Rebirth": 80,
  "God of War Ragnarök": 70,
  "Hogwarts Legacy": 130,
  "Elden Ring": 60,
  "Horizon Forbidden West": 70,
  "Persona 5 Royal": 65,
  "Baldur's Gate 3": 100,
  "Ghost of Tsushima": 76,
  "Metaphor: ReFantazio": 113,
  "Black Myth: Wukong": 40,
  "Pillars of Eternity II: Deadfire": 50,
  "Pillars of Eternity": 50,
  "Demon's Souls": 25,
};

const errors = [];
const warns = [];

// ── 1. Duplicate IDs ─────────────────────────────────────────────────────────
const idSeen = new Map();
for (const q of quests) {
  if (idSeen.has(q.id)) errors.push(`Duplicate id ${q.id}: "${q.title}" & "${idSeen.get(q.id)}"`);
  else idSeen.set(q.id, q.title);
}

// ── 2. Missing / empty required fields ───────────────────────────────────────
for (const q of quests)
  for (const f of REQUIRED)
    if (q[f] === undefined || q[f] === null || String(q[f]).trim() === "")
      errors.push(`#${q.id} "${q.title || "?"}" missing required field: ${f}`);

// ── 3. Duplicate titles within a game ────────────────────────────────────────
const byGame = {};
for (const q of quests) (byGame[q.game] = byGame[q.game] || []).push(q);
for (const g of Object.keys(byGame)) {
  const seen = new Map();
  for (const q of byGame[g]) {
    const k = String(q.title).trim().toLowerCase();
    if (seen.has(k)) errors.push(`Duplicate title in ${g}: "${q.title}" (#${seen.get(k)} & #${q.id})`);
    else seen.set(k, q.id);
  }
}

// ── 4. Video-link health ─────────────────────────────────────────────────────
const watchIds = {};
const searchTerms = {};
for (const q of quests) {
  const v = q.video || "";
  if (!/^https:\/\//.test(v)) { errors.push(`#${q.id} malformed video URL: ${v}`); continue; }
  if (!/youtube\.com/.test(v)) { warns.push(`#${q.id} non-YouTube video: ${v}`); continue; }
  if (v.includes("watch?v=")) {
    const id = v.split("watch?v=")[1].split("&")[0];
    (watchIds[id] = watchIds[id] || []).push(q.id);
  } else if (v.includes("results?search_query=")) {
    const term = decodeURIComponent(v.split("search_query=")[1]);
    (searchTerms[term] = searchTerms[term] || []).push(q.id);
  }
}
for (const [id, ids] of Object.entries(watchIds))
  if (ids.length > 1) errors.push(`Reused hardcoded video ${id} on quests ${ids.join(", ")}`);
for (const [term, ids] of Object.entries(searchTerms))
  if (ids.length > 1) errors.push(`Reused video search term on quests ${ids.join(", ")}: "${term}"`);

// ── 5. Sub-filter value consistency (catch typos in region/act/category) ─────
for (const [game, raw] of Object.entries(subFilterConfig)) {
  const configs = Array.isArray(raw) ? raw : [raw];
  for (const cfg of configs) {
    const allowed = new Set(cfg.options.map((o) => String(o.value)));
    for (const q of byGame[game] || []) {
      const val = q[cfg.field];
      if (val === undefined) {
        warns.push(`#${q.id} (${game}) has no "${cfg.field}" — hidden by the ${cfg.label} filter`);
      } else if (!allowed.has(String(val))) {
        errors.push(`#${q.id} (${game}) ${cfg.field}="${val}" is not a configured ${cfg.label} option`);
      }
    }
  }
}

// ── 6. Coverage report (informational) ───────────────────────────────────────
const coverage = Object.keys(byGame)
  .map((g) => ({ game: g, count: byGame[g].length, target: TARGETS[g] || byGame[g].length }))
  .sort((a, b) => b.count - a.count);

// ── Output ───────────────────────────────────────────────────────────────────
console.log(`\nQuest data audit — ${quests.length} quests across ${Object.keys(byGame).length} games\n`);
console.log("Coverage (listed / est. full target):");
for (const c of coverage) {
  const pct = Math.round((c.count / c.target) * 100);
  const mark = c.count >= c.target ? "✅" : pct >= 80 ? "🟡" : "🔴";
  const gap = c.count >= c.target ? "" : `  (gap ${c.target - c.count})`;
  console.log(`  ${mark} ${String(c.count).padStart(3)} / ${String(c.target).padStart(3)}  ${pct}%  ${c.game}${gap}`);
}

if (warns.length) {
  console.log(`\n⚠️  ${warns.length} warning(s):`);
  warns.slice(0, 40).forEach((w) => console.log("   - " + w));
  if (warns.length > 40) console.log(`   … and ${warns.length - 40} more`);
}

if (errors.length) {
  console.log(`\n❌ ${errors.length} ERROR(S):`);
  errors.forEach((e) => console.log("   - " + e));
  console.log("");
  process.exit(1);
}
console.log("\n✅ Integrity clean: no duplicate IDs, no missing fields, no duplicate titles, videos + sub-filter values all valid.\n");
