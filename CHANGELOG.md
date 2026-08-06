# Changelog

Prod (`main`) deploys, newest first. Each entry lists the shipped PR(s) and a
short summary of what changed. See `DEPLOY.md` for the staging → prod flow.

## 2026-07-18

- **Add quest-type Category filter to Assassin's Creed Valhalla (England Arc)**
  (PRs #43, #44) — reclassified all 142 Valhalla entries' `category` from
  granular story-arc names into five quest-type buckets (Main Story · England
  Arc · Mythology · Vinland Saga · Order of the Ancients) and preserved each
  original arc name in a new `arc` field (passed through `gen-data.mjs`). Adds a
  **Category** sub-filter alongside the existing **Region** filter in the
  Valhalla `subFilterConfig`.
- **Add Assassin's Creed Odyssey (353 entries) with Category & Region filters**
  (PR #42) — new game with the complete base-game catalog: 72 main-story quests,
  118 side quests, 10 Lost Tales of Greece, 43 Cult of Kosmos, 8 Legendary
  Beasts, 4 Mythical Creatures, 16 Romances, 22 Tombs, 60 Ainigmata Ostraka,
  each enriched with summary, aiTip, difficulty, length, reward and a
  step-by-step walkthrough. 349/353 entries carry a real, dedicated
  `youtube.com/watch?v=` walkthrough video (the 4 without share names with
  Ainigmata Ostraka riddles and keep authored walkthroughs). Expands the
  redesign with game-driven **Category** and **Region** sub-filters (new
  `category` field passed through `gen-data.mjs`; regions normalized to a
  canonical set), and registers the game in `gameImages` + `subFilterConfig`
  with cover art.

## 2026-07-17

- **Exempt CHANGELOG/TODO edits from the one-PR-per-change rule** (PR #41) —
  pure `CHANGELOG.md`/`TODO.md` edits now ride along with the change they
  describe instead of requiring a dedicated PR.
- **Add TODO list for deferred owner work** (PR #40) — added `TODO.md` tracking
  the deferred live-site prod QA (rule 3, blocked by the environment network
  policy) and the merged branches awaiting manual deletion.
- **Add QA & release rules and this changelog** (PR #39) — CLAUDE.md now requires
  a QA test after every staging push, a changelog entry after every prod deploy,
  and a QA test after every prod deploy. Added `CHANGELOG.md` (this file) and
  backfilled the day's earlier deploys.
- **Add PR template and require a titled PR per change** (PR #38) — added
  `.github/pull_request_template.md` (type-of-change, quest-data checklist,
  verification, deploy target) and a CLAUDE.md rule that every change ships as
  its own PR titled after the change.
- **Add Assassin's Creed Valhalla (142 quests)** (PR #37) — new game with 142
  fully enriched base-game main-arc quests (summary, aiTip, location, difficulty,
  length, reward, step-by-step walkthroughs), registered in `gameImages` and a
  22-region `subFilterConfig`. Includes a difficulty-value fix (`Easy` → `Low`)
  caught during QA rendering.
