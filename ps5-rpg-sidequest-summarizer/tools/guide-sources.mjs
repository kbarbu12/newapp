// Canonical guide/wiki sources per game, plus a reachability probe.
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { existsSync, readFileSync } from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));
export const CACHE_DIR = resolve(here, "guide-cache");

// Filesystem-safe slug for a game name → guide-cache/<slug>.(txt|html)
export function gameSlug(game) {
  return String(game).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// Read a locally cached guide list for a game, if the user has pasted/saved one.
// Lets the whole diff run with no egress. Returns the file text or null.
export function readCachedGuide(game) {
  for (const ext of ["txt", "html", "md"]) {
    const p = resolve(CACHE_DIR, `${gameSlug(game)}.${ext}`);
    if (existsSync(p)) return readFileSync(p, "utf8");
  }
  return null;
}

//
// These are the hosts the environment egress policy must allow for `--diff` to
// work. Today they all return 403 at the egress proxy; this file is the single
// place to maintain the source URLs so that, once egress is enabled, the diff
// covers every game.
//
// Each game may list several source URLs (a page can be paginated or split
// across "main story" / "side quests"). The diff treats them as one merged
// corpus of guide text.

export const GUIDE_SOURCES = [
  { host: "harrypotter.fandom.com", game: "Hogwarts Legacy",
    urls: ["https://harrypotter.fandom.com/wiki/Hogwarts_Legacy"] },
  { host: "ghostoftsushima.fandom.com", game: "Ghost of Tsushima",
    urls: ["https://ghostoftsushima.fandom.com/wiki/Tales"] },
  { host: "baldursgate3.wiki.fextralife.com", game: "Baldur's Gate 3",
    urls: ["https://baldursgate3.wiki.fextralife.com/Quests"] },
  { host: "eldenring.wiki.fextralife.com", game: "Elden Ring",
    urls: ["https://eldenring.wiki.fextralife.com/Quests"] },
  { host: "blackmythwukong.wiki.fextralife.com", game: "Black Myth: Wukong",
    urls: ["https://blackmythwukong.wiki.fextralife.com/Quests"] },
  { host: "cyberpunk.fandom.com", game: "Cyberpunk 2077: Ultimate Edition",
    urls: ["https://cyberpunk.fandom.com/wiki/Cyberpunk_2077_Jobs"] },
  { host: "finalfantasy.fandom.com", game: "Final Fantasy VII Rebirth",
    urls: ["https://finalfantasy.fandom.com/wiki/Final_Fantasy_VII_Rebirth_side_quests"] },
  { host: "godofwar.fandom.com", game: "God of War Ragnarök",
    urls: ["https://godofwar.fandom.com/wiki/Favors_(Ragnar%C3%B6k)"] },
  { host: "horizon.fandom.com", game: "Horizon Forbidden West",
    urls: ["https://horizon.fandom.com/wiki/Horizon_Forbidden_West_Quests"] },
  { host: "megamitensei.fandom.com", game: "Persona 5 Royal",
    urls: ["https://megamitensei.fandom.com/wiki/Requests_(Persona_5)"] },
  { host: "witcher.fandom.com", game: "The Witcher 3: Wild Hunt",
    urls: ["https://witcher.fandom.com/wiki/The_Witcher_3_secondary_quests"] },
  { host: "metaphor.fandom.com", game: "Metaphor: ReFantazio",
    urls: ["https://metaphor.fandom.com/wiki/Quests"] },
  { host: "demonssouls.wiki.fextralife.com", game: "Demon's Souls",
    urls: ["https://demonssouls.wiki.fextralife.com/Walkthrough"] },
  { host: "pillarsofeternity.fandom.com", game: "Pillars of Eternity",
    urls: ["https://pillarsofeternity.fandom.com/wiki/Quests_(Pillars_of_Eternity)"] },
  { host: "pillarsofeternity.fandom.com", game: "Pillars of Eternity II: Deadfire",
    urls: ["https://pillarsofeternity.fandom.com/wiki/Quests_(Pillars_of_Eternity_II:_Deadfire)"] },
];

// Build a fetch dispatcher that honours HTTPS_PROXY (Node's built-in fetch does
// not by default). Uses the bundled undici ProxyAgent when available; otherwise
// returns undefined and callers fall back to plain fetch.
async function proxyDispatcher() {
  const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
  if (!proxy) return undefined;
  try {
    const { ProxyAgent } = await import("undici");
    return new ProxyAgent(proxy);
  } catch {
    return undefined; // undici not importable — plain fetch (may ignore proxy)
  }
}

export async function fetchText(url, { timeoutMs = 20000 } = {}) {
  const dispatcher = await proxyDispatcher();
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: ac.signal,
      headers: { "user-agent": "rpg-quest-guide-audit/1.0" },
      ...(dispatcher ? { dispatcher } : {}),
    });
    if (!res.ok) return { ok: false, status: res.status, text: "" };
    return { ok: true, status: res.status, text: await res.text() };
  } catch (e) {
    return { ok: false, status: 0, text: "", error: String(e?.message || e) };
  } finally {
    clearTimeout(t);
  }
}

// Probe each distinct host once. Returns { host: boolean }.
export async function probeHosts() {
  const hosts = [...new Set(GUIDE_SOURCES.map((s) => s.host))];
  const out = {};
  await Promise.all(
    hosts.map(async (h) => {
      const r = await fetchText(`https://${h}/`, { timeoutMs: 12000 });
      out[h] = r.ok;
    })
  );
  return out;
}
