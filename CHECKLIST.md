# RPG Quest Guide — Launch & Improvement Checklist

> 📊 **Live progress, per-game coverage tracker, and roadmap now live in [`PROGRESS.md`](PROGRESS.md).**
> This file tracks launch/platform tasks; `PROGRESS.md` tracks quest-content coverage.
>
> **Status legend:** ✅ done · 🟡 done but not verified against a guide · 🔴 not started / sample only

## 🔜 Resume here — quest-expansion work (paused Jul 4)
Library is at **949 quests / 15 games**, integrity clean (`node ps5-rpg-sidequest-summarizer/tools/audit.mjs`).

**Done this session (accuracy-safe — only names verified across guides were added):**
- [x] Built the audit + guide-diff tool (`tools/audit.mjs`, offline cache path) — see roadmap #7.
- [x] Fixed 2 non-standard video links (Panam Palmer's Questline, The Daunt Errands).
- [x] Black Myth: Wukong 37 → **39** (added Bullguard, Guangmou).
- [x] Elden Ring 54 → **65** (+Godfrey/Hoarah Loux, Godskin Duo, 9 NPC questlines).
- [x] Baldur's Gate 3 47 → **56** (+9 quests: Artefact, Ruins/Withers, Volo, Githyanki Egg,
      Barcus, Masterwork Weapon, Vanra, Ansur/Wyrmway, Karlach's Hellion's Heart).
- [x] Replaced POE 1 & 2 placeholder covers with themed SVG art.

**To continue (in priority order) — each is gated on getting the full canonical list:**
- [ ] **Black Myth: Wukong → ~91 bosses** (currently 39). Blocked: minor "Yaoguai Chief" names
      conflict across reachable guides. Needs the Fextralife/Fandom BMW boss list pasted into
      `tools/guide-cache/black-myth-wukong.txt`, then `audit.mjs --diff`.
- [ ] **Baldur's Gate 3 → ~100+** (currently 56). Remaining = many minor Act 3 Lower City quests;
      names are documented but numerous — paste the `bg3.wiki` quest list to finish exhaustively.
- [ ] **Persona 5 Royal → ~95** (currently 44). Gap is the ~65 individual **Mementos Requests**
      collapsed under one umbrella — stably named on Game8; paste that list for a clean pass.
- [ ] **Ghost of Tsushima → ~80** (currently 71). Remaining = standalone **Tales of Tsushima**
      not tied to a companion.
- [ ] **🔴 completeness games** — Pillars of Eternity I & II, Metaphor: ReFantazio are still
      "sample only"; enumerate their full quest lists (paste or egress).
- [ ] **The general blocker:** all wiki/guide hosts return 403 (see "Action needed" below).
      Enabling egress **or** pasting per-game lists into `tools/guide-cache/` unblocks every item
      above; then a single `audit.mjs --diff` per game generates the exact gap list to fill.

## 👤 Action needed from you — enable guide-host egress (unblocks exhaustive completion)
The scripted wiki fetch-and-diff (`tools/audit.mjs --diff`) needs outbound access to the
guide/wiki hosts. Every one of them currently returns **403** at the environment egress proxy,
and that policy can only be changed by you, from outside the session. Steps:

- [ ] **1. Open the environment's network policy** — Claude Code on the web → the environment
      running this repo → settings. Docs: https://code.claude.com/docs/en/claude-code-on-the-web
- [ ] **2. Allow the guide hosts** — choose a **full/trusted egress** policy, *or* a custom
      allowlist that includes these two globs (they cover all 14 hosts the tool targets):
      `*.fandom.com` and `*.wiki.fextralife.com`
- [ ] **3. Start a fresh session** on the reconfigured environment (same repo, branch
      `claude/guide-host-egress-env-qtgou9`). Egress is fixed when a container starts, so a
      running session won't pick up the change — a new session will.
- [ ] **4. Run the diff** — in that session: `node ps5-rpg-sidequest-summarizer/tools/audit.mjs --diff`
      → produces the per-game review list; then Claude fills the verified gaps game by game.

> **Alternative that needs no egress:** paste a game's full wiki quest list into chat (or save
> it under `ps5-rpg-sidequest-summarizer/tools/guide-cache/<game-slug>.txt`) and run
> `--diff` — the tool diffs against the pasted list directly. See `tools/README.md`.

