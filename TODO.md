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
1,443 of 2,475 quest `video` fields (as of 2026-10-13) are YouTube *search*
URLs (`results?search_query=…`). **1,440 of them now have a proposed
`watch?v=` link** in `docs/video-candidates/` (18 games). The other 3 (#108,
#1432, #2461) have no single matching video. All candidates await the owner's review on
https://claude.ai/artifact/J76YaqKJqtKN2krU1zpAhq — ship one PR per game the
owner marks done, swapping out flagged links. See PROGRESS.md "Session
2026-10-11 → 13".

## AC Odyssey entries no guide could confirm (Phase 3 leftovers)
~96 AC Odyssey entries still have only 1–3 generic steps because no guide
found during Phase 3 (2026-10-14) confirmed their details — writing steps
would mean guessing. Full lists are in PROGRESS.md (Phase 3 batch notes):
obscure side quests (Kingfisher chain, Speak No Evil, The Long Game, …),
6 romances, 7 Lost Tales, ~30 island/Peloponnese Ainigmata Ostraka, 3 tombs,
Medusa, Kallias and The Ghost of Kosmos. Owner: verify in-game or with a
video, or decide to leave them as is.

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
