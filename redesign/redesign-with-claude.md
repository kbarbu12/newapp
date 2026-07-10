# RPG Quest Guide — Redesign Implementation Spec

Reference mockup: `RPG Quest Guide Redesign.dc.html` (Screens 1–4).
Goal: apply the redesign to the existing live app without changing its data model or routing. This is a **visual + component** refactor, not a rewrite.

---

## 1. Design tokens

Define these once (CSS variables / theme file) and replace ad-hoc colors throughout.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0b0c10` | app background |
| `--surface` | `#111217` | panels, headers |
| `--card` | `#15161b` | quest cards |
| `--card-2` | `#181920` | inset boxes, filter chips, meta stat boxes |
| `--border` | `#212228` / `#26272d` | card / inset borders |
| `--hairline` | `#1e1f24` | section dividers |
| `--text` | `#e7e6e2` | body text |
| `--text-hi` | `#f3ede1` | headings |
| `--text-dim` | `#8a8a92` | secondary |
| `--text-mute` | `#77767c` | tertiary / labels |
| `--gold` | `#d9a441` | accent (keep existing gold) |
| `--gold-ink` | `#171208` | text on gold |
| `--tip-bg` / `--tip-border` | `#1b1509` / `#3a2c10` | tip callout |

Difficulty chip colors:
- High → bg `#3a1414`, text `#e77`
- Medium → bg `#3a2a0d`, text `#e0a44a`
- Low → bg `#123a1e`, text `#5cd98a`

## 2. Typography — reduce to TWO fonts

Remove the mono/pixel font entirely. Standardize on:
- **Display** (all headings, quest titles, game title): `Cormorant Garamond`, weight 700.
- **UI / body** (everything else — labels, chips, meta, buttons, descriptions): `Inter`, weights 400–700.

Kill all-caps + letter-spacing on the mono labels; keep small uppercase labels only for the tiny section eyebrows (`BROWSE BY GAME`, `DIFFICULTY`, etc.) at ~11px / 700 / `--text-mute`.

Min sizes: body 13–14px, card description 13px, section headings 20px+.

---

## 3. Screen 1 — Browse / Quest Library

**Quest cards (the big fix):**
- Remove the redundant game-name label ("GOD OF WAR RAGNARÖK") from every card when inside a single-game library.
- **Fix the broken/duplicated thumbnail.** Each card uses the game's key art (or per-quest art if available), `object-fit: cover`, with a top-to-bottom dark gradient overlay so the title is legible. No repeated Kratos crop, no red-circle artifact.
- Quest **title overlays the image** bottom-left (Cormorant, ~19px, white).
- Below image: 2-line clamped description, then a chip row: `Type` · `Difficulty` (colored) · `⏱ Length`.
- Card: `--card` bg, `1px --border`, radius 12px.

**Progress:** replace the thin top-right bar with a **gold ring + "0 / 68 done"** pill (`--card-2` bg) in the library header. This is core value for a companion app — keep it prominent.

**Filters:** collapse the four filter groups into a single row: search field (flex-grow) + a **"Filters" button with an active-count badge** + Sort dropdown + result count. (On desktop you can keep inline groups if preferred, but the button pattern is what mobile uses.)

**Browse-by-game rail:** unchanged pattern; active game gets a 2px gold border.

---

## 4. Screen 2 — Quest Detail (canonical modal)

This layout is the **single source of truth** for the quest detail — reuse the same component on every screen (desktop modal, mobile full-screen). Two-column on desktop (`1fr / 300px`), single-column stacked on mobile.

**Header:** full-bleed hero image (game key art, `opacity ~.55`, gradient to `--surface`) replacing the small floating box-art. Overlaid: eyebrow `GAME · SIDE QUEST`, then quest title (Cormorant ~36px). Close button top-right.

**Main column (order):**
1. Meta grid — 4 stat boxes: Difficulty (colored), Duration, Location, Region.
2. **Quest Summary** — heading + paragraph.
3. **Tip** callout — gold-tinted box (`--tip-bg`/`--tip-border`).
4. **Reward** line.
5. **Step-by-Step Walkthrough** — numbered steps. **Show this section when the quest has no video** (written fallback). Each step = gold numbered chip + text.

**Sidebar (order):**
1. **Watch Walkthrough** — gold "Watch on YouTube" button + "not affiliated" disclaimer. (If no video, this card is replaced by the walkthrough section above, matching current behavior.)
2. **About the Game** — "This quest is part of **<game>**" + **"🛒 Buy the game"** button (affiliate link). Remove the old "buy links … coming soon" placeholder text.
3. **Mark Progress** — "✓ Mark done" + save (☆) toggle.

Conditional logic:
- `hasVideo` → show Watch card, hide walkthrough section.
- `!hasVideo` → hide Watch card, show Step-by-Step Walkthrough.
- Both cases still show About the Game + Mark Progress.

---

## 5. Screen 3 — Mobile / PWA

**Browse:** single-column cards (thumbnail left ~96px, content right), sticky header with game title + progress pill, search + Filters button row, bottom tab bar (Library / Saved / Settings).

**Detail:** full-screen, **identical content to Screen 2** — same meta grid, summary, tip, reward, Step-by-Step Walkthrough, About the Game + Buy. Body scrolls; a **sticky bottom action bar** pins "▶ Watch" + "✓ Mark done". Back (‹) and save (☆) float over the hero.

> Requirement: the detail is ONE shared component. Opening a quest from Library, Saved, or search must render the exact same modal on every screen.

---

## 6. Screen 4 — Saved

- Quests **grouped by game** with a game eyebrow + count divider.
- Each row: thumbnail + title + chip row. **Include Duration** (⏱ chip on desktop; on mobile shown inline as `⏱ Medium · Not done`).
- Right side: **done / not-done status** (green when done) + filled gold ★ to unsave.
- Mobile Saved = same grouped list under the Saved tab, compact rows.

---

## 7. Global cleanup
- Remove **all** "coming soon" / placeholder copy from the live UI.
- Bump low-contrast gray body text on cards up to `--text` for readability (mobile/sunlight).
- Spacing: use flex/grid with `gap` for all chip rows, meta grids, and card lists (not margins on siblings).

## 8. Suggested component boundaries
- `QuestCard` (grid + mobile-row variants)
- `QuestDetail` (the canonical modal — used in modal + full-screen contexts)
- `DifficultyChip`, `MetaStat`, `SectionEyebrow`
- `ProgressRing`
- `SavedGroup` / `SavedRow`
