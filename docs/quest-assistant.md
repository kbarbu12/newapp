# Quest Assistant

The **Quest Assistant** is the chat widget in the bottom-right of the redesign
(the gold `✦` bubble). It answers questions about the quest library — quest
details, walkthroughs, difficulty breakdowns, what's missable, where to start —
grounded entirely in the shipped quest data.

It is **not an LLM.** There is no backend, no API key, no network call. It is a
small deterministic keyword-retrieval + intent-routing engine that runs fully
client-side, so answers are always traceable to a documented quest. This keeps
the site a static GitHub Pages deploy and keeps replies honest (it can only say
what the data says).

- **Engine:** `redesign/src/app/chatEngine.ts` — a pure function,
  `answerQuestion(raw, ctx)`.
- **UI:** the `ChatWidget` component in `redesign/src/app/App.tsx`.
- **Data:** `GAMES` / `QUESTS` from `redesign/src/generated/data.ts`, generated
  at build time from `ps5-rpg-sidequest-summarizer/data/quests.js` (see
  `scripts/gen-data.mjs`).

---

## How a turn works

```
answerQuestion(rawText, context) -> { content, quest?, context }
```

1. **Tokenize** the query: lowercase, strip punctuation, drop stop-words, and
   **stem** each token (light singularizer: `trials` → `trial`).
2. **Resolve games** named in the query (`findGames`) — by full name,
   abbreviation, or a title word unique to one game.
3. **Score** every quest in scope against the query terms (+ synonyms).
4. **Route** to the first matching intent (see below) and return a reply.

The reply carries a `context` object back to the widget, which stores it and
passes it into the next call — that's what makes follow-ups work. `ChatWidget`
holds the context in a `useRef`, so it drives the next answer without causing a
re-render.

### Scoring

`scoreQuest` sums weighted substring hits of the query terms against each quest:

| Field | Weight |
|---|---|
| title | 5 |
| location / region | 2 |
| summary | 1 |
| aiTip | 1 |

A score **≥ 6** is treated as a confident single-quest match (one title hit plus
any corroboration). Below that, the engine lists candidates or asks to narrow
down.

**Game-word stripping:** when the query names a game, the scoring pool is already
filtered to that game, so the game's own title words (`elden`, `ring`) carry no
signal and are removed before scoring. Without this, those words inflate every
quest's score and suppress filtered listings (e.g. "short Elden Ring quests"
would return a single quest instead of a list).

### Stemming & synonyms (Tier 4)

- `stem()` is a conservative singularizer applied in `tokenize`, so plural and
  singular phrasing match either direction.
- `SYNONYMS` maps a natural-language word to in-game terms, expanded **for
  scoring only** (`withSynonyms`). Expansion is additive, so a literal match
  still outranks a synonym-only one. Current map: `romance`, `boss`, `horse`,
  `weapon`, `armor`, `money`, `ending`, `puzzle`, `treasure`.

---

## Supported intents

Routed roughly in this order; the first match wins.

| Intent | Example query | Behavior |
|---|---|---|
| **Greeting / empty** | "hi" | Intro + example prompts. Resets context. |
| **Follow-up: attribute** | "what's its reward?", "is it missable?", "any tips?", "show me the walkthrough" | Answers about the *last* quest via `attributeAnswer`. |
| **Follow-up: what's next** | "what's next?", "after this?" | Walks to the next quest in the same story **arc** (arcs are authored in play order), else the next main-story quest. |
| **Compare two games** | "compare Elden Ring and Sekiro" | Side-by-side counts, High-difficulty totals, video coverage. |
| **Count** | "how many Witcher 3 quests?" | Count for a game, or library totals. |
| **Missable** | "which quests are missable in Cyberpunk" | Lists flagged quests + windows; honest message when none are flagged. |
| **Aggregate** | "how hard is Elden Ring", "difficulty breakdown" | Difficulty + length distribution for a game. |
| **Progression** | "where do I start in Baldur's Gate 3" | Presents the main-story quests as the through-line (see limitation below). |
| **Filtered listing** | "short hard Elden Ring quests", "quests with video" | Filters by game / difficulty / length / hasVideo; up to 5. |
| **Single quest** | "how do I finish Ranni's questline?" | Full breakdown (`detail`) + video link if any. |
| **Weak / none** | ambiguous text | Offers the closest candidates, or a coverage note. |

### Conversational memory (Tier 2)

`ChatContext = { lastQuest?, lastGame? }` is threaded in and out of every call.
A turn is treated as a **follow-up** only when it doesn't name a new game, isn't
a library-wide question ("…quests?", "recommend …"), and is either a
continuation ("yes", "more"), a pronoun ("its reward?"), or a short bare
attribute ("any tips?"). A **residual-token** check (attribute words removed)
prevents a real new query like "reward for Hearts of Stone" from being captured
as a follow-up about the previous quest.

---

## Missable data (Tier 3)

Missable status lives in the quest data, not the engine:

```js
{ …, missable: true, missableWindow: "Before Point of No Return" }
```

The set is **hand-curated and deliberately not exhaustive** — only quests whose
missability is well-documented and matched to an exact dataset title are flagged
(currently 18, across Baldur's Gate 3, Cyberpunk 2077, and The Witcher 3). For
an unflagged quest the assistant says the status is unknown and advises doing it
early, rather than implying it is safe.

**To flag another quest:** find its entry in
`ps5-rpg-sidequest-summarizer/data/quests.js`, add `missable: true` and a
`missableWindow` string, then regenerate (`npm run gen:data`, or any build). The
`gameImages`/audit pipeline handles the rest.

---

## Extending the engine

All in `redesign/src/app/chatEngine.ts`:

- **New synonym:** add an entry to `SYNONYMS`.
- **New intent:** add a routed block in `answerQuestion`, ordered so it doesn't
  shadow (or get shadowed by) an existing one; return `{ content, quest?,
  context }`.
- **Guarding against title collisions:** intents that key off generic words
  ("how long", "start") must not be hijacked by a strong specific-quest match.
  The pattern used throughout: only defer to a specific quest when **no game is
  named** and `top.s >= 6` (see the aggregate and progression guards).
- **New game:** no engine change needed — add it to the quest data and
  `gameImages`; `findGames` derives its identifier words automatically.

---

## Known limitations

- **No global play-order.** The data has story `arc`s for only some games, and
  quest `id` is authoring order, not story order. So the progression intent
  presents the main-story quests as a through-line **without** claiming a strict
  sequence; only arc-based "what's next" is truly ordered.
- **Missable coverage is partial** by design (see above).
- **Retrieval is keyword-based**, not semantic — it matches words, not meaning
  beyond the synonym map. Very oblique phrasings may fall back to candidate
  suggestions.

---

## Testing

There is no unit-test harness in the repo; the engine is verified by driving the
built app. Per `CLAUDE.md`, after any staging change: `npm run build:staging`,
serve `dist/staging`, and drive it headlessly (Chromium at `/opt/pw-browsers`) —
confirm the changed intents answer correctly and the console has zero page
errors. Ad-hoc engine checks can also be run directly against `chatEngine.ts`
with `npx tsx` from `redesign/`.
