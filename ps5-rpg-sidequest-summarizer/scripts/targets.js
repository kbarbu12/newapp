// Per-game coverage targets for the audit.
//
// `count` is the target number of NAMED quests for the game (main story +
// named side content + named repeatable contracts), taken from the "real
// total" figures recorded in PROGRESS.md and cross-checked against public
// guides (Game8 / PowerPyx / Fandom). It is intentionally a *target*, not the
// current library count, so the audit can GENERATE the ✅/🟡/🔴 status instead
// of it being hand-maintained.
//
// Status is derived from actual vs target:
//   actual >= count            -> "full"    (✅)
//   actual >= count * 0.9      -> "solid"   (🟡)  within 10% of target
//   otherwise                  -> "partial" (🔴)
//
// `note` documents why a target is what it is, or what is still gated.
module.exports = {
  "Cyberpunk 2077: Ultimate Edition": { count: 148, note: "Main jobs + side jobs + ~78 gigs + 17 Cyberpsychos + Phantom Liberty. A handful of obscure gigs may still be missing (guide hosts 403-blocked)." },
  "The Witcher 3: Wild Hunt": { count: 96, note: "Full main story + HoS + B&W + secondaries + contracts + gear hunts." },
  "Final Fantasy VII Rebirth": { count: 72, note: "14 chapters + 36 Odd Jobs + World Intel + minigames + summons." },
  "God of War Ragnarök": { count: 62, note: "All main missions + favors across 9 realms + Berserkers + collectible favors." },
  "Hogwarts Legacy": { count: 130, note: "~130 named quests. Currently ~124; ~6 obscure creature-den/treasure-vault names still gated on guide-host egress." },
  "Elden Ring": { count: 54, note: "Legacy dungeons + bosses + NPC questlines + full Shadow of the Erdtree DLC. Wants a name-by-name guide audit." },
  "Horizon Forbidden West": { count: 52, note: "Main + side + errands + system content + Burning Shores." },
  "Persona 5 Royal": { count: 90, note: "Palaces + Mementos + every Confidant. ~65 individual Mementos Requests are still collapsed under one umbrella; target reflects the full breakout." },
  "Baldur's Gate 3": { count: 100, note: "Acts 1-3 main + companion arcs + major side quests. Real total is 100+; needs a title-by-title guide audit to break out the rest." },
  "Ghost of Tsushima": { count: 71, note: "9 Mythic Tales + individual companion Tales + Jin's Journey + Iki. Standalone Tales of Tsushima toward the full ~61 are gated on guide lists." },
  "Metaphor: ReFantazio": { count: 40, note: "9 main dungeons + 14 Follower bonds + bounties + requests + trials. Guide-audited (Game8) — accurate." },
  "Black Myth: Wukong": { count: 37, note: "Chapter bosses across all 6 chapters + transformations + secrets. Wants a name-by-name guide audit." },
  "Pillars of Eternity II: Deadfire": { count: 29, note: "Main story + 4 faction paths + companion quests + DLCs. Companion-quest titles guide-audited (Fandom)." },
  "Pillars of Eternity": { count: 28, note: "Acts I-III main + companion quests + White March DLC. Companion-quest titles guide-audited (Fandom)." },
  "Demon's Souls": { count: 23, note: "All 5 Archstone worlds + bosses + tendency system + NPC arcs. Boss/NPC-driven — effectively complete for scope." }
};
