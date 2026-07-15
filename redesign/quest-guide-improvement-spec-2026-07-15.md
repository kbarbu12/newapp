# RPG Quest Guide — Improvement Spec (2026-07-15)

Developer handoff from Claude Design mockups (dark/gold theme, PWA web + mobile). Visual language stays; the work is information design, progress tracking, and a mobile-first structure. Every quest gains a small set of new fields.

Mockups referenced: browser 1a · detail 1b · web settings 1c · mobile 2a/2b/2c · mobile settings 2d.

---

## Design tokens

| Token | Value |
|---|---|
| bg | `#08080c` |
| panel | `#111119` |
| border | `#1e1e2b` |
| gold | `#d8b25a` |
| purple | `#a78bfa` |
| done | `#6bbf8a` |
| high | `#e08774` |
| missable | `#e0bf6d` |

Type: Spectral (serif headings) · Manrope (body). Min tap target 44px. Honor `env(safe-area-inset-*)`.

## 1 · Data model changes

Extend each quest record and add per-device state.

```
Quest {
  id, gameId, title, type, difficulty, duration,
  summary, tip, reward, steps: string[],
  videoUrl: string | null,        // null → "No video" chip
  missable: boolean,
  missableWindow: string | null,  // e.g. "Act 2"
  aboutGame: { name, storeUrl }   // monetisation / affiliate link
}

// per-device, localStorage (offline-friendly)
Progress {
  completedQuestIds: Set<id>,
  completedSteps: { [questId]: number[] },
  savedQuestIds: Set<id>
}
Settings { hideSpoilers, autoplayVideo, defaultDifficulty, theme, offline }
```

Persist Progress + Settings in `localStorage` so they survive offline; if an account exists, sync on sign-in.

## 2 · Quest cards

- Horizontal layout: shrink the game cover to a small thumbnail badge (~56×74 desktop / 40×52 mobile); the quest title leads. Stop repeating the full-bleed cover.
- Status line: `NOT STARTED` / `✓ COMPLETED` (green) / `⚠ MISSABLE · {window}` (amber); border tints to match.
- Metadata chips: type, difficulty (🔥 High / ◆ Medium), video (`▶ Video` / `No video`), duration or `☰ N steps`.

## 3 · Progress tracking (highest value)

- Per-game header: "X of Y complete", progress bar, % in green.
- `Mark done` toggles completion; updates card + bar live.
- New **Progress** route summarising % per game.

## 4 · Search & filtering

- Active filters as removable chips + "Clear all"; show result count.
- New filters: `hasVideo`, `notStarted`, `missable` (plus existing difficulty).
- Persist game + filters + search in the URL query string (shareable, survives refresh).
- Add an empty state ("No quests match — reset filters").

## 5 · Quest detail

- Embed the walkthrough video inline (lite YouTube embed) instead of the link-out.
- Steps become a checklist: per-step checkbox (persisted), completed steps strike through.
- `hideSpoilers` toggle blurs step text (`filter:blur(4px);user-select:none`) until revealed.
- Action hierarchy: primary green `Mark done`, secondary `Save`.
- **Keep the "About the game" card** with the Buy CTA (monetisation) as its own block below the walkthrough — visible but not competing with Mark done.

## 6 · Mobile / PWA

- Bottom tab bar (Library / Saved / Progress / Settings) replaces top nav ≤640px.
- Game picker = horizontal snap-scroll rail; selected has gold border.
- Filters open as a bottom sheet (grabber, sticky "Show N quests" apply button); detail opens as a full-screen sheet with sticky bottom actions.
- PWA: `manifest.json` (name, theme `#07070c`, icons, `display:standalone`); service worker caching app shell + quest JSON for offline; custom install prompt via `beforeinstallprompt`.

## 7 · Settings (web + mobile)

- **Reading:** hide spoilers by default, autoplay walkthrough video, default difficulty filter.
- **Appearance:** theme (dark/light).
- **Offline & data:** download for offline, sync progress (sign in), reset all progress.
- Web: left sub-nav + rows. Mobile: grouped list under the Settings tab.
