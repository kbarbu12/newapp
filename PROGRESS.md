# RPG Quest Guide — Progress & Roadmap

**Last updated:** 2026-07-03
**Branch:** `claude/continue-previous-task-ljm8v9`
**Live site:** https://kbarbu12.github.io/newapp/

---

## 1. Snapshot

- **Total quests in library:** **443** (was 253 at the start of this work — **+190**)
- **Games covered:** 15
- **Detail pages:** working (clickable cards → `#quest-N` → detail view, back button, shareable links)
- **Region/Act sub-filters:** live for Baldur's Gate 3, Elden Ring, Black Myth: Wukong, The Witcher 3

### Per-game coverage

| Game | Quests | Main | Side | Sub-filter | Coverage status |
|------|:------:|:----:|:----:|:----------:|-----------------|
| Cyberpunk 2077: Ultimate Edition | 76 | 22 | 54 | — | ✅ Full pass done |
| Final Fantasy VII Rebirth | 57 | 17 | 40 | — | ✅ Full pass done |
| The Witcher 3: Wild Hunt | 49 | 3 | 46 | ✅ | ✅ Full pass done |
| God of War Ragnarök | 48 | 12 | 36 | — | ✅ Full pass done |
| Horizon Forbidden West | 41 | 13 | 28 | — | ✅ Full pass done |
| Baldur's Gate 3 | 30 | 9 | 21 | ✅ | 🟡 Good, not audited |
| Elden Ring | 29 | 8 | 21 | ✅ | 🟡 Good, not audited |
| Black Myth: Wukong | 21 | 6 | 15 | ✅ | 🟡 Good, not audited |
| Hogwarts Legacy | 14 | 4 | 10 | — | 🔴 Needs full pass |
| Persona 5 Royal | 14 | 0 | 14 | — | 🔴 Needs full pass |
| Demon's Souls | 13 | 3 | 10 | — | 🔴 Needs full pass |
| Ghost of Tsushima | 13 | 3 | 10 | — | 🔴 Needs full pass |
| Pillars of Eternity | 13 | 3 | 10 | — | 🔴 Needs full pass |
| Pillars of Eternity II: Deadfire | 13 | 1 | 12 | — | 🔴 Needs full pass |
| Metaphor: ReFantazio | 12 | 0 | 12 | — | 🔴 Needs full pass |

Legend: ✅ full coverage pass complete · 🟡 solid but not yet audited against a guide · 🔴 sample only, needs a full pass

---

## 2. What has been done

### Full coverage passes (verified against public guides)
1. **Cyberpunk 2077** (20 → 76): base-game main jobs, side jobs, fixer gigs, **all 17
   Cyberpsycho Sightings**, and Phantom Liberty (Dogtown) main quests + gigs.
2. **FF7 Rebirth** (18 → 57): **all 14 main story chapters** + Odd Jobs across every
   region (Grasslands, Junon, Corel, Gongaga, Cosmo Canyon, Nibel) incl. Chapter 12 jobs.
3. **The Witcher 3** (15 → 49): secondary quests, witcher contracts, and treasure hunts
   across White Orchard, Velen, Novigrad, Skellige, Toussaint (Blood and Wine) and Hearts
   of Stone — all tagged by region so the existing region sub-filter now covers them.
4. **God of War Ragnarök** (14 → 48): main missions (The Path) + Favors across all nine
   realms, plus system content (Berserkers, Odin's Ravens, Nine Realms in Bloom, Muspelheim/
   Niflheim trials).
5. **Horizon Forbidden West** (14 → 41): main quests, side quests, errands, system content
   (Cauldrons, Rebel Camps, Hunting Grounds, Relic Ruins, Tallnecks, Arena, Machine Strike)
   and the Burning Shores DLC.

### Platform / structure
- Every new entry carries `region` (and `chapter` where relevant), which surface on both
  the card and the detail view.
- Added a **Coverage Protocol** to `CHECKLIST.md` so future game work is exhaustive.

### Data quality & verification
- Quest names, counts, chapters, and regions cross-checked against Game8, PowerPyx,
  GamesRadar, Fandom, and gamepressure before adding.
- New entries' walkthrough links use targeted YouTube **search** URLs
  (`youtube.com/results?search_query=…`) — always live and relevant, never a dead/wrong ID.
- After each batch, the site was rendered in **headless Chromium**: all cards render, game
  and region sub-filters return correct counts, and quest detail pages open with **no JS
  errors**.

---

## 3. What still needs to be done

### High priority
- [ ] **Full coverage pass on the remaining 10 games** (🔴 rows above), 3 at a time.
      Suggested next batch: **Persona 5 Royal**, **Ghost of Tsushima**, **Hogwarts Legacy**.
- [ ] **Audit the 🟡 games** (BG3, Elden Ring, Black Myth) against a guide to confirm they're
      actually complete, then promote them to ✅.

### Sub-filters
- [ ] Add **district sub-filter** for Cyberpunk 2077 and **region sub-filter** for FF7
      Rebirth, GoW Ragnarök, and Horizon FW. New entries are already tagged; older entries
      for those games need `region` back-filled first so nothing gets hidden.

### Data quality
- [ ] Replace YouTube **search** links with hand-picked per-quest videos (site-wide polish).
- [ ] Normalize older entries so every quest has `region`/`chapter` where it makes sense.
- [ ] Consider splitting "system content" umbrella entries (e.g. Cauldrons, Berserkers) into
      individual quests if we want true 1:1 completeness.

### From the existing backlog (CHECKLIST.md)
- [ ] Quest Detail Pages Phase 2–4 (related quests sidebar, buy links, per-quest SEO, static pages)
- [ ] Real cover images for Pillars of Eternity 1 & 2
- [ ] Affiliate signups + AdSense (traffic-gated)
- [ ] Quest completed tracker (localStorage)
- [ ] Marketing (subreddits, Discord, social)

---

## 4. How the checklist itself could be improved

The current `CHECKLIST.md` is a flat to-do list. Suggested upgrades (some already applied):

1. **Per-game coverage tracker** — a table (like §1 here) with a status per game so it's
   obvious at a glance what's complete vs. sampled. *(Now the source of truth in this file.)*
2. **Status legend, not just checkboxes** — ✅ / 🟡 / 🔴 captures "done", "probably done but
   unverified", and "sampled" far better than a binary `[ ]` / `[x]`.
3. **A definition of "done" per game** — the Coverage Protocol now spells out the categories
   (main story, all side content, system/repeatable content, DLC, secrets/endings) that must
   be covered before a game is marked ✅.
4. **"Verify against a canonical guide" as an explicit gate** — added to the protocol so
   coverage claims are checked, not assumed.
5. **Separate "content" from "platform/SEO/marketing"** — mixing quest-data work with
   infra/marketing tasks makes progress hard to read; this file splits them.
6. **Track counts over time** — recording before/after quest counts per pass (as in §2)
   turns the checklist into a changelog, not just a wishlist.
7. **Automate the audit** — a tiny script could compare our per-game counts against a target
   list and flag gaps, so the 🔴/🟡/✅ status is generated, not hand-maintained.
