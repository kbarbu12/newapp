const gameImages = {
  "Baldur's Gate 3": {
    gradient: "linear-gradient(135deg, #1a0a2e 0%, #6b21a8 50%, #c084fc 100%)",
    abbr: "BG3",
    cover: "images/baldurs-gate-3-cover.jpg"
  },
  "Elden Ring": {
    gradient: "linear-gradient(135deg, #1c1a00 0%, #a16207 50%, #fbbf24 100%)",
    abbr: "ER",
    cover: "images/elden-ring-cover.jpg"
  },
  "Final Fantasy VII Rebirth": {
    gradient: "linear-gradient(135deg, #0a1628 0%, #1d4ed8 50%, #60a5fa 100%)",
    abbr: "FF7R",
    cover: "images/ff7-rebirth-cover.jpg"
  },
  "Cyberpunk 2077: Ultimate Edition": {
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #dc2626 40%, #fcd34d 100%)",
    abbr: "CP77",
    cover: "images/cyberpunk-2077-cover.jpg"
  },
  "The Witcher 3: Wild Hunt": {
    gradient: "linear-gradient(135deg, #0a1a0a 0%, #15803d 50%, #4ade80 100%)",
    abbr: "TW3",
    cover: "images/witcher-3-cover.jpg"
  },
  "Metaphor: ReFantazio": {
    gradient: "linear-gradient(135deg, #1a0a1e 0%, #9333ea 50%, #f0abfc 100%)",
    abbr: "MRF",
    cover: "images/metaphor-refantazio-cover.jpg"
  },
  "Demon's Souls": {
    gradient: "linear-gradient(135deg, #0d0d1a 0%, #374151 50%, #9ca3af 100%)",
    abbr: "DS",
    cover: "images/demons-souls-cover.jpg"
  },
  "Hogwarts Legacy": {
    gradient: "linear-gradient(135deg, #1a0f00 0%, #92400e 50%, #f59e0b 100%)",
    abbr: "HL",
    cover: "images/hogwarts-legacy-cover.jpg"
  },
  "Black Myth: Wukong": {
    gradient: "linear-gradient(135deg, #1a0800 0%, #b45309 50%, #f97316 100%)",
    abbr: "BMW",
    cover: "images/black-myth-wukong-cover.jpg"
  },
  "God of War Ragnarök": {
    gradient: "linear-gradient(135deg, #1a3a5c 0%, #4a8bc2 50%, #8fb8de 100%)",
    abbr: "GOW",
    cover: "images/god-of-war-cover.jpg"
  },
  "Persona 5 Royal": {
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #d40000 50%, #ff1a1a 100%)",
    abbr: "P5R",
    cover: "images/persona-5-royal-cover.jpg"
  },
  "Ghost of Tsushima": {
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #c4a35a 50%, #e8d5a3 100%)",
    abbr: "GOT",
    cover: "images/ghost-of-tsushima-cover.jpg"
  },
  "Horizon Forbidden West": {
    gradient: "linear-gradient(135deg, #2d5a27 0%, #d4763a 50%, #e8a84c 100%)",
    abbr: "HFW",
    cover: "images/horizon-forbidden-west-cover.jpg"
  },
  "Pillars of Eternity": {
    gradient: "linear-gradient(135deg, #1a1400 0%, #8b6914 50%, #d4a836 100%)",
    abbr: "POE",
    cover: "images/pillars-of-eternity.svg"
  },
  "Pillars of Eternity II: Deadfire": {
    gradient: "linear-gradient(135deg, #0a1a2e 0%, #1e6091 50%, #38bdf8 100%)",
    abbr: "POE2",
    cover: "images/pillars-of-eternity-2.svg"
  }
};

const subFilterConfig = {
  "Black Myth: Wukong": {
    field: "chapter",
    label: "Chapter",
    options: [
      { value: "1", text: "Chapter 1 – Black Wind Mountain" },
      { value: "2", text: "Chapter 2 – Yellow Wind Ridge" },
      { value: "3", text: "Chapter 3 – Yellowbrow" }
    ]
  },
  "The Witcher 3: Wild Hunt": {
    field: "region",
    label: "Region",
    options: [
      { value: "White Orchard", text: "White Orchard" },
      { value: "Velen", text: "Velen" },
      { value: "Novigrad", text: "Novigrad" },
      { value: "Skellige", text: "Skellige" },
      { value: "Toussaint", text: "Toussaint (Blood & Wine)" }
    ]
  }
};

