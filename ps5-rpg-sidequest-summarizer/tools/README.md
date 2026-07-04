# tools/ — dataset audit & guide diff

Node ≥ 22, no dependencies (uses the bundled `undici` for proxy-aware fetch).

```bash
node tools/audit.mjs          # integrity audit + guide-host reachability probe
node tools/audit.mjs --diff   # + fetch canonical guide pages and diff titles
node tools/audit.mjs --json   # machine-readable report (for CI)
```

Exit code is non-zero when an **integrity** problem is found, so it can gate CI.

## What it checks (no network)

- duplicate / malformed quest IDs
- missing required fields (`id, type, game, title, length, difficulty, reward, summary, aiTip, video`)
- invalid `type` (must be `main` or `side`)
- duplicate quest titles within a game
- video-link format (must be a `watch?v=` or `results?search_query=` YouTube URL)
- the same hard-coded `watch?v=` reused across multiple quests (the "shared video" smell)
- per-game counts

## The `--diff` step (needs guide-host egress)

`tools/guide-sources.mjs` maps each game to its canonical wiki/guide page(s).
Those hosts are currently **blocked by the environment egress policy** (403 at
the proxy), so `--diff` is skipped with a message and the probe lists every host
as blocked.

**Offline alternative (no egress):** drop a game's quest list into
`tools/guide-cache/<game-slug>.txt` (raw text or copied HTML — see
`guide-cache/README.md` for the exact filenames) and run `--diff`. A cached file
takes priority over fetching, so a pasted list diffs with no network at all.

To use the live fetch, allow the hosts listed by `node tools/audit.mjs` in the
Claude Code on the web environment's **network policy**, then re-run with
`--diff`. Either way it reports, per game:

- **missingFromGuide** — titles we list that don't appear on the guide page
  (candidate fabrications / typos / mis-attributions — high signal).
- **candidateGaps** — prominent names on the guide page not in our list
  (candidate missing quests — best-effort, review before adding).

Nothing is auto-added: the diff produces a review list. Quest data is only ever
expanded from verified names, never fabricated.
