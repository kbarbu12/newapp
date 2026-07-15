// ─── Per-tab promotion control ──────────────────────────────────────────────
//
// The redesign ships to two places from one codebase:
//   • STAGING  (kbarbu12.github.io/newapp/staging/) — a preview build for
//     reviewing against real quest data before it ships.
//   • PROD     (kbarbu12.github.io/newapp/app/)     — the live site.
//
// Both show the same set of tabs (PROMOTED_TABS below) so what's reviewed in
// staging is exactly what's live in prod. To ship a new tab, build it behind
// a flag elsewhere first; flip it to `true` here only once it's ready to go
// live in both places.

export type Tab = "home" | "browse" | "news" | "saved" | "progress";

export const PROMOTED_TABS: Record<Tab, boolean> = {
  home: false,     // staging only for now
  browse: true,    // Library — live in prod
  news: false,     // staging only for now
  saved: true,     // live in prod
  progress: false, // staging only for now
};

// Build target — injected by Vite (VITE_TARGET). Defaults to staging so local
// `npm run dev` shows everything.
const TARGET =
  ((import.meta.env.VITE_TARGET as string) || "staging") === "prod"
    ? "prod"
    : "staging";

export const IS_STAGING = TARGET === "staging";

// A tab is live only once it's been promoted — staging mirrors prod so what's
// reviewed there matches what ships.
export const isTabLive = (t: Tab): boolean => PROMOTED_TABS[t];

const TAB_ORDER: Tab[] = ["home", "browse", "news", "saved", "progress"];
export const LIVE_TABS: Tab[] = TAB_ORDER.filter(isTabLive);
