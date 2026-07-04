# guide-cache/

Optional. Drop a game's full quest list here to diff **without** guide-host egress.

- File name: the game's slug + `.txt` (or `.html` / `.md`). The slug is the game
  name lowercased with non-alphanumerics turned to `-`, e.g.:
  - `Baldur's Gate 3` → `baldur-s-gate-3.txt`
  - `Elden Ring` → `elden-ring.txt`
  - `Hogwarts Legacy` → `hogwarts-legacy.txt`
- Content: paste the wiki list as-is (raw text or copied HTML). One quest name per
  line is ideal, but the diff also parses `<a>`/`<li>`/`<b>` from pasted HTML.

Then run `node tools/audit.mjs --diff`. A cached file takes priority over fetching,
so this path needs no network at all.

Committing a cache file is optional — it's fine to keep them local.