## ✅ Done
- [x] Site live on GitHub Pages (https://kbarbu12.github.io/newapp/)
- [x] Rename site to "RPG Quest Guide"
- [x] SEO meta tags, Open Graph, Twitter cards, JSON-LD
- [x] sitemap.xml + robots.txt
- [x] Google Search Console verification + sitemap submitted
- [x] Favicon + social preview image
- [x] Walkthrough video links on all quests
- [x] Video copyright disclaimer (footer + per card)
- [x] Dynamic page title on game filter
- [x] Fix card banner images (no cropping)
- [x] Expand quest library to 199 quests (~15 per game)
- [x] Full coverage pass — Cyberpunk 2077 (20 → 76) and FF7 Rebirth (18 → 57)
- [x] Full coverage pass — Witcher 3 (15 → 49), God of War Ragnarök (14 → 48), Horizon FW (14 → 41)
- [x] Full coverage pass — Persona 5 Royal (14 → 37), Ghost of Tsushima (13 → 35), Hogwarts Legacy (14 → 42)
- [x] Library now at 516 quests across 15 games (8 games fully covered)
- [x] Cyberpunk 2077 deep-fill (76 → 148): remaining main jobs, side jobs, ~37 gigs, Phantom Liberty
- [x] Deep-fill all 8 covered games (Witcher 3 full main story, FF7 World Intel/minigames/summons, GoW favors, Horizon, P5R Confidants/Mementos, Ghost tales, Hogwarts class/side quests) — library now **717**
- [x] Deep-fill the last 4 games (Metaphor, Demon's Souls, Pillars of Eternity, Deadfire) — library now **786**; 12 of 15 games deep-filled
- [x] Deep-fill BG3, Elden Ring (+ full Shadow of the Erdtree DLC), and Black Myth: Wukong — **all 15 games now deep-filled; library at 844 quests**
- [x] Add "Shadow of the Erdtree (DLC)" option to the Elden Ring region sub-filter
- [x] Per-game sub-filters for 13 of 15 games (District/Region/Realm/Archstone) + back-filled region tags on older entries
- [x] Video audit: all 844 walkthrough links verified to capture their own quest (43 generic/shared videos replaced)

## 🚧 Quest Detail Pages (current focus)
- [x] **Phase 1 — Core detail page**: clickable cards → `#quest-42` hash URL → detail view, back button support, shareable links
- [ ] **Phase 2 — Sidebar extras**: related quests from same game, "Buy this game" buttons (placeholder links until affiliate signup)
- [ ] **Phase 3 — SEO polish**: per-quest page title + meta description, game grouping headers in "All games" view
- [ ] **Phase 4 — Static quest pages**: generate real static HTML pages per quest for full Google indexing (do once site gains traction)

## 📋 Backlog
- [ ] **Connect the feedback box** — the "Share your feedback" section is built and
      live (`src/feedback.js`, Web3Forms integration), but needs a free Web3Forms
      access key to actually deliver mail to k.barbu12@gmail.com. To finish:
      get a key at https://web3forms.com (enter k.barbu12@gmail.com), paste it into
      `ACCESS_KEY` in `src/feedback.js`, confirm the one-time verification email,
      then send a live test. Until then the form shows an "email us directly" fallback.
- [ ] Real cover images for Pillars of Eternity 1 & 2
- [ ] Bing Webmaster Tools setup
- [ ] Sign up for Amazon Associates / GOG affiliate program
- [ ] Swap placeholder buy-links for real affiliate links
- [ ] Apply for Google AdSense (needs traffic first)
- [ ] Quest completed tracker (localStorage)
- [ ] Add more games (Skyrim, Dark Souls, Dragon Age)

## 🧭 Coverage Protocol (apply to every game)
When adding or expanding a game, cover **everything tied to it**, not just a sample:
- [ ] Main story (all chapters / main jobs / acts)
- [ ] All named side quests / side jobs / odd jobs
- [ ] Repeatable/system content (gigs, cyberpsycho sightings, world intel, hunts, bounties)
- [ ] DLC / expansion content (e.g. Phantom Liberty, Shadow of the Erdtree)
- [ ] Secrets, legendary items, and endings
- [ ] Verify against a canonical guide (PowerPyx / Game8 / Fextralife) before marking done

**All 15 games are deep-filled ✅** — see `PROGRESS.md` for the full per-game tracker and optional polish items.

### 🔎 Accuracy audit (in progress)
Beyond deep-fill, a name-by-name accuracy audit against canonical guides is underway:
- [x] Pillars of Eternity, Pillars of Eternity II: Deadfire, Demon's Souls, Metaphor: ReFantazio
      — guide-audited (13 misattributed/fabricated quest names fixed; see `PROGRESS.md` §2).
- [~] **Black Myth: Wukong — checked (Jul 4), partially expanded.** Verified our 37 entries cover
      all 6 chapter finales + major Yaoguai Kings; added 2 name-verified Chapter 1 bosses
      (Bullguard, Guangmou → 39). Game has ~91 bosses total (11-12/17/21/15/14/12 per chapter);
      the remaining ~50 are minor "Yaoguai Chief" bosses whose English names **conflict across the
      reachable guides** (localization variants) — gated on the 403-blocked Fextralife/Fandom wiki.
      Paste that list into `tools/guide-cache/black-myth-wukong.txt` (or enable egress) to finish.
- [~] **Elden Ring — audited + expanded (Jul 4, 54→65).** Existing entries verified accurate;
      added 11 unambiguously-named missing entries: main boss **Godfrey/Hoarah Loux**, the
      **Godskin Duo** boss, and NPC questlines **Roderika, Gurranq (Deathroot), Seluvis,
      Irina & Edgar, Blaidd, Warmaster Bernahl, D Hunter of the Dead, Thops, Jar Bairn**.
      (ER names are stable across guides, so no localization ambiguity blocked this.)
- [~] **Baldur's Gate 3 — audited + expanded (Jul 4, 47→56).** Added 9 well-documented missing
      quests: **The Mysterious Artefact** (main), and side quests **Explore the Ruins** (Withers),
      **Rescue Volo, The Githyanki Egg, Save Barcus Wroot, Finish the Masterwork Weapon** (Act 1),
      **Save Vanra, The Legend of Ansur/Wyrmway, Karlach — The Hellion's Heart** (Act 3).
      Still short of the full ~100+ (many minor Act 3 city quests remain) — a complete pass wants
      the bg3.wiki quest list pasted into `tools/guide-cache/baldur-s-gate-3.txt`.
- [x] Automate the audit (integrity + per-game count diff) so status is generated, not hand-kept.
      → `ps5-rpg-sidequest-summarizer/tools/audit.mjs` (Node, no deps). Integrity checks run
        offline and gate on a non-zero exit; the `--diff` step fetches canonical guide pages
        once guide-host egress is enabled. First run found + fixed 2 non-standard video links.

## 📣 Marketing
- [ ] Post in game subreddits (r/Eldenring, r/witcher, r/GhostOfTsushima…)
- [ ] Share in game-specific Discord servers
- [ ] Twitter/X account for daily quest tips
- [ ] TikTok/YouTube Short showing the site
