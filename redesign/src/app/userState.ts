// ─── Client-persisted user state (rqg:v2) ────────────────────────────────────
// One JSON blob in localStorage backs every progress feature: completed quests
// (with timestamps — F12), saved quests, saved games (F9), wishlist (F10),
// per-game start/finish (F6), achievements (F2), and the gamification counters
// (F7). A `useUserState()` hook loads it once and persists on change; the rest
// of the app reads derived views (Sets, computed points/streak) over it.
//
// On first load with no v2 blob we migrate the pre-v2 keys the app used to
// write separately (savedQuests / completedQuests / completedSteps) so existing
// visitors keep their progress.

import { useState, useEffect, useMemo, useCallback } from "react";
import { QUESTS, GAMES, ACHIEVEMENTS, type Quest, type Achievement } from "../generated/data";

const KEY = "rqg:v2";
const GAME_FINISH_BONUS = 500;

export interface UserState {
  completed: Record<number, string>; // questId -> ISO completedAt
  steps: Record<number, number[]>; // questId -> completed walkthrough step indices
  saved: number[]; // saved quest ids
  savedGames: string[]; // F9 — saved game names
  wishlist: string[]; // F10 — ordered game names
  wishlistDates: Record<string, string>; // F10 — optional target-play date per game
  games: Record<string, { startedAt?: string; finishedAt?: string }>; // F6
  achievements: Record<string, string>; // achId -> ISO unlockedAt (F2)
  welcomeDismissed: boolean; // F11
}

export const emptyState = (): UserState => ({
  completed: {},
  steps: {},
  saved: [],
  savedGames: [],
  wishlist: [],
  wishlistDates: {},
  games: {},
  achievements: {},
  welcomeDismissed: false,
});

// ── Point system (F7) ────────────────────────────────────────────────────────
// Mirrors the generate-time formula in scripts/gen-data.mjs; quests already
// carry a computed `points`, so we sum those. Game-finish bonuses are added on
// top of the completed-quest total.
const BASE: Record<Quest["type"], number> = { main: 100, side: 50, optional: 25 };
const MULT: Record<Quest["difficulty"], number> = { Low: 1, Medium: 1.5, High: 2 };
export function questPoints(q: Pick<Quest, "type" | "difficulty" | "missable">): number {
  let p = BASE[q.type] * MULT[q.difficulty];
  if (q.missable) p += 25;
  return Math.round(p / 5) * 5;
}

const QUEST_BY_ID = new Map(QUESTS.map((q) => [q.id, q]));
const QUESTS_BY_GAME = QUESTS.reduce<Record<string, Quest[]>>((m, q) => {
  (m[q.game] ??= []).push(q);
  return m;
}, {});

// ── Achievements (F2) ─────────────────────────────────────────────────────────
/** Is an achievement's criterion satisfied by the given completed-quest set? */
export function achievementMet(a: Achievement, game: string, completed: Set<number>): boolean {
  const gq = QUESTS_BY_GAME[game] ?? [];
  const allOf = (pred: (q: Quest) => boolean) => {
    const rel = gq.filter(pred);
    return rel.length > 0 && rel.every((q) => completed.has(q.id));
  };
  switch (a.kind) {
    case "count":
      return gq.filter((q) => completed.has(q.id)).length >= (a.n ?? 1);
    case "chapter":
      return allOf((q) => q.chapterId === a.chapterId);
    case "type":
      return allOf((q) => q.type === a.qtype);
    case "difficulty":
      return allOf((q) => q.difficulty === a.difficulty);
    case "complete":
      return gq.length > 0 && gq.every((q) => completed.has(q.id));
    default:
      return false;
  }
}

/** Reconcile the stored unlockedAt map against a completed set (all games). */
function reconcileAchievements(
  completed: Set<number>,
  prev: Record<string, string>,
  stamp: string
): Record<string, string> {
  const next = { ...prev };
  for (const [game, list] of Object.entries(ACHIEVEMENTS))
    for (const a of list) {
      const met = achievementMet(a, game, completed);
      if (met && !next[a.id]) next[a.id] = stamp;
      else if (!met && next[a.id]) delete next[a.id];
    }
  return next;
}

