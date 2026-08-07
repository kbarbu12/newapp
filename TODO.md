# TODO — owner: @kbarbu12

Work parked for the repo owner to do (things the agent environment can't).

## ~~Chapter/act naming per game~~ — DONE 2026-08-06
Each game now names its divisions with its own term (Realms, Districts, Planets,
Archstones, Arcs, Questlines, Acts, Chapters, Regions), with a matching Library
filter and sort. See PROGRESS.md §0 "Phase 1b".

## Game-verification roadmap (agent-driven; owner promotes to prod)

Each game gets the full treatment: verify fields → enrich thin walkthroughs →
completeness check → QA → PR into `staging`. Owner says the word to promote to
prod. Where authoritative wikis are egress-blocked, the owner supplies a JSON
quest list (as done for Pillars and Persona 5 Royal).

- ~~**Phase 1 — quick wins**: Pillars I, Pillars II, SW Jedi: Fallen Order,
  Black Myth: Wukong, Persona 5 Royal (+ SW Jedi: Survivor, folded in)~~ —
  **DONE 2026-08-07**, shipped to prod as `v2.2.0` (PRs #76, #77, #78; Fallen
  Order + Survivor verified complete with no changes).
- ~~**Phase 2 — mid-size**: Horizon Forbidden West, Metaphor: ReFantazio,
  Ghost of Yotei~~ — **DONE 2026-08-07**, shipped to prod as `v2.3.0` (PRs #81,
  #82; Ghost of Yotei verified complete with no changes). *(SW Jedi: Survivor
  was already verified in Phase 1.)*
- ~~**Phase 3 — large**: AC Valhalla, Cyberpunk 2077, Skyrim~~ — **DONE
  2026-08-07**. Skyrim shipped a compliance fix to prod as `v2.3.1` (PR #85);
  AC Valhalla and Cyberpunk 2077 verified complete/accurate with no changes.
- **Phase 4 — mega (one game per branch)**: Zelda: Tears of the Kingdom (253),
  AC Odyssey (353).

### Known data gap to fix (flagged during Phase 1 verification sweep)
- ~~**Skyrim**: 54 entries have only a search-URL `video` and no `walkthrough`~~
  — **FIXED 2026-08-07** in Phase 3 (PR #85, `v2.3.1`).

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
