# Update — Redesign, Staging Environment & Walkthrough Expansion

**Date:** 2026-07-06
**Branch:** `claude/staging-env-design-review-tybqwn`
**Live site:** https://kbarbu12.github.io/newapp/

## What this update does
Brought in a full React/Vite redesign of the site, stood up a staging
environment and a per-tab promotion pipeline so parts of the redesign can go
live only after review, then routed production to the promoted redesign and
began filling in written walkthroughs for quests with no video.

### Redesign wired to real data
- Imported the React/Vite/Tailwind (shadcn) redesign into `redesign/`.
- Added `redesign/scripts/gen-data.mjs`, which generates the app's data from
  the live `data/quests.js` at build time (949 quests, 15 games) — a single
  source of truth, no hand-maintained copy. Mirrors the site's real-video rule
  (placeholder `…/results` search links don't count → 254 real videos).

### Staging + per-tab promotion
- `redesign/src/config/promotion.ts` gates each tab. Staging shows every tab;
  production shows only tabs flipped to `true`.
- CI (`.github/workflows/pages.yml`) builds two bundles and publishes:
  - `/newapp/` — the **promoted redesign** (Library + Saved live)
  - `/newapp/staging/` — the full redesign, all tabs
  - `/newapp/classic/` — the original vanilla site, self-contained
- Promoted **Library** and **Saved** to production; **Home** and **News**
  remain staging-only for now.

### Production routing & caching
- Moved the vanilla site to `/newapp/classic/` so its PWA service worker
  scopes to `/classic/` and can no longer serve a stale redesign; added a
  kill-switch `/newapp/sw.js` to clear the legacy root-scoped worker.
- Redesign published at the `/newapp/` root (no `/app/` subpath, no redirect);
  cover images served from `/newapp/classic/images/`; dropped the redesign's
  `noindex` so production stays indexable.

### UX fixes
- Home quick-shortcuts (High Difficulty, With Video, Short Quests, Main Quests
  Only) now apply their filter when jumping to the Library.
- Scroll resets to the top when switching tabs.
- Added the **No Video** option to the Walkthrough filter (parity with the
  vanilla site: All / Video Only / No Video).
- Rebuilt the quest detail **modal** to match the pre-redesign layout (banner,
  Quest Type / Difficulty / Duration / Location, Region, Summary, Tip, Reward,
  Step-by-Step Walkthrough, plus Watch Walkthrough / About the Game side
  cards) and widened it.
- Mobile: enlarged the "Browse by game" cards and fixed the modal so it fits
  the viewport with the close button always reachable.

### Written walkthroughs (no-video quests)
Added step-by-step guides, shown in the detail modal and on the classic site.

| Game | Guides added | Coverage |
|------|:------------:|:--------:|
| Demon's Souls | 12 | all no-video quests ✅ |
| Pillars of Eternity | 27 | all no-video quests ✅ |

---

# Update — Full Coverage Pass for Cyberpunk 2077 & FF7 Rebirth

**Date:** 2026-07-03
**Branch:** `claude/continue-previous-task-ljm8v9`

## What this update does
Audited the two most recently expanded games and filled in the missing content
so each game covers *everything tied to it*, not just a sample.

| Game | Before | After | Added |
|------|:------:|:-----:|:-----:|
| Cyberpunk 2077: Ultimate Edition | 20 | **76** | +56 |
| Final Fantasy VII Rebirth | 18 | **57** | +39 |
| **Total quest library** | 253 | **348** | **+95** |

## Cyberpunk 2077 — what was added
- **Main Jobs (base game):** The Pickup, The Information, Playing for Time, Automatic
  Love, Disasterpiece, I Walk the Line, Transmission, Search and Destroy, Play It Safe,
  Never Fade Away, Nocturne Op55N1, plus the Star (Aldecaldos) and Sun (Legendary) endings.
- **Side Jobs:** Happy Together, Big in Japan, Beat on the Brat, Epistrophy, Space
  Oddity, Heroes, Queen of the Highway, With a Little Help from My Friends, Following
  the River, Pisces, Talkin' 'Bout a Revolution, They Won't Go When I Go.
- **Gigs (fixer contracts):** Monster Hunt, Freedom of the Press, Family Heirloom,
  Life's Work, Serious Side Effects, Flight of the Cheetah, Getting Warmer…, Last Login.
- **Cyberpsycho Sightings:** all **17** named sightings (Second Chances, The Wasteland,
  House on a Hill, Discount Doc, Where the Bodies Hit the Floor, Bloody Ritual, Six Feet
  Under, Demons of War, Lt. Mower, Ticket to the Major Leagues, Phantom of Night City,
  On Deaf Ears, Smoke on the Water, Lex Talionis, Letter of the Law, Seaside Cafe,
  Under the Bridge), each tagged with its district.
- **Phantom Liberty (Dogtown):** Dog Eat Dog, Hole in the Sky, Spider and the Fly,
  Firestarter, Lucretia My Reflection, Somewhat Damaged, The Killing Moon, plus Dogtown
  gigs (Baby Let Me Take You, Black Steel in the Hour of Chaos).

## Final Fantasy VII Rebirth — what was added
- **All 14 main story chapters** (Fall of a Hero → End of the World), each tagged with
  its chapter number and region.
- **Odd Jobs (side quests)** across every region:
  Grasslands, Junon, Corel, Gongaga, Cosmo Canyon, and Nibel — e.g. A Rare Card Lost,
  Stuck in a Rut, Calling All Frogs, Sand and Circuses, Missing: Mr. Birdie, Teach Me
  Great Warrior, The Spice of Life, Bonds of Trust, Absence of a Sign, Esoteric Secrets
  of the Elders, and the Chapter 12 endgame jobs (Hustle and Grind, Victim of
  Circumstance, Lament of the Damned, etc.).

## Data quality notes
- Quest names, chapters, regions, and the 17-Cyberpsycho / 36-Odd-Job counts were
  cross-checked against public guides (Game8, PowerPyx, GamesRadar, Fandom) before adding.
- New entries carry `region` (district for Cyberpunk, world region for FF7) and, where
  relevant, `chapter`, which surface on both the card and detail views.
- Walkthrough links for the new entries use targeted YouTube search URLs
  (`youtube.com/results?search_query=…`). This guarantees a live, relevant result and
  avoids dead/incorrect hard-coded video IDs. Swapping these for hand-picked single
  videos is a future polish step.

## Verified
- `data/quests.js` parses cleanly — 348 quests, no duplicate IDs, no missing fields.
- Rendered the site in headless Chromium: all 348 cards render, the FF7 filter shows 57,
  and quest detail pages open correctly with no JavaScript errors.

## Process change
Added a **Coverage Protocol** section to `CHECKLIST.md`: when adding/expanding any game,
cover the full main story, all named side content, repeatable/system content, DLC,
secrets/endings — and verify against a canonical guide before marking it done.

## Not done / follow-ups
- Region/district **sub-filters** for Cyberpunk and FF7 (like the BG3 Act and Elden Ring
  Region filters) — new entries are tagged and ready; existing older entries would need
  back-filling first.
- Replace YouTube search links with hand-picked per-quest videos.
- Same full-coverage audit could be applied to the other 13 games.
