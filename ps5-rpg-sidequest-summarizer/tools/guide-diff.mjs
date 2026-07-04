// Fetch canonical guide pages and diff them against our quest titles.
//
// Two directions:
//   missingFromGuide — titles we list that do NOT appear anywhere in the guide
//                      text. High-signal: candidate fabrications, typos, or
//                      wrong attributions to double-check.
//   candidateGaps    — prominent names on the guide page (wiki links / list
//                      items / bold text) that do NOT match any title we list.
//                      Best-effort: a heuristic name extractor, meant as a
//                      to-review shortlist, not an authoritative gap list.
//
// The membership direction is reliable and site-agnostic. The extraction
// direction is intentionally conservative and flagged best-effort because it
// depends on each wiki's markup.
import { GUIDE_SOURCES, fetchText, readCachedGuide } from "./guide-sources.mjs";

const norm = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

// Pull candidate quest-like names out of raw HTML. Conservative: link anchor
// text, <li> contents, and bold spans, filtered to title-ish strings.
function extractCandidateNames(html) {
  const names = new Set();
  const push = (raw) => {
    const t = raw.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (t.length < 3 || t.length > 80) return;
    const words = t.split(" ");
    if (words.length < 2 || words.length > 12) return;
    // must look like a Title (mostly capitalised words), skip sentences.
    const caps = words.filter((w) => /^[A-Z]/.test(w)).length;
    if (caps / words.length < 0.5) return;
    if (/[.!?:]$/.test(t)) return;
    names.add(t);
  };
  for (const m of html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)) push(m[1]);
  for (const m of html.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)) push(m[1]);
  for (const m of html.matchAll(/<b\b[^>]*>([\s\S]*?)<\/b>/gi)) push(m[1]);
  // Plain-text / markdown lists (one name per line): treat each line as a
  // candidate too, so a pasted text list feeds the gap check, not just HTML.
  for (const raw of html.split(/\r?\n/)) {
    push(raw.replace(/^\s*(?:[-*+•]|\d+[.)])\s+/, "")); // strip bullet/number prefixes
  }
  return [...names];
}

export async function diffAllGames(quests, reachableHosts) {
  const reachable = new Set(reachableHosts || []);
  const byGame = new Map();
  for (const q of quests) {
    if (!byGame.has(q.game)) byGame.set(q.game, []);
    byGame.get(q.game).push(q);
  }

  const games = [];
  for (const src of GUIDE_SOURCES) {
    const listed = byGame.get(src.game) || [];
    if (!listed.length) continue;

    // Source order: a locally cached/pasted list wins (works offline); otherwise
    // fetch the canonical pages if the host is reachable. Skip if neither.
    const cached = readCachedGuide(src.game);
    if (!cached && !reachable.has(src.host)) continue;

    let corpus = "";
    let source = cached ? "cache" : "fetch";
    const candidates = new Set();
    if (cached) {
      corpus += "\n" + cached;
      for (const n of extractCandidateNames(cached)) candidates.add(n);
    } else {
      for (const url of src.urls) {
        const r = await fetchText(url);
        if (!r.ok) continue;
        corpus += "\n" + r.text;
        for (const n of extractCandidateNames(r.text)) candidates.add(n);
      }
    }
    const corpusNorm = " " + norm(corpus) + " ";

    const missingFromGuide = listed
      .filter((q) => !corpusNorm.includes(" " + norm(q.title) + " "))
      .map((q) => ({ id: q.id, title: q.title }));

    const listedNorm = new Set(listed.map((q) => norm(q.title)));
    const candidateGaps = [...candidates]
      .filter((n) => !listedNorm.has(norm(n)))
      .slice(0, 100);

    games.push({
      game: src.game,
      source,
      listed: listed.length,
      sources: source === "cache" ? [`guide-cache/${src.game}`] : src.urls,
      missingFromGuide,
      candidateGaps,
    });
  }
  return { games };
}