const quests = [
  {
    id: 1,
    game: "Baldur's Gate 3",
    title: "Rescue the Grand Duke",
    location: "Wyrm's Rock / Iron Throne",
    length: "long",
    difficulty: "High",
    reward: "Story consequences, allies, rare loot",
    summary:
      "A politically important rescue quest with multiple branching outcomes. The player must balance combat, exploration, and timed decision-making while managing companion reactions.",
    aiTip:
      "Prioritize mobility spells, prepare healing, and save before major dialogue choices. This quest is best approached after checking companion objectives.",
    video: "https://www.youtube.com/watch?v=pskHqvzf6lE"
  },
  {
    id: 2,
    game: "Baldur's Gate 3",
    title: "Find the Nightsong",
    location: "Gauntlet of Shar",
    length: "long",
    difficulty: "Medium",
    reward: "Major story branch, companion progression",
    summary:
      "A layered side quest that becomes central to Shadowheart's character arc. It mixes puzzle rooms, combat encounters, and a major moral decision.",
    aiTip:
      "Bring Shadowheart for maximum narrative impact and explore each trial carefully before entering the final area.",
    video: "https://www.youtube.com/watch?v=oRpfzA0JcGw"
  },
  {
    id: 3,
    game: "Baldur's Gate 3",
    title: "Save the Gondians",
    location: "Steel Watch Foundry",
    length: "medium",
    difficulty: "High",
    reward: "Allied reinforcements for the final battle",
    summary:
      "Infiltrate the Steel Watch Foundry to free enslaved Gondian gnomes forced to build mechanical enforcers. Combat is intense and decisions affect the finale.",
    aiTip:
      "Protect the Gondians during combat — if too many die, you lose their support. Area-of-effect spells can backfire here.",
    video: "https://www.youtube.com/watch?v=rUeiZ38w6dE"
  },
  {
    id: 4,
    game: "Elden Ring",
    title: "Ranni's Questline",
    location: "Liurnia, Nokron, Ainsel River",
    length: "long",
    difficulty: "High",
    reward: "Dark Moon Greatsword, alternate ending path",
    summary:
      "A mysterious multi-zone questline involving hidden cities, powerful bosses, and one of the game's most iconic alternate endings.",
    aiTip:
      "Track NPC dialogue carefully. This quest is easier if you keep notes because the game rarely gives direct objective markers.",
    video: "https://www.youtube.com/watch?v=0RBa82TpYrM"
  },
  {
    id: 5,
    game: "Elden Ring",
    title: "Alexander the Iron Fist",
    location: "Limgrave to Farum Azula",
    length: "medium",
    difficulty: "Medium",
    reward: "Shard of Alexander talisman",
    summary:
      "A memorable NPC journey following a warrior jar across major regions. It rewards exploration and creates a surprisingly emotional arc.",
    aiTip:
      "Speak to Alexander whenever you meet him and avoid rushing late-game areas before progressing his earlier encounters.",
    video: "https://www.youtube.com/watch?v=OR_nbiYVEe0"
  },
  {
    id: 6,
    game: "Elden Ring",
    title: "Millicent's Questline",
    location: "Caelid, Altus Plateau, Haligtree",
    length: "long",
    difficulty: "High",
    reward: "Rotten Winged Sword Insignia / Millicent's Prosthesis",
    summary:
      "Help a Scarlet Rot-afflicted warrior across the Lands Between. The quest spans nearly the entire map and ends with a pivotal choice at the Haligtree.",
    aiTip:
      "Don't miss Gowry's shack in Caelid early on. The quest has easy-to-miss steps — check back with NPCs after major boss kills.",
    video: "https://www.youtube.com/watch?v=aCy_ZEP4AHs"
  },
  {
    id: 7,
    game: "Final Fantasy VII Rebirth",
    title: "Livestock's Bane",
    location: "Grasslands",
    length: "short",
    difficulty: "Low",
    reward: "Party EXP, relationship points, regional progress",
    summary:
      "An early side quest that introduces open-zone investigation. The player tracks a monster threat and learns how Rebirth uses regional activities.",
    aiTip:
      "Use this quest to understand tracking mechanics and improve party synergy before harder Grasslands content.",
    video: "https://www.youtube.com/playlist?list=PLRr5L69yg_kHaW5zjEbZotm_2F9mP1fh5"
  },
  {
    id: 8,
    game: "Final Fantasy VII Rebirth",
    title: "The Saga of the Seaside Inn",
    location: "Corel / Costa del Sol",
    length: "medium",
    difficulty: "Medium",
    reward: "Unique items, exploration progress",
    summary:
      "A light-hearted but involved quest chain focused on rebuilding and supporting a local inn. It blends exploration, mini-objectives, and character humor.",
    aiTip:
      "Complete nearby map objectives first, because several quest steps become faster once fast travel and regional intel are unlocked.",
    video: "https://www.youtube.com/playlist?list=PLRr5L69yg_kHaW5zjEbZotm_2F9mP1fh5"
  },
  {
    id: 9,
    game: "Final Fantasy VII Rebirth",
    title: "Can't Stop Won't Stop",
    location: "Gold Saucer",
    length: "medium",
    difficulty: "Low",
    reward: "Gold Saucer GP, unique materia, date scene progress",
    summary:
      "A sprawling mini-game marathon at the Gold Saucer theme park. Completing activities builds relationship points that influence a key story date scene.",
    aiTip:
      "Focus on your preferred date partner's favorite activities. The chocobo racing and 3D Brawler give the best GP returns.",
    video: "https://www.youtube.com/playlist?list=PLRr5L69yg_kHaW5zjEbZotm_2F9mP1fh5"
  },
  {
    id: 10,
    game: "Cyberpunk 2077: Ultimate Edition",
    title: "Sinnerman",
    location: "Night City",
    length: "medium",
    difficulty: "Medium",
    reward: "Money, narrative outcome, moral choices",
    summary:
      "A disturbing and philosophical questline built around guilt, punishment, media exploitation, and player discomfort rather than traditional combat.",
    aiTip:
      "Play this when you have time to follow the dialogue. The impact comes from the story, not the reward.",
    video: "https://www.youtube.com/watch?v=XYNOuLikqGs"
  },
  {
    id: 11,
    game: "Cyberpunk 2077: Ultimate Edition",
    title: "Dream On",
    location: "Night City / Peralez Apartment",
    length: "medium",
    difficulty: "Low",
    reward: "Political mystery resolution",
    summary:
      "A conspiracy-focused side quest where investigation matters more than combat. It explores surveillance, manipulation, and power in Night City.",
    aiTip:
      "Scan everything in the apartment and listen to the environmental clues before deciding how much truth to reveal.",
    video: "https://www.youtube.com/watch?v=XYNOuLikqGs"
  },
  {
    id: 12,
    game: "Cyberpunk 2077: Ultimate Edition",
    title: "The Hunt",
    location: "Night City / Braindance sequences",
    length: "long",
    difficulty: "Medium",
    reward: "River Ward romance option, unique weapon",
    summary:
      "A dark detective questline where you use braindance technology to track a serial kidnapper. One of the most tense and emotionally heavy side jobs in the game.",
    aiTip:
      "Pay close attention during braindance sequences — missing clues means missing the correct location, which changes the outcome drastically.",
    video: "https://www.youtube.com/watch?v=XYNOuLikqGs"
  },
  {
    id: 13,
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "The Bloody Baron",
    location: "Crow's Perch, Velen",
    length: "long",
    difficulty: "Medium",
    reward: "Story progression, moral consequences",
    summary:
      "A famous questline about family trauma, guilt, war, and consequence. It feels like a main story arc but functions as one of the game's defining side narratives.",
    aiTip:
      "Do not rush the dialogue. Choices in related Velen quests can affect how this storyline resolves.",
    video: "https://www.youtube.com/watch?v=k08RRor_zPI"
  },
  {
    id: 14,
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "A Towerful of Mice",
    location: "Fyke Isle, Velen",
    length: "medium",
    difficulty: "Medium",
    reward: "XP, story outcome, Keira Metz progression",
    summary:
      "A haunted-island investigation mixing tragedy, curses, and player judgment. The best outcome depends on careful questioning and skepticism.",
    aiTip:
      "Use Witcher senses thoroughly and think carefully before trusting supernatural characters.",
    video: "https://www.youtube.com/watch?v=k08RRor_zPI"
  },
  {
    id: 15,
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "Carnal Sins",
    location: "Novigrad",
    length: "medium",
    difficulty: "High",
    reward: "XP, unique story resolution",
    summary:
      "A murder mystery in Novigrad where Geralt must identify a serial killer targeting religious figures. The investigation has a false lead that can result in killing the wrong suspect.",
    aiTip:
      "Examine all crime scenes thoroughly and question the evidence before acting. Rushing leads to an incorrect — and irreversible — outcome.",
    video: "https://www.youtube.com/watch?v=k08RRor_zPI"
  },
  {
    id: 16,
    game: "Metaphor: ReFantazio",
    title: "Help the Hushed Honeybee",
    location: "Grand Trad",
    length: "short",
    difficulty: "Low",
    reward: "Virtue growth, money, early-game routine progress",
    summary:
      "An early activity-style quest that teaches time management and social-stat progression, which are core to the broader RPG loop.",
    aiTip:
      "Good to complete early because it supports character growth without requiring heavy combat preparation.",
    video: "https://www.youtube.com/watch?v=tcST2UBAATE"
  },
  {
    id: 17,
    game: "Metaphor: ReFantazio",
    title: "Pagan's Dilemma",
    location: "Grand Trad",
    length: "medium",
    difficulty: "Medium",
    reward: "Follower-related progress, social insight",
    summary:
      "A side story focused on prejudice, belief, and social pressure. It gives the world more texture beyond the central tournament plot.",
    aiTip:
      "Treat dialogue as part of the quest system. Metaphor often rewards attention to social context, not only combat strength.",
    video: "https://www.youtube.com/watch?v=tcST2UBAATE"
  },
  {
    id: 18,
    game: "Metaphor: ReFantazio",
    title: "The Monster of Grand Trad",
    location: "Grand Trad Sewers",
    length: "medium",
    difficulty: "High",
    reward: "Rare equipment, Archetype unlock progress",
    summary:
      "Track a dangerous creature lurking beneath the capital city. The dungeon is optional but holds some of the best mid-game loot and tests party composition.",
    aiTip:
      "Bring a healer Archetype and stock up on MP restoratives. The boss hits hard and exploits elemental weaknesses.",
    video: "https://www.youtube.com/watch?v=tcST2UBAATE"
  },
  {
    id: 19,
    game: "Demon's Souls",
    title: "Yuria the Witch's Rescue",
    location: "Tower of Latria (3-1)",
    length: "medium",
    difficulty: "High",
    reward: "Access to advanced magic spells, NPC vendor",
    summary:
      "Navigate the nightmarish prison of Latria to free a powerful witch. The tower is filled with mind flayer enemies, narrow walkways, and environmental traps.",
    aiTip:
      "Bring a ranged option and move slowly. The Mind Flayers can paralyze and one-shot you. Free Yuria's key from the guards first.",
    video: "https://www.youtube.com/watch?v=AT8nZUQI2Eg"
  },
  {
    id: 20,
    game: "Demon's Souls",
    title: "Sparkly the Crow's Trades",
    location: "Shrine of Storms (4-1)",
    length: "short",
    difficulty: "Low",
    reward: "Rare upgrade materials, unique consumables",
    summary:
      "An invisible crow on a high nest accepts item trades. Drop specific items and reload the area to receive rare rewards not available anywhere else.",
    aiTip:
      "Look up the trade list — some of the best rewards come from common items you might otherwise sell.",
    video: "https://www.youtube.com/watch?v=AT8nZUQI2Eg"
  },
  {
    id: 21,
    game: "Demon's Souls",
    title: "Scirvir the Wanderer's Challenge",
    location: "Stonefang Tunnel (2-2)",
    length: "short",
    difficulty: "Medium",
    reward: "Pure Greystone, Dragon Bone Smasher access",
    summary:
      "Meet a wandering warrior who challenges you to prove your worth. Completing his request unlocks one of the most powerful strength weapons in the game.",
    aiTip:
      "You need Pure White World Tendency in World 2 to access the Dragon Bone Smasher. Plan your deaths and kills accordingly.",
    video: "https://www.youtube.com/watch?v=AT8nZUQI2Eg"
  },
  {
    id: 22,
    game: "Hogwarts Legacy",
    title: "The Ghost of Our Love",
    location: "Forbidden Forest",
    length: "short",
    difficulty: "Low",
    reward: "Treasure map loot, exploration XP",
    summary:
      "Follow a ghostly trail through the Forbidden Forest at night to uncover a hidden treasure. A short atmospheric quest that showcases the game's exploration.",
    aiTip:
      "Must be done at night — use the wait mechanic if it's daytime. Follow the butterflies carefully; they disappear if you stray too far.",
    video: "https://www.youtube.com/watch?v=2D3l7JImSXU"
  },
  {
    id: 23,
    game: "Hogwarts Legacy",
    title: "Rescuing Rococo",
    location: "Henrietta's Hideaway",
    length: "medium",
    difficulty: "Medium",
    reward: "Niffler companion, unique gear",
    summary:
      "Help a student recover their pet Niffler from a poacher hideout. The dungeon features puzzle-based combat rooms mixing spell types and environmental mechanics.",
    aiTip:
      "Master the spell-type matching puzzles before going in. You need Incendio, Glacius, and Levioso at minimum.",
    video: "https://www.youtube.com/watch?v=2D3l7JImSXU"
  },
  {
    id: 24,
    game: "Hogwarts Legacy",
    title: "The Hall of Herodiana",
    location: "Hogwarts Castle",
    length: "medium",
    difficulty: "Medium",
    reward: "Extra gear inventory slots",
    summary:
      "Solve a series of block-pushing puzzles hidden within Hogwarts to unlock additional gear capacity. One of the most useful side quests in the entire game.",
    aiTip:
      "Use Depulso and Accio strategically. The puzzles get progressively harder — the last room requires careful positioning before any block moves.",
    video: "https://www.youtube.com/watch?v=2D3l7JImSXU"
  },
  {
    id: 25,
    game: "Black Myth: Wukong",
    chapter: 1,
    title: "The Three Bells",
    location: "Chapter 1 – Black Wind Mountain",
    length: "long",
    difficulty: "High",
    reward: "Fireproof Mantle, Elder Jinchi boss fight",
    summary:
      "Find and ring three hidden bells scattered across the three regions of Chapter 1. Ringing the final bell teleports you to a secret Ancient Guanyin Temple where you face Elder Jinchi, a powerful Yaoguai King.",
    aiTip:
      "The bells are easy to miss — explore every branching path in each region. Defeating Elder Jinchi rewards the Fireproof Mantle, which is useful for fire-heavy chapters ahead.",
    video: "https://www.youtube.com/watch?v=DJMSnXJ6c8M"
  },
  {
    id: 26,
    game: "Black Myth: Wukong",
    chapter: 1,
    title: "The Red Loong",
    location: "Chapter 1 – Forest of Wolves",
    length: "medium",
    difficulty: "High",
    reward: "Loong Scales, unique boss drops",
    summary:
      "A hidden dragon boss lurks behind a waterfall near the Outside of the Forest Shrine. Once you obtain Loong Scales, the waterfall reveals a secret arena for an intense dragon fight.",
    aiTip:
      "You need Loong Scales before attempting this. The Red Loong hits extremely hard — learn its attack patterns and dodge toward its hind legs for openings.",
    video: "https://www.youtube.com/watch?v=T4DFKOlrXCQ"
  },
  {
    id: 27,
    game: "Black Myth: Wukong",
    chapter: 2,
    title: "The Drunken Boar – Kingdom of Sahali",
    location: "Chapter 2 – Rockrest Flat",
    length: "long",
    difficulty: "Medium",
    reward: "Access to Kingdom of Sahali, Fuban boss fight",
    summary:
      "Find the Yellow-Robed Squire hidden behind Rockrest Flat. This drunken boar sends you on a multi-part quest to gather a Sobering Stone, Jade Lotus, and Arhat Gold Piece, unlocking the secret Kingdom of Sahali area and the giant beetle boss Fuban.",
    aiTip:
      "The Squire is easy to walk past — check behind buildings in Rockrest Flat. Each fetch item is in a different sub-area of Chapter 2, so explore thoroughly before progressing.",
    video: "https://www.youtube.com/watch?v=Ei3upXnS4lU"
  },
  {
    id: 28,
    game: "Black Myth: Wukong",
    chapter: 2,
    title: "The Black Loong",
    location: "Chapter 2 – Rockrest Flat",
    length: "medium",
    difficulty: "High",
    reward: "Loong-related upgrade materials",
    summary:
      "Another hidden dragon boss found behind a waterfall near the Rockrest Flat Shrine. The Black Loong attacks rhythmically to its own battle music — learning to dodge to the beat is the key to victory.",
    aiTip:
      "Listen to the boss music. Its weapon slams follow the beat — jump and dodge in rhythm. Head toward boulders for cover during its ranged attacks.",
    video: "https://www.youtube.com/watch?v=Ei3upXnS4lU"
  },
  {
    id: 29,
    game: "Black Myth: Wukong",
    chapter: 2,
    title: "Shigandang – The Stone Giant",
    location: "Chapter 2 – Rockrest Flat",
    length: "short",
    difficulty: "High",
    reward: "Rare crafting materials, Spirit",
    summary:
      "Trigger this secret boss by collecting and dropping six Buddha's Eyeballs onto a large rock near the Rockrest Flat Shrine. The massive stone giant has devastating ground-pound attacks.",
    aiTip:
      "Target the blue crystals on its fists — that's the weak point. When it slams the ground causing shockwaves, jump into the air to avoid damage.",
    video: "https://www.youtube.com/watch?v=Ei3upXnS4lU"
  },
  {
    id: 30,
    game: "Black Myth: Wukong",
    chapter: 3,
    title: "The Prisoner – Pagoda Realm",
    location: "Chapter 3 – Pagoda Realm",
    length: "long",
    difficulty: "High",
    reward: "Chu-Bai Spearhead, Chu-Bai Spear crafting material",
    summary:
      "Discover a prisoner deep within the Pagoda Realm and help them escape captivity. This sprawling side quest introduces unique areas, multiple new bosses, and one of the strongest weapons in the game — the Chu-Bai Spear.",
    aiTip:
      "Don't rush through Chapter 3 — the Pagoda Realm is easy to miss. The Chu-Bai Spear is worth the effort and remains viable through endgame.",
    video: "https://www.youtube.com/watch?v=DJMSnXJ6c8M"
  },
  {
    id: 31,
    game: "Black Myth: Wukong",
    chapter: 3,
    title: "The Five Element Carts",
    location: "Chapter 3 – Woods of Ember",
    length: "medium",
    difficulty: "Medium",
    reward: "Elemental crafting materials, unique Spirits",
    summary:
      "After defeating the Pale-Axe Stalwart in the Woods of Ember, speak with him to trigger a psychedelic quest where you battle five sentient, decorated carts — each representing one of the five elements.",
    aiTip:
      "Each cart is weak to its opposing element. Switch your spells and equipment between fights for an easier time. The fire cart is the toughest.",
    video: "https://www.youtube.com/watch?v=T4DFKOlrXCQ"
  },
  {
    id: 32,
    game: "Black Myth: Wukong",
    chapter: 3,
    title: "Yin Tiger – The Blacksmith's Challenge",
    location: "Chapter 3 – Zodiac Village",
    length: "short",
    difficulty: "High",
    reward: "Smithing upgrades, unique equipment",
    summary:
      "Challenge Yin Tiger, a blacksmith at Zodiac Village, to a sparring match. Despite being an optional fight, it's considered one of the hardest boss encounters in the entire game.",
    aiTip:
      "Come prepared with your best gear and healing items. Yin Tiger is extremely aggressive with very small dodge windows — patience and perfect timing are essential.",
    video: "https://www.youtube.com/watch?v=DJMSnXJ6c8M"
  },
  {
    id: 33,
    game: "The Witcher 3: Wild Hunt",
    region: "White Orchard",
    title: "Devil by the Well",
    location: "Abandoned Village, White Orchard",
    length: "short",
    difficulty: "Low",
    reward: "Gold, XP, early Witcher contract experience",
    summary:
      "Geralt's first Witcher contract — investigate a haunted well and defeat the Noonwraith lurking there. A perfect introduction to the investigation-then-combat loop that defines the game.",
    aiTip:
      "Use Yrden sign during the fight and read the bestiary entry. This quest teaches core mechanics you'll use for 100+ hours.",
    video: "https://www.youtube.com/watch?v=k08RRor_zPI"
  },
  {
    id: 34,
    game: "The Witcher 3: Wild Hunt",
    region: "White Orchard",
    title: "Missing in Action",
    location: "Battlefield, White Orchard",
    length: "short",
    difficulty: "Low",
    reward: "XP, gold, introduction to moral choices",
    summary:
      "Help a soldier's brother search a battlefield for his missing sibling. A short quest that introduces the game's moral ambiguity early — things are rarely what they seem.",
    aiTip:
      "Pay attention to dialogue — the 'right' answer isn't obvious. This sets the tone for how Witcher 3 handles choices throughout.",
    video: "https://www.youtube.com/watch?v=k08RRor_zPI"
  },
  {
    id: 35,
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "The Whispering Hillock",
    location: "Ancient Oak, Velen",
    length: "medium",
    difficulty: "Medium",
    reward: "Major story branch, affects Bloody Baron outcome",
    summary:
      "Investigate a mysterious voice trapped beneath an ancient tree. Your choice here directly impacts the Bloody Baron questline and the fate of the orphans of Crookback Bog — one of the game's most agonizing moral dilemmas.",
    aiTip:
      "There is no 'good' outcome — every choice has a cost. Save before deciding and consider which consequences you can live with.",
    video: "https://www.youtube.com/watch?v=CIHatVq0ras"
  },
  {
    id: 36,
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Return to Crookback Bog",
    location: "Crookback Bog, Velen",
    length: "medium",
    difficulty: "High",
    reward: "Story resolution, emotional payoff",
    summary:
      "Return to the Crones' domain to confront the consequences of your earlier choices. A harrowing quest that brings the Velen storyline to its conclusion with a boss fight and devastating narrative beats.",
    aiTip:
      "Prepare for a tough fight with multiple enemies. Your choices from The Whispering Hillock determine what you face here.",
    video: "https://www.youtube.com/watch?v=CIHatVq0ras"
  },
  {
    id: 37,
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "A Dangerous Game",
    location: "Novigrad",
    length: "medium",
    difficulty: "Medium",
    reward: "Rare Gwent cards, gold",
    summary:
      "Help Zoltan recover a collection of rare Gwent cards stolen by Novigrad's criminal underworld. A quest that blends intrigue, combat, and the game's beloved card game into one adventure.",
    aiTip:
      "Keep all three cards at the end for Gwent collection progress. The monetary reward for returning them isn't worth it compared to the cards' value.",
    video: "https://www.youtube.com/watch?v=k08RRor_zPI"
  },
  {
    id: 38,
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "Now or Never",
    location: "Novigrad",
    length: "long",
    difficulty: "Medium",
    reward: "Triss romance path, major story consequence",
    summary:
      "Help Triss smuggle persecuted mages out of Novigrad before the witch hunters close in. A tense, emotionally charged quest that determines Geralt's romantic future and the fate of Novigrad's mage population.",
    aiTip:
      "This is your last chance to commit to Triss's romance. If you tell her to stay at the docks, the romance locks in — choose carefully.",
    video: "https://www.youtube.com/watch?v=CIHatVq0ras"
  },
  {
    id: 39,
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "The Lord of Undvik",
    location: "Undvik, Skellige",
    length: "long",
    difficulty: "High",
    reward: "XP, Hjalmar's loyalty, succession influence",
    summary:
      "Track Hjalmar an Craite to the island of Undvik where he's hunting an ice giant. A sprawling adventure across a frozen island filled with environmental storytelling, puzzles, and one of the game's most cinematic boss fights.",
    aiTip:
      "Explore the entire island before confronting the giant — there's a companion to rescue and environmental clues that enrich the story enormously.",
    video: "https://www.youtube.com/watch?v=CIHatVq0ras"
  },
  {
    id: 40,
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "Possession",
    location: "Svorlag, Skellige",
    length: "medium",
    difficulty: "Medium",
    reward: "Cerys's loyalty, succession influence",
    summary:
      "Help Cerys an Craite investigate a jarl's baby who seems cursed. A quest that blends detective work with Skellige folklore, culminating in a clever solution that proves Cerys's leadership qualities.",
    aiTip:
      "Follow Cerys's lead and trust her plan — it's unconventional but it works. This quest is key if you want Cerys to rule Skellige.",
    video: "https://www.youtube.com/watch?v=CIHatVq0ras"
  },
  {
    id: 41,
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "The Phantom of Eldberg",
    location: "Eldberg Lighthouse, Skellige",
    length: "short",
    difficulty: "High",
    reward: "Gold, XP, lighthouse restoration",
    summary:
      "Investigate why the Eldberg lighthouse keeps going dark, leading to a tense nighttime battle against a Penitent wraith. The atmosphere and buildup make this one of the most memorable Witcher contracts.",
    aiTip:
      "Fight at night when the wraith appears. Use Moon Dust bombs and Yrden to keep it corporeal. The Specter oil gives a significant damage boost.",
    video: "https://www.youtube.com/watch?v=CIHatVq0ras"
  },
  {
    id: 42,
    game: "The Witcher 3: Wild Hunt",
    region: "Toussaint",
    title: "The Warble of a Smitten Knight",
    location: "Tourney Grounds, Toussaint",
    length: "long",
    difficulty: "Medium",
    reward: "Tournament rewards, unique armor, romance option",
    summary:
      "Enter a chivalric tournament in Toussaint's fairytale-like kingdom. Jousting, melee combat, and courtly intrigue — a lighter, more whimsical quest that showcases the Blood & Wine expansion's tone.",
    aiTip:
      "Practice the jousting timing — it's about rhythm, not button mashing. Choose your tournament alias carefully, it affects NPC reactions.",
    video: "https://www.youtube.com/playlist?list=PLWfn8XPMjoaP1CV5wL7qtQ2kfAyL0hc8B"
  },
  {
    id: 43,
    game: "The Witcher 3: Wild Hunt",
    region: "Toussaint",
    title: "Beyond Hill and Dale",
    location: "Land of a Thousand Fables, Toussaint",
    length: "long",
    difficulty: "Medium",
    reward: "Story progression, unique location exploration",
    summary:
      "Enter a magical storybook world where fairy tales have gone horribly wrong. Fight twisted versions of classic characters like Rapunzel, the Big Bad Wolf, and the Three Little Pigs in one of the game's most creative environments.",
    aiTip:
      "Explore every corner of the fable world — it's dense with hidden loot and darkly funny encounters. The Wicked Witch fight requires dodging her cauldron attacks.",
    video: "https://www.youtube.com/playlist?list=PLWfn8XPMjoaP1CV5wL7qtQ2kfAyL0hc8B"
  },
  {
    id: 44,
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "Of Swords and Dumplings",
    location: "Novigrad",
    length: "short",
    difficulty: "Low",
    reward: "Mastercraft sword upgrades unlocked",
    summary:
      "Help a dwarven blacksmith named Hattori reclaim his smithing business from the Novigrad underworld. Completing this unlocks the ability to craft the best Witcher swords in the game.",
    aiTip:
      "Don't skip this quest — Hattori becomes your best weapon crafter. Do it as soon as it's available to access top-tier weapons earlier.",
    video: "https://www.youtube.com/watch?v=k08RRor_zPI"
  },
  {
    id: 45,
    game: "God of War Ragnarök",
    title: "The Lost Lindwyrms",
    location: "Svartalfheim & Vanaheim",
    length: "long",
    difficulty: "Medium",
    reward: "Gale Flame, Lindwyrm Scales, 4500 XP",
    summary:
      "Ratatoskr tasks Kratos with capturing six escaped Lindwyrms scattered across Svartalfheim and Vanaheim. The quest involves tracking down creatures in hidden locations across two realms while enjoying Ratatoskr's sharp-tongued banter.",
    aiTip:
      "Wait until you have access to both realms fully before starting. Collecting all Gale Sparks completes the Draupnir Spear upgrade.",
    video: "https://www.youtube.com/watch?v=S8lHQrkiUeg"
  },
  {
    id: 46,
    game: "God of War Ragnarök",
    title: "Defend Your Valor",
    location: "Muspelheim",
    length: "medium",
    difficulty: "High",
    reward: "Queen's Armor, Queen's Roar Runic Summon, 4000 XP",
    summary:
      "Freya seeks to reclaim her Valkyrie title by defeating Gná, one of the toughest bosses in the game. This endgame favour tests your combat mastery in an intense one-on-one battle.",
    aiTip:
      "Gná is arguably the hardest boss in the game. Equip your best armor and fully upgrade the Draupnir Spear before attempting this fight.",
    video: "https://www.youtube.com/watch?v=S8lHQrkiUeg"
  },
  {
    id: 47,
    game: "God of War Ragnarök",
    title: "Freyr's Gift",
    location: "The Forbidden Sands, Alfheim",
    length: "short",
    difficulty: "Low",
    reward: "Invoke the Storm Runic Summon, Whispering Slabs",
    summary:
      "A brief but lore-rich favour at a large statue west of The Burrows in Alfheim. Kratos solves a light crystal puzzle to activate Freyr's monument while Mimir narrates the history of elven cooperation.",
    aiTip:
      "This takes only a few minutes and rewards a solid Runic Summon. Grab it early when exploring Alfheim for a useful combat ability.",
    video: "https://www.youtube.com/watch?v=S8lHQrkiUeg"
  },
  {
    id: 48,
    game: "Persona 5 Royal",
    title: "A Teacher Maid to Suffer",
    location: "Path of Adyeshach, Mementos",
    length: "medium",
    difficulty: "Medium",
    reward: "Unlocks Temperance Confidant Rank 9 (Kawakami)",
    summary:
      "Kawakami's exploitative former employers must have their hearts changed in Mementos. This request unlocks after reaching Rank 8 with the Temperance Confidant and is required to continue her storyline.",
    aiTip:
      "Prioritize this request quickly after unlocking it. Maxing Kawakami lets you do activities after infiltrating Palaces, one of the best abilities in the game.",
    video: "https://www.youtube.com/watch?v=2B7jq74NS4g"
  },
  {
    id: 49,
    game: "Persona 5 Royal",
    title: "Winners Don't Use Cheats",
    location: "Path of Chemdah, Mementos",
    length: "medium",
    difficulty: "Medium",
    reward: "Unlocks Tower Confidant (Shinya Oda)",
    summary:
      "Mishima reports a kid terrorizing an arcade with impossible win streaks. The target Shadow Nejima evades all attacks on the first encounter, forcing you to return with help from Shinya Oda.",
    aiTip:
      "You cannot defeat this target on your first visit. Progress Shinya's Confidant to learn Down Shot, then return to Mementos to land your hits.",
    video: "https://www.youtube.com/watch?v=2B7jq74NS4g"
  },
  {
    id: 50,
    game: "Persona 5 Royal",
    title: "One Who Bullies Bullies",
    location: "Path of Aiyatsbus, Mementos",
    length: "short",
    difficulty: "Low",
    reward: "Protein, Moon Confidant progression",
    summary:
      "After dealing with a school bully in a prior request, Mishima discovers a master bully coercing others into tormenting students. Eavesdrop at the school gate to identify the target before heading to Mementos.",
    aiTip:
      "Shadow Sakoda is weak to Bless skills. Equip a Persona with Bless affinity and use ailment-inflicting skills to gain Technical damage bonuses.",
    video: "https://www.youtube.com/watch?v=2B7jq74NS4g"
  },
  {
    id: 51,
    game: "Ghost of Tsushima",
    title: "The Spirit of Yarikawa's Vengeance",
    location: "Ruins of Old Yarikawa, Toyotama",
    length: "medium",
    difficulty: "High",
    reward: "Dance of Wrath combat technique, Omukade's Revenge Sword Kit",
    summary:
      "This Mythic Tale sends Jin to the ruins of Old Yarikawa to confront a vengeful spirit. After finding pillars of white smoke and collecting offerings, a tense duel awaits in the Garden of the Gods.",
    aiTip:
      "The spirit duel is one of the hardest in the game. Master the timing of perfect parries and watch for unblockable attacks signaled by red glints.",
    video: "https://www.youtube.com/watch?v=346BJtEDT7o"
  },
  {
    id: 52,
    game: "Ghost of Tsushima",
    title: "The Curse of Uchitsune",
    location: "Hiyoshi Springs, Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Uchitsune's Longbow, Heavy & Explosive Arrows",
    summary:
      "A musician's tale leads Jin on a treasure hunt across painted landmarks to find the legendary Longbow of Uchitsune. Picking up the cursed weapon triggers a hallucination and a duel with a Tengu Demon.",
    aiTip:
      "Follow the painting clues carefully. The Longbow has superior range and armor penetration, making it one of the best ranged weapons in the game.",
    video: "https://www.youtube.com/watch?v=346BJtEDT7o"
  },
  {
    id: 53,
    game: "Ghost of Tsushima",
    title: "The Tale of Sensei Ishikawa",
    location: "Hiyoshi Springs, Izuhara",
    length: "long",
    difficulty: "Medium",
    reward: "Half Bow, Kunai Ghost Weapon, Major Legend Increase",
    summary:
      "A nine-mission questline spanning all three regions of Tsushima following archery master Ishikawa as he tracks his former student Tomoe. The story is a poignant tale of betrayal, duty, and redemption.",
    aiTip:
      "Start this questline early as it spans the entire game. The Kunai reward is extremely useful for staggering enemies and breaking their guard.",
    video: "https://www.youtube.com/watch?v=346BJtEDT7o"
  },
  {
    id: 54,
    game: "Horizon Forbidden West",
    title: "Blood for Blood",
    location: "Memorial Grove, Daunt",
    length: "medium",
    difficulty: "Medium",
    reward: "Perimeter Tripcaster, 2 Skill Points, 4750 XP",
    summary:
      "After the Kulrut ceremony, elder Dekka asks Aloy to help track down her grandson Kavvoh who joined Regalla's rebels. The quest explores themes of family loyalty and tribal division.",
    aiTip:
      "Complete The Kulrut main quest first to unlock this. Search the rebel camp thoroughly, including the hidden pit under wooden floor panels.",
    video: "https://www.youtube.com/watch?v=QkonvBAhgCk"
  },
  {
    id: 55,
    game: "Horizon Forbidden West",
    title: "Forbidden Legacy",
    location: "Legacy's Landfall, San Francisco",
    length: "long",
    difficulty: "Medium",
    reward: "Utaru Protector Outfit, 3 Skill Points, 7500 XP",
    summary:
      "Alva discovers data about Leviathan, a defunct flood control system in the Great Delta. She and Aloy explore the ruins of Atbay Global Infrastructure in San Francisco to recover critical repair data.",
    aiTip:
      "This quest has door code puzzles. Pay attention to environmental clues and data logs for the codes rather than brute-forcing combinations.",
    video: "https://www.youtube.com/watch?v=QkonvBAhgCk"
  },
  {
    id: 56,
    game: "Horizon Forbidden West",
    title: "The Gate of the Vanquished",
    location: "Scalding Spear, Desert",
    length: "long",
    difficulty: "High",
    reward: "Firestorm Warrior Bow, 3 Skill Points, 4125 XP",
    summary:
      "A multi-part quest involving a power struggle between Tenakth commanders Yarra and Drakka over control of Scalding Spear. Aloy must navigate tribal politics and make a consequential choice.",
    aiTip:
      "This quest has a meaningful choice at the end that affects which characters survive. The Firestorm Warrior Bow reward is one of the strongest early weapons regardless of your decision.",
    video: "https://www.youtube.com/watch?v=QkonvBAhgCk"
  },
  {
    id: 57,
    game: "Pillars of Eternity",
    title: "The Man Who Waits",
    location: "Heritage Hill, Defiance Bay",
    length: "medium",
    difficulty: "Medium",
    reward: "Heritage Hill access cleared, Act 2 progression",
    summary:
      "Heritage Hill has been sealed off due to undead rising from the graves. Investigate the source of the disturbance — an ancient Engwithan machine reanimating corpses — and decide the fate of the souls trapped within.",
    aiTip:
      "Bring a priest or paladin for the undead encounters. The final choice affects the district permanently — read the soul descriptions before deciding.",
    video: "https://www.youtube.com/watch?v=jdctxlkILKg"
  },
  {
    id: 58,
    game: "Pillars of Eternity",
    title: "The Trials of Durance",
    location: "Party Companion Quest",
    length: "long",
    difficulty: "Low",
    reward: "Durance's full backstory, companion ability upgrades",
    summary:
      "Unravel the troubled past of Durance, a fanatical priest of Magran, through campfire conversations. His story reveals dark truths about the gods and the Saint's War that reshape your understanding of Eora's history.",
    aiTip:
      "Talk to Durance at every rest. His dialogue triggers are tied to story progression milestones — miss them and you lock yourself out of later revelations.",
    video: "https://www.youtube.com/watch?v=jdctxlkILKg"
  },
  {
    id: 59,
    game: "Pillars of Eternity",
    title: "The Bronze Beneath the Lake",
    location: "Cliaban Rilag, Stormwall Gorge",
    length: "medium",
    difficulty: "High",
    reward: "Engwithan lore, rare equipment, XP",
    summary:
      "Explore the ancient Engwithan ruin of Cliaban Rilag, a flooded temple complex guarded by powerful spirits and constructs. The dungeon reveals secrets about the civilization that created the gods.",
    aiTip:
      "This dungeon hits hard — bring crowd control and area-of-effect damage. The spirits inside resist physical attacks, so casters shine here.",
    video: "https://www.youtube.com/watch?v=jdctxlkILKg"
  },
  {
    id: 60,
    game: "Pillars of Eternity",
    title: "The Master Below",
    location: "Endless Paths of Od Nua, Caed Nua",
    length: "long",
    difficulty: "High",
    reward: "Legendary loot, stronghold upgrade, massive XP",
    summary:
      "Descend all fifteen levels of the Endless Paths beneath your stronghold to confront the Adra Dragon at the bottom. The mega-dungeon spans the entire game and escalates from bandits to some of the toughest encounters in the series.",
    aiTip:
      "Don't try to clear it in one go — return between levels to rest and resupply. The Adra Dragon can be talked down if your Resolve and Lore are high enough.",
    video: "https://www.youtube.com/watch?v=jdctxlkILKg"
  },
  {
    id: 61,
    game: "Pillars of Eternity II: Deadfire",
    title: "The Storms of Poko Kohara",
    location: "Poko Kohara Island",
    length: "medium",
    difficulty: "Medium",
    reward: "Engwithan artifact, faction reputation, XP",
    summary:
      "Investigate a mysterious storm surrounding an ancient Engwithan dig site. The Vailian Trading Company wants the artifacts inside, but the ruin's guardians and rival factions have other plans.",
    aiTip:
      "Your faction choice matters here — completing this for different factions changes later quest availability. Bring a trap specialist for the ruin's interior.",
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
  },
  {
    id: 62,
    game: "Pillars of Eternity II: Deadfire",
    title: "A Sorcerer and a Gentleman",
    location: "Arkemyr's Manor, Periki's Overlook",
    length: "medium",
    difficulty: "Low",
    reward: "Arkemyr's grimoire, rare scrolls, companion quest progression",
    summary:
      "Break into the manor of the archmage Arkemyr to steal his grimoire. A heist-style quest where stealth and disguises work better than combat — you can even wear Arkemyr's own robes to fool his servants.",
    aiTip:
      "Find Arkemyr's robes on the second floor and equip them immediately. The imps and constructs won't attack you while disguised, making the whole heist trivial.",
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
  },
  {
    id: 63,
    game: "Pillars of Eternity II: Deadfire",
    title: "The Lost Grimoires",
    location: "Berkana's Observatory, Magran's Teeth",
    length: "short",
    difficulty: "Medium",
    reward: "Unique grimoires, wizard spell access",
    summary:
      "Track down lost grimoires scattered across the Deadfire Archipelago for the eccentric wizard Berkana. Each grimoire contains unique spell combinations not found elsewhere in the game.",
    aiTip:
      "The grimoires are spread across multiple islands — check your map markers after accepting the quest. Each one adds powerful spell options for wizard party members.",
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
  },
  {
    id: 64,
    game: "Pillars of Eternity II: Deadfire",
    title: "The Changeling's Dance",
    location: "The Gullet, Neketaka",
    length: "long",
    difficulty: "High",
    reward: "Faction reputation, unique cloak, massive XP",
    summary:
      "Navigate the political underworld of the Gullet, Neketaka's impoverished district, where a shapeshifter is manipulating gang warfare. Multiple factions want different outcomes, and your investigation determines who controls the district.",
    aiTip:
      "Invest in Perception and Insight before starting — many key clues require skill checks. The shapeshifter's identity isn't obvious; question everyone and cross-reference their stories.",
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
  },
  {
    id: 65,
    game: "Baldur's Gate 3",
    title: "Investigate the Suspicious Toys",
    location: "Lower City, Baldur's Gate",
    length: "medium",
    difficulty: "Medium",
    reward: "Explosive toys, unique vendor access",
    summary:
      "Discover a toymaker whose creations are actually disguised explosives being distributed to children. The investigation leads through the Lower City's criminal networks and forces a moral confrontation.",
    aiTip:
      "Search the workshop thoroughly — hidden compartments contain evidence that changes available dialogue options with the toymaker.",
    video: "https://www.youtube.com/watch?v=BTU7jPtqSFs"
  },
  {
    id: 66,
    game: "Baldur's Gate 3",
    title: "Free the Artist",
    location: "Zhentarim Hideout / Grymforge",
    length: "short",
    difficulty: "Low",
    reward: "Oskar's paintings, unique interactions in Act 3",
    summary:
      "Rescue the kidnapped painter Oskar from Zhentarim slavers. What seems like a simple rescue sets up a haunting storyline that doesn't resolve until much later in Baldur's Gate itself.",
    aiTip:
      "Buy Oskar's freedom rather than fighting — it's cheaper than the healing you'll need. Visit his house in Act 3 for the quest's surprising conclusion.",
    video: "https://www.youtube.com/watch?v=_BpJ_9fwNGk"
  },
  {
    id: 67,
    game: "Baldur's Gate 3",
    title: "Avenge the Drowned",
    location: "Lower City, Water Queen's House",
    length: "medium",
    difficulty: "High",
    reward: "Wavemother's Robe, Flooding legendary trident",
    summary:
      "The temple of Umberlee demands vengeance against those who wronged the sea goddess. Navigate a web of maritime grudges, underwater exploration, and divine wrath in one of Act 3's most atmospheric quests.",
    aiTip:
      "The Cloak of Elvenkind makes the stealth approach much easier. Multiple solutions exist for each target — not all require combat.",
    video: "https://www.youtube.com/watch?v=wHtKGBsib_w"
  },
  {
    id: 68,
    game: "Baldur's Gate 3",
    title: "Help Omeluum Investigate the Parasite",
    location: "Underdark, Myconid Colony",
    length: "medium",
    difficulty: "Medium",
    reward: "Ring of Mind-Shielding, parasite lore",
    summary:
      "A friendly Mind Flayer named Omeluum offers to study your tadpole and brew a potential cure. The quest sends you deep into the Underdark to find rare ingredients while learning more about your condition.",
    aiTip:
      "The Tongue of Madness and Timmask Spores are both found in the Underdark biome. Omeluum's potion doesn't cure you, but the ring reward is excellent for resisting psychic attacks.",
    video: "https://www.youtube.com/watch?v=OwuMRZFbeTo"
  },
  {
    id: 69,
    game: "Baldur's Gate 3",
    title: "Rescue Wulbren and the Tieflings",
    location: "Moonrise Towers Prison",
    length: "long",
    difficulty: "High",
    reward: "Allied reinforcements, companion approval",
    summary:
      "Infiltrate the prison beneath Moonrise Towers to free captured Tieflings and the gnome inventor Wulbren. A tense stealth-or-combat mission with major consequences for the Ironhand Gnomes and Last Light Inn storylines.",
    aiTip:
      "Free the Tieflings first — they can create a diversion. Wulbren's escape route through the docks avoids the heaviest guard patrols.",
    video: "https://www.youtube.com/watch?v=6UBfg_xxLiQ"
  },
  {
    id: 70,
    game: "Elden Ring",
    title: "Volcano Manor Questline",
    location: "Mt. Gelmir, Volcano Manor",
    length: "long",
    difficulty: "High",
    reward: "Raging Wolf Set, Taker's Cameo talisman, Serpentbone Blade",
    summary:
      "Join a secret assassination covenant within Volcano Manor and hunt down Tarnished targets across the Lands Between. Each contract reveals more about the Manor's sinister mistress, Tanith, and the God-Devouring Serpent.",
    aiTip:
      "Complete all assassination contracts before killing Rykard — defeating the boss locks you out of remaining contracts and NPC interactions.",
    video: "https://www.youtube.com/watch?v=adyGTfYzW1o"
  },
  {
    id: 71,
    game: "Elden Ring",
    title: "Fia's Questline",
    location: "Roundtable Hold, Deeproot Depths",
    length: "long",
    difficulty: "High",
    reward: "Mending Rune of the Death-Prince, alternate ending",
    summary:
      "Follow the Deathbed Companion Fia through a storyline about Those Who Live in Death. Her quest spans from the Roundtable Hold to the hidden Deeproot Depths and unlocks one of the game's secret endings.",
    aiTip:
      "Hug Fia regularly at the Roundtable Hold to progress her dialogue. You must defeat Lichdragon Fortissax to complete her quest — it's one of the game's harder optional bosses.",
    video: "https://www.youtube.com/watch?v=85I3cqQ1gK0"
  },
  {
    id: 72,
    game: "Elden Ring",
    title: "Nepheli Loux's Questline",
    location: "Stormveil Castle, Roundtable Hold, Village of the Albinaurics",
    length: "medium",
    difficulty: "Medium",
    reward: "Ancient Dragon Smithing Stone, Stormhawk King ash",
    summary:
      "Help the warrior Nepheli find her purpose after being disowned by her adoptive father Gideon. Her journey through betrayal and self-discovery culminates in her becoming the rightful ruler of Limgrave.",
    aiTip:
      "Give Nepheli the Stormhawk King ashes from the Chapel of Anticipation. After completing Farum Azula, return to Stormveil's throne room for the satisfying conclusion.",
    video: "https://www.youtube.com/watch?v=EY6CiENiNw4"
  },
  {
    id: 73,
    game: "Elden Ring",
    title: "Goldmask's Questline",
    location: "Altus Plateau, Leyndell, Mountaintops",
    length: "long",
    difficulty: "Medium",
    reward: "Mending Rune of Perfect Order, alternate ending",
    summary:
      "Aid Brother Corhyn and the enigmatic Goldmask in deciphering the fundamental flaws of the Golden Order. A philosophical questline about faith, divinity, and the nature of the Erdtree's rule.",
    aiTip:
      "Goldmask moves locations as you progress — check the Altus Plateau bridge first. Use the Law of Regression incantation at the Erdtree Sanctuary to reveal a crucial secret.",
    video: "https://www.youtube.com/watch?v=-FeB5PTagZY"
  },
  {
    id: 74,
    game: "Final Fantasy VII Rebirth",
    title: "The Protorelic Quests",
    location: "Multiple Regions",
    length: "long",
    difficulty: "Medium",
    reward: "Protorelic summon materia, powerful summons",
    summary:
      "Each open-world region contains a multi-step quest to recover ancient Protorelic artifacts. These involve exploration puzzles, combat trials, and boss fights that reward unique summon materia for your party.",
    aiTip:
      "Complete each region's Intel objectives first — they reveal Protorelic quest locations. The summon materia rewards are some of the strongest abilities in the game.",
    video: "https://www.youtube.com/playlist?list=PLRr5L69yg_kHaW5zjEbZotm_2F9mP1fh5"
  },
  {
    id: 75,
    game: "Final Fantasy VII Rebirth",
    title: "Flowers from the Hill",
    location: "Kalm Region",
    length: "short",
    difficulty: "Low",
    reward: "Relationship points, crafting materials",
    summary:
      "A gentle early quest where Cloud helps a young girl gather rare flowers on the outskirts of Kalm. It establishes the exploration mechanics and rewards careful attention to the environment.",
    aiTip:
      "The rarest flower is on a cliff edge that requires jumping — look for yellow climbing handholds nearby.",
    video: "https://www.youtube.com/playlist?list=PLRr5L69yg_kHaW5zjEbZotm_2F9mP1fh5"
  },
  {
    id: 76,
    game: "Final Fantasy VII Rebirth",
    title: "The Musclehead Colosseum",
    location: "Gold Saucer / Corel Region",
    length: "medium",
    difficulty: "High",
    reward: "Unique materia, rare equipment, GP",
    summary:
      "Enter a series of increasingly brutal arena battles at the Gold Saucer's combat colosseum. The final rounds pit you against superboss-level opponents that test your build and strategy.",
    aiTip:
      "Elemental materia combinations are key for later rounds. The final champion has no elemental weakness — focus on limit breaks and synergy attacks.",
    video: "https://www.youtube.com/playlist?list=PLRr5L69yg_kHaW5zjEbZotm_2F9mP1fh5"
  },
  {
    id: 77,
    game: "Final Fantasy VII Rebirth",
    title: "Where the Wind Blows",
    location: "Junon Region",
    length: "medium",
    difficulty: "Medium",
    reward: "Chocobo gear upgrades, exploration access",
    summary:
      "Help a chocobo rancher investigate why the local chocobos have been acting strangely. The investigation reveals environmental threats and unlocks new chocobo traversal abilities for the region.",
    aiTip:
      "Unlocking the chocobo's new ability early opens shortcuts throughout Junon. Complete this before other Junon side content for easier navigation.",
    video: "https://www.youtube.com/playlist?list=PLRr5L69yg_kHaW5zjEbZotm_2F9mP1fh5"
  },
  {
    id: 78,
    game: "Cyberpunk 2077: Ultimate Edition",
    title: "Judy's Questline (Pyramid Song)",
    location: "Night City / Laguna Bend",
    length: "long",
    difficulty: "Medium",
    reward: "Judy romance, Diving Suit, emotional payoff",
    summary:
      "Follow Judy Alvarez through her quest to take down the Clouds dollhouse and reclaim her past. The final quest, Pyramid Song, features an underwater dive through a submerged town — one of the most beautiful and intimate moments in the game.",
    aiTip:
      "Play as female V for the romance option. Take your time during the diving sequence — the environmental storytelling is exceptional and easily missed if you rush.",
    video: "https://www.youtube.com/watch?v=XYNOuLikqGs"
  },
  {
    id: 79,
    game: "Cyberpunk 2077: Ultimate Edition",
    title: "Chippin' In",
    location: "Night City / Oil Fields",
    length: "long",
    difficulty: "High",
    reward: "Johnny's Porsche 911 II, Malorian Arms pistol",
    summary:
      "Help Johnny Silverhand settle old scores with the remnants of his band and confront his past at the oil fields where his body was dumped. A pivotal quest that determines your relationship with Johnny and unlocks the secret ending.",
    aiTip:
      "Choose dialogue options that show empathy toward Johnny — your relationship score here directly affects whether the secret ending becomes available.",
    video: "https://www.youtube.com/watch?v=XYNOuLikqGs"
  },
  {
    id: 80,
    game: "Cyberpunk 2077: Ultimate Edition",
    title: "The Peralez Conspiracy (I Fought the Law)",
    location: "Night City / Charter Hill",
    length: "long",
    difficulty: "Medium",
    reward: "Eddies, political intrigue resolution",
    summary:
      "Investigate a seemingly routine case for a mayoral candidate that spirals into a terrifying conspiracy about mind control, surveillance, and hidden powers manipulating Night City from the shadows.",
    aiTip:
      "Scan every piece of evidence at each crime scene. The conspiracy goes deeper than the game explicitly tells you — read all shards and emails for the full picture.",
    video: "https://www.youtube.com/watch?v=XYNOuLikqGs"
  },
  {
    id: 81,
    game: "Cyberpunk 2077: Ultimate Edition",
    title: "Phantom Liberty – Firestarter",
    location: "Dogtown",
    length: "long",
    difficulty: "High",
    reward: "Relic skill tree access, Dogtown exploration",
    summary:
      "The opening mission of the Phantom Liberty expansion plunges V into Dogtown's dangerous politics. Work with NUSA agent Solomon Reed to infiltrate a fortified stadium and rescue the President of the New United States.",
    aiTip:
      "Explore Dogtown thoroughly after this mission — the expansion's best side content opens up. The Relic skill tree transforms V's combat abilities significantly.",
    video: "https://www.youtube.com/watch?v=XYNOuLikqGs"
  },
  {
    id: 82,
    game: "Metaphor: ReFantazio",
    title: "The Tournament of Souls",
    location: "Grand Trad Arena",
    length: "long",
    difficulty: "High",
    reward: "Archetype unlock, rare equipment, massive follower growth",
    summary:
      "Enter a multi-round combat tournament that tests your party composition against increasingly powerful opponents. Each round introduces unique mechanics and enemy archetypes that force you to adapt your strategy.",
    aiTip:
      "Switch Archetypes between rounds to exploit enemy weaknesses. The final opponent resists everything — raw damage output and buff stacking are your best options.",
    video: "https://www.youtube.com/watch?v=tcST2UBAATE"
  },
  {
    id: 83,
    game: "Metaphor: ReFantazio",
    title: "The Nameless Soldier",
    location: "Fort Endra",
    length: "medium",
    difficulty: "Medium",
    reward: "Virtue growth, unique weapon, lore revelations",
    summary:
      "Investigate reports of a ghostly soldier haunting a ruined fortress. The quest blends dungeon exploration with a poignant story about loyalty, sacrifice, and the cost of the kingdom's wars.",
    aiTip:
      "Bring characters with high Courage — several dialogue checks require it. The ghost's weakness is Light-type attacks.",
    video: "https://www.youtube.com/watch?v=tcST2UBAATE"
  },
  {
    id: 84,
    game: "Metaphor: ReFantazio",
    title: "Follower: Louis's Request",
    location: "Varies by story chapter",
    length: "long",
    difficulty: "Medium",
    reward: "Louis Confidant progression, unique Archetype abilities",
    summary:
      "Deepen your bond with the enigmatic Louis through a series of conversations and tasks that reveal his complex motivations. His questline is one of the most narratively important in the game and directly affects the ending.",
    aiTip:
      "Prioritize Louis's Follower ranks early — his later abilities are among the strongest in the game. Pay close attention to his philosophy; your responses matter.",
    video: "https://www.youtube.com/watch?v=tcST2UBAATE"
  },
  {
    id: 85,
    game: "Demon's Souls",
    title: "Saint Urbain's Rescue",
    location: "Shrine of Storms (4-2)",
    length: "medium",
    difficulty: "High",
    reward: "Access to miracle spells, Second Chance miracle",
    summary:
      "Rescue the holy man Saint Urbain from the depths of the Shrine of Storms. He's trapped in a pit surrounded by deadly shadow lurkers, and freeing him unlocks the game's most powerful defensive miracle.",
    aiTip:
      "Bring a light source — the pit is pitch black. Second Chance is arguably the best miracle in the game, reviving you once per casting at half HP.",
    video: "https://www.youtube.com/watch?v=AT8nZUQI2Eg"
  },
  {
    id: 86,
    game: "Demon's Souls",
    title: "Mephistopheles' Assassinations",
    location: "The Nexus",
    length: "long",
    difficulty: "High",
    reward: "Foe's Ring, unique souls, Colorless Demon Souls",
    summary:
      "A mysterious woman in black appears in the Nexus at Pure Black Character Tendency and tasks you with assassinating every named NPC. A dark questline for players willing to sacrifice their allies for power.",
    aiTip:
      "Only attempt this on a character you're willing to lose NPC services on. Complete all NPC quests and purchases before starting. The Foe's Ring boosts damage at low HP — extremely powerful for skilled players.",
    video: "https://www.youtube.com/watch?v=AT8nZUQI2Eg"
  },
  {
    id: 87,
    game: "Demon's Souls",
    title: "Patches the Hyena",
    location: "Stonefang Tunnel (2-2), Shrine of Storms (4-2)",
    length: "short",
    difficulty: "Low",
    reward: "Heavy Arrows, vendor access, comedic encounters",
    summary:
      "Encounter the treacherous Patches across multiple worlds as he repeatedly tries to trick you into traps. A recurring FromSoftware character who became a staple of the Souls series starting here.",
    aiTip:
      "Don't attack Patches — he becomes a useful vendor in the Nexus. Say 'No' when he asks if you're a cleric for the best outcome.",
    video: "https://www.youtube.com/watch?v=AT8nZUQI2Eg"
  },
  {
    id: 88,
    game: "Hogwarts Legacy",
    title: "The Hippogriff Marks the Spot",
    location: "Poidsear Coast",
    length: "medium",
    difficulty: "Medium",
    reward: "Treasure vault loot, exploration XP, unique gear",
    summary:
      "Follow a treasure map leading to a series of clues scattered across the Poidsear Coast. Each clue brings you closer to a hidden vault guarded by dark wizards and ancient enchantments.",
    aiTip:
      "Use Revelio frequently — the clues blend into the environment. The final vault requires Alohomora Level 2, so upgrade your lockpicking first.",
    video: "https://www.youtube.com/watch?v=2D3l7JImSXU"
  },
  {
    id: 89,
    game: "Hogwarts Legacy",
    title: "In the Shadow of the Undercroft",
    location: "Hogwarts Castle",
    length: "long",
    difficulty: "Medium",
    reward: "Sebastian Sallow companion quests, Dark Arts access",
    summary:
      "Sebastian Sallow reveals a secret room beneath Hogwarts and begins teaching you forbidden magic. This questline spans the entire game and forces increasingly difficult moral choices about the Dark Arts.",
    aiTip:
      "This is the only way to learn the Unforgivable Curses. Progressing Sebastian's story doesn't lock you into being 'evil' — you can learn the spells and still make good choices.",
    video: "https://www.youtube.com/watch?v=2D3l7JImSXU"
  },
  {
    id: 90,
    game: "Hogwarts Legacy",
    title: "Mer-ky Depths",
    location: "Black Lake",
    length: "medium",
    difficulty: "Medium",
    reward: "Unique underwater gear, rare crafting materials",
    summary:
      "Investigate disturbances in the Black Lake involving agitated Grindylows and a mystery beneath the water's surface. Features one of the game's most visually impressive underwater sequences.",
    aiTip:
      "Equip cold-resistance gear before diving. The Grindylows attack in swarms — use Depulso to create distance and Incendio for area damage.",
    video: "https://www.youtube.com/watch?v=2D3l7JImSXU"
  },
  {
    id: 91,
    game: "Hogwarts Legacy",
    title: "Natty's Questline (The High Keep)",
    location: "Feldcroft Region / Falbarton Castle",
    length: "long",
    difficulty: "High",
    reward: "Natsai Onai companion progression, powerful gear",
    summary:
      "Help Natsai Onai investigate Harlow's criminal operations and ultimately assault Falbarton Castle. The questline explores themes of justice, revenge, and the limits of doing what's right.",
    aiTip:
      "The castle assault is one of the harder combat encounters — stock up on potions and upgrade your combat plants. Use the environment for cover during the courtyard fight.",
    video: "https://www.youtube.com/watch?v=2D3l7JImSXU"
  },
  {
    id: 92,
    game: "God of War Ragnarök",
    title: "The Weight of Chains",
    location: "Svartalfheim",
    length: "long",
    difficulty: "Medium",
    reward: "Draupnir Spear attachments, Lunda's Armor set",
    summary:
      "Investigate the dwarven mining operations in Svartalfheim and uncover the brutal conditions imposed by Odin's regime. A quest chain that deepens the world-building around dwarven culture and resistance.",
    aiTip:
      "Complete the optional dock areas for crafting materials. Lunda's armor set inflicts Poison on parry — one of the best early armor options.",
    video: "https://www.youtube.com/watch?v=S8lHQrkiUeg"
  },
  {
    id: 93,
    game: "God of War Ragnarök",
    title: "Spirit of Rebellion",
    location: "Vanaheim, The Crater",
    length: "long",
    difficulty: "High",
    reward: "Rond of Affliction shield attachment, Chaos Flame",
    summary:
      "Help the Vanir resistance fight back against Asgardian occupation in Vanaheim's massive Crater region. This sprawling favour chain opens up one of the game's largest optional areas with day/night cycle mechanics.",
    aiTip:
      "The Crater is enormous — use the Celestial Altars to switch between day and night, as different paths and enemies appear at different times.",
    video: "https://www.youtube.com/watch?v=S8lHQrkiUeg"
  },
  {
    id: 94,
    game: "God of War Ragnarök",
    title: "Fit for a King",
    location: "Svartalfheim, Niðavellir",
    length: "medium",
    difficulty: "Medium",
    reward: "Steinbjörn Armor set materials, Amulet Enchantment",
    summary:
      "Track down the legendary Sleeping Troll hidden in Svartalfheim's mountains. Waking and defeating it provides materials for one of the game's most powerful armor sets.",
    aiTip:
      "The Sleeping Troll is a mini-boss that hits extremely hard. Use the Draupnir Spear's range to stay safe and detonate embedded spears for burst damage.",
    video: "https://www.youtube.com/watch?v=S8lHQrkiUeg"
  },
  {
    id: 95,
    game: "God of War Ragnarök",
    title: "The Berserker Gravestone Battles",
    location: "Multiple Realms",
    length: "long",
    difficulty: "High",
    reward: "Berserker Armor set, Hilt of Skofnung",
    summary:
      "Find and battle twelve Berserker spirits sealed in gravestones across all nine realms. The ultimate optional boss rush culminates in a fight against the Berserker King — one of the hardest encounters in the game.",
    aiTip:
      "Each Berserker has different elemental affinities — switch equipment accordingly. Save the King for last; he's harder than the final story boss. Level 9 gear is recommended.",
    video: "https://www.youtube.com/watch?v=S8lHQrkiUeg"
  },
  {
    id: 96,
    game: "Persona 5 Royal",
    title: "Maruki's Confidant (Councillor)",
    location: "Shujin Academy",
    length: "long",
    difficulty: "Low",
    reward: "Third semester access, true ending, unique Personas",
    summary:
      "Build your relationship with Dr. Takuto Maruki, the new school counselor. His Confidant is the single most important side activity in Royal — reaching Rank 9 before November unlocks the entire third semester and true ending.",
    aiTip:
      "This is NON-NEGOTIABLE for the true ending. Prioritize Maruki above all other Confidants. You must reach Rank 9 by November 17th or you miss the best content in the game.",
    video: "https://www.youtube.com/watch?v=2B7jq74NS4g"
  },
  {
    id: 97,
    game: "Persona 5 Royal",
    title: "Akechi's Confidant (Justice)",
    location: "Kichijoji",
    length: "long",
    difficulty: "Low",
    reward: "Third semester content, story revelations, powerful abilities",
    summary:
      "Spend time with the detective prince Goro Akechi, your rival and intellectual equal. His Royal Confidant adds crucial scenes to the third semester and recontextualizes his entire character arc.",
    aiTip:
      "Reach Rank 8 by November 17th alongside Maruki. Akechi respects honesty — choose blunt, confrontational dialogue options for the best affinity gains.",
    video: "https://www.youtube.com/watch?v=2B7jq74NS4g"
  },
  {
    id: 98,
    game: "Persona 5 Royal",
    title: "Mementos Mission: The Killer Who Cleans Up",
    location: "Path of Da'at, Mementos",
    length: "medium",
    difficulty: "High",
    reward: "Massive XP, unlocks Empress Confidant progression",
    summary:
      "Target a dangerous serial killer hiding deep in Mementos who has been eliminating witnesses. One of the more challenging Mementos requests featuring a Shadow with powerful instant-kill abilities.",
    aiTip:
      "Equip accessories that null or resist Curse and Bless — the Shadow spams Hamaon and Mudoon. Technical damage from status effects is the fastest way to win.",
    video: "https://www.youtube.com/watch?v=2B7jq74NS4g"
  },
  {
    id: 99,
    game: "Persona 5 Royal",
    title: "Yoshizawa's Confidant (Faith)",
    location: "Kichijoji / Various",
    length: "long",
    difficulty: "Low",
    reward: "Kasumi's true awakening, powerful party member",
    summary:
      "Follow gymnast Kasumi Yoshizawa's story through her struggles with identity, loss, and self-worth. Her Confidant unfolds slowly but delivers one of Royal's biggest emotional and narrative surprises.",
    aiTip:
      "Her Confidant auto-progresses through story events until the third semester. Focus on the choices that show genuine support rather than empty encouragement.",
    video: "https://www.youtube.com/watch?v=2B7jq74NS4g"
  },
  {
    id: 100,
    game: "Ghost of Tsushima",
    title: "The Legend of Tadayori",
    location: "Azamo Bay, Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Tadayori's Armor set (best archery armor)",
    summary:
      "Track down the legendary armor of the archer Tadayori by following clues across Izuhara. The quest culminates in a duel against a ronin guarding the armor's resting place — a test of your ranged combat skills.",
    aiTip:
      "Tadayori's Armor dramatically improves concentration mode for the bow. This is the best armor for ranged playstyles — grab it early.",
    video: "https://www.youtube.com/watch?v=346BJtEDT7o"
  },
  {
    id: 101,
    game: "Ghost of Tsushima",
    title: "The Heavenly Strike",
    location: "Toyotama",
    length: "short",
    difficulty: "Medium",
    reward: "Heavenly Strike combat technique",
    summary:
      "A Mythic Tale that teaches Jin a devastating unblockable attack. Follow a musician's directions to a hidden dojo where you must prove your swordsmanship through a series of increasingly difficult combat trials.",
    aiTip:
      "Heavenly Strike is one of the best combat abilities in the game — it breaks through any guard. Master the timing in the trials; they teach you the exact rhythm.",
    video: "https://www.youtube.com/watch?v=346BJtEDT7o"
  },
  {
    id: 102,
    game: "Ghost of Tsushima",
    title: "The Tale of Lady Masako",
    location: "Izuhara / Toyotama",
    length: "long",
    difficulty: "Medium",
    reward: "Major Legend Increase, unique dye, emotional story",
    summary:
      "A nine-part questline following the elderly warrior Lady Masako as she hunts down those responsible for the massacre of her entire family. A revenge story that explores grief, obsession, and whether vengeance can ever bring peace.",
    aiTip:
      "Start early as this spans most of the game. The final quest has a major choice — there's no purely 'good' option, so choose what feels right for your version of Jin.",
    video: "https://www.youtube.com/watch?v=346BJtEDT7o"
  },
  {
    id: 103,
    game: "Ghost of Tsushima",
    title: "Gosaku's Armor",
    location: "Akashima, Toyotama",
    length: "long",
    difficulty: "Medium",
    reward: "Gosaku's Armor (best melee armor), massive stagger damage",
    summary:
      "Liberate six occupied farmsteads across Toyotama to collect keys that unlock the legendary armor of the warrior Gosaku. Each farmstead is a combat encounter with Mongol forces, building toward the armor's hidden shrine.",
    aiTip:
      "Gosaku's Armor restores health on staggered kills — it's arguably the best combat armor. The six farmsteads are spread across the map; liberate them as you explore naturally.",
    video: "https://www.youtube.com/watch?v=346BJtEDT7o"
  },
  {
    id: 104,
    game: "Horizon Forbidden West",
    title: "The Kulrut",
    location: "Memorial Grove, Daunt",
    length: "medium",
    difficulty: "Medium",
    reward: "Tenakth allies, arena access, 5000 XP",
    summary:
      "Attend the sacred Kulrut ceremony where Tenakth warriors prove themselves in ritual combat against machines. The ceremony is disrupted by rebels, forcing Aloy into the arena to fight alongside the clans.",
    aiTip:
      "Prepare for a multi-wave machine fight. Tear damage weapons strip armor quickly — use Tearblast arrows to expose weak points before switching to elemental damage.",
    video: "https://www.youtube.com/watch?v=QkonvBAhgCk"
  },
  {
    id: 105,
    game: "Horizon Forbidden West",
    title: "The Wings of the Ten",
    location: "Sheerside Mountains",
    length: "long",
    difficulty: "High",
    reward: "Sunwing Override, flying mount access",
    summary:
      "A pivotal quest where Aloy gains the ability to override and ride Sunwing machines, unlocking flight across the entire map. The quest involves infiltrating a Regalla rebel camp and confronting a massive Dreadwing.",
    aiTip:
      "This unlocks flight — do it as soon as it's available. The Dreadwing boss is weak to Fire. After completing this, every collectible and side quest becomes dramatically easier to reach.",
    video: "https://www.youtube.com/watch?v=QkonvBAhgCk"
  },
  {
    id: 106,
    game: "Horizon Forbidden West",
    title: "Tallneck: The Devil's Thirst",
    location: "The Daunt",
    length: "short",
    difficulty: "Low",
    reward: "Map reveal, XP, early exploration boost",
    summary:
      "Override the first Tallneck to reveal the surrounding map. Each Tallneck is an environmental puzzle requiring Aloy to find a path to its head — this one involves climbing ruins around a flooded area.",
    aiTip:
      "Always prioritize Tallnecks when you enter a new region — the map reveal shows all nearby activities, collectibles, and machine sites.",
    video: "https://www.youtube.com/watch?v=QkonvBAhgCk"
  },
  {
    id: 107,
    game: "Horizon Forbidden West",
    title: "The Sea of Sands",
    location: "Stillsands, Desert",
    length: "long",
    difficulty: "High",
    reward: "Arena access, Oseram Artificer gear, 6000 XP",
    summary:
      "Cross a treacherous desert filled with burrowing machines to reach a buried ruin. The sandstorms limit visibility while Tremortusks and Slitherfangs patrol the dunes — one of the tensest exploration sequences in the game.",
    aiTip:
      "Craft Freeze ammo before entering — desert machines are almost all weak to Frost. Use the rock formations for cover during sandstorms when visibility drops.",
    video: "https://www.youtube.com/watch?v=QkonvBAhgCk"
  },
  {
    id: 108,
    game: "Pillars of Eternity",
    title: "The Dozen's Dispute",
    location: "Defiance Bay",
    length: "medium",
    difficulty: "Medium",
    reward: "Faction reputation, gold, Act 2 allies",
    summary:
      "Navigate the political rivalry between Defiance Bay's major factions — the Dozens, the Crucible Knights, and the Doemenels. Each faction offers unique quests and rewards, but aligning with one locks you out of the others.",
    aiTip:
      "Choose your faction carefully — it affects available quests and companions' reactions. The Crucible Knights offer the best equipment rewards, the Dozens the most story content.",
    video: "https://www.youtube.com/watch?v=jdctxlkILKg"
  },
  {
    id: 109,
    game: "Pillars of Eternity",
    title: "Through Death's Gate",
    location: "Brackenbury, Defiance Bay",
    length: "medium",
    difficulty: "Medium",
    reward: "Rare ring, animancy lore, XP",
    summary:
      "Investigate a sanitarium where animancers are conducting controversial experiments on souls. The quest explores the game's central theme of soul manipulation and forces you to decide how far science should go.",
    aiTip:
      "Read every patient record — they contain hints about the correct ward to investigate. Your choices here affect the animancy hearing later in the act.",
    video: "https://www.youtube.com/watch?v=jdctxlkILKg"
  },
  {
    id: 110,
    game: "Pillars of Eternity II: Deadfire",
    title: "Hasongo Investigation",
    location: "Hasongo Island",
    length: "medium",
    difficulty: "Medium",
    reward: "Main story progression, Naga allies or enemies, XP",
    summary:
      "Investigate a destroyed lighthouse on Hasongo where the god Eothas passed through. The island is overrun with Naga, and your diplomatic choices determine whether they become allies or foes for the rest of the game.",
    aiTip:
      "If you have high Diplomacy, you can broker peace with the Naga — this gives you access to their trading post with unique items unavailable otherwise.",
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
  },
  {
    id: 111,
    game: "Pillars of Eternity II: Deadfire",
    title: "Berath's Blessings",
    location: "Various Islands",
    length: "long",
    difficulty: "High",
    reward: "Unique enchantments, powerful soul-bound weapons",
    summary:
      "Complete a series of challenges across the Deadfire for the god of death, Berath. Each challenge tests a different aspect of your party — combat, stealth, diplomacy — and rewards soul-bound weapons that grow stronger with use.",
    aiTip:
      "Soul-bound weapons level up through specific kill conditions — read the requirements carefully. Berath's challenges are easier with a diverse party covering all skill checks.",
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
  },

  // ── Baldur's Gate 3 (additional) ──────────────────────────────────────────
  {
    id: 112,
    game: "Baldur's Gate 3",
    title: "The Pale Elf",
    location: "Wilderness / Act 1",
    length: "medium",
    difficulty: "Medium",
    reward: "Astarion companion, vampire lore, unique dialogue",
    summary:
      "Recruit Astarion, a charming vampire spawn with a dark secret. His companion quest unfolds across all three acts, building toward a pivotal choice that determines whether he becomes a true vampire lord or breaks free of his master.",
    aiTip:
      "Don't let Astarion bite you at camp early on — it has consequences. His questline rewards players who take time to understand his past rather than judge him.",
    video: "https://www.youtube.com/watch?v=rUJ9dRaOyns"
  },
  {
    id: 113,
    game: "Baldur's Gate 3",
    title: "Shadowheart's Past",
    location: "Gauntlet of Shar / Baldur's Gate",
    length: "long",
    difficulty: "High",
    reward: "Shadowheart loyalty, powerful cleric abilities, story resolution",
    summary:
      "Uncover the truth about Shadowheart's hidden memories and her devotion to the goddess Shar. The questline culminates in a heart-wrenching choice at the Gauntlet of Shar that defines her character for the rest of the game.",
    aiTip:
      "Build approval with Shadowheart throughout the game before reaching the Gauntlet. The final choice has no objectively correct answer — consider what kind of ending you want for her.",
    video: "https://www.youtube.com/watch?v=QEx4mUKNcr8"
  },
  {
    id: 114,
    game: "Baldur's Gate 3",
    title: "Investigate the Murders",
    location: "Lower City, Baldur's Gate",
    length: "long",
    difficulty: "Medium",
    reward: "Pearlescent Strix weapon, justice for victims",
    summary:
      "Track a serial killer stalking the streets of Baldur's Gate who leaves victims drained of blood. The investigation leads through the city's underworld and connects to a much larger conspiracy in Act 3.",
    aiTip:
      "Examine every victim carefully and follow every lead before confronting suspects. The killer's identity is well-disguised and multiple false trails are laid.",
    video: "https://www.youtube.com/watch?v=Arve0okS648"
  },
  {
    id: 115,
    game: "Baldur's Gate 3",
    title: "The Stolen Gnome",
    location: "Blighted Village",
    length: "short",
    difficulty: "Low",
    reward: "Gnome companion assistance, XP, unique dialogue",
    summary:
      "Rescue a gnome inventor named Barcus Wroot who has been strapped to a windmill by goblins. A quick but memorable encounter that introduces recurring NPC Barcus and showcases the game's environmental storytelling.",
    aiTip:
      "Stop the windmill before freeing Barcus — there's a brake lever nearby. Freeing him correctly sets up later encounters where he repays the favour.",
    video: "https://www.youtube.com/watch?v=dZTXqF9r0uE"
  },
  {
    id: 116,
    game: "Baldur's Gate 3",
    title: "Lift the Shadow Curse",
    location: "Shadow-Cursed Lands, Act 2",
    length: "long",
    difficulty: "High",
    reward: "Art Cullagh freed, Halsin quest progression, Last Light Inn saved",
    summary:
      "Work with the druid Halsin to break the ancient shadow curse blighting the land around Moonrise Towers. The quest requires venturing deep into cursed territory and confronting the source of the darkness.",
    aiTip:
      "Always carry Moonlantern or pixie blessing to survive the shadow curse. Escort Halsin carefully during the ritual — he can die, which locks you out of the good ending.",
    video: "https://www.youtube.com/watch?v=Z5eYa3hzlVQ"
  },
  {
    id: 117,
    game: "Baldur's Gate 3",
    title: "Gale's Ambition",
    location: "Blackstaff Tower / Waterdeep",
    length: "long",
    difficulty: "Medium",
    reward: "Gale companion resolution, unique ending option",
    summary:
      "Follow Gale the wizard's questline as he struggles with a magical orb embedded in his chest that threatens to consume him. His story builds to an explosive climax with consequences for the entire city of Baldur's Gate.",
    aiTip:
      "Feed Gale magical items regularly to keep him stable. His questline has one of the most dramatic endings in the game — both the heroic and selfish paths are worth experiencing.",
    video: "https://www.youtube.com/watch?v=6SFzGBlOqjI"
  },
  {
    id: 118,
    game: "Baldur's Gate 3",
    title: "Wyll's Pact",
    location: "Various / Act 3",
    length: "long",
    difficulty: "Medium",
    reward: "Wyll companion resolution, pact broken or maintained",
    summary:
      "Help Wyll the Blade of Frontiers uncover the truth about his infernal pact with the devil Mizora. The quest spans all three acts and forces a confrontation with his father, the Grand Duke of Baldur's Gate.",
    aiTip:
      "Rescuing the Grand Duke early affects Wyll's storyline. Breaking his pact requires sacrifice — consider the cost before choosing.",
    video: "https://www.youtube.com/watch?v=bcREpftv-fk"
  },

  // ── Elden Ring (additional) ───────────────────────────────────────────────
  {
    id: 119,
    game: "Elden Ring",
    title: "Patches' Questline",
    location: "Murkwater Cave, Various",
    length: "medium",
    difficulty: "Low",
    reward: "Patches as vendor, Dancer's Castanets, comedic encounters",
    summary:
      "Encounter the treacherous merchant Patches across multiple locations as he tricks, betrays, and ultimately befriends the Tarnished. A recurring FromSoftware character with a surprisingly heartfelt conclusion.",
    aiTip:
      "Don't kill Patches after his ambush — forgive him to unlock his shop. His questline ends at the Volcano Manor with a touching final letter.",
    video: "https://www.youtube.com/watch?v=QmjBZifDJnM"
  },
  {
    id: 120,
    game: "Elden Ring",
    title: "Hyetta's Questline",
    location: "Liurnia, Leyndell, Frenzied Flame Proscription",
    length: "long",
    difficulty: "High",
    reward: "Frenzied Flame Seal incantation tool, questline lore",
    summary:
      "Follow a blind woman who seeks grape-like eyes across Liurnia and beyond. Her quest leads deep into the lore of the Three Fingers and the Frenzied Flame ending path.",
    aiTip:
      "You must give Hyetta Shabriri Grapes at each location she appears. Her final location requires accessing the Frenzied Flame Proscription — an area that locks you into a specific ending if you interact with it.",
    video: "https://www.youtube.com/watch?v=bYySdvILKcM"
  },
  {
    id: 121,
    game: "Elden Ring",
    title: "Dung Eater's Questline",
    location: "Roundtable Hold, Subterranean Shunning-Grounds",
    length: "long",
    difficulty: "High",
    reward: "Mending Rune of the Fell Curse, Omen armor set",
    summary:
      "Interact with the cursed and terrifying Dung Eater at the Roundtable Hold, then hunt Seedbed Curse items to fulfill his vile requests. His ending is one of the darkest in the game.",
    aiTip:
      "Don't free the Dung Eater from prison until you've bought everything from Patches and other Roundtable Hold NPCs — freeing him turns him hostile to others.",
    video: "https://www.youtube.com/watch?v=_LvxUP5_eCg"
  },
  {
    id: 122,
    game: "Elden Ring",
    title: "Sorcerer Rogier's Questline",
    location: "Stormveil Castle, Roundtable Hold, Liurnia",
    length: "medium",
    difficulty: "Medium",
    reward: "Rogier's Rapier, Black Knifeprint, lore revelations",
    summary:
      "Help the ailing sorcerer Rogier uncover the truth about the Black Knife Assassins and their role in the Night of Black Knives. His questline intersects with Ranni's and reveals crucial backstory about the Shattering.",
    aiTip:
      "Find the bloodstain beneath Stormveil Castle first to trigger his questline. His quest ties into Ranni's — progress both together for the full picture.",
    video: "https://www.youtube.com/watch?v=SLFciQ383XY"
  },
  {
    id: 123,
    game: "Elden Ring",
    title: "White Mask Varre's Questline",
    location: "Limgrave, Rose Church, Mohgwyn Palace",
    length: "medium",
    difficulty: "Medium",
    reward: "Early access to Mohgwyn Palace, Varre's Bouquet weapon",
    summary:
      "Follow the taunting NPC Varre from the very start of the game through his questline that eventually grants access to one of the best early farming locations in Elden Ring.",
    aiTip:
      "Invading other players three times is required — you don't need to win. This is the fastest route to Mohgwyn Palace, which has one of the best rune farming spots in the game.",
    video: "https://www.youtube.com/watch?v=zGDQ7yiHxns"
  },
  {
    id: 124,
    game: "Elden Ring",
    title: "Blackguard Big Boggart's Quest",
    location: "Liurnia, Leyndell",
    length: "medium",
    difficulty: "Low",
    reward: "Boiled prawns, Iron Ball weapon, questline conclusion",
    summary:
      "Meet a lovable prawn-boiling merchant who gets caught up in Rya's questline. A surprisingly touching side story about a simple man living honestly in a brutal world.",
    aiTip:
      "Buy prawns from Boggart and exhaust his dialogue each time you meet him. Don't let Rya's questline progress too far before speaking to him or you'll miss key interactions.",
    video: "https://www.youtube.com/watch?v=hKHeVPzlG4U"
  },

  // ── Final Fantasy VII Rebirth (additional) ────────────────────────────────
  {
    id: 125,
    game: "Final Fantasy VII Rebirth",
    title: "Tifa's Piano Recital",
    location: "Various Regions",
    length: "medium",
    difficulty: "Low",
    reward: "Relationship points with Tifa, unique music",
    summary:
      "Find sheet music scattered across the world and practice piano pieces to perform for Tifa. A gentle side activity that deepens the bond between Cloud and Tifa through shared memories of Nibelheim.",
    aiTip:
      "The piano mini-game uses button prompts matching the melody — take your time and don't rush. Each piece you learn adds to the relationship score that affects the Gold Saucer date.",
    video: "https://www.youtube.com/playlist?list=PLRr5L69yg_kHaW5zjEbZotm_2F9mP1fh5"
  },
  {
    id: 126,
    game: "Final Fantasy VII Rebirth",
    title: "The Excavation Expert",
    location: "Corel Desert",
    length: "medium",
    difficulty: "Medium",
    reward: "Rare materia, Gil, chocobo upgrades",
    summary:
      "Help a team of archaeologists excavating ancient ruins in the Corel Desert. The quest involves tracking down missing workers, solving environmental puzzles, and fending off desert monsters threatening the dig site.",
    aiTip:
      "Equip Lightning materia before heading in — the scorpion-type machines in the desert are weak to it. Completing all excavation objectives unlocks a bonus chest with rare equipment.",
    video: "https://www.youtube.com/playlist?list=PLRr5L69yg_kHaW5zjEbZotm_2F9mP1fh5"
  },
  {
    id: 127,
    game: "Final Fantasy VII Rebirth",
    title: "Aerith's Cetra Vision",
    location: "Cosmo Canyon",
    length: "medium",
    difficulty: "Low",
    reward: "Relationship points with Aerith, Ancient lore",
    summary:
      "Aerith experiences visions of the Ancients near Cosmo Canyon's sacred sites. Follow her as she communes with the Planet, deepening Cloud's understanding of her heritage and the weight she carries.",
    aiTip:
      "This quest is heavily story-driven — focus on dialogue choices that show empathy. Your responses significantly affect the Aerith relationship score for the date scene.",
    video: "https://www.youtube.com/playlist?list=PLRr5L69yg_kHaW5zjEbZotm_2F9mP1fh5"
  },
  {
    id: 128,
    game: "Final Fantasy VII Rebirth",
    title: "Junon Parade Training",
    location: "Junon",
    length: "medium",
    difficulty: "Medium",
    reward: "Junon Region Intel, materia, access to parade events",
    summary:
      "Cloud must infiltrate the Shinra military parade in Junon by mastering parade drill movements. A memorable set piece blending rhythm-based mini-games with stealth as Cloud marches alongside actual Shinra soldiers.",
    aiTip:
      "Practice the marching rhythm in the training area before the actual parade. A perfect score unlocks bonus loot — watch the drill instructor closely for the correct sequence.",
    video: "https://www.youtube.com/playlist?list=PLRr5L69yg_kHaW5zjEbZotm_2F9mP1fh5"
  },
  {
    id: 129,
    game: "Final Fantasy VII Rebirth",
    title: "Queen's Blood Champion",
    location: "Various / Gold Saucer",
    length: "long",
    difficulty: "High",
    reward: "Rare Queen's Blood cards, Champion title",
    summary:
      "Challenge and defeat every Queen's Blood card player across the world to become the undisputed champion. The card game deepens in complexity as you collect more powerful cards and face tougher opponents.",
    aiTip:
      "Build a deck around lane control early on. The toughest opponents use high-power single cards — counter with multi-lane spread strategies to deny their scoring zones.",
    video: "https://www.youtube.com/playlist?list=PLRr5L69yg_kHaW5zjEbZotm_2F9mP1fh5"
  },
  {
    id: 130,
    game: "Final Fantasy VII Rebirth",
    title: "Gongaga Rescue Mission",
    location: "Gongaga Region",
    length: "medium",
    difficulty: "Medium",
    reward: "Party EXP, Gongaga region Intel complete",
    summary:
      "Help the residents of Gongaga village deal with the dangerous wildlife that has overrun their region following the Mako reactor explosion. Multiple linked quests involving reconnaissance, rescue, and extermination.",
    aiTip:
      "Complete the regional Intel before starting — it reveals enemy locations and makes the rescue objectives faster to complete. The boss creature has a weakness to Ice.",
    video: "https://www.youtube.com/playlist?list=PLRr5L69yg_kHaW5zjEbZotm_2F9mP1fh5"
  },
  {
    id: 131,
    game: "Final Fantasy VII Rebirth",
    title: "Yuffie's Wutai Intel",
    location: "Various Regions",
    length: "long",
    difficulty: "Medium",
    reward: "Yuffie relationship points, rare materia, Wutai lore",
    summary:
      "Assist Yuffie in gathering intelligence about Shinra's activities across regions for her homeland Wutai. Her energetic approach to espionage makes for some of the game's funniest and most action-packed optional scenes.",
    aiTip:
      "Complete Yuffie's combat challenges in each region — they're fast and reward unique materia. Her affection score affects an optional scene in the Gold Saucer.",
    video: "https://www.youtube.com/playlist?list=PLRr5L69yg_kHaW5zjEbZotm_2F9mP1fh5"
  },

  // ── Cyberpunk 2077 (additional) ───────────────────────────────────────────
  {
    id: 132,
    game: "Cyberpunk 2077: Ultimate Edition",
    title: "Kerry Eurodyne's Questline",
    location: "Night City / Kerry's Villa",
    length: "long",
    difficulty: "Medium",
    reward: "Kerry romance, Davoud guitar, emotional payoff",
    summary:
      "Help legendary rocker Kerry Eurodyne reignite his passion for music and deal with corporate sabotage of his comeback tour. A feel-good questline with an optional romance and some of the best music in the game.",
    aiTip:
      "Male V only for the romance option. Exhaust all dialogue during band practice sessions — it unlocks additional quest steps and raises the affection meter.",
    video: "https://www.youtube.com/watch?v=XYNOuLikqGs"
  },
  {
    id: 133,
    game: "Cyberpunk 2077: Ultimate Edition",
    title: "River Ward's Questline (I Forgive You)",
    location: "Night City / Badlands",
    length: "long",
    difficulty: "Medium",
    reward: "River romance, unique revolver, NCPD ally",
    summary:
      "Help detective River Ward track down his missing nephew Randy through a harrowing chain of events involving a serial killer, illegal braindances, and a derelict farm. One of the most emotionally impactful side quests in the game.",
    aiTip:
      "Female V only for the romance path. During the farm sequence, memorise the four sets of directions given — you must recall them precisely without notes to save Randy.",
    video: "https://www.youtube.com/watch?v=XYNOuLikqGs"
  },
  {
    id: 134,
    game: "Cyberpunk 2077: Ultimate Edition",
    title: "Panam Palmer's Questline",
    location: "Badlands",
    length: "long",
    difficulty: "Medium",
    reward: "Panam romance, Aldecaldo family allies, secret ending",
    summary:
      "Build a relationship with nomad Panam Palmer as she rallies her clan against Militech and plans a massive heist. Her storyline is one of the most satisfying in the game and unlocks the secret Nomad ending.",
    aiTip:
      "Male V only for romance. Always side with Panam in disagreements. Completing her questline fully is required to access the Nomad ending, considered by many to be the best conclusion.",
    video: "https://www.youtube.com/watch?v=XYNOuLikqGs"
  },
  {
    id: 135,
    game: "Cyberpunk 2077: Ultimate Edition",
    title: "Phantom Liberty – Somewhat Damaged",
    location: "Dogtown / Cynosure",
    length: "long",
    difficulty: "High",
    reward: "New Relic ending, Songbird resolution",
    summary:
      "The climactic mission of Phantom Liberty forces an impossible choice between saving Songbird or handing her over to the NUSA. The most morally complex decision in the expansion with two wildly different conclusions.",
    aiTip:
      "Save before this mission and experience both endings — they're dramatically different. The Songbird path unlocks a brand new fourth ending for the base game.",
    video: "https://www.youtube.com/watch?v=XYNOuLikqGs"
  },
  {
    id: 136,
    game: "Cyberpunk 2077: Ultimate Edition",
    title: "Violence",
    location: "Night City / Clouds",
    length: "medium",
    difficulty: "Low",
    reward: "Stairway to Heaven iconic weapon, XP",
    summary:
      "Help a mysterious braindance artist named Lizzy Wizzy who is struggling with grief and identity after having her entire body chrome-plated. A quiet, atmospheric quest that highlights the human cost of body modification.",
    aiTip:
      "This quest has no combat — it's purely dialogue and atmosphere. Take your time and engage fully with Lizzy's story for the best experience and the iconic weapon reward.",
    video: "https://www.youtube.com/watch?v=XYNOuLikqGs"
  },
  {
    id: 137,
    game: "Cyberpunk 2077: Ultimate Edition",
    title: "Riders on the Storm",
    location: "Badlands",
    length: "medium",
    difficulty: "High",
    reward: "Panam questline progression, Saul rescued",
    summary:
      "Race against a deadly Raffen Shiv sandstorm to rescue Panam's clan leader Saul from a nomad gang's camp. A time-pressured mission that tests both driving skills and combat ability under harsh weather conditions.",
    aiTip:
      "The storm hits a timer — don't explore, go straight to the objective. Inside the camp, stealth is possible but the storm outside forces combat on the way out.",
    video: "https://www.youtube.com/watch?v=XYNOuLikqGs"
  },
  {
    id: 138,
    game: "Cyberpunk 2077: Ultimate Edition",
    title: "The Ballad of Buck Ravers",
    location: "Pacifica",
    length: "short",
    difficulty: "Low",
    reward: "Unique weapon, local lore, XP",
    summary:
      "Track down a legendary street musician in Pacifica whose music has taken on almost mythical status in Night City. A short but beautifully written quest about art, legacy, and how stories grow in the telling.",
    aiTip:
      "Explore Pacifica fully before triggering this — the area has some of the best environmental storytelling in the game. The quest reward is minor but the writing is exceptional.",
    video: "https://www.youtube.com/watch?v=XYNOuLikqGs"
  },

  // ── Demon's Souls (additional) ────────────────────────────────────────────
  {
    id: 139,
    game: "Demon's Souls",
    title: "Ostrava of Boletaria",
    location: "Boletarian Palace (1-1, 1-2, 1-3)",
    length: "long",
    difficulty: "High",
    reward: "Mausoleum Key, Rune Sword and Shield",
    summary:
      "Rescue the noble Ostrava repeatedly across three stages of Boletarian Palace. His questline ends in tragedy and rewards the key to the Mausoleum, which contains one of the game's most powerful weapon sets.",
    aiTip:
      "Rescue Ostrava every time you encounter him or he dies and the quest fails. Never invade him as a Black Phantom early — let the questline resolve naturally for the Mausoleum Key.",
    video: "https://www.youtube.com/watch?v=AT8nZUQI2Eg"
  },
  {
    id: 140,
    game: "Demon's Souls",
    title: "Sage Freke's Rescue",
    location: "Tower of Latria (3-1)",
    length: "medium",
    difficulty: "High",
    reward: "Access to advanced sorcery spells, XP",
    summary:
      "Free the imprisoned sorcerer Sage Freke from the Tower of Latria. He becomes a spell vendor in the Nexus offering powerful magic unavailable elsewhere, making him essential for intelligence-build characters.",
    aiTip:
      "His cell key is held by the Mindflayer jailer on the second level. Clear surrounding enemies before grabbing the key — the jailers respawn and their paralysis can be lethal.",
    video: "https://www.youtube.com/watch?v=AT8nZUQI2Eg"
  },
  {
    id: 141,
    game: "Demon's Souls",
    title: "Stockpile Thomas",
    location: "The Nexus",
    length: "short",
    difficulty: "Low",
    reward: "Item storage, merchant services, NPC lore",
    summary:
      "Meet Stockpile Thomas in the Nexus, a kind-hearted man searching for his family. He provides the invaluable service of storing excess items and unlocking later in his questline reveals a heartbreaking backstory.",
    aiTip:
      "Always use Thomas to store excess items — inventory management is critical in Demon's Souls. Talk to him after major boss kills to unlock new dialogue about his family.",
    video: "https://www.youtube.com/watch?v=AT8nZUQI2Eg"
  },
  {
    id: 142,
    game: "Demon's Souls",
    title: "Dragon God's Weakness",
    location: "Stonefang Tunnel (2-3)",
    length: "short",
    difficulty: "Medium",
    reward: "Dragon Demon's Soul, Pure Dragonstone access",
    summary:
      "Defeat the Dragon God by using ballista traps in the arena rather than direct combat. One of the most creative boss fights in the game, requiring observation and patience rather than combat skill.",
    aiTip:
      "The Dragon God is effectively invincible to direct attacks early in the fight. Use the environment — activate the two ballista traps in sequence while avoiding its gaze to stun it for the kill.",
    video: "https://www.youtube.com/watch?v=AT8nZUQI2Eg"
  },
  {
    id: 143,
    game: "Demon's Souls",
    title: "The Old Monk's Trial",
    location: "Tower of Latria (3-3)",
    length: "short",
    difficulty: "High",
    reward: "Monk's Head Collar, Old Monk's Soul",
    summary:
      "Face the Old Monk boss who summons a real player to fight as the final encounter — a groundbreaking mechanic for its time. If no player is available, a Black Phantom NPC takes their place.",
    aiTip:
      "Prepare for a human opponent — they can use any build and will exploit your weaknesses. Keep a Fire Spray or Soul Ray ready as a ranged punish option.",
    video: "https://www.youtube.com/watch?v=AT8nZUQI2Eg"
  },
  {
    id: 144,
    game: "Demon's Souls",
    title: "Maiden Astraea's Mercy",
    location: "Valley of Defilement (5-3)",
    length: "medium",
    difficulty: "Medium",
    reward: "Pureblood Demon's Soul, Sword of Searching",
    summary:
      "Confront Maiden Astraea, a saint who descended into the Valley of Defilement to care for the suffering. She and her guardian Garl Vinland present one of the most emotionally devastating boss encounters in FromSoftware history.",
    aiTip:
      "You can kill Garl Vinland first to make Astraea vulnerable, or you can talk to Astraea and she will take her own life. Neither method feels like a victory — that's the point.",
    video: "https://www.youtube.com/watch?v=AT8nZUQI2Eg"
  },
  {
    id: 145,
    game: "Demon's Souls",
    title: "Worshiper of God's Questline",
    location: "Various Worlds",
    length: "long",
    difficulty: "Medium",
    reward: "Faith-based miracles, Pure White World Tendency",
    summary:
      "Interact with various NPC characters who follow the God of the nexus across multiple worlds. Their questlines reward miracles and demonstrate how Demon's Souls uses NPCs to reflect the game's morality system.",
    aiTip:
      "Maintaining Pure White World Tendency opens additional NPC interactions and spawns unique items. Avoid dying in body form and kill Black Phantom NPCs to shift tendency toward white.",
    video: "https://www.youtube.com/watch?v=AT8nZUQI2Eg"
  },

  // ── Hogwarts Legacy (additional) ──────────────────────────────────────────
  {
    id: 146,
    game: "Hogwarts Legacy",
    title: "The Elf, the Nab-Sack, and the Loom",
    location: "Hogsmeade / Vivarium",
    length: "medium",
    difficulty: "Low",
    reward: "Nab-Sack, Room of Requirement Vivarium, beast rescuing",
    summary:
      "Befriend Deek the house elf and unlock the ability to rescue magical beasts using a Nab-Sack. This quest opens the Vivarium in the Room of Requirement where you can care for animals and harvest upgrade materials.",
    aiTip:
      "Complete this early — beast materials are used to upgrade gear throughout the game. The Vivarium becomes a key resource hub, so setting it up promptly pays off.",
    video: "https://www.youtube.com/watch?v=2D3l7JImSXU"
  },
  {
    id: 147,
    game: "Hogwarts Legacy",
    title: "Charles Rookwood's Trial",
    location: "Rookwood Castle",
    length: "medium",
    difficulty: "Medium",
    reward: "Ancient Magic Throw ability, ancient magic meter increase",
    summary:
      "Complete a magical trial hidden within Rookwood Castle to master Ancient Magic Throw. The dungeon tests your understanding of the combat system through carefully designed puzzle-combat rooms.",
    aiTip:
      "Ancient Magic Throw lets you hurl enemy projectiles and environmental objects back at foes — it fundamentally changes combat. Learn the timing in the trial rooms before using it against tough enemies.",
    video: "https://www.youtube.com/watch?v=2D3l7JImSXU"
  },
  {
    id: 148,
    game: "Hogwarts Legacy",
    title: "Poppy's Questline (The Plight of the House-Elf)",
    location: "Feldcroft / Clagmar Coast",
    length: "long",
    difficulty: "High",
    reward: "Poppy Sweeting companion quest resolution, dragon lore",
    summary:
      "Help Poppy Sweeting expose and confront the poacher ring exploiting magical creatures. The questline culminates in an encounter with a massive dragon and reveals the full extent of Rookwood's illegal operations.",
    aiTip:
      "Stock up on high-level potions before the final encounter. The dragon sequence is one of the most visually spectacular moments in the game — enjoy it but stay mobile.",
    video: "https://www.youtube.com/watch?v=2D3l7JImSXU"
  },
  {
    id: 149,
    game: "Hogwarts Legacy",
    title: "The Lost Astrolabe",
    location: "Black Lake Shore",
    length: "short",
    difficulty: "Low",
    reward: "Gil's boat use, exploration access, XP",
    summary:
      "Help a fisherman named Gil recover his stolen astrolabe from nesting diricawl birds near the Black Lake. A brief quest that teaches creature interaction mechanics and opens up boat travel along the lake.",
    aiTip:
      "Use Accio to retrieve the astrolabe from the nest rather than disturbing the birds directly. Completing this unlocks Gil's boat, which provides a faster travel route along the lakeshore.",
    video: "https://www.youtube.com/watch?v=2D3l7JImSXU"
  },
  {
    id: 150,
    game: "Hogwarts Legacy",
    title: "Solved by the Bell",
    location: "Clagmar Castle",
    length: "medium",
    difficulty: "Medium",
    reward: "Music box puzzle treasure, rare equipment",
    summary:
      "Follow a set of clues involving a musical puzzle to unlock a secret treasure hidden within Clagmar Castle. The puzzle requires you to play specific musical notes in sequence using bells scattered around the area.",
    aiTip:
      "Write down the note sequence from the music box before approaching the bells — there's no in-game record of it. The sequence is fixed, not randomised.",
    video: "https://www.youtube.com/watch?v=2D3l7JImSXU"
  },
  {
    id: 151,
    game: "Hogwarts Legacy",
    title: "Flying off the Shelves",
    location: "Hogsmeade",
    length: "short",
    difficulty: "Low",
    reward: "Wingardium Leviosa spell, early game utility",
    summary:
      "Help the owner of Tomes and Scrolls recover books that have flown off the shelves using a levitation charm. This short quest teaches Wingardium Leviosa, an essential spell for environmental puzzles throughout the game.",
    aiTip:
      "Wingardium Leviosa is used constantly for puzzles and combat. Unlock it early and experiment with levitating different objects in the environment — some hide secrets.",
    video: "https://www.youtube.com/watch?v=2D3l7JImSXU"
  },
  {
    id: 152,
    game: "Hogwarts Legacy",
    title: "Astronomy Table Challenges",
    location: "Various Locations",
    length: "long",
    difficulty: "Low",
    reward: "Cosmetic gear sets, unique outfit unlocks",
    summary:
      "Locate and complete all astronomy table challenges scattered across the Hogwarts grounds and surrounding region. Each challenge requires visiting a specific location at the right time and completing a star-charting mini-game.",
    aiTip:
      "Astronomy tables can only be used at night — use the wait mechanic if it's daytime. Completing all tables in a region unlocks a unique cosmetic set not available elsewhere.",
    video: "https://www.youtube.com/watch?v=2D3l7JImSXU"
  },

  // ── Metaphor: ReFantazio (additional) ─────────────────────────────────────
  {
    id: 153,
    game: "Metaphor: ReFantazio",
    title: "Follower: Hulkenberg's Resolve",
    location: "Various / Story Chapters",
    length: "long",
    difficulty: "Medium",
    reward: "Hulkenberg Confidant progression, Knight Archetype upgrades",
    summary:
      "Deepen your bond with Hulkenberg, the stoic knight who joins your party early. Her questline explores duty, personal sacrifice, and what it means to serve a cause you believe in — one of the most grounded stories in the game.",
    aiTip:
      "Choose dialogue options that respect her sense of duty rather than challenging it. Her later Archetype upgrades dramatically improve physical combat for the whole party.",
    video: "https://www.youtube.com/watch?v=tcST2UBAATE"
  },
  {
    id: 154,
    game: "Metaphor: ReFantazio",
    title: "The Gauntlet Runner Races",
    location: "Gauntlet Runner / Travel Routes",
    length: "medium",
    difficulty: "Medium",
    reward: "Unique accessories, crafting materials, downtime activities",
    summary:
      "Compete in races and challenges aboard the Gauntlet Runner between locations. These optional events reward rare accessories and provide a break from dungeon crawling while developing the world's culture.",
    aiTip:
      "Upgrade the Gauntlet Runner's speed stats when possible — faster travel reduces time costs and unlocks harder race tiers. The top tier races reward some of the best accessories in the game.",
    video: "https://www.youtube.com/watch?v=tcST2UBAATE"
  },
  {
    id: 155,
    game: "Metaphor: ReFantazio",
    title: "Follower: Strohl's Rage",
    location: "Various / Story Chapters",
    length: "long",
    difficulty: "Medium",
    reward: "Strohl Confidant progression, Warrior Archetype upgrades",
    summary:
      "Follow Strohl's journey as he wrestles with his volatile nature and a painful past. His questline explores themes of anger, identity, and self-mastery, leading to powerful Archetype evolutions.",
    aiTip:
      "Support Strohl without being dismissive of his anger — he responds best to dialogue that acknowledges his feelings. His Archetype evolutions make him one of the strongest physical attackers.",
    video: "https://www.youtube.com/watch?v=tcST2UBAATE"
  },
  {
    id: 156,
    game: "Metaphor: ReFantazio",
    title: "Akademeia's Lost Archives",
    location: "Grand Trad / Akademeia",
    length: "medium",
    difficulty: "Low",
    reward: "Rare spellbooks, lore insight, Archetype points",
    summary:
      "Assist scholars at the prestigious Akademeia institute in recovering stolen research documents. The quest provides significant lore about the Archetype system and rewards rare materials for upgrading your party's magical abilities.",
    aiTip:
      "Bring a party member with high Wisdom for the dialogue checks in this quest. The spellbook rewards are especially valuable for magic-focused builds.",
    video: "https://www.youtube.com/watch?v=tcST2UBAATE"
  },
  {
    id: 157,
    game: "Metaphor: ReFantazio",
    title: "The Royal Election Debates",
    location: "Grand Trad Arena / Various",
    length: "long",
    difficulty: "Medium",
    reward: "Popularity growth, new followers, election story progression",
    summary:
      "Participate in public debates against rival candidates vying for the throne. Each debate requires choosing the right responses to sway public opinion — a unique mix of social simulation and political strategy.",
    aiTip:
      "Research each rival's platform before the debate — their weaknesses are telegraphed in NPC conversations beforehand. High Eloquence makes debate options more persuasive.",
    video: "https://www.youtube.com/watch?v=tcST2UBAATE"
  },
  {
    id: 158,
    game: "Metaphor: ReFantazio",
    title: "The Ancient Ruin Expedition",
    location: "Faraway Ruins",
    length: "long",
    difficulty: "High",
    reward: "Unique Archetype unlock, powerful equipment",
    summary:
      "Venture into a dangerous pre-civilization ruin that predates even the Euchronian Kingdom. The dungeon contains enemies resistant to conventional magic and rewards careful party composition and elemental strategy.",
    aiTip:
      "The enemies here require specific elemental counters — scout them with a high-Wisdom party member before committing to attacks. The Archetype unlock at the end is worth every challenge.",
    video: "https://www.youtube.com/watch?v=tcST2UBAATE"
  },

  // ── God of War Ragnarök (additional) ──────────────────────────────────────
  {
    id: 159,
    game: "God of War Ragnarök",
    title: "Freya's Missing Peace",
    location: "Vanaheim",
    length: "medium",
    difficulty: "Medium",
    reward: "Sigrun's Curse shield attachment, Freya companion upgrade",
    summary:
      "Help Freya reconnect with her homeland Vanaheim and begin healing from her traumatic past with Odin. A quieter quest focused on character development that deepens Freya's arc beyond her role as a combat companion.",
    aiTip:
      "Exhaust all dialogue options during the quiet moments — Freya's backstory is delivered through these scenes. Completing her personal quests unlocks combat dialogue upgrades.",
    video: "https://www.youtube.com/watch?v=S8lHQrkiUeg"
  },
  {
    id: 160,
    game: "God of War Ragnarök",
    title: "In Plain Sight",
    location: "Midgard",
    length: "short",
    difficulty: "Low",
    reward: "Muspelheim Seed piece, unique armour enchantment",
    summary:
      "Investigate a series of strange occurrences in Midgard that seem connected to hidden Asgardian activity. A short favour chain that rewards exploration and environmental observation.",
    aiTip:
      "Use Atreus's ability to read rune inscriptions throughout the area — they point to hidden compartments. The Muspelheim Seed piece is crucial for unlocking endgame challenge content.",
    video: "https://www.youtube.com/watch?v=S8lHQrkiUeg"
  },
  {
    id: 161,
    game: "God of War Ragnarök",
    title: "The Raven Tree",
    location: "Niflheim",
    length: "long",
    difficulty: "High",
    reward: "Odin's Ravens rewards, unique armour and enchantments",
    summary:
      "Track down all 48 of Odin's Ravens hidden across the Nine Realms and return to the Raven Tree in Niflheim for escalating rewards. The ravens glow green and emit a distinct sound — but some are hidden in very obscure locations.",
    aiTip:
      "Use the map to track which realms have ravens remaining. Some ravens are only accessible after completing story missions that open new areas. The final reward set is among the best armour in the game.",
    video: "https://www.youtube.com/watch?v=S8lHQrkiUeg"
  },
  {
    id: 162,
    game: "God of War Ragnarök",
    title: "Atreus's Search",
    location: "Various Realms",
    length: "long",
    difficulty: "Medium",
    reward: "Lore, Atreus story resolution, unique companion dialogue",
    summary:
      "Follow Atreus's personal quest to understand his Giant heritage and his role in Ragnarök. Played from Atreus's perspective in key sections, this questline provides crucial context for the game's ending.",
    aiTip:
      "The Atreus sections play differently from Kratos — focus on stealth and puzzle-solving rather than direct combat. His sections contain some of the best environmental storytelling in the game.",
    video: "https://www.youtube.com/watch?v=S8lHQrkiUeg"
  },
  {
    id: 163,
    game: "God of War Ragnarök",
    title: "The Crucible",
    location: "Muspelheim",
    length: "long",
    difficulty: "High",
    reward: "Chaos Flames, Muspelheim armour set materials",
    summary:
      "Complete a series of escalating combat challenges in the fiery realm of Muspelheim to earn Chaos Flames for upgrading the Blades of Chaos. Six initial trials lead to harder Surtr's Crucible challenges for the best rewards.",
    aiTip:
      "Complete the six initial trials before attempting Surtr's Crucible. Lunda's Poison armour works exceptionally well here — poison on parry shreds through the challenge health gates.",
    video: "https://www.youtube.com/watch?v=S8lHQrkiUeg"
  },
  {
    id: 164,
    game: "God of War Ragnarök",
    title: "Mimir's Knowledge",
    location: "Various Realms",
    length: "medium",
    difficulty: "Low",
    reward: "Lore collectibles, world-building, XP",
    summary:
      "Collect Lore Markers and listen to Mimir's stories about Norse mythology throughout the Nine Realms. His narration provides rich context for the world's history and makes exploration feel purposeful.",
    aiTip:
      "Never skip Mimir's commentary — it's some of the best writing in the game. Many lore items are hidden off the main path in areas that look like dead ends.",
    video: "https://www.youtube.com/watch?v=S8lHQrkiUeg"
  },
  {
    id: 165,
    game: "God of War Ragnarök",
    title: "Sigrun's Curse",
    location: "Midgard",
    length: "medium",
    difficulty: "High",
    reward: "Rond of Purification, Valkyrie armour upgrade materials",
    summary:
      "Investigate a curse affecting the Valkyries that has left them trapped between worlds. The quest chain leads to several powerful Valkyrie mini-bosses and uncovers the connection between Odin's manipulation and their imprisonment.",
    aiTip:
      "Each Valkyrie has unique attack patterns — observe before committing to aggression. Shield parry timing is critical; learn to deflect their wing attacks for free damage windows.",
    video: "https://www.youtube.com/watch?v=S8lHQrkiUeg"
  },

  // ── Persona 5 Royal (additional) ──────────────────────────────────────────
  {
    id: 166,
    game: "Persona 5 Royal",
    title: "Ryuji's Confidant (Chariot)",
    location: "Shibuya / Track Field",
    length: "long",
    difficulty: "Low",
    reward: "Ryuji abilities, Charge skill, baton pass upgrades",
    summary:
      "Rebuild Ryuji's relationship with his old track team after an injury derailed his athletic career. His Confidant explores themes of friendship, regret, and moving forward — and his ultimate ability Captain Kidd's upgrade is invaluable.",
    aiTip:
      "Rank up Ryuji's Confidant as early as possible — his Baton Pass upgrade lets him transfer turn momentum to other party members, one of the most powerful mechanics in the game.",
    video: "https://www.youtube.com/watch?v=2B7jq74NS4g"
  },
  {
    id: 167,
    game: "Persona 5 Royal",
    title: "Ann's Confidant (Lovers)",
    location: "Shibuya / Various",
    length: "long",
    difficulty: "Low",
    reward: "Ann abilities, Charm attribute growth, healing upgrades",
    summary:
      "Support Ann Takamaki as she pursues modelling and grapples with how she's perceived by others. Her Confidant explores self-worth and authenticity, and her support skills become some of the most useful healing abilities in the game.",
    aiTip:
      "Ann's insta-cure status effect ability at higher Confidant ranks is incredibly useful in late-game Palaces where status ailments become frequent. Prioritise it mid-game.",
    video: "https://www.youtube.com/watch?v=2B7jq74NS4g"
  },
  {
    id: 168,
    game: "Persona 5 Royal",
    title: "Futaba's Confidant (Hermit)",
    location: "Yongen-Jaya / Akihabara",
    length: "long",
    difficulty: "Low",
    reward: "Futaba navigator abilities, Oracle upgrades",
    summary:
      "Help Futaba overcome her social anxiety and reconnect with the outside world through a series of increasingly adventurous outings. Her Confidant unlocks powerful Navigator abilities that give the whole party battle advantages.",
    aiTip:
      "Futaba's Navigator upgrades include enemy scanning, HP/SP recovery mid-battle, and follow-up attacks. Max her Confidant as soon as possible — these abilities save resources throughout late-game Palaces.",
    video: "https://www.youtube.com/watch?v=2B7jq74NS4g"
  },
  {
    id: 169,
    game: "Persona 5 Royal",
    title: "Sojiro's Confidant (Hierophant)",
    location: "Café Leblanc",
    length: "long",
    difficulty: "Low",
    reward: "Coffee and Curry crafting, SP recovery items",
    summary:
      "Build a relationship with Sojiro Sakura, Joker's guardian and the owner of Café Leblanc. His Confidant involves uncovering a painful secret about his past, and completing it teaches Joker to brew SP-restoring coffee and curry.",
    aiTip:
      "Sojiro's coffee and curry are among the best SP recovery items in the game — craft them regularly. His Confidant maxes out relatively quickly if you interact at the café frequently.",
    video: "https://www.youtube.com/watch?v=2B7jq74NS4g"
  },
  {
    id: 170,
    game: "Persona 5 Royal",
    title: "Mementos Requests: The Killer's Profile",
    location: "Path of Chemdah, Mementos",
    length: "medium",
    difficulty: "High",
    reward: "Empress Confidant rank-up, XP",
    summary:
      "Expose and defeat a corrupt politician hiding in Mementos who has been covering up crimes for years. One of the most satisfying Mementos requests, tying directly into the larger theme of justice that drives the Phantom Thieves.",
    aiTip:
      "The Shadow is weak to Ice and Nuke. Bring Ann for Freeze technical combos and Ryuji for Nuke technical chains — the combination destroys it quickly.",
    video: "https://www.youtube.com/watch?v=2B7jq74NS4g"
  },
  {
    id: 171,
    game: "Persona 5 Royal",
    title: "Iwai's Confidant (Hanged Man)",
    location: "Untouchable, Shibuya",
    length: "long",
    difficulty: "Low",
    reward: "Airsoft gun customisation, unique accessories",
    summary:
      "Help the mysterious airsoft shop owner Munehisa Iwai navigate yakuza entanglements threatening his family. His Confidant unlocks the ability to customise Phantom Thief equipment beyond standard upgrades.",
    aiTip:
      "Iwai's equipment customisation options include powerful attachments not available through standard shops. Raise his Confidant to at least Rank 7 before the late-game for the best customisation options.",
    video: "https://www.youtube.com/watch?v=2B7jq74NS4g"
  },
  {
    id: 172,
    game: "Persona 5 Royal",
    title: "Ohya's Confidant (Devil)",
    location: "Crossroads Bar, Shinjuku",
    length: "long",
    difficulty: "Low",
    reward: "Palace security reduction, investigation suppression",
    summary:
      "Help reporter Ichiko Ohya find the truth about a conspiracy tied to the Phantom Thieves' activities. Her Confidant ability reduces Palace security level increases when Joker is spotted — a powerful quality-of-life upgrade for stealth play.",
    aiTip:
      "Ohya's security suppression ability is especially valuable in the later Palaces where being spotted triggers powerful Shadow reinforcements. Level her up before tackling Shido's Palace.",
    video: "https://www.youtube.com/watch?v=2B7jq74NS4g"
  },

  // ── Ghost of Tsushima (additional) ────────────────────────────────────────
  {
    id: 173,
    game: "Ghost of Tsushima",
    title: "The Six Blades of Kojiro",
    location: "Iki Island / Toyotama",
    length: "long",
    difficulty: "High",
    reward: "Kensei Armour set, Ghost Stance upgrade",
    summary:
      "Hunt down six legendary swordsmen — the surviving members of the Straw Hat Ronin gang — across Tsushima. Each duel is a unique challenge that tests a different aspect of your sword mastery.",
    aiTip:
      "Face the six blades in order of difficulty — the final duel with Kojiro himself is one of the hardest fights in the base game. The Kensei Armor enhances Ghost Stance, making this questline doubly rewarding.",
    video: "https://www.youtube.com/watch?v=346BJtEDT7o"
  },
  {
    id: 174,
    game: "Ghost of Tsushima",
    title: "The Unbreakable Gosaku",
    location: "Toyotama Region",
    length: "medium",
    difficulty: "Medium",
    reward: "Gosaku's Armour upgrade materials, Samurai lore",
    summary:
      "Follow the legend of Gosaku the farmer-warrior and uncover hidden shrines that reveal his story. The tale of a common man who stood against overwhelming odds mirrors Jin's own struggle and adds weight to the Gosaku Armor questline.",
    aiTip:
      "The shrines are well-hidden — use Guiding Wind frequently. Reading Gosaku's story in full provides buffs at each shrine that make the final farmstead liberations slightly easier.",
    video: "https://www.youtube.com/watch?v=346BJtEDT7o"
  },
  {
    id: 175,
    game: "Ghost of Tsushima",
    title: "Norio's Devotion",
    location: "Toyotama / Kamiagata",
    length: "long",
    difficulty: "Medium",
    reward: "Norio companion quest complete, unique dye, Legend increase",
    summary:
      "Accompany the warrior monk Norio as he tracks down the Mongol commander responsible for destroying his temple and killing his brother. A quest about faith, vengeance, and whether peace of mind can be found through violence.",
    aiTip:
      "Complete all three of Norio's companion missions in sequence. The final confrontation has a meaningful choice — both options have emotional weight depending on your interpretation of Norio's journey.",
    video: "https://www.youtube.com/watch?v=346BJtEDT7o"
  },
  {
    id: 176,
    game: "Ghost of Tsushima",
    title: "A Reckoning in Blood",
    location: "Kamiagata",
    length: "medium",
    difficulty: "High",
    reward: "Sakai Clan Armor upgrade, massive Legend increase",
    summary:
      "Confront the Mongol general Dokhoi who committed atrocities against the people of Kamiagata. A large-scale assault requiring stealth infiltration followed by intense open combat as Jin's legend reaches its peak.",
    aiTip:
      "Scout the encampment fully before engaging — use the Ghost stance to eliminate key targets early. The general himself fights with two weapons simultaneously; watch for the stance changes.",
    video: "https://www.youtube.com/watch?v=346BJtEDT7o"
  },
  {
    id: 177,
    game: "Ghost of Tsushima",
    title: "The Tournament of Kenjutsu",
    location: "Iki Island (Director's Cut)",
    length: "long",
    difficulty: "High",
    reward: "Iki Island armor set, duelling techniques",
    summary:
      "Enter a prestigious sword tournament on Iki Island and face increasingly skilled opponents from across the region. Each round reveals more about Iki Island's culture and Jin's complicated connection to the island.",
    aiTip:
      "Tournament opponents each use a specific fighting style — switch stances between rounds. The final opponent counters aggression; use reactive parry strategies.",
    video: "https://www.youtube.com/watch?v=346BJtEDT7o"
  },
  {
    id: 178,
    game: "Ghost of Tsushima",
    title: "Yuna's Pursuit",
    location: "Izuhara / Toyotama",
    length: "long",
    difficulty: "Medium",
    reward: "Yuna companion quest complete, unique Ghost armor dye",
    summary:
      "Help Yuna track down her brother Taka and the Mongols who are exploiting Tsushima's civilians. Her companion quest adds important context to the dynamic between the samurai code and Jin's evolution into the Ghost.",
    aiTip:
      "Side with Yuna in disagreements — her practical approach reflects the Ghost philosophy. Completing all her quests before the end of Act 2 provides the best emotional payoff.",
    video: "https://www.youtube.com/watch?v=346BJtEDT7o"
  },

  // ── Horizon Forbidden West (additional) ───────────────────────────────────
  {
    id: 179,
    game: "Horizon Forbidden West",
    title: "The Daunt Errands",
    location: "The Daunt",
    length: "short",
    difficulty: "Low",
    reward: "Resources, XP, faction reputation",
    summary:
      "Complete a series of errands for the Oseram settlers establishing themselves in The Daunt. These quick tasks introduce Horizon's errand system and teach combat and exploration mechanics in a safe opening environment.",
    aiTip:
      "Complete errands before moving on — the resources and XP accumulate quickly and the skills unlocked through level-ups make Horizon's early combat significantly easier.",
    video: "https://www.youtube.com/watch?v=QkonvBAhgCk"
  },
  {
    id: 180,
    game: "Horizon Forbidden West",
    title: "The Broken Sky",
    location: "Sheerside Mountains",
    length: "long",
    difficulty: "High",
    reward: "4 Skill Points, Grimhorn machine override, 6000 XP",
    summary:
      "Investigate a Cauldron in the Sheerside Mountains that has been producing corrupted machines. Navigating the facility requires solving power puzzles while fending off aggressive Apex-class machines.",
    aiTip:
      "Bring Frost weapons for the Apex Shellwalker guarding the core. Override the Grimhorn after completing the Cauldron — it becomes a powerful battle mount for fighting other machines.",
    video: "https://www.youtube.com/watch?v=QkonvBAhgCk"
  },
  {
    id: 181,
    game: "Horizon Forbidden West",
    title: "The Distant Lands",
    location: "No Man's Land / Utaru Territory",
    length: "medium",
    difficulty: "Medium",
    reward: "Utaru Seed-Caller armour, 3 Skill Points, 5500 XP",
    summary:
      "Travel beyond Tenakth borders to the dying Utaru tribe's homeland, where the Plague is ravaging crops and people. Aloy must navigate Utaru customs and traditions to earn their trust and access vital information.",
    aiTip:
      "Use Concentration during the ritual portions of this quest — the pacing is slow but skipping dialogue misses critical worldbuilding. The Utaru armor provides useful stealth bonuses.",
    video: "https://www.youtube.com/watch?v=QkonvBAhgCk"
  },
  {
    id: 182,
    game: "Horizon Forbidden West",
    title: "The Old Varl's Refuge",
    location: "Legacy's Landfall",
    length: "short",
    difficulty: "Low",
    reward: "Oseram Flameworks weapon, 2 Skill Points, 3500 XP",
    summary:
      "Help a group of elderly Nora refugees who have settled in the ruins of an old Vantage Point and are being harassed by scavengers. A short but touching quest about community and resilience in a collapsed world.",
    aiTip:
      "The scavengers scale to your level — overpower them with elemental traps placed before starting the fight. The Oseram Flameworks bow is excellent for fire builds.",
    video: "https://www.youtube.com/watch?v=QkonvBAhgCk"
  },
  {
    id: 183,
    game: "Horizon Forbidden West",
    title: "Faro's Tomb",
    location: "San Francisco Ruins",
    length: "long",
    difficulty: "High",
    reward: "Faro's Spear weapon, 3 Skill Points, 7000 XP",
    summary:
      "Explore the sealed tomb of Ted Faro, the man responsible for the extinction of the Old World. The dungeon confronts Aloy with the full horror of HEPHAESTUS's legacy and rewards a powerful endgame spear.",
    aiTip:
      "This dungeon involves extensive puzzle sections with light-based locks. Bring the Pullcaster tool — you'll need it constantly. The lore here directly connects to the Horizon Zero Dawn backstory.",
    video: "https://www.youtube.com/watch?v=QkonvBAhgCk"
  },
  {
    id: 184,
    game: "Horizon Forbidden West",
    title: "The Bristlebacks",
    location: "Plainsong, Utaru Territory",
    length: "medium",
    difficulty: "Medium",
    reward: "Bristleback mount override, 2 Skill Points, 4000 XP",
    summary:
      "Investigate a herd of corrupted Bristleback machines terrorising the Utaru farming communities. Clearing the corruption and overriding a Bristleback provides a fast travel mount usable across open terrain.",
    aiTip:
      "Freeze the Bristlebacks before overriding — their charge attacks make approaching dangerous. The Bristleback mount is faster than running across flat terrain and useful for map traversal.",
    video: "https://www.youtube.com/watch?v=QkonvBAhgCk"
  },
  {
    id: 185,
    game: "Horizon Forbidden West",
    title: "The Dying Lands",
    location: "Thornmarsh",
    length: "long",
    difficulty: "High",
    reward: "3 Skill Points, Clawstrider override, 6500 XP",
    summary:
      "Investigate the mysterious blight killing the swamp ecosystem in Thornmarsh and confront the Apex Clawstrider pack responsible. A multi-stage quest that demonstrates Horizon's approach to environmental storytelling.",
    aiTip:
      "Clawstriders are agile and attack in coordinated packs. Use Ropecaster to pin one down while dealing with the others. Overriding the Apex after the fight gives you the strongest Clawstrider mount.",
    video: "https://www.youtube.com/watch?v=QkonvBAhgCk"
  },

  // ── Pillars of Eternity (additional) ──────────────────────────────────────
  {
    id: 186,
    game: "Pillars of Eternity",
    title: "Lord of a Barren Land",
    location: "Esternwood, Act 2",
    length: "medium",
    difficulty: "High",
    reward: "Stronghold influence, rare equipment, XP",
    summary:
      "Confront a group of bandits who have taken up residence near the Watcher's stronghold and are terrorising the local farmsteads. The quest escalates into a larger conflict involving a deposed noble seeking to reclaim his land.",
    aiTip:
      "Negotiate first — the noble's demands can be met diplomatically, avoiding a difficult multi-wave battle. Choosing the right outcome improves your Stronghold's relationship with local settlers.",
    video: "https://www.youtube.com/watch?v=jdctxlkILKg"
  },
  {
    id: 187,
    game: "Pillars of Eternity",
    title: "The Parable of Wael",
    location: "Copperlane, Defiance Bay",
    length: "medium",
    difficulty: "Low",
    reward: "Wael faction reputation, unique grimoire, cipher spells",
    summary:
      "Recover a stolen holy text belonging to followers of Wael, the god of secrets and mysteries. The quest has multiple solutions and explores the game's theme of truth versus comfortable deception.",
    aiTip:
      "The 'best' outcome is hidden behind skill checks — Lore and Insight help here. Reading the text before deciding what to do with it changes available dialogue options.",
    video: "https://www.youtube.com/watch?v=jdctxlkILKg"
  },
  {
    id: 188,
    game: "Pillars of Eternity",
    title: "Brave Derrin",
    location: "Dyrford Village",
    length: "short",
    difficulty: "Low",
    reward: "Gold, reputation, child's gratitude",
    summary:
      "A young boy in Dyrford Village is missing, and the adults seem unwilling to search properly. A brief but touching quest that demonstrates the game's commitment to portraying ordinary lives amid extraordinary events.",
    aiTip:
      "This is one of the shortest quests in the game — complete it early in your Dyrford visit. The reward is minor but the dialogue with the child adds unexpected emotional depth.",
    video: "https://www.youtube.com/watch?v=jdctxlkILKg"
  },
  {
    id: 189,
    game: "Pillars of Eternity",
    title: "The Nest Egg",
    location: "Elmshore",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, rare ingredients, XP",
    summary:
      "Retrieve a valuable egg stolen from a merchant by bandits hiding in Elmshore's dangerous wilderness. A simple fetch quest elevated by the beautiful environment and the option to deal with the bandits through negotiation or combat.",
    aiTip:
      "The bandit camp has a hard encounter if you fight. A high-Intimidate character can convince them to hand over the egg without a fight. The Elmshore area itself contains several rare crafting ingredients worth looting.",
    video: "https://www.youtube.com/watch?v=jdctxlkILKg"
  },
  {
    id: 190,
    game: "Pillars of Eternity",
    title: "A Mother's Plea",
    location: "Defiance Bay / Copperlane",
    length: "medium",
    difficulty: "Medium",
    reward: "Gold, faction reputation, emotional resolution",
    summary:
      "A desperate mother begs the Watcher to help find her missing son who has become entangled with a criminal gang in Defiance Bay. The investigation reveals the city's dark underworld and forces a moral choice about redemption.",
    aiTip:
      "Complete the investigation before confronting anyone — partial information leads to a worse outcome. Your choice at the end affects Copperlane faction reputation.",
    video: "https://www.youtube.com/watch?v=jdctxlkILKg"
  },
  {
    id: 191,
    game: "Pillars of Eternity",
    title: "Burning Bridges",
    location: "Ondra's Gift, Defiance Bay",
    length: "medium",
    difficulty: "High",
    reward: "Faction alliance, unique armour, safe passage",
    summary:
      "Navigate a gang war brewing in Ondra's Gift between the Doemenel family and a rival faction. Your choice of allegiance shapes the balance of power in Defiance Bay's criminal underworld for the rest of Act 2.",
    aiTip:
      "Back up your chosen faction fully before the confrontation — half-measures result in a difficult three-way battle. The Doemenels offer the best equipment reward if you side with them.",
    video: "https://www.youtube.com/watch?v=jdctxlkILKg"
  },
  {
    id: 192,
    game: "Pillars of Eternity",
    title: "Never Far from the Queen",
    location: "Copperlane / Twin Elms",
    length: "long",
    difficulty: "High",
    reward: "Twin Elms access, Act 3 progression, faction reputation",
    summary:
      "Unravel the mystery of a missing Glanfathan noble in Defiance Bay whose disappearance has diplomatic implications. The investigation stretches from Copperlane's streets to the sacred elven city of Twin Elms.",
    aiTip:
      "This quest is required to access Twin Elms and Act 3. Don't rush it — the political consequences of your choices here echo through the game's final act.",
    video: "https://www.youtube.com/watch?v=jdctxlkILKg"
  },

  // ── Pillars of Eternity II: Deadfire (additional) ─────────────────────────
  {
    id: 193,
    game: "Pillars of Eternity II: Deadfire",
    title: "Fruitful Alliance",
    location: "Neketaka, Queen's Berth",
    length: "medium",
    difficulty: "Medium",
    reward: "Faction reputation, trade route access, unique equipment",
    summary:
      "Negotiate trade agreements between rival factions in Neketaka's bustling port district. A diplomacy-heavy quest that rewards high Persuasion and Diplomacy skills with outcomes that open up more lucrative opportunities later.",
    aiTip:
      "Having a party member with Merchant background makes several dialogue options significantly more persuasive. Complete this before committing fully to any one faction.",
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
  },
  {
    id: 194,
    game: "Pillars of Eternity II: Deadfire",
    title: "The Rite of Passage",
    location: "Tikawara Island",
    length: "medium",
    difficulty: "Medium",
    reward: "Tikawaran allies, unique spear, island access",
    summary:
      "Prove yourself worthy to the Tikawaran tribe by completing their traditional rite of passage in the island's dangerous jungle interior. The rite involves both combat challenges and diplomatic negotiations with the local spirits.",
    aiTip:
      "Bring a druid or priest for the spirit interactions — their dialogue options are significantly more effective. Completing the rite opens up Tikawara as a safe harbour and trading post.",
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
  },
  {
    id: 195,
    game: "Pillars of Eternity II: Deadfire",
    title: "Seeker, Slayer, Survivor",
    location: "Ukaizo / Ori o Koīki Island",
    length: "long",
    difficulty: "High",
    reward: "Unique weapons and armour, Beast of Winter DLC access",
    summary:
      "Travel to a mysterious island arena where warriors from across the Deadfire compete in brutal combat. A gladiatorial questline testing party endurance across multiple consecutive fights with unique rules for each round.",
    aiTip:
      "Conserve resources between fights — you cannot rest during the arena sequence. Bring multiple party members with healing abilities and stock heavy on injury prevention items.",
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
  },
  {
    id: 196,
    game: "Pillars of Eternity II: Deadfire",
    title: "The Forgotten Sanctum",
    location: "Black Isles",
    length: "long",
    difficulty: "High",
    reward: "Unique spells, powerful grimoires, DLC story resolution",
    summary:
      "Explore the hidden library of the Watcher of the Black Isles, a legendary wizard, and uncover the truth about why the world's arcane knowledge has been sealed away. The DLC's narrative culminates in a choice about the future of magic itself.",
    aiTip:
      "This is DLC content — approach it with a well-developed party. The final boss adapts to your spell selection; bring varied damage types and avoid relying on one element.",
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
  },
  {
    id: 197,
    game: "Pillars of Eternity II: Deadfire",
    title: "Companion: Xoti's Lantern",
    location: "Various Islands",
    length: "long",
    difficulty: "Medium",
    reward: "Xoti Confidant completion, Harvest and Hunt ability upgrades",
    summary:
      "Travel with the monk-priestess Xoti as she struggles with the weight of souls she has harvested in her lantern. Her questline explores religious devotion, trauma, and the burden of a divine calling across multiple islands.",
    aiTip:
      "Xoti's alignment shifts based on your choices — support her religious doubts or reinforce her faith depending on which ending you prefer. Her combat abilities scale significantly with Confidant completion.",
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
  },
  {
    id: 198,
    game: "Pillars of Eternity II: Deadfire",
    title: "The City Lost to Time",
    location: "Ukaizo",
    length: "long",
    difficulty: "High",
    reward: "Endgame resolution, faction ending, ultimate loot",
    summary:
      "Reach the legendary lost city of Ukaizo — the final destination of your pursuit of the god Eothas. The city's secrets and your faction allegiance determine which of several dramatically different endings plays out.",
    aiTip:
      "Commit to one faction before reaching Ukaizo — the ending rewards vary wildly between factions. The Principi ending is considered the most emotionally satisfying; the VTC ending gives the best mechanical rewards.",
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
  },
  {
    id: 199,
    game: "Pillars of Eternity II: Deadfire",
    title: "Companion: Pallegina's Mission",
    location: "Various / Vailian Republics Quests",
    length: "long",
    difficulty: "Medium",
    reward: "Pallegina abilities upgraded, Vailian faction standing",
    summary:
      "Help Pallegina the godlike soldier navigate her complicated loyalty to the Vailian Trading Company while staying true to her own moral compass. Her questline adds nuance to the game's faction conflicts and her own identity struggle.",
    aiTip:
      "Support Pallegina when her orders conflict with her values — it builds the most meaningful character arc. Her combat abilities improve significantly with each Confidant milestone.",
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
  }
];
