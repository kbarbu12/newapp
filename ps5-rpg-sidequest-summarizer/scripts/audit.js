#!/usr/bin/env node
/*
 * RPG Quest Guide — automated data audit.
 *
 * Loads data/quests.js (the same file the site ships), then runs two passes:
 *
 *   1. INTEGRITY (errors — exit 1 on any):
 *        - unique, positive-integer ids
 *        - all required fields present & non-empty
 *        - type is "main" or "side"
 *        - game is a known game with a cover image on disk
 *        - no duplicate titles within a game
 *        - every video link is a well-formed YouTube watch / playlist / search URL
 *        - sub-filter tags: every quest in a game that has a sub-filter axis
 *          carries that field, and the value is one of the configured options
 *
 *   2. QUALITY / RE-VERIFY (warnings — reported, do not fail the build):
 *        - flags the "obscure / approximate" entries that need re-verification:
 *          stub summaries/tips, reused boilerplate text, bogus umbrella titles,
 *          search-video links whose query doesn't match the quest title
 *
 * Then a COVERAGE DIFF of actual vs target counts (scripts/targets.js) that
 * GENERATES the ✅/🟡/🔴 status per game instead of it being hand-maintained.
 *
 * Usage:
 *   node scripts/audit.js            # human-readable report
 *   node scripts/audit.js --json     # machine-readable JSON
 *   node scripts/audit.js --quiet    # only errors + summary
 *
 * Exit code is non-zero iff any INTEGRITY error is found, so it can gate CI.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const DATA_FILE = path.join(ROOT, "data", "quests.js");
const IMAGES_DIR = path.join(ROOT, "images");
const targets = require("./targets.js");

const argv = process.argv.slice(2);
const asJson = argv.includes("--json");
const quiet = argv.includes("--quiet");

const REQUIRED_FIELDS = [
  "id", "type", "game", "title", "location",
  "length", "difficulty", "reward", "summary", "aiTip", "video"
];

// ── Load the data file in a sandbox and pull out its top-level consts ────────
function loadData() {
  const code = fs.readFileSync(DATA_FILE, "utf8");
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(
    code +
      "\nglobalThis.__quests = quests;" +
      "\nglobalThis.__gameImages = gameImages;" +
      "\nglobalThis.__subFilterConfig = subFilterConfig;",
    ctx,
    { filename: "quests.js" }
  );
  return { quests: ctx.__quests, gameImages: ctx.__gameImages, subFilterConfig: ctx.__subFilterConfig };
}

// Sub-filter config value may be a single axis or an array of axes — normalize.
function axesFor(subFilterConfig, game) {
  const raw = subFilterConfig[game];
  if (!raw) return [];
  return Array.isArray(raw) ? raw : [raw];
}

function decode(s) {
  try { return decodeURIComponent(s); } catch { return s; }
}

// Significant words from a title, for matching against a search-video query.
function keywords(title) {
  const STOP = new Set(["the", "of", "a", "an", "and", "to", "in", "for", "is", "on", "at"]);
  return decode(title)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w));
}

function audit() {
  const { quests, gameImages, subFilterConfig } = loadData();
  const errors = [];
  const warnings = [];
  const err = (id, msg) => errors.push({ id, msg });
  const warn = (id, category, msg) => warnings.push({ id, category, msg });

  // ── 1. INTEGRITY ─────────────────────────────────────────────────────────
  const seenIds = new Map();
  const titlesByGame = new Map(); // game -> Map(lowerTitle -> firstId)

  for (const q of quests) {
    const id = q.id;

    // ids: unique, positive integer
    if (!Number.isInteger(id) || id <= 0) {
      err(id, `id is not a positive integer (${JSON.stringify(id)})`);
    } else if (seenIds.has(id)) {
      err(id, `duplicate id (also on "${seenIds.get(id)}")`);
    } else {
      seenIds.set(id, q.title);
    }

    // required fields present & non-empty
    for (const f of REQUIRED_FIELDS) {
      const v = q[f];
      if (v === undefined || v === null || (typeof v === "string" && v.trim() === "")) {
        err(id, `missing/empty required field "${f}"`);
      }
    }

    // type
    if (q.type !== "main" && q.type !== "side") {
      err(id, `type must be "main" or "side" (got ${JSON.stringify(q.type)})`);
    }

    // known game + cover on disk
    if (!gameImages[q.game]) {
      err(id, `unknown game "${q.game}" (not in gameImages)`);
    } else {
      const cover = gameImages[q.game].cover;
      if (cover && !fs.existsSync(path.join(ROOT, cover))) {
        err(id, `cover image not found on disk: ${cover}`);
      }
    }

    // duplicate title within a game (case-insensitive)
    if (q.title && q.game) {
      if (!titlesByGame.has(q.game)) titlesByGame.set(q.game, new Map());
      const m = titlesByGame.get(q.game);
      const key = q.title.trim().toLowerCase();
      if (m.has(key)) {
        err(id, `duplicate title within ${q.game}: "${q.title}" (also #${m.get(key)})`);
      } else {
        m.set(key, id);
      }
    }

    // video link health
    const kind = classifyVideo(q.video);
    if (kind === "invalid") {
      err(id, `invalid/unsupported video URL: ${JSON.stringify(q.video)}`);
    }

    // sub-filter tag integrity
    for (const axis of axesFor(subFilterConfig, q.game)) {
      const val = q[axis.field];
      if (val === undefined || val === null || val === "") {
        err(id, `${q.game}: missing sub-filter field "${axis.field}"`);
        continue;
      }
      const allowed = axis.options.map((o) => String(o.value));
      if (!allowed.includes(String(val))) {
        err(id, `${q.game}: ${axis.field}="${val}" is not a configured option (${allowed.join(", ")})`);
      }
    }
  }

  // ── 2. QUALITY / RE-VERIFY (warnings) ──────────────────────────────────────
  // Boilerplate detection: summaries reused verbatim across many entries.
  const summaryCounts = new Map();
  for (const q of quests) {
    const s = (q.summary || "").trim();
    if (s) summaryCounts.set(s, (summaryCounts.get(s) || 0) + 1);
  }

  const BOGUS_UMBRELLA = /\b(and more|various|etc\.?|class assignments|assorted|miscellaneous)\b/i;

  for (const q of quests) {
    const id = q.id;

    // stub / approximate content
    if (typeof q.summary === "string" && q.summary.trim().length < 40) {
      warn(id, "stub-summary", `summary is very short (${q.summary.trim().length} chars) — likely approximate: "${q.title}"`);
    }
    if (typeof q.aiTip === "string" && q.aiTip.trim().length < 25) {
      warn(id, "stub-tip", `aiTip is very short (${q.aiTip.trim().length} chars): "${q.title}"`);
    }

    // reused boilerplate summary
    if (q.summary && summaryCounts.get(q.summary.trim()) >= 4) {
      warn(id, "boilerplate-summary", `summary is reused by ${summaryCounts.get(q.summary.trim())} entries — copy/paste stub: "${q.title}"`);
    }

    // bogus umbrella titles (legit "... Questline" NPC cards are allowed)
    if (BOGUS_UMBRELLA.test(q.title)) {
      warn(id, "umbrella-title", `title looks like a collapsed umbrella, not an individual quest: "${q.title}"`);
    }

    // search-video query should reference the quest title
    if (classifyVideo(q.video) === "search") {
      const query = decode((q.video.split("search_query=")[1] || "")).toLowerCase();
      const kws = keywords(q.title);
      const hit = kws.length === 0 || kws.some((w) => query.includes(w));
      if (!hit) {
        warn(id, "video-mismatch", `search-video query does not mention any title keyword — may point at the wrong quest: "${q.title}"`);
      }
    }
  }

  // ── 3. COVERAGE DIFF (generated status) ────────────────────────────────────
  const byGame = new Map();
  for (const q of quests) byGame.set(q.game, (byGame.get(q.game) || 0) + 1);

  const coverage = [];
  for (const [game, actual] of [...byGame.entries()].sort((a, b) => b[1] - a[1])) {
    const t = targets[game];
    let status, symbol;
    if (!t) {
      status = "no-target";
      symbol = "❔";
    } else if (actual >= t.count) {
      status = "full";
      symbol = "✅";
    } else if (actual >= t.count * 0.9) {
      status = "solid";
      symbol = "🟡";
    } else {
      status = "partial";
      symbol = "🔴";
    }
    coverage.push({ game, actual, target: t ? t.count : null, status, symbol, note: t ? t.note : "no target defined" });
  }
  // Games in targets but absent from data
  for (const game of Object.keys(targets)) {
    if (!byGame.has(game)) coverage.push({ game, actual: 0, target: targets[game].count, status: "missing", symbol: "🔴", note: targets[game].note });
  }

  return { total: quests.length, games: byGame.size, errors, warnings, coverage };
}

function classifyVideo(video) {
  if (typeof video !== "string" || video.trim() === "") return "invalid";
  let u;
  try { u = new URL(video); } catch { return "invalid"; }
  if (!/(^|\.)youtube\.com$/.test(u.hostname) && u.hostname !== "youtu.be") return "invalid";
  if (u.hostname === "youtu.be") return "watch";
  if (u.pathname === "/watch" && u.searchParams.get("v")) return "watch";
  if (u.pathname === "/playlist" && u.searchParams.get("list")) return "playlist";
  if (u.pathname === "/results" && u.searchParams.get("search_query")) return "search";
  return "invalid";
}

// ── Report ───────────────────────────────────────────────────────────────────
function main() {
  const r = audit();

  if (asJson) {
    console.log(JSON.stringify(r, null, 2));
    process.exit(r.errors.length > 0 ? 1 : 0);
  }

  const line = (s = "") => console.log(s);
  line("RPG Quest Guide — data audit");
  line("=".repeat(60));
  line(`Library: ${r.total} quests across ${r.games} games`);
  line("");

  // Integrity
  line(`INTEGRITY: ${r.errors.length === 0 ? "PASS ✅" : "FAIL ❌ (" + r.errors.length + " errors)"}`);
  for (const e of r.errors) line(`  ✗ #${e.id}: ${e.msg}`);
  line("");

  // Coverage
  line("COVERAGE (actual vs target — status is generated):");
  for (const c of r.coverage) {
    const t = c.target === null ? "  ?" : String(c.target).padStart(3);
    line(`  ${c.symbol} ${String(c.actual).padStart(3)} / ${t}  ${c.game}`);
  }
  const full = r.coverage.filter((c) => c.status === "full").length;
  const solid = r.coverage.filter((c) => c.status === "solid").length;
  const partial = r.coverage.filter((c) => c.status === "partial" || c.status === "missing").length;
  line(`  → ${full} ✅ full · ${solid} 🟡 solid · ${partial} 🔴 partial`);
  line("");

  // Warnings (grouped)
  if (!quiet) {
    const byCat = new Map();
    for (const w of r.warnings) {
      if (!byCat.has(w.category)) byCat.set(w.category, []);
      byCat.get(w.category).push(w);
    }
    line(`RE-VERIFY / QUALITY: ${r.warnings.length} flags` + (r.warnings.length ? " (advisory — do not fail the build)" : " ✅"));
    for (const [cat, list] of [...byCat.entries()].sort((a, b) => b[1].length - a[1].length)) {
      line(`  ▸ ${cat}: ${list.length}`);
      for (const w of list.slice(0, 12)) line(`      #${w.id}: ${w.msg}`);
      if (list.length > 12) line(`      … and ${list.length - 12} more`);
    }
    line("");
  }

  line("=".repeat(60));
  if (r.errors.length > 0) {
    line(`RESULT: FAIL — ${r.errors.length} integrity error(s)`);
    process.exit(1);
  }
  line(`RESULT: PASS — 0 integrity errors, ${r.warnings.length} advisory flag(s)`);
  process.exit(0);
}

main();
