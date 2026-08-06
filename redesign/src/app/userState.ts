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
import { QUESTS, GAMES, type Quest } from "../generated/data";

const KEY = "rqg:v2";
const GAME_FINISH_BONUS = 500;

export interface UserState {
  completed: Record<number, string>; // questId -> ISO completedAt
  steps: Record<number, number[]>; // questId -> completed walkthrough step indices
  saved: number[]; // saved quest ids
  savedGames: string[]; // F9 — saved game names
  wishlist: string[]; // F10 — ordered game names
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
        if (completed[id]) delete completed[id];
        else completed[id] = new Date().toISOString();
        return { ...s, completed };
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
    points,
    streak,
    toggleSave,
    toggleComplete,
    toggleStep,
    toggleSavedGame,
    setGameFinished,
    resetProgress,
    dismissWelcome,
  };
}