/** Total points: completed quests' points + a bonus per finished game. */
export function totalPoints(s: UserState): number {
  let p = 0;
  for (const id of Object.keys(s.completed)) p += QUEST_BY_ID.get(Number(id))?.points ?? 0;
  const finished = Object.values(s.games).filter((g) => g.finishedAt).length;
  return p + finished * GAME_FINISH_BONUS;
}

const dayKey = (iso: string) => iso.slice(0, 10); // YYYY-MM-DD

/** Consecutive-day completion streak ending today (or yesterday, still alive). */
export function currentStreak(s: UserState, now = new Date()): number {
  const days = new Set(Object.values(s.completed).map(dayKey));
  if (!days.size) return 0;
  const d = new Date(now);
  // Streak stays alive if there's activity today or yesterday.
  const iso = (x: Date) => x.toISOString().slice(0, 10);
  if (!days.has(iso(d))) {
    d.setDate(d.getDate() - 1);
    if (!days.has(iso(d))) return 0;
  }
  let streak = 0;
  while (days.has(iso(d))) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}

// ── Load / migrate / persist ─────────────────────────────────────────────────
function migrateLegacy(): UserState | null {
  const savedRaw = localStorage.getItem("savedQuests");
  const completedRaw = localStorage.getItem("completedQuests");
  const stepsRaw = localStorage.getItem("completedSteps");
  if (savedRaw == null && completedRaw == null && stepsRaw == null) return null;
  const s = emptyState();
  const stamp = new Date().toISOString(); // real dates weren't recorded pre-v2
  try {
    for (const id of JSON.parse(savedRaw ?? "[]") as number[]) s.saved.push(id);
  } catch {}
  try {
    for (const id of JSON.parse(completedRaw ?? "[]") as number[]) s.completed[id] = stamp;
  } catch {}
  try {
    s.steps = JSON.parse(stepsRaw ?? "{}");
  } catch {}
  return s;
}

export function loadState(): UserState {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...emptyState(), ...JSON.parse(raw) };
  } catch {}
  const migrated = migrateLegacy();
  if (migrated) {
    try {
      localStorage.setItem(KEY, JSON.stringify(migrated));
    } catch {}
    return migrated;
  }
  return emptyState();
}

export function saveState(s: UserState) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {}
}

export { GAMES };

