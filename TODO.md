# TODO — owner: @kbarbu12

Work parked for the repo owner to do (things the agent environment can't).

## ~~Chapter/act naming per game~~ — DONE 2026-08-06
Each game now names its divisions with its own term (Realms, Districts, Planets,
Archstones, Arcs, Questlines, Acts, Chapters, Regions), with a matching Library
filter and sort. See PROGRESS.md §0 "Phase 1b".

## Game-verification roadmap — COMPLETE (2026-08-07)
All 24 games verified across Phases 1–4 (prod `v2.2.0` → `v2.3.1`). Details in
`PROGRESS.md` (§ "Game-verification roadmap") and `CHANGELOG.md`.

## Upgrade quest videos from search URLs to real `watch?v=` links
1,572 of 2,518 quest `video` fields are YouTube *search* URLs
(`results?search_query=…`) rather than specific `watch?v=` deep links. They
work (they open the right search), but a specific video is better UX. Real IDs
can be sourced via `WebSearch` filtered to `youtube.com`; can't be verified by
watching, so this is a best-effort, per-game effort. Largest buckets: Zelda TotK
(217), Skyrim (145), AC Valhalla (142), Cyberpunk (128), Pillars II (125).

## Enable live-site prod QA (defers CLAUDE.md rule 3)
The "QA prod after every deploy" rule currently runs against the **local prod
build** only, because this environment's network policy blocks the live
`kbarbu12.github.io` host (the agent proxy returns 403 for it). To make the
rule verify the *real* deployment:
- Allowlist `kbarbu12.github.io` in the environment's network policy, then
- QA can load the live `/newapp/` URL after each prod deploy (routing, DNS,
  Pages artifact) instead of a local server.

Until then, prod QA = `npm run build:prod` + local headless render.

## Delete merged branches (agent can't; git proxy rejects ref deletion)
These are merged into `main` and safe to delete via the GitHub UI:
- `claude/ps5-rpg-sidequest-summarizer-xaidg6` (PR #37 — Valhalla)
- `claude/add-pr-template` (PR #38 — PR template)
- `claude/qa-and-changelog-rules` (PR #39 — QA & release rules)
- `claude/add-todo` (PR #40 — this file, once merged)
