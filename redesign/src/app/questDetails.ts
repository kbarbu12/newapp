// ─── Lazily loaded quest details ─────────────────────────────────────────────
// Walkthrough steps, tips and rewards ship as a separate hashed JSON (see
// scripts/gen-data.mjs) so the first load only carries what the Library needs.
// `loadQuestDetails()` fetches it once and merges the fields back into the
// shared QUESTS objects, so code that reads quest.walkthrough / aiTip / reward
// keeps working unchanged once it has loaded. Components that render those
// fields call `useQuestDetails()` to re-render when they arrive.

import { useEffect, useState } from "react";
import { QUESTS, type Quest } from "../generated/data";
import detailsUrl from "../generated/quest-details.json?url";

type Details = Record<string, Pick<Quest, "aiTip" | "reward" | "walkthrough">>;

let loaded = false;
let pending: Promise<void> | null = null;
const listeners = new Set<() => void>();

export function loadQuestDetails(): Promise<void> {
  if (loaded) return Promise.resolve();
  pending ??= fetch(detailsUrl)
    .then((r) => {
      if (!r.ok) throw new Error(`quest details: HTTP ${r.status}`);
      return r.json() as Promise<Details>;
    })
    .then((details) => {
      for (const q of QUESTS) if (details[q.id]) Object.assign(q, details[q.id]);
      loaded = true;
      listeners.forEach((l) => l());
    })
    .catch((e) => {
      pending = null; // let the next caller retry (e.g. after a network blip)
      throw e;
    });
  return pending;
}

/** Details status for a component: triggers a load and re-renders on arrival
 *  (or on failure, so the UI can say so instead of loading forever). */
export function useQuestDetails(): "ready" | "loading" | "failed" {
  const [status, setStatus] = useState<"ready" | "loading" | "failed">(loaded ? "ready" : "loading");
  useEffect(() => {
    if (loaded) { setStatus("ready"); return; }
    let live = true;
    const l = () => { if (live) setStatus("ready"); };
    listeners.add(l);
    loadQuestDetails().catch(() => { if (live) setStatus("failed"); });
    return () => { live = false; listeners.delete(l); };
  }, []);
  return status;
}
