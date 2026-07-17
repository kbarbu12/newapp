# Changelog

Prod (`main`) deploys, newest first. Each entry lists the shipped PR(s) and a
short summary of what changed. See `DEPLOY.md` for the staging → prod flow.

## 2026-07-17

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
