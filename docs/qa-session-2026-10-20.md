# QA Session — 2026-10-20

Full QA pass of the React redesign (staging and prod builds) plus a deep audit
of the quest data. **Report only.** Nothing in the app or data was changed;
each fix should ship as its own PR.

**Tested at:** `staging` @ `a6a7a73`, whose app code and data match `main` @
`aac0150` (v2.4.15). The only difference between them is `PROGRESS.md`.

## Summary

| Area | Result |
|---|---|
| Data audit (`npm test`, the CI gate) | ✅ PASS: 2461 quests / 24 games, integrity clean, 2 allowlisted shared videos |
| `npm run build:staging` / `build:prod` | ✅ PASS (bundle-size warning, see L11) |
| Headless render: staging + prod | ✅ 0 page errors, 0 console errors; Staging badge only on staging; tabs = Library / Saved / Progress / Settings in both, matching `promotion.ts` |
| Quest detail fields | ✅ walkthrough, reward, tip, difficulty and length chips, region/location, video embed |
| Offline ("Download for offline") | ✅ app opens offline after download |
| Mobile 375 / 320 px | ✅ no page-level horizontal scroll; ⚠️ issues below |
| Light theme | ✅ readable; no broken contrast found on Library / detail / Settings |
| **Bugs found** | **4 high · 9 medium · 12 low · 3 latent (unpromoted tabs) · 6 data** |

## How it was tested

- Built both targets, served them locally under their real base paths
  (`/newapp/` and `/newapp/staging/`), and drove them with Playwright + Chromium
  (`/opt/pw-browsers`) at 1280×900, 375×740 and 320×740.
- Cover images are hot-linked from the live `kbarbu12.github.io`, which this
  environment's network policy blocks. I routed those requests to the local
  `ps5-rpg-sidequest-summarizer/images/` files. YouTube requests were stubbed.
  The live site itself was not tested.
- Ran the chat engine (`chatEngine.ts`) directly against about 30 sample
  questions.
- Ran a custom data audit with extra checks the CI gate doesn't make:
  duplicated text, non-schema values, playlist-only videos, and type balance.

---

## 🔴 High

### H1. Infinite scroll stops working after a search or filter is narrowed then cleared
`redesign/src/app/App.tsx:1446-1453`. The `IntersectionObserver` is attached
once, on mount, to the sentinel `<div>`. When a narrow result set (≤36) unmounts
the sentinel and a wider one brings it back, the new element is never observed.
- **Repro:** Library → search `Baron` (5 results) → clear the search → scroll to
  the bottom. Only **36 of 2461** quests ever load. On a fresh page, scrolling
  correctly loads 72, 108, and so on.
- **Fix idea:** observe through a callback ref, or put `filtered.length` /
  `visibleCount` in the effect's dependencies.

### H2. One bad shared link empties the Library on every later visit
`App.tsx:1682-1686` and `App.tsx:1729`. URL params (`game`, `type`, `diff`, `len`,
`video`) are used without validation, then saved to `localStorage`
(`lastGame`, `lastType`, …). A later visit with no params reads them back.
- **Repro:** open `…/staging/?diff=hard&game=Nope&type=foo` → 0 results. Then
  open plain `…/staging/` → **still 0 results** until the user finds "Clear all".
- The same thing happens if a game is ever renamed: returning visitors with the
  old `lastGame` see an empty library.
- **Fix idea:** check each value against its allowed set (or `GAMES`) and fall
  back to `"All"`.

### H3. Using two tabs at once loses progress
`redesign/src/app/userState.ts:173-175`. Each tab loads the state once and
writes the whole blob back on every change, so the last tab to write wins. There
is no `storage` event listener.
- **Repro:** open the app in two tabs → mark a quest done in tab A → save a
  different quest in tab B → reload. Tab A's completion is gone (stored:
  `completed: 0, saved: 1`).
- **Fix idea:** listen for `window` `storage` events and reload the state, or
  merge before writing.

### H4. Quests can't be opened with the keyboard
`App.tsx:436-440`. The quest card is an `<article tabIndex={-1} onClick=…>`.
It's not focusable and has no Enter/Space handler. Tabbing through the Library
only reaches each card's "Mark complete" and "Save" buttons, so keyboard and
screen-reader users can't open a quest's detail at all.
- **Fix idea:** make the title a `<button>`, or give the card `tabIndex={0}`,
  `role="button"` and a key handler.

## 🟠 Medium

### M1. The "Default difficulty filter" setting does nothing
`App.tsx:1684` and `App.tsx:1729`. At startup `lastDiff` takes priority over
`defaultDifficulty`, and `lastDiff` is written (as `"All"`) on the very first
visit. So the setting never applies. Changing it also doesn't update the
current filter.
- **Repro:** Settings → Default difficulty = High → Library (2461 results) →
  reload (still 2461). Stored values: `lastDiff:"All", defaultDifficulty:"High"`.

