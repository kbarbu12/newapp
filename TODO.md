# TODO — owner: @kbarbu12

Work parked for the repo owner to do (things the agent environment can't).

## ~~Chapter/act naming per game~~ — DONE 2026-08-06
Each game now names its divisions with its own term (Realms, Districts, Planets,
Archstones, Arcs, Questlines, Acts, Chapters, Regions), with a matching Library
filter and sort. See PROGRESS.md §0 "Phase 1b".

## Game-verification roadmap — COMPLETE (2026-08-07)
All 24 games verified across Phases 1–4 (prod `v2.2.0` → `v2.3.1`). Details in
`PROGRESS.md` (§ "Game-verification roadmap") and `CHANGELOG.md`.

## Upgrade quest videos from search URLs to real `watch?v=` links — IN PROGRESS
Converting quest `video` fields from YouTube *search* URLs
(`results?search_query=…`) to specific `watch?v=` deep links. Best-effort,
per-game: links are sourced via `WebSearch` filtered to `youtube.com` but
**cannot be verified by watching** (YouTube is egress-blocked), so every
assigned link needs an owner eyeball. Work lands on branch
`claude/youtube-games-progress-mft1ss`, one commit per game, audit clean.

**Owner action:** review the per-game link list (the `video-check-ALL-games.md`
doc shared in chat) and reply with `questID -> replacement link` for any wrong
matches.

**Progress: 1,304 of 2,518 quests now on real `watch?v=` links; ~1,214 search
URLs remain across 10 games.**

Done (0 search URLs left, converted this effort):
- Black Myth: Wukong (39), Elden Ring (70), Demon's Souls (25), Star Wars Jedi:
  Survivor (90), Ghost of Tsushima (71), Final Fantasy VII Rebirth (74),
  Metaphor: ReFantazio (76), Persona 5 Royal (66), Assassin's Creed Odyssey (353).
- Sekiro: Shadows Die Twice (66/67) — 1 fallback left: `[1820] Six-fingered Lord
  Kuranosuke` maps to no real Sekiro boss; needs a **data rename**, not a video.
- (Already real from earlier verification: Hogwarts Legacy, God of War Ragnarök,
  FF7 Remake, Star Wars Jedi: Fallen Order.)

Remaining (10 games, ~1,214 videos): Ghost of Yotei (110), Baldur's Gate 3 (87),
The Witcher 3 (81), Horizon Forbidden West (64), Pillars of Eternity (114),
Pillars of Eternity II (125), Cyberpunk 2077 (128), AC Valhalla (142),
Skyrim (145), Zelda: Tears of the Kingdom (217). Next up: Horizon Forbidden West.

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
