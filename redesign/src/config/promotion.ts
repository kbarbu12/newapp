// ─── Per-tab promotion control ──────────────────────────────────────────────
//
// The redesign ships to two places from one codebase:
//   • STAGING  (kbarbu12.github.io/newapp/staging/) — every tab is visible so
//     the whole redesign can be reviewed against real quest data.
//   • PROD     (kbarbu12.github.io/newapp/app/)     — only tabs that have been
//     reviewed and approved appear.
//
// To promote a tab after it passes testing in staging, flip it to `true` here
// and merge to main. CI rebuilds the prod bundle and the tab goes live; the
// staging bundle is unaffected. Nothing is promoted until it is proven good.

export type Tab = "home" | "browse" | "news" | "saved";

export const PROMOTED_TABS: Record<Tab, boolean> = {
  home: false,   // staging only for now
  browse: true,  // Library — live in prod
  news: false,   // staging only for now
  saved: true,   // live in prod
};

// Build target — injected by Vite (VITE_TARGET). Defaults to staging so local
// `npm run dev` shows everything.
const TARGET =
  ((import.meta.env.VITE_TARGET as string) || "staging") === "prod"
    ? "prod"
    : "staging";

export const IS_STAGING = TARGET === "staging";

// A tab is live if we're in staging (everything) or it's been promoted to prod.
export const isTabLive = (t: Tab): boolean => IS_STAGING || PROMOTED_TABS[t];

const TAB_ORDER: Tab[] = ["home", "browse", "news", "saved"];
export const LIVE_TABS: Tab[] = TAB_ORDER.filter(isTabLive);
