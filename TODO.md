# TODO — owner: @kbarbu12

Work parked for the repo owner to do (things the agent environment can't).

## ⚠️ Reminder to raise next session — chapter/act naming per game
@kbarbu12 asked (2026-08-06) to be reminded, next time we work on the redesign,
to split each game's quests into **chapters / acts / whatever that game calls
its quest divisions** and name the groups with that game's native term (Acts,
Chapters, Regions, Realms, Episodes…), refining the current
`arc → region → category → Part N` derivation. See PROGRESS.md §0.

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
