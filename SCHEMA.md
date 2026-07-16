# Quest data schema (for adding a new game)

This is the contract for the JSON you hand Claude when adding a new game to the
sidequest summarizer. If every quest fills every required field below, the merge
into `ps5-rpg-sidequest-summarizer/data/quests.js` is mechanical and passes
`ps5-rpg-sidequest-summarizer/scripts/audit.js` (the CI gate) on the first try.

A ready-to-edit example lives in [`sample-game.json`](./sample-game.json).

## Top-level shape

```json
{
  "game": "The Elder Scrolls V: Skyrim",
  "gameImage": { "gradient": "...", "abbr": "TES5", "cover": "images/skyrim.svg" },
  "subFilter":  { "field": "category", "label": "Questline", "options": [ ... ] },
  "quests":     [ { ...quest... }, ... ]
}
```

- **`gameImage`** → added to `gameImages` in `quests.js`. `gradient` is a CSS
  `linear-gradient(...)`, `abbr` is a short tag (e.g. `TES5`), `cover` is a path
  under `images/`. If the cover image doesn't exist yet, omit it and Claude will
  generate an SVG placeholder like `images/skyrim.svg`.
- **`subFilter`** → added to `subFilterConfig`. `field` is the quest field the UI
  filters on (`category`, `region`, `act`, `chapter`, …). Every quest's value for
  that field **must** match one of the `options[].value` strings. A game may use
  an array of two filter configs (see Baldur's Gate 3 / Jedi: Survivor) if it
  needs two filters.

## Per-quest fields

Every field is **required and must be non-empty** unless marked otherwise.

| Field | Rules |
|---|---|
| `type` | `"main"` or `"side"`. |
| `<filter field>` | The field named by `subFilter.field` (e.g. `category`). Value **must exactly match** one `subFilter.options[].value`. |
| `title` | **Unique within the game.** No two quests may share a title — add a parenthetical to disambiguate variants. |
| `location` | Free text (e.g. `"Riften"`). |
| `length` | `"short"` \| `"medium"` \| `"long"`. |
| `difficulty` | `"Low"` \| `"Medium"` \| `"High"`. |
| `reward` | Short string. |
| `summary` | 1–2 sentences: what the quest is and why it matters. |
| `aiTip` | 1 sentence of practical player advice. |
| `walkthrough` | Array of step strings. Always include it. |
| `video` | *Optional.* `https://` URL, **unique across the whole game**. See below. |

### The `video` rule (the common mistake)

- `video` is a **required field in `quests.js`**, but you may **omit it in the
  JSON** — Claude fills a unique YouTube *search* URL automatically (that's what
  every game's non-video quests use).
- If you provide one, it must be a real, quest-specific
  `https://www.youtube.com/watch?v=…` link.
- **Never reuse the same `watch?v=` link on more than one quest.** The audit
  rejects reused videos as an error. A single generic longplay pasted onto many
  quests will fail CI. One unique real link per quest, or leave it out.

## What Claude fills / drops

- **`id`** — do **not** send one. Claude renumbers from the current max id in the
  file so ids stay unique.
- **Dropped** (not part of the schema): `slug`, `dlc`, `description` (send it as
  `summary`), `completionTips`, `prerequisites`, `rewards` (use singular
  `reward`), and any `video: { available, url, label }` object (send `video` as a
  plain string, or omit).

## The one judgment call

The slow part is authoring `location / length / difficulty / reward / summary /
aiTip / walkthrough` when the source doesn't have them. If your JSON already
fills these, the merge is fast. If not, Claude researches and writes them from
game knowledge — send whatever you do have so Claude is correcting rather than
inventing.
