// ─── Chat retrieval engine ──────────────────────────────────────────────────
// A lightweight, fully client-side "assistant" for the Quest Assistant widget.
// It reads the user's question and answers from the real quest dataset — no
// backend, no API key. Not an LLM: it does keyword retrieval + intent routing
// over GAMES / QUESTS so replies are always grounded in documented data.
//
// The engine keeps a small amount of conversational context (the last quest and
// game it talked about) so follow-ups like "what's its reward?" or "is it
// missable?" resolve against what the user was just looking at. Context is
// threaded in and out by the caller (see ChatWidget) — the engine stays a pure
// function.

import { GAMES, QUESTS, type Quest } from "../generated/data";

// Carried between turns so short follow-ups resolve against the current subject.
export interface ChatContext { lastQuest?: Quest; lastGame?: string; }
export interface ChatReply { content: string; quest?: Quest; context: ChatContext; }

const DIFF_RANK: Record<Quest["difficulty"], number> = { Low: 0, Medium: 1, High: 2 };

// Common words that carry no retrieval signal for quest questions.
const STOP = new Set(
  ("the a an of to in on for and or how do does i you can could what which where when is are" +
   " my me get got find finish complete beat clear guide help with about tell show give me best" +
   " there this that it its need want should quest quests walkthrough").split(/\s+/)
);

// Attribute words a follow-up asks *about* (not quest-identifying) — stripped
// before scoring the residual so they don't inflate a false new-quest match.
const ATTR_WORDS = new Set(
  ("reward rewards loot missable tip tips hint hints advice walkthrough step steps" +
   " video difficulty difficult length duration summary recap any some its it").split(/\s+/)
);

// Lightweight singulariser so plural queries match singular text and vice versa
// ("trials"→"trial", "mice" is left alone — we only strip regular endings).
// Substring scoring does the rest. Kept deliberately conservative to avoid
// mangling short words.
function stem(w: string): string {
  if (w.length <= 4) return w;
  if (w.endsWith("ies")) return w.slice(0, -3) + "y";
  if (w.endsWith("es") && !w.endsWith("ses")) return w.slice(0, -2);
  if (w.endsWith("s") && !w.endsWith("ss")) return w.slice(0, -1);
  return w;
}