### M2. The quest dialog closes when its card leaves the list
`App.tsx:489-496`. The `Dialog` lives inside `QuestCard`, so when the card drops
out of the list, the open dialog unmounts with it.
- **Repro A:** Filters → More → Not started → open a quest → **Mark done**. The
  dialog vanishes.
- **Repro B:** Saved tab → open a saved quest → click **Saved** to unsave. The
  dialog vanishes.
- **Fix idea:** hoist the open-quest state to `App`, as the chat deep-link
  dialog already does (`App.tsx:2160`).

### M3. Playlist-only videos show an empty "Watch Walkthrough" block
`App.tsx:226-229`. `getYouTubeId` only understands `watch?v=`, `youtu.be`,
`embed/` and `shorts/`. For `playlist?list=…` it returns `null`, so the player
renders nothing under the "WATCH WALKTHROUGH" header. Affects **#134 Panam
Palmer's Questline** (Cyberpunk) and **#179 The Daunt Errands** (Horizon FW).
- **Fix idea:** embed playlists via `embed/videoseries?list=…`, or replace those
  two links with specific videos.

### M4. The chat assistant doesn't recognise "God of War"
`redesign/src/app/chatEngine.ts:80-81`. `NAME_WORDS` drops words of three
letters or fewer ("god", "war") and splits "Ragnar**ö**k" at the `ö`.
- `God of War quests` → answers with a **Black Myth: Wukong** quest.
- `how many god of war quests` → "Name a game and I'll give you its count."
- `gow quests` and `ragnarök` do work.
- The game-mention check also drops other filters. `hard zelda shrines` returns
  a **Low**-difficulty quest, and `easy hogwarts quests with video` returns one
  quest instead of a list.

### M5. The chat panel runs off-screen on 320 px phones
`App.tsx:1358`. The panel has a fixed `w-80` (320 px) plus a 16 px right
offset, so at a 320 px viewport it starts at x = −16 and its left edge is cut
off. Use something like `w-[min(20rem,calc(100vw-2rem))]`.

### M6. There's no way to filter for "Optional" quests
`App.tsx:2078`. The build derives a third type, **Optional**, for 79 quests
(`gen-data.mjs:61-64`), and cards show an "○ Optional" badge. But the Library's
Type filter only offers `All / main / side`, so those quests only appear under
"All". The options are also lowercase (`main`, `side`) and show up that way in
the chip ("Type: main"). The chat assistant also calls Optional quests "Side
quest" (`chatEngine.ts:130`).

### M7. "Mark finished" gives +500 points with no quests done
`userState.ts:246-258` and `App.tsx:1639`. Any game can be marked finished at
any time for a flat +500. Repro: BG3 game page → Mark finished → Progress shows
**500 points** with 0 quests done. Marking all 24 games yields 12,000 points.
This is a design call: should finishing require some completion threshold?

### M8. "Enable reminders" asks for notification permission, but nothing ever sends one
`App.tsx:1300-1304`. The welcome sheet requests browser notification
permission, but the app has no code that sends a notification. Either build
reminders or remove the button. Asking for a permission you don't use costs
user trust.

### M9. No navigation history
- The active tab isn't in the URL. Reloading on Progress or Saved always lands
  back on Library.
- The browser **Back** button leaves the site entirely instead of going to the
  previous tab, game page or quest.
- Clicking the tab you're already on doesn't close an open game page
  (`App.tsx:1790` only fires when the tab changes).
- The Library's `?game=…` query string stays in the URL after switching to
  other tabs.

## 🟡 Low / polish

| # | Issue | Where |
|---|---|---|
| L1 | Quest detail repeats the same value in several tiles: AC Odyssey shows **two "Region: Kephallonia" tiles** (chapter term = Region, plus `region`); Cyberpunk #134 shows District, Location and Region all as "Badlands". | `App.tsx:344-348` |
| L2 | "**1 quests**" in the header and banner (no singular form). | `App.tsx:1969`, `1998` |
| L3 | Mobile (375 px): the search box shrinks to about 105 px and the placeholder is cut to "Searc", squeezed by Filters + Sort on one row. | `App.tsx:2071-2118` |
| L4 | The mobile quest "full-screen sheet" isn't edge-to-edge: the base `max-w-[calc(100%-2rem)]` from `DialogContent` leaves 16 px gaps on both sides. | `ui/dialog.tsx:61`, `App.tsx:491` |
| L5 | Wishlist empty-state text says "drag it up or down", but reordering uses ▲/▼ buttons. | `App.tsx:1016` |
| L6 | Settings switches, the theme toggle and the wishlist "Add a game" `<select>` have no accessible name. A screen reader just says "switch, off". | `App.tsx:1194`, `1197`, `1034` |
| L7 | The day streak counts **UTC** days, not local days. Players west of UTC who play in the evening can see their streak break or skip. | `userState.ts:111-127` |
| L8 | The desktop Filters popover doesn't close on Escape (only on an outside click). | `App.tsx:1239-1247` |
| L9 | The PWA manifest icon (and favicon) is the non-square **BG3 cover JPEG**, declared as 512×512. Proper `icon-192.png`, `icon-512.png` and `icon-maskable-512.png` already exist in `ps5-rpg-sidequest-summarizer/images/`. | `redesign/public/manifest.json`, `redesign/index.html:9` |
| L10 | Covers are hot-linked to the absolute live URL (`IMG_BASE`), so staging and local dev show blank covers whenever the live site is unreachable, and staging can't preview new cover art before prod. | `scripts/gen-data.mjs:24` |
| L11 | The JS bundle is **2.6 MB (672 kB gzipped)**, up from 772 kB at the July QA. Most of it is `src/generated/data.ts` (2.7 MB). Loading quest data as a separate, lazily fetched JSON would speed up the first load. | build output |
| L12 | Unused dependencies: `react-router` (the source of the only `npm audit` finding, **1 high**; it's never imported, so it isn't exploitable, just noise), plus `@mui/*`, `react-dnd` and `react-slick`. Tree-shaken out of the bundle, but they slow installs and clutter audits. | `redesign/package.json` |

