// ─── Chat retrieval engine ──────────────────────────────────────────────────
// A lightweight, fully client-side "assistant" for the Quest Assistant widget.
// It reads the user's question and answers from the real quest dataset — no
// backend, no API key. Not an LLM: it does keyword retrieval + intent routing
// over GAMES / QUESTS so replies are always grounded in documented data.

import { GAMES, QUESTS, type Quest } from "../generated/data";

export interface ChatReply { content: string; quest?: Quest; }

const DIFF_RANK: Record<Quest["difficulty"], number> = { Low: 0, Medium: 1, High: 2 };

// Common words that carry no retrieval signal for quest questions.
const STOP = new Set(
  ("the a an of to in on for and or how do does i you can could what which where when is are" +
   " my me get got find finish complete beat clear guide help with about tell show give me best" +
   " there this that it its need want should quest quests walkthrough").split(/\s+/)
);

function tokenize(s: string): string[] {
  return s.toLowerCase().replace(/[^a-z0-9'\s]/g, " ").split(/\s+/)
    .filter(w => w.length > 1 && !STOP.has(w));
}

// Resolve a game the user named — full name, abbreviation, or a distinctive word.
function findGame(q: string): string | undefined {
  const lc = q.toLowerCase();
  for (const name of Object.keys(GAMES)) {
    if (lc.includes(name.toLowerCase())) return name;
    if (new RegExp(`\\b${GAMES[name].abbr.toLowerCase()}\\b`).test(lc)) return name;
  }
  for (const name of Object.keys(GAMES)) {
    const words = name.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(w => w.length > 3);
    if (words.some(w => lc.includes(w))) return name;
  }
  return undefined;
}

// How well a quest matches the query tokens. Title hits weigh most.
function scoreQuest(q: Quest, toks: string[]): number {
  const title = q.title.toLowerCase();
  const loc = `${q.location ?? ""} ${q.region ?? ""}`.toLowerCase();
  const summary = (q.summary ?? "").toLowerCase();
  const tip = (q.aiTip ?? "").toLowerCase();
  let s = 0;
  for (const t of toks) {
    if (title.includes(t)) s += 5;
    if (loc.includes(t)) s += 2;
    if (summary.includes(t)) s += 1;
    if (tip.includes(t)) s += 1;
  }
  return s;
}

// Full breakdown for a single quest. The video link (if any) is surfaced by the
// widget via the returned `quest`, so it isn't repeated in the text.
function detail(q: Quest): string {
  const lines = [
    `${q.title} — ${q.game}`,
    `${q.type === "main" ? "Main" : "Side"} quest · ${q.difficulty} difficulty · ${q.length} length`,
    "",
    q.summary,
  ];
  if (q.aiTip) lines.push("", `Tip: ${q.aiTip}`);
  if (q.reward) lines.push("", `Reward: ${q.reward}`);
  if (!q.video && q.walkthrough?.length) {
    lines.push("", "Walkthrough:", ...q.walkthrough.slice(0, 6).map((s, i) => `${i + 1}. ${s}`));
  }
  return lines.join("\n");
}

function listLine(q: Quest): string {
  return `• ${q.title} — ${q.game} (${q.difficulty}, ${q.length})`;
}

export function answerQuestion(raw: string): ChatReply {
  const q = raw.trim();
  const lc = q.toLowerCase();
  const toks = tokenize(q);
  const game = findGame(q);

  if (toks.length === 0 || /^(hi|hey|hello|yo|sup|greetings)\b/.test(lc)) {
    return { content:
      "Greetings, adventurer. Ask me about a specific quest (\"how do I finish Ranni's questline?\"), " +
      "a game (\"show me hard Elden Ring quests\"), or the library itself (\"how many Witcher 3 quests are there?\")." };
  }

  // Count intent — answer straight from the data.
  if (/how many|number of|count of|total/.test(lc)) {
    if (game) {
      const n = QUESTS.filter(x => x.game === game).length;
      return { content: `There are ${n} documented ${game} quests in the library.` };
    }
    return { content: `The library has ${QUESTS.length} quests across ${Object.keys(GAMES).length} games. Name a game and I'll give you its count.` };
  }

  const diff = /\b(hard|hardest|difficult|toughest|high)\b/.test(lc) ? "High"
    : /\b(easy|easiest|low|simple)\b/.test(lc) ? "Low" : undefined;
  const len = /\b(short|shortest|quick|fast)\b/.test(lc) ? "short"
    : /\b(long|longest)\b/.test(lc) ? "long" : undefined;
  const wantsVideo = /\bvideo\b/.test(lc);
  const isListy = /\b(list|show|recommend|suggest|which|what|any|some|best|top|browse)\b/.test(lc);

  const pool = game ? QUESTS.filter(x => x.game === game) : QUESTS;
  const scored = pool.map(x => ({ q: x, s: scoreQuest(x, toks) })).sort((a, b) => b.s - a.s);
  const top = scored[0];

  // Filtered listing: a game/difficulty/length request without one clear target.
  if ((game || diff || len || wantsVideo) && (isListy || !top || top.s < 6)) {
    const list = pool
      .filter(x => (!diff || x.difficulty === diff) && (!len || x.length === len) && (!wantsVideo || !!x.video))
      .sort((a, b) => DIFF_RANK[b.difficulty] - DIFF_RANK[a.difficulty])
      .slice(0, 5);
    if (list.length === 0) {
      return { content: "I couldn't find quests matching that combination. Try a game name with a difficulty, like \"hard Elden Ring quests\"." };
    }
    const label = [diff && `${diff}-difficulty`, len && `${len}`, wantsVideo && "video", game].filter(Boolean).join(" ");
    return { content: `Here ${list.length === 1 ? "is" : "are"} ${list.length} ${label || "matching"} quest${list.length === 1 ? "" : "s"}:\n\n${list.map(listLine).join("\n")}\n\nAsk about any one by name for the full breakdown.` };
  }

  // Strong single match → full quest answer.
  if (top && top.s >= 6) return { content: detail(top.q), quest: top.q };

  // Weak matches → offer the closest quests.
  const sugg = scored.filter(x => x.s > 0).slice(0, 3);
  if (sugg.length) {
    return { content: `I'm not certain which quest you mean — these look related:\n\n${sugg.map(x => `• ${x.q.title} — ${x.q.game}`).join("\n")}\n\nAsk about one by name and I'll give you the tips and walkthrough.` };
  }

  const games = Object.keys(GAMES);
  return { content: `I don't have a quest matching that yet. I cover ${games.length} games including ${games.slice(0, 4).join(", ")} and more — try naming a game or a quest title.` };
}