function tokenize(s: string): string[] {
  return s.toLowerCase().replace(/[^a-z0-9'\s]/g, " ").split(/\s+/)
    .filter(w => w.length > 1 && !STOP.has(w))
    .map(stem);
}

// Query-term synonyms: expansions added (for scoring only) so a natural-language
// word finds quests authored with the in-game term — "romance" reaches
// companion/relationship quests, "boss" reaches fights, etc. Additive to the
// score, so a literal match still outranks a synonym-only one.
const SYNONYMS: Record<string, string[]> = {
  romance: ["companion", "lover", "relationship", "affection"],
  boss: ["fight", "battle", "duel"],
  horse: ["mount", "steed"],
  weapon: ["sword", "blade", "spear", "armament"],
  armor: ["armour", "gear", "outfit"],
  money: ["gold", "coin", "currency", "crown"],
  ending: ["finale", "conclusion", "final"],
  puzzle: ["riddle", "trial"],
  treasure: ["chest", "loot", "hoard"],
};

// Expand tokens with any synonyms (stemmed, de-duped) for retrieval scoring.
function withSynonyms(toks: string[]): string[] {
  const out = new Set(toks);
  for (const t of toks) for (const s of SYNONYMS[t] ?? []) out.add(stem(s));
  return [...out];
}

// Per-game identifier tokens: the abbreviation plus every word in the game's
// name that is unique to it (appears in no other game's name). Shared words like
// "final"/"fantasy" are excluded so they can't produce false multi-game matches
// (which would misfire the two-game compare intent). Computed once at load.
const NAME_WORDS = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(w => w.length > 3);
const WORD_FREQ: Record<string, number> = {};
for (const name of Object.keys(GAMES)) for (const w of new Set(NAME_WORDS(name))) WORD_FREQ[w] = (WORD_FREQ[w] ?? 0) + 1;
const GAME_IDS = Object.keys(GAMES).map(name => ({
  name,
  abbr: GAMES[name].abbr.toLowerCase(),
  uniq: NAME_WORDS(name).filter(w => WORD_FREQ[w] === 1),
}));

// Resolve every game the user named — by full name, abbreviation, or a word
// unique to that game's title. Returns all matches (used for one-game answers
// and two-game comparisons). Falls back to a single fuzzy match on any title
// word when nothing distinctive hits, so "quests in the witcher" still resolves.
function findGames(q: string): string[] {
  const lc = q.toLowerCase();
  const out: string[] = [];
  for (const g of GAME_IDS) {
    if (lc.includes(g.name.toLowerCase())
      || new RegExp(`\\b${g.abbr}\\b`).test(lc)
      || g.uniq.some(w => new RegExp(`\\b${w}\\b`).test(lc))) out.push(g.name);
  }
  if (out.length) return [...new Set(out)];
  for (const name of Object.keys(GAMES)) {
    if (NAME_WORDS(name).some(w => lc.includes(w))) return [name];
  }
  return [];
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

// The next quest to play after `q`. Prefers the next entry in the same story
// arc (arcs are authored in play order); otherwise the next main-story quest in
// the same game. Returns undefined when there's nothing sensible to point at.
function nextQuest(q: Quest): Quest | undefined {
  if (q.arc) {
    const arc = QUESTS.filter(x => x.game === q.game && x.arc === q.arc).sort((a, b) => a.id - b.id);
    const i = arc.findIndex(x => x.id === q.id);
    if (i >= 0 && i < arc.length - 1) return arc[i + 1];
  }
  const mains = QUESTS.filter(x => x.game === q.game && x.type === "main").sort((a, b) => a.id - b.id);
  return mains.find(x => x.id > q.id);
}

// Difficulty / length distribution for a game — answers "how hard/long is X?".
function distribution(game: string): string {
  const pool = QUESTS.filter(x => x.game === game);
  const d = { High: 0, Medium: 0, Low: 0 };
  const l = { long: 0, medium: 0, short: 0 };
  for (const x of pool) { d[x.difficulty]++; l[x.length]++; }
  return `${game}: ${pool.length} documented quests.\n` +
    `Difficulty — ${d.High} High / ${d.Medium} Medium / ${d.Low} Low.\n` +
    `Length — ${l.long} long / ${l.medium} medium / ${l.short} short.`;
}

// Answer a bare attribute follow-up ("its reward?", "is it missable?") against
// the quest the user is currently looking at. Returns null if the query isn't a
// recognised attribute, so the caller can fall back to a full re-summary.
function attributeAnswer(lc: string, q: Quest): string | null {
  if (/\breward|loot|get for/.test(lc))
    return q.reward ? `${q.title} rewards: ${q.reward}` : `No reward is documented for ${q.title}.`;
  if (/\bmissable|miss it|permanently|lock(ed)? out\b/.test(lc))
    return q.missable
      ? `Yes — ${q.title} is missable${q.missableWindow ? ` (window: ${q.missableWindow})` : ""}. Do it before you move on.`
      : `I don't track missable status for ${q.title} yet, so treat it as unknown — do it early to be safe.`;
  if (/\b(tip|hint|advice|trick|strateg)/.test(lc))
    return q.aiTip ? `Tip for ${q.title}: ${q.aiTip}` : `I don't have a specific tip for ${q.title}.`;
  if (/\b(walkthrough|steps?|guide|how)\b/.test(lc)) {
    if (q.video) return `${q.title} has a walkthrough video — link below.`;
    if (q.walkthrough?.length)
      return `${q.title} walkthrough:\n` + q.walkthrough.map((s, i) => `${i + 1}. ${s}`).join("\n");
    return `I don't have step-by-step directions for ${q.title}.`;
  }
  if (/\bvideo\b/.test(lc))
    return q.video ? `Yes — ${q.title} has a walkthrough video, linked below.` : `${q.title} has no walkthrough video; I list written steps instead.`;
  if (/\b(difficult|hard|easy)/.test(lc)) return `${q.title} is ${q.difficulty} difficulty.`;
  if (/\b(long|short|length|duration|time)/.test(lc)) return `${q.title} is a ${q.length} quest.`;
  if (/\b(summary|about|what is|recap)/.test(lc)) return `${q.title} — ${q.summary}`;
  return null;
}

export function answerQuestion(raw: string, ctx: ChatContext = {}): ChatReply {
  const q = raw.trim();
  const lc = q.toLowerCase();
  const toks = tokenize(q);
  const games = findGames(q);
  const game = games[0];

  const greeting = /^(hi|hey|hello|yo|sup|greetings)\b/.test(lc);
  const terms = withSynonyms(toks);
  const scored = (game ? QUESTS.filter(x => x.game === game) : QUESTS)
    .map(x => ({ q: x, s: scoreQuest(x, terms) })).sort((a, b) => b.s - a.s);
  const top = scored[0];

  // ── Conversational follow-up on the last quest ─────────────────────────────
  // Fires only when the user didn't name a new game, isn't strongly pointing at
  // a different quest, and isn't asking a library-wide question ("…quests?",
  // "recommend …"). Triggers on a continuation ("yes", "more"), a pronoun
  // ("its reward?"), or a short bare-attribute query ("any tips?").
  const continuation = /^(yes|yeah|yep|sure|ok|okay|more|go on|and\b|what else|again|thanks?)\b/.test(lc);
  const pronoun = /\b(it|its|it's|that one|this one|the quest|the one|same)\b/.test(lc);
  const globalList = /\bquests\b/.test(lc) || /\b(recommend|suggest|browse)\b/.test(lc);
  const attrKeyword = /\b(reward|loot|missable|tips?|hints?|advice|walkthrough|steps?|video|difficult|length|duration|summary|recap)/.test(lc);
  const bareAttr = attrKeyword && toks.length <= 3;
  // Scoring on the *whole* query can't tell a follow-up from a new query, since
  // attribute words ("tips", "reward") match many quests weakly. So score only
  // the residual tokens (attribute words removed): if those still point hard at
  // a specific quest ("reward for Hearts of Stone"), it's a new query, not a
  // follow-up about the last one.
  const residual = toks.filter(t => !ATTR_WORDS.has(t));
  const residualStrong = residual.length > 0 && Math.max(0, ...QUESTS.map(x => scoreQuest(x, residual))) >= 6;

  // "What's next / after this?" — walk to the next quest in the arc or story.
  if (ctx.lastQuest && games.length === 0 && !residualStrong &&
      /\b(next|after (this|that|it)|then what|what now|continue|carry on)\b/.test(lc)) {
    const nx = nextQuest(ctx.lastQuest);
    if (nx) return { content: `After ${ctx.lastQuest.title}, next up is:\n\n${detail(nx)}`, quest: nx, context: { lastQuest: nx, lastGame: nx.game } };
    return { content: `${ctx.lastQuest.title} looks like the end of that line — I don't have a next quest after it.`, quest: ctx.lastQuest, context: ctx };
  }

  if (ctx.lastQuest && games.length === 0 && !globalList && !residualStrong && (continuation || pronoun || bareAttr)) {
    const attr = attributeAnswer(lc, ctx.lastQuest);
    return { content: attr ?? detail(ctx.lastQuest), quest: ctx.lastQuest, context: ctx };
  }

  if (toks.length === 0 || greeting) {
    return { content:
      "Greetings, adventurer. Ask me about a specific quest (\"how do I finish Ranni's questline?\"), " +
      "a game (\"show me hard Elden Ring quests\"), or the library itself (\"how many Witcher 3 quests are there?\").",
      context: {} };
  }

  // ── Compare two named games ────────────────────────────────────────────────
  if (games.length >= 2) {
    const [g1, g2] = games;
    const stat = (g: string) => {
      const p = QUESTS.filter(x => x.game === g);
      const hi = p.filter(x => x.difficulty === "High").length;
      const vid = p.filter(x => x.video).length;
      return `${g}: ${p.length} quests, ${hi} High-difficulty, ${vid} with video`;
    };
    return { content: `Here's how they compare:\n\n${stat(g1)}\n${stat(g2)}\n\nAsk about either one for its quests or a difficulty breakdown.`,
      context: { lastGame: g1 } };
  }

  // ── Count intent — answer straight from the data. ──────────────────────────
  if (/how many|number of|count of|total/.test(lc)) {
    if (game) {
      const n = QUESTS.filter(x => x.game === game).length;
      return { content: `There are ${n} documented ${game} quests in the library.`, context: { lastGame: game } };
    }
    return { content: `The library has ${QUESTS.length} quests across ${Object.keys(GAMES).length} games. Name a game and I'll give you its count.`, context: ctx };
  }

  // ── Missable intent — "which quests are missable [in <game>]?" ─────────────
  // (A pronoun follow-up like "is it missable?" is handled above; this is the
  // library-wide / per-game listing.)
  if (/\bmissable\b/.test(lc) && (game || /\b(which|what|any|list|show|all|are)\b/.test(lc))) {
    const flagged = (game ? QUESTS.filter(x => x.game === game) : QUESTS).filter(x => x.missable);
    if (flagged.length) {
      const shown = flagged.slice(0, 8).map(x => `• ${x.title} — ${x.game}${x.missableWindow ? ` (do before: ${x.missableWindow})` : ""}`);
      const more = flagged.length > 8 ? `\n\n…and ${flagged.length - 8} more.` : "";
      return { content: `Missable quests I track in ${game ?? "the library"} — do these before their window closes:\n\n${shown.join("\n")}${more}`,
        context: game ? { lastGame: game } : ctx };
    }
    return { content: game
      ? `I don't have missable quests flagged for ${game} yet — I only track a hand-curated set, so treat unflagged quests as unknown and do them early to be safe.`
      : `I track a curated set of known-missable quests. Name a game and I'll list the ones I have flagged.`,
      context: game ? { lastGame: game } : ctx };
  }

  // ── Aggregate intent — "how hard/long is <game>?" / "difficulty breakdown". ──
  // Guarded so it doesn't hijack a strong specific-quest match (e.g. "how long
  // is Ranni's questline"), while still catching generic "…the game" phrasing.
  const genericGame = /\b(the|this|whole|overall) game\b/.test(lc);
  const wantsAggregate = /\bhow (long|hard|difficult|tough|big)\b|\b(breakdown|distribution|spread|split|overview)\b/.test(lc);
  // Named a game ("how hard is Elden Ring") → breakdown wins. No game but a
  // strong specific quest ("how long is Ranni's questline") → let it fall
  // through to the quest detail instead.
  if (wantsAggregate && !(!game && top && top.s >= 6 && !genericGame)) {
    const g = game ?? (genericGame ? ctx.lastGame : undefined);
    if (g) return { content: distribution(g), context: { lastGame: g } };
    return { content: `Which game? I can break down difficulty and length for any of the ${Object.keys(GAMES).length} — just name one.`, context: ctx };
  }

  // ── Progression intent — "what should I do first / where do I start?" ───────
  // The main story is the honest through-line (per-quest data has no global play
  // order), so point there. Needs a game in context; skips if a specific quest
  // is clearly the target.
  const startGame = game ?? ctx.lastGame;
  const wantsStart = /\b(start|begin|do first|getting started|new to|just started|where do i (go|start|begin))\b/.test(lc)
    || /\bwhat (should i|do i|to) (do|play).*\bfirst\b/.test(lc);
  // Named a game → progression wins; only defer when there's no game and a
  // specific quest is clearly the target.
  if (wantsStart && startGame && !(!game && top && top.s >= 6)) {
    const mains = QUESTS.filter(x => x.game === startGame && x.type === "main").sort((a, b) => a.id - b.id).slice(0, 5);
    const spine = mains.length ? mains : QUESTS.filter(x => x.game === startGame).sort((a, b) => a.id - b.id).slice(0, 5);
    if (spine.length) {
      return { content: `The main story is your through-line in ${startGame} — follow it and take side quests as you go. Early on:\n\n${spine.map(listLine).join("\n")}\n\nAsk about any one by name, or say "what's next" after a quest to keep going.`,
        context: { lastQuest: spine[0], lastGame: startGame } };
    }
  }

  const diff = /\b(hard|hardest|difficult|toughest|high)\b/.test(lc) ? "High"
    : /\b(medium|moderate|average|normal)\b/.test(lc) ? "Medium"
    : /\b(easy|easiest|low|simple|beginner)\b/.test(lc) ? "Low" : undefined;
  const len = /\b(short|shortest|quick|fast)\b/.test(lc) ? "short"
    : /\b(long|longest)\b/.test(lc) ? "long" : undefined;
  const wantsVideo = /\bvideo\b/.test(lc);
  const isListy = /\b(list|show|recommend|suggest|which|what|any|some|best|top|browse)\b/.test(lc);

  const pool = game ? QUESTS.filter(x => x.game === game) : QUESTS;

  // Filtered listing: a game/difficulty/length request without one clear target.
  if ((game || diff || len || wantsVideo) && (isListy || !top || top.s < 6)) {
    const list = pool
      .filter(x => (!diff || x.difficulty === diff) && (!len || x.length === len) && (!wantsVideo || !!x.video))
      .sort((a, b) => DIFF_RANK[b.difficulty] - DIFF_RANK[a.difficulty])
      .slice(0, 5);
    if (list.length === 0) {
      return { content: "I couldn't find quests matching that combination. Try a game name with a difficulty, like \"hard Elden Ring quests\".", context: game ? { lastGame: game } : ctx };
    }
    const label = [diff && `${diff}-difficulty`, len && `${len}`, wantsVideo && "video", game].filter(Boolean).join(" ");
    return { content: `Here ${list.length === 1 ? "is" : "are"} ${list.length} ${label || "matching"} quest${list.length === 1 ? "" : "s"}:\n\n${list.map(listLine).join("\n")}\n\nAsk about any one by name for the full breakdown.`,
      context: { lastGame: game ?? ctx.lastGame } };
  }

  // Strong single match → full quest answer.
  if (top && top.s >= 6) return { content: detail(top.q), quest: top.q, context: { lastQuest: top.q, lastGame: top.q.game } };

  // Weak matches → offer the closest quests.
  const sugg = scored.filter(x => x.s > 0).slice(0, 3);
  if (sugg.length) {
    return { content: `I'm not certain which quest you mean — these look related:\n\n${sugg.map(x => `• ${x.q.title} — ${x.q.game}`).join("\n")}\n\nAsk about one by name and I'll give you the tips and walkthrough.`,
      context: game ? { lastGame: game } : ctx };
  }

  const names = Object.keys(GAMES);
  return { content: `I don't have a quest matching that yet. I cover ${names.length} games including ${names.slice(0, 4).join(", ")} and more — try naming a game or a quest title.`, context: ctx };
}