// ── Hook ─────────────────────────────────────────────────────────────────────
export function useUserState() {
  const [state, setState] = useState<UserState>(loadState);
  useEffect(() => saveState(state), [state]);

  // On first mount, backfill achievement timestamps for quests that were
  // already completed (e.g. migrated pre-v2 progress) so the panel is accurate
  // immediately. Uses "now" since the real earn dates weren't recorded.
  useEffect(() => {
    setState((s) => {
      const done = new Set(Object.keys(s.completed).map(Number));
      const achievements = reconcileAchievements(done, s.achievements, new Date().toISOString());
      return Object.keys(achievements).length === Object.keys(s.achievements).length &&
        Object.keys(achievements).every((k) => s.achievements[k])
        ? s
        : { ...s, achievements };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleSave = useCallback(
    (id: number) =>
      setState((s) => ({
        ...s,
        saved: s.saved.includes(id) ? s.saved.filter((x) => x !== id) : [...s.saved, id],
      })),
    []
  );

  const toggleComplete = useCallback(
    (id: number) =>
      setState((s) => {
        const completed = { ...s.completed };
        const now = new Date().toISOString();
        if (completed[id]) delete completed[id];
        else completed[id] = now;
        // Re-check achievements for the affected game only.
        const game = QUEST_BY_ID.get(id)?.game;
        let achievements = s.achievements;
        if (game) {
          const done = new Set(Object.keys(completed).map(Number));
          achievements = { ...s.achievements };
          for (const a of ACHIEVEMENTS[game] ?? []) {
            const met = achievementMet(a, game, done);
            if (met && !achievements[a.id]) achievements[a.id] = now;
            else if (!met && achievements[a.id]) delete achievements[a.id];
          }
        }
        return { ...s, completed, achievements };
      }),
    []
  );

  const toggleStep = useCallback(
    (questId: number, stepIdx: number) =>
      setState((s) => {
        const cur = s.steps[questId] ?? [];
        const next = cur.includes(stepIdx) ? cur.filter((i) => i !== stepIdx) : [...cur, stepIdx];
        return { ...s, steps: { ...s.steps, [questId]: next } };
      }),
    []
  );

  const toggleSavedGame = useCallback(
    (name: string) =>
      setState((s) => ({
        ...s,
        savedGames: s.savedGames.includes(name)
          ? s.savedGames.filter((g) => g !== name)
          : [...s.savedGames, name],
      })),
    []
  );

  const setGameFinished = useCallback(
    (name: string, finished: boolean) =>
      setState((s) => {
        const g = { ...(s.games[name] ?? {}) };
        if (finished) {
          g.finishedAt = new Date().toISOString();
          g.startedAt ??= g.finishedAt;
        } else {
          delete g.finishedAt;
        }
        return { ...s, games: { ...s.games, [name]: g } };
      }),
    []
  );

  const toggleWishlist = useCallback(
    (name: string) =>
      setState((s) => {
        if (s.wishlist.includes(name)) {
          const dates = { ...s.wishlistDates };
          delete dates[name];
          return { ...s, wishlist: s.wishlist.filter((g) => g !== name), wishlistDates: dates };
        }
        return { ...s, wishlist: [...s.wishlist, name] };
      }),
    []
  );

  // Move a wishlist entry up (dir -1) or down (dir +1) to reprioritise.
  const moveWishlist = useCallback(
    (name: string, dir: -1 | 1) =>
      setState((s) => {
        const i = s.wishlist.indexOf(name);
        const j = i + dir;
        if (i < 0 || j < 0 || j >= s.wishlist.length) return s;
        const next = [...s.wishlist];
        [next[i], next[j]] = [next[j], next[i]];
        return { ...s, wishlist: next };
      }),
    []
  );

  const setWishlistDate = useCallback(
    (name: string, date: string) =>
      setState((s) => {
        const dates = { ...s.wishlistDates };
        if (date) dates[name] = date;
        else delete dates[name];
        return { ...s, wishlistDates: dates };
      }),
    []
  );

  const resetProgress = useCallback(
    () => setState((s) => ({ ...s, completed: {}, steps: {}, games: {}, achievements: {} })),
    []
  );

  const dismissWelcome = useCallback(() => setState((s) => ({ ...s, welcomeDismissed: true })), []);

  // Derived views the existing components already expect.
  const savedIds = useMemo(() => new Set(state.saved), [state.saved]);
  const completedIds = useMemo(
    () => new Set(Object.keys(state.completed).map(Number)),
    [state.completed]
  );
  const points = useMemo(() => totalPoints(state), [state]);
  const streak = useMemo(() => currentStreak(state), [state.completed]);

  return {
    state,
    setState,
    savedIds,
    completedIds,
    completedAt: state.completed,
    completedSteps: state.steps,
    savedGames: state.savedGames,
    achievementsAt: state.achievements,
    games: state.games,
    wishlist: state.wishlist,
    wishlistDates: state.wishlistDates,
    welcomeDismissed: state.welcomeDismissed,
    points,
    streak,
    toggleSave,
    toggleComplete,
    toggleStep,
    toggleSavedGame,
    setGameFinished,
    toggleWishlist,
    moveWishlist,
    setWishlistDate,
    resetProgress,
    dismissWelcome,
  };
}