## 💤 Latent: Home and News tabs (not promoted, so not visible to users)

Fix these before flipping either tab on in `promotion.ts`:
- **Quest of the Week is hard-coded to id 11** with the comment "The Bloody
  Baron", but id 11 is **"Dream On" (Cyberpunk)**. The Bloody Baron is id 13.
  `App.tsx:553`.
- The hero copy reads "Over **2461+** quests": "Over" and "+" say the same
  thing. `App.tsx:588`.
- The `NEWS` items are hard-coded placeholder content. Examples: "Dragon's Dogma
  2 now in the database" (no such game in the data), "12 new Elden Ring quests
  added". The News filter buttons do nothing. `App.tsx:24-33`, `803-805`.

## 📊 Quest data

The CI audit passes. These are content-quality findings it doesn't check:

1. **AC Valhalla has 142 main quests and 0 side quests.** Every entry is
   `type: "main"`, which makes the "Story Complete" achievement identical to
   "Completionist". (Correction after a closer look: 141 of these are
   story-arc quests the game itself marks as main, so only the Order of the
   Ancients hunt was mis-typed; fixed in #301. The real gap is coverage:
   Valhalla's side content, its World Events, isn't in the data.)
2. **Templated, copy-pasted text across large groups.** The audit's
   filler-text check doesn't catch it:
   - AC Odyssey: one `aiTip` shared by **43** Cult of Kosmos members
     (#2199–2241); one shared by **48** main-story quests (#1999–2068, "keep
     your gear level…"); **22** tombs (#2270–2291) share summary and tip;
     Lost Tales (#2189–2198) share summary, tip and walkthrough; 6 romances
     share an identical walkthrough.
   - Cyberpunk: 15 cyberpsycho sightings share one tip; #298/#299 share
     summary and walkthrough.
   - Jedi: Survivor: 13 rumors share one tip.
   - TotK: 16 quests share "Open the adventure log for the current objective
     and hints." #1669/#1695 and #1691/#1705 are fully identical.
   - Total: 7 groups of identical walkthroughs, 7 duplicated summaries, 18
     duplicated tips.
3. **The data doesn't match `SCHEMA.md`.** 31 TotK quests have `type:
   "shrine"` (the schema allows only `main`/`side`), and the audit doesn't
   flag it. On the classic site these quests appear under neither the Main
   nor the Side type filter; the redesign tolerates them by mapping to side.
   (Correction: TotK's `questType` field is *not* drift. It's the field TotK's
   sub-filter is configured on, which the schema allows.)
4. **2 playlist-only videos** (#134, #179). They pass the audit but don't
   embed in the redesign (see M3).
5. **Coverage gaps** reported by the audit: Hogwarts Legacy (10), FF7 Rebirth
   (7), Witcher 3 (6), Cyberpunk (3), Ghost of Tsushima (3), Black Myth: Wukong
   (1).
6. **2 allowlisted shared videos**: `jDvmQQVqWGs` on #1320–1322 and
   `X1deZpHKJ9I` on #725–726. Worth replacing with quest-specific videos.

---

## Suggested fix order
1. H1 infinite scroll, H2 bad-link persistence, M1 default difficulty. Small,
   self-contained fixes in `App.tsx` with high user impact.
2. H4 keyboard access + L6 labels (accessibility).
3. M2 hoist the quest dialog state; M3 playlist embeds (or swap the 2 videos).
4. H3 multi-tab sync.
5. M4/M5/M6 chat and filter polish; decide on M7 (finish bonus) and M8
   (reminders).
6. Data: re-type the one Valhalla side entry; rewrite the templated tips and
   summaries game by game.

## Verification commands
```bash
# Data audit (CI gate)
cd ps5-rpg-sidequest-summarizer && npm test

# Builds
cd redesign && npm ci && npm run build:staging && npm run build:prod

# Serve both builds under their real base paths, then drive with Playwright
mkdir -p /tmp/www/newapp/staging
cp -r redesign/dist/prod/. /tmp/www/newapp/
cp -r redesign/dist/staging/. /tmp/www/newapp/staging/
cd /tmp/www && python3 -m http.server 8765
```
