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
  "Baldur's Gate 3": {
    field: "act",
    label: "Act",
    options: [
      { value: "1", text: "Act 1 – Wilderness & Underdark" },
      { value: "2", text: "Act 2 – Shadow-Cursed Lands" },
      { value: "3", text: "Act 3 – Baldur's Gate" }
    ]
  },
  "Elden Ring": {
    field: "region",
    label: "Region",
    options: [
      { value: "Limgrave", text: "Limgrave & Stormveil" },
      { value: "Liurnia", text: "Liurnia of the Lakes" },
      { value: "Caelid", text: "Caelid" },
      { value: "Leyndell & Altus", text: "Altus Plateau & Leyndell" },
      { value: "Mountaintops", text: "Mountaintops of the Giants" },
      { value: "Underground", text: "Underground & Eternal Cities" },
      { value: "Farum Azula", text: "Crumbling Farum Azula" },
      { value: "Haligtree", text: "Miquella's Haligtree" },
      { value: "Land of Shadow", text: "Shadow of the Erdtree (DLC)" }
    ]
  },
  "Black Myth: Wukong": {
    field: "chapter",
    label: "Chapter",
    options: [
      { value: "1", text: "Chapter 1 – Black Wind Mountain" },
      { value: "2", text: "Chapter 2 – Yellow Wind Ridge" },
      { value: "3", text: "Chapter 3 – Yellowbrow" },
      { value: "4", text: "Chapter 4 – The Webbed Hollow" },
      { value: "5", text: "Chapter 5 – Flaming Mountains" },
      { value: "6", text: "Chapter 6 – Mount Huaguo" }
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
  },
  "Cyberpunk 2077: Ultimate Edition": {
    field: "region",
    label: "District",
    options: [
      { value: "Watson", text: "Watson" },
      { value: "Westbrook", text: "Westbrook" },
      { value: "Heywood", text: "Heywood" },
      { value: "Pacifica", text: "Pacifica" },
      { value: "Santo Domingo", text: "Santo Domingo" },
      { value: "City Center", text: "City Center" },
      { value: "Badlands", text: "Badlands" },
      { value: "Dogtown", text: "Dogtown (Phantom Liberty)" }
    ]
  },
  "Final Fantasy VII Rebirth": {
    field: "region",
    label: "Region",
    options: [
      { value: "Grasslands", text: "Grasslands" },
      { value: "Junon", text: "Junon" },
      { value: "Corel", text: "Corel" },
      { value: "Gongaga", text: "Gongaga" },
      { value: "Cosmo Canyon", text: "Cosmo Canyon" },
      { value: "Nibel", text: "Nibel" }
    ]
  },
  "God of War Ragnarök": {
    field: "region",
    label: "Realm",
    options: [
      { value: "Midgard", text: "Midgard" },
      { value: "Svartalfheim", text: "Svartalfheim" },
      { value: "Vanaheim", text: "Vanaheim" },
      { value: "Alfheim", text: "Alfheim" },
      { value: "Muspelheim", text: "Muspelheim" },
      { value: "Niflheim", text: "Niflheim" },
      { value: "Helheim", text: "Helheim" },
      { value: "Asgard", text: "Asgard" }
    ]
  },
  "Horizon Forbidden West": {
    field: "region",
    label: "Region",
    options: [
      { value: "Sacred Lands", text: "Sacred Lands" },
      { value: "The Daunt", text: "The Daunt" },
      { value: "The Clan Lands", text: "The Clan Lands" },
      { value: "The Sea of Sands", text: "The Sea of Sands" },
      { value: "Burning Shores", text: "Burning Shores (DLC)" }
    ]
  },
  "Ghost of Tsushima": {
    field: "region",
    label: "Region",
    options: [
      { value: "Izuhara", text: "Izuhara" },
      { value: "Toyotama", text: "Toyotama" },
      { value: "Kamiagata", text: "Kamiagata" },
      { value: "Iki Island", text: "Iki Island (DLC)" }
    ]
  },
  "Hogwarts Legacy": [
    {
      field: "category",
      label: "Category",
      options: [
        { value: "Main Story", text: "Main Story" },
        { value: "Side Quest", text: "Side Quests" },
        { value: "Relationship", text: "Relationship" },
        { value: "Assignment", text: "Assignments" },
        { value: "Challenges", text: "Challenges" }
      ]
    },
    {
      field: "region",
      label: "Region",
      options: [
        { value: "Hogwarts", text: "Hogwarts Castle" },
        { value: "Hogsmeade", text: "Hogsmeade" },
        { value: "Highlands", text: "Highlands" },
        { value: "Feldcroft", text: "Feldcroft Region" }
      ]
    }
  ],
  "Metaphor: ReFantazio": {
    field: "region",
    label: "Region",
    options: [
      { value: "Grand Trad", text: "Grand Trad" },
      { value: "Martira", text: "Martira" },
      { value: "Kriegante", text: "Kriegante" },
      { value: "Skanda", text: "Skanda" }
    ]
  },
  "Demon's Souls": {
    field: "region",
    label: "Archstone",
    options: [
      { value: "Boletaria", text: "Boletarian Palace" },
      { value: "Stonefang", text: "Stonefang Tunnel" },
      { value: "Latria", text: "Tower of Latria" },
      { value: "Shrine of Storms", text: "Shrine of Storms" },
      { value: "Valley of Defilement", text: "Valley of Defilement" },
      { value: "The Nexus", text: "The Nexus" }
    ]
  },
  "Pillars of Eternity": {
    field: "region",
    label: "Region",
    options: [
      { value: "Gilded Vale", text: "Gilded Vale" },
      { value: "Caed Nua", text: "Caed Nua" },
      { value: "Defiance Bay", text: "Defiance Bay" },
      { value: "Twin Elms", text: "Twin Elms" },
      { value: "Dyrford", text: "Dyrford" },
      { value: "White March", text: "The White March (DLC)" }
    ]
  }
};

const quests = [
  {
    id: 1,
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
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
    type: "main",
    game: "Baldur's Gate 3",
    act: 2,
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
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
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
    type: "side",
    game: "Elden Ring",
    region: "Liurnia",
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
    type: "side",
    game: "Elden Ring",
    region: "Caelid",
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
    type: "side",
    game: "Elden Ring",
    region: "Caelid",
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
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    title: "Livestock's Bane",
    location: "Grasslands",
    length: "short",
    difficulty: "Low",
    reward: "Party EXP, relationship points, regional progress",
    summary:
      "An early side quest that introduces open-zone investigation. The player tracks a monster threat and learns how Rebirth uses regional activities.",
    aiTip:
      "Use this quest to understand tracking mechanics and improve party synergy before harder Grasslands content.",
    video: "https://www.youtube.com/watch?v=Wl5PRcqEAWs"
  },
  {
    id: 8,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Corel",
    title: "The Saga of the Seaside Inn",
    location: "Corel / Costa del Sol",
    length: "medium",
    difficulty: "Medium",
    reward: "Unique items, exploration progress",
    summary:
      "A light-hearted but involved quest chain focused on rebuilding and supporting a local inn. It blends exploration, mini-objectives, and character humor.",
    aiTip:
      "Complete nearby map objectives first, because several quest steps become faster once fast travel and regional intel are unlocked.",
    video: "https://www.youtube.com/watch?v=jj9_6zvmCE4"
  },
  {
    id: 9,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    title: "Can't Stop Won't Stop",
    location: "Gold Saucer",
    length: "medium",
    difficulty: "Low",
    reward: "Gold Saucer GP, unique materia, date scene progress",
    summary:
      "A sprawling mini-game marathon at the Gold Saucer theme park. Completing activities builds relationship points that influence a key story date scene.",
    aiTip:
      "Focus on your preferred date partner's favorite activities. The chocobo racing and 3D Brawler give the best GP returns.",
    video: "https://www.youtube.com/watch?v=knOyK-htZSA"
  },
  {
    id: 10,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "Sinnerman",
    location: "Night City",
    length: "medium",
    difficulty: "Medium",
    reward: "Money, narrative outcome, moral choices",
    summary:
      "A disturbing and philosophical questline built around guilt, punishment, media exploitation, and player discomfort rather than traditional combat.",
    aiTip:
      "Play this when you have time to follow the dialogue. The impact comes from the story, not the reward.",
    video: "https://www.youtube.com/watch?v=M8kG3zOzoSQ"
  },
  {
    id: 11,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Westbrook",
    title: "Dream On",
    location: "Night City / Peralez Apartment",
    length: "medium",
    difficulty: "Low",
    reward: "Political mystery resolution",
    summary:
      "A conspiracy-focused side quest where investigation matters more than combat. It explores surveillance, manipulation, and power in Night City.",
    aiTip:
      "Scan everything in the apartment and listen to the environmental clues before deciding how much truth to reveal.",
    video: "https://www.youtube.com/watch?v=PzNDAYy10BY"
  },
  {
    id: 12,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "The Hunt",
    location: "Night City / Braindance sequences",
    length: "long",
    difficulty: "Medium",
    reward: "River Ward romance option, unique weapon",
    summary:
      "A dark detective questline where you use braindance technology to track a serial kidnapper. One of the most tense and emotionally heavy side jobs in the game.",
    aiTip:
      "Pay close attention during braindance sequences — missing clues means missing the correct location, which changes the outcome drastically.",
    video: "https://www.youtube.com/watch?v=rDjVYk-ByhQ"
  },
  {
    id: 13,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=dVv0wLSYCB4"
  },
  {
    id: 14,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=FFI2FSIVBuE"
  },
  {
    id: 15,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=71PzwhZZFZk"
  },
  {
    id: 16,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Help the Hushed Honeybee",
    location: "Grand Trad",
    length: "short",
    difficulty: "Low",
    reward: "Virtue growth, money, early-game routine progress",
    summary:
      "An early activity-style quest that teaches time management and social-stat progression, which are core to the broader RPG loop.",
    aiTip:
      "Good to complete early because it supports character growth without requiring heavy combat preparation.",
    video: "https://www.youtube.com/watch?v=zNjNXgEthy4"
  },
  {
    id: 17,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Pagan's Dilemma",
    location: "Grand Trad",
    length: "medium",
    difficulty: "Medium",
    reward: "Follower-related progress, social insight",
    summary:
      "A side story focused on prejudice, belief, and social pressure. It gives the world more texture beyond the central tournament plot.",
    aiTip:
      "Treat dialogue as part of the quest system. Metaphor often rewards attention to social context, not only combat strength.",
    video: "https://www.youtube.com/watch?v=Qp8q2DB5MFw"
  },
  {
    id: 18,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "The Monster of Grand Trad",
    location: "Grand Trad Sewers",
    length: "medium",
    difficulty: "High",
    reward: "Rare equipment, Archetype unlock progress",
    summary:
      "Track a dangerous creature lurking beneath the capital city. The dungeon is optional but holds some of the best mid-game loot and tests party composition.",
    aiTip:
      "Bring a healer Archetype and stock up on MP restoratives. The boss hits hard and exploits elemental weaknesses.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20The%20Monster%20of%20Grand%20Trad%20walkthrough"
  },
  {
    id: 19,
    type: "side",
    game: "Demon's Souls",
    region: "Latria",
    title: "Yuria the Witch's Rescue",
    location: "Tower of Latria (3-1)",
    length: "medium",
    difficulty: "High",
    reward: "Access to advanced magic spells, NPC vendor",
    summary:
      "Navigate the nightmarish prison of Latria to free a powerful witch. The tower is filled with mind flayer enemies, narrow walkways, and environmental traps.",
    aiTip:
      "Bring a ranged option and move slowly. The Mind Flayers can paralyze and one-shot you. Free Yuria's key from the guards first.",
    video: "https://www.youtube.com/watch?v=IAMn_0_6IvY"
  },
  {
    id: 20,
    type: "side",
    game: "Demon's Souls",
    region: "Shrine of Storms",
    title: "Sparkly the Crow's Trades",
    location: "Shrine of Storms (4-1)",
    length: "short",
    difficulty: "Low",
    reward: "Rare upgrade materials, unique consumables",
    summary:
      "An invisible crow on a high nest accepts item trades. Drop specific items and reload the area to receive rare rewards not available anywhere else.",
    aiTip:
      "Look up the trade list — some of the best rewards come from common items you might otherwise sell.",
    video: "https://www.youtube.com/watch?v=Riigb2TiFFo"
  },
  {
    id: 21,
    type: "side",
    game: "Demon's Souls",
    region: "Stonefang",
    title: "Scirvir the Wanderer's Challenge",
    location: "Stonefang Tunnel (2-2)",
    length: "short",
    difficulty: "Medium",
    reward: "Pure Greystone, Dragon Bone Smasher access",
    summary:
      "Meet a wandering warrior who challenges you to prove your worth. Completing his request unlocks one of the most powerful strength weapons in the game.",
    aiTip:
      "You need Pure White World Tendency in World 2 to access the Dragon Bone Smasher. Plan your deaths and kills accordingly.",
    video: "https://www.youtube.com/watch?v=4QzsNkwfzIg"
  },
  {
    id: 22,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "The Ghost of Our Love",
    location: "Forbidden Forest",
    length: "short",
    difficulty: "Low",
    reward: "Treasure map loot, exploration XP",
    summary:
      "Follow a ghostly trail through the Forbidden Forest at night to uncover a hidden treasure. A short atmospheric quest that showcases the game's exploration.",
    aiTip:
      "Must be done at night — use the wait mechanic if it's daytime. Follow the butterflies carefully; they disappear if you stray too far.",
    video: "https://www.youtube.com/watch?v=ftHhNS_PJFw"
  },
  {
    id: 23,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "Rescuing Rococo",
    location: "Henrietta's Hideaway",
    length: "medium",
    difficulty: "Medium",
    reward: "Niffler companion, unique gear",
    summary:
      "Help a student recover their pet Niffler from a poacher hideout. The dungeon features puzzle-based combat rooms mixing spell types and environmental mechanics.",
    aiTip:
      "Master the spell-type matching puzzles before going in. You need Incendio, Glacius, and Levioso at minimum.",
    video: "https://www.youtube.com/watch?v=T8k6izOn6Bs"
  },
  {
    id: 24,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "The Hall of Herodiana",
    location: "Hogwarts Castle",
    length: "medium",
    difficulty: "Medium",
    reward: "Extra gear inventory slots",
    summary:
      "Solve a series of block-pushing puzzles hidden within Hogwarts to unlock additional gear capacity. One of the most useful side quests in the entire game.",
    aiTip:
      "Use Depulso and Accio strategically. The puzzles get progressively harder — the last room requires careful positioning before any block moves.",
    video: "https://www.youtube.com/watch?v=48cEYhXFMrI"
  },
  {
    id: 25,
    type: "side",
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
    type: "side",
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
    video: "https://www.youtube.com/watch?v=T4gT29_KTeI"
  },
  {
    id: 27,
    type: "side",
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
    type: "side",
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
    video: "https://www.youtube.com/watch?v=aws_pIoWkHA"
  },
  {
    id: 29,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=cA1w2eTChGs"
  },
  {
    id: 30,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=CbFLORHqUXU"
  },
  {
    id: 31,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=4c3j5Igj9NQ"
  },
  {
    id: 32,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=3Z1T0f9f4Vw"
  },
  {
    id: 33,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=Q4GLjCF0rHg"
  },
  {
    id: 34,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=MFgAIteo-X0"
  },
  {
    id: 35,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=F72fGFPr1IY"
  },
  {
    id: 36,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=WgRN7SYJb_M"
  },
  {
    id: 37,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=9oUv31iv-E0"
  },
  {
    id: 38,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=V0uK3Kuzq_g"
  },
  {
    id: 39,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=TQBe8UKsvDo"
  },
  {
    id: 40,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=uTEAl3zf1Ws"
  },
  {
    id: 41,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=j9GrBz96UdM"
  },
  {
    id: 42,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=EHhayw2Na0Y"
  },
  {
    id: 43,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=lRL8pJR45bU"
  },
  {
    id: 44,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=3VQyzSeVY0U"
  },
  {
    id: 45,
    type: "side",
    game: "God of War Ragnarök",
    region: "Svartalfheim",
    title: "The Lost Lindwyrms",
    location: "Svartalfheim & Vanaheim",
    length: "long",
    difficulty: "Medium",
    reward: "Gale Flame, Lindwyrm Scales, 4500 XP",
    summary:
      "Ratatoskr tasks Kratos with capturing six escaped Lindwyrms scattered across Svartalfheim and Vanaheim. The quest involves tracking down creatures in hidden locations across two realms while enjoying Ratatoskr's sharp-tongued banter.",
    aiTip:
      "Wait until you have access to both realms fully before starting. Collecting all Gale Sparks completes the Draupnir Spear upgrade.",
    video: "https://www.youtube.com/watch?v=O1bWR8i5Krg"
  },
  {
    id: 46,
    type: "side",
    game: "God of War Ragnarök",
    region: "Muspelheim",
    title: "Defend Your Valor",
    location: "Muspelheim",
    length: "medium",
    difficulty: "High",
    reward: "Queen's Armor, Queen's Roar Runic Summon, 4000 XP",
    summary:
      "Freya seeks to reclaim her Valkyrie title by defeating Gná, one of the toughest bosses in the game. This endgame favour tests your combat mastery in an intense one-on-one battle.",
    aiTip:
      "Gná is arguably the hardest boss in the game. Equip your best armor and fully upgrade the Draupnir Spear before attempting this fight.",
    video: "https://www.youtube.com/watch?v=5HM0a3iCn_8"
  },
  {
    id: 47,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "Freyr's Gift",
    location: "The Forbidden Sands, Alfheim",
    length: "short",
    difficulty: "Low",
    reward: "Invoke the Storm Runic Summon, Whispering Slabs",
    summary:
      "A brief but lore-rich favour at a large statue west of The Burrows in Alfheim. Kratos solves a light crystal puzzle to activate Freyr's monument while Mimir narrates the history of elven cooperation.",
    aiTip:
      "This takes only a few minutes and rewards a solid Runic Summon. Grab it early when exploring Alfheim for a useful combat ability.",
    video: "https://www.youtube.com/watch?v=CxURjVeuuKA"
  },
  {
    id: 48,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=4ewz8qCh2rg"
  },
  {
    id: 49,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=uB7YvEUtwxM"
  },
  {
    id: 50,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=QiqnGBceMnQ"
  },
  {
    id: 51,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "The Spirit of Yarikawa's Vengeance",
    location: "Ruins of Old Yarikawa, Toyotama",
    length: "medium",
    difficulty: "High",
    reward: "Dance of Wrath combat technique, Omukade's Revenge Sword Kit",
    summary:
      "This Mythic Tale sends Jin to the ruins of Old Yarikawa to confront a vengeful spirit. After finding pillars of white smoke and collecting offerings, a tense duel awaits in the Garden of the Gods.",
    aiTip:
      "The spirit duel is one of the hardest in the game. Master the timing of perfect parries and watch for unblockable attacks signaled by red glints.",
    video: "https://www.youtube.com/watch?v=0CR-bVq-xdA"
  },
  {
    id: 52,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Curse of Uchitsune",
    location: "Hiyoshi Springs, Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Uchitsune's Longbow, Heavy & Explosive Arrows",
    summary:
      "A musician's tale leads Jin on a treasure hunt across painted landmarks to find the legendary Longbow of Uchitsune. Picking up the cursed weapon triggers a hallucination and a duel with a Tengu Demon.",
    aiTip:
      "Follow the painting clues carefully. The Longbow has superior range and armor penetration, making it one of the best ranged weapons in the game.",
    video: "https://www.youtube.com/watch?v=6XQ45T4ruDQ"
  },
  {
    id: 53,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Tale of Sensei Ishikawa",
    location: "Hiyoshi Springs, Izuhara",
    length: "long",
    difficulty: "Medium",
    reward: "Half Bow, Kunai Ghost Weapon, Major Legend Increase",
    summary:
      "A nine-mission questline spanning all three regions of Tsushima following archery master Ishikawa as he tracks his former student Tomoe. The story is a poignant tale of betrayal, duty, and redemption.",
    aiTip:
      "Start this questline early as it spans the entire game. The Kunai reward is extremely useful for staggering enemies and breaking their guard.",
    video: "https://www.youtube.com/watch?v=ismSt2eMGdo"
  },
  {
    id: 54,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Blood for Blood",
    location: "Memorial Grove, Daunt",
    length: "medium",
    difficulty: "Medium",
    reward: "Perimeter Tripcaster, 2 Skill Points, 4750 XP",
    summary:
      "After the Kulrut ceremony, elder Dekka asks Aloy to help track down her grandson Kavvoh who joined Regalla's rebels. The quest explores themes of family loyalty and tribal division.",
    aiTip:
      "Complete The Kulrut main quest first to unlock this. Search the rebel camp thoroughly, including the hidden pit under wooden floor panels.",
    video: "https://www.youtube.com/watch?v=iC_HQB2WOds"
  },
  {
    id: 55,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Daunt",
    title: "Forbidden Legacy",
    location: "Legacy's Landfall, San Francisco",
    length: "long",
    difficulty: "Medium",
    reward: "Utaru Protector Outfit, 3 Skill Points, 7500 XP",
    summary:
      "Alva discovers data about Leviathan, a defunct flood control system in the Great Delta. She and Aloy explore the ruins of Atbay Global Infrastructure in San Francisco to recover critical repair data.",
    aiTip:
      "This quest has door code puzzles. Pay attention to environmental clues and data logs for the codes rather than brute-forcing combinations.",
    video: "https://www.youtube.com/watch?v=mTt0HqyaFbQ"
  },
  {
    id: 56,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Sea of Sands",
    title: "The Gate of the Vanquished",
    location: "Scalding Spear, Desert",
    length: "long",
    difficulty: "High",
    reward: "Firestorm Warrior Bow, 3 Skill Points, 4125 XP",
    summary:
      "A multi-part quest involving a power struggle between Tenakth commanders Yarra and Drakka over control of Scalding Spear. Aloy must navigate tribal politics and make a consequential choice.",
    aiTip:
      "This quest has a meaningful choice at the end that affects which characters survive. The Firestorm Warrior Bow reward is one of the strongest early weapons regardless of your decision.",
    video: "https://www.youtube.com/watch?v=B4zNx29HC84"
  },
  {
    id: 57,
    type: "main",
    game: "Pillars of Eternity",
    region: "Defiance Bay",
    title: "The Man Who Waits",
    location: "Heritage Hill, Defiance Bay",
    length: "medium",
    difficulty: "Medium",
    reward: "Heritage Hill access cleared, Act 2 progression",
    summary:
      "Heritage Hill has been sealed off due to undead rising from the graves. Investigate the source of the disturbance — an ancient Engwithan machine reanimating corpses — and decide the fate of the souls trapped within.",
    aiTip:
      "Bring a priest or paladin for the undead encounters. The final choice affects the district permanently — read the soul descriptions before deciding.",
    video: "https://www.youtube.com/watch?v=TR0TQ9U-abg"
  },
  {
    id: 58,
    type: "side",
    game: "Pillars of Eternity",
    region: "Caed Nua",
    title: "The Trials of Durance",
    location: "Party Companion Quest",
    length: "long",
    difficulty: "Low",
    reward: "Durance's full backstory, companion ability upgrades",
    summary:
      "Unravel the troubled past of Durance, a fanatical priest of Magran, through campfire conversations. His story reveals dark truths about the gods and the Saint's War that reshape your understanding of Eora's history.",
    aiTip:
      "Talk to Durance at every rest. His dialogue triggers are tied to story progression milestones — miss them and you lock yourself out of later revelations.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20The%20Trials%20of%20Durance%20walkthrough"
  },
  {
    id: 59,
    type: "side",
    game: "Pillars of Eternity",
    region: "Defiance Bay",
    title: "The Bronze Beneath the Lake",
    location: "Cliaban Rilag, Stormwall Gorge",
    length: "medium",
    difficulty: "High",
    reward: "Engwithan lore, rare equipment, XP",
    summary:
      "Explore the ancient Engwithan ruin of Cliaban Rilag, a flooded temple complex guarded by powerful spirits and constructs. The dungeon reveals secrets about the civilization that created the gods.",
    aiTip:
      "This dungeon hits hard — bring crowd control and area-of-effect damage. The spirits inside resist physical attacks, so casters shine here.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20The%20Bronze%20Beneath%20the%20Lake%20walkthrough"
  },
  {
    id: 60,
    type: "side",
    game: "Pillars of Eternity",
    region: "Caed Nua",
    title: "The Master Below",
    location: "Endless Paths of Od Nua, Caed Nua",
    length: "long",
    difficulty: "High",
    reward: "Legendary loot, stronghold upgrade, massive XP",
    summary:
      "Descend all fifteen levels of the Endless Paths beneath your stronghold to confront the Adra Dragon at the bottom. The mega-dungeon spans the entire game and escalates from bandits to some of the toughest encounters in the series.",
    aiTip:
      "Don't try to clear it in one go — return between levels to rest and resupply. The Adra Dragon can be talked down if your Resolve and Lore are high enough.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20The%20Master%20Below%20walkthrough"
  },
  {
    id: 61,
    type: "side",
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
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20The%20Storms%20of%20Poko%20Kohara%20walkthrough"
  },
  {
    id: 62,
    type: "side",
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
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20A%20Sorcerer%20and%20a%20Gentleman%20walkthrough"
  },
  {
    id: 63,
    type: "side",
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
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20The%20Lost%20Grimoires%20walkthrough"
  },
  {
    id: 64,
    type: "side",
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
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20The%20Changeling's%20Dance%20walkthrough"
  },
  {
    id: 65,
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
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
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
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
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
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
    type: "side",
    game: "Baldur's Gate 3",
    act: 1,
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
    type: "side",
    game: "Baldur's Gate 3",
    act: 2,
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
    type: "side",
    game: "Elden Ring",
    region: "Leyndell & Altus",
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
    type: "side",
    game: "Elden Ring",
    region: "Underground",
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
    type: "side",
    game: "Elden Ring",
    region: "Limgrave",
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
    type: "side",
    game: "Elden Ring",
    region: "Leyndell & Altus",
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
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    title: "The Protorelic Quests",
    location: "Multiple Regions",
    length: "long",
    difficulty: "Medium",
    reward: "Protorelic summon materia, powerful summons",
    summary:
      "Each open-world region contains a multi-step quest to recover ancient Protorelic artifacts. These involve exploration puzzles, combat trials, and boss fights that reward unique summon materia for your party.",
    aiTip:
      "Complete each region's Intel objectives first — they reveal Protorelic quest locations. The summon materia rewards are some of the strongest abilities in the game.",
    video: "https://www.youtube.com/watch?v=_WIDD8VTlu4"
  },
  {
    id: 75,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    title: "Flowers from the Hill",
    location: "Kalm Region",
    length: "short",
    difficulty: "Low",
    reward: "Relationship points, crafting materials",
    summary:
      "A gentle early quest where Cloud helps a young girl gather rare flowers on the outskirts of Kalm. It establishes the exploration mechanics and rewards careful attention to the environment.",
    aiTip:
      "The rarest flower is on a cliff edge that requires jumping — look for yellow climbing handholds nearby.",
    video: "https://www.youtube.com/watch?v=FOAAzPumW44"
  },
  {
    id: 76,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Corel",
    title: "The Musclehead Colosseum",
    location: "Gold Saucer / Corel Region",
    length: "medium",
    difficulty: "High",
    reward: "Unique materia, rare equipment, GP",
    summary:
      "Enter a series of increasingly brutal arena battles at the Gold Saucer's combat colosseum. The final rounds pit you against superboss-level opponents that test your build and strategy.",
    aiTip:
      "Elemental materia combinations are key for later rounds. The final champion has no elemental weakness — focus on limit breaks and synergy attacks.",
    video: "https://www.youtube.com/watch?v=wkTEyy0nRyo"
  },
  {
    id: 77,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    title: "Where the Wind Blows",
    location: "Junon Region",
    length: "medium",
    difficulty: "Medium",
    reward: "Chocobo gear upgrades, exploration access",
    summary:
      "Help a chocobo rancher investigate why the local chocobos have been acting strangely. The investigation reveals environmental threats and unlocks new chocobo traversal abilities for the region.",
    aiTip:
      "Unlocking the chocobo's new ability early opens shortcuts throughout Junon. Complete this before other Junon side content for easier navigation.",
    video: "https://www.youtube.com/watch?v=PswNcC3SHKw"
  },
  {
    id: 78,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Judy's Questline (Pyramid Song)",
    location: "Night City / Laguna Bend",
    length: "long",
    difficulty: "Medium",
    reward: "Judy romance, Diving Suit, emotional payoff",
    summary:
      "Follow Judy Alvarez through her quest to take down the Clouds dollhouse and reclaim her past. The final quest, Pyramid Song, features an underwater dive through a submerged town — one of the most beautiful and intimate moments in the game.",
    aiTip:
      "Play as female V for the romance option. Take your time during the diving sequence — the environmental storytelling is exceptional and easily missed if you rush.",
    video: "https://www.youtube.com/watch?v=M-9aTafUwgI"
  },
  {
    id: 79,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Chippin' In",
    location: "Night City / Oil Fields",
    length: "long",
    difficulty: "High",
    reward: "Johnny's Porsche 911 II, Malorian Arms pistol",
    summary:
      "Help Johnny Silverhand settle old scores with the remnants of his band and confront his past at the oil fields where his body was dumped. A pivotal quest that determines your relationship with Johnny and unlocks the secret ending.",
    aiTip:
      "Choose dialogue options that show empathy toward Johnny — your relationship score here directly affects whether the secret ending becomes available.",
    video: "https://www.youtube.com/watch?v=LI9x_SG0zMg"
  },
  {
    id: 80,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "The Peralez Conspiracy (I Fought the Law)",
    location: "Night City / Charter Hill",
    length: "long",
    difficulty: "Medium",
    reward: "Eddies, political intrigue resolution",
    summary:
      "Investigate a seemingly routine case for a mayoral candidate that spirals into a terrifying conspiracy about mind control, surveillance, and hidden powers manipulating Night City from the shadows.",
    aiTip:
      "Scan every piece of evidence at each crime scene. The conspiracy goes deeper than the game explicitly tells you — read all shards and emails for the full picture.",
    video: "https://www.youtube.com/watch?v=CBZYBz7ku5k"
  },
  {
    id: 81,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Dogtown",
    title: "Phantom Liberty – Firestarter",
    location: "Dogtown",
    length: "long",
    difficulty: "High",
    reward: "Relic skill tree access, Dogtown exploration",
    summary:
      "The opening mission of the Phantom Liberty expansion plunges V into Dogtown's dangerous politics. Work with NUSA agent Solomon Reed to infiltrate a fortified stadium and rescue the President of the New United States.",
    aiTip:
      "Explore Dogtown thoroughly after this mission — the expansion's best side content opens up. The Relic skill tree transforms V's combat abilities significantly.",
    video: "https://www.youtube.com/watch?v=r31zTg5KEXU"
  },
  {
    id: 82,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "The Tournament of Souls",
    location: "Grand Trad Arena",
    length: "long",
    difficulty: "High",
    reward: "Archetype unlock, rare equipment, massive follower growth",
    summary:
      "Enter a multi-round combat tournament that tests your party composition against increasingly powerful opponents. Each round introduces unique mechanics and enemy archetypes that force you to adapt your strategy.",
    aiTip:
      "Switch Archetypes between rounds to exploit enemy weaknesses. The final opponent resists everything — raw damage output and buff stacking are your best options.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20The%20Tournament%20of%20Souls%20walkthrough"
  },
  {
    id: 83,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "The Nameless Soldier",
    location: "Fort Endra",
    length: "medium",
    difficulty: "Medium",
    reward: "Virtue growth, unique weapon, lore revelations",
    summary:
      "Investigate reports of a ghostly soldier haunting a ruined fortress. The quest blends dungeon exploration with a poignant story about loyalty, sacrifice, and the cost of the kingdom's wars.",
    aiTip:
      "Bring characters with high Courage — several dialogue checks require it. The ghost's weakness is Light-type attacks.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20The%20Nameless%20Soldier%20walkthrough"
  },
  {
    id: 84,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower: Louis's Request",
    location: "Varies by story chapter",
    length: "long",
    difficulty: "Medium",
    reward: "Louis Confidant progression, unique Archetype abilities",
    summary:
      "Deepen your bond with the enigmatic Louis through a series of conversations and tasks that reveal his complex motivations. His questline is one of the most narratively important in the game and directly affects the ending.",
    aiTip:
      "Prioritize Louis's Follower ranks early — his later abilities are among the strongest in the game. Pay close attention to his philosophy; your responses matter.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%3A%20Louis's%20Request%20walkthrough"
  },
  {
    id: 85,
    type: "side",
    game: "Demon's Souls",
    region: "Latria",
    title: "Saint Urbain's Rescue",
    location: "Shrine of Storms (4-2)",
    length: "medium",
    difficulty: "High",
    reward: "Access to miracle spells, Second Chance miracle",
    summary:
      "Rescue the holy man Saint Urbain from the depths of the Shrine of Storms. He's trapped in a pit surrounded by deadly shadow lurkers, and freeing him unlocks the game's most powerful defensive miracle.",
    aiTip:
      "Bring a light source — the pit is pitch black. Second Chance is arguably the best miracle in the game, reviving you once per casting at half HP.",
    video: "https://www.youtube.com/watch?v=th0qgF9VTsA"
  },
  {
    id: 86,
    type: "side",
    game: "Demon's Souls",
    region: "The Nexus",
    title: "Mephistopheles' Assassinations",
    location: "The Nexus",
    length: "long",
    difficulty: "High",
    reward: "Foe's Ring, unique souls, Colorless Demon Souls",
    summary:
      "A mysterious woman in black appears in the Nexus at Pure Black Character Tendency and tasks you with assassinating every named NPC. A dark questline for players willing to sacrifice their allies for power.",
    aiTip:
      "Only attempt this on a character you're willing to lose NPC services on. Complete all NPC quests and purchases before starting. The Foe's Ring boosts damage at low HP — extremely powerful for skilled players.",
    video: "https://www.youtube.com/watch?v=L-uQipj4SKc"
  },
  {
    id: 87,
    type: "side",
    game: "Demon's Souls",
    region: "Stonefang",
    title: "Patches the Hyena",
    location: "Stonefang Tunnel (2-2), Shrine of Storms (4-2)",
    length: "short",
    difficulty: "Low",
    reward: "Heavy Arrows, vendor access, comedic encounters",
    summary:
      "Encounter the treacherous Patches across multiple worlds as he repeatedly tries to trick you into traps. A recurring FromSoftware character who became a staple of the Souls series starting here.",
    aiTip:
      "Don't attack Patches — he becomes a useful vendor in the Nexus. Say 'No' when he asks if you're a cleric for the best outcome.",
    video: "https://www.youtube.com/watch?v=rvLPhn9oh4k"
  },
  {
    id: 88,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "The Hippogriff Marks the Spot",
    location: "Poidsear Coast",
    length: "medium",
    difficulty: "Medium",
    reward: "Treasure vault loot, exploration XP, unique gear",
    summary:
      "Follow a treasure map leading to a series of clues scattered across the Poidsear Coast. Each clue brings you closer to a hidden vault guarded by dark wizards and ancient enchantments.",
    aiTip:
      "Use Revelio frequently — the clues blend into the environment. The final vault requires Alohomora Level 2, so upgrade your lockpicking first.",
    video: "https://www.youtube.com/watch?v=G6qxi3c8_9I"
  },
  {
    id: 89,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "In the Shadow of the Undercroft",
    location: "Hogwarts Castle",
    length: "long",
    difficulty: "Medium",
    reward: "Sebastian Sallow companion quests, Dark Arts access",
    summary:
      "Sebastian Sallow reveals a secret room beneath Hogwarts and begins teaching you forbidden magic. This questline spans the entire game and forces increasingly difficult moral choices about the Dark Arts.",
    aiTip:
      "This is the only way to learn the Unforgivable Curses. Progressing Sebastian's story doesn't lock you into being 'evil' — you can learn the spells and still make good choices.",
    video: "https://www.youtube.com/watch?v=fuvTMtslfCQ"
  },
  {
    id: 90,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Mer-ky Depths",
    location: "Black Lake",
    length: "medium",
    difficulty: "Medium",
    reward: "Unique underwater gear, rare crafting materials",
    summary:
      "Investigate disturbances in the Black Lake involving agitated Grindylows and a mystery beneath the water's surface. Features one of the game's most visually impressive underwater sequences.",
    aiTip:
      "Equip cold-resistance gear before diving. The Grindylows attack in swarms — use Depulso to create distance and Incendio for area damage.",
    video: "https://www.youtube.com/watch?v=HJWdEOHVZhk"
  },
  {
    id: 91,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Mum's the Word (Natty)",
    location: "Lower Hogsfield / Highlands",
    length: "medium",
    difficulty: "Medium",
    reward: "Natsai Onai relationship progression",
    summary:
      "Open Natsai Onai's companion questline by helping her and her mother settle into the Dyrwood — and dig into the Ashwinder trouble stirring nearby.",
    aiTip:
      "The first of Natty's relationship quests — complete it to unlock her later arc (A Basis for Blackmail, The Lost Child, Grief and Vengeance).",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Mum's%20the%20Word%20Natty%20walkthrough"
  },
  {
    id: 92,
    type: "side",
    game: "God of War Ragnarök",
    region: "Svartalfheim",
    title: "The Weight of Chains",
    location: "Svartalfheim",
    length: "long",
    difficulty: "Medium",
    reward: "Draupnir Spear attachments, Lunda's Armor set",
    summary:
      "Investigate the dwarven mining operations in Svartalfheim and uncover the brutal conditions imposed by Odin's regime. A quest chain that deepens the world-building around dwarven culture and resistance.",
    aiTip:
      "Complete the optional dock areas for crafting materials. Lunda's armor set inflicts Poison on parry — one of the best early armor options.",
    video: "https://www.youtube.com/watch?v=64sie5KvlWU"
  },
  {
    id: 93,
    type: "side",
    game: "God of War Ragnarök",
    region: "Svartalfheim",
    title: "Spirit of Rebellion",
    location: "Vanaheim, The Crater",
    length: "long",
    difficulty: "High",
    reward: "Rond of Affliction shield attachment, Chaos Flame",
    summary:
      "Help the Vanir resistance fight back against Asgardian occupation in Vanaheim's massive Crater region. This sprawling favour chain opens up one of the game's largest optional areas with day/night cycle mechanics.",
    aiTip:
      "The Crater is enormous — use the Celestial Altars to switch between day and night, as different paths and enemies appear at different times.",
    video: "https://www.youtube.com/watch?v=6PdPpJlonMM"
  },
  {
    id: 94,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Fit for a King",
    location: "Svartalfheim, Niðavellir",
    length: "medium",
    difficulty: "Medium",
    reward: "Steinbjörn Armor set materials, Amulet Enchantment",
    summary:
      "Track down the legendary Sleeping Troll hidden in Svartalfheim's mountains. Waking and defeating it provides materials for one of the game's most powerful armor sets.",
    aiTip:
      "The Sleeping Troll is a mini-boss that hits extremely hard. Use the Draupnir Spear's range to stay safe and detonate embedded spears for burst damage.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Fit%20for%20a%20King%20walkthrough"
  },
  {
    id: 95,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "The Berserker Gravestone Battles",
    location: "Multiple Realms",
    length: "long",
    difficulty: "High",
    reward: "Berserker Armor set, Hilt of Skofnung",
    summary:
      "Find and battle twelve Berserker spirits sealed in gravestones across all nine realms. The ultimate optional boss rush culminates in a fight against the Berserker King — one of the hardest encounters in the game.",
    aiTip:
      "Each Berserker has different elemental affinities — switch equipment accordingly. Save the King for last; he's harder than the final story boss. Level 9 gear is recommended.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Berserker%20Gravestone%20Battles%20walkthrough"
  },
  {
    id: 97,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=FdLgyv7Zmaw"
  },
  {
    id: 98,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=bhECGheHrKc"
  },
  {
    id: 100,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Legend of Tadayori",
    location: "Azamo Bay, Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Tadayori's Armor set (best archery armor)",
    summary:
      "Track down the legendary armor of the archer Tadayori by following clues across Izuhara. The quest culminates in a duel against a ronin guarding the armor's resting place — a test of your ranged combat skills.",
    aiTip:
      "Tadayori's Armor dramatically improves concentration mode for the bow. This is the best armor for ranged playstyles — grab it early.",
    video: "https://www.youtube.com/watch?v=0WV7wgGfe-g"
  },
  {
    id: 101,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Heavenly Strike",
    location: "Toyotama",
    length: "short",
    difficulty: "Medium",
    reward: "Heavenly Strike combat technique",
    summary:
      "A Mythic Tale that teaches Jin a devastating unblockable attack. Follow a musician's directions to a hidden dojo where you must prove your swordsmanship through a series of increasingly difficult combat trials.",
    aiTip:
      "Heavenly Strike is one of the best combat abilities in the game — it breaks through any guard. Master the timing in the trials; they teach you the exact rhythm.",
    video: "https://www.youtube.com/watch?v=SDRtxDz7Duc"
  },
  {
    id: 102,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Tale of Lady Masako",
    location: "Izuhara / Toyotama",
    length: "long",
    difficulty: "Medium",
    reward: "Major Legend Increase, unique dye, emotional story",
    summary:
      "A nine-part questline following the elderly warrior Lady Masako as she hunts down those responsible for the massacre of her entire family. A revenge story that explores grief, obsession, and whether vengeance can ever bring peace.",
    aiTip:
      "Start early as this spans most of the game. The final quest has a major choice — there's no purely 'good' option, so choose what feels right for your version of Jin.",
    video: "https://www.youtube.com/watch?v=Uw12nUwnKWM"
  },
  {
    id: 103,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "Gosaku's Armor",
    location: "Akashima, Toyotama",
    length: "long",
    difficulty: "Medium",
    reward: "Gosaku's Armor (best melee armor), massive stagger damage",
    summary:
      "Liberate six occupied farmsteads across Toyotama to collect keys that unlock the legendary armor of the warrior Gosaku. Each farmstead is a combat encounter with Mongol forces, building toward the armor's hidden shrine.",
    aiTip:
      "Gosaku's Armor restores health on staggered kills — it's arguably the best combat armor. The six farmsteads are spread across the map; liberate them as you explore naturally.",
    video: "https://www.youtube.com/watch?v=MATxmNS9GxY"
  },
  {
    id: 104,
    type: "main",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "The Kulrut",
    location: "Memorial Grove, Daunt",
    length: "medium",
    difficulty: "Medium",
    reward: "Tenakth allies, arena access, 5000 XP",
    summary:
      "Attend the sacred Kulrut ceremony where Tenakth warriors prove themselves in ritual combat against machines. The ceremony is disrupted by rebels, forcing Aloy into the arena to fight alongside the clans.",
    aiTip:
      "Prepare for a multi-wave machine fight. Tear damage weapons strip armor quickly — use Tearblast arrows to expose weak points before switching to elemental damage.",
    video: "https://www.youtube.com/watch?v=_j4_NpcVMHw"
  },
  {
    id: 105,
    type: "main",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "The Wings of the Ten",
    location: "Sheerside Mountains",
    length: "long",
    difficulty: "High",
    reward: "Sunwing Override, flying mount access",
    summary:
      "A pivotal quest where Aloy gains the ability to override and ride Sunwing machines, unlocking flight across the entire map. The quest involves infiltrating a Regalla rebel camp and confronting a massive Dreadwing.",
    aiTip:
      "This unlocks flight — do it as soon as it's available. The Dreadwing boss is weak to Fire. After completing this, every collectible and side quest becomes dramatically easier to reach.",
    video: "https://www.youtube.com/watch?v=jMCtZ4xkIJ4"
  },
  {
    id: 106,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Daunt",
    title: "Tallneck: The Devil's Thirst",
    location: "The Daunt",
    length: "short",
    difficulty: "Low",
    reward: "Map reveal, XP, early exploration boost",
    summary:
      "Override the first Tallneck to reveal the surrounding map. Each Tallneck is an environmental puzzle requiring Aloy to find a path to its head — this one involves climbing ruins around a flooded area.",
    aiTip:
      "Always prioritize Tallnecks when you enter a new region — the map reveal shows all nearby activities, collectibles, and machine sites.",
    video: "https://www.youtube.com/watch?v=w3wURjVgnI0"
  },
  {
    id: 107,
    type: "main",
    game: "Horizon Forbidden West",
    region: "The Sea of Sands",
    title: "The Sea of Sands",
    location: "Stillsands, Desert",
    length: "long",
    difficulty: "High",
    reward: "Arena access, Oseram Artificer gear, 6000 XP",
    summary:
      "Cross a treacherous desert filled with burrowing machines to reach a buried ruin. The sandstorms limit visibility while Tremortusks and Slitherfangs patrol the dunes — one of the tensest exploration sequences in the game.",
    aiTip:
      "Craft Freeze ammo before entering — desert machines are almost all weak to Frost. Use the rock formations for cover during sandstorms when visibility drops.",
    video: "https://www.youtube.com/watch?v=UP5p7BpHyjc"
  },
  {
    id: 108,
    type: "side",
    game: "Pillars of Eternity",
    region: "Defiance Bay",
    title: "The Dozen's Dispute",
    location: "Defiance Bay",
    length: "medium",
    difficulty: "Medium",
    reward: "Faction reputation, gold, Act 2 allies",
    summary:
      "Navigate the political rivalry between Defiance Bay's major factions — the Dozens, the Crucible Knights, and the Doemenels. Each faction offers unique quests and rewards, but aligning with one locks you out of the others.",
    aiTip:
      "Choose your faction carefully — it affects available quests and companions' reactions. The Crucible Knights offer the best equipment rewards, the Dozens the most story content.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20The%20Dozen's%20Dispute%20walkthrough"
  },
  {
    id: 109,
    type: "main",
    game: "Pillars of Eternity",
    region: "Twin Elms",
    title: "Through Death's Gate",
    location: "Brackenbury, Defiance Bay",
    length: "medium",
    difficulty: "Medium",
    reward: "Rare ring, animancy lore, XP",
    summary:
      "Investigate a sanitarium where animancers are conducting controversial experiments on souls. The quest explores the game's central theme of soul manipulation and forces you to decide how far science should go.",
    aiTip:
      "Read every patient record — they contain hints about the correct ward to investigate. Your choices here affect the animancy hearing later in the act.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20Through%20Death's%20Gate%20walkthrough"
  },
  {
    id: 110,
    type: "main",
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
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Hasongo%20Investigation%20walkthrough"
  },
  {
    id: 111,
    type: "side",
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
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Berath's%20Blessings%20walkthrough"
  },
  {
    id: 112,
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
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
    type: "side",
    game: "Baldur's Gate 3",
    act: 2,
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
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
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
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
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
    type: "side",
    game: "Baldur's Gate 3",
    act: 2,
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
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
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
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
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
  {
    id: 119,
    type: "side",
    game: "Elden Ring",
    region: "Limgrave",
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
    type: "side",
    game: "Elden Ring",
    region: "Liurnia",
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
    type: "side",
    game: "Elden Ring",
    region: "Leyndell & Altus",
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
    type: "side",
    game: "Elden Ring",
    region: "Limgrave",
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
    type: "side",
    game: "Elden Ring",
    region: "Limgrave",
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
    type: "side",
    game: "Elden Ring",
    region: "Leyndell & Altus",
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
  {
    id: 125,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Nibel",
    title: "Tifa's Piano Recital",
    location: "Various Regions",
    length: "medium",
    difficulty: "Low",
    reward: "Relationship points with Tifa, unique music",
    summary:
      "Find sheet music scattered across the world and practice piano pieces to perform for Tifa. A gentle side activity that deepens the bond between Cloud and Tifa through shared memories of Nibelheim.",
    aiTip:
      "The piano mini-game uses button prompts matching the melody — take your time and don't rush. Each piece you learn adds to the relationship score that affects the Gold Saucer date.",
    video: "https://www.youtube.com/watch?v=E_Any2rW-RE"
  },
  {
    id: 126,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    title: "Lifeline in Peril",
    location: "Grasslands / Kalm",
    length: "short",
    difficulty: "Low",
    reward: "Party EXP, Kalm community standing",
    summary:
      "Kalm's mako pipeline is failing and the mercenary hired to fix it needs backup. Gather repair materials across the Grasslands and escort Kyrie between damaged pipeline sections.",
    aiTip:
      "Grab three Rusted Sheet Metals and five Corroded Nails before meeting Kyrie — it skips a return trip. The Noxicaps at the final site are weak to Fire.",
    video: "https://www.youtube.com/watch?v=X3_hppsWl6A"
  },
  {
    id: 127,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Nibel",
    title: "My White-Haired Angel",
    location: "Nibel Region / Nibelheim",
    length: "medium",
    difficulty: "Low",
    reward: "Relationship points with Aerith, piano scene",
    summary:
      "Help a Nibelheim resident find Fluffy the missing cat, ending in one of the game's loveliest moments — Aerith performing her theme on the piano.",
    aiTip:
      "Practice the piano minigame beforehand; the quest's rendition of Aerith's Theme counts your performance. The cat likes quiet approaches.",
    video: "https://www.youtube.com/watch?v=6OXlfEXagSw"
  },
  {
    id: 128,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Junon",
    title: "Junon Parade Training",
    location: "Junon",
    length: "medium",
    difficulty: "Medium",
    reward: "Junon Region Intel, materia, access to parade events",
    summary:
      "Cloud must infiltrate the Shinra military parade in Junon by mastering parade drill movements. A memorable set piece blending rhythm-based mini-games with stealth as Cloud marches alongside actual Shinra soldiers.",
    aiTip:
      "Practice the marching rhythm in the training area before the actual parade. A perfect score unlocks bonus loot — watch the drill instructor closely for the correct sequence.",
    video: "https://www.youtube.com/watch?v=csddQ1EAQrg"
  },
  {
    id: 129,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    title: "Queen's Blood Champion",
    location: "Various / Gold Saucer",
    length: "long",
    difficulty: "High",
    reward: "Rare Queen's Blood cards, Champion title",
    summary:
      "Challenge and defeat every Queen's Blood card player across the world to become the undisputed champion. The card game deepens in complexity as you collect more powerful cards and face tougher opponents.",
    aiTip:
      "Build a deck around lane control early on. The toughest opponents use high-power single cards — counter with multi-lane spread strategies to deny their scoring zones.",
    video: "https://www.youtube.com/watch?v=08Vbxkzxbio"
  },
  {
    id: 130,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Junon",
    title: "When Words Won't Do",
    location: "Junon Region / Crow's Nest",
    length: "medium",
    difficulty: "Medium",
    reward: "Party EXP, Barret relationship, unlocks The Hardest Sell",
    summary:
      "Escort Rhonda's dog Salmon across the Junon region to deliver money to her son in Crow's Nest — a surprisingly heartfelt Barret-centric quest with real fights along the way.",
    aiTip:
      "Equip Aero materia before setting out: the Sandstorm Drakes guarding the final stretch are weak to Wind. Keep enemies off Salmon during escort fights.",
    video: "https://www.youtube.com/watch?v=33WEPH7F1sA"
  },
  {
    id: 131,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Junon",
    title: "The Hardest Sell",
    location: "Junon Region / Abandoned Lighthouse",
    length: "medium",
    difficulty: "Medium",
    reward: "Party EXP, White Mousse boss fight",
    summary:
      "Kyrie's advertising scheme at the abandoned lighthouse south of Crow's Nest attracts the wrong crowd. Clear waves of monsters and face the gelatinous White Mousse boss.",
    aiTip:
      "White Mousse shifts elemental weaknesses as it changes color — match your spells to its current hue. Requires completing When Words Won't Do first.",
    video: "https://www.youtube.com/watch?v=Fxnbkdc7fiA"
  },
  {
    id: 132,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Kerry Eurodyne's Questline",
    location: "Night City / Kerry's Villa",
    length: "long",
    difficulty: "Medium",
    reward: "Kerry romance, Davoud guitar, emotional payoff",
    summary:
      "Help legendary rocker Kerry Eurodyne reignite his passion for music and deal with corporate sabotage of his comeback tour. A feel-good questline with an optional romance and some of the best music in the game.",
    aiTip:
      "Male V only for the romance option. Exhaust all dialogue during band practice sessions — it unlocks additional quest steps and raises the affection meter.",
    video: "https://www.youtube.com/watch?v=TarX-C4vhik"
  },
  {
    id: 133,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "River Ward's Questline (I Forgive You)",
    location: "Night City / Badlands",
    length: "long",
    difficulty: "Medium",
    reward: "River romance, unique revolver, NCPD ally",
    summary:
      "Help detective River Ward track down his missing nephew Randy through a harrowing chain of events involving a serial killer, illegal braindances, and a derelict farm. One of the most emotionally impactful side quests in the game.",
    aiTip:
      "Female V only for the romance path. During the farm sequence, memorise the four sets of directions given — you must recall them precisely without notes to save Randy.",
    video: "https://www.youtube.com/watch?v=xX6auIAS1uU"
  },
  {
    id: 134,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Panam Palmer's Questline",
    location: "Badlands",
    length: "long",
    difficulty: "Medium",
    reward: "Panam romance, Aldecaldo family allies, secret ending",
    summary:
      "Build a relationship with nomad Panam Palmer as she rallies her clan against Militech and plans a massive heist. Her storyline is one of the most satisfying in the game and unlocks the secret Nomad ending.",
    aiTip:
      "Male V only for romance. Always side with Panam in disagreements. Completing her questline fully is required to access the Nomad ending, considered by many to be the best conclusion.",
    video: "https://www.youtube.com/playlist?list=PLU9RCp3FVNkSAPtWpgXD3NabQLTHTj-36"
  },
  {
    id: 135,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Dogtown",
    title: "Phantom Liberty – Somewhat Damaged",
    location: "Dogtown / Cynosure",
    length: "long",
    difficulty: "High",
    reward: "New Relic ending, Songbird resolution",
    summary:
      "The climactic mission of Phantom Liberty forces an impossible choice between saving Songbird or handing her over to the NUSA. The most morally complex decision in the expansion with two wildly different conclusions.",
    aiTip:
      "Save before this mission and experience both endings — they're dramatically different. The Songbird path unlocks a brand new fourth ending for the base game.",
    video: "https://www.youtube.com/watch?v=FjJaMeQ8wLE"
  },
  {
    id: 136,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Westbrook",
    title: "Violence",
    location: "Night City / Clouds",
    length: "medium",
    difficulty: "Low",
    reward: "Stairway to Heaven iconic weapon, XP",
    summary:
      "Help a mysterious braindance artist named Lizzy Wizzy who is struggling with grief and identity after having her entire body chrome-plated. A quiet, atmospheric quest that highlights the human cost of body modification.",
    aiTip:
      "This quest has no combat — it's purely dialogue and atmosphere. Take your time and engage fully with Lizzy's story for the best experience and the iconic weapon reward.",
    video: "https://www.youtube.com/watch?v=1YNkVrWNP0o"
  },
  {
    id: 137,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Riders on the Storm",
    location: "Badlands",
    length: "medium",
    difficulty: "High",
    reward: "Panam questline progression, Saul rescued",
    summary:
      "Race against a deadly Raffen Shiv sandstorm to rescue Panam's clan leader Saul from a nomad gang's camp. A time-pressured mission that tests both driving skills and combat ability under harsh weather conditions.",
    aiTip:
      "The storm hits a timer — don't explore, go straight to the objective. Inside the camp, stealth is possible but the storm outside forces combat on the way out.",
    video: "https://www.youtube.com/watch?v=82hrT1j_Fpc"
  },
  {
    id: 138,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "The Ballad of Buck Ravers",
    location: "Pacifica",
    length: "short",
    difficulty: "Low",
    reward: "Unique weapon, local lore, XP",
    summary:
      "Track down a legendary street musician in Pacifica whose music has taken on almost mythical status in Night City. A short but beautifully written quest about art, legacy, and how stories grow in the telling.",
    aiTip:
      "Explore Pacifica fully before triggering this — the area has some of the best environmental storytelling in the game. The quest reward is minor but the writing is exceptional.",
    video: "https://www.youtube.com/watch?v=Ea6mRQEyT7g"
  },
  {
    id: 139,
    type: "side",
    game: "Demon's Souls",
    region: "Boletaria",
    title: "Ostrava of Boletaria",
    location: "Boletarian Palace (1-1, 1-2, 1-3)",
    length: "long",
    difficulty: "High",
    reward: "Mausoleum Key, Rune Sword and Shield",
    summary:
      "Rescue the noble Ostrava repeatedly across three stages of Boletarian Palace. His questline ends in tragedy and rewards the key to the Mausoleum, which contains one of the game's most powerful weapon sets.",
    aiTip:
      "Rescue Ostrava every time you encounter him or he dies and the quest fails. Never invade him as a Black Phantom early — let the questline resolve naturally for the Mausoleum Key.",
    video: "https://www.youtube.com/watch?v=8-_55ap2Q5s"
  },
  {
    id: 140,
    type: "side",
    game: "Demon's Souls",
    region: "Latria",
    title: "Sage Freke's Rescue",
    location: "Tower of Latria (3-1)",
    length: "medium",
    difficulty: "High",
    reward: "Access to advanced sorcery spells, XP",
    summary:
      "Free the imprisoned sorcerer Sage Freke from the Tower of Latria. He becomes a spell vendor in the Nexus offering powerful magic unavailable elsewhere, making him essential for intelligence-build characters.",
    aiTip:
      "His cell key is held by the Mindflayer jailer on the second level. Clear surrounding enemies before grabbing the key — the jailers respawn and their paralysis can be lethal.",
    video: "https://www.youtube.com/watch?v=XyzirgD-YOY"
  },
  {
    id: 141,
    type: "side",
    game: "Demon's Souls",
    region: "The Nexus",
    title: "Stockpile Thomas",
    location: "The Nexus",
    length: "short",
    difficulty: "Low",
    reward: "Item storage, merchant services, NPC lore",
    summary:
      "Meet Stockpile Thomas in the Nexus, a kind-hearted man searching for his family. He provides the invaluable service of storing excess items and unlocking later in his questline reveals a heartbreaking backstory.",
    aiTip:
      "Always use Thomas to store excess items — inventory management is critical in Demon's Souls. Talk to him after major boss kills to unlock new dialogue about his family.",
    video: "https://www.youtube.com/results?search_query=Demon's%20Souls%20Stockpile%20Thomas%20walkthrough"
  },
  {
    id: 142,
    type: "main",
    game: "Demon's Souls",
    region: "Stonefang",
    title: "Dragon God's Weakness",
    location: "Stonefang Tunnel (2-3)",
    length: "short",
    difficulty: "Medium",
    reward: "Dragon Demon's Soul, Pure Dragonstone access",
    summary:
      "Defeat the Dragon God by using ballista traps in the arena rather than direct combat. One of the most creative boss fights in the game, requiring observation and patience rather than combat skill.",
    aiTip:
      "The Dragon God is effectively invincible to direct attacks early in the fight. Use the environment — activate the two ballista traps in sequence while avoiding its gaze to stun it for the kill.",
    video: "https://www.youtube.com/watch?v=wFBFbLHL8CQ"
  },
  {
    id: 143,
    type: "main",
    game: "Demon's Souls",
    region: "Latria",
    title: "The Old Monk's Trial",
    location: "Tower of Latria (3-3)",
    length: "short",
    difficulty: "High",
    reward: "Monk's Head Collar, Old Monk's Soul",
    summary:
      "Face the Old Monk boss who summons a real player to fight as the final encounter — a groundbreaking mechanic for its time. If no player is available, a Black Phantom NPC takes their place.",
    aiTip:
      "Prepare for a human opponent — they can use any build and will exploit your weaknesses. Keep a Fire Spray or Soul Ray ready as a ranged punish option.",
    video: "https://www.youtube.com/watch?v=GpKMwv2AU1w"
  },
  {
    id: 144,
    type: "main",
    game: "Demon's Souls",
    region: "Valley of Defilement",
    title: "Maiden Astraea's Mercy",
    location: "Valley of Defilement (5-3)",
    length: "medium",
    difficulty: "Medium",
    reward: "Pureblood Demon's Soul, Sword of Searching",
    summary:
      "Confront Maiden Astraea, a saint who descended into the Valley of Defilement to care for the suffering. She and her guardian Garl Vinland present one of the most emotionally devastating boss encounters in FromSoftware history.",
    aiTip:
      "You can kill Garl Vinland first to make Astraea vulnerable, or you can talk to Astraea and she will take her own life. Neither method feels like a victory — that's the point.",
    video: "https://www.youtube.com/watch?v=k2chOJD9DoI"
  },
  {
    id: 145,
    type: "side",
    game: "Demon's Souls",
    region: "Latria",
    title: "Yurt, the Silent Chief",
    location: "Tower of Latria (3-2) / The Nexus",
    length: "medium",
    difficulty: "Medium",
    reward: "Gloom Set, NPC fates",
    summary:
      "Decide the fate of the caged assassin Yurt in the Tower of Latria. Free him and he relocates to the Nexus, murdering a named NPC each time you slay an archdemon; cut him down there instead to claim the Gloom Set. His killings serve his accomplice Mephistopheles.",
    aiTip:
      "Freeing Yurt is a trap — to keep the Nexus vendors and questline NPCs alive, kill him on sight once he appears. His victims can otherwise only be 'avenged' by taking Mephistopheles' contracts at Pure Black tendency.",
    video: "https://www.youtube.com/results?search_query=Demon's%20Souls%20Yurt%20the%20Silent%20Chief%20questline%20walkthrough"
  },
  {
    id: 146,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "The Elf, the Nab-Sack, and the Loom",
    location: "Hogsmeade / Vivarium",
    length: "medium",
    difficulty: "Low",
    reward: "Nab-Sack, Room of Requirement Vivarium, beast rescuing",
    summary:
      "Befriend Deek the house elf and unlock the ability to rescue magical beasts using a Nab-Sack. This quest opens the Vivarium in the Room of Requirement where you can care for animals and harvest upgrade materials.",
    aiTip:
      "Complete this early — beast materials are used to upgrade gear throughout the game. The Vivarium becomes a key resource hub, so setting it up promptly pays off.",
    video: "https://www.youtube.com/watch?v=QJZOywqytyM"
  },
  {
    id: 147,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Charles Rookwood's Trial",
    location: "Rookwood Castle",
    length: "medium",
    difficulty: "Medium",
    reward: "Ancient Magic Throw ability, ancient magic meter increase",
    summary:
      "Complete a magical trial hidden within Rookwood Castle to master Ancient Magic Throw. The dungeon tests your understanding of the combat system through carefully designed puzzle-combat rooms.",
    aiTip:
      "Ancient Magic Throw lets you hurl enemy projectiles and environmental objects back at foes — it fundamentally changes combat. Learn the timing in the trial rooms before using it against tough enemies.",
    video: "https://www.youtube.com/watch?v=0e1tDb6CnXg"
  },
  {
    id: 148,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Poached Egg (Poppy)",
    location: "Hogsmeade / Highlands",
    length: "medium",
    difficulty: "Medium",
    reward: "Poppy Sweeting relationship progression",
    summary:
      "Begin Poppy Sweeting's companion questline by helping her rescue a poached beast egg and return it safely to its mother.",
    aiTip:
      "The opener of Poppy's arc — clears the way for The Poacher's House Call, Surprise Meeting, The Centaur and the Stone, and It's in the Stars.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Poached%20Egg%20Poppy%20walkthrough"
  },
  {
    id: 149,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "The Lost Astrolabe",
    location: "Black Lake Shore",
    length: "short",
    difficulty: "Low",
    reward: "Gil's boat use, exploration access, XP",
    summary:
      "Help a fisherman named Gil recover his stolen astrolabe from nesting diricawl birds near the Black Lake. A brief quest that teaches creature interaction mechanics and opens up boat travel along the lake.",
    aiTip:
      "Use Accio to retrieve the astrolabe from the nest rather than disturbing the birds directly. Completing this unlocks Gil's boat, which provides a faster travel route along the lakeshore.",
    video: "https://www.youtube.com/watch?v=dQEkASZR7CY"
  },
  {
    id: 150,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "Solved by the Bell",
    location: "Clagmar Castle",
    length: "medium",
    difficulty: "Medium",
    reward: "Music box puzzle treasure, rare equipment",
    summary:
      "Follow a set of clues involving a musical puzzle to unlock a secret treasure hidden within Clagmar Castle. The puzzle requires you to play specific musical notes in sequence using bells scattered around the area.",
    aiTip:
      "Write down the note sequence from the music box before approaching the bells — there's no in-game record of it. The sequence is fixed, not randomised.",
    video: "https://www.youtube.com/watch?v=fftOxQH9tAE"
  },
  {
    id: 151,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "Flying off the Shelves",
    location: "Hogsmeade",
    length: "short",
    difficulty: "Low",
    reward: "Wingardium Leviosa spell, early game utility",
    summary:
      "Help the owner of Tomes and Scrolls recover books that have flown off the shelves using a levitation charm. This short quest teaches Wingardium Leviosa, an essential spell for environmental puzzles throughout the game.",
    aiTip:
      "Wingardium Leviosa is used constantly for puzzles and combat. Unlock it early and experiment with levitating different objects in the environment — some hide secrets.",
    video: "https://www.youtube.com/watch?v=X_3qK9gvHoY"
  },
  {
    id: 152,
    type: "side",
    category: "Challenges",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Astronomy Table Challenges",
    location: "Various Locations",
    length: "long",
    difficulty: "Low",
    reward: "Cosmetic gear sets, unique outfit unlocks",
    summary:
      "Locate and complete all astronomy table challenges scattered across the Hogwarts grounds and surrounding region. Each challenge requires visiting a specific location at the right time and completing a star-charting mini-game.",
    aiTip:
      "Astronomy tables can only be used at night — use the wait mechanic if it's daytime. Completing all tables in a region unlocks a unique cosmetic set not available elsewhere.",
    video: "https://www.youtube.com/watch?v=pK3OUx9tNNE"
  },
  {
    id: 153,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower: Hulkenberg's Resolve",
    location: "Various / Story Chapters",
    length: "long",
    difficulty: "Medium",
    reward: "Hulkenberg Confidant progression, Knight Archetype upgrades",
    summary:
      "Deepen your bond with Hulkenberg, the stoic knight who joins your party early. Her questline explores duty, personal sacrifice, and what it means to serve a cause you believe in — one of the most grounded stories in the game.",
    aiTip:
      "Choose dialogue options that respect her sense of duty rather than challenging it. Her later Archetype upgrades dramatically improve physical combat for the whole party.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%3A%20Hulkenberg's%20Resolve%20walkthrough"
  },
  {
    id: 154,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "The Gauntlet Runner Races",
    location: "Gauntlet Runner / Travel Routes",
    length: "medium",
    difficulty: "Medium",
    reward: "Unique accessories, crafting materials, downtime activities",
    summary:
      "Compete in races and challenges aboard the Gauntlet Runner between locations. These optional events reward rare accessories and provide a break from dungeon crawling while developing the world's culture.",
    aiTip:
      "Upgrade the Gauntlet Runner's speed stats when possible — faster travel reduces time costs and unlocks harder race tiers. The top tier races reward some of the best accessories in the game.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20The%20Gauntlet%20Runner%20Races%20walkthrough"
  },
  {
    id: 155,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower: Strohl's Rage",
    location: "Various / Story Chapters",
    length: "long",
    difficulty: "Medium",
    reward: "Strohl Confidant progression, Warrior Archetype upgrades",
    summary:
      "Follow Strohl's journey as he wrestles with his volatile nature and a painful past. His questline explores themes of anger, identity, and self-mastery, leading to powerful Archetype evolutions.",
    aiTip:
      "Support Strohl without being dismissive of his anger — he responds best to dialogue that acknowledges his feelings. His Archetype evolutions make him one of the strongest physical attackers.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%3A%20Strohl's%20Rage%20walkthrough"
  },
  {
    id: 156,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Akademeia's Lost Archives",
    location: "Grand Trad / Akademeia",
    length: "medium",
    difficulty: "Low",
    reward: "Rare spellbooks, lore insight, Archetype points",
    summary:
      "Assist scholars at the prestigious Akademeia institute in recovering stolen research documents. The quest provides significant lore about the Archetype system and rewards rare materials for upgrading your party's magical abilities.",
    aiTip:
      "Bring a party member with high Wisdom for the dialogue checks in this quest. The spellbook rewards are especially valuable for magic-focused builds.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Akademeia's%20Lost%20Archives%20walkthrough"
  },
  {
    id: 157,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "The Royal Election Debates",
    location: "Grand Trad Arena / Various",
    length: "long",
    difficulty: "Medium",
    reward: "Popularity growth, new followers, election story progression",
    summary:
      "Participate in public debates against rival candidates vying for the throne. Each debate requires choosing the right responses to sway public opinion — a unique mix of social simulation and political strategy.",
    aiTip:
      "Research each rival's platform before the debate — their weaknesses are telegraphed in NPC conversations beforehand. High Eloquence makes debate options more persuasive.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20The%20Royal%20Election%20Debates%20walkthrough"
  },
  {
    id: 158,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "The Ancient Ruin Expedition",
    location: "Faraway Ruins",
    length: "long",
    difficulty: "High",
    reward: "Unique Archetype unlock, powerful equipment",
    summary:
      "Venture into a dangerous pre-civilization ruin that predates even the Euchronian Kingdom. The dungeon contains enemies resistant to conventional magic and rewards careful party composition and elemental strategy.",
    aiTip:
      "The enemies here require specific elemental counters — scout them with a high-Wisdom party member before committing to attacks. The Archetype unlock at the end is worth every challenge.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20The%20Ancient%20Ruin%20Expedition%20walkthrough"
  },
  {
    id: 159,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "Freya's Missing Peace",
    location: "Vanaheim",
    length: "medium",
    difficulty: "Medium",
    reward: "Sigrun's Curse shield attachment, Freya companion upgrade",
    summary:
      "Help Freya reconnect with her homeland Vanaheim and begin healing from her traumatic past with Odin. A quieter quest focused on character development that deepens Freya's arc beyond her role as a combat companion.",
    aiTip:
      "Exhaust all dialogue options during the quiet moments — Freya's backstory is delivered through these scenes. Completing her personal quests unlocks combat dialogue upgrades.",
    video: "https://www.youtube.com/watch?v=LkmFAuvkxVQ"
  },
  {
    id: 160,
    type: "side",
    game: "God of War Ragnarök",
    region: "Alfheim",
    title: "In Plain Sight",
    location: "Midgard",
    length: "short",
    difficulty: "Low",
    reward: "Muspelheim Seed piece, unique armour enchantment",
    summary:
      "Investigate a series of strange occurrences in Midgard that seem connected to hidden Asgardian activity. A short favour chain that rewards exploration and environmental observation.",
    aiTip:
      "Use Atreus's ability to read rune inscriptions throughout the area — they point to hidden compartments. The Muspelheim Seed piece is crucial for unlocking endgame challenge content.",
    video: "https://www.youtube.com/watch?v=w7nx2a8ocmg"
  },
  {
    id: 161,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "The Raven Tree",
    location: "Niflheim",
    length: "long",
    difficulty: "High",
    reward: "Odin's Ravens rewards, unique armour and enchantments",
    summary:
      "Track down all 48 of Odin's Ravens hidden across the Nine Realms and return to the Raven Tree in Niflheim for escalating rewards. The ravens glow green and emit a distinct sound — but some are hidden in very obscure locations.",
    aiTip:
      "Use the map to track which realms have ravens remaining. Some ravens are only accessible after completing story missions that open new areas. The final reward set is among the best armour in the game.",
    video: "https://www.youtube.com/watch?v=7BgCbCDpm6c"
  },
  {
    id: 162,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Atreus's Search",
    location: "Various Realms",
    length: "long",
    difficulty: "Medium",
    reward: "Lore, Atreus story resolution, unique companion dialogue",
    summary:
      "Follow Atreus's personal quest to understand his Giant heritage and his role in Ragnarök. Played from Atreus's perspective in key sections, this questline provides crucial context for the game's ending.",
    aiTip:
      "The Atreus sections play differently from Kratos — focus on stealth and puzzle-solving rather than direct combat. His sections contain some of the best environmental storytelling in the game.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Atreus's%20Search%20walkthrough"
  },
  {
    id: 163,
    type: "side",
    game: "God of War Ragnarök",
    region: "Muspelheim",
    title: "The Crucible",
    location: "Muspelheim",
    length: "long",
    difficulty: "High",
    reward: "Chaos Flames, Muspelheim armour set materials",
    summary:
      "Complete a series of escalating combat challenges in the fiery realm of Muspelheim to earn Chaos Flames for upgrading the Blades of Chaos. Six initial trials lead to harder Surtr's Crucible challenges for the best rewards.",
    aiTip:
      "Complete the six initial trials before attempting Surtr's Crucible. Lunda's Poison armour works exceptionally well here — poison on parry shreds through the challenge health gates.",
    video: "https://www.youtube.com/watch?v=YnnRcfIMHNA"
  },
  {
    id: 164,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Mimir's Knowledge",
    location: "Various Realms",
    length: "medium",
    difficulty: "Low",
    reward: "Lore collectibles, world-building, XP",
    summary:
      "Collect Lore Markers and listen to Mimir's stories about Norse mythology throughout the Nine Realms. His narration provides rich context for the world's history and makes exploration feel purposeful.",
    aiTip:
      "Never skip Mimir's commentary — it's some of the best writing in the game. Many lore items are hidden off the main path in areas that look like dead ends.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Mimir's%20Knowledge%20walkthrough"
  },
  {
    id: 165,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "Sigrun's Curse",
    location: "Midgard",
    length: "medium",
    difficulty: "High",
    reward: "Rond of Purification, Valkyrie armour upgrade materials",
    summary:
      "Investigate a curse affecting the Valkyries that has left them trapped between worlds. The quest chain leads to several powerful Valkyrie mini-bosses and uncovers the connection between Odin's manipulation and their imprisonment.",
    aiTip:
      "Each Valkyrie has unique attack patterns — observe before committing to aggression. Shield parry timing is critical; learn to deflect their wing attacks for free damage windows.",
    video: "https://www.youtube.com/watch?v=JmBTiG6pCfk"
  },
  {
    id: 166,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=YdyzsLtsYjQ"
  },
  {
    id: 167,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=SXZonGHQLRg"
  },
  {
    id: 168,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=k1nuRJWfJFY"
  },
  {
    id: 170,
    type: "side",
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
    id: 173,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "The Six Blades of Kojiro",
    location: "Iki Island / Toyotama",
    length: "long",
    difficulty: "High",
    reward: "Kensei Armour set, Ghost Stance upgrade",
    summary:
      "Hunt down six legendary swordsmen — the surviving members of the Straw Hat Ronin gang — across Tsushima. Each duel is a unique challenge that tests a different aspect of your sword mastery.",
    aiTip:
      "Face the six blades in order of difficulty — the final duel with Kojiro himself is one of the hardest fights in the base game. The Kensei Armor enhances Ghost Stance, making this questline doubly rewarding.",
    video: "https://www.youtube.com/watch?v=LfHsYzm3Zp4"
  },
  {
    id: 174,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "The Unbreakable Gosaku",
    location: "Toyotama Region",
    length: "medium",
    difficulty: "Medium",
    reward: "Gosaku's Armour upgrade materials, Samurai lore",
    summary:
      "Follow the legend of Gosaku the farmer-warrior and uncover hidden shrines that reveal his story. The tale of a common man who stood against overwhelming odds mirrors Jin's own struggle and adds weight to the Gosaku Armor questline.",
    aiTip:
      "The shrines are well-hidden — use Guiding Wind frequently. Reading Gosaku's story in full provides buffs at each shrine that make the final farmstead liberations slightly easier.",
    video: "https://www.youtube.com/watch?v=bWe2G16Hsks"
  },
  {
    id: 175,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "Norio's Devotion",
    location: "Toyotama / Kamiagata",
    length: "long",
    difficulty: "Medium",
    reward: "Norio companion quest complete, unique dye, Legend increase",
    summary:
      "Accompany the warrior monk Norio as he tracks down the Mongol commander responsible for destroying his temple and killing his brother. A quest about faith, vengeance, and whether peace of mind can be found through violence.",
    aiTip:
      "Complete all three of Norio's companion missions in sequence. The final confrontation has a meaningful choice — both options have emotional weight depending on your interpretation of Norio's journey.",
    video: "https://www.youtube.com/watch?v=NFIy0-yiTg4"
  },
  {
    id: 176,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "A Reckoning in Blood",
    location: "Kamiagata",
    length: "medium",
    difficulty: "High",
    reward: "Sakai Clan Armor upgrade, massive Legend increase",
    summary:
      "Confront the Mongol general Dokhoi who committed atrocities against the people of Kamiagata. A large-scale assault requiring stealth infiltration followed by intense open combat as Jin's legend reaches its peak.",
    aiTip:
      "Scout the encampment fully before engaging — use the Ghost stance to eliminate key targets early. The general himself fights with two weapons simultaneously; watch for the stance changes.",
    video: "https://www.youtube.com/watch?v=F2duQ_Yt3zk"
  },
  {
    id: 177,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "The Tournament of Kenjutsu",
    location: "Iki Island (Director's Cut)",
    length: "long",
    difficulty: "High",
    reward: "Iki Island armor set, duelling techniques",
    summary:
      "Enter a prestigious sword tournament on Iki Island and face increasingly skilled opponents from across the region. Each round reveals more about Iki Island's culture and Jin's complicated connection to the island.",
    aiTip:
      "Tournament opponents each use a specific fighting style — switch stances between rounds. The final opponent counters aggression; use reactive parry strategies.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Tournament%20of%20Kenjutsu%20walkthrough"
  },
  {
    id: 178,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Yuna's Pursuit",
    location: "Izuhara / Toyotama",
    length: "long",
    difficulty: "Medium",
    reward: "Yuna companion quest complete, unique Ghost armor dye",
    summary:
      "Help Yuna track down her brother Taka and the Mongols who are exploiting Tsushima's civilians. Her companion quest adds important context to the dynamic between the samurai code and Jin's evolution into the Ghost.",
    aiTip:
      "Side with Yuna in disagreements — her practical approach reflects the Ghost philosophy. Completing all her quests before the end of Act 2 provides the best emotional payoff.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Yuna's%20Pursuit%20walkthrough"
  },
  {
    id: 179,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Daunt",
    title: "The Daunt Errands",
    location: "The Daunt",
    length: "short",
    difficulty: "Low",
    reward: "Resources, XP, faction reputation",
    summary:
      "Complete a series of errands for the Oseram settlers establishing themselves in The Daunt. These quick tasks introduce Horizon's errand system and teach combat and exploration mechanics in a safe opening environment.",
    aiTip:
      "Complete errands before moving on — the resources and XP accumulate quickly and the skills unlocked through level-ups make Horizon's early combat significantly easier.",
    video: "https://www.youtube.com/playlist?list=PLNVZ0VbA46mqXmXe_XscAEyZUCEHJpemQ"
  },
  {
    id: 180,
    type: "main",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "The Broken Sky",
    location: "Sheerside Mountains",
    length: "long",
    difficulty: "High",
    reward: "4 Skill Points, Grimhorn machine override, 6000 XP",
    summary:
      "Investigate a Cauldron in the Sheerside Mountains that has been producing corrupted machines. Navigating the facility requires solving power puzzles while fending off aggressive Apex-class machines.",
    aiTip:
      "Bring Frost weapons for the Apex Shellwalker guarding the core. Override the Grimhorn after completing the Cauldron — it becomes a powerful battle mount for fighting other machines.",
    video: "https://www.youtube.com/watch?v=pFEhMNlfCA0"
  },
  {
    id: 181,
    type: "side",
    game: "Horizon Forbidden West",
    region: "Sacred Lands",
    title: "The Distant Lands",
    location: "No Man's Land / Utaru Territory",
    length: "medium",
    difficulty: "Medium",
    reward: "Utaru Seed-Caller armour, 3 Skill Points, 5500 XP",
    summary:
      "Travel beyond Tenakth borders to the dying Utaru tribe's homeland, where the Plague is ravaging crops and people. Aloy must navigate Utaru customs and traditions to earn their trust and access vital information.",
    aiTip:
      "Use Concentration during the ritual portions of this quest — the pacing is slow but skipping dialogue misses critical worldbuilding. The Utaru armor provides useful stealth bonuses.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20The%20Distant%20Lands%20walkthrough"
  },
  {
    id: 182,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "The Old Varl's Refuge",
    location: "Legacy's Landfall",
    length: "short",
    difficulty: "Low",
    reward: "Oseram Flameworks weapon, 2 Skill Points, 3500 XP",
    summary:
      "Help a group of elderly Nora refugees who have settled in the ruins of an old Vantage Point and are being harassed by scavengers. A short but touching quest about community and resilience in a collapsed world.",
    aiTip:
      "The scavengers scale to your level — overpower them with elemental traps placed before starting the fight. The Oseram Flameworks bow is excellent for fire builds.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20The%20Old%20Varl's%20Refuge%20walkthrough"
  },
  {
    id: 183,
    type: "main",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Faro's Tomb",
    location: "San Francisco Ruins",
    length: "long",
    difficulty: "High",
    reward: "Faro's Spear weapon, 3 Skill Points, 7000 XP",
    summary:
      "Explore the sealed tomb of Ted Faro, the man responsible for the extinction of the Old World. The dungeon confronts Aloy with the full horror of HEPHAESTUS's legacy and rewards a powerful endgame spear.",
    aiTip:
      "This dungeon involves extensive puzzle sections with light-based locks. Bring the Pullcaster tool — you'll need it constantly. The lore here directly connects to the Horizon Zero Dawn backstory.",
    video: "https://www.youtube.com/watch?v=cA_I3lOQmvA"
  },
  {
    id: 184,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Daunt",
    title: "The Bristlebacks",
    location: "Plainsong, Utaru Territory",
    length: "medium",
    difficulty: "Medium",
    reward: "Bristleback mount override, 2 Skill Points, 4000 XP",
    summary:
      "Investigate a herd of corrupted Bristleback machines terrorising the Utaru farming communities. Clearing the corruption and overriding a Bristleback provides a fast travel mount usable across open terrain.",
    aiTip:
      "Freeze the Bristlebacks before overriding — their charge attacks make approaching dangerous. The Bristleback mount is faster than running across flat terrain and useful for map traversal.",
    video: "https://www.youtube.com/watch?v=7JVGDFq0bw8"
  },
  {
    id: 185,
    type: "main",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "The Dying Lands",
    location: "Thornmarsh",
    length: "long",
    difficulty: "High",
    reward: "3 Skill Points, Clawstrider override, 6500 XP",
    summary:
      "Investigate the mysterious blight killing the swamp ecosystem in Thornmarsh and confront the Apex Clawstrider pack responsible. A multi-stage quest that demonstrates Horizon's approach to environmental storytelling.",
    aiTip:
      "Clawstriders are agile and attack in coordinated packs. Use Ropecaster to pin one down while dealing with the others. Overriding the Apex after the fight gives you the strongest Clawstrider mount.",
    video: "https://www.youtube.com/watch?v=goI8MktOdhM"
  },
  {
    id: 186,
    type: "side",
    game: "Pillars of Eternity",
    region: "Twin Elms",
    title: "Lord of a Barren Land",
    location: "Esternwood, Act 2",
    length: "medium",
    difficulty: "High",
    reward: "Stronghold influence, rare equipment, XP",
    summary:
      "Confront a group of bandits who have taken up residence near the Watcher's stronghold and are terrorising the local farmsteads. The quest escalates into a larger conflict involving a deposed noble seeking to reclaim his land.",
    aiTip:
      "Negotiate first — the noble's demands can be met diplomatically, avoiding a difficult multi-wave battle. Choosing the right outcome improves your Stronghold's relationship with local settlers.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20Lord%20of%20a%20Barren%20Land%20walkthrough"
  },
  {
    id: 187,
    type: "side",
    game: "Pillars of Eternity",
    region: "Defiance Bay",
    title: "The Parable of Wael",
    location: "Copperlane, Defiance Bay",
    length: "medium",
    difficulty: "Low",
    reward: "Wael faction reputation, unique grimoire, cipher spells",
    summary:
      "Recover a stolen holy text belonging to followers of Wael, the god of secrets and mysteries. The quest has multiple solutions and explores the game's theme of truth versus comfortable deception.",
    aiTip:
      "The 'best' outcome is hidden behind skill checks — Lore and Insight help here. Reading the text before deciding what to do with it changes available dialogue options.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20The%20Parable%20of%20Wael%20walkthrough"
  },
  {
    id: 188,
    type: "side",
    game: "Pillars of Eternity",
    region: "Gilded Vale",
    title: "Brave Derrin",
    location: "Dyrford Village",
    length: "short",
    difficulty: "Low",
    reward: "Gold, reputation, child's gratitude",
    summary:
      "A young boy in Dyrford Village is missing, and the adults seem unwilling to search properly. A brief but touching quest that demonstrates the game's commitment to portraying ordinary lives amid extraordinary events.",
    aiTip:
      "This is one of the shortest quests in the game — complete it early in your Dyrford visit. The reward is minor but the dialogue with the child adds unexpected emotional depth.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20Brave%20Derrin%20walkthrough"
  },
  {
    id: 189,
    type: "side",
    game: "Pillars of Eternity",
    region: "Gilded Vale",
    title: "The Nest Egg",
    location: "Elmshore",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, rare ingredients, XP",
    summary:
      "Retrieve a valuable egg stolen from a merchant by bandits hiding in Elmshore's dangerous wilderness. A simple fetch quest elevated by the beautiful environment and the option to deal with the bandits through negotiation or combat.",
    aiTip:
      "The bandit camp has a hard encounter if you fight. A high-Intimidate character can convince them to hand over the egg without a fight. The Elmshore area itself contains several rare crafting ingredients worth looting.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20The%20Nest%20Egg%20walkthrough"
  },
  {
    id: 190,
    type: "side",
    game: "Pillars of Eternity",
    region: "Dyrford",
    title: "A Mother's Plea",
    location: "Defiance Bay / Copperlane",
    length: "medium",
    difficulty: "Medium",
    reward: "Gold, faction reputation, emotional resolution",
    summary:
      "A desperate mother begs the Watcher to help find her missing son who has become entangled with a criminal gang in Defiance Bay. The investigation reveals the city's dark underworld and forces a moral choice about redemption.",
    aiTip:
      "Complete the investigation before confronting anyone — partial information leads to a worse outcome. Your choice at the end affects Copperlane faction reputation.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20A%20Mother's%20Plea%20walkthrough"
  },
  {
    id: 191,
    type: "side",
    game: "Pillars of Eternity",
    region: "Defiance Bay",
    title: "Burning Bridges",
    location: "Ondra's Gift, Defiance Bay",
    length: "medium",
    difficulty: "High",
    reward: "Faction alliance, unique armour, safe passage",
    summary:
      "Navigate a gang war brewing in Ondra's Gift between the Doemenel family and a rival faction. Your choice of allegiance shapes the balance of power in Defiance Bay's criminal underworld for the rest of Act 2.",
    aiTip:
      "Back up your chosen faction fully before the confrontation — half-measures result in a difficult three-way battle. The Doemenels offer the best equipment reward if you side with them.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20Burning%20Bridges%20walkthrough"
  },
  {
    id: 192,
    type: "main",
    game: "Pillars of Eternity",
    region: "Defiance Bay",
    title: "Never Far from the Queen",
    location: "Copperlane / Twin Elms",
    length: "long",
    difficulty: "High",
    reward: "Twin Elms access, Act 3 progression, faction reputation",
    summary:
      "Unravel the mystery of a missing Glanfathan noble in Defiance Bay whose disappearance has diplomatic implications. The investigation stretches from Copperlane's streets to the sacred elven city of Twin Elms.",
    aiTip:
      "This quest is required to access Twin Elms and Act 3. Don't rush it — the political consequences of your choices here echo through the game's final act.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20Never%20Far%20from%20the%20Queen%20walkthrough"
  },
  {
    id: 193,
    type: "side",
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
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Fruitful%20Alliance%20walkthrough"
  },
  {
    id: 194,
    type: "side",
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
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20The%20Rite%20of%20Passage%20walkthrough"
  },
  {
    id: 195,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=V3GbGyej3JQ"
  },
  {
    id: 196,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=dWWWCSiZXuo"
  },
  {
    id: 197,
    type: "side",
    game: "Pillars of Eternity II: Deadfire",
    title: "Companion: Xoti — The Lantern of Gaun",
    location: "Various Islands",
    length: "long",
    difficulty: "Medium",
    reward: "Xoti Confidant completion, Harvest and Hunt ability upgrades",
    summary:
      "Travel with the monk-priestess Xoti as she struggles with the weight of souls she has harvested in her lantern. Her questline explores religious devotion, trauma, and the burden of a divine calling across multiple islands.",
    aiTip:
      "Xoti's alignment shifts based on your choices — support her religious doubts or reinforce her faith depending on which ending you prefer. Her combat abilities scale significantly with Confidant completion.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Companion%3A%20Xoti%20%E2%80%94%20The%20Lantern%20of%20Gaun%20walkthrough"
  },
  {
    id: 198,
    type: "side",
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
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20The%20City%20Lost%20to%20Time%20walkthrough"
  },
  {
    id: 199,
    type: "side",
    game: "Pillars of Eternity II: Deadfire",
    title: "Companion: Pallegina — The Man of Chimes",
    location: "Various / Vailian Republics Quests",
    length: "long",
    difficulty: "Medium",
    reward: "Pallegina abilities upgraded, Vailian faction standing",
    summary:
      "Help Pallegina the godlike soldier navigate her complicated loyalty to the Vailian Trading Company while staying true to her own moral compass. Her questline adds nuance to the game's faction conflicts and her own identity struggle.",
    aiTip:
      "Support Pallegina when her orders conflict with her values — it builds the most meaningful character arc. Her combat abilities improve significantly with each Confidant milestone.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Companion%3A%20Pallegina%20%E2%80%94%20The%20Man%20of%20Chimes%20walkthrough"
  },
  {
    id: 200,
    type: "main",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Escape the Nautiloid",
    location: "Nautiloid / Prologue",
    length: "short",
    difficulty: "Low",
    reward: "First companions, story setup, tadpole introduction",
    summary:
      "The explosive opening of the game. Wake aboard a mind flayer ship under attack, recruit your first companions, and fight to the helm before the ship crashes.",
    aiTip:
      "Loot everything and free Shadowheart from her pod before reaching the helm — you can recruit her immediately and she carries a key story item.",
    video: "https://www.youtube.com/watch?v=PAv1X-MfIWQ"
  },
  {
    id: 201,
    type: "main",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Defeat Ketheric Thorm",
    location: "Moonrise Towers",
    length: "long",
    difficulty: "High",
    reward: "Act 2 finale, Netherstone, major story progression",
    summary:
      "The climactic multi-phase battle of Act 2. Assault Moonrise Towers, chase Ketheric into the Mind Flayer colony below, and face the Apostle of Myrkul.",
    aiTip:
      "Use the Restoration Pod near the final elevator to fully heal, and free Dame Aylin from her Soul Cage first — Ketheric is nearly invulnerable until you do.",
    video: "https://www.youtube.com/watch?v=0mvmj0OLKII"
  },
  {
    id: 202,
    type: "side",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Save Mayrina",
    location: "Sunlit Wetlands / Riverside Teahouse",
    length: "medium",
    difficulty: "Medium",
    reward: "Unique wand, hag rewards or bargains, story consequences",
    summary:
      "Confront Auntie Ethel the hag in her twisted lair beneath the teahouse to rescue the pregnant Mayrina. Full of illusions, moral traps, and one of Act 1's most memorable villains.",
    aiTip:
      "Ethel burns Mayrina's cage during the fight — douse it fast with water. Wearing the Whispering Mask in the lair is tempting but risky; remove it before the fight.",
    video: "https://www.youtube.com/watch?v=5n4PJyVc5ow"
  },
  {
    id: 203,
    type: "main",
    game: "Elden Ring",
    region: "Caelid",
    title: "Defeat Starscourge Radahn",
    location: "Redmane Castle / Caelid",
    length: "medium",
    difficulty: "High",
    reward: "Remembrance of the Starscourge, Great Rune, unlocks Nokron",
    summary:
      "Trigger the Radahn Festival at Redmane Castle and face the mightiest demigod on a massive battlefield where you can summon a small army of NPC allies.",
    aiTip:
      "Resummon fallen NPC allies constantly — they respawn via summon signs around the arena. Torrent is available, so use hit-and-run tactics during the meteor phase.",
    video: "https://www.youtube.com/watch?v=eM5U791Oof0"
  },
  {
    id: 204,
    type: "side",
    game: "Elden Ring",
    region: "Liurnia",
    title: "Sorceress Sellen's Questline",
    location: "Waypoint Ruins, Sellia, Raya Lucaria",
    length: "long",
    difficulty: "Medium",
    reward: "Legendary sorceries (Comet Azur, Stars of Ruin), Witch's Glintstone Crown",
    summary:
      "Aid the outlawed sorceress Sellen in her forbidden pursuit of the primeval current. The quest spans hidden bodies, secret puzzle walls, and ends in a choice between Sellen and Witch-Hunter Jerren.",
    aiTip:
      "The quest has easy-to-miss steps gated behind defeating Radahn and Rennala. Look for the illusory wall in Sellia's cellar — it hides her true body.",
    video: "https://www.youtube.com/watch?v=gjtKLzNi8cs"
  },
  {
    id: 205,
    type: "side",
    game: "Elden Ring",
    region: "Limgrave",
    title: "Boc the Seamster's Questline",
    location: "Limgrave to Altus Plateau",
    length: "medium",
    difficulty: "Low",
    reward: "Free garment alterations, gold sewing tools, emotional payoff",
    summary:
      "A humble talking bush in Limgrave turns out to be Boc, a demi-human seamster searching for purpose. Follow him across the Lands Between as he seeks to prove his worth.",
    aiTip:
      "Talk to the bush near Agheel Lake to start. Give him a Larval Tear only if you want the sad ending — telling him he's beautiful with the Mimic's Veil keeps him alive.",
    video: "https://www.youtube.com/watch?v=YJGX2u-96ho"
  },
  {
    id: 206,
    type: "main",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Rescue the Druid Halsin",
    location: "Emerald Grove / Goblin Camp",
    length: "medium",
    difficulty: "Medium",
    reward: "Halsin as ally, path to lifting the Shadow Curse",
    summary:
      "Act 1's central quest. Track the missing First Druid to the Goblin Camp's Worg Pens, free him, and help him take down the three goblin leaders to save the Grove.",
    aiTip:
      "Free Halsin before triggering open combat in the Shattered Sanctum — he fights alongside you in bear form and makes the leader fights far easier.",
    video: "https://www.youtube.com/watch?v=FpEtlz0MgPE"
  },
  {
    id: 207,
    type: "main",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Travel through the Underdark",
    location: "Underdark / Grymforge",
    length: "long",
    difficulty: "Medium",
    reward: "Safer route to Act 2, unique gear, Grymforge content",
    summary:
      "One of two routes to the Shadow-Cursed Lands. Descend beneath the Grove, navigate myconid colonies and duergar patrols, and cross the lake to Grymforge.",
    aiTip:
      "Enter via the Zhentarim hideout elevator or the Selûnite Outpost. Grab the Sussur bloom and visit the Myconid Colony before pushing to Grymforge.",
    video: "https://www.youtube.com/watch?v=hc__xLF6m1A"
  },
  {
    id: 208,
    type: "main",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Infiltrate Moonrise Towers",
    location: "Shadow-Cursed Lands / Moonrise Towers",
    length: "long",
    difficulty: "Medium",
    reward: "Access to the Absolute's inner circle, key Act 2 progression",
    summary:
      "Pose as a True Soul to walk into the cult's headquarters. Balance staying undercover with rescuing prisoners and gathering intel on Ketheric Thorm.",
    aiTip:
      "Keep your cover as long as possible — open hostility locks you out of valuable dialogue, vendors, and the chance to free the tiefling prisoners quietly.",
    video: "https://www.youtube.com/watch?v=86grzufcTj8"
  },
  {
    id: 209,
    type: "main",
    game: "Baldur's Gate 3",
    act: 2,
    title: "The Gauntlet of Shar",
    location: "Grand Mausoleum / Shadowfell",
    length: "long",
    difficulty: "High",
    reward: "Umbral Gems, Nightsong revelation, Shadowheart's defining choice",
    summary:
      "Complete the trials of the Lady of Loss — Soft-Step, Self-Same, and Faith-Leap — plus the optional Yurgir encounter, then descend into the Shadowfell.",
    aiTip:
      "Bring Shadowheart and save before the final descent. Use Fog Cloud to trivialize the Self-Same trial and note the faith symbols before the Faith-Leap.",
    video: "https://www.youtube.com/watch?v=Z-scYDKEJ7I"
  },
  {
    id: 210,
    type: "main",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Gather Your Allies",
    location: "All Acts / Baldur's Gate",
    length: "long",
    difficulty: "Medium",
    reward: "Summons, buffs, and reinforcements for the final battle",
    summary:
      "A campaign-spanning quest: every faction and friend you help along the way pledges support, and they all appear at your side for the assault on the Netherbrain.",
    aiTip:
      "Ally strength is decided by choices made across all three acts — spare, help, and recruit generously. Check the quest journal before the point of no return.",
    video: "https://www.youtube.com/watch?v=cwhYTTp124g"
  },
  {
    id: 211,
    type: "main",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Confront the Elder Brain",
    location: "Upper City / Morphic Pool",
    length: "long",
    difficulty: "High",
    reward: "Game finale, all endings",
    summary:
      "The final battle. Fight through the city, ascend the Netherbrain's stem with your gathered allies, and decide the fate of the Absolute — and yourself.",
    aiTip:
      "Long-rest and finish companion quests before the Morphic Pool. In the final fight, use your allies' summons aggressively — they exist to soak the chaos.",
    video: "https://www.youtube.com/watch?v=Cr5Muw-zIYg"
  },
  {
    id: 212,
    type: "main",
    game: "Elden Ring",
    region: "Limgrave",
    title: "Defeat Margit the Fell Omen",
    location: "Stormveil Castle approach",
    length: "short",
    difficulty: "High",
    reward: "Talisman Pouch, access to Stormveil Castle",
    summary:
      "The game's first great wall. Margit guards the bridge to Stormveil and punishes impatience with delayed, feinting swings that break new players' habits.",
    aiTip:
      "Buy Margit's Shackle from Patches to pin him twice, summon Rogier at the fog gate, and learn to dodge late — his swings hang in the air on purpose.",
    video: "https://www.youtube.com/watch?v=02PjeMllulQ"
  },
  {
    id: 213,
    type: "main",
    game: "Elden Ring",
    region: "Limgrave",
    title: "Defeat Godrick the Grafted",
    location: "Stormveil Castle",
    length: "medium",
    difficulty: "Medium",
    reward: "Godrick's Great Rune, Remembrance of the Grafted",
    summary:
      "The first demigod and Great Rune holder. A two-phase fight against the grafted lord of Stormveil, who swaps his axe for a dragon's head halfway through.",
    aiTip:
      "Summon Nepheli Loux just before the fog gate. In phase two, stick to his left leg — the dragon-arm flamethrower leaves his back exposed for long punishes.",
    video: "https://www.youtube.com/watch?v=_wl71myyD-k"
  },
  {
    id: 214,
    type: "main",
    game: "Elden Ring",
    region: "Liurnia",
    title: "Defeat Rennala, Queen of the Full Moon",
    location: "Academy of Raya Lucaria",
    length: "medium",
    difficulty: "Medium",
    reward: "Rennala's Great Rune, respec unlocked, Remembrance",
    summary:
      "A two-act boss: break the singing children's shields to topple Rennala, then face her true moon-sorcery form in a dreamlike second phase.",
    aiTip:
      "In phase one, hit the glowing golden students to drop her barrier. Phase two is very parry- and stagger-friendly — stay aggressive between her casts.",
    video: "https://www.youtube.com/watch?v=4r1wihoPGmU"
  },
  {
    id: 215,
    type: "main",
    game: "Elden Ring",
    region: "Leyndell & Altus",
    title: "Defeat Morgott the Omen King",
    location: "Leyndell, Royal Capital",
    length: "medium",
    difficulty: "High",
    reward: "Morgott's Great Rune, access to the Mountaintops",
    summary:
      "Margit's true form defends the Erdtree itself. A relentless, mobile duel against the Omen King with cursed blades, spears, and holy fire.",
    aiTip:
      "Melina can be summoned for this fight. Morgott is weak to bleed and vulnerable after his triple-blade slam — that's your biggest punish window.",
    video: "https://www.youtube.com/watch?v=RbMrdVOk2ok"
  },
  {
    id: 216,
    type: "main",
    game: "Elden Ring",
    region: "Mountaintops",
    title: "Defeat the Fire Giant",
    location: "Mountaintops of the Giants",
    length: "medium",
    difficulty: "High",
    reward: "Remembrance of the Fire Giant, path to the Forge",
    summary:
      "The last of the giants guards the Forge of the Giants. A colossal endurance fight where the arena itself becomes a hazard once he tears off his own leg.",
    aiTip:
      "Fight from Torrent and stay glued to his ankles. In phase two, run TOWARD him when he rolls — chasing the roll is how most deaths happen.",
    video: "https://www.youtube.com/watch?v=tzwsy8AqW34"
  },
  {
    id: 217,
    type: "main",
    game: "Elden Ring",
    region: "Farum Azula",
    title: "Defeat Maliketh, the Black Blade",
    location: "Crumbling Farum Azula",
    length: "medium",
    difficulty: "High",
    reward: "Remembrance of the Black Blade, triggers the burning of the Erdtree",
    summary:
      "First the Beast Clergyman, then Destined Death incarnate. Maliketh's second phase is one of the fastest, most acrobatic duels in the game.",
    aiTip:
      "The Blasphemous Claw (from Recusant Bernahl's quest) parries his glowing attacks in phase two. His combos end with long recovery — punish only then.",
    video: "https://www.youtube.com/watch?v=LPyue4RK_jw"
  },
  {
    id: 218,
    type: "main",
    game: "Elden Ring",
    region: "Leyndell & Altus",
    title: "Defeat Radagon and the Elden Beast",
    location: "Erdtree / Stone Platform",
    length: "long",
    difficulty: "High",
    reward: "Game finale, choice of ending",
    summary:
      "The true final battle: the shattered god Radagon, followed immediately by the Elden Beast, an alien embodiment of Order — two full bosses, one attempt.",
    aiTip:
      "Radagon is weak to fire and physical stagger; save your flask charges for the Elden Beast and sprint diagonally from Elden Stars rather than away from it.",
    video: "https://www.youtube.com/watch?v=rvfNBQcSr1Q"
  },
  {
    id: 219,
    type: "main",
    game: "Black Myth: Wukong",
    chapter: 1,
    title: "Black Bear Guai – Chapter 1 Finale",
    location: "Chapter 1 – Bodhi Peak",
    length: "medium",
    difficulty: "Medium",
    reward: "Chapter 1 completion, Craving Eyes relic",
    summary:
      "The Black Wind King reveals his true form atop Bodhi Peak. A fiery two-phase duel against the giant black bear that closes out Chapter 1.",
    aiTip:
      "Save your spells and Wandering Wight spirit for phase two when his arms ignite. Dodge through his charge rather than away — it tracks hard.",
    video: "https://www.youtube.com/watch?v=3nrZp3R5dLQ"
  },
  {
    id: 220,
    type: "main",
    game: "Black Myth: Wukong",
    chapter: 2,
    title: "Yellow Wind Sage – Chapter 2 Finale",
    location: "Chapter 2 – Windseal Gate",
    length: "medium",
    difficulty: "High",
    reward: "Chapter 2 completion, Fiery Eyes relic",
    summary:
      "The sandstorm-wielding final boss of Yellow Wind Ridge. Wind blades, ground eruptions, and a blinding tornado phase test everything learned so far.",
    aiTip:
      "Bring the Wind Tamer vessel — popping it during his tornado phase stuns him for a huge free punish. Stay on his flank to dodge the spear combos.",
    video: "https://www.youtube.com/watch?v=vDZEWXWXyig"
  },
  {
    id: 221,
    type: "main",
    game: "Black Myth: Wukong",
    chapter: 3,
    title: "Yellowbrow – Chapter 3 Finale",
    location: "Chapter 3 – Great Pagoda / Mirrormere",
    length: "long",
    difficulty: "High",
    reward: "Chapter 3 completion, relic upgrade",
    summary:
      "The false Buddha of the snowy realm. A marathon three-part finale that pits you against Yellowbrow's illusions and a desperate ally's sacrifice.",
    aiTip:
      "Refuse his golden temptation mid-fight — accepting it heals him. Save transformations for the final phase after the Macaque Chief intervenes.",
    video: "https://www.youtube.com/watch?v=8zKGKr7rpfk"
  },
  {
    id: 222,
    type: "main",
    game: "Black Myth: Wukong",
    chapter: 4,
    title: "Hundred-Eyed Daoist Master – Chapter 4 Finale",
    location: "Chapter 4 – Temple of the Yellow Flowers",
    length: "medium",
    difficulty: "High",
    reward: "Chapter 4 completion, relic",
    summary:
      "The venomous master of the Webbed Hollow descends. A blinding flurry of golden light beams and poison caps off the spider-infested chapter.",
    aiTip:
      "His golden-light eye attacks punish greed — dodge twice, hit once. Poison resistance food and the Pluck of Many transformation carry this fight.",
    video: "https://www.youtube.com/watch?v=-EI1MrUzAqY"
  },
  {
    id: 223,
    type: "main",
    game: "Black Myth: Wukong",
    chapter: 5,
    title: "Red Boy & Yaksha King – Chapter 5 Finale",
    location: "Chapter 5 – Field of Fire / Fallen Furnace",
    length: "medium",
    difficulty: "High",
    reward: "Chapter 5 completion, relic",
    summary:
      "The son of the Bull King unleashes samadhi fire, then transforms into the towering Yaksha King for a brutal second act among the flames.",
    aiTip:
      "Use the chapter's fire-warding vessel and keep mid-range — Red Boy's spear lunges are safest to punish. The Yaksha King phase is weak to stagger.",
    video: "https://www.youtube.com/watch?v=s4bat9aKTis"
  },
  {
    id: 224,
    type: "main",
    game: "Black Myth: Wukong",
    chapter: 6,
    title: "The Great Sage's Broken Shell – Final Boss",
    location: "Chapter 6 – Mount Huaguo",
    length: "long",
    difficulty: "High",
    reward: "Game completion, both endings",
    summary:
      "The journey ends where it began. Atop Mount Huaguo, the Destined One faces the stone echo of Sun Wukong himself in a mirror-match finale.",
    aiTip:
      "He fights with your own moveset — treat it like a duel: bait his heavy, dodge the fourth light attack, and spend focus points on staggered punishes.",
    video: "https://www.youtube.com/watch?v=S5BuIh6NU5A"
  },
  {
    id: 225,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 2,
    title: "The Mad Tiger – Old Rattle-Drum",
    location: "Chapter 2 – Windrest Hamlet / Bottom of the Well",
    length: "medium",
    difficulty: "Medium",
    reward: "Tiger Spirit (one of the best spirit skills)",
    summary:
      "Defeat the Tiger's Acolyte for the Old Rattle-Drum, beat it at three shrines across Yellow Wind Ridge, then descend the well to face the sorrowful Mad Tiger.",
    aiTip:
      "Beat the drum at the three marked spots in order, then drop into the Windrest Hamlet well. The Mad Tiger parries often — delay your combo finishers.",
    video: "https://www.youtube.com/watch?v=H3ZAONSUVyQ"
  },
  {
    id: 226,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 4,
    title: "The Scorpionlord – Purple Cloud Mountain",
    location: "Chapter 4 – SECRET: Purple Cloud Mountain",
    length: "medium",
    difficulty: "High",
    reward: "Deathstinger weapon material, secret-area completion",
    summary:
      "Hidden in Chapter 4's secret area, the courteous Scorpionlord duels you among the peach blossoms. Miss him before facing Duskveil and he's gone forever.",
    aiTip:
      "You must defeat Venom Daoist twice earlier in the chapter to open Purple Cloud Mountain. Fight the Scorpionlord BEFORE Duskveil or he vanishes permanently.",
    video: "https://www.youtube.com/watch?v=KOBHv03ztck"
  },
  {
    id: 227,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 2,
    title: "Unlock the Azure Dust Transformation",
    location: "Chapter 2 – Fright Cliff",
    length: "medium",
    difficulty: "Medium",
    reward: "Azure Dust transformation (stone form)",
    summary:
      "Help the Man-in-Stone buried in a Fright Cliff ravine: defeat the Mother of Stones, return his Stone Essence, then beat him in a duel to earn the rock-solid Azure Dust transformation.",
    aiTip:
      "The Man-in-Stone is hidden past Squall Hideout between two rock guai. Azure Dust also doubles as a wall-breaker for reaching the Loong Scales secret.",
    video: "https://www.youtube.com/watch?v=pYScnK8bA04"
  },
  {
    id: 228,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 2,
    title: "Obtain the Loong Scales",
    location: "Chapter 2 – Village of Despair cave",
    length: "short",
    difficulty: "Medium",
    reward: "Loong Scales key item — unlocks all hidden dragon bosses",
    summary:
      "A hidden key item behind a destructible wall in the Sandgate caves. The Loong Scales open the way to the Red, Black, and Cyan Loong secret fights across the game.",
    aiTip:
      "Break the cracked wall near the First Prince of Flowing Sands arena using the Wandering Wight spirit or Azure Dust transformation, then grab the golden chest.",
    video: "https://www.youtube.com/watch?v=lSOI9seMoQ4"
  },
  {
    id: 229,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 4,
    title: "Unlock the Golden Lining Transformation",
    location: "Chapters 1–4 – all four Loongs",
    length: "long",
    difficulty: "High",
    reward: "Golden Lining dragon transformation",
    summary:
      "The dragon-slayer's reward: collect the Loong Scales, defeat the Red, Black, and Cyan Loongs, then bring down the Yellow Loong in Chapter 4 to claim the game's hidden dragon transformation.",
    aiTip:
      "Do the three lesser Loongs as you pass through their chapters — going back later means re-clearing paths. Golden Lining's counterstance rewards aggressive timing.",
    video: "https://www.youtube.com/watch?v=kTFKuaPsILs"
  },
  {
    id: 230,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 5,
    title: "The Plantain Fan",
    location: "Chapter 5 – Bishui Cave / chapter finale",
    length: "medium",
    difficulty: "Medium",
    reward: "Plantain Fan vessel (tornado + stamina regen)",
    summary:
      "The legendary fan of Princess Iron Fan, earned through the events of Chapter 5. Its conjured tornado immobilizes groups and its passive boosts stamina recovery for the endgame.",
    aiTip:
      "Complete the Five Element Carts quest for the Bishui Cave secret area first — its rewards plus the Fan make Chapter 6's gauntlet dramatically easier.",
    video: "https://www.youtube.com/watch?v=AVGVPesMlks"
  },
  {
    id: 231,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 6,
    title: "Erlang Shen & the True Ending",
    location: "SECRET: Mount Mei / Great Pagoda",
    length: "long",
    difficulty: "High",
    reward: "True ending, Erlang Shen superboss, Sacred Divinity fight",
    summary:
      "The ultimate secret: clear the hidden areas of Chapters 1–5 and the Treasure Hunter quest, then enter the Great Pagoda mural to face Erlang Shen and the Four Heavenly Kings — unlocking the game's true ending.",
    aiTip:
      "Erlang's stance meter must be broken before he takes real damage, and it refreshes at health thresholds. This is widely considered the hardest fight in the game — level fully first.",
    video: "https://www.youtube.com/watch?v=ael32jxy3EU"
  },
  {
    id: 232,
    type: "side",
    game: "Baldur's Gate 3",
    act: 1,
    title: "The Adamantine Forge",
    location: "Grymforge / Underdark",
    length: "medium",
    difficulty: "High",
    reward: "Adamantine weapons and armour, Grym boss fight",
    summary:
      "A hidden ancient forge deep below Grymforge. Feed it Mithral Ore and forge some of Act 1's best gear — but hammering the mould wakes Grym, the forge's hulking guardian.",
    aiTip:
      "Grym is only vulnerable when superheated by lava and can be crushed by the forge hammer itself — lure him onto the central platform and pull the lever.",
    video: "https://www.youtube.com/watch?v=pCBlyrTQaRc"
  },
  {
    id: 233,
    type: "side",
    game: "Baldur's Gate 3",
    act: 1,
    title: "The Blood of Lathander",
    location: "Rosymorn Monastery / Mountain Pass",
    length: "medium",
    difficulty: "Medium",
    reward: "Blood of Lathander legendary mace",
    summary:
      "Solve the stained-glass ritual puzzle in Rosymorn Monastery and disarm an ancient trap to claim one of the game's earliest legendary weapons — a mace that blinds fiends and undead.",
    aiTip:
      "Place the correct weapons on the altar (check the window mural) to open the vault. Bring Misty Step to bypass the destroying-beam trap on the way out.",
    video: "https://www.youtube.com/watch?v=zLIRdgQzTeo"
  },
  {
    id: 234,
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Raid the House of Hope",
    location: "House of Hope / Avernus",
    length: "long",
    difficulty: "High",
    reward: "Orphic Hammer, legendary loot, Raphael boss fight",
    summary:
      "Sneak into the devil Raphael's private domain in Avernus to steal the Orphic Hammer. Free the tormented Hope and you can face Raphael himself in one of the game's best boss fights.",
    aiTip:
      "Say 'Give me my heart's desire' at the Archives to take the hammer. Destroy the four soul pillars during the Raphael fight to cut off his power.",
    video: "https://www.youtube.com/watch?v=ELhgIdeoeew"
  },
  {
    id: 235,
    type: "side",
    game: "Baldur's Gate 3",
    act: 1,
    title: "The Necromancy of Thay",
    location: "Blighted Village → Sorcerous Sundries",
    length: "long",
    difficulty: "Medium",
    reward: "Forbidden Knowledge buffs, Danse Macabre spell",
    summary:
      "A sinister tome found in the Blighted Village cellar. Open it with the Dark Amethyst from the spider matriarch's pit, resist its whispers across all three acts, and claim its dark powers.",
    aiTip:
      "Reading every chapter requires three successful saves — cast Guidance and save first. Keep the book until Act 3: the Tharchiate Codex in Sorcerous Sundries completes it.",
    video: "https://www.youtube.com/watch?v=wgsHxAaRzuQ"
  },
  {
    id: 236,
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Rescue Minsc (The High Harper)",
    location: "Counting House / Lower City Sewers",
    length: "medium",
    difficulty: "Medium",
    reward: "Minsc (and Boo) as a companion",
    summary:
      "Help Jaheira track the 'Stone Lord' through Baldur's Gate's underworld — only to find the legendary ranger Minsc, duped by a doppelganger. Save him from himself to recruit him.",
    aiTip:
      "Toggle non-lethal attacks before the sewer fight and knock Minsc out last. Jaheira must be alive and in the party for the quest to progress.",
    video: "https://www.youtube.com/watch?v=W4zJP42TDgU"
  },
  {
    id: 237,
    type: "side",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Adopt the Owlbear Cub",
    location: "Owlbear Nest / Goblin Camp",
    length: "short",
    difficulty: "Low",
    reward: "Owlbear cub camp companion (and Act 3 surprise)",
    summary:
      "Spare the owlbear cub in its nest, then win it from the goblins tormenting it at their camp. Feed it patiently over several long rests and it becomes your camp's fluffiest resident.",
    aiTip:
      "Let the cub smell your hand at the goblin camp and don't rush it at camp — kindness across several rests pays off spectacularly in the final battle.",
    video: "https://www.youtube.com/watch?v=S7wCREHYyoc"
  },
  {
    id: 238,
    type: "side",
    game: "Elden Ring",
    region: "Haligtree",
    title: "Reach Miquella's Haligtree",
    location: "Village of the Albinaurics / Castle Sol",
    length: "long",
    difficulty: "High",
    reward: "Access to the secret Haligtree region and Elphael",
    summary:
      "The game's best-hidden region. Find both halves of the Haligtree Secret Medallion — one from Albus disguised as a pot, one from Commander Niall at Castle Sol — and hoist them at the Grand Lift of Rold.",
    aiTip:
      "Hit the lone pot in the Village of the Albinaurics to reveal Albus. Castle Sol's Commander Niall is brutal — bring spirit ashes that split his knight summons.",
    video: "https://www.youtube.com/watch?v=HEdXuQ186DU"
  },
  {
    id: 239,
    type: "side",
    game: "Elden Ring",
    region: "Haligtree",
    title: "Defeat Malenia, Blade of Miquella",
    location: "Elphael, Brace of the Haligtree",
    length: "medium",
    difficulty: "High",
    reward: "Remembrance of the Rot Goddess, Malenia's Great Rune",
    summary:
      "The hardest fight in the game. The undefeated swordswoman of the Haligtree heals with every blow she lands and blooms into the Goddess of Rot in phase two.",
    aiTip:
      "Her Waterfowl Dance is the killer — sprint away from the first flurry, dodge into the rest. Bleed weapons and aggressive spirit ashes shorten both phases.",
    video: "https://www.youtube.com/watch?v=-D5vwtjmkIE"
  },
  {
    id: 240,
    type: "side",
    game: "Elden Ring",
    region: "Underground",
    title: "Defeat Mohg, Lord of Blood",
    location: "Mohgwyn Palace",
    length: "medium",
    difficulty: "High",
    reward: "Remembrance of the Blood Lord, Mohg's Great Rune",
    summary:
      "The Lord of Blood awaits beneath his hidden palace, reachable through Varre's quest or a secret Consecrated Snowfield teleporter. His cursed ritual counts down to a devastating bloodflame nova.",
    aiTip:
      "Buy the Purifying Crystal Tear (Yura's quest) — it nullifies Mohg's 'Nihil' ritual entirely. His arena is also the game's best rune-farming spot.",
    video: "https://www.youtube.com/watch?v=r0IgQ9s6AEs"
  },
  {
    id: 241,
    type: "side",
    game: "Elden Ring",
    region: "Farum Azula",
    title: "Defeat Dragonlord Placidusax",
    location: "Crumbling Farum Azula (hidden arena)",
    length: "medium",
    difficulty: "High",
    reward: "Remembrance of the Dragonlord",
    summary:
      "A secret superboss outside time itself. Lie down in an empty coffin alcove in Farum Azula to be carried to the storm's eye, where the two-headed former Elden Lord waits.",
    aiTip:
      "When he vanishes, sprint — the lightning teleport strikes are on a timer. Stay under his chest between the heads; most breath attacks miss there entirely.",
    video: "https://www.youtube.com/watch?v=Tf0DXto9Iig"
  },
  {
    id: 242,
    type: "side",
    game: "Elden Ring",
    region: "Underground",
    title: "Defeat Astel, Naturalborn of the Void",
    location: "Lake of Rot / Grand Cloister",
    length: "medium",
    difficulty: "High",
    reward: "Remembrance of the Naturalborn, unlocks Ranni's path forward",
    summary:
      "A cosmic horror at the bottom of the Lake of Rot, guarding the way to the Moonlight Altar. Gravity magic, teleports, and a one-shot grab make it a unique endgame test.",
    aiTip:
      "Watch for the grab — dodge sideways the instant its arms spread. Clearing the Lake of Rot is half the fight: bring Preserving Boluses and run, don't fight.",
    video: "https://www.youtube.com/watch?v=dzrSCDUcFys"
  },
  {
    id: 243,
    type: "side",
    game: "Elden Ring",
    region: "Underground",
    title: "Get the Mimic Tear Spirit Ashes",
    location: "Nokron, Eternal City – Night's Sacred Ground",
    length: "short",
    difficulty: "Medium",
    reward: "Mimic Tear ashes — the game's strongest summon",
    summary:
      "Hidden behind an imp-statue door in Nokron after Radahn falls, the Mimic Tear summons a full copy of your character — gear, spells, flasks and all.",
    aiTip:
      "Bring two Stonesword Keys. Equip your best gear BEFORE summoning — the mimic copies your current loadout, and it uses HP instead of FP to summon.",
    video: "https://www.youtube.com/watch?v=ZlmtbD_8SiU"
  },
  {
    id: 244,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Corel",
    title: "Dyne – All That Glitters",
    location: "Chapter 8 – Corel Prison / Gold Saucer",
    length: "medium",
    difficulty: "Medium",
    reward: "Chapter 8 climax, Barret's defining story moment",
    summary:
      "Barret finally confronts his oldest friend and greatest regret beneath the Gold Saucer. A one-on-one duel that doubles as the emotional core of the Corel arc.",
    aiTip:
      "It's Barret solo — equip him with Fire materia (Dyne's only weakness) and use Maximum Fury to shred the scrap-metal body parts during Phantom Ray.",
    video: "https://www.youtube.com/watch?v=UiUD4jaIFEY"
  },
  {
    id: 245,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Nibel",
    title: "Sephiroth Reborn – End of the World",
    location: "Chapter 14 – Edge of Creation",
    length: "long",
    difficulty: "High",
    reward: "Game finale",
    summary:
      "The multi-phase finale that rotates through the entire party — and Zack — before Cloud and Aerith face Sephiroth's final form at the edge of creation.",
    aiTip:
      "Destroy the Wing and Masamune with magic when Whisper Cannon exposes them. Stack healing materia on Cloud and Aerith for the last phase.",
    video: "https://www.youtube.com/watch?v=JMdc6ry7mi0"
  },
  {
    id: 246,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Nibel",
    title: "Gilgamesh – The Ultimate Summon",
    location: "Gilgamesh Island / Meridian Ocean",
    length: "long",
    difficulty: "High",
    reward: "Gilgamesh summon materia, superboss trophy",
    summary:
      "Complete every region's Protorelic questline to unlock Gilgamesh Island and challenge the legendary sword collector himself — the game's ultimate superboss.",
    aiTip:
      "Come at level 70 with Fire builds. Perfect-block his attacks to pressure him into dropping weapons, and stagger him before his five-count Ultimate Illusion lands.",
    video: "https://www.youtube.com/watch?v=hahMCMyXzSI"
  },
  {
    id: 247,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Cosmo Canyon",
    title: "Rulers of the Outer Worlds",
    location: "Chadley's Combat Simulator",
    length: "medium",
    difficulty: "High",
    reward: "Brutal challenge completion, elite gear",
    summary:
      "The combat simulator's most feared gauntlet: five rounds of paired summons — Titan, Bahamut Arisen, Alexander, Odin — capped by Gilgamesh and a virtual Sephiroth.",
    aiTip:
      "Kill Odin first in round three or Zantetsuken will end the run. Break Bahamut's wings during Particle Charge to interrupt its Gigaflare countdown.",
    video: "https://www.youtube.com/watch?v=qq6Wj7qOh00"
  },
  {
    id: 248,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Westbrook",
    title: "The Heist",
    location: "Konpeki Plaza / City Center",
    length: "medium",
    difficulty: "Medium",
    reward: "The Relic, the story's inciting event",
    summary:
      "V and Jackie infiltrate Konpeki Plaza to steal Arasaka's experimental biochip. The night that changes everything — and gives V an unwanted passenger named Johnny Silverhand.",
    aiTip:
      "Loot Yorinobu's suite thoroughly (the iguana egg is here!) and don't rush the stealth section — the hotel turns hostile the moment the alarm trips.",
    video: "https://www.youtube.com/watch?v=qbIs8-j1UmY"
  },
  {
    id: 249,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Pacifica",
    title: "Transmission",
    location: "Pacifica / Voodoo Boys' Data Fortress",
    length: "medium",
    difficulty: "Medium",
    reward: "Contact with Alt Cunningham, Johnny's backstory",
    summary:
      "Descend beneath the Pacifica chapel into the Voodoo Boys' netrunner den and dive past the Blackwall to meet the legendary Alt Cunningham.",
    aiTip:
      "Your NetWatch-or-Voodoo-Boys choice in I Walk the Line decides whether you leave peacefully or fight Placide's men on the way out — pick before you commit.",
    video: "https://www.youtube.com/watch?v=e9pzvGVexsg"
  },
  {
    id: 250,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "Nocturne Op55N1 – Point of No Return",
    location: "Embers / Misty's rooftop",
    length: "short",
    difficulty: "Medium",
    reward: "Access to every ending path",
    summary:
      "Dinner with Hanako Arasaka, then the rooftop with Misty: the single conversation that decides which of the game's endings you'll experience.",
    aiTip:
      "Finish Panam's and Rogue's questlines BEFORE this mission or their ending paths won't appear. The game warns you — this really is the point of no return.",
    video: "https://www.youtube.com/watch?v=onmRkZZRMy0"
  },
  {
    id: 251,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "(Don't Fear) The Reaper – Secret Ending",
    location: "Arasaka Tower (solo assault)",
    length: "long",
    difficulty: "High",
    reward: "The hidden ending — V and Johnny storm Arasaka alone",
    summary:
      "The game's true secret: earn Johnny's respect in Chippin' In, then stay silent on the rooftop for five minutes and he'll propose a two-man suicide run on Arasaka Tower. No allies, no second chances.",
    aiTip:
      "You must pick the exact 'friendship' dialogue at Johnny's grave in Chippin' In. Dying in the tower means game over — no respawn. Stock grenades and healing.",
    video: "https://www.youtube.com/watch?v=gKr_dniHkyE"
  },
  {
    id: 252,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Heywood",
    title: "Machine Gun – Skippy the Talking Pistol",
    location: "Heywood / Vista del Rey alley",
    length: "short",
    difficulty: "Low",
    reward: "Skippy, the self-aware iconic smart pistol",
    summary:
      "In a Heywood alley lies Skippy — a chirpy, singing, morally opinionated smart pistol. Use him for 50 kills and he demands to be returned to his original owner.",
    aiTip:
      "Choose 'Stone Cold Killer' mode when he asks — Skippy ironically switches to the pacifist setting permanently after 50 kills, and headshot mode is the one you want long-term.",
    video: "https://www.youtube.com/watch?v=H8UbAFX9Xos"
  },
  {
    id: 253,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Multiple",
    title: "Cyberpsycho Sightings – I Am The Law",
    location: "All districts of Night City",
    length: "long",
    difficulty: "Medium",
    reward: "Regina's reward stream, I Am The Law achievement",
    summary:
      "Regina Jones tasks V with taking down all 17 cyberpsychos scattered across Night City — non-lethally if you can manage it. Each one is a mini boss fight with its own tragic story.",
    aiTip:
      "Use blunt weapons or short-circuit quickhacks to keep them alive; read each victim's shard afterward. Several only spawn after certain story progress.",
    video: "https://www.youtube.com/watch?v=nYIw1huUd4Q"
  },
  {
    id: 254,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "The Pickup",
    location: "Watson – Northside",
    length: "medium",
    difficulty: "Medium",
    reward: "Flathead combat drone, Maelstrom or Militech alliance",
    summary:
      "V and Jackie's first real gig: acquire a militarized Flathead bot from the Maelstrom gang. Handle the deal with Militech agent Meredith Stout and the volatile Royce however you like — bullets, credchips, or silver tongue.",
    aiTip:
      "Scanning the malware-laced credchip lets you disarm it and keep Meredith on-side. A peaceful Maelstrom deal preserves a fixer relationship you'll appreciate later.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20The%20Pickup%20walkthrough"
  },
  {
    id: 255,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "The Information",
    location: "Watson – Little China",
    length: "short",
    difficulty: "Low",
    reward: "Braindance training, Evelyn Parker contact",
    summary:
      "V meets Evelyn Parker and Dexter DeShawn to plan the Konpeki Plaza heist, learning the braindance editor by scrubbing through a recorded infiltration.",
    aiTip:
      "Take your time in the braindance editor scrubbing visual, thermal, and audio layers — the same skill returns in several later missions.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20The%20Information%20walkthrough"
  },
  {
    id: 256,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Playing for Time",
    location: "Watson – Megabuilding H10",
    length: "medium",
    difficulty: "Medium",
    reward: "Johnny Silverhand engram, Ripperdoc Vik path",
    summary:
      "Waking up after the heist with a dead man's engram in your head, V hunts for a way to survive while Johnny Silverhand starts talking back.",
    aiTip:
      "Sell Johnny's iconic gear only if you must — the Malorian Arms 3516 and Samurai jacket are worth holding onto for the story payoff.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Playing%20for%20Time%20walkthrough"
  },
  {
    id: 257,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Westbrook",
    title: "Automatic Love",
    location: "Westbrook – Japantown",
    length: "medium",
    difficulty: "Medium",
    reward: "Clouds access, Skye/Angel braindance lead",
    summary:
      "The trail to Evelyn leads to Clouds, an elite dollhouse in Japantown. Book a doll, follow the leads, and uncover what happened after the heist went wrong.",
    aiTip:
      "Either doll (Skye or Angel) works — you're really there for the conversation, so pick whoever you're comfortable talking to and stay alert leaving Clouds.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Automatic%20Love%20walkthrough"
  },
  {
    id: 258,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Westbrook",
    title: "Disasterpiece",
    location: "Westbrook – Japantown",
    length: "long",
    difficulty: "High",
    reward: "Judy alliance, XBD workshop cleared",
    summary:
      "V and Judy raid a Scav den to find Evelyn, wading through the worst of Night City's illegal braindance trade in the process.",
    aiTip:
      "Bring anti-Scav loadout and armor — the warehouse is a tough gauntlet. Loot the XBD lab thoroughly for eddies and crafting specs.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Disasterpiece%20walkthrough"
  },
  {
    id: 259,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Pacifica",
    title: "I Walk the Line",
    location: "Pacifica – Coastview",
    length: "long",
    difficulty: "High",
    reward: "Voodoo Boys deal, NetWatch choice",
    summary:
      "The Voodoo Boys will only help with Johnny if V dives into the deep net for them — but NetWatch has other plans in the drowned GIM mall.",
    aiTip:
      "Siding with NetWatch or the Voodoo Boys changes who turns hostile immediately; the NetWatch route keeps Alt Cunningham's help intact for the finale.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20I%20Walk%20the%20Line%20walkthrough"
  },
  {
    id: 260,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Search and Destroy",
    location: "Watson – Arasaka Waterfront",
    length: "long",
    difficulty: "High",
    reward: "Takemura rescued, Oda confrontation",
    summary:
      "Goro Takemura calls in a favor: storm an Arasaka safehouse to rescue him and interrogate Hanako's captor before the parade.",
    aiTip:
      "Save Takemura by clearing the room fast — his survival unlocks extra dialogue and a hidden option in the endgame.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Search%20and%20Destroy%20walkthrough"
  },
  {
    id: 261,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Westbrook",
    title: "Play It Safe",
    location: "Westbrook – Japantown",
    length: "long",
    difficulty: "High",
    reward: "Oda defeated, Hanako intel",
    summary:
      "The plan to reach Hanako Arasaka runs through her bodyguard Oda and a heavily fortified Arasaka safe house during a citywide lockdown.",
    aiTip:
      "Non-lethal takedowns on Oda are possible and canonically 'kinder' — short-circuit and blunt weapons let you spare him.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Play%20It%20Safe%20walkthrough"
  },
  {
    id: 262,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "Never Fade Away",
    location: "City Center – Arasaka Tower (2013)",
    length: "medium",
    difficulty: "Medium",
    reward: "Johnny's memories, relationship insight",
    summary:
      "Relive Johnny Silverhand's disastrous 2023 raid on Arasaka Tower alongside Rogue, playing as the rockerboy himself.",
    aiTip:
      "Explore freely as Johnny — this flashback deepens the Rogue romance/alliance options in Act 3, so soak in the dialogue.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Never%20Fade%20Away%20walkthrough"
  },
  {
    id: 263,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "Nocturne Op55N1",
    location: "City Center – Embers",
    length: "short",
    difficulty: "Medium",
    reward: "Point of no return, ending path selection",
    summary:
      "The final calm before the storm. V chooses how to assault Arasaka — with Rogue, Panam's Aldecaldos, alone, or by trusting Johnny with their body.",
    aiTip:
      "This is the point of no return. Finish outstanding side jobs first — completing certain ones (Panam's, Rogue's, the Sinnerman arc) unlocks extra endings including the secret one.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Nocturne%20Op55N1%20walkthrough"
  },
  {
    id: 264,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "The Star – Aldecaldos Ending",
    location: "Badlands",
    length: "long",
    difficulty: "Medium",
    reward: "Leave Night City with the Aldecaldos",
    summary:
      "V rides out of Night City with Panam and the Aldecaldos, chasing a cure beyond the corporate walls.",
    aiTip:
      "Requires completing Panam's questline (Queen of the Highway). Widely considered the most hopeful ending.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20The%20Star%20%E2%80%93%20Aldecaldos%20Ending%20walkthrough"
  },
  {
    id: 265,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "The Sun – Legendary Ending",
    location: "City Center",
    length: "long",
    difficulty: "High",
    reward: "Become a Night City legend",
    summary:
      "V storms Arasaka with Rogue's crew and, win or lose, cements their legend — with a shot at the stars and a deal with Mr. Blue Eyes.",
    aiTip:
      "Requires Rogue's side jobs. Choosing to let Johnny take over vs. going in yourself changes the epilogue significantly.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20The%20Sun%20%E2%80%93%20Legendary%20Ending%20walkthrough"
  },
  {
    id: 266,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Happy Together",
    location: "Watson – Little China",
    length: "short",
    difficulty: "Low",
    reward: "River Ward relationship start, karma",
    summary:
      "Detective River Ward asks V to talk his sister's coworker's brother down from suicide over a braindance addiction.",
    aiTip:
      "Read the room and stay calm — how you talk Barry through it determines whether he lives, and it colors River's arc.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Happy%20Together%20walkthrough"
  },
  {
    id: 267,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Big in Japan",
    location: "Watson – Kabuki",
    length: "short",
    difficulty: "Low",
    reward: "Eddies, Wakako fixer favor",
    summary:
      "A quick smash-and-grab that goes sideways, showing off Night City's chaotic gig economy.",
    aiTip:
      "Watch the tone shift — this one rewards a light touch and quick exit over a firefight.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Big%20in%20Japan%20walkthrough"
  },
  {
    id: 268,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Multiple",
    title: "Beat on the Brat",
    location: "Multiple districts",
    length: "medium",
    difficulty: "Medium",
    reward: "Boxing champion title, unique fists",
    summary:
      "A city-spanning boxing questline: beat the toughest brawlers in each district bare-knuckle, culminating in a fight with the Twins and Razor Hughes.",
    aiTip:
      "Level up Body and buy Gorilla Arms before the later bouts. Block-and-counter beats trading blows against the champions.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Beat%20on%20the%20Brat%20walkthrough"
  },
  {
    id: 269,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Multiple",
    title: "Epistrophy",
    location: "Multiple districts",
    length: "medium",
    difficulty: "Low",
    reward: "Delamain cab fleet, unique AI companion",
    summary:
      "Delamain's rogue autonomous cabs have scattered across the city with fractured personalities. Track and reboot each one for the beleaguered AI.",
    aiTip:
      "Each cab is a self-contained vignette across every district — a relaxing way to see Night City and bank easy eddies.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Epistrophy%20walkthrough"
  },
  {
    id: 270,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Space Oddity",
    location: "Badlands – near Sunset Motel",
    length: "short",
    difficulty: "Medium",
    reward: "Rare painting worth a fortune (with a catch)",
    summary:
      "A tip leads V to a mysterious dead-drop and a valuable painting — but everyone wants a cut and nothing about the deal is straight.",
    aiTip:
      "Sell the painting to the right buyer for a huge payout; don't accept the first lowball offer at the drop point.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Space%20Oddity%20walkthrough"
  },
  {
    id: 271,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Heywood",
    title: "Heroes",
    location: "Heywood – Vista del Rey",
    length: "short",
    difficulty: "Low",
    reward: "Jackie's ofrenda, emotional payoff",
    summary:
      "Mama Welles invites V to Jackie Welles' Día de los Muertos ofrenda to say goodbye to their fallen partner.",
    aiTip:
      "Bring one of Jackie's belongings to the ofrenda for the fuller, more heartfelt version of the scene.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Heroes%20walkthrough"
  },
  {
    id: 272,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Queen of the Highway",
    location: "Badlands – Aldecaldos Camp",
    length: "long",
    difficulty: "High",
    reward: "Basilisk tank, Panam romance/ending path",
    summary:
      "Panam and the Aldecaldos pull off a heist for a Militech Basilisk hovertank, cementing V's bond with the nomad family.",
    aiTip:
      "This unlocks the Aldecaldos (The Star) ending. Pursue Panam's romance dialogue here if you want that path.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Queen%20of%20the%20Highway%20walkthrough"
  },
  {
    id: 273,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "With a Little Help from My Friends",
    location: "Badlands – Aldecaldos Camp",
    length: "short",
    difficulty: "Low",
    reward: "Nomad camaraderie, quiet character beat",
    summary:
      "A rare quiet night at the Aldecaldos camp — drinks, stories, and a campfire with Panam and the family.",
    aiTip:
      "A pure character moment. Sit through the conversations; it pays off emotionally in the endgame.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20With%20a%20Little%20Help%20from%20My%20Friends%20walkthrough"
  },
  {
    id: 274,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "Following the River",
    location: "Santo Domingo – Rancho Coronado",
    length: "medium",
    difficulty: "Medium",
    reward: "River Ward romance, missing-kids case close",
    summary:
      "V and River Ward chase the last leads on a child abduction case tied to a corrupt politician, then share a moment on a water tower.",
    aiTip:
      "Complete this to progress River's romance (available to female-bodied V). The braindance investigation rewards careful scrubbing.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Following%20the%20River%20walkthrough"
  },
  {
    id: 275,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Westbrook",
    title: "Pisces",
    location: "Japantown – Clouds",
    length: "medium",
    difficulty: "Medium",
    reward: "Judy questline, Clouds workers' fate",
    summary:
      "Judy plans to take Clouds back for its workers. V helps negotiate with the Tyger Claws — a deal that can go very wrong.",
    aiTip:
      "Sparing Maiko vs. accepting her deal changes the outcome and Judy's mood. This gates the Judy romance path.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Pisces%20walkthrough"
  },
  {
    id: 276,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "Talkin' 'Bout a Revolution",
    location: "Santo Domingo",
    length: "short",
    difficulty: "Low",
    reward: "Eddies, worker-uprising vignette",
    summary:
      "A gig-style side job that drops V into a simmering labor dispute in the industrial districts.",
    aiTip:
      "A short but flavorful detour into Night City's class politics — grab the loot and the shard lore.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Talkin'%20'Bout%20a%20Revolution%20walkthrough"
  },
  {
    id: 277,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "They Won't Go When I Go",
    location: "Santo Domingo",
    length: "medium",
    difficulty: "High",
    reward: "Sinnerman arc conclusion, moral gut-punch",
    summary:
      "The disturbing continuation of the Sinnerman arc: V witnesses a man's chosen crucifixion recorded as a braindance.",
    aiTip:
      "One of the darkest, most divisive quests in the game. It has no combat — it's entirely a choice about how far you'll go.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20They%20Won't%20Go%20When%20I%20Go%20walkthrough"
  },
  {
    id: 278,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Gig: Monster Hunt",
    location: "Kabuki – Watson",
    length: "short",
    difficulty: "Medium",
    reward: "Regina payout, rescued victim",
    summary:
      "Fixer Regina Jones sends V to stop a violent john who's been brutalizing joytoys in Kabuki.",
    aiTip:
      "Non-lethal is optional here; save the victim and grab the evidence shard for the full Regina payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Monster%20Hunt%20walkthrough"
  },
  {
    id: 279,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Westbrook",
    title: "Gig: Freedom of the Press",
    location: "Westbrook – Japantown",
    length: "short",
    difficulty: "Low",
    reward: "Max Jones payout, journalist saved",
    summary:
      "Help investigative journalist Max Jones dodge a Militech hit squad and get his story out.",
    aiTip:
      "Approach quietly to extract Max unharmed — a loud fight puts him in the crossfire.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Freedom%20of%20the%20Press%20walkthrough"
  },
  {
    id: 280,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Heywood",
    title: "Gig: Family Heirloom",
    location: "Heywood – Wellsprings",
    length: "short",
    difficulty: "Medium",
    reward: "Padre payout, recovered mnemonic device",
    summary:
      "Fixer Padre wants a stolen mnemonic memory device recovered from a gang stash before its owner loses everything.",
    aiTip:
      "Stealth in, grab the device from the safe, and leave — the stash is heavily guarded for a small gig.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Family%20Heirloom%20walkthrough"
  },
  {
    id: 281,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Heywood",
    title: "Gig: Life's Work",
    location: "Heywood – The Glen",
    length: "short",
    difficulty: "Low",
    reward: "Padre payout, sculptor's magnum opus",
    summary:
      "Recover a dying artist's final sculpture from thieves so his life's work isn't lost.",
    aiTip:
      "A low-stakes, story-rich gig — read the shards to appreciate why it matters to the client.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Life's%20Work%20walkthrough"
  },
  {
    id: 282,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Westbrook",
    title: "Gig: Serious Side Effects",
    location: "Westbrook – Japantown",
    length: "short",
    difficulty: "Medium",
    reward: "Wakako payout, stolen meds recovered",
    summary:
      "Wakako Okada tasks V with recovering a shipment of stolen immunosuppressant drugs from a ripperdoc gone bad.",
    aiTip:
      "The clinic is trapped and guarded — scan for cameras and turrets before moving in.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Serious%20Side%20Effects%20walkthrough"
  },
  {
    id: 283,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "Gig: Flight of the Cheetah",
    location: "Santo Domingo – Arroyo",
    length: "medium",
    difficulty: "Medium",
    reward: "Dino Dinovic payout, defector extracted",
    summary:
      "Extract a Militech scientist and his experimental combat implant before Militech's cleaners silence him.",
    aiTip:
      "Time it right — reinforcements escalate the longer you linger. Extraction beats a shootout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Flight%20of%20the%20Cheetah%20walkthrough"
  },
  {
    id: 284,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Gig: Getting Warmer...",
    location: "Watson – Northside",
    length: "short",
    difficulty: "High",
    reward: "Regina payout, defused suicide bomber",
    summary:
      "A former Maelstromer named Brick is wired to explode. V must find and defuse the bomb before Night City loses a city block.",
    aiTip:
      "Search for the shards revealing the disarm code before touching the bomb — guessing ends badly.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Getting%20Warmer...%20walkthrough"
  },
  {
    id: 285,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "Gig: Last Login",
    location: "Santo Domingo – Rancho Coronado",
    length: "short",
    difficulty: "Low",
    reward: "Sebastian 'Padre' payout, closure for a family",
    summary:
      "Recover a dead 6th Street gang member's belongings so his brother can lay him to rest.",
    aiTip:
      "A quiet, humane gig — clear the drone-guarded lot and grab the personal effects.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Last%20Login%20walkthrough"
  },
  {
    id: 286,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Cyberpsycho Sighting: Second Chances",
    location: "Badlands – Rocky Ridge",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: Zion Wylde, a nomad pushed past his limit. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20Second%20Chances%20walkthrough"
  },
  {
    id: 287,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Cyberpsycho Sighting: The Wasteland",
    location: "Badlands – Jackson Plains",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: Euralio Alma, a mercenary lost to combat implants. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20The%20Wasteland%20walkthrough"
  },
  {
    id: 288,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Cyberpsycho Sighting: House on a Hill",
    location: "Badlands – East",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: Russell Greene, a veteran barricaded on his property. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20House%20on%20a%20Hill%20walkthrough"
  },
  {
    id: 289,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "Cyberpsycho Sighting: Discount Doc",
    location: "Santo Domingo – Rancho Coronado",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: Chase Coley, a ripperdoc's botched patient. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20Discount%20Doc%20walkthrough"
  },
  {
    id: 290,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Cyberpsycho Sighting: Where the Bodies Hit the Floor",
    location: "Watson – Northside",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: Ellis Carter, a fixer's enforcer gone berserk. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20Where%20the%20Bodies%20Hit%20the%20Floor%20walkthrough"
  },
  {
    id: 291,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Cyberpsycho Sighting: Bloody Ritual",
    location: "Watson – Northside",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: Zaria Hughes, staging grotesque ritual scenes. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20Bloody%20Ritual%20walkthrough"
  },
  {
    id: 292,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Cyberpsycho Sighting: Six Feet Under",
    location: "Watson – Northside",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: Lely Hein, a grave-robbing cyberpsycho. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20Six%20Feet%20Under%20walkthrough"
  },
  {
    id: 293,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Cyberpsycho Sighting: Demons of War",
    location: "Watson – Kabuki",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: Matt Liaw, a soldier reliving the war. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20Demons%20of%20War%20walkthrough"
  },
  {
    id: 294,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Cyberpsycho Sighting: Lt. Mower",
    location: "Watson – Kabuki",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: Lieutenant Mower, ex-Militent overloaded with military ware. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20Lt.%20Mower%20walkthrough"
  },
  {
    id: 295,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Cyberpsycho Sighting: Ticket to the Major Leagues",
    location: "Watson – Little China",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: Alec Johnson, a washed-up athlete chromed to death. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20Ticket%20to%20the%20Major%20Leagues%20walkthrough"
  },
  {
    id: 296,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "Cyberpsycho Sighting: Phantom of Night City",
    location: "City Center – Corpo Plaza",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: Norio Akuhara, a masked corporate stalker. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20Phantom%20of%20Night%20City%20walkthrough"
  },
  {
    id: 297,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "Cyberpsycho Sighting: On Deaf Ears",
    location: "City Center – Downtown",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: Cedric Muller, deafened and enraged by implants. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20On%20Deaf%20Ears%20walkthrough"
  },
  {
    id: 298,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Pacifica",
    title: "Cyberpsycho Sighting: Smoke on the Water",
    location: "Pacifica – Coastview",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: Diego Ramirez, holed up by the water. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20Smoke%20on%20the%20Water%20walkthrough"
  },
  {
    id: 299,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Pacifica",
    title: "Cyberpsycho Sighting: Lex Talionis",
    location: "Pacifica – Coastview",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: Ben Debaillon, dispensing violent 'justice'. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20Lex%20Talionis%20walkthrough"
  },
  {
    id: 300,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Heywood",
    title: "Cyberpsycho Sighting: Letter of the Law",
    location: "Heywood – Wellsprings",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: a rogue enforcer taking the law into his own hands. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20Letter%20of%20the%20Law%20walkthrough"
  },
  {
    id: 301,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Heywood",
    title: "Cyberpsycho Sighting: Seaside Cafe",
    location: "Heywood – Wellsprings",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: a cyberpsycho who turned a cafe into a bloodbath. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20Seaside%20Cafe%20walkthrough"
  },
  {
    id: 302,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "Cyberpsycho Sighting: Under the Bridge",
    location: "Santo Domingo – Arroyo",
    length: "short",
    difficulty: "Medium",
    reward: "Regina reward, non-lethal bonus, victim's shard",
    summary:
      "One of Night City's 17 cyberpsychos: Tamara Cosby, ambushing travelers under an overpass. Regina Jones wants them stopped — subdued rather than killed, if you can manage it.",
    aiTip:
      "Blunt weapons, short-circuit and reboot-optics quickhacks keep them alive for the non-lethal bonus. Read the victim's shard afterward for the tragic backstory.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Cyberpsycho%20Sighting%3A%20Under%20the%20Bridge%20walkthrough"
  },
  {
    id: 303,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Dogtown",
    title: "Phantom Liberty – Dog Eat Dog",
    location: "Dogtown",
    length: "medium",
    difficulty: "Medium",
    reward: "Songbird contact, Dogtown access",
    summary:
      "A mysterious netrunner, Songbird, pulls V into Dogtown to save the crashing spacecraft of NUSA President Rosalind Myers.",
    aiTip:
      "This opens the whole expansion. Explore Dogtown afterward — its vendors, drops, and airdrops are some of the best gear sources in the game.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Phantom%20Liberty%20%E2%80%93%20Dog%20Eat%20Dog%20walkthrough"
  },
  {
    id: 304,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Dogtown",
    title: "Phantom Liberty – Hole in the Sky",
    location: "Dogtown",
    length: "medium",
    difficulty: "High",
    reward: "President Myers rescued, Reed intel",
    summary:
      "V infiltrates the crashed Space Force One to extract President Myers from Kurt Hansen's Barghest soldiers.",
    aiTip:
      "Stealth is viable but Barghest hit hard — a well-armored, quickhack-ready build makes the extraction smoother.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Phantom%20Liberty%20%E2%80%93%20Hole%20in%20the%20Sky%20walkthrough"
  },
  {
    id: 305,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Dogtown",
    title: "Phantom Liberty – Spider and the Fly",
    location: "Dogtown",
    length: "long",
    difficulty: "High",
    reward: "Reed alliance, deeper Dogtown conspiracy",
    summary:
      "Teaming with FIA agent Solomon Reed, V works a black-tie gala to expose a mole and get closer to Hansen and Songbird's true plan.",
    aiTip:
      "The gala rewards a subtle approach and good dialogue reads — going loud spoils the intel you're there for.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Phantom%20Liberty%20%E2%80%93%20Spider%20and%20the%20Fly%20walkthrough"
  },
  {
    id: 306,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Dogtown",
    title: "Phantom Liberty – Lucretia My Reflection",
    location: "Dogtown",
    length: "long",
    difficulty: "High",
    reward: "Chimera boss defeated, Songbird's plan revealed",
    summary:
      "Chasing Songbird's promised cure, V and Reed confront the Chimera — Hansen's monstrous automated tank.",
    aiTip:
      "The Chimera fight punishes standing still; use cover, the environment, and status quickhacks to whittle its phases.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Phantom%20Liberty%20%E2%80%93%20Lucretia%20My%20Reflection%20walkthrough"
  },
  {
    id: 307,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Dogtown",
    title: "Phantom Liberty – The Killing Moon",
    location: "Dogtown / NUSA",
    length: "long",
    difficulty: "High",
    reward: "Phantom Liberty ending, Songbird's fate",
    summary:
      "The expansion's climax: V decides whether to hand Songbird to Reed and the NUSA or help her escape to the Moon.",
    aiTip:
      "This choice defines the entire Phantom Liberty ending — and one path unlocks a very different fate for V in the base game. Choose deliberately.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Phantom%20Liberty%20%E2%80%93%20The%20Killing%20Moon%20walkthrough"
  },
  {
    id: 308,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Dogtown",
    title: "Phantom Liberty Gig: Baby Let Me Take You",
    location: "Dogtown",
    length: "short",
    difficulty: "Medium",
    reward: "Mr. Hands payout, Dogtown reputation",
    summary:
      "Fixer Mr. Hands sends V on a Dogtown gig navigating the district's shifting power players.",
    aiTip:
      "Mr. Hands' Dogtown gigs often reward a diplomatic touch — hear people out before drawing iron.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Phantom%20Liberty%20Gig%3A%20Baby%20Let%20Me%20Take%20You%20walkthrough"
  },
  {
    id: 309,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Dogtown",
    title: "Phantom Liberty: Black Steel in the Hour of Chaos",
    location: "Dogtown",
    length: "medium",
    difficulty: "High",
    reward: "Reed/Songbird story branch, unique rewards",
    summary:
      "A pivotal Phantom Liberty side operation that deepens the Reed and Songbird conflict and tests where V's loyalties lie.",
    aiTip:
      "Your earlier Dogtown choices echo here — play it consistent with the ending you're aiming for.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Phantom%20Liberty%3A%20Black%20Steel%20in%20the%20Hour%20of%20Chaos%20walkthrough"
  },
  {
    id: 310,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Nibel",
    chapter: 1,
    title: "Chapter 1: Fall of a Hero",
    location: "Nibelheim (Flashback)",
    length: "medium",
    difficulty: "Low",
    reward: "Main story progression, new region/party abilities",
    summary:
      "The game opens with the fateful Nibelheim flashback — Cloud and Sephiroth's mission to the reactor, and the truth Cloud has buried.",
    aiTip:
      "Pay attention to the framing; this flashback is the emotional and thematic anchor for everything Rebirth builds toward.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Chapter%201%3A%20Fall%20of%20a%20Hero%20walkthrough"
  },
  {
    id: 311,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    chapter: 2,
    title: "Chapter 2: A New Journey Begins",
    location: "Kalm & the Grasslands",
    length: "medium",
    difficulty: "Low",
    reward: "Main story progression, new region/party abilities",
    summary:
      "The party leaves Midgar behind and reaches Kalm, opening the sprawling Grasslands — Rebirth's first open region with chocobos, towers, and Odd Jobs.",
    aiTip:
      "Unlock the region's chocobo and scan the World Intel towers early; it makes every later objective faster.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Chapter%202%3A%20A%20New%20Journey%20Begins%20walkthrough"
  },
  {
    id: 312,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    chapter: 3,
    title: "Chapter 3: Deeper into Darkness",
    location: "Mythril Mine & the road to Junon",
    length: "medium",
    difficulty: "Medium",
    reward: "Main story progression, new region/party abilities",
    summary:
      "The group cuts through the Mythril Mine, tangling with the Turks and a certain mysterious swordsman on the way to the coast.",
    aiTip:
      "Stock up before the mine — the boss encounters here reward a balanced party and elemental materia.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Chapter%203%3A%20Deeper%20into%20Darkness%20walkthrough"
  },
  {
    id: 313,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Junon",
    chapter: 4,
    title: "Chapter 4: Dawn of a New Era",
    location: "Junon Region",
    length: "medium",
    difficulty: "Medium",
    reward: "Main story progression, new region/party abilities",
    summary:
      "Arrival in the Junon region: military spectacle, the coastal plains, and a fresh batch of Odd Jobs and minigames.",
    aiTip:
      "The Junon parade minigame is coming — practice your button timing, and don't rush past the region's side content.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Chapter%204%3A%20Dawn%20of%20a%20New%20Era%20walkthrough"
  },
  {
    id: 314,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Junon",
    chapter: 5,
    title: "Chapter 5: Blood in the Water",
    location: "Junon & the Shinra transport",
    length: "medium",
    difficulty: "Medium",
    reward: "Main story progression, new region/party abilities",
    summary:
      "The party boards Shinra transport across the sea, with tensions high and Sephiroth's shadow never far behind.",
    aiTip:
      "A more linear, story-heavy chapter — enjoy the character moments and the shipboard set pieces.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Chapter%205%3A%20Blood%20in%20the%20Water%20walkthrough"
  },
  {
    id: 315,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Corel",
    chapter: 6,
    title: "Chapter 6: Fool's Paradise",
    location: "Costa del Sol",
    length: "medium",
    difficulty: "Medium",
    reward: "Main story progression, new region/party abilities",
    summary:
      "The resort town of Costa del Sol offers a rare beach holiday — swimwear, minigames, and the calm before the storm.",
    aiTip:
      "Lean into the minigames here (they feed trophies and rewards). It's the lightest chapter, so soak it up.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Chapter%206%3A%20Fool's%20Paradise%20walkthrough"
  },
  {
    id: 316,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Corel",
    chapter: 7,
    title: "Chapter 7: Those Left Behind",
    location: "Corel Region",
    length: "medium",
    difficulty: "Medium",
    reward: "Main story progression, new region/party abilities",
    summary:
      "The Corel region opens up: desert prison, dustbowl, and the shadow of Barret and Dyne's shared past.",
    aiTip:
      "Barret's backstory pays off emotionally here — do the Corel Odd Jobs to strengthen party bonds before the Gold Saucer.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Chapter%207%3A%20Those%20Left%20Behind%20walkthrough"
  },
  {
    id: 317,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Corel",
    chapter: 8,
    title: "Chapter 8: All That Glitters",
    location: "Gold Saucer & Corel",
    length: "medium",
    difficulty: "Medium",
    reward: "Main story progression, new region/party abilities",
    summary:
      "The dazzling Gold Saucer amusement park — and the wrenching story of Dyne — collide in one of the game's biggest chapters.",
    aiTip:
      "Save eddies/GP for the arcade. The Dyne confrontation is a major story and combat beat; come prepared.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Chapter%208%3A%20All%20That%20Glitters%20walkthrough"
  },
  {
    id: 318,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Gongaga",
    chapter: 9,
    title: "Chapter 9: The Planet Stirs",
    location: "Gongaga Region",
    length: "medium",
    difficulty: "Medium",
    reward: "Main story progression, new region/party abilities",
    summary:
      "The lush, mushroom-filled Gongaga jungle hides Zack's hometown, the Turks, and a reactor meltdown's legacy.",
    aiTip:
      "Gongaga's dense terrain makes traversal tricky — use the region's springs and chocobo to reach hidden Odd Jobs.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Chapter%209%3A%20The%20Planet%20Stirs%20walkthrough"
  },
  {
    id: 319,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Cosmo Canyon",
    chapter: 10,
    title: "Chapter 10: Watcher of the Vale",
    location: "Cosmo Canyon",
    length: "medium",
    difficulty: "Medium",
    reward: "Main story progression, new region/party abilities",
    summary:
      "Red XIII comes home to Cosmo Canyon, the spiritual heart of the Planet, where the party learns about the Lifestream.",
    aiTip:
      "Red XIII's arc peaks here. Bonds of Trust and the other Cosmo Odd Jobs deepen relationships worth investing in.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Chapter%2010%3A%20Watcher%20of%20the%20Vale%20walkthrough"
  },
  {
    id: 320,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Nibel",
    chapter: 11,
    title: "Chapter 11: The Long Shadow of Shinra",
    location: "Nibel Region & Nibelheim",
    length: "medium",
    difficulty: "Medium",
    reward: "Main story progression, new region/party abilities",
    summary:
      "Return to Nibelheim in the present day, where the truth of Cloud's memories and Shinra's experiments come to a head.",
    aiTip:
      "The present-day Nibelheim reframes the opening flashback — go slow and read the environmental storytelling.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Chapter%2011%3A%20The%20Long%20Shadow%20of%20Shinra%20walkthrough"
  },
  {
    id: 321,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Corel",
    chapter: 12,
    title: "Chapter 12: A Golden Key",
    location: "Gold Saucer (endgame hub)",
    length: "medium",
    difficulty: "Medium",
    reward: "Main story progression, new region/party abilities",
    summary:
      "The party regroups at the Gold Saucer for the run-up to the finale, unlocking the last wave of Odd Jobs across every region.",
    aiTip:
      "This is the point of no return at chapter's end. Mop up remaining Odd Jobs and World Intel now — several only open in Chapter 12.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Chapter%2012%3A%20A%20Golden%20Key%20walkthrough"
  },
  {
    id: 322,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Nibel",
    chapter: 13,
    title: "Chapter 13: Where Angels Fear to Tread",
    location: "Temple of the Ancients",
    length: "long",
    difficulty: "High",
    reward: "Main story progression, new region/party abilities",
    summary:
      "The Temple of the Ancients: shifting geometry, ancient guardians, and a confrontation that changes everything.",
    aiTip:
      "A puzzle-and-boss gauntlet. Bring a healer-focused materia setup — the temple's encounters escalate quickly.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Chapter%2013%3A%20Where%20Angels%20Fear%20to%20Tread%20walkthrough"
  },
  {
    id: 323,
    type: "main",
    game: "Final Fantasy VII Rebirth",
    region: "Nibel",
    chapter: 14,
    title: "Chapter 14: End of the World",
    location: "The Forgotten Capital",
    length: "long",
    difficulty: "High",
    reward: "Main story progression, new region/party abilities",
    summary:
      "Rebirth's climactic finale at the Forgotten Capital — the destined encounter fans have waited decades to see reinterpreted.",
    aiTip:
      "Come with your strongest builds and summons. This multi-phase finale is the toughest test in the main story.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Chapter%2014%3A%20End%20of%20the%20World%20walkthrough"
  },
  {
    id: 324,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    chapter: 2,
    title: "A Rare Card Lost",
    location: "Grasslands – Bill's Ranch",
    length: "medium",
    difficulty: "Low",
    reward: "Queen's Blood card, Chadley intel",
    summary:
      "A ranch hand has lost a prized Queen's Blood card. Track it down across the Grasslands to add it to your deck.",
    aiTip:
      "Great early Queen's Blood card — grab it before the tournaments to strengthen your deck.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20A%20Rare%20Card%20Lost%20walkthrough"
  },
  {
    id: 325,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Junon",
    chapter: 4,
    title: "Stuck in a Rut",
    location: "Junon – Under Junon",
    length: "medium",
    difficulty: "Low",
    reward: "Chocobo gear, region traversal boost",
    summary:
      "Help a rancher wrangle and calm the local chocobos so they'll cooperate with travelers.",
    aiTip:
      "Completing this smooths chocobo traversal in Junon — do it early to speed up World Intel.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Stuck%20in%20a%20Rut%20walkthrough"
  },
  {
    id: 326,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Junon",
    chapter: 4,
    title: "Dreaming of Blue Skies",
    location: "Junon – Coastal Junon",
    length: "medium",
    difficulty: "Low",
    reward: "Party bond, accessory reward",
    summary:
      "A wistful local asks the party for help chasing a small, hopeful dream against Junon's militarized backdrop.",
    aiTip:
      "A character-driven quest — the choices here nudge party affinity for the Gold Saucer date.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Dreaming%20of%20Blue%20Skies%20walkthrough"
  },
  {
    id: 327,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Junon",
    chapter: 4,
    title: "Calling All Frogs",
    location: "Junon – Wetlands",
    length: "medium",
    difficulty: "Low",
    reward: "Enemy intel, materia reward",
    summary:
      "The wetlands' frog population has gone haywire. Investigate the cause and restore the balance.",
    aiTip:
      "Watch for Toad status during the frog encounters — bring a Remedy or Esuna to counter it.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Calling%20All%20Frogs%20walkthrough"
  },
  {
    id: 328,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Corel",
    chapter: 6,
    title: "Rendezvous in Costa del Sol",
    location: "Corel – Costa del Sol",
    length: "medium",
    difficulty: "Low",
    reward: "Party date-scene flag, accessory",
    summary:
      "Costa del Sol's holiday mood sets up a lighthearted rendezvous quest full of beach-town charm.",
    aiTip:
      "Feeds into the resort chapter's relationship beats — pick the dialogue that matches who you want to romance.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Rendezvous%20in%20Costa%20del%20Sol%20walkthrough"
  },
  {
    id: 329,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Corel",
    chapter: 6,
    title: "Bodybuilders in a Bind",
    location: "Corel – Costa del Sol",
    length: "medium",
    difficulty: "Low",
    reward: "Squats minigame reward, stat boost",
    summary:
      "The local muscleheads challenge the party to prove their strength with a squats showdown.",
    aiTip:
      "It's a rhythm/timing minigame — watch the pattern and don't burn out early.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Bodybuilders%20in%20a%20Bind%20walkthrough"
  },
  {
    id: 330,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Corel",
    chapter: 7,
    title: "Of Robed Men and Ransoms",
    location: "Corel – The Dustbowl",
    length: "medium",
    difficulty: "Low",
    reward: "Story lore, materia reward",
    summary:
      "Reports of black-robed men lead the party into a ransom scheme tied to Sephiroth's followers.",
    aiTip:
      "Ties into the game's central mystery — read the notes you recover for foreshadowing.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Of%20Robed%20Men%20and%20Ransoms%20walkthrough"
  },
  {
    id: 331,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Corel",
    chapter: 7,
    title: "Sand and Circuses",
    location: "Corel – The Dustbowl (Prison)",
    length: "medium",
    difficulty: "Medium",
    reward: "Combat challenge reward, party bond",
    summary:
      "The desert prison runs a brutal arena. Fight through its circus of combat trials for the crowd — and a payout.",
    aiTip:
      "A combat-heavy Odd Job; bring healing and exploit each opponent's elemental weakness.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Sand%20and%20Circuses%20walkthrough"
  },
  {
    id: 332,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Gongaga",
    chapter: 9,
    title: "Missing: Mr. Birdie",
    location: "Gongaga – Village",
    length: "medium",
    difficulty: "Low",
    reward: "Chocobo lure, region reward",
    summary:
      "A villager's beloved bird has vanished into the Gongaga jungle. Follow the clues to bring Mr. Birdie home.",
    aiTip:
      "Use your chocobo's scent-tracking to follow the trail through the dense foliage.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Missing%3A%20Mr.%20Birdie%20walkthrough"
  },
  {
    id: 333,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Gongaga",
    chapter: 9,
    title: "The Pursuit of Perfection",
    location: "Gongaga – Village",
    length: "medium",
    difficulty: "Low",
    reward: "Crafting materials, accessory",
    summary:
      "A perfectionist craftsman needs rare Gongaga ingredients to complete his flawless creation.",
    aiTip:
      "Gather the exact items requested — partial deliveries won't satisfy this client.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20The%20Pursuit%20of%20Perfection%20walkthrough"
  },
  {
    id: 334,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Gongaga",
    chapter: 9,
    title: "O Chicken, Where Art Thou",
    location: "Gongaga – Jungle",
    length: "medium",
    difficulty: "Low",
    reward: "Party bond, item reward",
    summary:
      "Round up escaped fowl scattered across the treacherous Gongaga jungle paths.",
    aiTip:
      "Chocobo traversal and the region's springs make chasing down the strays far easier.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20O%20Chicken%2C%20Where%20Art%20Thou%20walkthrough"
  },
  {
    id: 335,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Gongaga",
    chapter: 9,
    title: "Teach Me, Great Warrior",
    location: "Gongaga – Village",
    length: "medium",
    difficulty: "Low",
    reward: "Yuffie bond, combat technique",
    summary:
      "Yuffie is roped into proving herself to an aspiring young 'warrior' in Gongaga, with comedic results.",
    aiTip:
      "A Yuffie-focused quest that strengthens her party bond — great for the affinity system.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Teach%20Me%2C%20Great%20Warrior%20walkthrough"
  },
  {
    id: 336,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Gongaga",
    chapter: 9,
    title: "The Spice of Life",
    location: "Gongaga – Cissnei's House",
    length: "medium",
    difficulty: "Low",
    reward: "Cooking recipe, Magonga Mushrooms",
    summary:
      "Cissnei needs rare Magonga Mushrooms to finish a dish. Sniff them out with your chocobo across the jungle.",
    aiTip:
      "Hold Up on the d-pad and follow the chocobo's nose to the three mushrooms — they're easy to miss.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20The%20Spice%20of%20Life%20walkthrough"
  },
  {
    id: 337,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Cosmo Canyon",
    chapter: 10,
    title: "Bonds of Trust",
    location: "Cosmo Canyon – Canyon paths",
    length: "medium",
    difficulty: "Low",
    reward: "Crescent Sickle (Yuffie weapon), Chocobo",
    summary:
      "Earn the trust of Cosmo Canyon's people and its wildlife to unlock the region's mountain chocobo.",
    aiTip:
      "Rewards Yuffie's Crescent Sickle weapon — a strong pickup, so don't skip this one.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Bonds%20of%20Trust%20walkthrough"
  },
  {
    id: 338,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Cosmo Canyon",
    chapter: 10,
    title: "Absence of a Sign",
    location: "Cosmo Canyon – Observatory",
    length: "medium",
    difficulty: "Low",
    reward: "Star-chart lore, materia",
    summary:
      "Help restore the canyon's astronomical markers, tying into Cosmo Canyon's cosmology and the Planet's story.",
    aiTip:
      "Read the observatory lore — it enriches Red XIII's chapter and the game's themes.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Absence%20of%20a%20Sign%20walkthrough"
  },
  {
    id: 339,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Cosmo Canyon",
    chapter: 10,
    title: "From Whence Life Flows",
    location: "Cosmo Canyon – Lifestream site",
    length: "medium",
    difficulty: "Low",
    reward: "Healing materia, story lore",
    summary:
      "Investigate a sacred Lifestream-touched site and the strange phenomena disturbing it.",
    aiTip:
      "A lore-rich quest about the Lifestream — the reward materia suits a support build.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20From%20Whence%20Life%20Flows%20walkthrough"
  },
  {
    id: 340,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Cosmo Canyon",
    chapter: 10,
    title: "Promises to Keep",
    location: "Cosmo Canyon – Village",
    length: "medium",
    difficulty: "Low",
    reward: "Party bond, accessory reward",
    summary:
      "An old promise resurfaces in Cosmo Canyon, asking the party to honor a departed friend's wish.",
    aiTip:
      "An emotional beat that boosts party affinity — worth doing before the chapter's finale.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Promises%20to%20Keep%20walkthrough"
  },
  {
    id: 341,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Nibel",
    chapter: 11,
    title: "Esoteric Secrets of the Elders",
    location: "Nibel – Mt. Nibel",
    length: "medium",
    difficulty: "Medium",
    reward: "Rare materia, combat challenge",
    summary:
      "Ancient trials hidden on Mt. Nibel test the party with esoteric puzzles and guardian battles.",
    aiTip:
      "Bring elemental variety — the guardians rotate weaknesses across the trial's stages.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Esoteric%20Secrets%20of%20the%20Elders%20walkthrough"
  },
  {
    id: 342,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Nibel",
    chapter: 11,
    title: "Tides of War and Worry",
    location: "Nibel / Junon coast",
    length: "medium",
    difficulty: "Low",
    reward: "Party bond, accessory",
    summary:
      "Wartime anxieties ripple through the region; help those caught between Shinra's machine and daily survival.",
    aiTip:
      "A grounded, human-scale quest amid the escalating conflict — good affinity gains.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Tides%20of%20War%20and%20Worry%20walkthrough"
  },
  {
    id: 343,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    chapter: 12,
    title: "Hustle and Grind",
    location: "Grasslands (revisit)",
    length: "medium",
    difficulty: "Medium",
    reward: "Endgame materia, combat reward",
    summary:
      "A tougher Chapter 12 job sends the party back to the Grasslands for high-stakes work against upgraded foes.",
    aiTip:
      "Enemies are stronger in the endgame revisit — bring your Chapter 12 builds and summons.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Hustle%20and%20Grind%20walkthrough"
  },
  {
    id: 344,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Junon",
    chapter: 12,
    title: "Beneath Still Waters",
    location: "Junon – Wetlands",
    length: "medium",
    difficulty: "Low",
    reward: "Rare item, exploration reward",
    summary:
      "A late-game mystery draws the party to Junon's waters to uncover what lurks beneath the surface.",
    aiTip:
      "Requires endgame traversal upgrades — return once you can reach the deeper areas.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Beneath%20Still%20Waters%20walkthrough"
  },
  {
    id: 345,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Corel",
    chapter: 12,
    title: "Trouble in Paradise",
    location: "Corel – Costa del Sol",
    length: "medium",
    difficulty: "Low",
    reward: "Costa del Sol payoff, accessory",
    summary:
      "The resort's earlier lightheartedness sours as an endgame threat reaches Costa del Sol.",
    aiTip:
      "A callback quest — earlier Costa del Sol choices color how this one resolves.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Trouble%20in%20Paradise%20walkthrough"
  },
  {
    id: 346,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Gongaga",
    chapter: 12,
    title: "Woodland Vigil",
    location: "Gongaga – Jungle",
    length: "medium",
    difficulty: "Low",
    reward: "Rare crafting mats, materia",
    summary:
      "Stand watch over the Gongaga woodland against an escalating endgame incursion.",
    aiTip:
      "A defensive combat Odd Job; area-of-effect materia helps against the waves.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Woodland%20Vigil%20walkthrough"
  },
  {
    id: 347,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Cosmo Canyon",
    chapter: 12,
    title: "Victim of Circumstance",
    location: "Cosmo Canyon",
    length: "medium",
    difficulty: "Low",
    reward: "Magnify Materia, Yuffie bond",
    summary:
      "An endgame Cosmo Canyon job with real consequences, rewarding one of the game's best support materia.",
    aiTip:
      "Magnify Materia is a top-tier reward — pair it with Heal/Barrier to buff the whole party at once.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Victim%20of%20Circumstance%20walkthrough"
  },
  {
    id: 348,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Nibel",
    chapter: 12,
    title: "Lament of the Damned",
    location: "Nibel – Mt. Nibel",
    length: "medium",
    difficulty: "Medium",
    reward: "Art of Swordplay Vol. VI, Barret bond, Hojo's Exams",
    summary:
      "A grim Chapter 12 quest on Mt. Nibel that unlocks Hojo's combat exams and strengthens Barret's resolve.",
    aiTip:
      "Completing it unlocks Hojo's Exams (advanced combat challenges) and grants a Manuscript for a Barret upgrade.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Lament%20of%20the%20Damned%20walkthrough"
  },
  {
    id: 349,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "White Orchard",
    title: "On Death's Bed",
    location: "White Orchard",
    length: "short",
    difficulty: "Low",
    reward: "Herbalist alliance, crafting supplies",
    summary:
      "A poisoned man clings to life; Geralt gathers the herbs for a cure — or lets nature take its course.",
    aiTip:
      "Save him for a friendly herbalist vendor; the choice has a small karmic echo.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20On%20Death's%20Bed%20walkthrough"
  },
  {
    id: 350,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "White Orchard",
    title: "Twisted Firestarter",
    location: "White Orchard",
    length: "short",
    difficulty: "Low",
    reward: "Coin, blacksmith access",
    summary:
      "Geralt investigates who torched the local smith's forge in sleepy White Orchard.",
    aiTip:
      "A gentle intro contract — follow the scorch marks with your Witcher Senses.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Twisted%20Firestarter%20walkthrough"
  },
  {
    id: 351,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "White Orchard",
    title: "Contract: Devil by the Well",
    location: "White Orchard",
    length: "short",
    difficulty: "Medium",
    reward: "Silver, noonwraith trophy",
    summary:
      "A noonwraith haunts an abandoned village well. Geralt must lure and banish the vengeful spirit.",
    aiTip:
      "Craft Specter Oil and use Yrden to make the noonwraith corporeal before striking.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Contract%3A%20Devil%20by%20the%20Well%20walkthrough"
  },
  {
    id: 352,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "A Princess in Distress",
    location: "Velen",
    length: "short",
    difficulty: "Low",
    reward: "Baron questline progress",
    summary:
      "Part of the Bloody Baron saga: help track the missing Anna and uncover the family's dark story.",
    aiTip:
      "Ties directly into the Baron's main arc — do it before leaving Velen.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20A%20Princess%20in%20Distress%20walkthrough"
  },
  {
    id: 353,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "The Merry Widow (Contract)",
    location: "Velen",
    length: "short",
    difficulty: "Medium",
    reward: "Coin, grave hag trophy",
    summary:
      "Villagers near a crossroads are being slain by a grave hag lurking among the dead.",
    aiTip:
      "Grave hags resist most signs — use Golden Oriole and hit hard when it lunges.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20The%20Merry%20Widow%20(Contract)%20walkthrough"
  },
  {
    id: 354,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Hunting a Witch",
    location: "Velen",
    length: "short",
    difficulty: "Low",
    reward: "Keira Metz alliance",
    summary:
      "Follow the trail of the sorceress Keira Metz through the swamps of Velen.",
    aiTip:
      "Reading the hidden notes reveals Keira's true motives before you meet her.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Hunting%20a%20Witch%20walkthrough"
  },
  {
    id: 355,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Wandering in the Dark",
    location: "Velen",
    length: "medium",
    difficulty: "Medium",
    reward: "Keira questline, elven ruins loot",
    summary:
      "Geralt and Keira delve into an ancient elven ruin sealed for centuries, chased by a monstrous gargoyle.",
    aiTip:
      "Bring a strong sword; the Caretaker-style guardians here hit like trucks.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Wandering%20in%20the%20Dark%20walkthrough"
  },
  {
    id: 356,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Magic Lamp",
    location: "Velen",
    length: "short",
    difficulty: "Low",
    reward: "Keira questline, sealed vault",
    summary:
      "Use a captured djinn's lamp to breach a mage's sealed sanctum during Keira's quest.",
    aiTip:
      "Equip the lamp and use it on the shimmering barriers to press forward.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Magic%20Lamp%20walkthrough"
  },
  {
    id: 357,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Contract: Woodland Beast",
    location: "Velen",
    length: "short",
    difficulty: "Medium",
    reward: "Coin, monster trophy",
    summary:
      "A leshen terrorizes a superstitious hamlet that half-worships it.",
    aiTip:
      "Torch the leshen's totems first, then bring Relict Oil and Igni.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Contract%3A%20Woodland%20Beast%20walkthrough"
  },
  {
    id: 358,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "Novigrad Dreaming",
    location: "Novigrad",
    length: "short",
    difficulty: "Low",
    reward: "Corinne Tilly seer contact",
    summary:
      "A house is said to be haunted; Geralt investigates the tragic ghost of a devoted dog and its master.",
    aiTip:
      "A short, poignant contract — follow the flowers to piece the story together.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Novigrad%20Dreaming%20walkthrough"
  },
  {
    id: 359,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "The Play's the Thing",
    location: "Novigrad",
    length: "medium",
    difficulty: "Low",
    reward: "Priscilla & Dandelion arc, unique scene",
    summary:
      "Geralt moonlights as an actor in Irina's theatre to draw out a lead on Dandelion.",
    aiTip:
      "Ham it up on stage — the performance choices are pure delight and affect the scene.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20The%20Play's%20the%20Thing%20walkthrough"
  },
  {
    id: 360,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "A Poet Under Pressure",
    location: "Novigrad",
    length: "medium",
    difficulty: "Medium",
    reward: "Dandelion rescued",
    summary:
      "Storm the Whoreson Junior's operation to rescue the captured bard Dandelion.",
    aiTip:
      "Bring good armor; the hideout is a tough multi-wave fight.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20A%20Poet%20Under%20Pressure%20walkthrough"
  },
  {
    id: 361,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "Cabaret",
    location: "Novigrad",
    length: "short",
    difficulty: "Low",
    reward: "Coin, Priscilla's cabaret opens",
    summary:
      "Help Dandelion turn a rundown building into the Chameleon cabaret with an eventful 'date'.",
    aiTip:
      "A charming lighthearted quest — enjoy the banter, low combat.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Cabaret%20walkthrough"
  },
  {
    id: 362,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "Count Reuven's Treasure",
    location: "Novigrad",
    length: "long",
    difficulty: "Medium",
    reward: "Triss arc, Sigismund Dijkstra ally",
    summary:
      "Investigate the theft of Dijkstra's fortune, uncovering the pogrom against Novigrad's mages.",
    aiTip:
      "The bathhouse ambush is a set-piece fight — pop Quen before it starts.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Count%20Reuven's%20Treasure%20walkthrough"
  },
  {
    id: 363,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "Redania's Most Wanted",
    location: "Novigrad",
    length: "short",
    difficulty: "Low",
    reward: "Triss questline progress",
    summary:
      "Help Triss and the hunted mages of Novigrad evade the witch hunters.",
    aiTip:
      "Ties into the Triss romance path — pursue it if you want that ending.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Redania's%20Most%20Wanted%20walkthrough"
  },
  {
    id: 364,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "Contract: Deadly Delights",
    location: "Novigrad",
    length: "short",
    difficulty: "Medium",
    reward: "Coin, katakan trophy",
    summary:
      "A string of romantic rendezvous end in death — a katakan vampire is hunting lovers.",
    aiTip:
      "Craft Vampire Oil and Black Blood; the katakan turns invisible, so use Yrden.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Contract%3A%20Deadly%20Delights%20walkthrough"
  },
  {
    id: 365,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "Honor Among Thieves",
    location: "Novigrad",
    length: "medium",
    difficulty: "Medium",
    reward: "Triss arc, mage-smuggling caper",
    summary:
      "Help Triss run a daring operation to smuggle mages out of Novigrad by sea.",
    aiTip:
      "The auction house infiltration rewards patience over brute force.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Honor%20Among%20Thieves%20walkthrough"
  },
  {
    id: 366,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "Echoes of the Past",
    location: "Skellige",
    length: "medium",
    difficulty: "Medium",
    reward: "Ciri flashback, Skjall's tale",
    summary:
      "Follow Ciri's trail on Skellige and learn of the villager Skjall who sheltered her.",
    aiTip:
      "The Wild Hunt flashback battle is scripted — focus on survival.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Echoes%20of%20the%20Past%20walkthrough"
  },
  {
    id: 367,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "The Last Trial",
    location: "Skellige",
    length: "short",
    difficulty: "Medium",
    reward: "Ciri questline progress",
    summary:
      "Ciri must complete a Skellige rite to be recognized — with the Wild Hunt closing in.",
    aiTip:
      "A story-driven quest with a memorable Ciri-playable segment.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20The%20Last%20Trial%20walkthrough"
  },
  {
    id: 368,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "Practicum in Advanced Alchemy",
    location: "Skellige",
    length: "short",
    difficulty: "Low",
    reward: "Alchemy formula, coin",
    summary:
      "Investigate a mage's mysterious death at a coastal alchemical lab.",
    aiTip:
      "Piece together the reagents with Witcher Senses to reconstruct the accident.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Practicum%20in%20Advanced%20Alchemy%20walkthrough"
  },
  {
    id: 369,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "Contract: The White Lady",
    location: "Skellige",
    length: "short",
    difficulty: "Medium",
    reward: "Coin, wraith trophy",
    summary:
      "A pale spirit haunts a Skellige homestead, and the truth is a family tragedy.",
    aiTip:
      "Specter Oil and Yrden as always for wraith-type foes.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Contract%3A%20The%20White%20Lady%20walkthrough"
  },
  {
    id: 370,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "Contract: Skellige's Most Wanted",
    location: "Skellige",
    length: "medium",
    difficulty: "High",
    reward: "Coin, arachas trophy",
    summary:
      "A bounty on a nest of monstrous arachasae draws Geralt into the mountains.",
    aiTip:
      "Bring Insectoid Oil and dodge the ranged spit before closing in.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Contract%3A%20Skellige's%20Most%20Wanted%20walkthrough"
  },
  {
    id: 371,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "The Nameless",
    location: "Skellige",
    length: "medium",
    difficulty: "Medium",
    reward: "Wild Hunt lore, Craite alliance",
    summary:
      "A Skellige mystery ties an amnesiac stranger to the wider Wild Hunt saga.",
    aiTip:
      "Read the environmental clues; the payoff informs the main story.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20The%20Nameless%20walkthrough"
  },
  {
    id: 372,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    title: "Ugly Baby",
    location: "Velen",
    length: "medium",
    difficulty: "Medium",
    reward: "Uma's curse lead, allies gather",
    summary:
      "Bring the cursed 'Uma' to Kaer Morhen and gather the witchers to attempt a brutal curse-breaking.",
    aiTip:
      "Stock potions — the Trial of the Grasses ritual triggers a tough fight.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Ugly%20Baby%20walkthrough"
  },
  {
    id: 373,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Dead Man's Party",
    location: "Velen",
    length: "medium",
    difficulty: "Medium",
    reward: "Hearts of Stone arc, Vlodimir body-share",
    summary:
      "Possessed by the ghost Vlodimir, Geralt crashes a wedding in the wildest quest in the game.",
    aiTip:
      "Just go with it — the outrageous choices are the whole point and mostly harmless.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Dead%20Man's%20Party%20walkthrough"
  },
  {
    id: 374,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Open Sesame!",
    location: "Velen",
    length: "long",
    difficulty: "High",
    reward: "Hearts of Stone heist, Ofieri gear",
    summary:
      "Pull off an elaborate auction-house heist for Olgierd's cursed employer, Gaunter O'Dimm.",
    aiTip:
      "The vault has a fistfight and a puzzle — prep both combat and patience.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Open%20Sesame!%20walkthrough"
  },
  {
    id: 375,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Scenes From a Marriage",
    location: "Velen",
    length: "long",
    difficulty: "Medium",
    reward: "Iris von Everec's painted world",
    summary:
      "Enter the haunted painted world of Iris von Everec to reunite her sundered memories.",
    aiTip:
      "Your choices here decide Iris's fate and Olgierd's heart — read the rooms.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Scenes%20From%20a%20Marriage%20walkthrough"
  },
  {
    id: 376,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Toussaint",
    title: "The Beast of Toussaint",
    location: "Toussaint",
    length: "medium",
    difficulty: "Medium",
    reward: "Blood and Wine main arc start",
    summary:
      "A monstrous killer stalks the fairy-tale duchy of Toussaint; Geralt is summoned to hunt it.",
    aiTip:
      "Kicks off the Blood and Wine expansion — expect a long, rich storyline.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20The%20Beast%20of%20Toussaint%20walkthrough"
  },
  {
    id: 377,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Toussaint",
    title: "La Cage au Fou",
    location: "Toussaint",
    length: "medium",
    difficulty: "Medium",
    reward: "Bruxa mystery, Blood and Wine progress",
    summary:
      "Investigate a grisly killing tied to the elusive vampire threat haunting Beauclair.",
    aiTip:
      "Vampire Oil and Black Blood are essential against the higher vampires.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20La%20Cage%20au%20Fou%20walkthrough"
  },
  {
    id: 378,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Toussaint",
    title: "Where the Cat and Wolf Play",
    location: "Toussaint",
    length: "medium",
    difficulty: "Medium",
    reward: "Village tragedy, moral choice",
    summary:
      "A witcher of the Cat School has slaughtered a village; Geralt uncovers the grim full story.",
    aiTip:
      "There's a lone survivor — how you handle her is the quest's real weight.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Where%20the%20Cat%20and%20Wolf%20Play%20walkthrough"
  },
  {
    id: 379,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Toussaint",
    title: "Wine Wars: Consorting",
    location: "Toussaint",
    length: "short",
    difficulty: "Low",
    reward: "Vineyard reward, coin",
    summary:
      "Help feuding Toussaint vineyards outmaneuver each other in a series of estate errands.",
    aiTip:
      "Completing the Wine Wars chain unlocks discounts and a tidy sum.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Wine%20Wars%3A%20Consorting%20walkthrough"
  },
  {
    id: 380,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Contract: The Creature from the Oxenfurt Forest",
    location: "Velen",
    length: "short",
    difficulty: "Medium",
    reward: "Coin, fiend trophy",
    summary:
      "A fiend terrorizes travelers in the woods near Oxenfurt (Hearts of Stone).",
    aiTip:
      "Relict Oil, Quen, and dodging its charge — the fiend's confusion glow is deadly.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Contract%3A%20The%20Creature%20from%20the%20Oxenfurt%20Forest%20walkthrough"
  },
  {
    id: 381,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Toussaint",
    title: "Turn and Face the Strange",
    location: "Toussaint",
    length: "short",
    difficulty: "Low",
    reward: "Manor renovation, coin",
    summary:
      "Settle into Corvo Bianco vineyard and set its restoration in motion.",
    aiTip:
      "Invest in the vineyard upgrades — they grant real bonuses like the meditation bed buff.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Turn%20and%20Face%20the%20Strange%20walkthrough"
  },
  {
    id: 382,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Toussaint",
    title: "Big Game Hunter",
    location: "Toussaint",
    length: "short",
    difficulty: "Medium",
    reward: "Coin, kikimore trophy",
    summary:
      "Hunt a monstrous kikimore queen threatening Toussaint's countryside.",
    aiTip:
      "Insectoid Oil and dodge the burrow-and-lunge pattern.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Big%20Game%20Hunter%20walkthrough"
  },
  {
    id: 383,
    type: "main",
    game: "Horizon Forbidden West",
    region: "Sacred Lands",
    title: "Reach for the Stars",
    location: "The Sacred Lands",
    length: "medium",
    difficulty: "Medium",
    reward: "Story start, GAIA search begins",
    summary:
      "Aloy sets out west to recover a working copy of GAIA and stop the biosphere's collapse.",
    aiTip:
      "The opening region eases you into new gear and machines — grab the pullcaster and diving mask upgrades early.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Reach%20for%20the%20Stars%20walkthrough"
  },
  {
    id: 384,
    type: "main",
    game: "Horizon Forbidden West",
    region: "The Daunt",
    title: "To the Brink",
    location: "The Daunt",
    length: "medium",
    difficulty: "Medium",
    reward: "Chainscrape hub, embassy access",
    summary:
      "Aloy enters The Daunt to attend a tense embassy and secure passage deeper into the Forbidden West.",
    aiTip:
      "Chainscrape becomes an early hub — pick up its side quests before pushing on.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20To%20the%20Brink%20walkthrough"
  },
  {
    id: 385,
    type: "main",
    game: "Horizon Forbidden West",
    region: "The Daunt",
    title: "The Point of the Lance",
    location: "Barren Light",
    length: "medium",
    difficulty: "Medium",
    reward: "Tenakth alliance foothold",
    summary:
      "Aloy helps defend a Tenakth outpost, earning a foothold among the tribe.",
    aiTip:
      "A combat-focused chapter; learn to exploit machine components with the right ammo.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20The%20Point%20of%20the%20Lance%20walkthrough"
  },
  {
    id: 386,
    type: "main",
    game: "Horizon Forbidden West",
    region: "Sacred Lands",
    title: "Death's Door",
    location: "The Embassy / Spire",
    length: "long",
    difficulty: "High",
    reward: "GAIA sub-function lead",
    summary:
      "Aloy tracks the signal from the Spire, uncovering the scope of the western threat.",
    aiTip:
      "Story-heavy with a major reveal — stock resources before the finale stretch.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Death's%20Door%20walkthrough"
  },
  {
    id: 387,
    type: "main",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Gemini",
    location: "The Base",
    length: "long",
    difficulty: "High",
    reward: "GAIA restoration nears",
    summary:
      "Aloy pushes toward reuniting GAIA's functions as the Zeniths' plan accelerates.",
    aiTip:
      "A major story chapter; upgrade your best weapons before diving in.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Gemini%20walkthrough"
  },
  {
    id: 388,
    type: "main",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Singularity",
    location: "Zenith Stronghold",
    length: "long",
    difficulty: "High",
    reward: "Final confrontation, ending",
    summary:
      "The climactic assault on the Zeniths to secure the future of the biosphere.",
    aiTip:
      "The finale is a gauntlet — bring your strongest coils, potions, and elemental loadout.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Singularity%20walkthrough"
  },
  {
    id: 389,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Daunt",
    title: "The Twilight Path",
    location: "Chainscrape",
    length: "short",
    difficulty: "Low",
    reward: "Petra's cannon, unique weapon",
    summary:
      "Petra needs rare parts to build a machine-killing cannon; Aloy hunts them down.",
    aiTip:
      "Unlocks after The Bristlebacks — Petra's gear is worth the trip.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20The%20Twilight%20Path%20walkthrough"
  },
  {
    id: 390,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Sea of Sands",
    title: "Nights of Lights",
    location: "Scalding Spear",
    length: "short",
    difficulty: "Low",
    reward: "Old World ornament, collectible",
    summary:
      "Aloy helps Stemmur recover an Old World holiday ornament from the ruins of Las Vegas.",
    aiTip:
      "A charming errand with light puzzle-solving — follow the power cables.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Nights%20of%20Lights%20walkthrough"
  },
  {
    id: 391,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Shadow in the West",
    location: "Plainsong",
    length: "medium",
    difficulty: "Medium",
    reward: "Utaru clan aid, machine mystery",
    summary:
      "Investigate strange machine behavior threatening the peaceful Utaru of Plainsong.",
    aiTip:
      "Scan the affected machines to trace the corruption to its source.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Shadow%20in%20the%20West%20walkthrough"
  },
  {
    id: 392,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "In the Fog",
    location: "No Man's Land",
    length: "medium",
    difficulty: "Medium",
    reward: "Missing hunters found",
    summary:
      "Hunters have vanished into a fog-shrouded valley stalked by an unseen machine.",
    aiTip:
      "Bring cold/impact ammo — the culprit ambushes from concealment.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20In%20the%20Fog%20walkthrough"
  },
  {
    id: 393,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "A Hunt So Sweet",
    location: "Plainsong",
    length: "short",
    difficulty: "Low",
    reward: "Utaru delicacy, coin",
    summary:
      "Aloy helps gather ingredients for a prized Utaru delicacy amid roaming machines.",
    aiTip:
      "A relaxed gathering quest — a nice palate cleanser between story beats.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20A%20Hunt%20So%20Sweet%20walkthrough"
  },
  {
    id: 394,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Blood Choke",
    location: "The Grove",
    length: "medium",
    difficulty: "Medium",
    reward: "Tenakth rebel intel",
    summary:
      "Track down a Tenakth rebel cell operating in the borderlands.",
    aiTip:
      "Rebels use heavy weapons — knock them off overwatch positions with the ropecaster.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Blood%20Choke%20walkthrough"
  },
  {
    id: 395,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Seeds of the Past",
    location: "Plainsong",
    length: "medium",
    difficulty: "Medium",
    reward: "Utaru heritage, unique reward",
    summary:
      "Uncover an Utaru mystery tied to their song-fields and the machines that tend them.",
    aiTip:
      "Lore-rich and emotional — read the datapoints for the full picture.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Seeds%20of%20the%20Past%20walkthrough"
  },
  {
    id: 396,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Cause for Concern",
    location: "The Base",
    length: "short",
    difficulty: "Low",
    reward: "Companion bonding, base upgrade",
    summary:
      "A quiet moment with Aloy's allies at the Base reveals personal stakes.",
    aiTip:
      "A character quest that deepens your companions before the finale.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Cause%20for%20Concern%20walkthrough"
  },
  {
    id: 397,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Sea of Sands",
    title: "The Wound in the Land",
    location: "Cinnabar Sands",
    length: "medium",
    difficulty: "High",
    reward: "Corruption source neutralized",
    summary:
      "Aloy investigates a spreading blight of corrupted machines scarring the land.",
    aiTip:
      "Corrupted machines hit harder — bring purgewater and status resist.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20The%20Wound%20in%20the%20Land%20walkthrough"
  },
  {
    id: 398,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Cauldrons: Machine Overrides",
    location: "Multiple regions",
    length: "medium",
    difficulty: "Medium",
    reward: "New machine mounts and overrides",
    summary:
      "Delve into the West's Cauldrons (GEMINI, IOTA, KAPPA, TAU, CHI) to unlock overrides for more machines.",
    aiTip:
      "Each cauldron ends in a boss machine — clearing all expands your override roster hugely.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Cauldrons%3A%20Machine%20Overrides%20walkthrough"
  },
  {
    id: 399,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Rebel Camps & Outposts",
    location: "Multiple regions",
    length: "medium",
    difficulty: "High",
    reward: "Rebel gear, region liberation",
    summary:
      "Clear the Tenakth rebel camps fortified across the Forbidden West.",
    aiTip:
      "Stealth-thin the guards first, then take the commander — they drop strong loot.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Rebel%20Camps%20%26%20Outposts%20walkthrough"
  },
  {
    id: 400,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Hunting Grounds Trials",
    location: "Multiple regions",
    length: "medium",
    difficulty: "Medium",
    reward: "Skill challenges, weapon rewards",
    summary:
      "Complete timed combat trials at the West's Hunting Grounds for prestige gear.",
    aiTip:
      "Study each trial's objective; specialized ammo and traps beat the clock.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Hunting%20Grounds%20Trials%20walkthrough"
  },
  {
    id: 401,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Relic Ruins",
    location: "Multiple regions",
    length: "medium",
    difficulty: "Medium",
    reward: "Old World treasures, coin",
    summary:
      "Solve the traversal puzzles inside Old World Relic Ruins to claim their sealed treasures.",
    aiTip:
      "Use the pullcaster and scan for climb points — most are pure platforming puzzles.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Relic%20Ruins%20walkthrough"
  },
  {
    id: 402,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Tallnecks",
    location: "Multiple regions",
    length: "short",
    difficulty: "Low",
    reward: "Map reveal, fast travel",
    summary:
      "Scale the towering Tallnecks to reveal each region's map and machine sites.",
    aiTip:
      "Each Tallneck has a unique approach puzzle — look for the machine or structure to reach it.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Tallnecks%20walkthrough"
  },
  {
    id: 403,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Salvage Contracts",
    location: "Multiple regions",
    length: "short",
    difficulty: "Low",
    reward: "Rare crafting components",
    summary:
      "Take machine-part salvage contracts from Stitcher hubs for rare upgrade materials.",
    aiTip:
      "Target the exact components requested to fulfill contracts efficiently.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Salvage%20Contracts%20walkthrough"
  },
  {
    id: 404,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Gauntlet Runs",
    location: "Multiple regions",
    length: "medium",
    difficulty: "Medium",
    reward: "Racing rewards, mount upgrades",
    summary:
      "Win machine-mounted races across the West's Gauntlet Run courses.",
    aiTip:
      "Learn the boost pads and shortcuts; a fast mount and clean lines win.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Gauntlet%20Runs%20walkthrough"
  },
  {
    id: 405,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "The Arena",
    location: "Thornmarsh",
    length: "medium",
    difficulty: "High",
    reward: "Arena tokens, exclusive gear",
    summary:
      "Battle waves of machines under special modifiers in the Maze's combat Arena.",
    aiTip:
      "Modifiers reward build flexibility — swap loadouts to match each challenge.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20The%20Arena%20walkthrough"
  },
  {
    id: 406,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Melee Pits",
    location: "Multiple regions",
    length: "short",
    difficulty: "Medium",
    reward: "Advanced melee combos",
    summary:
      "Master Aloy's spear at the Melee Pits to unlock powerful resonator-blast combos.",
    aiTip:
      "These combos massively boost melee damage — worth learning for tough fights.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Melee%20Pits%20walkthrough"
  },
  {
    id: 407,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Machine Strike Champions",
    location: "Multiple regions",
    length: "short",
    difficulty: "Low",
    reward: "Board-game prizes, bragging rights",
    summary:
      "Beat the West's best players at the in-world tabletop game Machine Strike.",
    aiTip:
      "A chess-like minigame — control the center and bait aggressive opponents.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Machine%20Strike%20Champions%20walkthrough"
  },
  {
    id: 408,
    type: "main",
    game: "Horizon Forbidden West",
    region: "Burning Shores",
    title: "Burning Shores: In the Flood",
    location: "Los Angeles Ruins",
    length: "long",
    difficulty: "High",
    reward: "DLC start, Seyka ally",
    summary:
      "Aloy travels to the drowned ruins of Los Angeles and teams with the rebel Seyka against a lingering Zenith threat.",
    aiTip:
      "Kicks off the Burning Shores DLC — it's endgame content, so come well-equipped.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Burning%20Shores%3A%20In%20the%20Flood%20walkthrough"
  },
  {
    id: 409,
    type: "side",
    game: "Horizon Forbidden West",
    region: "Burning Shores",
    title: "Burning Shores: Gilded Prophecy",
    location: "Los Angeles Ruins",
    length: "medium",
    difficulty: "High",
    reward: "DLC gear, Horus lore",
    summary:
      "Investigate a doomsday cult and the buried secrets of the volcanic Burning Shores.",
    aiTip:
      "The DLC introduces new machines like the Bilegut — bring acid resistance.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Burning%20Shores%3A%20Gilded%20Prophecy%20walkthrough"
  },
  {
    id: 410,
    type: "main",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Surviving Fimbulwinter",
    location: "Midgard",
    length: "medium",
    difficulty: "Medium",
    reward: "Story start, Atreus's search",
    summary:
      "As the great winter rages, Kratos and Atreus are drawn toward a prophecy and an unwelcome visit from Freya and Odin's envoy.",
    aiTip:
      "The opening teaches the new combat and Atreus's role — experiment with the Leviathan and Blades.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Surviving%20Fimbulwinter%20walkthrough"
  },
  {
    id: 411,
    type: "main",
    game: "God of War Ragnarök",
    region: "Svartalfheim",
    title: "The Quest for Tyr",
    location: "Svartalfheim",
    length: "long",
    difficulty: "Medium",
    reward: "Tyr freed, realm travel opens",
    summary:
      "Kratos and Atreus seek the lost war god Tyr, journeying to the dwarven realm of Svartalfheim.",
    aiTip:
      "Svartalfheim is huge — grab the boat and revisit for favors once you have new tools.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Quest%20for%20Tyr%20walkthrough"
  },
  {
    id: 412,
    type: "main",
    game: "God of War Ragnarök",
    region: "Svartalfheim",
    title: "The Reckoning",
    location: "Svartalfheim",
    length: "medium",
    difficulty: "High",
    reward: "Story progression, boss fight",
    summary:
      "A confrontation forces Kratos to face old habits and a formidable foe in the mines.",
    aiTip:
      "Learn to parry and use runic attacks; this fight rewards defensive timing.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Reckoning%20walkthrough"
  },
  {
    id: 413,
    type: "main",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Old Friends",
    location: "Midgard",
    length: "medium",
    difficulty: "Medium",
    reward: "Ally reunion, story beat",
    summary:
      "Kratos reconnects with an old ally to push the quest forward.",
    aiTip:
      "A story-focused chapter — enjoy the character work between fights.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Old%20Friends%20walkthrough"
  },
  {
    id: 414,
    type: "main",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "Groa's Secret",
    location: "Vanaheim",
    length: "long",
    difficulty: "Medium",
    reward: "Prophecy insight, Vanaheim access",
    summary:
      "The party uncovers the giant Groa's hidden knowledge about the war to come.",
    aiTip:
      "Vanaheim opens up richly here — mark favors to return to after the story.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Groa's%20Secret%20walkthrough"
  },
  {
    id: 415,
    type: "main",
    game: "God of War Ragnarök",
    region: "Alfheim",
    title: "The Word of Fate",
    location: "Alfheim",
    length: "long",
    difficulty: "High",
    reward: "Norns' prophecy revealed",
    summary:
      "Kratos seeks the Norns to learn whether fate can be defied.",
    aiTip:
      "A revelatory chapter with tense encounters — keep resurrection stones handy.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Word%20of%20Fate%20walkthrough"
  },
  {
    id: 416,
    type: "main",
    game: "God of War Ragnarök",
    region: "Svartalfheim",
    title: "Forging Destiny",
    location: "Multiple realms",
    length: "medium",
    difficulty: "High",
    reward: "Draupnir Spear obtained",
    summary:
      "Kratos forges a legendary new weapon to change the odds against Odin.",
    aiTip:
      "The Draupnir Spear is a build-defining weapon — respec runic attacks around it.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Forging%20Destiny%20walkthrough"
  },
  {
    id: 417,
    type: "main",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Reunion",
    location: "Midgard",
    length: "medium",
    difficulty: "Medium",
    reward: "Family reunited, story beat",
    summary:
      "Separated threads of the family come back together as Ragnarök nears.",
    aiTip:
      "Emotional pivot point — a lighter combat chapter.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Reunion%20walkthrough"
  },
  {
    id: 418,
    type: "main",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Creatures of Prophecy",
    location: "Multiple realms",
    length: "long",
    difficulty: "High",
    reward: "Story climax build-up",
    summary:
      "The prophecy's pieces align as the realms edge toward open war.",
    aiTip:
      "Escalating encounters — upgrade armor at Brok and Sindri before proceeding.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Creatures%20of%20Prophecy%20walkthrough"
  },
  {
    id: 419,
    type: "main",
    game: "God of War Ragnarök",
    region: "Helheim",
    title: "Unleashing Hel",
    location: "Helheim",
    length: "long",
    difficulty: "High",
    reward: "Helheim confronted, story turn",
    summary:
      "A journey into Helheim forces a reckoning with grief and rage.",
    aiTip:
      "Helheim's frost enemies resist ice — favor the Blades of Chaos here.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Unleashing%20Hel%20walkthrough"
  },
  {
    id: 420,
    type: "main",
    game: "God of War Ragnarök",
    region: "Asgard",
    title: "The Realms at War",
    location: "Asgard / Multiple",
    length: "long",
    difficulty: "High",
    reward: "Final battle begins",
    summary:
      "Ragnarök erupts as the realms unite against Asgard.",
    aiTip:
      "The war chapter is a spectacle gauntlet — bring your strongest setup.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Realms%20at%20War%20walkthrough"
  },
  {
    id: 421,
    type: "main",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Beyond Ragnarök",
    location: "All realms",
    length: "medium",
    difficulty: "Medium",
    reward: "Free roam, cleanup unlocked",
    summary:
      "With the story's climax past, the realms open fully for remaining favors and challenges.",
    aiTip:
      "Now's the time to mop up favors, Berserkers, and collectibles across all nine realms.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Beyond%20Ragnar%C3%B6k%20walkthrough"
  },
  {
    id: 422,
    type: "side",
    game: "God of War Ragnarök",
    region: "Svartalfheim",
    title: "In Service of Asgard",
    location: "Svartalfheim",
    length: "short",
    difficulty: "Low",
    reward: "Aurvangar Wetlands cleared, gear",
    summary:
      "Clear the Aesir raiders and machines fouling the Aurvangar Wetlands for the dwarves.",
    aiTip:
      "A good early favor to learn Svartalfheim traversal and grab Hacksilver.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20In%20Service%20of%20Asgard%20walkthrough"
  },
  {
    id: 423,
    type: "side",
    game: "God of War Ragnarök",
    region: "Svartalfheim",
    title: "The Lost Treasure",
    location: "Svartalfheim",
    length: "short",
    difficulty: "Low",
    reward: "Legendary chest, gear",
    summary:
      "Follow a dwarven map to a hidden cache of treasure in Svartalfheim.",
    aiTip:
      "Solve the environmental clue to unseal the vault — good early upgrade loot.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Lost%20Treasure%20walkthrough"
  },
  {
    id: 424,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "Scent of Survival",
    location: "Vanaheim",
    length: "medium",
    difficulty: "Medium",
    reward: "Vanaheim gear, machine hunt",
    summary:
      "Hunt a dangerous predator threatening travelers in the Vanaheim jungle.",
    aiTip:
      "Bring Sonic and Bifröst-boosted attacks; dodge its pounce.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Scent%20of%20Survival%20walkthrough"
  },
  {
    id: 425,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "Return of the River",
    location: "Vanaheim",
    length: "short",
    difficulty: "Low",
    reward: "The Jungle opens up, gear",
    summary:
      "Restore a dammed river in Vanaheim to reveal new paths and treasures.",
    aiTip:
      "Reopening the river unlocks traversal to previously blocked areas — do it early in Vanaheim.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Return%20of%20the%20River%20walkthrough"
  },
  {
    id: 426,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "For Vanaheim!",
    location: "Vanaheim",
    length: "long",
    difficulty: "High",
    reward: "Freyr's camp, region liberation",
    summary:
      "Join Freyr's resistance to drive Odin's forces out of Vanaheim once and for all.",
    aiTip:
      "A big multi-part favor with tough camps — bring your best runic loadout.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20For%20Vanaheim!%20walkthrough"
  },
  {
    id: 427,
    type: "side",
    game: "God of War Ragnarök",
    region: "Alfheim",
    title: "The Desert Door",
    location: "Alfheim",
    length: "medium",
    difficulty: "Medium",
    reward: "The Barrens sealed vault",
    summary:
      "Brave the shifting sandstorms of Alfheim's Barrens to reach a sealed door and its reward.",
    aiTip:
      "The sandstorm slows you — use the sled and follow the wind-cleared paths.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Desert%20Door%20walkthrough"
  },
  {
    id: 428,
    type: "side",
    game: "God of War Ragnarök",
    region: "Alfheim",
    title: "The Elven Sanctum",
    location: "Alfheim",
    length: "medium",
    difficulty: "Medium",
    reward: "Sealed sanctum loot, lore",
    summary:
      "Breach an ancient elven sanctum locked away in Alfheim.",
    aiTip:
      "Light/Dark elf puzzles gate the way — use Sigil arrows to redirect the light.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Elven%20Sanctum%20walkthrough"
  },
  {
    id: 429,
    type: "side",
    game: "God of War Ragnarök",
    region: "Alfheim",
    title: "Secret of the Sands",
    location: "Alfheim",
    length: "medium",
    difficulty: "Medium",
    reward: "The Forbidden Sands treasure",
    summary:
      "Uncover what the Light Elves buried beneath the Forbidden Sands.",
    aiTip:
      "Pairs well with The Desert Door — clear both on one Barrens trip.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Secret%20of%20the%20Sands%20walkthrough"
  },
  {
    id: 430,
    type: "side",
    game: "God of War Ragnarök",
    region: "Niflheim",
    title: "The Broken Prison",
    location: "Niflheim",
    length: "medium",
    difficulty: "High",
    reward: "Dreamshade flower, Niflheim loot",
    summary:
      "Descend into the mists of Niflheim's Broken Prison for a rare flower and dangerous foes.",
    aiTip:
      "The mist drains health — keep moving toward the objective and manage resources.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Broken%20Prison%20walkthrough"
  },
  {
    id: 431,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Nine Realms in Bloom",
    location: "All realms",
    length: "medium",
    difficulty: "Low",
    reward: "Yggdrasil's Dew (permanent stat boosts)",
    summary:
      "Find nine mysterious flowers scattered across every realm to restore Ratatoskr's tree.",
    aiTip:
      "Each flower grants a permanent stat boost via Yggdrasil's Dew — a top-priority collectible favor.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Nine%20Realms%20in%20Bloom%20walkthrough"
  },
  {
    id: 432,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "The Mysterious Orb",
    location: "Vanaheim",
    length: "short",
    difficulty: "Low",
    reward: "Companion favor, gear",
    summary:
      "Investigate a strange glowing orb and the being connected to it.",
    aiTip:
      "A short lore favor with a memorable payoff — read the dialogue.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Mysterious%20Orb%20walkthrough"
  },
  {
    id: 433,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "Trail of the Dead",
    location: "Vanaheim",
    length: "medium",
    difficulty: "Medium",
    reward: "Draugr threat cleared, gear",
    summary:
      "Follow a grisly trail of draugr corpses to their source in Vanaheim.",
    aiTip:
      "Draugr swarm — area runic attacks clear them fast.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Trail%20of%20the%20Dead%20walkthrough"
  },
  {
    id: 434,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "Path of Destruction",
    location: "Vanaheim",
    length: "medium",
    difficulty: "Medium",
    reward: "Machine wreckage loot, gear",
    summary:
      "Deal with the destruction left in the wake of a rampaging force in Vanaheim.",
    aiTip:
      "Rewards solid crafting resources — a good mid-game favor.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Path%20of%20Destruction%20walkthrough"
  },
  {
    id: 435,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "In the Dead of Night",
    location: "Vanaheim",
    length: "medium",
    difficulty: "High",
    reward: "Dreki hide, crafting mats",
    summary:
      "Track a fearsome Dreki to its hideout in the Vanaheim plains and take it down.",
    aiTip:
      "Dreki charge lightning attacks — parry the tail sweep and punish after.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20In%20the%20Dead%20of%20Night%20walkthrough"
  },
  {
    id: 436,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "Quaking Hollow",
    location: "Vanaheim",
    length: "short",
    difficulty: "Medium",
    reward: "Sealed cave loot",
    summary:
      "Investigate the tremors emanating from a hollow deep in Vanaheim.",
    aiTip:
      "Use the spear's environmental detonations to open the way.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Quaking%20Hollow%20walkthrough"
  },
  {
    id: 437,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "The Burning Skies",
    location: "Vanaheim",
    length: "short",
    difficulty: "Medium",
    reward: "Aerial machine downed, gear",
    summary:
      "Bring down a menacing airborne machine darkening Vanaheim's skies.",
    aiTip:
      "Sonic arrows stagger it out of the air — then close for the kill.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Burning%20Skies%20walkthrough"
  },
  {
    id: 438,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Conscience for the Dead",
    location: "Midgard",
    length: "short",
    difficulty: "Low",
    reward: "Lúnda's questline, gear",
    summary:
      "Help lay a haunted soul to rest as part of the Dead trilogy of favors.",
    aiTip:
      "One of three linked 'Dead' favors — completing all three tells a full story.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Conscience%20for%20the%20Dead%20walkthrough"
  },
  {
    id: 439,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Casualty of War: The Stein",
    location: "Multiple realms",
    length: "short",
    difficulty: "Medium",
    reward: "Berserker Gravestone reward",
    summary:
      "Answer a Berserker's challenge and defeat the summoned undead champion.",
    aiTip:
      "Berserkers are optional bosses — upgrade gear first; they hit brutally hard.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Casualty%20of%20War%3A%20The%20Stein%20walkthrough"
  },
  {
    id: 440,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Fit for a King (Berserkers)",
    location: "Multiple realms",
    length: "long",
    difficulty: "High",
    reward: "King Hrólf boss, best-in-slot gear",
    summary:
      "Defeat all the Berserker Souls across the realms to face their king, Hrólf Kraki.",
    aiTip:
      "The toughest optional fights in the game — save Hrólf for endgame with maxed gear.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Fit%20for%20a%20King%20(Berserkers)%20walkthrough"
  },
  {
    id: 441,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "The All-Father Blinded (Odin's Ravens)",
    location: "All realms",
    length: "medium",
    difficulty: "Low",
    reward: "Raven Keeper reward, gear",
    summary:
      "Hunt down and destroy Odin's spectral ravens hidden across the nine realms.",
    aiTip:
      "Listen for their green glow and cawing — a satisfying realm-spanning collectible favor.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20All-Father%20Blinded%20(Odin's%20Ravens)%20walkthrough"
  },
  {
    id: 442,
    type: "side",
    game: "God of War Ragnarök",
    region: "Alfheim",
    title: "Guiding Light",
    location: "Alfheim",
    length: "short",
    difficulty: "Medium",
    reward: "The Strönd navigated, gear",
    summary:
      "Restore light to a darkened elven region to press onward.",
    aiTip:
      "Redirect the elven light beams with Sigil arrows to banish the dark.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Guiding%20Light%20walkthrough"
  },
  {
    id: 443,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "Sigrún's Curse",
    location: "Vanaheim",
    length: "medium",
    difficulty: "High",
    reward: "Cursed grove cleansed, rare gear",
    summary:
      "Lift a lingering curse plaguing a Vanaheim grove.",
    aiTip:
      "A tougher favor with a strong reward — bring status-resist armor.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Sigr%C3%BAn's%20Curse%20walkthrough"
  },
  {
    id: 444,
    type: "main",
    game: "Persona 5 Royal",
    chapter: 1,
    title: "Kamoshida's Palace — Castle of Lust",
    location: "Shujin Academy",
    length: "long",
    difficulty: "Medium",
    reward: "First Persona awakenings, Kamoshida's change of heart",
    summary:
      "The Phantom Thieves' first target: the abusive gym teacher Suguru Kamoshida, whose twisted heart appears as a castle where students are slaves.",
    aiTip:
      "Secure the infiltration route early, then send the calling card only when you're ready for the boss — the deadline clock starts ticking.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Kamoshida's%20Palace%20%E2%80%94%20Castle%20of%20Lust%20walkthrough"
  },
  {
    id: 445,
    type: "main",
    game: "Persona 5 Royal",
    chapter: 2,
    title: "Madarame's Palace — Museum of Vanity",
    location: "Shibuya",
    length: "long",
    difficulty: "Medium",
    reward: "Yusuke recruited, Madarame confession",
    summary:
      "Expose the celebrated artist Madarame, who plagiarizes his pupils' work — his heart is a museum of counterfeit masterpieces.",
    aiTip:
      "The shifting corridors hide switches; use Third Eye and note the fake vs. real paintings puzzle.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Madarame's%20Palace%20%E2%80%94%20Museum%20of%20Vanity%20walkthrough"
  },
  {
    id: 446,
    type: "main",
    game: "Persona 5 Royal",
    chapter: 3,
    title: "Kaneshiro's Palace — Bank of Gluttony",
    location: "Shibuya",
    length: "long",
    difficulty: "Medium",
    reward: "Makoto recruited, Kaneshiro takedown",
    summary:
      "Take down the mafia extortionist Junya Kaneshiro, whose greed manifests as a floating bank vault.",
    aiTip:
      "The vault-door riddles gate progress — grind a little for the piggytron boss's big HP pool.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Kaneshiro's%20Palace%20%E2%80%94%20Bank%20of%20Gluttony%20walkthrough"
  },
  {
    id: 447,
    type: "main",
    game: "Persona 5 Royal",
    chapter: 4,
    title: "Futaba's Palace — Pyramid of Wrath",
    location: "Yongen-Jaya",
    length: "long",
    difficulty: "Medium",
    reward: "Futaba recruited, hikikomori healed",
    summary:
      "A rare heist to save a friend: Futaba Sakura's own heart, a pyramid built from guilt over her mother's death.",
    aiTip:
      "The Sphinx boss punishes wrong answers — read Futaba's memories carefully before responding.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Futaba's%20Palace%20%E2%80%94%20Pyramid%20of%20Wrath%20walkthrough"
  },
  {
    id: 448,
    type: "main",
    game: "Persona 5 Royal",
    chapter: 5,
    title: "Okumura's Palace — Spaceport of Greed",
    location: "Shibuya",
    length: "long",
    difficulty: "High",
    reward: "Haru recruited, corporate conspiracy deepens",
    summary:
      "Infiltrate fast-food magnate Kunikazu Okumura's spaceport palace, staffed by robotic exploited workers.",
    aiTip:
      "The final robot-boss gauntlet is time-pressured; bring Baton Pass chains and status ailments.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Okumura's%20Palace%20%E2%80%94%20Spaceport%20of%20Greed%20walkthrough"
  },
  {
    id: 449,
    type: "main",
    game: "Persona 5 Royal",
    chapter: 6,
    title: "Niijima's Palace — Casino of Envy",
    location: "Shibuya",
    length: "long",
    difficulty: "High",
    reward: "Group revived, Akechi's true colors",
    summary:
      "The prosecutor Sae Niijima's heart is a rigged casino — the heist that frames the game's mid-story twist.",
    aiTip:
      "Rig the house's games via the lockdown puzzles; the twist afterward recontextualizes everything.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Niijima's%20Palace%20%E2%80%94%20Casino%20of%20Envy%20walkthrough"
  },
  {
    id: 450,
    type: "main",
    game: "Persona 5 Royal",
    chapter: 7,
    title: "Shido's Palace — Cruiser of Pride",
    location: "Shibuya",
    length: "long",
    difficulty: "High",
    reward: "Conspiracy exposed, near-endgame",
    summary:
      "Confront the corrupt politician Masayoshi Shido aboard a Diet-building cruiser sailing a drowned Tokyo.",
    aiTip:
      "A long, boss-dense palace — stock SP items and Revival Beads before the multi-phase Shido fight.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Shido's%20Palace%20%E2%80%94%20Cruiser%20of%20Pride%20walkthrough"
  },
  {
    id: 451,
    type: "main",
    game: "Persona 5 Royal",
    chapter: 8,
    title: "Depths of Mementos — Prison of Regression",
    location: "Mementos",
    length: "long",
    difficulty: "High",
    reward: "Yaldabaoth confronted, true nature of the world",
    summary:
      "The public's collective heart forms the sprawling Mementos, whose depths hide the god of control, Yaldabaoth.",
    aiTip:
      "Max key confidants beforehand — several unlock crucial combat perks for the final ascent.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Depths%20of%20Mementos%20%E2%80%94%20Prison%20of%20Regression%20walkthrough"
  },
  {
    id: 452,
    type: "main",
    game: "Persona 5 Royal",
    chapter: 9,
    title: "Maruki's Palace — Laboratory of Sloth",
    location: "Odaiba",
    length: "long",
    difficulty: "High",
    reward: "Royal third-semester finale, true ending",
    summary:
      "The Royal-exclusive finale: counselor Takuto Maruki reshapes reality itself, and the Thieves must reject a gilded false paradise.",
    aiTip:
      "Requires maxing Maruki, Kasumi, and Akechi's arcs to unlock. The two-phase final duel is the game's hardest.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Maruki's%20Palace%20%E2%80%94%20Laboratory%20of%20Sloth%20walkthrough"
  },
  {
    id: 453,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Chihaya Mifune (Fortune)",
    location: "Shinjuku",
    length: "medium",
    difficulty: "Low",
    reward: "Fortune readings, luck & affinity boosts",
    summary:
      "Help the fortune teller Chihaya escape a fraud cult; her readings unlock affinity-boosting fortunes.",
    aiTip:
      "Buy the Holy Stone early to fast-track her rank-ups — her fortunes speed every other confidant.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Chihaya%20Mifune%20(Fortune)%20walkthrough"
  },
  {
    id: 454,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Munehisa Iwai (Hanged Man)",
    location: "Yongen-Jaya",
    length: "medium",
    difficulty: "Medium",
    reward: "Discounted & customized guns",
    summary:
      "The airsoft-shop owner Iwai is tangled with the yakuza; clearing his debt unlocks cheaper firearms.",
    aiTip:
      "His model-gun discounts and custom mods make ranged combat far stronger — prioritize for gun builds.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Munehisa%20Iwai%20(Hanged%20Man)%20walkthrough"
  },
  {
    id: 455,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Tae Takemi (Death)",
    location: "Yongen-Jaya",
    length: "medium",
    difficulty: "Medium",
    reward: "Powerful healing & SP items",
    summary:
      "The back-alley doctor Takemi trials experimental medicine on Joker in exchange for restoring her reputation.",
    aiTip:
      "Her clinic stocks the best SP-recovery items in the game — invaluable for long Mementos runs.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Tae%20Takemi%20(Death)%20walkthrough"
  },
  {
    id: 456,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Sadayo Kawakami (Temperance)",
    location: "Shibuya",
    length: "medium",
    difficulty: "Medium",
    reward: "Maid services, free time actions",
    summary:
      "Your homeroom teacher moonlights as a maid to pay off a debt; helping her frees up Joker's schedule.",
    aiTip:
      "Her rank perks let you craft tools in class and skip nights — a huge time-economy win.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Sadayo%20Kawakami%20(Temperance)%20walkthrough"
  },
  {
    id: 457,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Ichiko Ohya (Devil)",
    location: "Shinjuku",
    length: "medium",
    difficulty: "Low",
    reward: "Reduced alert, negotiation edge",
    summary:
      "The journalist Ohya chases the Thieves' story; help her expose corruption and lower Palace security.",
    aiTip:
      "Her perks reduce enemy alertness — great for stealthy, no-fail infiltration runs.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Ichiko%20Ohya%20(Devil)%20walkthrough"
  },
  {
    id: 458,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Shinya Oda (Tower)",
    location: "Akihabara",
    length: "medium",
    difficulty: "Low",
    reward: "One-more & instant-kill combat perks",
    summary:
      "Coach the arcade prodigy Shinya through his bullying troubles to earn deadly gun perks.",
    aiTip:
      "His 'Down Shot' and instant-kill perks trivialize weaker Mementos enemies.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Shinya%20Oda%20(Tower)%20walkthrough"
  },
  {
    id: 459,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Hifumi Togo (Star)",
    location: "Kanda",
    length: "medium",
    difficulty: "Low",
    reward: "Baton Pass & escape perks",
    summary:
      "The shogi champion Hifumi teaches tactics that let the team reposition and flee mid-battle.",
    aiTip:
      "Her Baton Pass unlock is combat-defining — rank her for aggressive weakness chaining.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Hifumi%20Togo%20(Star)%20walkthrough"
  },
  {
    id: 460,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Yuuki Mishima (Moon)",
    location: "Shibuya",
    length: "medium",
    difficulty: "Low",
    reward: "Bonus EXP & money from Mementos",
    summary:
      "The Phantom Thieves' webmaster Mishima spreads your fame — and grants EXP for benched members.",
    aiTip:
      "His EXP-share perk keeps your reserve party leveled without extra grinding.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Yuuki%20Mishima%20(Moon)%20walkthrough"
  },
  {
    id: 461,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Toranosuke Yoshida (Sun)",
    location: "Shibuya",
    length: "medium",
    difficulty: "Low",
    reward: "Advanced Hold Up negotiation",
    summary:
      "Aid the outcast politician Yoshida's street campaign to master persuading Shadows for money and items.",
    aiTip:
      "His negotiation perks squeeze more cash and rare Personas out of every Hold Up.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Toranosuke%20Yoshida%20(Sun)%20walkthrough"
  },
  {
    id: 462,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Caroline & Justine (Strength)",
    location: "Velvet Room",
    length: "medium",
    difficulty: "High",
    reward: "Advanced Persona fusions & executions",
    summary:
      "The Velvet Room wardens task Joker with fusing specific Personas to complete their requests.",
    aiTip:
      "Fulfilling their fusion list unlocks the best fusion accidents and, in Royal, a key story reward.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Caroline%20%26%20Justine%20(Strength)%20walkthrough"
  },
  {
    id: 463,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Kasumi Yoshizawa (Faith)",
    location: "Kichijoji",
    length: "medium",
    difficulty: "Medium",
    reward: "Royal ally, ultimate persona",
    summary:
      "The talented gymnast Kasumi (Royal-exclusive) fights alongside Joker as her own story unravels.",
    aiTip:
      "Maxing Faith is required for the Royal third semester and true ending — don't neglect it.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Kasumi%20Yoshizawa%20(Faith)%20walkthrough"
  },
  {
    id: 464,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Takuto Maruki (Councillor)",
    location: "Shujin Academy",
    length: "medium",
    difficulty: "Medium",
    reward: "Royal counselor, SP & healing perks",
    summary:
      "The kind school counselor Maruki (Royal-exclusive) offers therapy — and hides the game's biggest secret.",
    aiTip:
      "His confidant is Royal-only and gates the true ending; his SP-recovery perks help every fight.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Takuto%20Maruki%20(Councillor)%20walkthrough"
  },
  {
    id: 465,
    type: "side",
    game: "Persona 5 Royal",
    title: "Mementos Requests",
    location: "Mementos",
    length: "medium",
    difficulty: "Low",
    reward: "Money, items, arcana affinity",
    summary:
      "Take the Phantom Aficionado Website's requests to change the hearts of minor villains lurking in Mementos.",
    aiTip:
      "Clear requests as they appear — many gate confidant progress or reward rare fusion material.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Mementos%20Requests%20walkthrough"
  },
  {
    id: 466,
    type: "side",
    game: "Persona 5 Royal",
    title: "Will Seeds & Jose (Royal)",
    location: "Mementos / Palaces",
    length: "short",
    difficulty: "Low",
    reward: "Powerful accessories, growth boosts",
    summary:
      "Collect the Royal-exclusive Will Seeds hidden in each Palace and trade Jose's flowers/stamps for buffs.",
    aiTip:
      "Grab all three Will Seeds per Palace before the boss for a strong crystallized accessory.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Will%20Seeds%20%26%20Jose%20(Royal)%20walkthrough"
  },
  {
    id: 467,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Warrior's Code",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Story start, samurai training",
    summary:
      "The Mongol invasion of Tsushima begins; Jin Sakai survives Komoda Beach and vows to take the island back.",
    aiTip:
      "Learn parry and Resolve early — the opening sets the samurai-vs-Ghost tension that drives the game.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Warrior's%20Code%20walkthrough"
  },
  {
    id: 468,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Blood on the Grass",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Ghost stance seeds, Yuna alliance",
    summary:
      "Jin embraces dishonorable tactics to survive, wrestling with the samurai code as the Ghost is born.",
    aiTip:
      "This is where 'the Ghost' begins — stealth and terror tactics open up alongside honorable dueling.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Blood%20on%20the%20Grass%20walkthrough"
  },
  {
    id: 469,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Shadow of the Samurai",
    location: "Izuhara",
    length: "long",
    difficulty: "High",
    reward: "Act 1 finale, Castle Kaneda",
    summary:
      "The assault to reclaim Castle Kaneda and confront Khotun Khan's grip on the Izuhara region.",
    aiTip:
      "A major set-piece battle — master the standoff mechanic to thin enemy ranks before the walls.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Shadow%20of%20the%20Samurai%20walkthrough"
  },
  {
    id: 470,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "A Gathering Storm",
    location: "Toyotama",
    length: "medium",
    difficulty: "Medium",
    reward: "Act 2 begins, allies rally",
    summary:
      "Jin heads to Toyotama to gather allies and a straw-hat army against the Mongols.",
    aiTip:
      "Toyotama opens a huge new region — pick up its Tales and Mythic Tales as you rally support.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20A%20Gathering%20Storm%20walkthrough"
  },
  {
    id: 471,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "A Message in Fire",
    location: "Toyotama",
    length: "medium",
    difficulty: "High",
    reward: "Poison plot, deepening conflict",
    summary:
      "Jin uncovers a plan to burn the enemy out — and confronts the cost of the Ghost's methods.",
    aiTip:
      "The poison arc tests Jin's honor; upgrades to the blowgun and Ghost tools pay off here.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20A%20Message%20in%20Fire%20walkthrough"
  },
  {
    id: 472,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "Ghosts from the Past",
    location: "Toyotama",
    length: "long",
    difficulty: "High",
    reward: "Act 2 climax, Ryuzo's betrayal",
    summary:
      "Old bonds shatter as the Straw Hat Ronin turn, culminating in a wrenching confrontation.",
    aiTip:
      "An emotional, duel-heavy chapter — sharpen your parry timing for the rival showdown.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Ghosts%20from%20the%20Past%20walkthrough"
  },
  {
    id: 473,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Kamiagata",
    title: "The Tale of Lord Shimura",
    location: "Kamiagata",
    length: "long",
    difficulty: "High",
    reward: "Act 3 finale, the ending choice",
    summary:
      "The road to the final reckoning: liberate Kamiagata and face an impossible choice about honor and family.",
    aiTip:
      "The finale offers a defining choice — both endings are worth seeing; make a manual save first.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Tale%20of%20Lord%20Shimura%20walkthrough"
  },
  {
    id: 474,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Kamiagata",
    title: "The Undying Flame",
    location: "Kamiagata",
    length: "medium",
    difficulty: "High",
    reward: "Fire-based legendary reward",
    summary:
      "In Act 3, chase a burning legend through Kamiagata for a fearsome fire technique.",
    aiTip:
      "A late-game Mythic Tale — its reward pairs well with a fully upgraded Ghost loadout.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Undying%20Flame%20walkthrough"
  },
  {
    id: 475,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Tales of Yuna",
    location: "Multiple regions",
    length: "medium",
    difficulty: "Medium",
    reward: "Yuna & Taka arc, ally upgrades",
    summary:
      "Follow the thief Yuna and her brother Taka as they aid Jin's fight and pursue their own hopes.",
    aiTip:
      "Yuna's tales unlock key story allies and gear — a high-value companion chain.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Tales%20of%20Yuna%20walkthrough"
  },
  {
    id: 476,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Tales of Sensei Ishikawa",
    location: "Multiple regions",
    length: "medium",
    difficulty: "Medium",
    reward: "Ishikawa's bow mastery, betrayal arc",
    summary:
      "Help the master archer Ishikawa hunt his traitorous former student, Tomoe.",
    aiTip:
      "Completing his tales upgrades your bow and reveals a tense mentor-student saga.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Tales%20of%20Sensei%20Ishikawa%20walkthrough"
  },
  {
    id: 477,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Tales of Lady Masako",
    location: "Multiple regions",
    length: "medium",
    difficulty: "Medium",
    reward: "Masako's revenge, armor dyes",
    summary:
      "Aid the vengeful noblewoman Masako as she hunts the killers of her entire family.",
    aiTip:
      "Her tales grant unique rewards and one of the game's most memorable revenge stories.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Tales%20of%20Lady%20Masako%20walkthrough"
  },
  {
    id: 478,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Tales of Kenji",
    location: "Multiple regions",
    length: "short",
    difficulty: "Low",
    reward: "Sake-fueled comic relief, allies",
    summary:
      "Follow the bumbling sake trader Kenji through a string of lighthearted, boozy misadventures.",
    aiTip:
      "A comedic palate cleanser between grim main tales — easy, fun rewards.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Tales%20of%20Kenji%20walkthrough"
  },
  {
    id: 479,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "Tales of Norio",
    location: "Toyotama",
    length: "medium",
    difficulty: "Medium",
    reward: "Warrior monk ally, spirit arc",
    summary:
      "Join the warrior monk Norio of Cedar Temple as faith and violence collide against the Mongols.",
    aiTip:
      "His tales add a spiritual dimension and a capable ally for larger battles.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Tales%20of%20Norio%20walkthrough"
  },
  {
    id: 480,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "Tales of Ryuzo",
    location: "Multiple regions",
    length: "medium",
    difficulty: "High",
    reward: "Straw Hat Ronin arc",
    summary:
      "Confront Jin's old friend Ryuzo, whose desperation leads the Straw Hat Ronin down a dark path.",
    aiTip:
      "Ties directly into the main story's biggest betrayal — emotionally and mechanically weighty.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Tales%20of%20Ryuzo%20walkthrough"
  },
  {
    id: 481,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Fox Dens & Inari Shrines",
    location: "Multiple regions",
    length: "short",
    difficulty: "Low",
    reward: "Charm slots, Inari charms",
    summary:
      "Follow foxes to hidden Inari shrines to earn charm slots and blessings across Tsushima.",
    aiTip:
      "More charm slots = more build flexibility. Pet the fox afterward — it's the law.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Fox%20Dens%20%26%20Inari%20Shrines%20walkthrough"
  },
  {
    id: 482,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Shinto Shrines",
    location: "Multiple regions",
    length: "medium",
    difficulty: "Medium",
    reward: "Legendary charms, platforming",
    summary:
      "Climb the treacherous mountain paths to Tsushima's Shinto shrines for powerful charms.",
    aiTip:
      "These are platforming puzzles more than combat — take your time on the ledges.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Shinto%20Shrines%20walkthrough"
  },
  {
    id: 483,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Bamboo Strikes",
    location: "Multiple regions",
    length: "short",
    difficulty: "Low",
    reward: "Max Resolve increases",
    summary:
      "Complete the button-sequence bamboo-cutting trials to permanently raise Jin's Resolve.",
    aiTip:
      "More Resolve means more healing and Ghost abilities in combat — a priority pickup.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Bamboo%20Strikes%20walkthrough"
  },
  {
    id: 484,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Haiku & Hot Springs",
    location: "Multiple regions",
    length: "short",
    difficulty: "Low",
    reward: "Headbands (haiku), max health (springs)",
    summary:
      "Compose haiku for cosmetic headbands and bathe in hot springs to increase maximum health.",
    aiTip:
      "Quiet, reflective activities — hot springs give real HP boosts, so seek them all out.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Haiku%20%26%20Hot%20Springs%20walkthrough"
  },
  {
    id: 485,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Pillars of Honor & Duels",
    location: "Multiple regions",
    length: "medium",
    difficulty: "High",
    reward: "Sword kits, standoff practice",
    summary:
      "Seek out the Pillars of Honor to challenge fearsome swordsmen in one-on-one duels.",
    aiTip:
      "Pure parry-and-dodge tests — great practice for the standoff and dueling systems.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Pillars%20of%20Honor%20%26%20Duels%20walkthrough"
  },
  {
    id: 486,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Mongol Artifacts & Records",
    location: "Multiple regions",
    length: "short",
    difficulty: "Low",
    reward: "Cosmetics, lore, supplies",
    summary:
      "Loot Mongol camps and artifacts to gather supplies, lore records, and cosmetic rewards.",
    aiTip:
      "Clearing camps also liberates the map — combine collection runs with liberation.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Mongol%20Artifacts%20%26%20Records%20walkthrough"
  },
  {
    id: 487,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Iki Island",
    title: "Journey into the Past (Iki Island)",
    location: "Iki Island",
    length: "long",
    difficulty: "High",
    reward: "Iki DLC start, new region",
    summary:
      "Jin travels to Iki Island to counter a new Mongol threat and confront traumatic memories of his father.",
    aiTip:
      "Kicks off the Director's Cut Iki expansion — a self-contained region with new mechanics and animal sanctuaries.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Journey%20into%20the%20Past%20(Iki%20Island)%20walkthrough"
  },
  {
    id: 488,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Iki Island",
    title: "The Eagle's Cry (Iki Island)",
    location: "Iki Island",
    length: "medium",
    difficulty: "High",
    reward: "Iki tales, hallucinogen arc",
    summary:
      "Face the shaman known as the Eagle and the mind-bending poisons she wields against Jin.",
    aiTip:
      "The Iki hallucination sequences are unique boss encounters — steel yourself for them.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Eagle's%20Cry%20(Iki%20Island)%20walkthrough"
  },
  {
    id: 489,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "The Path to Hogwarts",
    location: "Gringotts / Hogwarts",
    length: "medium",
    difficulty: "Low",
    reward: "Wand, ancient magic revealed",
    summary:
      "A late arrival to Hogwarts, your fifth-year student survives a dragon attack and discovers a gift for ancient magic.",
    aiTip:
      "The prologue teaches core spells and reveals your connection to ancient magic — the game's central mystery.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Path%20to%20Hogwarts%20walkthrough"
  },
  {
    id: 490,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Welcome to Hogwarts",
    location: "Hogwarts",
    length: "medium",
    difficulty: "Low",
    reward: "Sorting, common room, first classes",
    summary:
      "Get sorted, meet Professor Fig and your housemates, and settle into castle life.",
    aiTip:
      "Your house choice is cosmetic-plus — it changes your common room and a few exclusive quests.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Welcome%20to%20Hogwarts%20walkthrough"
  },
  {
    id: 491,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "The Locket's Secret",
    location: "Hogwarts",
    length: "medium",
    difficulty: "Medium",
    reward: "Pensieve vault, story deepens",
    summary:
      "Professor Fig and your student delve into a locket's memories tied to the goblin rebellion.",
    aiTip:
      "Pay attention to the memories — they set up the Rackham trials and the Keepers' storyline.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Locket's%20Secret%20walkthrough"
  },
  {
    id: 492,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Percival Rackham's Trial",
    location: "Hogwarts Highlands",
    length: "long",
    difficulty: "Medium",
    reward: "Ancient magic training, map chamber",
    summary:
      "Enter the first Keeper's trial to learn the truth about ancient magic and the wizard Isidora.",
    aiTip:
      "These trials are puzzle dungeons — use Revelio liberally and learn the new spells they grant.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Percival%20Rackham's%20Trial%20walkthrough"
  },
  {
    id: 493,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Jackdaw's Rest",
    location: "Hogwarts",
    length: "medium",
    difficulty: "Medium",
    reward: "Map upgrade, treasure lead",
    summary:
      "Follow the ghost of the student Richard Jackdaw to unlock hidden passages beneath the castle.",
    aiTip:
      "A stealth-and-puzzle chapter; the map upgrade it grants is worth the detour.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Jackdaw's%20Rest%20walkthrough"
  },
  {
    id: 494,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "The High Keep",
    location: "Hogwarts Highlands",
    length: "long",
    difficulty: "High",
    reward: "Poppy arc, poached beasts freed",
    summary:
      "Storm a poacher stronghold with Poppy Sweeting to rescue captured magical beasts.",
    aiTip:
      "Combat-heavy — stock up on potions and learn to break poacher shields with the right spells.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20High%20Keep%20walkthrough"
  },
  {
    id: 495,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "The Girl from Uagadou",
    location: "Hogwarts",
    length: "medium",
    difficulty: "Medium",
    reward: "Natty arc, poacher intel",
    summary:
      "Team with Natsai Onai to investigate the poachers and dark wizard Victor Rookwood.",
    aiTip:
      "Kicks off Natty's questline — her investigations tie into the main poacher threat.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Girl%20from%20Uagadou%20walkthrough"
  },
  {
    id: 496,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Niamh Fitzgerald's Trial",
    location: "Hogwarts",
    length: "long",
    difficulty: "Medium",
    reward: "Second Keeper trial, ancient magic",
    summary:
      "Solve the second Keeper's trial to gather more of the ancient magic that Ranrok covets.",
    aiTip:
      "Another puzzle dungeon — the new abilities carry into combat and exploration.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Niamh%20Fitzgerald's%20Trial%20walkthrough"
  },
  {
    id: 497,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "San Bakar's Trial",
    location: "Hogwarts Highlands",
    length: "long",
    difficulty: "High",
    reward: "Third Keeper trial, mount unlock",
    summary:
      "Brave San Bakar's trial high in the mountains, unlocking new traversal and ancient power.",
    aiTip:
      "Rewards flight/mount access to remote areas — a big exploration upgrade.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20San%20Bakar's%20Trial%20walkthrough"
  },
  {
    id: 498,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "In the Shadow of the Relic",
    location: "Hogwarts / Highlands",
    length: "long",
    difficulty: "High",
    reward: "Sebastian climax, dark choice",
    summary:
      "Sebastian's pursuit of dark magic reaches a breaking point, forcing a hard choice about the Unforgivable Curses.",
    aiTip:
      "This arc lets you learn all three Unforgivable Curses; your choices shape Sebastian's fate.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20In%20the%20Shadow%20of%20the%20Relic%20walkthrough"
  },
  {
    id: 499,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "The Final Repository",
    location: "Hogwarts Highlands",
    length: "long",
    difficulty: "High",
    reward: "Finale, Ranrok defeated",
    summary:
      "The climactic battle against the goblin leader Ranrok and the hoard of contained ancient magic.",
    aiTip:
      "The multi-phase Ranrok fight is the game's toughest — bring your best gear and Ancient Magic charged.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Final%20Repository%20walkthrough"
  },
  {
    id: 500,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Feldcroft",
    title: "In the Shadow of the Bloodline (Sebastian)",
    location: "Feldcroft",
    length: "medium",
    difficulty: "Medium",
    reward: "Sebastian relationship, Slytherin lore",
    summary:
      "Help Sebastian search for a cure for his cursed twin sister, Anne.",
    aiTip:
      "The emotional core of Sebastian's arc — his desperation drives the darker choices ahead.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20In%20the%20Shadow%20of%20the%20Bloodline%20(Sebastian)%20walkthrough"
  },
  {
    id: 501,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Feldcroft",
    title: "In the Shadow of Time (Sebastian)",
    location: "Feldcroft",
    length: "long",
    difficulty: "High",
    reward: "Unforgivable Curses, arc finale",
    summary:
      "Sebastian's quest for forbidden power culminates in tragedy and a choice about loyalty.",
    aiTip:
      "Completing his line unlocks all Unforgivable Curses; decide whether to report him to Professor Weasley.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20In%20the%20Shadow%20of%20Time%20(Sebastian)%20walkthrough"
  },
  {
    id: 502,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "The Lost Child (Natty)",
    location: "Hogwarts Highlands",
    length: "medium",
    difficulty: "Medium",
    reward: "Natty relationship, poacher raid",
    summary:
      "Join Natty to rescue a child abducted by poachers and gather intel on Rookwood.",
    aiTip:
      "A strong companion quest — Natty's investigative arc pays off in the main poacher storyline.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Lost%20Child%20(Natty)%20walkthrough"
  },
  {
    id: 503,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Grief and Vengeance (Natty)",
    location: "Hogwarts Highlands",
    length: "long",
    difficulty: "High",
    reward: "Natty arc finale, Rookwood blow",
    summary:
      "The conclusion of Natty's hunt for the poachers and the man who hurt her family.",
    aiTip:
      "Combat-heavy finale to her arc — a satisfying capstone with unique dialogue.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Grief%20and%20Vengeance%20(Natty)%20walkthrough"
  },
  {
    id: 504,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Surprise Meeting (Poppy)",
    location: "Hogwarts Highlands",
    length: "medium",
    difficulty: "Medium",
    reward: "Poppy relationship progression",
    summary:
      "Meet Poppy Sweeting for a planned outing that takes an unexpected turn, deepening your friendship as her questline continues.",
    aiTip:
      "Falls mid-way through Poppy's arc, between The Poacher's House Call and The Centaur and the Stone.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Surprise%20Meeting%20Poppy%20walkthrough"
  },
  {
    id: 505,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "It's All Gobbledegook",
    location: "Map Chamber / Goblin Mine",
    length: "medium",
    difficulty: "Medium",
    reward: "Ranrok's plans revealed, story progress",
    summary:
      "Enlist the Gobbledegook-reading Ravenclaw Amit Thakkar to translate a captured goblin manuscript and uncover Ranrok's plans. (Amit is the one companion with no personal relationship questline — this is a main-story quest.)",
    aiTip:
      "A story quest, not a romance beat; it leads directly into In the Shadow of the Mine.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20It's%20All%20Gobbledegook%20walkthrough"
  },
  {
    id: 506,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "Well, Well, Well",
    location: "Hogsmeade",
    length: "short",
    difficulty: "Low",
    reward: "Coin, mystery solved",
    summary:
      "Investigate the strange magical wells scattered around the Hogwarts region for a curious researcher.",
    aiTip:
      "Use Revelio to spot the wells; a light puzzle quest with a tidy payout.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Well%2C%20Well%2C%20Well%20walkthrough"
  },
  {
    id: 507,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "Minding Your Own Business",
    location: "Hogsmeade",
    length: "medium",
    difficulty: "Medium",
    reward: "Your own Hogsmeade shop",
    summary:
      "Take over an abandoned Hogsmeade shop and turn it into your personal storefront.",
    aiTip:
      "Unlocks a shop you can stock and profit from — a nice gold sink and side income.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Minding%20Your%20Own%20Business%20walkthrough"
  },
  {
    id: 508,
    type: "side",
    category: "Challenges",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "The Daedalian Keys",
    location: "Hogwarts",
    length: "medium",
    difficulty: "Low",
    reward: "House-token rewards, cosmetics",
    summary:
      "Chase the flying Daedalian Keys through the castle to unlock a rewarding chest hoard.",
    aiTip:
      "There are 16 keys — catch each one, then find its matching moving door for the loot.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Daedalian%20Keys%20walkthrough"
  },
  {
    id: 509,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "Ollivanders & the Perfect Wand",
    location: "Hogsmeade",
    length: "short",
    difficulty: "Low",
    reward: "Wand handle customization",
    summary:
      "Assist Mr. Ollivander's shop and craft the wand that best suits you.",
    aiTip:
      "Wand cosmetics are purely visual, but the quest is a lovely bit of wizarding flavor.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Ollivanders%20%26%20the%20Perfect%20Wand%20walkthrough"
  },
  {
    id: 510,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Feldcroft",
    title: "The Tale of Rowland Oakes",
    location: "Feldcroft Region",
    length: "medium",
    difficulty: "Medium",
    reward: "Missing-person mystery, gear",
    summary:
      "Track down the missing explorer Rowland Oakes across dangerous ruins and caves.",
    aiTip:
      "A multi-step exploration quest — bring healing for the guardian and beast encounters.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Tale%20of%20Rowland%20Oakes%20walkthrough"
  },
  {
    id: 511,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Prisoner of Love",
    location: "Hogwarts Highlands",
    length: "short",
    difficulty: "Low",
    reward: "Comic side story, coin",
    summary:
      "Help a lovestruck ghost reconnect with a lost sweetheart in a bittersweet, funny detour.",
    aiTip:
      "Low stakes and charming — a good break between combat-heavy quests.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Prisoner%20of%20Love%20walkthrough"
  },
  {
    id: 512,
    type: "side",
    category: "Challenges",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Merlin Trials",
    location: "Open world",
    length: "medium",
    difficulty: "Low",
    reward: "Gear inventory upgrades",
    summary:
      "Solve the environmental Merlin Trials scattered across the Highlands to expand your gear capacity.",
    aiTip:
      "More gear slots = keep more loot. Buy Mallowsweet leaves in Hogsmeade to activate each trial.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Merlin%20Trials%20walkthrough"
  },
  {
    id: 513,
    type: "side",
    category: "Challenges",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Field Guide Pages",
    location: "Hogwarts & beyond",
    length: "short",
    difficulty: "Low",
    reward: "Field guide completion, house points",
    summary:
      "Collect the hidden Field Guide Pages using Revelio and the Flying-page chases.",
    aiTip:
      "Great for learning castle geography early — many are tucked behind Alohomora-locked doors.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Field%20Guide%20Pages%20walkthrough"
  },
  {
    id: 514,
    type: "side",
    category: "Challenges",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Demiguise Statues",
    location: "Open world",
    length: "medium",
    difficulty: "Medium",
    reward: "Alohomora upgrades (higher lock tiers)",
    summary:
      "Recover the elusive Demiguise Statues at night for Gladwin Moon to upgrade your Alohomora spell.",
    aiTip:
      "Only appear at night — upgrading Alohomora unlocks Level 2 and 3 locked doors full of loot.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Demiguise%20Statues%20walkthrough"
  },
  {
    id: 515,
    type: "side",
    category: "Challenges",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Ancient Magic Hotspots & Collection Chests",
    location: "Open world",
    length: "short",
    difficulty: "Low",
    reward: "Cosmetics, gear, lore",
    summary:
      "Sweep the open world for Collection Chests, balloons, and Ancient Magic Hotspots.",
    aiTip:
      "Pure completionist content — pair with Merlin Trials while exploring each region.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Ancient%20Magic%20Hotspots%20%26%20Collection%20Chests%20walkthrough"
  },
  {
    id: 516,
    type: "side",
    category: "Challenges",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "The Room of Requirement & Vivarium",
    location: "Hogwarts",
    length: "medium",
    difficulty: "Low",
    reward: "Crafting, beast breeding, gear upgrades",
    summary:
      "Build out your Room of Requirement to craft potions/plants and rescue beasts into magical vivariums.",
    aiTip:
      "Central to progression — breed beasts for Traits that upgrade your gear's power.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Room%20of%20Requirement%20%26%20Vivarium%20walkthrough"
  },
  {
    id: 517,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "The Rescue",
    location: "Watson – Little China",
    length: "short",
    difficulty: "Low",
    reward: "V's story begins, lifepath intro",
    summary:
      "V and Jackie rescue a kidnapped corpo, Sandra Dorsett, in the job that kicks off V's merc career.",
    aiTip:
      "The prologue converges all three lifepaths here — after this, Night City opens up.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20The%20Rescue%20walkthrough"
  },
  {
    id: 518,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "The Ripperdoc",
    location: "Watson – Little China",
    length: "short",
    difficulty: "Low",
    reward: "Cyberware slots, Kiroshi optics",
    summary:
      "Vik Vector installs V's iconic Kiroshi optics and Militech arm, unlocking the scanner and cyberware.",
    aiTip:
      "Vik gives a friends' discount all game — return to him for the best-value implants.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20The%20Ripperdoc%20walkthrough"
  },
  {
    id: 519,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "The Ride",
    location: "Watson",
    length: "short",
    difficulty: "Low",
    reward: "Dexter DeShawn contact",
    summary:
      "Dexter DeShawn sizes V up for a career-making heist during a drive through Night City.",
    aiTip:
      "Dialogue-only — the choices set your rapport with Dex but don't gate much.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20The%20Ride%20walkthrough"
  },
  {
    id: 520,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "Love Like Fire",
    location: "Corpo Plaza / Watson",
    length: "medium",
    difficulty: "Medium",
    reward: "Johnny's story, Act 2 opens",
    summary:
      "Johnny Silverhand relives his 2023 Arasaka raid as V comes to terms with sharing a skull.",
    aiTip:
      "Marks the shift into Act 2 and the open city — start banking gigs and side jobs now.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Love%20Like%20Fire%20walkthrough"
  },
  {
    id: 521,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Ghost Town",
    location: "Badlands",
    length: "medium",
    difficulty: "Medium",
    reward: "Panam Palmer & Aldecaldos contact",
    summary:
      "V heads to the Badlands to chase a lead through Panam Palmer and the nomad Aldecaldos.",
    aiTip:
      "Opens the Panam questline — pursue it fully for the best (Star) ending options.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Ghost%20Town%20walkthrough"
  },
  {
    id: 522,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Lightning Breaks",
    location: "Badlands",
    length: "medium",
    difficulty: "Medium",
    reward: "Nash dealt with, Panam bond",
    summary:
      "V and Panam ambush the raffen Nash to recover stolen goods and settle a score.",
    aiTip:
      "A combat-heavy nomad job; the Thermal Katana reward is tucked in Nash's stash.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Lightning%20Breaks%20walkthrough"
  },
  {
    id: 523,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Life During Wartime",
    location: "Badlands",
    length: "long",
    difficulty: "High",
    reward: "Hellman captured, conspiracy lead",
    summary:
      "V and Panam raid a Militech-occupied town to snatch the scientist Anders Hellman.",
    aiTip:
      "The Basilisk-adjacent set piece is tough — bring armor and let Panam draw fire.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Life%20During%20Wartime%20walkthrough"
  },
  {
    id: 524,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Westbrook",
    title: "Down on the Street",
    location: "Westbrook – Japantown",
    length: "medium",
    difficulty: "Medium",
    reward: "Takemura alliance, Hanako plan",
    summary:
      "Goro Takemura and V scheme to reach Hanako Arasaka, starting with fixer Wakako.",
    aiTip:
      "Kicks off the Takemura path — his gigs and calls add key endgame options.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Down%20on%20the%20Street%20walkthrough"
  },
  {
    id: 525,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Westbrook",
    title: "Gimme Danger",
    location: "Westbrook – Japantown",
    length: "medium",
    difficulty: "Medium",
    reward: "Arasaka parade recon",
    summary:
      "V and Takemura scout the Arasaka Industrial Park ahead of a daring infiltration.",
    aiTip:
      "Do the optional recon fully — it unlocks stealthier routes in the follow-up.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gimme%20Danger%20walkthrough"
  },
  {
    id: 526,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Pacifica",
    title: "M'ap Tann Pelen",
    location: "Pacifica",
    length: "medium",
    difficulty: "Medium",
    reward: "Voodoo Boys contact",
    summary:
      "In drowned Pacifica, V seeks the Voodoo Boys netrunners for help with the relic.",
    aiTip:
      "Placide is not to be trusted — stay sharp through the mall and dataterm work.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20M'ap%20Tann%20Pelen%20walkthrough"
  },
  {
    id: 527,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "Tapeworm",
    location: "Various",
    length: "short",
    difficulty: "Low",
    reward: "Johnny Silverhand relationship beats",
    summary:
      "Recurring quiet interludes where V and Johnny drink, argue, and slowly understand each other.",
    aiTip:
      "These raise Johnny's rapport, which gates the secret ending — don't skip them.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Tapeworm%20walkthrough"
  },
  {
    id: 528,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "Totalimmortal",
    location: "City Center – Arasaka",
    length: "long",
    difficulty: "High",
    reward: "Rogue's ending path, Adam Smasher",
    summary:
      "On the Rogue path, V storms Arasaka Tower with the Afterlife's queen and faces Adam Smasher.",
    aiTip:
      "Save Rogue's side jobs first. Smasher is a brutal fight — bring anti-armor and quickhacks.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Totalimmortal%20walkthrough"
  },
  {
    id: 529,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "Belly of the Beast",
    location: "City Center – Arasaka",
    length: "long",
    difficulty: "High",
    reward: "Aldecaldos ending assault",
    summary:
      "On the Aldecaldos path, Panam's family blasts into Arasaka Tower to get V to Mikoshi.",
    aiTip:
      "Requires Panam's full questline. The Basilisk tank makes the approach a spectacle.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Belly%20of%20the%20Beast%20walkthrough"
  },
  {
    id: 530,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "For Whom the Bell Tolls",
    location: "City Center – Arasaka",
    length: "short",
    difficulty: "High",
    reward: "Endgame, Mikoshi decision",
    summary:
      "Inside Mikoshi, V faces the final choice about their body, their soul, and Johnny.",
    aiTip:
      "This is the crossroads for every ending — make a manual save before the elevator.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20For%20Whom%20the%20Bell%20Tolls%20walkthrough"
  },
  {
    id: 531,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "New Dawn Fades",
    location: "City Center – Arasaka",
    length: "medium",
    difficulty: "High",
    reward: "Arasaka (Devil) ending path",
    summary:
      "Trusting Arasaka to fix the relic leads V down the grim corporate 'Devil' ending.",
    aiTip:
      "Requires low Johnny rapport; widely seen as the bleakest ending.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20New%20Dawn%20Fades%20walkthrough"
  },
  {
    id: 532,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Path of Glory",
    location: "Beyond Night City",
    length: "short",
    difficulty: "Medium",
    reward: "Star ending epilogue",
    summary:
      "On the Aldecaldos ending, V rides into the sunset with the nomad family toward a cure.",
    aiTip:
      "The most hopeful epilogue — needs Panam's romance/quests completed.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Path%20of%20Glory%20walkthrough"
  },
  {
    id: 533,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Holdin' On",
    location: "Northside – Watson",
    length: "short",
    difficulty: "Low",
    reward: "Kerry Eurodyne arc begins",
    summary:
      "Rocker Kerry Eurodyne, bored and self-destructive, pulls V into his chaotic world.",
    aiTip:
      "Start of Kerry's chain — pursue it for the Us Cracks caper and a male-V romance.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Holdin'%20On%20walkthrough"
  },
  {
    id: 534,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Second Conflict",
    location: "North Oak",
    length: "short",
    difficulty: "Low",
    reward: "Kerry arc, band reunion choice",
    summary:
      "Help Kerry decide whether to reunite Samurai as a corporate buyout looms.",
    aiTip:
      "Your advice shapes Kerry's arc; siding with his integrity feels most in-character.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Second%20Conflict%20walkthrough"
  },
  {
    id: 535,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "A Like Supreme",
    location: "Rancho Coronado",
    length: "short",
    difficulty: "Medium",
    reward: "Kerry arc, jam session",
    summary:
      "Track down a legendary guitar and help a young musician for Kerry's sake.",
    aiTip:
      "A feel-good detour — the payoff is a fun jam and Kerry rapport.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20A%20Like%20Supreme%20walkthrough"
  },
  {
    id: 536,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Rebel! Rebel!",
    location: "North Oak",
    length: "short",
    difficulty: "Low",
    reward: "Kerry arc, Us Cracks",
    summary:
      "Kerry ropes V into helping the pop group Us Cracks with a very Night City problem.",
    aiTip:
      "Comedic and light — advances Kerry's storyline toward the finale.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Rebel!%20Rebel!%20walkthrough"
  },
  {
    id: 537,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Off the Leash",
    location: "North Oak",
    length: "short",
    difficulty: "Low",
    reward: "Kerry arc, yacht party",
    summary:
      "Join Kerry for a wild night that either cements a romance or a friendship.",
    aiTip:
      "This is the Kerry romance gate for male V — read the moment.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Off%20the%20Leash%20walkthrough"
  },
  {
    id: 538,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Boat Drinks",
    location: "North Oak",
    length: "short",
    difficulty: "Low",
    reward: "Kerry romance epilogue",
    summary:
      "A quiet getaway with Kerry that caps his arc on a hopeful note.",
    aiTip:
      "The tender close to Kerry's story — pure character payoff, no combat.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Boat%20Drinks%20walkthrough"
  },
  {
    id: 539,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Ex-Factor",
    location: "Kabuki – Watson",
    length: "medium",
    difficulty: "Medium",
    reward: "Judy arc, Clouds plan",
    summary:
      "Judy recruits V to strike back at the Tyger Claws controlling Clouds.",
    aiTip:
      "Opens the Judy questline proper; leads toward Pisces and the romance.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Ex-Factor%20walkthrough"
  },
  {
    id: 540,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Both Sides, Now",
    location: "Kabuki – Watson",
    length: "short",
    difficulty: "Low",
    reward: "Judy relationship deepens",
    summary:
      "In the aftermath of Evelyn's tragedy, V and Judy share a raw, honest moment.",
    aiTip:
      "A short but pivotal beat for the Judy romance (female V).",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Both%20Sides%2C%20Now%20walkthrough"
  },
  {
    id: 541,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Pyramid Song",
    location: "Laguna Bend",
    length: "medium",
    difficulty: "Low",
    reward: "Judy romance, diving date",
    summary:
      "Judy takes V free-diving to a submerged town and her drowned past.",
    aiTip:
      "The Judy romance culminates here for female V — a beautiful, quiet quest.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Pyramid%20Song%20walkthrough"
  },
  {
    id: 542,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "Human Nature",
    location: "Rancho Coronado",
    length: "short",
    difficulty: "Low",
    reward: "Delamain arc tie-in, karma",
    summary:
      "A tangled favor exposing how far people (and AIs) will go to feel something real.",
    aiTip:
      "A short character piece — the choice at the end has a small moral weight.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Human%20Nature%20walkthrough"
  },
  {
    id: 543,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Send in the Clowns",
    location: "Kabuki – Watson",
    length: "short",
    difficulty: "Low",
    reward: "Chaotic night out, unique gear",
    summary:
      "A deranged clown gang drags V into one of Night City's weirdest nights.",
    aiTip:
      "Roll with the absurdity — the loot and the story are worth the chaos.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Send%20in%20the%20Clowns%20walkthrough"
  },
  {
    id: 544,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Heywood",
    title: "Sweet Dreams",
    location: "Vista del Rey",
    length: "short",
    difficulty: "Medium",
    reward: "Stinger scam survived, cautionary tale",
    summary:
      "A 'harmless' braindance hookup turns into a robbery-by-implant nightmare.",
    aiTip:
      "A cautionary vignette — expect a fight to reclaim your gear.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Sweet%20Dreams%20walkthrough"
  },
  {
    id: 545,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Fortunate Son",
    location: "Badlands",
    length: "short",
    difficulty: "Low",
    reward: "Old cowboy's last wish",
    summary:
      "Help a dying Badlands old-timer settle his affairs under the desert sky.",
    aiTip:
      "A melancholy, low-combat quest — a nice change of pace.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Fortunate%20Son%20walkthrough"
  },
  {
    id: 546,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Coin Operated Boy",
    location: "Kabuki – Watson",
    length: "short",
    difficulty: "Low",
    reward: "Emotional robot vignette",
    summary:
      "V encounters a decommissioned companion android with an unexpectedly human problem.",
    aiTip:
      "Short and bittersweet — the choice is about compassion, not combat.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Coin%20Operated%20Boy%20walkthrough"
  },
  {
    id: 547,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "War Pigs",
    location: "City Center",
    length: "short",
    difficulty: "Medium",
    reward: "Corporate espionage, coin",
    summary:
      "A tense corporate job that reminds V how ruthless Night City's suits can be.",
    aiTip:
      "Scan for the quiet route; a loud approach draws heavy corpo security.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20War%20Pigs%20walkthrough"
  },
  {
    id: 548,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "Only Pain",
    location: "Santo Domingo",
    length: "short",
    difficulty: "Medium",
    reward: "Cult mystery, moral choice",
    summary:
      "Investigate a pain-worshipping cult and the disturbing draw it holds over its members.",
    aiTip:
      "A dark thread connected to the Sinnerman arc's themes.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Only%20Pain%20walkthrough"
  },
  {
    id: 549,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Westbrook",
    title: "Every Breath You Take",
    location: "Japantown – Westbrook",
    length: "short",
    difficulty: "Medium",
    reward: "Stalker exposed, victim saved",
    summary:
      "Uncover a predator using braindance tech to stalk victims and shut him down.",
    aiTip:
      "Investigate the studio thoroughly before confronting him.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Every%20Breath%20You%20Take%20walkthrough"
  },
  {
    id: 550,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Small Man, Big Mouth",
    location: "Kabuki – Watson",
    length: "short",
    difficulty: "Low",
    reward: "Fixer favor, coin",
    summary:
      "A loudmouth's tall tales land him in trouble that V has to untangle.",
    aiTip:
      "A quick, flavorful favor — light combat, good pocket money.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Small%20Man%2C%20Big%20Mouth%20walkthrough"
  },
  {
    id: 551,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "I'll Fly Away",
    location: "Badlands",
    length: "short",
    difficulty: "Low",
    reward: "Nomad tragedy, closure",
    summary:
      "A somber Badlands job about loss on the open road.",
    aiTip:
      "A quiet story beat — read the shards for the full picture.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20I'll%20Fly%20Away%20walkthrough"
  },
  {
    id: 552,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "Kold Mirage",
    location: "Santo Domingo",
    length: "medium",
    difficulty: "Medium",
    reward: "Blue Eyes / Mr. Blue lead, Bartmoss myth",
    summary:
      "Chase the legend of Rache Bartmoss's cyberdeck and the secrets it hides.",
    aiTip:
      "Ties into the mysterious 'Mr. Blue Eyes' thread — atmospheric and lore-rich.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Kold%20Mirage%20walkthrough"
  },
  {
    id: 553,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "Killing in the Name",
    location: "City Center",
    length: "medium",
    difficulty: "Medium",
    reward: "Bes Isis netrunner arc, unique reward",
    summary:
      "Team with the anti-corpo netrunner Bes Isis to expose a subliminal advertising conspiracy.",
    aiTip:
      "A multi-step investigative chain — quickhacks and stealth pay off.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Killing%20in%20the%20Name%20walkthrough"
  },
  {
    id: 554,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Heywood",
    title: "Raymond Chandler Evening",
    location: "Heywood",
    length: "short",
    difficulty: "Low",
    reward: "Barry's storyline, karma",
    summary:
      "A follow-up to Happy Together about the aftermath of a life saved.",
    aiTip:
      "A quiet epilogue that rewards having handled Barry's crisis with care.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Raymond%20Chandler%20Evening%20walkthrough"
  },
  {
    id: 555,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Dancing on a Minefield",
    location: "North Oak",
    length: "short",
    difficulty: "Medium",
    reward: "Rogue romance beat",
    summary:
      "A charged night with Rogue Amendiares that can spark an older-flame romance.",
    aiTip:
      "Part of Rogue's arc — advancing it opens her ending path with Johnny.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Dancing%20on%20a%20Minefield%20walkthrough"
  },
  {
    id: 556,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Blistering Love",
    location: "Silver Pines Drive-In",
    length: "short",
    difficulty: "Low",
    reward: "Rogue date, drive-in movie",
    summary:
      "Take Rogue to a drive-in for a rare tender night amid all the violence.",
    aiTip:
      "A charming Rogue romance beat — enjoy the quiet before the storms.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Blistering%20Love%20walkthrough"
  },
  {
    id: 557,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "A Cool Metal Fire",
    location: "Afterlife",
    length: "short",
    difficulty: "Low",
    reward: "Johnny & Rogue reconciliation",
    summary:
      "Old wounds between Johnny and Rogue surface as V mediates a fraught reunion.",
    aiTip:
      "Advances both the Rogue arc and Johnny's rapport (secret-ending relevant).",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20A%20Cool%20Metal%20Fire%20walkthrough"
  },
  {
    id: 558,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Gig: Two Wrongs Makes Us Right",
    location: "Watson – Kabuki",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Watson: Recover a stolen car and settle a double-cross for Regina Jones.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Two%20Wrongs%20Makes%20Us%20Right%20walkthrough"
  },
  {
    id: 559,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Gig: Shark in the Water",
    location: "Watson – Northside",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Watson: Extract a hostage from a Maelstrom-linked kidnapping.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Shark%20in%20the%20Water%20walkthrough"
  },
  {
    id: 560,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Gig: Woman of La Mancha",
    location: "Watson – Northside",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Watson: Retrieve stolen tech from a gang stronghold for Regina.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Woman%20of%20La%20Mancha%20walkthrough"
  },
  {
    id: 561,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Gig: Hot Merchandise",
    location: "Watson – Kabuki",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Watson: Rescue trafficked victims from a slaver operation.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Hot%20Merchandise%20walkthrough"
  },
  {
    id: 562,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Gig: Backs Against the Wall",
    location: "Watson – Northside",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Watson: Save a Militech agent pinned down by Maelstrom.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Backs%20Against%20the%20Wall%20walkthrough"
  },
  {
    id: 563,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Gig: Big Pete's Got Big Problems",
    location: "Watson – Kabuki",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Watson: Sort out a small-time dealer's very large debt problem.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Big%20Pete's%20Got%20Big%20Problems%20walkthrough"
  },
  {
    id: 564,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Gig: Eye for an Eye",
    location: "Watson – Kabuki",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Watson: Recover a client's stolen property and mete out payback.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Eye%20for%20an%20Eye%20walkthrough"
  },
  {
    id: 565,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Watson",
    title: "Gig: Cuckoo's Nest",
    location: "Watson – Northside",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Watson: Investigate a compromised safehouse for Regina.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Cuckoo's%20Nest%20walkthrough"
  },
  {
    id: 566,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Westbrook",
    title: "Gig: Wakako's Favorite",
    location: "Westbrook – Japantown",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Westbrook: Handle a delicate personal matter for fixer Wakako Okada.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Wakako's%20Favorite%20walkthrough"
  },
  {
    id: 567,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Westbrook",
    title: "Gig: Occupational Hazard",
    location: "Westbrook – Charter Hill",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Westbrook: Clear a Tyger Claws den threatening one of Wakako's clients.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Occupational%20Hazard%20walkthrough"
  },
  {
    id: 568,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Westbrook",
    title: "Gig: Dirty Biz",
    location: "Westbrook – Japantown",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Westbrook: Untangle a shady deal gone wrong in Japantown.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Dirty%20Biz%20walkthrough"
  },
  {
    id: 569,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Heywood",
    title: "Gig: God Bless This Mess",
    location: "Heywood – Wellsprings",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Heywood: Recover a stolen relic before Padre's client loses everything.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20God%20Bless%20This%20Mess%20walkthrough"
  },
  {
    id: 570,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Heywood",
    title: "Gig: Old Friends",
    location: "Heywood – The Glen",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Heywood: Settle an old debt between former partners for Padre.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Old%20Friends%20walkthrough"
  },
  {
    id: 571,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Heywood",
    title: "Gig: Hippocratic Oath",
    location: "Heywood – Vista del Rey",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Heywood: Rescue a doctor forced to work for a gang.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Hippocratic%20Oath%20walkthrough"
  },
  {
    id: 572,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Pacifica",
    title: "Gig: Race to the Top",
    location: "Pacifica – Coastview",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Pacifica: Extract a target from a fortified position for El Capitán.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Race%20to%20the%20Top%20walkthrough"
  },
  {
    id: 573,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Pacifica",
    title: "Gig: No Fixers",
    location: "Pacifica – Coastview",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Pacifica: Handle a job the other fixers wouldn't touch.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20No%20Fixers%20walkthrough"
  },
  {
    id: 574,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Pacifica",
    title: "Gig: Sr. Ladrillo's Private Collection",
    location: "Pacifica – West Wind Estate",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Pacifica: Steal back a prized collection from a Pacifica warlord.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Sr.%20Ladrillo's%20Private%20Collection%20walkthrough"
  },
  {
    id: 575,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Gig: Over the Edge",
    location: "Badlands – Rocky Ridge",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Badlands: Stop a raffen ambush in the Badlands for Dakota.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Over%20the%20Edge%20walkthrough"
  },
  {
    id: 576,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Gig: Family Matters",
    location: "Badlands – Jackson Plains",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Badlands: Resolve a violent nomad family feud.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Family%20Matters%20walkthrough"
  },
  {
    id: 577,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Gig: An Inconvenient Killer",
    location: "Badlands – near Sunset Motel",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Badlands: Take down a rogue killer threatening Dakota's clients.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20An%20Inconvenient%20Killer%20walkthrough"
  },
  {
    id: 578,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Badlands",
    title: "Gig: Trevor's Last Ride",
    location: "Badlands – Rocky Ridge",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Badlands: Recover a hijacked truck and its driver in the wastes.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Trevor's%20Last%20Ride%20walkthrough"
  },
  {
    id: 579,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "Gig: Going-away Party",
    location: "Santo Domingo – Rancho Coronado",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Santo Domingo: Extract a defecting 6th Street member before payback lands.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Going-away%20Party%20walkthrough"
  },
  {
    id: 580,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "Gig: Bring Me the Head of Gustavo Orta",
    location: "Santo Domingo – Arroyo",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Santo Domingo: Capture or kill a slippery target for fixer Dino Dinovic.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Bring%20Me%20the%20Head%20of%20Gustavo%20Orta%20walkthrough"
  },
  {
    id: 581,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Santo Domingo",
    title: "Gig: Many Ways to Skin a Cat",
    location: "Santo Domingo – Arroyo",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in Santo Domingo: Recover stolen corporate data from an industrial site.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20Many%20Ways%20to%20Skin%20a%20Cat%20walkthrough"
  },
  {
    id: 582,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "City Center",
    title: "Gig: The Lord Giveth and Taketh Away",
    location: "City Center – Downtown",
    length: "short",
    difficulty: "Medium",
    reward: "Fixer payout, street cred, gear",
    summary:
      "A fixer gig in City Center: Retrieve compromising evidence from a corpo penthouse.",
    aiTip:
      "Scout the site first — stealth extraction usually beats a loud firefight for the full payout.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Gig%3A%20The%20Lord%20Giveth%20and%20Taketh%20Away%20walkthrough"
  },
  {
    id: 583,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Dogtown",
    title: "Phantom Liberty – You Know My Name",
    location: "Dogtown",
    length: "medium",
    difficulty: "High",
    reward: "Reed/Alex intel, Dogtown deepens",
    summary:
      "V and Solomon Reed work a Dogtown lead through the enigmatic netrunner Songbird.",
    aiTip:
      "Dialogue choices here nudge the branching Phantom Liberty ending — play consistent.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Phantom%20Liberty%20%E2%80%93%20You%20Know%20My%20Name%20walkthrough"
  },
  {
    id: 584,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Dogtown",
    title: "Phantom Liberty – Get It Together",
    location: "Dogtown",
    length: "long",
    difficulty: "High",
    reward: "Songbird cure plan advances",
    summary:
      "Assemble the crew and gear for the plan to save Songbird as Barghest closes in.",
    aiTip:
      "Prep loadouts — this leads into some of the DLC's toughest fights.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Phantom%20Liberty%20%E2%80%93%20Get%20It%20Together%20walkthrough"
  },
  {
    id: 585,
    type: "main",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Dogtown",
    title: "Phantom Liberty – Birds with Broken Wings",
    location: "Dogtown",
    length: "long",
    difficulty: "High",
    reward: "Major branch point, Reed vs Songbird",
    summary:
      "A tense operation forces V to weigh loyalty to Reed against sympathy for Songbird.",
    aiTip:
      "This is the pivotal choice that steers you toward one of the two endings.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Phantom%20Liberty%20%E2%80%93%20Birds%20with%20Broken%20Wings%20walkthrough"
  },
  {
    id: 586,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Dogtown",
    title: "Phantom Liberty Gig: Spy in the Jungle",
    location: "Dogtown",
    length: "short",
    difficulty: "Medium",
    reward: "Mr. Hands payout, Dogtown rep",
    summary:
      "Mr. Hands sends V to surveil and handle a target hiding in Dogtown's overgrowth.",
    aiTip:
      "Bring optical camo or netrunner tools — stealth is the intended route.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Phantom%20Liberty%20Gig%3A%20Spy%20in%20the%20Jungle%20walkthrough"
  },
  {
    id: 587,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Dogtown",
    title: "Phantom Liberty Gig: Waiting for Dodger",
    location: "Dogtown",
    length: "short",
    difficulty: "Medium",
    reward: "Mr. Hands payout, gear",
    summary:
      "Navigate Dogtown's power games to deal with the gang boss Dodger's people.",
    aiTip:
      "Read the situation before shooting — some Dogtown targets are better turned than killed.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Phantom%20Liberty%20Gig%3A%20Waiting%20for%20Dodger%20walkthrough"
  },
  {
    id: 588,
    type: "side",
    game: "Cyberpunk 2077: Ultimate Edition",
    region: "Dogtown",
    title: "Phantom Liberty Gig: Prototype in the Scraper",
    location: "Dogtown",
    length: "short",
    difficulty: "High",
    reward: "Rare Militech prototype, payout",
    summary:
      "Infiltrate a Dogtown high-rise to secure a stolen Militech prototype.",
    aiTip:
      "Vertical, guarded, and trapped — take the rooftop approach and disable cameras.",
    video: "https://www.youtube.com/results?search_query=Cyberpunk%202077%20Phantom%20Liberty%20Gig%3A%20Prototype%20in%20the%20Scraper%20walkthrough"
  },
  {
    id: 589,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "White Orchard",
    title: "Lilac and Gooseberries",
    location: "White Orchard",
    length: "short",
    difficulty: "Low",
    reward: "Yennefer's trail, story start",
    summary:
      "Geralt and Vesemir follow Yennefer's summons to war-torn White Orchard, hunting a griffin along the way.",
    aiTip:
      "The prologue teaches combat basics — do the fistfight and griffin hunt before moving on.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Lilac%20and%20Gooseberries%20walkthrough"
  },
  {
    id: 590,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "White Orchard",
    title: "The Beast of White Orchard",
    location: "White Orchard",
    length: "medium",
    difficulty: "Medium",
    reward: "Griffin slain, Nilfgaard contact",
    summary:
      "Track and slay the royal griffin terrorizing White Orchard to earn passage and information.",
    aiTip:
      "Craft Grapeshot bombs and use the crossbow to ground the griffin mid-flight.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20The%20Beast%20of%20White%20Orchard%20walkthrough"
  },
  {
    id: 591,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Imperial Audience",
    location: "Velen",
    length: "short",
    difficulty: "Low",
    reward: "Emperor's contract, Ciri's trail",
    summary:
      "Geralt is escorted to Emperor Emhyr, who hires him to find Ciri before the Wild Hunt does.",
    aiTip:
      "Dialogue-only — sets the whole story in motion and your reward for finding Ciri.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Imperial%20Audience%20walkthrough"
  },
  {
    id: 592,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "The Nilfgaardian Connection",
    location: "Velen",
    length: "medium",
    difficulty: "Medium",
    reward: "Ciri lead, Baron introduction",
    summary:
      "Chase Ciri's trail to Velen's Bloody Baron, following a Nilfgaardian informant network.",
    aiTip:
      "Opens the Velen questlines — the Baron holds the key to Ciri's whereabouts.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20The%20Nilfgaardian%20Connection%20walkthrough"
  },
  {
    id: 593,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Family Matters",
    location: "Velen",
    length: "long",
    difficulty: "High",
    reward: "Baron's family, Ciri intel",
    summary:
      "Help the Bloody Baron find his missing wife and daughter in exchange for news of Ciri.",
    aiTip:
      "Your choices about the Baron's family have major, lasting consequences — tread carefully.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Family%20Matters%20walkthrough"
  },
  {
    id: 594,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Ladies of the Wood",
    location: "Velen",
    length: "long",
    difficulty: "High",
    reward: "Crones' bargain, orphans' fate",
    summary:
      "Deal with the sinister Crones of Crookback Bog and the Ghost in the Whispering Hillock.",
    aiTip:
      "The Whispering Hillock choice ripples into the Baron's fate — think before you free the spirit.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Ladies%20of%20the%20Wood%20walkthrough"
  },
  {
    id: 595,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "Broken Flowers",
    location: "Novigrad",
    length: "medium",
    difficulty: "Medium",
    reward: "Dandelion's trail, old contacts",
    summary:
      "Search Novigrad's underworld for Dandelion by retracing his romances and debts.",
    aiTip:
      "Visit all the leads — the trail winds through the city's most colorful characters.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Broken%20Flowers%20walkthrough"
  },
  {
    id: 596,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "Get Junior",
    location: "Novigrad",
    length: "long",
    difficulty: "High",
    reward: "Dandelion found, Whoreson Junior",
    summary:
      "Take down the sadistic crime boss Whoreson Junior to rescue Dandelion.",
    aiTip:
      "The casino/arena fight is tough — bring Golden Oriole and heavy attacks.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Get%20Junior%20walkthrough"
  },
  {
    id: 597,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "A Favor for Radovid",
    location: "Novigrad",
    length: "short",
    difficulty: "Medium",
    reward: "Radovid's aid, Dijkstra path",
    summary:
      "The mad king Radovid offers help finding Dandelion's associates — for a price.",
    aiTip:
      "Radovid is dangerous; his questline steers Novigrad's political ending.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20A%20Favor%20for%20Radovid%20walkthrough"
  },
  {
    id: 598,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "The Gangs of Novigrad",
    location: "Novigrad",
    length: "long",
    difficulty: "High",
    reward: "Dijkstra alliance, coup groundwork",
    summary:
      "Broker between Dijkstra, Roche, and the city's gangs to plot against Radovid.",
    aiTip:
      "Sets up the Novigrad power struggle — choices here decide who rules the North.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20The%20Gangs%20of%20Novigrad%20walkthrough"
  },
  {
    id: 599,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "Destination: Skellige",
    location: "Skellige",
    length: "short",
    difficulty: "Medium",
    reward: "Skellige reached, Ciri's trail",
    summary:
      "Sail to the storm-lashed isles of Skellige to continue the hunt for Ciri.",
    aiTip:
      "Opens the Skellige map — buy a Skellige boat and start exploring the smugglers' caches.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Destination%3A%20Skellige%20walkthrough"
  },
  {
    id: 600,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "The King is Dead — Long Live the King",
    location: "Skellige",
    length: "long",
    difficulty: "High",
    reward: "Cerys/Hjalmar succession, Ciri clue",
    summary:
      "A royal wedding turns to bloodshed as Skellige's succession crisis explodes.",
    aiTip:
      "Your support of Cerys or Hjalmar decides who becomes ruler of Skellige.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20The%20King%20is%20Dead%20%E2%80%94%20Long%20Live%20the%20King%20walkthrough"
  },
  {
    id: 601,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "Nameless",
    location: "Skellige",
    length: "medium",
    difficulty: "High",
    reward: "Ciri reunion, Wild Hunt closes in",
    summary:
      "The pieces come together on Skellige as Geralt finally closes on Ciri and Uma's curse.",
    aiTip:
      "Leads into Ugly Baby and the Kaer Morhen preparations — a major story turn.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Nameless%20walkthrough"
  },
  {
    id: 602,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "The Isle of Mists",
    location: "Skellige",
    length: "long",
    difficulty: "High",
    reward: "Ciri found, act turn",
    summary:
      "Geralt braves the cursed Isle of Mists to find Ciri — a pivotal, mood-defining chapter.",
    aiTip:
      "Your accumulated choices toward Ciri start paying off here; be kind, not commanding.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20The%20Isle%20of%20Mists%20walkthrough"
  },
  {
    id: 603,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    title: "The Battle of Kaer Morhen",
    location: "Kaer Morhen",
    length: "long",
    difficulty: "High",
    reward: "Wild Hunt repelled, allies' cost",
    summary:
      "Rally the witchers, sorceresses, and friends to defend Kaer Morhen against the Wild Hunt.",
    aiTip:
      "Recruit as many allies beforehand as you can — it changes who survives the siege.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20The%20Battle%20of%20Kaer%20Morhen%20walkthrough"
  },
  {
    id: 604,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    title: "Blood on the Battlefield",
    location: "Kaer Morhen",
    length: "short",
    difficulty: "Medium",
    reward: "Aftermath, Ciri's grief",
    summary:
      "Pick up the pieces after the Wild Hunt's assault and steady Ciri for the road ahead.",
    aiTip:
      "How you comfort Ciri here feeds into her ending — encourage, don't pressure.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Blood%20on%20the%20Battlefield%20walkthrough"
  },
  {
    id: 605,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Bald Mountain",
    location: "Velen",
    length: "long",
    difficulty: "High",
    reward: "Crones defeated, Ciri's power",
    summary:
      "Geralt and Ciri storm Bald Mountain to end the Crones and unleash Ciri's Elder Blood.",
    aiTip:
      "Let Ciri take the lead in the playable segment; it strengthens her confidence.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Bald%20Mountain%20walkthrough"
  },
  {
    id: 606,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "Through Time and Space",
    location: "Skellige",
    length: "medium",
    difficulty: "High",
    reward: "Avallac'h's path, elven worlds",
    summary:
      "Travel with Avallac'h across shattered worlds via magic portals to find a way to stop the White Frost.",
    aiTip:
      "A surreal, linear chapter — enjoy the alien vistas between fights.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Through%20Time%20and%20Space%20walkthrough"
  },
  {
    id: 607,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "Tedd Deireadh, the Final Age",
    location: "Undvik / Skellige",
    length: "long",
    difficulty: "High",
    reward: "Final battle, Eredin defeated",
    summary:
      "The climactic confrontation with the Wild Hunt's king, Eredin Bréacc Glas.",
    aiTip:
      "Your choices across the whole game converge here — the Eredin duel is the story's peak.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Tedd%20Deireadh%2C%20the%20Final%20Age%20walkthrough"
  },
  {
    id: 608,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    title: "Something Ends, Something Begins",
    location: "Various",
    length: "short",
    difficulty: "Medium",
    reward: "Epilogue, Ciri's fate",
    summary:
      "The quiet epilogue where Geralt's and Ciri's fates are sealed by everything you've done.",
    aiTip:
      "There are three Ciri endings — small kindnesses throughout the game decide which you get.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Something%20Ends%2C%20Something%20Begins%20walkthrough"
  },
  {
    id: 609,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Evil's Soul",
    location: "Oxenfurt (Hearts of Stone)",
    length: "medium",
    difficulty: "High",
    reward: "Olgierd's pact, Gaunter O'Dimm",
    summary:
      "Bound to the immortal Olgierd von Everec by Gaunter O'Dimm, Geralt must grant three impossible wishes.",
    aiTip:
      "Kicks off Hearts of Stone — O'Dimm is the franchise's most sinister figure; watch his words.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Evil's%20Soul%20walkthrough"
  },
  {
    id: 610,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Whatsoever a Man Soweth...",
    location: "Oxenfurt (Hearts of Stone)",
    length: "medium",
    difficulty: "Medium",
    reward: "Olgierd's first wish, heist prep",
    summary:
      "Fulfill Olgierd's first bizarre wish involving a rowdy wedding and a runaway spirit.",
    aiTip:
      "Leads into Dead Man's Party — expect chaos and comedy in equal measure.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Whatsoever%20a%20Man%20Soweth...%20walkthrough"
  },
  {
    id: 611,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Bald Mountain (HoS): A Midnight Clear",
    location: "Garin Estate (Hearts of Stone)",
    length: "medium",
    difficulty: "High",
    reward: "O'Dimm's game, final choice",
    summary:
      "The reckoning with Gaunter O'Dimm — outwit the devil in a deadly riddle to save your soul.",
    aiTip:
      "The final riddle has a time limit and a hidden solution; explore the mirror-world fully.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Bald%20Mountain%20(HoS)%3A%20A%20Midnight%20Clear%20walkthrough"
  },
  {
    id: 612,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Toussaint",
    title: "Envoys, Wineboys",
    location: "Toussaint (Blood and Wine)",
    length: "medium",
    difficulty: "Medium",
    reward: "Toussaint arrives, knights' errand",
    summary:
      "Duchess Anna Henrietta's knights summon Geralt to fairy-tale Toussaint to hunt a beast slaying knights.",
    aiTip:
      "Opens Blood and Wine and the Corvo Bianco vineyard — a huge, gorgeous new region.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Envoys%2C%20Wineboys%20walkthrough"
  },
  {
    id: 613,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Toussaint",
    title: "The Beast of Toussaint (B&W)",
    location: "Toussaint (Blood and Wine)",
    length: "long",
    difficulty: "High",
    reward: "Vampire mystery deepens",
    summary:
      "Investigate the grisly knight-killings plaguing Beauclair and the higher vampire behind them.",
    aiTip:
      "Craft vampire-oil and Black Blood early — the expansion's foes are vampires of every stripe.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20The%20Beast%20of%20Toussaint%20(B%26W)%20walkthrough"
  },
  {
    id: 614,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Toussaint",
    title: "Blood Run",
    location: "Toussaint (Blood and Wine)",
    length: "long",
    difficulty: "High",
    reward: "Dettlaff confrontation, Syanna lead",
    summary:
      "Chase the vampire Dettlaff through Beauclair as the conspiracy tightens around Syanna.",
    aiTip:
      "A dramatic set-piece pursuit — your handling of Syanna shapes the expansion's ending.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Blood%20Run%20walkthrough"
  },
  {
    id: 615,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Toussaint",
    title: "Tesham Mutna",
    location: "Toussaint (Blood and Wine)",
    length: "long",
    difficulty: "High",
    reward: "Regis's aid, vampire lore",
    summary:
      "Delve into vampire history with Regis to find a way to stop Dettlaff's rampage.",
    aiTip:
      "Regis is a fantastic companion here — soak in the lore before the finale.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Tesham%20Mutna%20walkthrough"
  },
  {
    id: 616,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Toussaint",
    title: "Beyond Hill and Dale... (B&W)",
    location: "Land of a Thousand Fables",
    length: "medium",
    difficulty: "Medium",
    reward: "Syanna found, fairy-tale realm",
    summary:
      "Enter the storybook Land of a Thousand Fables to find the runaway Syanna.",
    aiTip:
      "A whimsical, colorful detour — a delightful contrast to the vampire horror.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Beyond%20Hill%20and%20Dale...%20(B%26W)%20walkthrough"
  },
  {
    id: 617,
    type: "main",
    game: "The Witcher 3: Wild Hunt",
    region: "Toussaint",
    title: "Pomp and Strange Circumstance",
    location: "Toussaint (Blood and Wine)",
    length: "long",
    difficulty: "High",
    reward: "Blood and Wine finale, ending choice",
    summary:
      "The climax of Blood and Wine, where the fate of Dettlaff, Syanna, and the duchess is decided.",
    aiTip:
      "The ending hinges on earlier choices about Syanna — there's no purely happy outcome.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Pomp%20and%20Strange%20Circumstance%20walkthrough"
  },
  {
    id: 618,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Fake Papers",
    location: "Velen",
    length: "short",
    difficulty: "Low",
    reward: "Refugee saved, coin",
    summary:
      "Help a refugee forge papers to escape Velen's war and the Nilfgaardian dragnet.",
    aiTip:
      "A small mercy quest — the outcome depends on trusting the right smuggler.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Fake%20Papers%20walkthrough"
  },
  {
    id: 619,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "A Greedy God",
    location: "Velen",
    length: "short",
    difficulty: "Medium",
    reward: "Sylvan/godling lore, reward",
    summary:
      "Investigate a bog 'god' extorting a village and decide the fate of the creature behind it.",
    aiTip:
      "Read the situation — the 'god' isn't quite what the frightened villagers claim.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20A%20Greedy%20God%20walkthrough"
  },
  {
    id: 620,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "The Volunteer",
    location: "Velen",
    length: "short",
    difficulty: "Low",
    reward: "Elf's fate, karma",
    summary:
      "An elf begs Geralt to help find her people amid the ruins of a flooded elven bath house.",
    aiTip:
      "A melancholy quest about Velen's forgotten dead — light on combat, heavy on mood.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20The%20Volunteer%20walkthrough"
  },
  {
    id: 621,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Funeral Pyres",
    location: "Velen",
    length: "short",
    difficulty: "Low",
    reward: "Coin, karma",
    summary:
      "Deal with the Nilfgaardian soldiers desecrating the dead across Velen's battlefields.",
    aiTip:
      "A quick moral-choice quest as you cross Velen — small reward, clear conscience.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Funeral%20Pyres%20walkthrough"
  },
  {
    id: 622,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "The Fall of the House of Reardon",
    location: "Velen",
    length: "short",
    difficulty: "Medium",
    reward: "Wraith lore, treasure",
    summary:
      "Investigate a haunted, abandoned estate and the tragedy that cursed the Reardon family.",
    aiTip:
      "Specter Oil and Yrden for the wraith; loot the manor for a tidy sum.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20The%20Fall%20of%20the%20House%20of%20Reardon%20walkthrough"
  },
  {
    id: 623,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "Gwent: Old Pals",
    location: "Novigrad",
    length: "short",
    difficulty: "Low",
    reward: "Rare Gwent cards",
    summary:
      "Play Novigrad's finest Gwent players to win rare cards for your collection.",
    aiTip:
      "Build a solid Northern Realms or Nilfgaard deck first — these opponents don't hold back.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Gwent%3A%20Old%20Pals%20walkthrough"
  },
  {
    id: 624,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Gwent: Playing Innkeeps",
    location: "Velen",
    length: "short",
    difficulty: "Low",
    reward: "Gwent cards, coin",
    summary:
      "Tour the taverns of Velen and Novigrad beating innkeepers at Gwent.",
    aiTip:
      "A relaxing card-collecting circuit — grab every card you can before the bigger tournaments.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Gwent%3A%20Playing%20Innkeeps%20walkthrough"
  },
  {
    id: 625,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Novigrad",
    title: "A Deadly Plot",
    location: "Novigrad",
    length: "medium",
    difficulty: "Medium",
    reward: "Triss & mages arc, ambush foiled",
    summary:
      "Uncover a witch-hunter plot targeting Triss and the fleeing mages of Novigrad.",
    aiTip:
      "Ties into the Triss romance and the mage-smuggling arc — investigate thoroughly.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20A%20Deadly%20Plot%20walkthrough"
  },
  {
    id: 626,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "Contract: The Phantom of Eldberg",
    location: "Skellige",
    length: "short",
    difficulty: "Medium",
    reward: "Coin, wraith trophy",
    summary:
      "A lighthouse keeper's death has loosed a vicious wraith on a Skellige isle.",
    aiTip:
      "Restore the lighthouse flame and use Yrden against the penitent wraith.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Contract%3A%20The%20Phantom%20of%20Eldberg%20walkthrough"
  },
  {
    id: 627,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "White Orchard",
    title: "Contract: Missing Brother",
    location: "White Orchard",
    length: "short",
    difficulty: "Low",
    reward: "Coin, cockatrice/monster trophy",
    summary:
      "A woman's brother has vanished on the road; follow the grisly trail to the culprit.",
    aiTip:
      "An early contract that teaches monster tracking with Witcher Senses.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Contract%3A%20Missing%20Brother%20walkthrough"
  },
  {
    id: 628,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Contract: The Merry Widow",
    location: "Velen",
    length: "short",
    difficulty: "Medium",
    reward: "Coin, grave hag trophy",
    summary:
      "Villagers near a crossroads are slain by a grave hag feeding on the war dead.",
    aiTip:
      "Golden Oriole against its poison, and strike hard when it lunges from the ground.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Contract%3A%20The%20Merry%20Widow%20walkthrough"
  },
  {
    id: 629,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Contract: The Oxenfurt Drunk",
    location: "Velen (Hearts of Stone)",
    length: "short",
    difficulty: "Medium",
    reward: "Coin, monster trophy",
    summary:
      "A 'drunk' terrorizing Oxenfurt's outskirts turns out to be something far worse.",
    aiTip:
      "Investigate the attacks first — the true culprit isn't the obvious one.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Contract%3A%20The%20Oxenfurt%20Drunk%20walkthrough"
  },
  {
    id: 630,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Scavenger Hunt: Cat School Gear",
    location: "Velen / Novigrad",
    length: "medium",
    difficulty: "Medium",
    reward: "Feline witcher armor set",
    summary:
      "Follow old maps to recover the fast, light Feline (Cat) School witcher gear.",
    aiTip:
      "Great for a crit/speed build — the upgrade diagrams span multiple regions.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Scavenger%20Hunt%3A%20Cat%20School%20Gear%20walkthrough"
  },
  {
    id: 631,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Velen",
    title: "Scavenger Hunt: Griffin School Gear",
    location: "Velen",
    length: "medium",
    difficulty: "Medium",
    reward: "Griffin witcher armor set",
    summary:
      "Track down the Griffin School gear diagrams, ideal for a Sign-focused build.",
    aiTip:
      "Griffin gear boosts Sign intensity — perfect for an Igni/Yrden playstyle.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Scavenger%20Hunt%3A%20Griffin%20School%20Gear%20walkthrough"
  },
  {
    id: 632,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "Scavenger Hunt: Bear School Gear",
    location: "Skellige",
    length: "medium",
    difficulty: "High",
    reward: "Ursine (Bear) witcher armor set",
    summary:
      "Climb Skellige's peaks and dive its wrecks for the heavy, tanky Ursine gear.",
    aiTip:
      "Bear gear favors heavy attacks and raw defense — a bruiser's set.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Scavenger%20Hunt%3A%20Bear%20School%20Gear%20walkthrough"
  },
  {
    id: 633,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    title: "Scavenger Hunt: Wolf School Gear",
    location: "Kaer Morhen",
    length: "medium",
    difficulty: "Medium",
    reward: "Wolven witcher armor set (balanced)",
    summary:
      "Recover the balanced Wolf School gear scattered around Kaer Morhen and Velen.",
    aiTip:
      "A well-rounded set — a safe default while you gather the specialized schools.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Scavenger%20Hunt%3A%20Wolf%20School%20Gear%20walkthrough"
  },
  {
    id: 634,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Toussaint",
    title: "Scavenger Hunt: Manticore School Gear",
    location: "Toussaint (Blood and Wine)",
    length: "medium",
    difficulty: "High",
    reward: "Manticore witcher set (alchemy)",
    summary:
      "Hunt the Manticore School gear across Toussaint for a potent alchemy-focused set.",
    aiTip:
      "Blood and Wine's best witcher set for a mutation/alchemy build — worth the trek.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Scavenger%20Hunt%3A%20Manticore%20School%20Gear%20walkthrough"
  },
  {
    id: 635,
    type: "side",
    game: "The Witcher 3: Wild Hunt",
    region: "Skellige",
    title: "Fists of Fury: Skellige",
    location: "Skellige",
    length: "short",
    difficulty: "Medium",
    reward: "Boxing champion coin",
    summary:
      "Beat Skellige's toughest brawlers in bare-knuckle boxing matches.",
    aiTip:
      "Dodge and counter — trading blows with the islanders is a losing game.",
    video: "https://www.youtube.com/results?search_query=Witcher%203%20Fists%20of%20Fury%3A%20Skellige%20walkthrough"
  },
  {
    id: 636,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    title: "World Intel: Remnawave Towers",
    location: "All regions",
    length: "short",
    difficulty: "Low",
    reward: "Map reveal, fast travel, rewards",
    summary:
      "Activate MAI's Remnawave communication towers to reveal each region's map and its intel objectives.",
    aiTip:
      "Do a region's tower first — it uncovers the Lifesprings, Fiend Intel, and Protorelic markers.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20World%20Intel%3A%20Remnawave%20Towers%20walkthrough"
  },
  {
    id: 637,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    title: "World Intel: Fiend Intel & Combat Assessments",
    location: "All regions",
    length: "medium",
    difficulty: "Medium",
    reward: "Combat sim unlocks, enhancement cores",
    summary:
      "Complete Chadley's Fiend Intel hunts and combat assessments to study the planet's monsters.",
    aiTip:
      "Exploit each fiend's weakness for the assessment bonus — it feeds Chadley's shop rewards.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20World%20Intel%3A%20Fiend%20Intel%20%26%20Combat%20Assessments%20walkthrough"
  },
  {
    id: 638,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    title: "World Intel: Lifesprings",
    location: "All regions",
    length: "short",
    difficulty: "Low",
    reward: "Planet lore, MP restoration",
    summary:
      "Investigate the mysterious Lifesprings welling up across each region for lore and rewards.",
    aiTip:
      "A relaxing collectible chain — the lore deepens the game's ecological themes.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20World%20Intel%3A%20Lifesprings%20walkthrough"
  },
  {
    id: 639,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    title: "World Intel: Divine Intel (Protorelics)",
    location: "All regions",
    length: "long",
    difficulty: "Medium",
    reward: "Summon materia, powerful abilities",
    summary:
      "Solve each region's multi-step Protorelic puzzle to earn unique summon materia.",
    aiTip:
      "These are the best World Intel rewards — do the region's other intel first to unlock them.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20World%20Intel%3A%20Divine%20Intel%20(Protorelics)%20walkthrough"
  },
  {
    id: 640,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    title: "World Intel: Expeditions & Chocobo Stops",
    location: "All regions",
    length: "short",
    difficulty: "Low",
    reward: "Chocobo traversal, map access",
    summary:
      "Restore Chocobo Stops and complete moogle expeditions to open up each region's traversal.",
    aiTip:
      "Unlocking the region chocobo (mountain, river, etc.) is essential for reaching hidden content.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20World%20Intel%3A%20Expeditions%20%26%20Chocobo%20Stops%20walkthrough"
  },
  {
    id: 641,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    title: "Queen's Blood: The Card Game",
    location: "Multiple regions",
    length: "medium",
    difficulty: "Medium",
    reward: "Rare cards, Queen's Blood champion",
    summary:
      "Master the in-world card game Queen's Blood, defeating players from Kalm to the Gold Saucer.",
    aiTip:
      "Balance offensive and defensive cards; the tournament ladder rewards a well-built deck.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Queen's%20Blood%3A%20The%20Card%20Game%20walkthrough"
  },
  {
    id: 642,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Junon",
    title: "Fort Condor",
    location: "Junon / Under Junon",
    length: "short",
    difficulty: "Low",
    reward: "Miniature-strategy rewards",
    summary:
      "Play the tower-defense minigame Fort Condor against escalating opponents.",
    aiTip:
      "Learn each unit's counter — cavalry beats ranged, ranged beats vanguard, and so on.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Fort%20Condor%20walkthrough"
  },
  {
    id: 643,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Corel",
    title: "3D Brawler",
    location: "Costa del Sol / Gold Saucer",
    length: "short",
    difficulty: "Medium",
    reward: "Minigame prizes",
    summary:
      "Face off in the reaction-based 3D Brawler boxing minigame for prizes and trophies.",
    aiTip:
      "Watch the opponent's tells and punish openings — patience beats button-mashing.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%203D%20Brawler%20walkthrough"
  },
  {
    id: 644,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Gongaga",
    title: "Gears & Gambits",
    location: "Multiple regions",
    length: "short",
    difficulty: "Low",
    reward: "Combat-sim programming rewards",
    summary:
      "Program tin soldiers in the auto-battle puzzle minigame Gears & Gambits.",
    aiTip:
      "Set your gambits to target weaknesses and heal at thresholds — then let them fight.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Gears%20%26%20Gambits%20walkthrough"
  },
  {
    id: 645,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Corel",
    title: "Chocobo Racing (Gold Saucer)",
    location: "Gold Saucer",
    length: "short",
    difficulty: "Low",
    reward: "Gil, GP, exclusive gear",
    summary:
      "Race chocobos around the Gold Saucer's tracks for gil, GP, and cosmetic rewards.",
    aiTip:
      "Manage stamina and grab boost pads — upgrade your chocobo's gear between races.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Chocobo%20Racing%20(Gold%20Saucer)%20walkthrough"
  },
  {
    id: 646,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    title: "Piano Performances",
    location: "Multiple regions",
    length: "short",
    difficulty: "Low",
    reward: "Sheet music, cosmetic rewards",
    summary:
      "Perform sheet music on pianos across the world in the rhythm minigame.",
    aiTip:
      "Start on Easy to learn the note mapping; nailing songs unlocks new sheets and rewards.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Piano%20Performances%20walkthrough"
  },
  {
    id: 647,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Grasslands",
    title: "Summon: Titan",
    location: "Grasslands",
    length: "medium",
    difficulty: "High",
    reward: "Titan summon materia",
    summary:
      "Best Titan in a combat simulator trial to earn the earth-elemental summon.",
    aiTip:
      "Ward against earth and punish its stagger windows — a strong early summon.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Summon%3A%20Titan%20walkthrough"
  },
  {
    id: 648,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Junon",
    title: "Summon: Alexander",
    location: "Junon",
    length: "medium",
    difficulty: "High",
    reward: "Alexander summon materia",
    summary:
      "Defeat the holy fortress Alexander in Chadley's VR trial for a powerful summon.",
    aiTip:
      "Holy-elemental Alexander is great against undead — bring MP-recovery for the fight.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Summon%3A%20Alexander%20walkthrough"
  },
  {
    id: 649,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Cosmo Canyon",
    title: "Summon: Bahamut Arisen",
    location: "Cosmo Canyon",
    length: "long",
    difficulty: "High",
    reward: "Bahamut Arisen summon materia",
    summary:
      "Overcome the ultimate dragon king Bahamut Arisen in a demanding VR assessment.",
    aiTip:
      "One of the toughest summon fights — max your materia and elemental resists first.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Summon%3A%20Bahamut%20Arisen%20walkthrough"
  },
  {
    id: 650,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Nibel",
    title: "Summon: Odin",
    location: "Nibel",
    length: "long",
    difficulty: "High",
    reward: "Odin summon materia",
    summary:
      "Face Odin under a strict time limit to claim the instant-death summon.",
    aiTip:
      "Odin's trial is a DPS race — build for maximum stagger and damage.",
    video: "https://www.youtube.com/results?search_query=FF7%20Rebirth%20Summon%3A%20Odin%20walkthrough"
  },
  {
    id: 651,
    type: "main",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "The Lost Sanctuary",
    location: "Vanaheim",
    length: "medium",
    difficulty: "Medium",
    reward: "Vanaheim exploration, story beat",
    summary:
      "Kratos and companions seek a hidden sanctuary in Vanaheim's jungle as the plan against Odin forms.",
    aiTip:
      "Vanaheim rewards revisiting — note favors you can't yet reach and return with new tools.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Lost%20Sanctuary%20walkthrough"
  },
  {
    id: 652,
    type: "main",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "The Runaway",
    location: "Midgard",
    length: "medium",
    difficulty: "Medium",
    reward: "Atreus's arc, trust tested",
    summary:
      "Atreus goes his own way, forcing Kratos to confront his son's independence and secrets.",
    aiTip:
      "A father-son turning point — the story leans into Atreus's playable sections here.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Runaway%20walkthrough"
  },
  {
    id: 653,
    type: "main",
    game: "God of War Ragnarök",
    region: "Muspelheim",
    title: "Into the Fire",
    location: "Muspelheim",
    length: "medium",
    difficulty: "High",
    reward: "Muspelheim opened, story beat",
    summary:
      "The party braves the fire realm of Muspelheim in pursuit of the tools of prophecy.",
    aiTip:
      "Muspelheim's heat and foes are brutal — upgrade armor before lingering for its trials.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Into%20the%20Fire%20walkthrough"
  },
  {
    id: 654,
    type: "main",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Unlocking the Mask",
    location: "Multiple realms",
    length: "medium",
    difficulty: "High",
    reward: "The mask's power, story turn",
    summary:
      "Assemble and unlock the ancient mask Atreus believes can reveal a way to change fate.",
    aiTip:
      "A lore-heavy chapter tying together threads from across the realms.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Unlocking%20the%20Mask%20walkthrough"
  },
  {
    id: 655,
    type: "main",
    game: "God of War Ragnarök",
    region: "Helheim",
    title: "Hunting for Solace",
    location: "Helheim",
    length: "medium",
    difficulty: "High",
    reward: "Grief confronted, story beat",
    summary:
      "A journey through Helheim forces the party to face loss before the war can begin.",
    aiTip:
      "Helheim's frost enemies resist ice — favor the Blades of Chaos throughout.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Hunting%20for%20Solace%20walkthrough"
  },
  {
    id: 656,
    type: "main",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "The Summoning",
    location: "Midgard",
    length: "medium",
    difficulty: "High",
    reward: "Allies gathered, Ragnarök nears",
    summary:
      "Kratos rallies the realms' champions for the coming war against Asgard.",
    aiTip:
      "Emotional pre-finale beat — make sure outstanding favors are done before the point of no return.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Summoning%20walkthrough"
  },
  {
    id: 657,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "A Viking Funeral",
    location: "Midgard",
    length: "short",
    difficulty: "Medium",
    reward: "'Dead' favor arc, gear",
    summary:
      "Help lay a fallen warrior to rest with the honor a Viking's death demands.",
    aiTip:
      "Part of the linked 'Dead' favors — completing all of them tells a full, moving story.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20A%20Viking%20Funeral%20walkthrough"
  },
  {
    id: 658,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "Cure for the Dead",
    location: "Vanaheim",
    length: "short",
    difficulty: "Medium",
    reward: "'Dead' favor arc, gear",
    summary:
      "Seek a remedy tied to the grim mystery running through Vanaheim's afflicted.",
    aiTip:
      "Follow the 'Dead' favor chain in order for the best narrative payoff.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Cure%20for%20the%20Dead%20walkthrough"
  },
  {
    id: 659,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "Garden for the Dead",
    location: "Vanaheim",
    length: "short",
    difficulty: "Medium",
    reward: "'Dead' favor arc conclusion, gear",
    summary:
      "Bring peace to a haunted Vanaheim garden as the 'Dead' favor trilogy concludes.",
    aiTip:
      "The capstone of the 'Dead' favors — a satisfying, somber resolution.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Garden%20for%20the%20Dead%20walkthrough"
  },
  {
    id: 660,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Casualty of War: The Toy",
    location: "Multiple realms",
    length: "short",
    difficulty: "Medium",
    reward: "Berserker Gravestone reward",
    summary:
      "Answer a Berserker's summons and defeat the vengeful undead champion.",
    aiTip:
      "Berserkers are optional bosses — upgrade gear first; they punish sloppy dodging.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Casualty%20of%20War%3A%20The%20Toy%20walkthrough"
  },
  {
    id: 661,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Casualty of War: The Hourglass",
    location: "Multiple realms",
    length: "short",
    difficulty: "High",
    reward: "Berserker Gravestone reward",
    summary:
      "Face another of the Nine Realms' Berserker souls in single combat.",
    aiTip:
      "Learn each Berserker's tells; parry-heavy play beats trading blows.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20Casualty%20of%20War%3A%20The%20Hourglass%20walkthrough"
  },
  {
    id: 662,
    type: "side",
    game: "God of War Ragnarök",
    region: "Svartalfheim",
    title: "What Lies Below",
    location: "Svartalfheim",
    length: "short",
    difficulty: "Medium",
    reward: "Dwarven vault loot",
    summary:
      "Investigate the tremors beneath a Svartalfheim mine and claim what's sealed within.",
    aiTip:
      "Use the Draupnir Spear's detonations to open the collapsed passages.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20What%20Lies%20Below%20walkthrough"
  },
  {
    id: 663,
    type: "side",
    game: "God of War Ragnarök",
    region: "Svartalfheim",
    title: "The Applecore",
    location: "Svartalfheim",
    length: "medium",
    difficulty: "Medium",
    reward: "Mining elevator restored, region access",
    summary:
      "Restore the derelict Applecore elevator to open up new areas of the Aurvangar Wetlands.",
    aiTip:
      "Reopening it unlocks traversal and hidden chests across the wetlands.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Applecore%20walkthrough"
  },
  {
    id: 664,
    type: "side",
    game: "God of War Ragnarök",
    region: "Svartalfheim",
    title: "The Weight of Chains (Lyngbakr)",
    location: "Svartalfheim",
    length: "medium",
    difficulty: "Medium",
    reward: "Lyngbakr freed, Mimir arc",
    summary:
      "Free the imprisoned sea beast Lyngbakr, chained by Odin, to ease Mimir's old guilt.",
    aiTip:
      "Requires returning with the right tools — a rewarding multi-step favor.",
    video: "https://www.youtube.com/results?search_query=God%20of%20War%20Ragnarok%20The%20Weight%20of%20Chains%20(Lyngbakr)%20walkthrough"
  },
  {
    id: 665,
    type: "main",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Cradle of Echoes",
    location: "Cauldron",
    length: "long",
    difficulty: "High",
    reward: "GAIA sub-function, override",
    summary:
      "Descend into a cauldron to recover another of GAIA's scattered sub-functions.",
    aiTip:
      "Cauldrons end in a boss machine — clearing them expands your override roster.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Cradle%20of%20Echoes%20walkthrough"
  },
  {
    id: 666,
    type: "main",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "The Second Verse",
    location: "The Base",
    length: "long",
    difficulty: "High",
    reward: "GAIA restoration progresses",
    summary:
      "Aloy pushes to reunite GAIA's functions as the Zeniths' countdown accelerates.",
    aiTip:
      "Upgrade your best weapons before this stretch — the fights escalate sharply.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20The%20Second%20Verse%20walkthrough"
  },
  {
    id: 667,
    type: "main",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "All That Remains",
    location: "Zenith Stronghold",
    length: "long",
    difficulty: "High",
    reward: "Pre-finale, allies rally",
    summary:
      "The team makes its final preparations before the assault on the Zeniths.",
    aiTip:
      "Finish side quests and errands now — the finale is close after this.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20All%20That%20Remains%20walkthrough"
  },
  {
    id: 668,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Daunt",
    title: "The Deluge",
    location: "The Daunt",
    length: "medium",
    difficulty: "Medium",
    reward: "Water source restored, settlement saved",
    summary:
      "Restore a failing Old World water system before the Daunt's settlements run dry.",
    aiTip:
      "An Old World facility puzzle — use the Pullcaster and scan for power routes.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20The%20Deluge%20walkthrough"
  },
  {
    id: 669,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Sea of Sands",
    title: "Lofty Ambitions",
    location: "Scalding Spear",
    length: "medium",
    difficulty: "Medium",
    reward: "Desert Clan aid, gear",
    summary:
      "Help a Desert Clan inventor test a daring flying contraption over the dunes.",
    aiTip:
      "A charming quest with a memorable set piece — light on combat.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Lofty%20Ambitions%20walkthrough"
  },
  {
    id: 670,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "The Roots that Bind",
    location: "Plainsong",
    length: "medium",
    difficulty: "Medium",
    reward: "Utaru song-field mystery, reward",
    summary:
      "Investigate why the Utaru's machine-tended song-fields are failing.",
    aiTip:
      "Scan the affected machines to trace the fault to its source.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20The%20Roots%20that%20Bind%20walkthrough"
  },
  {
    id: 671,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "First to Fly",
    location: "Memorial Grove",
    length: "medium",
    difficulty: "Medium",
    reward: "Companion arc, gear",
    summary:
      "A personal quest for one of Aloy's allies chasing a lifelong dream of flight.",
    aiTip:
      "A character-focused quest that deepens a key companion bond.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20First%20to%20Fly%20walkthrough"
  },
  {
    id: 672,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Sea of Sands",
    title: "Signals of the Sun",
    location: "Cinnabar Sands",
    length: "medium",
    difficulty: "Medium",
    reward: "Sun-worship mystery, reward",
    summary:
      "Follow strange signals tied to the Sun-worshipping remnants of the old Carja.",
    aiTip:
      "Lore-rich — the datapoints connect the Forbidden West to Aloy's homeland.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Signals%20of%20the%20Sun%20walkthrough"
  },
  {
    id: 673,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "The Bad Blood",
    location: "Thornmarsh",
    length: "medium",
    difficulty: "High",
    reward: "Tenakth grudge settled, gear",
    summary:
      "Mediate a violent grudge between Tenakth clans before it erupts into open war.",
    aiTip:
      "Hear both sides out — the resolution hinges on your judgment.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20The%20Bad%20Blood%20walkthrough"
  },
  {
    id: 674,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "Drowned Hopes",
    location: "No Man's Land",
    length: "medium",
    difficulty: "Medium",
    reward: "Diving reward, salvage",
    summary:
      "Dive into flooded ruins to recover something precious lost beneath the water.",
    aiTip:
      "Upgrade the diving mask first — deeper sections need the breath extension.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20Drowned%20Hopes%20walkthrough"
  },
  {
    id: 675,
    type: "side",
    game: "Horizon Forbidden West",
    region: "The Clan Lands",
    title: "The Way Home",
    location: "The Base",
    length: "short",
    difficulty: "Low",
    reward: "Companion closure, base upgrade",
    summary:
      "A quiet quest helping an ally find belonging among Aloy's growing found-family.",
    aiTip:
      "A gentle character beat — a nice breather between major missions.",
    video: "https://www.youtube.com/results?search_query=Horizon%20Forbidden%20West%20The%20Way%20Home%20walkthrough"
  },
  {
    id: 676,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Yusuke Kitagawa (Emperor)",
    location: "Various",
    length: "medium",
    difficulty: "Low",
    reward: "Yusuke combat perks, follow-up attacks",
    summary:
      "Deepen the bond with the eccentric artist Yusuke, unlocking team follow-up attacks.",
    aiTip:
      "His confidant perks add powerful assist moves — level him for tougher palaces.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Yusuke%20Kitagawa%20(Emperor)%20walkthrough"
  },
  {
    id: 677,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Makoto Niijima (Priestess)",
    location: "Various",
    length: "medium",
    difficulty: "Medium",
    reward: "Makoto perks, healing & negotiation",
    summary:
      "Grow closer to the student council president Makoto for battle and money-making perks.",
    aiTip:
      "Her Follow Up and healing perks are excellent — a high-value confidant to max.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Makoto%20Niijima%20(Priestess)%20walkthrough"
  },
  {
    id: 678,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Haru Okumura (Empress)",
    location: "Various",
    length: "medium",
    difficulty: "Low",
    reward: "Haru perks, gardening & EXP",
    summary:
      "Bond with the gentle heiress Haru, whose perks grow SP-restoring plants and boost EXP.",
    aiTip:
      "Her rooftop garden yields SP-recovery veggies — great for palace stamina.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Haru%20Okumura%20(Empress)%20walkthrough"
  },
  {
    id: 679,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Morgana (Magician)",
    location: "Café Leblanc",
    length: "medium",
    difficulty: "Low",
    reward: "Morgana perks, item crafting",
    summary:
      "Strengthen your bond with Morgana, unlocking better ambushes and item crafting.",
    aiTip:
      "An easy early confidant — his perks smooth out the whole early game.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Morgana%20(Magician)%20walkthrough"
  },
  {
    id: 680,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Sae Niijima (Judgement)",
    location: "Courtroom / Leblanc",
    length: "medium",
    difficulty: "Medium",
    reward: "Judgement arc, endgame perks",
    summary:
      "The prosecutor Sae's confidant unfolds through the story's interrogation frame.",
    aiTip:
      "Progresses automatically with the plot — pays off in the game's climax.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Sae%20Niijima%20(Judgement)%20walkthrough"
  },
  {
    id: 681,
    type: "side",
    game: "Persona 5 Royal",
    title: "Mementos Request: The Man of Plans and Capital",
    location: "Mementos",
    length: "short",
    difficulty: "Low",
    reward: "Money, arcana affinity",
    summary:
      "Change the heart of a ruthless loan shark preying on the desperate.",
    aiTip:
      "Send the calling card once you've cleared the target's Mementos floor.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Mementos%20Request%3A%20The%20Man%20of%20Plans%20and%20Capital%20walkthrough"
  },
  {
    id: 682,
    type: "side",
    game: "Persona 5 Royal",
    title: "Mementos Request: A Bounty Hunter Scorned",
    location: "Mementos",
    length: "short",
    difficulty: "Low",
    reward: "Rare item, affinity",
    summary:
      "Take down a violent bounty hunter terrorizing Tokyo's underworld.",
    aiTip:
      "Exploit the shadow's weakness for a quick, clean Hold Up.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Mementos%20Request%3A%20A%20Bounty%20Hunter%20Scorned%20walkthrough"
  },
  {
    id: 683,
    type: "side",
    game: "Persona 5 Royal",
    title: "Mementos Request: The Lockdown Hero",
    location: "Mementos",
    length: "short",
    difficulty: "Low",
    reward: "Money, item reward",
    summary:
      "Deal with a self-styled vigilante whose 'justice' has curdled into cruelty.",
    aiTip:
      "A morally grey request — the reward and lore make it worth the trip.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Mementos%20Request%3A%20The%20Lockdown%20Hero%20walkthrough"
  },
  {
    id: 684,
    type: "side",
    game: "Persona 5 Royal",
    title: "Mementos Request: The Illustrious Blackmailer",
    location: "Mementos",
    length: "short",
    difficulty: "Low",
    reward: "Rare fusion material, affinity",
    summary:
      "Change the heart of a serial blackmailer exploiting Shibuya's students.",
    aiTip:
      "Time it after the relevant confidant hint appears for the fullest story.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Mementos%20Request%3A%20The%20Illustrious%20Blackmailer%20walkthrough"
  },
  {
    id: 685,
    type: "side",
    game: "Persona 5 Royal",
    title: "Kichijoji Activities: Jazz Jin, Darts & Billiards",
    location: "Kichijoji",
    length: "short",
    difficulty: "Low",
    reward: "Social stats, Baton Pass & SP perks",
    summary:
      "Frequent Kichijoji's jazz club, darts, and billiards to boost stats and unlock combat perks.",
    aiTip:
      "Darts raises Baton Pass rank; Jazz Jin recovers SP for two party members — both huge.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Kichijoji%20Activities%3A%20Jazz%20Jin%2C%20Darts%20%26%20Billiards%20walkthrough"
  },
  {
    id: 686,
    type: "side",
    game: "Persona 5 Royal",
    title: "The Thieves Den",
    location: "Velvet Room",
    length: "short",
    difficulty: "Low",
    reward: "Cosmetics, records, replay value",
    summary:
      "Explore the Royal-exclusive Thieves Den to review the Phantom Thieves' exploits and unlock decor.",
    aiTip:
      "A relaxing meta-hub — collect trophies and models as you progress the story.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20The%20Thieves%20Den%20walkthrough"
  },
  {
    id: 687,
    type: "side",
    game: "Persona 5 Royal",
    title: "Confidant: Sojiro Sakura (Hierophant)",
    location: "Café Leblanc",
    length: "medium",
    difficulty: "Low",
    reward: "Leblanc perks, coffee & curry",
    summary:
      "Earn the trust of your gruff guardian Sojiro, unlocking coffee and curry that restore SP.",
    aiTip:
      "His SP-restoring brews and dishes are invaluable for long palace runs.",
    video: "https://www.youtube.com/results?search_query=Persona%205%20Royal%20Confidant%3A%20Sojiro%20Sakura%20(Hierophant)%20walkthrough"
  },
  {
    id: 688,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Broken Blacksmith",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Ally rescued, gear",
    summary:
      "Rescue a captured blacksmith to keep Jin's growing resistance armed.",
    aiTip:
      "An early Act 1 tale — rescuing allies expands your support network.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Broken%20Blacksmith%20walkthrough"
  },
  {
    id: 689,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Iron Hook",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Grappling hook unlocked, traversal",
    summary:
      "Recover the grappling hook that opens up Tsushima's cliffs and hidden paths.",
    aiTip:
      "The hook is a major traversal upgrade — grab it before exploring the peaks.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Iron%20Hook%20walkthrough"
  },
  {
    id: 690,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Hammer and the Forge",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Ghost weapons, gear",
    summary:
      "Aid the war effort by securing the means to craft the Ghost's deadly tools.",
    aiTip:
      "Unlocks key Ghost weapons — a turning point in Jin's tactics.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Hammer%20and%20the%20Forge%20walkthrough"
  },
  {
    id: 691,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "The Tale of Ryuzo",
    location: "Toyotama",
    length: "medium",
    difficulty: "High",
    reward: "Straw Hat Ronin arc, duel",
    summary:
      "Confront Jin's desperate old friend Ryuzo as the Straw Hats side with the Mongols.",
    aiTip:
      "An emotionally charged duel — sharpen your parry timing beforehand.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Tale%20of%20Ryuzo%20walkthrough"
  },
  {
    id: 692,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "Heart of the Jito",
    location: "Toyotama",
    length: "medium",
    difficulty: "High",
    reward: "Regional liberation, ally",
    summary:
      "Break the Mongol hold on a key Toyotama stronghold to rally the region.",
    aiTip:
      "A large-scale assault — use stealth to thin the garrison before going loud.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Heart%20of%20the%20Jito%20walkthrough"
  },
  {
    id: 693,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "From the Darkness",
    location: "Toyotama",
    length: "medium",
    difficulty: "High",
    reward: "Ghost legend grows, story turn",
    summary:
      "Jin fully embraces the Ghost's fearsome reputation as the war in Toyotama peaks.",
    aiTip:
      "The Ghost's terror tactics come into full force — lean into fear-based play.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20From%20the%20Darkness%20walkthrough"
  },
  {
    id: 694,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Kamiagata",
    title: "The Coward's Deception",
    location: "Kamiagata",
    length: "medium",
    difficulty: "High",
    reward: "Kamiagata liberated, finale approach",
    summary:
      "Root out betrayal and reclaim northern Kamiagata as the final reckoning nears.",
    aiTip:
      "Act 3 escalates the stakes — bring your fully upgraded Ghost loadout.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Coward's%20Deception%20walkthrough"
  },
  {
    id: 695,
    type: "main",
    game: "Ghost of Tsushima",
    region: "Kamiagata",
    title: "A New Horizon",
    location: "Tsushima",
    length: "short",
    difficulty: "High",
    reward: "Ending, Jin's fate",
    summary:
      "The quiet aftermath of Jin's war — the honor-versus-survival theme reaches its close.",
    aiTip:
      "Follows the main finale; your defining choice colors this epilogue.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20A%20New%20Horizon%20walkthrough"
  },
  {
    id: 696,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Iki Island",
    title: "A Lost Friend (Iki Island)",
    location: "Iki Island",
    length: "medium",
    difficulty: "High",
    reward: "Iki tale, Mongol shaman arc",
    summary:
      "On Iki, Jin hunts for a captured ally while battling hallucinogenic Mongol poisons.",
    aiTip:
      "The Eagle's hallucinations are unique encounters — steel yourself for the trippy set pieces.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20A%20Lost%20Friend%20(Iki%20Island)%20walkthrough"
  },
  {
    id: 697,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Iki Island",
    title: "The Blessing of Death (Iki Island)",
    location: "Iki Island",
    length: "medium",
    difficulty: "High",
    reward: "Iki tale conclusion, gear",
    summary:
      "Confront the shaman known as the Eagle in the climax of the Iki Island expansion.",
    aiTip:
      "A tough finale duel — the Eagle's mind-games make it as much mental as mechanical.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Blessing%20of%20Death%20(Iki%20Island)%20walkthrough"
  },
  {
    id: 698,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Iki Island",
    title: "Animal Sanctuaries (Iki Island)",
    location: "Iki Island",
    length: "short",
    difficulty: "Low",
    reward: "Flute tunes, cosmetic charms",
    summary:
      "Play Jin's flute to soothe Iki's wildlife and unlock sanctuaries and cosmetics.",
    aiTip:
      "Relaxing rhythm minigames — a lovely break from the fighting.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Animal%20Sanctuaries%20(Iki%20Island)%20walkthrough"
  },
  {
    id: 699,
    type: "side",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "Sensei Ishikawa: The Mongol Bows",
    location: "Toyotama",
    length: "medium",
    difficulty: "Medium",
    reward: "Bow upgrades, Tomoe arc",
    summary:
      "Continue Ishikawa's hunt for his traitor student and master new archery.",
    aiTip:
      "Advances the mentor's arc and upgrades your bow — a strong companion chain.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Sensei%20Ishikawa%3A%20The%20Mongol%20Bows%20walkthrough"
  },
  {
    id: 700,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Charms Class",
    location: "Hogwarts",
    length: "short",
    difficulty: "Low",
    reward: "Accio spell, class progression",
    summary:
      "Attend Professor Ronen's Charms lesson and learn the summoning charm Accio.",
    aiTip:
      "Class quests teach core spells — Accio is essential for puzzles and combat combos.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Charms%20Class%20walkthrough"
  },
  {
    id: 701,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Defence Against the Dark Arts Class",
    location: "Hogwarts",
    length: "short",
    difficulty: "Low",
    reward: "Levioso spell, combat basics",
    summary:
      "Learn the levitation spell Levioso in Professor Hecat's DADA lesson.",
    aiTip:
      "Levioso suspends enemies — a key combat opener you'll use constantly.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Defence%20Against%20the%20Dark%20Arts%20Class%20walkthrough"
  },
  {
    id: 702,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Potions Class",
    location: "Hogwarts",
    length: "short",
    difficulty: "Low",
    reward: "Potion brewing, Edurus",
    summary:
      "Brew your first potions with Professor Sharp and unlock the Potions station.",
    aiTip:
      "Stock Wiggenweld and Edurus before tough fights — brewing is cheaper than buying.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Potions%20Class%20walkthrough"
  },
  {
    id: 703,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Flying Class",
    location: "Hogwarts",
    length: "short",
    difficulty: "Low",
    reward: "Broom unlocked, fast travel",
    summary:
      "Master broom flight with Madam Kogawa, unlocking the skies over the Highlands.",
    aiTip:
      "The broom transforms exploration — buy upgrades from Spintwitches when you can.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Flying%20Class%20walkthrough"
  },
  {
    id: 704,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Secrets of the Restricted Section",
    location: "Hogwarts",
    length: "medium",
    difficulty: "Medium",
    reward: "Nighttime infiltration, story clue",
    summary:
      "Sneak into the library's Restricted Section with Sebastian to chase forbidden knowledge.",
    aiTip:
      "A stealth chapter — use Disillusionment and stay out of the librarian's sight.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Secrets%20of%20the%20Restricted%20Section%20walkthrough"
  },
  {
    id: 705,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "The Map Chamber",
    location: "Hogwarts",
    length: "long",
    difficulty: "Medium",
    reward: "Keepers' map, ancient magic hub",
    summary:
      "Unlock the hidden Map Chamber and the Keepers' guidance beneath the school.",
    aiTip:
      "Central to the main story — it gates the Keeper trials and ancient magic reveals.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Map%20Chamber%20walkthrough"
  },
  {
    id: 706,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "The Helm of Urtkot",
    location: "Hogwarts Highlands",
    length: "medium",
    difficulty: "Medium",
    reward: "Goblin lore, region unlocked",
    summary:
      "Help the goblin Lodgok recover a stolen ceremonial helm, deepening the Ranrok conflict.",
    aiTip:
      "An early Highlands quest that opens up exploration and goblin-plot context.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Helm%20of%20Urtkot%20walkthrough"
  },
  {
    id: 707,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "Fire and Vice",
    location: "Hogsmeade",
    length: "medium",
    difficulty: "Medium",
    reward: "Ashwinder plot, region intel",
    summary:
      "Investigate the Ashwinder gang's arson and extortion around Hogsmeade.",
    aiTip:
      "Ties the dark-wizard plot to Hogsmeade — expect Ashwinder combat encounters.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Fire%20and%20Vice%20walkthrough"
  },
  {
    id: 708,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Feldcroft",
    title: "In the Shadow of the Study (Sebastian)",
    location: "Feldcroft",
    length: "medium",
    difficulty: "Medium",
    reward: "Scriptorium opened, dark-magic lead",
    summary:
      "Delve with Sebastian into the Sallow family's cursed scriptorium for a cure for Anne.",
    aiTip:
      "Advances the game's darkest arc — the moral choices intensify from here.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20In%20the%20Shadow%20of%20the%20Study%20(Sebastian)%20walkthrough"
  },
  {
    id: 709,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "The Unnatural Animagus",
    location: "Hogsmeade",
    length: "medium",
    difficulty: "Medium",
    reward: "Animagus mystery, gear",
    summary:
      "Investigate a poacher-linked Animagus with the eccentric Poppy connection.",
    aiTip:
      "A memorable side story with a satisfying reveal — moderate combat.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Unnatural%20Animagus%20walkthrough"
  },
  {
    id: 710,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "The Man Behind the Moons",
    location: "Hogwarts Highlands",
    length: "short",
    difficulty: "Low",
    reward: "Demiguise lore, cosmetic",
    summary:
      "Help the reclusive Gladwin Moon in the quest tied to upgrading your Alohomora.",
    aiTip:
      "Pairs with Demiguise Statue collection — do them together at night.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Man%20Behind%20the%20Moons%20walkthrough"
  },
  {
    id: 711,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "A Bird in the Hand",
    location: "Hogwarts Highlands",
    length: "short",
    difficulty: "Low",
    reward: "Beast rescue, Nab-Sack",
    summary:
      "Rescue a hunted magical beast and learn to use the Nab-Sack from Deek.",
    aiTip:
      "Introduces beast-catching — the foundation for Vivarium upgrades.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20A%20Bird%20in%20the%20Hand%20walkthrough"
  },
  {
    id: 712,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Cache in the Castle",
    location: "Hogwarts",
    length: "short",
    difficulty: "Low",
    reward: "Hidden treasure, house lore",
    summary:
      "Follow a riddle to a hidden cache tucked deep within Hogwarts castle.",
    aiTip:
      "A light puzzle quest — Revelio and a keen eye for detail solve it.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Cache%20in%20the%20Castle%20walkthrough"
  },
  {
    id: 713,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "The Sky is the Limit",
    location: "Hogsmeade",
    length: "short",
    difficulty: "Low",
    reward: "Broom upgrade, race",
    summary:
      "Test a souped-up broom in a high-flying challenge for Albie Weekes.",
    aiTip:
      "A flying-focused quest — great practice before the broom races.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Sky%20is%20the%20Limit%20walkthrough"
  },
  {
    id: 714,
    type: "side",
    category: "Challenges",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Crossed Wands & Summoner's Court",
    location: "Hogwarts",
    length: "short",
    difficulty: "Low",
    reward: "Duel prestige, minigame rewards",
    summary:
      "Enter the student duelling circuit (Crossed Wands) and the Summoner's Court challenges.",
    aiTip:
      "Great for practicing spell combos safely — the rewards feed your build.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Crossed%20Wands%20%26%20Summoner's%20Court%20walkthrough"
  },
  {
    id: 716,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Feldcroft",
    title: "The Foal of the Dead",
    location: "Feldcroft Region",
    length: "short",
    difficulty: "Medium",
    reward: "Thestral lore, beast",
    summary:
      "Investigate a Thestral tied to a somber Feldcroft mystery.",
    aiTip:
      "A quieter, eerie side quest — read the environmental clues.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Foal%20of%20the%20Dead%20walkthrough"
  },
  {
    id: 717,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Trafficking Talents",
    location: "Hogwarts Highlands",
    length: "short",
    difficulty: "Medium",
    reward: "Poacher intel, gear",
    summary:
      "Break up a poacher operation trafficking magical beasts across the Highlands.",
    aiTip:
      "Combat-focused — free the beasts and grab the loot from the camp.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Trafficking%20Talents%20walkthrough"
  },
  {
    id: 718,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Regalith Grand Cathedral",
    location: "Grand Trad",
    length: "long",
    difficulty: "Medium",
    reward: "Story start, first Archetype awakening",
    summary:
      "The assassination of the king sets the race for the throne in motion; the protagonist and Gallica infiltrate the capital's grand cathedral.",
    aiTip:
      "The tutorial dungeon — learn the Archetype (class) system and Synthesis attacks here.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Regalith%20Grand%20Cathedral%20walkthrough"
  },
  {
    id: 719,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Belega Corridor",
    location: "Route to Martira",
    length: "medium",
    difficulty: "Medium",
    reward: "Gauntlet Runner travel, party growth",
    summary:
      "The party journeys aboard the Gauntlet Runner, clearing the monster-infested Belega Corridor on the road to Martira.",
    aiTip:
      "Manage travel-day time carefully — the calendar system rewards planning like Persona.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Belega%20Corridor%20walkthrough"
  },
  {
    id: 720,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Tradia Desert",
    location: "Martira Region",
    length: "long",
    difficulty: "High",
    reward: "Louis confrontation lead, Archetypes",
    summary:
      "Cross the harsh Tradia Desert and its ruins as the election tournament and Louis's shadow loom.",
    aiTip:
      "Bring wind/fire coverage and watch for the desert's tough optional bosses.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Tradia%20Desert%20walkthrough"
  },
  {
    id: 721,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Abandoned Tomb",
    location: "Martira Region",
    length: "long",
    difficulty: "High",
    reward: "Story progression, new Archetypes",
    summary:
      "Delve into an ancient abandoned tomb tied to the history of the fantasy novel that shapes the world.",
    aiTip:
      "A lore-heavy dungeon — the Archetype lineage rewards here are strong upgrades.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Abandoned%20Tomb%20walkthrough"
  },
  {
    id: 722,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Giant Sandworm's Belly",
    location: "Tradia Desert",
    length: "long",
    difficulty: "High",
    reward: "Escape sequence, party bond",
    summary:
      "Swallowed whole, the party must fight their way out of a colossal sandworm from the inside.",
    aiTip:
      "A memorable set-piece dungeon — keep healing items topped up for the escape.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Giant%20Sandworm's%20Belly%20walkthrough"
  },
  {
    id: 723,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Giant Sandworm's Nest",
    location: "Tradia Desert",
    length: "long",
    difficulty: "High",
    reward: "Sandworm threat ended, gear",
    summary:
      "Track the sandworms to their nest to end the threat menacing the desert region.",
    aiTip:
      "Exploit the brood's shared weakness and use Synthesis skills to clear packs.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Giant%20Sandworm's%20Nest%20walkthrough"
  },
  {
    id: 724,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Kriegante",
    title: "Kriegante Castle",
    location: "Kriegante",
    length: "long",
    difficulty: "High",
    reward: "Faction confrontation, story turn",
    summary:
      "Storm the fortress of Kriegante as the throne race turns violent and alliances fracture.",
    aiTip:
      "A boss-dense castle — swap Archetypes to counter each guardian's element.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Kriegante%20Castle%20walkthrough"
  },
  {
    id: 725,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Skanda",
    title: "Dragon Temple",
    location: "Skanda",
    length: "long",
    difficulty: "High",
    reward: "Royal magic trial, near-finale",
    summary:
      "Undertake the sacred Dragon Temple trial to prove worthiness for the throne.",
    aiTip:
      "Late-game difficulty spike — max your Archetype masteries before entering.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Dragon%20Temple%20walkthrough"
  },
  {
    id: 726,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Skanda",
    title: "Skybound Avatar",
    location: "Final Region",
    length: "long",
    difficulty: "High",
    reward: "Finale, the true king revealed",
    summary:
      "The climactic ascent to confront the source of the kingdom's despair and claim the future.",
    aiTip:
      "The finale is a multi-phase gauntlet — bring your strongest Archetype lineages and items.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Skybound%20Avatar%20walkthrough"
  },
  {
    id: 727,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower Bond: Gallica",
    location: "Grand Trad / travels",
    length: "medium",
    difficulty: "Low",
    reward: "Archetype unlocks, combat & social perks",
    summary:
      "Deepen your bond with Gallica. Your fairy companion whose fate is bound to the protagonist's journey.",
    aiTip:
      "Raise their Bond rank for new Archetype lineages and dialogue — Metaphor's take on Persona's Confidants.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%20Bond%3A%20Gallica%20walkthrough"
  },
  {
    id: 728,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower Bond: Strohl",
    location: "Grand Trad / travels",
    length: "medium",
    difficulty: "Low",
    reward: "Archetype unlocks, combat & social perks",
    summary:
      "Deepen your bond with Strohl. The noble-hearted swordsman who becomes your first steadfast ally.",
    aiTip:
      "Raise their Bond rank for new Archetype lineages and dialogue — Metaphor's take on Persona's Confidants.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%20Bond%3A%20Strohl%20walkthrough"
  },
  {
    id: 729,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower Bond: Hulkenberg",
    location: "Grand Trad / travels",
    length: "medium",
    difficulty: "Low",
    reward: "Archetype unlocks, combat & social perks",
    summary:
      "Deepen your bond with Hulkenberg. The dutiful knight sworn to protect the prince — and now you.",
    aiTip:
      "Raise their Bond rank for new Archetype lineages and dialogue — Metaphor's take on Persona's Confidants.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%20Bond%3A%20Hulkenberg%20walkthrough"
  },
  {
    id: 730,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower Bond: Heismay",
    location: "Grand Trad / travels",
    length: "medium",
    difficulty: "Low",
    reward: "Archetype unlocks, combat & social perks",
    summary:
      "Deepen your bond with Heismay. The wary eugief elder whose past hides a tragic mystery.",
    aiTip:
      "Raise their Bond rank for new Archetype lineages and dialogue — Metaphor's take on Persona's Confidants.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%20Bond%3A%20Heismay%20walkthrough"
  },
  {
    id: 731,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower Bond: Junah",
    location: "Grand Trad / travels",
    length: "medium",
    difficulty: "Low",
    reward: "Archetype unlocks, combat & social perks",
    summary:
      "Deepen your bond with Junah. The enigmatic singer with a hidden agenda and a powerful voice.",
    aiTip:
      "Raise their Bond rank for new Archetype lineages and dialogue — Metaphor's take on Persona's Confidants.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%20Bond%3A%20Junah%20walkthrough"
  },
  {
    id: 732,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower Bond: Eupha",
    location: "Grand Trad / travels",
    length: "medium",
    difficulty: "Low",
    reward: "Archetype unlocks, combat & social perks",
    summary:
      "Deepen your bond with Eupha. The soft-spoken mystic of a persecuted tribe seeking peace.",
    aiTip:
      "Raise their Bond rank for new Archetype lineages and dialogue — Metaphor's take on Persona's Confidants.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%20Bond%3A%20Eupha%20walkthrough"
  },
  {
    id: 733,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower Bond: Basilio",
    location: "Grand Trad / travels",
    length: "medium",
    difficulty: "Low",
    reward: "Archetype unlocks, combat & social perks",
    summary:
      "Deepen your bond with Basilio. The battle-hardened mercenary with a surprising philosophical streak.",
    aiTip:
      "Raise their Bond rank for new Archetype lineages and dialogue — Metaphor's take on Persona's Confidants.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%20Bond%3A%20Basilio%20walkthrough"
  },
  {
    id: 734,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower Bond: More",
    location: "Grand Trad / travels",
    length: "medium",
    difficulty: "Low",
    reward: "Archetype unlocks, combat & social perks",
    summary:
      "Deepen your bond with More. Your loyal Gauntlet Runner driver and tactical support.",
    aiTip:
      "Raise their Bond rank for new Archetype lineages and dialogue — Metaphor's take on Persona's Confidants.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%20Bond%3A%20More%20walkthrough"
  },
  {
    id: 735,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower Bond: Maria",
    location: "Grand Trad / travels",
    length: "medium",
    difficulty: "Low",
    reward: "Archetype unlocks, combat & social perks",
    summary:
      "Deepen your bond with Maria. A kind healer at the clinic whose bond restores the party's spirit.",
    aiTip:
      "Raise their Bond rank for new Archetype lineages and dialogue — Metaphor's take on Persona's Confidants.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%20Bond%3A%20Maria%20walkthrough"
  },
  {
    id: 736,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower Bond: Brigitta",
    location: "Grand Trad / travels",
    length: "medium",
    difficulty: "Low",
    reward: "Archetype unlocks, combat & social perks",
    summary:
      "Deepen your bond with Brigitta. The ambitious merchant whose network opens up rare goods.",
    aiTip:
      "Raise their Bond rank for new Archetype lineages and dialogue — Metaphor's take on Persona's Confidants.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%20Bond%3A%20Brigitta%20walkthrough"
  },
  {
    id: 737,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower Bond: Catherina",
    location: "Grand Trad / travels",
    length: "medium",
    difficulty: "Low",
    reward: "Archetype unlocks, combat & social perks",
    summary:
      "Deepen your bond with Catherina. The recruitment-center manager who connects you with bounties and allies.",
    aiTip:
      "Raise their Bond rank for new Archetype lineages and dialogue — Metaphor's take on Persona's Confidants.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%20Bond%3A%20Catherina%20walkthrough"
  },
  {
    id: 738,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower Bond: Neuras",
    location: "Grand Trad / travels",
    length: "medium",
    difficulty: "Low",
    reward: "Archetype unlocks, combat & social perks",
    summary:
      "Deepen your bond with Neuras. The eccentric engineer who upgrades the Gauntlet Runner.",
    aiTip:
      "Raise their Bond rank for new Archetype lineages and dialogue — Metaphor's take on Persona's Confidants.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%20Bond%3A%20Neuras%20walkthrough"
  },
  {
    id: 739,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower Bond: Alonzo",
    location: "Grand Trad / travels",
    length: "medium",
    difficulty: "Low",
    reward: "Archetype unlocks, combat & social perks",
    summary:
      "Deepen your bond with Alonzo. The slippery informant whose loyalties are never quite clear.",
    aiTip:
      "Raise their Bond rank for new Archetype lineages and dialogue — Metaphor's take on Persona's Confidants.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%20Bond%3A%20Alonzo%20walkthrough"
  },
  {
    id: 740,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Follower Bond: Bardon",
    location: "Grand Trad / travels",
    length: "medium",
    difficulty: "Low",
    reward: "Archetype unlocks, combat & social perks",
    summary:
      "Deepen your bond with Bardon. The gruff military man who respects strength and resolve.",
    aiTip:
      "Raise their Bond rank for new Archetype lineages and dialogue — Metaphor's take on Persona's Confidants.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Follower%20Bond%3A%20Bardon%20walkthrough"
  },
  {
    id: 741,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Bounty: The Man-Eater in the Mine",
    location: "Recruitment Center",
    length: "medium",
    difficulty: "Medium",
    reward: "Bounty reward, rare materials",
    summary:
      "Hunt the alpha Rockworm Valvo lurking in the Man-Eater's Grotto.",
    aiTip:
      "Bounties are posted at recruitment centers — bring elemental coverage for the boss.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Bounty%3A%20The%20Man-Eater%20in%20the%20Mine%20walkthrough"
  },
  {
    id: 742,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Bounty: The New King of the Imps",
    location: "Recruitment Center",
    length: "short",
    difficulty: "Medium",
    reward: "Bounty reward, coin",
    summary:
      "Clear out the Imp's Den and slay the cunning beast that rules it.",
    aiTip:
      "A quick bounty — exploit the imps' weakness for a fast clear.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Bounty%3A%20The%20New%20King%20of%20the%20Imps%20walkthrough"
  },
  {
    id: 743,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Bounty: Man's Not-So-Best Friend",
    location: "Recruitment Center",
    length: "medium",
    difficulty: "Medium",
    reward: "Bounty reward, gear",
    summary:
      "Defeat the monstrous beast prowling the depths of the Tradia Desert.",
    aiTip:
      "Accept from the recruitment center; a mid-tier bounty with a solid payout.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Bounty%3A%20Man's%20Not-So-Best%20Friend%20walkthrough"
  },
  {
    id: 744,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Requests & Favours",
    location: "Towns & Recruitment Centers",
    length: "short",
    difficulty: "Low",
    reward: "MAG, items, follower progress",
    summary:
      "Take on the townsfolk's Requests and Favours — fetch tasks, escorts, and small hunts.",
    aiTip:
      "Many requests gate Follower bond progress — clear them as they appear.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20Requests%20%26%20Favours%20walkthrough"
  },
  {
    id: 745,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "The King's Trials (Virtue Trials)",
    location: "Various",
    length: "medium",
    difficulty: "Medium",
    reward: "Royal Virtue growth, Archetype boosts",
    summary:
      "Complete the trials that test the five Royal Virtues (Courage, Wisdom, Tolerance, etc.).",
    aiTip:
      "Raising Royal Virtues unlocks better Archetypes and key dialogue options.",
    video: "https://www.youtube.com/results?search_query=Metaphor%20ReFantazio%20The%20King's%20Trials%20(Virtue%20Trials)%20walkthrough"
  },
  {
    id: 746,
    type: "main",
    game: "Demon's Souls",
    region: "The Nexus",
    title: "The Nexus",
    location: "The Nexus",
    length: "short",
    difficulty: "Low",
    reward: "Hub unlocked, Archstones",
    summary:
      "Slain in Boletaria, the player wakes in the Nexus — the soul-bound hub linking the five worlds.",
    aiTip:
      "Return here to level up with the Maiden in Black and spend souls between runs.",
    video: "https://www.youtube.com/results?search_query=Demon's%20Souls%20The%20Nexus%20walkthrough"
  },
  {
    id: 747,
    type: "main",
    game: "Demon's Souls",
    region: "Boletaria",
    title: "Boletaria Palace (World 1)",
    location: "Boletaria",
    length: "long",
    difficulty: "High",
    reward: "Phalanx, Tower Knight, Penetrator, False King",
    summary:
      "Storm the fog-choked royal palace of Boletaria, from the Gates to the throne of the False King Allant.",
    aiTip:
      "Bring lightning-resist for Tower Knight; the Penetrator fight rewards saving Biorr.",
    video: "https://www.youtube.com/results?search_query=Demon's%20Souls%20Boletaria%20Palace%20(World%201)%20walkthrough"
  },
  {
    id: 748,
    type: "main",
    game: "Demon's Souls",
    region: "Stonefang",
    title: "Stonefang Tunnel (World 2)",
    location: "Stonefang",
    length: "long",
    difficulty: "High",
    reward: "Armor Spider, Flamelurker, Dragon God",
    summary:
      "Descend the dwarven mines of Stonefang, ending at the imprisoned Dragon God.",
    aiTip:
      "Turpentine/fire buffs melt the Armor Spider; the Dragon God is a stealth-and-ballista puzzle.",
    video: "https://www.youtube.com/results?search_query=Demon's%20Souls%20Stonefang%20Tunnel%20(World%202)%20walkthrough"
  },
  {
    id: 749,
    type: "main",
    game: "Demon's Souls",
    region: "Latria",
    title: "Tower of Latria (World 3)",
    location: "Latria",
    length: "long",
    difficulty: "High",
    reward: "Fool's Idol, Maneater, Old Monk",
    summary:
      "Escape the prison towers of Latria, past the Fool's Idol and the dreaded Maneaters.",
    aiTip:
      "Kill the disciple to stop Fool's Idol reviving; the Old Monk fight can summon another player.",
    video: "https://www.youtube.com/results?search_query=Demon's%20Souls%20Tower%20of%20Latria%20(World%203)%20walkthrough"
  },
  {
    id: 750,
    type: "main",
    game: "Demon's Souls",
    region: "Shrine of Storms",
    title: "Shrine of Storms (World 4)",
    location: "Shrine of Storms",
    length: "long",
    difficulty: "High",
    reward: "Adjudicator, Old Hero, Storm King",
    summary:
      "Brave the storm-lashed cliffs and crypts of the Shrine, home to the Storm King.",
    aiTip:
      "The blind Old Hero tracks by sound — sneak and strike. Storm Ruler trivializes the Storm King.",
    video: "https://www.youtube.com/results?search_query=Demon's%20Souls%20Shrine%20of%20Storms%20(World%204)%20walkthrough"
  },
  {
    id: 751,
    type: "main",
    game: "Demon's Souls",
    region: "Valley of Defilement",
    title: "Valley of Defilement (World 5)",
    location: "Valley of Defilement",
    length: "long",
    difficulty: "High",
    reward: "Leechmonger, Dirty Colossus, Maiden Astraea",
    summary:
      "Wade through the plague-ridden swamps of the Valley to the merciful Maiden Astraea.",
    aiTip:
      "Bring plague/poison cures; the Astraea encounter is a heartbreaking moral choice.",
    video: "https://www.youtube.com/results?search_query=Demon's%20Souls%20Valley%20of%20Defilement%20(World%205)%20walkthrough"
  },
  {
    id: 752,
    type: "main",
    game: "Demon's Souls",
    region: "Boletaria",
    title: "The False King & Old One",
    location: "Boletaria / The Nexus",
    length: "long",
    difficulty: "High",
    reward: "Endgame, character/world tendency ending",
    summary:
      "Defeat the False King Allant and confront the Old One to decide the fate of the waking world.",
    aiTip:
      "Your ending choice (lull the Old One or seize power) reflects your journey — save first.",
    video: "https://www.youtube.com/results?search_query=Demon's%20Souls%20The%20False%20King%20%26%20Old%20One%20walkthrough"
  },
  {
    id: 753,
    type: "side",
    game: "Demon's Souls",
    region: "The Nexus",
    title: "World & Character Tendency",
    location: "All worlds",
    length: "medium",
    difficulty: "Medium",
    reward: "Black/White events, unique gear",
    summary:
      "Manage World and Character Tendency — pure-white and pure-black states unlock exclusive bosses and loot.",
    aiTip:
      "Dying in body form blackens tendency; some rare items require a specific tendency, so plan runs.",
    video: "https://www.youtube.com/results?search_query=Demon's%20Souls%20World%20%26%20Character%20Tendency%20walkthrough"
  },
  {
    id: 754,
    type: "side",
    game: "Demon's Souls",
    region: "The Nexus",
    title: "Primeval Demons & Colorless Souls",
    location: "All worlds",
    length: "medium",
    difficulty: "High",
    reward: "Colorless Demon's Souls, upgrades",
    summary:
      "Hunt the optional Primeval Demons that drop Colorless Demon's Souls for special upgrades.",
    aiTip:
      "Their spawns depend on World Tendency — a reason to push tendency pure-white.",
    video: "https://www.youtube.com/results?search_query=Demon's%20Souls%20Primeval%20Demons%20%26%20Colorless%20Souls%20walkthrough"
  },
  {
    id: 755,
    type: "side",
    game: "Demon's Souls",
    region: "Stonefang",
    title: "Blacksmith Ed & Weapon Paths",
    location: "Stonefang",
    length: "short",
    difficulty: "Low",
    reward: "Boss-soul weapons, upgrades",
    summary:
      "Rescue and supply Blacksmith Ed to forge unique weapons from Demon's Souls.",
    aiTip:
      "Spend boss souls wisely — some make build-defining weapons like the Northern Regalia.",
    video: "https://www.youtube.com/results?search_query=Demon's%20Souls%20Blacksmith%20Ed%20%26%20Weapon%20Paths%20walkthrough"
  },
  {
    id: 756,
    type: "main",
    game: "Pillars of Eternity",
    region: "Gilded Vale",
    title: "A Moment's Respite",
    location: "Valewood / Gilded Vale",
    length: "short",
    difficulty: "Low",
    reward: "Watcher awakening, story start",
    summary:
      "Ambushed on the road to Gilded Vale, the protagonist survives a biawac and awakens as a Watcher who sees past lives.",
    aiTip:
      "The prologue introduces the soul-reading Watcher mechanic that drives the whole story.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20A%20Moment's%20Respite%20walkthrough"
  },
  {
    id: 757,
    type: "main",
    game: "Pillars of Eternity",
    region: "Gilded Vale",
    title: "The Gilded Vale & Raedric's Hold",
    location: "Gilded Vale",
    length: "medium",
    difficulty: "Medium",
    reward: "Lord Raedric quest, companions",
    summary:
      "Seek answers in the hanging-tree village of Gilded Vale and choose a side in Lord Raedric's brutal rule.",
    aiTip:
      "You can side with, spare, or depose Raedric — each path has different rewards and allies.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20The%20Gilded%20Vale%20%26%20Raedric's%20Hold%20walkthrough"
  },
  {
    id: 758,
    type: "main",
    game: "Pillars of Eternity",
    region: "Caed Nua",
    title: "Building a Fortress: Caed Nua",
    location: "Caed Nua",
    length: "long",
    difficulty: "High",
    reward: "Stronghold acquired, Maerwald",
    summary:
      "Claim the ruined keep of Caed Nua from the mad Watcher Maerwald and the endless dungeon below it.",
    aiTip:
      "Caed Nua becomes your stronghold — invest in it for income, allies, and side content.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20Building%20a%20Fortress%3A%20Caed%20Nua%20walkthrough"
  },
  {
    id: 759,
    type: "main",
    game: "Pillars of Eternity",
    region: "Defiance Bay",
    title: "The Hermit of Hadret House",
    location: "Defiance Bay",
    length: "medium",
    difficulty: "Medium",
    reward: "Animancy conspiracy, Act 2",
    summary:
      "Investigate the animancy conspiracy roiling Defiance Bay and the truth behind the hollowborn crisis.",
    aiTip:
      "Opens Act 2's faction intrigue — your choices shape Defiance Bay's fate.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20The%20Hermit%20of%20Hadret%20House%20walkthrough"
  },
  {
    id: 760,
    type: "main",
    game: "Pillars of Eternity",
    region: "Defiance Bay",
    title: "The Champion of Berath / Faction War",
    location: "Defiance Bay",
    length: "long",
    difficulty: "High",
    reward: "Faction allegiance, Act 2 climax",
    summary:
      "Navigate the three-way struggle between the Crucible Knights, the Dozens, and House Doemenel.",
    aiTip:
      "Pick a faction for Act 2's finale — it changes who helps you and who turns hostile.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20The%20Champion%20of%20Berath%20%2F%20Faction%20War%20walkthrough"
  },
  {
    id: 761,
    type: "main",
    game: "Pillars of Eternity",
    region: "Twin Elms",
    title: "The Hunt for Thaos: Twin Elms",
    location: "Twin Elms",
    length: "long",
    difficulty: "High",
    reward: "Act 3, Leaden Key trail",
    summary:
      "Journey to the elven city of Twin Elms to track the Leaden Key's leader, Thaos, to his source.",
    aiTip:
      "The Engwithan ruins here reveal the gods' true nature — read the lore closely.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20The%20Hunt%20for%20Thaos%3A%20Twin%20Elms%20walkthrough"
  },
  {
    id: 762,
    type: "main",
    game: "Pillars of Eternity",
    region: "Twin Elms",
    title: "Sun in Shadow",
    location: "Sun in Shadow",
    length: "long",
    difficulty: "High",
    reward: "Finale, the wheel of souls choice",
    summary:
      "Descend into the Engwithan machine beneath Teir Evron to confront Thaos and decide the fate of countless souls.",
    aiTip:
      "The ending is a philosophical choice about souls and the gods — there's no simple 'right' answer.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20Sun%20in%20Shadow%20walkthrough"
  },
  {
    id: 763,
    type: "side",
    game: "Pillars of Eternity",
    region: "Gilded Vale",
    title: "Companion: Edér — Fragments of a Scattered Faith",
    location: "Gilded Vale / Dyrford",
    length: "medium",
    difficulty: "Medium",
    reward: "Edér's loyalty, backstory",
    summary:
      "Help Edér uncover the truth about his brother Woden and the war that tore the Dyrwood apart.",
    aiTip:
      "Edér's quest deepens the game's religious themes — a rewarding companion arc.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20Companion%3A%20Ed%C3%A9r%20%E2%80%94%20Fragments%20of%20a%20Scattered%20Faith%20walkthrough"
  },
  {
    id: 764,
    type: "side",
    game: "Pillars of Eternity",
    region: "Defiance Bay",
    title: "Companion: Aloth — Two-Sided",
    location: "Defiance Bay",
    length: "medium",
    difficulty: "Medium",
    reward: "Aloth's second soul revealed",
    summary:
      "Unravel the mystery of the wizard Aloth's hidden second personality and his ties to the Leaden Key.",
    aiTip:
      "His arc ties directly into the main conspiracy — pursue it before the finale.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20Companion%3A%20Aloth%20%E2%80%94%20Two-Sided%20walkthrough"
  },
  {
    id: 765,
    type: "side",
    game: "Pillars of Eternity",
    region: "Caed Nua",
    title: "Companion: Sagani — The Long Hunt",
    location: "Various",
    length: "medium",
    difficulty: "Medium",
    reward: "Sagani's mission, closure",
    summary:
      "Aid the dwarven hunter Sagani in her lifelong quest to find the reincarnation of her village's elder.",
    aiTip:
      "Her quest can conclude across the world map — bring her along as you travel.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20Companion%3A%20Sagani%20%E2%80%94%20The%20Long%20Hunt%20walkthrough"
  },
  {
    id: 766,
    type: "side",
    game: "Pillars of Eternity",
    region: "Defiance Bay",
    title: "Companion: Pallegina — The Child of Five Suns",
    location: "Defiance Bay",
    length: "medium",
    difficulty: "Medium",
    reward: "Pallegina's order, Vailian ties",
    summary:
      "Help the godlike paladin Pallegina serve the Vailian Republics — or defy their orders.",
    aiTip:
      "Your advice affects Pallegina's standing with her order and her ending.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20Companion%3A%20Pallegina%20%E2%80%94%20The%20Child%20of%20Five%20Suns%20walkthrough"
  },
  {
    id: 767,
    type: "side",
    game: "Pillars of Eternity",
    region: "Dyrford",
    title: "Companion: Grieving Mother — Dream and Memory",
    location: "Dyrford",
    length: "medium",
    difficulty: "High",
    reward: "Grieving Mother's secret",
    summary:
      "Peer into the fractured memories of the mysterious Grieving Mother and the terrible mercy she performs.",
    aiTip:
      "One of the most thematically rich companion arcs — take your time with the memories.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20Companion%3A%20Grieving%20Mother%20%E2%80%94%20Dream%20and%20Memory%20walkthrough"
  },
  {
    id: 768,
    type: "side",
    game: "Pillars of Eternity",
    region: "White March",
    title: "The White March: Durgan's Battery",
    location: "Stalwart / White March",
    length: "long",
    difficulty: "High",
    reward: "Durgan steel, dwarven stronghold",
    summary:
      "Reopen the frozen dwarven fortress of Durgan's Battery and recover the secret of Durgan steel.",
    aiTip:
      "The White March Part I expansion — high-level content best done mid-to-late game.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20The%20White%20March%3A%20Durgan's%20Battery%20walkthrough"
  },
  {
    id: 769,
    type: "side",
    game: "Pillars of Eternity",
    region: "White March",
    title: "The White March: He Waits in Fire",
    location: "Stalwart / White March",
    length: "long",
    difficulty: "High",
    reward: "Abydon's forge, moral choice",
    summary:
      "Confront the sleeping god-forge and the fate of the smith-god Abydon in Part II.",
    aiTip:
      "A dramatic set piece with a weighty theological choice — think it through.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20The%20White%20March%3A%20He%20Waits%20in%20Fire%20walkthrough"
  },
  {
    id: 770,
    type: "side",
    game: "Pillars of Eternity",
    region: "White March",
    title: "The White March: Cragholdt Bluffs",
    location: "Cragholdt",
    length: "long",
    difficulty: "High",
    reward: "Concelhaut's tower, powerful loot",
    summary:
      "Storm the mercenary-held Cragholdt Bluffs and the tower of the lich Concelhaut.",
    aiTip:
      "Very difficult optional content — bring a well-geared, high-level party.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%20The%20White%20March%3A%20Cragholdt%20Bluffs%20walkthrough"
  },
  {
    id: 771,
    type: "main",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "The Cornett's Call",
    location: "Caed Nua ruins",
    length: "short",
    difficulty: "Medium",
    reward: "Watcher revived, Eothas awakens",
    summary:
      "The god Eothas reawakens beneath Caed Nua, drains the Watcher's soul, and marches into the sea — the chase begins.",
    aiTip:
      "The prologue reunites you with old companions and sets your soul-bond stakes for the game.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20The%20Cornett's%20Call%20walkthrough"
  },
  {
    id: 772,
    type: "main",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "Port Maje & the Gullet",
    location: "Port Maje / Neketaka",
    length: "medium",
    difficulty: "Medium",
    reward: "Deadfire opened, ship & crew",
    summary:
      "Wash ashore at Port Maje, then reach the great city of Neketaka to outfit your ship, the Defiant.",
    aiTip:
      "Neketaka is the hub — recruit crew, upgrade the Defiant, and pick up faction and companion quests.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Port%20Maje%20%26%20the%20Gullet%20walkthrough"
  },
  {
    id: 773,
    type: "main",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "Hasongo",
    location: "Hasongo",
    length: "medium",
    difficulty: "High",
    reward: "Eothas's trail, faction stakes",
    summary:
      "Reach the fortress island of Hasongo to catch Eothas's trail and get drawn into the powers' schemes.",
    aiTip:
      "Which faction you help here begins to steer the archipelago's fate.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Hasongo%20walkthrough"
  },
  {
    id: 774,
    type: "main",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "Ashen Maw",
    location: "Magran's Teeth",
    length: "long",
    difficulty: "High",
    reward: "Confront Eothas, faction climax",
    summary:
      "Brave the volcanic Ashen Maw to finally confront the titan of Eothas and the god's true plan.",
    aiTip:
      "A major turning point — your faction allegiance shapes who stands with you.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Ashen%20Maw%20walkthrough"
  },
  {
    id: 775,
    type: "main",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "The Coming Storm / A Glimpse Beyond",
    location: "Ukaizo approach",
    length: "long",
    difficulty: "High",
    reward: "Ukaizo unlocked, endgame",
    summary:
      "Secure passage past the Storm of Ukaizo to reach the lost Engwithan city and the god's final act.",
    aiTip:
      "Requires a faction's help to cross — the endgame branches hard on your choices.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20The%20Coming%20Storm%20%2F%20A%20Glimpse%20Beyond%20walkthrough"
  },
  {
    id: 776,
    type: "main",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "The Fall of Ukaizo",
    location: "Ukaizo",
    length: "long",
    difficulty: "High",
    reward: "Finale, the wheel's fate",
    summary:
      "At the ancient city of Ukaizo, the Watcher decides how to answer Eothas's world-shaking gambit.",
    aiTip:
      "The ending weighs the gods, the mortal world, and your faction — save before the final talks.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20The%20Fall%20of%20Ukaizo%20walkthrough"
  },
  {
    id: 777,
    type: "side",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "Faction: The Huana",
    location: "Neketaka",
    length: "long",
    difficulty: "High",
    reward: "Huana alliance, sovereignty",
    summary:
      "Serve Queen Onekaza and the native Huana as they fight to keep the Deadfire from foreign powers.",
    aiTip:
      "One of four mutually-exclusive faction paths to the finale — pick the vision you believe in.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Faction%3A%20The%20Huana%20walkthrough"
  },
  {
    id: 778,
    type: "side",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "Faction: Vailian Trading Company",
    location: "Neketaka",
    length: "long",
    difficulty: "High",
    reward: "VTC alliance, commerce",
    summary:
      "Advance the Vailian Trading Company's grip on the archipelago's soul-rich adra trade.",
    aiTip:
      "Aligning with the VTC alienates rival factions — choose deliberately.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Faction%3A%20Vailian%20Trading%20Company%20walkthrough"
  },
  {
    id: 779,
    type: "side",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "Faction: Príncipi sen Patrena",
    location: "Deadfire seas",
    length: "long",
    difficulty: "High",
    reward: "Pirate alliance, freedom",
    summary:
      "Throw in with the pirate confederation, the Príncipi, and their dream of a free Deadfire.",
    aiTip:
      "The most freewheeling faction — great for a swashbuckling captain playthrough.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Faction%3A%20Pr%C3%ADncipi%20sen%20Patrena%20walkthrough"
  },
  {
    id: 780,
    type: "side",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "Faction: Rauataian Royal Deadfire Company",
    location: "Neketaka",
    length: "long",
    difficulty: "High",
    reward: "Rauatai alliance, empire",
    summary:
      "Help the imperial Rauataians impose order — and control — over the islands.",
    aiTip:
      "A colonizing power path with hard moral trade-offs; your choices color the ending.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Faction%3A%20Rauataian%20Royal%20Deadfire%20Company%20walkthrough"
  },
  {
    id: 781,
    type: "side",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "Companion: Edér — The Lighted Path",
    location: "Sayuka",
    length: "medium",
    difficulty: "Medium",
    reward: "Edér's faith and family",
    summary:
      "Help Edér find a lost love and reckon with his faith now that Eothas has returned.",
    aiTip:
      "A warm, human arc amid the divine stakes — worth doing before the finale.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Companion%3A%20Ed%C3%A9r%20%E2%80%94%20The%20Lighted%20Path%20walkthrough"
  },
  {
    id: 782,
    type: "side",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "Companion: Serafen — A Sorcerer and a Gentleman",
    location: "Deadfire seas",
    length: "medium",
    difficulty: "High",
    reward: "Serafen's past, Remaro's fate",
    summary:
      "Aid the cipher orlan pirate Serafen in tracking down Remaro, an old pirate the Príncipi have branded a mutineer and traitor.",
    aiTip:
      "Ship-combat friendly — chase the target across the seas with the Defiant.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Companion%3A%20Serafen%20%E2%80%94%20A%20Sorcerer%20and%20a%20Gentleman%20walkthrough"
  },
  {
    id: 783,
    type: "side",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "Companion: Maia Rua — The Courier's Calling",
    location: "Deadfire seas",
    length: "medium",
    difficulty: "Medium",
    reward: "Maia's Rauatai orders, RDC standing",
    summary:
      "Help the Rauataian sharpshooter Maia deliver the Royal Deadfire Company's missives across the archipelago — and reckon with the ruthless orders that come with them.",
    aiTip:
      "Her loyalty to Rauatai can clash with the Watcher's conscience — your input shapes her ending.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Companion%3A%20Maia%20Rua%20%E2%80%94%20The%20Courier's%20Calling%20walkthrough"
  },
  {
    id: 784,
    type: "side",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "Companion: Tekēhu — The Shadow Under Neketaka",
    location: "Neketaka",
    length: "medium",
    difficulty: "Medium",
    reward: "Tekēhu's watershaper heritage",
    summary:
      "Tekēhu has no standalone personal quest — instead the flamboyant godlike watershaper takes center stage in the Watershaper Guild's investigation of The Shadow Under Neketaka, wrestling with his rare gifts and Huana duty.",
    aiTip:
      "A charismatic arc exploring the Huana's caste system and divine blood.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Companion%3A%20Tek%C4%93hu%20%E2%80%94%20The%20Shadow%20Under%20Neketaka%20walkthrough"
  },
  {
    id: 785,
    type: "side",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "The Beast of Winter (DLC)",
    location: "Harbinger's Watch",
    length: "long",
    difficulty: "High",
    reward: "Rymrgand's trial, unique rewards",
    summary:
      "Answer a cult's summons to the frozen isle and enter the death-god Rymrgand's domain.",
    aiTip:
      "A darkly imaginative DLC — bring cold resistance and a high-level party.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20The%20Beast%20of%20Winter%20(DLC)%20walkthrough"
  },
  {
    id: 786,
    type: "side",
    game: "Pillars of Eternity II: Deadfire",
    region: "Deadfire",
    title: "Seeker, Slayer, Survivor (DLC)",
    location: "Old City arena",
    length: "long",
    difficulty: "High",
    reward: "Combat trials, prestige gear",
    summary:
      "Compete in the spectral arena of the Faces of War for glory and powerful loot.",
    aiTip:
      "A combat-focused DLC — ideal for testing a min-maxed party build.",
    video: "https://www.youtube.com/results?search_query=Pillars%20of%20Eternity%202%20Deadfire%20Seeker%2C%20Slayer%2C%20Survivor%20(DLC)%20walkthrough"
  },
  {
    id: 787,
    type: "side",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Save the Refugees (Druid Grove)",
    location: "Emerald Grove",
    length: "medium",
    difficulty: "Medium",
    reward: "Tiefling allies, grove saved",
    summary:
      "Broker peace between the druids' ritual and the tiefling refugees before Kagha seals the grove.",
    aiTip:
      "Your choices here ripple through both later acts — the tieflings remember how you treat them.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Save%20the%20Refugees%20(Druid%20Grove)%20walkthrough"
  },
  {
    id: 788,
    type: "main",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Raid the Goblin Camp",
    location: "Shattered Sanctum",
    length: "long",
    difficulty: "High",
    reward: "Goblin leaders slain, Halsin freed",
    summary:
      "Take down the three goblin leaders — Minthara, Dror Ragzlin, and Priestess Gut — to break the cult of the Absolute.",
    aiTip:
      "You can fight your way in or talk/sneak — sparing Minthara opens a very different path.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Raid%20the%20Goblin%20Camp%20walkthrough"
  },
  {
    id: 789,
    type: "side",
    game: "Baldur's Gate 3",
    act: 1,
    title: "The Blighted Village & Whispering Depths",
    location: "Blighted Village",
    length: "medium",
    difficulty: "Medium",
    reward: "Loot, Phase Spider Matriarch",
    summary:
      "Clear the gnoll- and goblin-infested Blighted Village and the spider-filled Whispering Depths below.",
    aiTip:
      "The Phase Spider Matriarch is a nasty early fight — use the chasms and fire to your advantage.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20The%20Blighted%20Village%20%26%20Whispering%20Depths%20walkthrough"
  },
  {
    id: 790,
    type: "side",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Free Nere (Grymforge Duergar)",
    location: "Grymforge",
    length: "medium",
    difficulty: "High",
    reward: "Deep gnomes freed, True Soul intel",
    summary:
      "Decide the fate of the trapped deep gnomes and the duergar under the True Soul Nere.",
    aiTip:
      "Siding with the gnomes vs. the duergar changes who helps you at the Adamantine Forge.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Free%20Nere%20(Grymforge%20Duergar)%20walkthrough"
  },
  {
    id: 791,
    type: "side",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Companion: Lae'zel & the Creche",
    location: "Rosymorn Monastery",
    length: "long",
    difficulty: "High",
    reward: "Githyanki truth, Astral tadpole",
    summary:
      "Escort Lae'zel to the githyanki Creche Y'llek to seek a cure — and confront her people's lies.",
    aiTip:
      "A pivotal companion arc; the Creche also holds powerful gear and the Blood of Lathander.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Companion%3A%20Lae'zel%20%26%20the%20Creche%20walkthrough"
  },
  {
    id: 792,
    type: "side",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Companion: Karlach's Infernal Engine",
    location: "Risen Road",
    length: "medium",
    difficulty: "Medium",
    reward: "Karlach's heart repaired",
    summary:
      "Help the fugitive tiefling Karlach cool her failing infernal engine and hunt the paladins of Tyr.",
    aiTip:
      "Bring her infernal iron to Dammon across the acts to keep her heart from burning out.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Companion%3A%20Karlach's%20Infernal%20Engine%20walkthrough"
  },
  {
    id: 793,
    type: "side",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Reach the Last Light Inn",
    location: "Shadow-Cursed Lands",
    length: "medium",
    difficulty: "Medium",
    reward: "Safe haven, Isobel's protection",
    summary:
      "Cross the deadly Shadow-Cursed Lands to the Harper stronghold sheltered by the cleric Isobel.",
    aiTip:
      "Keep a light source at all times — the shadow curse kills the unprotected quickly.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Reach%20the%20Last%20Light%20Inn%20walkthrough"
  },
  {
    id: 794,
    type: "side",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Save Arabella (Kithrak Voss)",
    location: "Last Light Inn",
    length: "short",
    difficulty: "Medium",
    reward: "Tiefling child saved",
    summary:
      "Rescue the young tiefling Arabella from the shadows before grief consumes her family.",
    aiTip:
      "A time-sensitive rescue — act fast when the shadows close in around the inn.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Save%20Arabella%20(Kithrak%20Voss)%20walkthrough"
  },
  {
    id: 795,
    type: "side",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Free the Nightsong (Gauntlet of Shar)",
    location: "Gauntlet of Shar",
    length: "long",
    difficulty: "High",
    reward: "Shadowheart's fate, Aylin freed",
    summary:
      "Survive Shar's trials in the Gauntlet and decide the fate of the imprisoned Nightsong.",
    aiTip:
      "This is Shadowheart's defining choice — spare or slay the Nightsong shapes her whole arc.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Free%20the%20Nightsong%20(Gauntlet%20of%20Shar)%20walkthrough"
  },
  {
    id: 796,
    type: "side",
    game: "Baldur's Gate 3",
    act: 2,
    title: "The Mind Flayer Colony",
    location: "Moonrise Towers",
    length: "long",
    difficulty: "High",
    reward: "Astral Prism secrets, Emperor",
    summary:
      "Descend beneath Moonrise into the mind flayer colony to confront the truth of your tadpole.",
    aiTip:
      "A major story reveal — how you handle the Emperor here echoes into the finale.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20The%20Mind%20Flayer%20Colony%20walkthrough"
  },
  {
    id: 797,
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Companion: Astarion's Ascension",
    location: "Baldur's Gate",
    length: "long",
    difficulty: "High",
    reward: "Cazador defeated, Astarion's fate",
    summary:
      "Help Astarion confront his vampire master Cazador — and decide whether he claims dark power or freedom.",
    aiTip:
      "Ascending Astarion vs. keeping him free is one of the game's most impactful companion choices.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Companion%3A%20Astarion's%20Ascension%20walkthrough"
  },
  {
    id: 798,
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Stop the Murder Tribunal (Dribbles the Clown)",
    location: "Baldur's Gate",
    length: "medium",
    difficulty: "Medium",
    reward: "Serial-killer case solved",
    summary:
      "Investigate the ritual murders across Baldur's Gate and track the killer to Cazador's orbit.",
    aiTip:
      "Collect Dribbles the Clown's scattered body parts for a key clue in the Murder Tribunal.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Stop%20the%20Murder%20Tribunal%20(Dribbles%20the%20Clown)%20walkthrough"
  },
  {
    id: 799,
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
    title: "The Iron Throne",
    location: "Wyrm's Rock",
    length: "long",
    difficulty: "High",
    reward: "Prisoners rescued, Gondians freed",
    summary:
      "Mount an underwater prison break at the Iron Throne before Gortash floods it.",
    aiTip:
      "A brutal timer — prioritize who you save; you can't get everyone without preparation.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20The%20Iron%20Throne%20walkthrough"
  },
  {
    id: 800,
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Destroy the Steel Watch Foundry",
    location: "Baldur's Gate",
    length: "long",
    difficulty: "High",
    reward: "Steel Watch disabled, Gortash weakened",
    summary:
      "Sabotage Gortash's Steel Watch army at its foundry to cripple his hold on the city.",
    aiTip:
      "Freeing the Gondians at the Iron Throne first makes disabling the Watch far easier.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Destroy%20the%20Steel%20Watch%20Foundry%20walkthrough"
  },
  {
    id: 801,
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Defeat the Chosen: Orin & Gortash",
    location: "Baldur's Gate",
    length: "long",
    difficulty: "High",
    reward: "Netherstones claimed",
    summary:
      "Hunt down the Chosen of Bhaal (Orin) and Bane (Gortash) to seize their Netherstones.",
    aiTip:
      "Gather allies and the other Netherstones before the finale — the Elder Brain awaits.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Defeat%20the%20Chosen%3A%20Orin%20%26%20Gortash%20walkthrough"
  },
  {
    id: 802,
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Companion: Wyll & Mizora's Bargain",
    location: "Baldur's Gate",
    length: "medium",
    difficulty: "High",
    reward: "Wyll's pact resolved, Zariel's Asset",
    summary:
      "Confront the terms of Wyll's infernal pact with Mizora and his father Duke Ravengard's fate.",
    aiTip:
      "Breaking or keeping the pact changes Wyll's ending — and whether his father survives.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Companion%3A%20Wyll%20%26%20Mizora's%20Bargain%20walkthrough"
  },
  {
    id: 803,
    type: "side",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Confront Raphael (House of Hope)",
    location: "House of Hope",
    length: "long",
    difficulty: "High",
    reward: "Orphic Hammer, Hope freed",
    summary:
      "Heist the devil Raphael's own domain to steal the Orphic Hammer and free the archdevil's prisoners.",
    aiTip:
      "One of the toughest optional fights — free Hope and grab the Infernal loot before facing Raphael.",
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Confront%20Raphael%20(House%20of%20Hope)%20walkthrough"
  },
  {
    id: 804,
    type: "main",
    game: "Elden Ring",
    region: "Limgrave",
    title: "Explore Stormveil Castle",
    location: "Limgrave",
    length: "long",
    difficulty: "High",
    reward: "Legacy dungeon, Godrick's rune",
    summary:
      "Infiltrate Godrick the Grafted's fortress, Stormveil Castle, choosing the main gate or the sewer path.",
    aiTip:
      "Recruit Nepheli Loux and use the Rusty Key's side route to skip the deadly courtyard.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Explore%20Stormveil%20Castle%20walkthrough"
  },
  {
    id: 805,
    type: "main",
    game: "Elden Ring",
    region: "Liurnia",
    title: "Raya Lucaria Academy",
    location: "Liurnia",
    length: "long",
    difficulty: "High",
    reward: "Legacy dungeon, Rennala's rune",
    summary:
      "Breach the sorcerers' Academy of Raya Lucaria to reach Rennala, Queen of the Full Moon.",
    aiTip:
      "Grab the Glintstone Key to open the gate — the rooftop route hides valuable loot.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Raya%20Lucaria%20Academy%20walkthrough"
  },
  {
    id: 806,
    type: "main",
    game: "Elden Ring",
    region: "Leyndell & Altus",
    title: "Defeat Rykard, Lord of Blasphemy",
    location: "Leyndell & Altus",
    length: "long",
    difficulty: "High",
    reward: "Great rune, Blasphemous Blade",
    summary:
      "Complete the Volcano Manor and slay the serpent-god Rykard with the Serpent-Hunter greatspear.",
    aiTip:
      "The Serpent-Hunter weapon by the arena trivializes the fight — use it and stagger him.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Defeat%20Rykard%2C%20Lord%20of%20Blasphemy%20walkthrough"
  },
  {
    id: 807,
    type: "side",
    game: "Elden Ring",
    region: "Liurnia",
    title: "Defeat the Godskin Noble",
    location: "Liurnia",
    length: "medium",
    difficulty: "High",
    reward: "Godskin gear, progression",
    summary:
      "Best the bloated Godskin Noble in the Temple of Eiglay and other haunts of the Godskin Apostles.",
    aiTip:
      "Its rolling attack is punishing — stay close and punish the recovery.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Defeat%20the%20Godskin%20Noble%20walkthrough"
  },
  {
    id: 808,
    type: "side",
    game: "Elden Ring",
    region: "Leyndell & Altus",
    title: "Defeat Godefroy the Grafted",
    location: "Leyndell & Altus",
    length: "medium",
    difficulty: "High",
    reward: "Golden Order lore, runes",
    summary:
      "Defeat the hidden echo of Godrick, Godefroy the Grafted, in the Golden Lineage evergaol.",
    aiTip:
      "A tougher reprise of Godrick — bleed and stance-breaks work well.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Defeat%20Godefroy%20the%20Grafted%20walkthrough"
  },
  {
    id: 809,
    type: "side",
    game: "Elden Ring",
    region: "Mountaintops",
    title: "Defeat Commander Niall",
    location: "Mountaintops",
    length: "long",
    difficulty: "High",
    reward: "Great rune path, Veteran's set",
    summary:
      "Overcome Commander Niall and his spectral knights atop Castle Sol to claim the Haligtree medallion half.",
    aiTip:
      "Kill the two summoned knights first, then focus Niall — a very tough optional fight.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Defeat%20Commander%20Niall%20walkthrough"
  },
  {
    id: 810,
    type: "side",
    game: "Elden Ring",
    region: "Underground",
    title: "Defeat Lichdragon Fortissax",
    location: "Underground",
    length: "long",
    difficulty: "High",
    reward: "Fia's questline, Cursemark of Death",
    summary:
      "Enter Fia's dream to battle the Lichdragon Fortissax and complete the Deathbed Companion's arc.",
    aiTip:
      "Lightning resistance helps enormously; finish Fia's quest to earn a unique ending item.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Defeat%20Lichdragon%20Fortissax%20walkthrough"
  },
  {
    id: 811,
    type: "side",
    game: "Elden Ring",
    region: "Underground",
    title: "Defeat Regal Ancestor Spirit",
    location: "Underground",
    length: "medium",
    difficulty: "High",
    reward: "Ancestral rewards, Remembrance",
    summary:
      "Track the glowing trail through the Nokron/Siofra depths to the majestic Regal Ancestor Spirit.",
    aiTip:
      "Light the braziers around the arena to reveal the boss and land hits.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Defeat%20Regal%20Ancestor%20Spirit%20walkthrough"
  },
  {
    id: 812,
    type: "side",
    game: "Elden Ring",
    region: "Limgrave",
    title: "Yura, Hunter of the Bloody Fingers",
    location: "Limgrave",
    length: "medium",
    difficulty: "Medium",
    reward: "Nagakiba, anti-invader arc",
    summary:
      "Aid the bloody-finger hunter Yura against invaders and the maiden Eleonora across the Lands Between.",
    aiTip:
      "Answer his summons at Murkwater Cave and the Second Church of Marika to see his tale through.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Yura%2C%20Hunter%20of%20the%20Bloody%20Fingers%20walkthrough"
  },
  {
    id: 813,
    type: "side",
    game: "Elden Ring",
    region: "Liurnia",
    title: "Latenna the Albinauric",
    location: "Liurnia",
    length: "medium",
    difficulty: "Medium",
    reward: "Haligtree medallion half, Spirit Ash",
    summary:
      "Help the archer Latenna reach the Lands of the Albinaurics and honor her wolf-bound pact.",
    aiTip:
      "Her questline yields a Haligtree medallion half and a strong summon.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Latenna%20the%20Albinauric%20walkthrough"
  },
  {
    id: 814,
    type: "side",
    game: "Elden Ring",
    region: "Leyndell & Altus",
    title: "Diallos & the Volcano Manor",
    location: "Volcano Manor / Jarburg",
    length: "medium",
    difficulty: "Medium",
    reward: "Diallos's fate, Hoslow's gear",
    summary:
      "Follow the hapless noble Diallos through grief and the assassin's contracts of Volcano Manor.",
    aiTip:
      "His arc intersects Jarburg and the manor — check in across your playthrough.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Diallos%20%26%20the%20Volcano%20Manor%20walkthrough"
  },
  {
    id: 815,
    type: "side",
    game: "Elden Ring",
    region: "Caelid",
    title: "Gowry & Millicent (Scarlet Rot)",
    location: "Caelid",
    length: "long",
    difficulty: "High",
    reward: "Unalloyed needle, Rot arc",
    summary:
      "Aid the sorcerer Gowry and the rot-stricken Millicent, choosing whether to help or hinder her sisters.",
    aiTip:
      "One of the most involved quests — the Haligtree finale rewards a unique talisman.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Gowry%20%26%20Millicent%20(Scarlet%20Rot)%20walkthrough"
  },
  {
    id: 816,
    type: "side",
    game: "Elden Ring",
    region: "Liurnia",
    title: "Rya & Volcano Manor Invitation",
    location: "Liurnia",
    length: "medium",
    difficulty: "Medium",
    reward: "Serpent lore, Zorayas arc",
    summary:
      "Return the noblewoman Rya's necklace and follow her into the intrigues of Volcano Manor.",
    aiTip:
      "Her arc opens the Volcano Manor questline and its assassination contracts.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Rya%20%26%20Volcano%20Manor%20Invitation%20walkthrough"
  },
  {
    id: 817,
    type: "side",
    game: "Elden Ring",
    region: "Limgrave",
    title: "Kenneth Haight & Fort Haight",
    location: "Limgrave",
    length: "short",
    difficulty: "Low",
    reward: "Ally, settlement restored",
    summary:
      "Help the exiled lord Kenneth Haight reclaim Fort Haight and restore a fragment of order.",
    aiTip:
      "A short early questline that connects to Nepheli Loux's story.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Kenneth%20Haight%20%26%20Fort%20Haight%20walkthrough"
  },
  {
    id: 818,
    type: "main",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Enter the Land of Shadow (Scadutree)",
    location: "Land of Shadow",
    length: "medium",
    difficulty: "Medium",
    reward: "DLC start, Scadutree Blessing",
    summary:
      "Answer Miquella's call through Mohg's arena into the Land of Shadow and begin gathering Scadutree Fragments.",
    aiTip:
      "Scadutree Fragments are the DLC's key power scaling — collect them before every major boss.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Enter%20the%20Land%20of%20Shadow%20(Scadutree)%20walkthrough"
  },
  {
    id: 819,
    type: "main",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Defeat Divine Beast Dancing Lion",
    location: "Land of Shadow",
    length: "long",
    difficulty: "High",
    reward: "Remembrance, Belurat cleared",
    summary:
      "Face the Divine Beast Dancing Lion atop Belurat, Tower Settlement — the DLC's first great hurdle.",
    aiTip:
      "Its element shifts (wind, frost, lightning) mid-fight; watch the mask to read the next phase.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Defeat%20Divine%20Beast%20Dancing%20Lion%20walkthrough"
  },
  {
    id: 820,
    type: "main",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Defeat Rellana, Twin Moon Knight",
    location: "Land of Shadow",
    length: "long",
    difficulty: "High",
    reward: "Remembrance, Castle Ensis cleared",
    summary:
      "Duel Rellana, Twin Moon Knight, guarding the pass beyond Castle Ensis.",
    aiTip:
      "A fast, aggressive duelist — learn her dual-moon combo and punish the recovery.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Defeat%20Rellana%2C%20Twin%20Moon%20Knight%20walkthrough"
  },
  {
    id: 821,
    type: "main",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Defeat Messmer the Impaler",
    location: "Land of Shadow",
    length: "long",
    difficulty: "High",
    reward: "Remembrance, Shadow Keep opened",
    summary:
      "Storm the Shadow Keep and defeat Messmer the Impaler, the fire-and-serpent scion.",
    aiTip:
      "His second phase adds serpents and impaling spears — fire resistance and patience are key.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Defeat%20Messmer%20the%20Impaler%20walkthrough"
  },
  {
    id: 822,
    type: "side",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Defeat Bayle the Dread",
    location: "Land of Shadow",
    length: "long",
    difficulty: "High",
    reward: "Remembrance, dragon communion",
    summary:
      "Descend the Jagged Peak with Igon to slay the ancient dragon Bayle the Dread.",
    aiTip:
      "Igon's summon and spear buff help enormously — do his questline first.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Defeat%20Bayle%20the%20Dread%20walkthrough"
  },
  {
    id: 823,
    type: "side",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Defeat Midra, Lord of Frenzied Flame",
    location: "Land of Shadow",
    length: "long",
    difficulty: "High",
    reward: "Remembrance, Frenzied Flame lore",
    summary:
      "Delve into Midra's Manse to confront the tragic Lord of Frenzied Flame.",
    aiTip:
      "Madness resistance and a steady approach keep the Frenzied Flame from overwhelming you.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Defeat%20Midra%2C%20Lord%20of%20Frenzied%20Flame%20walkthrough"
  },
  {
    id: 824,
    type: "side",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Defeat Metyr, Mother of Fingers",
    location: "Land of Shadow",
    length: "long",
    difficulty: "High",
    reward: "Remembrance, Count Ymir's arc",
    summary:
      "Follow Count Ymir's questline to the Finger Ruins and the cosmic horror Metyr, Mother of Fingers.",
    aiTip:
      "A ranged-heavy boss — close distance during her beam attacks and punish between casts.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Defeat%20Metyr%2C%20Mother%20of%20Fingers%20walkthrough"
  },
  {
    id: 825,
    type: "side",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Defeat Romina, Saint of the Bud",
    location: "Land of Shadow",
    length: "long",
    difficulty: "High",
    reward: "Remembrance, Haligtree path",
    summary:
      "Best Romina, Saint of the Bud, guarding the Church of the Bud on the way to Enir-Ilim.",
    aiTip:
      "Scarlet rot buildup is deadly here — bring cleansing items and rot resistance.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Defeat%20Romina%2C%20Saint%20of%20the%20Bud%20walkthrough"
  },
  {
    id: 826,
    type: "main",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Defeat Promised Consort Radahn",
    location: "Land of Shadow",
    length: "long",
    difficulty: "High",
    reward: "DLC finale, Miquella's ending",
    summary:
      "At Enir-Ilim, confront Radahn, Consort of Miquella — the climax of Shadow of the Erdtree.",
    aiTip:
      "The hardest fight in the game; max your Scadutree Blessing and bring a strong summon.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Defeat%20Promised%20Consort%20Radahn%20walkthrough"
  },
  {
    id: 827,
    type: "side",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Needle Knight Leda & the Companions",
    location: "Land of Shadow",
    length: "medium",
    difficulty: "High",
    reward: "DLC NPC arc, invasions",
    summary:
      "Navigate the shifting loyalties of Leda's band — Ansbach, Thiollier, Freyja, Hornsent, and Moore.",
    aiTip:
      "Their allegiances split near the end; your choices decide who invades and who aids you.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Needle%20Knight%20Leda%20%26%20the%20Companions%20walkthrough"
  },
  {
    id: 828,
    type: "side",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "St. Trina & Thiollier",
    location: "Land of Shadow",
    length: "medium",
    difficulty: "Medium",
    reward: "Sleep arc, unique reward",
    summary:
      "Follow the melancholic Thiollier to the slumbering St. Trina hidden in the Land of Shadow.",
    aiTip:
      "A quiet, lore-rich side arc that rewards patience and exploration.",
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20St.%20Trina%20%26%20Thiollier%20walkthrough"
  },
  {
    id: 829,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 1,
    title: "The Wandering Wight",
    location: "Black Wind Mountain",
    length: "medium",
    difficulty: "Medium",
    reward: "Spirit absorbed, upgrades",
    summary:
      "Battle the lumbering Wandering Wight, a mound of vengeful earth and bone in Chapter 1.",
    aiTip:
      "Dodge its ground-slams and punish the long recovery; absorb its spirit for a useful skill.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20The%20Wandering%20Wight%20walkthrough"
  },
  {
    id: 830,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 1,
    title: "Guangzhi & the Wolf Vanguard",
    location: "Black Wind Mountain",
    length: "medium",
    difficulty: "Medium",
    reward: "Transformation spirit, gear",
    summary:
      "Defeat the wolf commander Guangzhi, whose flaming glaive guards the mountain paths.",
    aiTip:
      "His fire combos are relentless — stay mobile and strike between his lunges.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20Guangzhi%20%26%20the%20Wolf%20Vanguard%20walkthrough"
  },
  {
    id: 831,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 1,
    title: "Elder Jinchi (Lingxuzi)",
    location: "Black Wind Mountain",
    length: "long",
    difficulty: "High",
    reward: "Spirit, Chapter 1 secret",
    summary:
      "Face the serpent-adjacent Elder Jinchi, a hidden Chapter 1 boss tied to the mountain's masters.",
    aiTip:
      "A tougher optional fight — bring focus and the right stance for its quick strikes.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20Elder%20Jinchi%20(Lingxuzi)%20walkthrough"
  },
  {
    id: 832,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 1,
    title: "Whiteclad Noble & Baw-Li-Guhh-Lang",
    location: "Black Wind Mountain",
    length: "medium",
    difficulty: "Medium",
    reward: "Spirit, side loot",
    summary:
      "Defeat the snake spirits Whiteclad Noble and Baw-Li-Guhh-Lang haunting Chapter 1's byways.",
    aiTip:
      "Watch for poison; keep healing gourd charges ready for the drawn-out fight.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20Whiteclad%20Noble%20%26%20Baw-Li-Guhh-Lang%20walkthrough"
  },
  {
    id: 833,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 2,
    title: "Tiger Vanguard",
    location: "Yellow Wind Ridge",
    length: "long",
    difficulty: "High",
    reward: "Spirit, Chapter 2 gatekeeper",
    summary:
      "Clash with the fearsome Tiger Vanguard, a towering blademaster of the sandy ridge.",
    aiTip:
      "One of the game's iconic hard fights — learn his charge and counter with immobilize.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20Tiger%20Vanguard%20walkthrough"
  },
  {
    id: 834,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 2,
    title: "Kang-Jin Loong",
    location: "Yellow Wind Ridge",
    length: "long",
    difficulty: "High",
    reward: "Loong spirit, dragon skill",
    summary:
      "Battle the golden dragon Kang-Jin Loong coiling through Chapter 2's ruins.",
    aiTip:
      "Aerial and dashing attacks abound — punish after his dive and keep your distance otherwise.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20Kang-Jin%20Loong%20walkthrough"
  },
  {
    id: 835,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 2,
    title: "Stone Vanguard",
    location: "Yellow Wind Ridge",
    length: "medium",
    difficulty: "Medium",
    reward: "Spirit, upgrade material",
    summary:
      "Topple the hulking Stone Vanguard guarding a Chapter 2 path.",
    aiTip:
      "Its armor shrugs off light hits — use heavy stance combos and dodge the shockwaves.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20Stone%20Vanguard%20walkthrough"
  },
  {
    id: 836,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 3,
    title: "Macaque Chief (Non-Void)",
    location: "Pagoda Realm",
    length: "long",
    difficulty: "High",
    reward: "Spirit, Chapter 3 lore",
    summary:
      "Confront the illusion-weaving Macaque Chief amid the snows of Chapter 3.",
    aiTip:
      "His clones and teleports demand focus — lock onto the real one and stay aggressive.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20Macaque%20Chief%20(Non-Void)%20walkthrough"
  },
  {
    id: 837,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 3,
    title: "Captain Wise-Voice",
    location: "Pagoda Realm",
    length: "medium",
    difficulty: "Medium",
    reward: "Spirit, upgrade",
    summary:
      "Defeat the froglike Captain Wise-Voice in the frozen Chapter 3 wilds.",
    aiTip:
      "Sound-based attacks telegraph slowly — dodge in and punish the wind-up.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20Captain%20Wise-Voice%20walkthrough"
  },
  {
    id: 838,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 3,
    title: "The Yakshas of the Pagoda",
    location: "Pagoda Realm",
    length: "medium",
    difficulty: "High",
    reward: "Spirits, Chapter 3 secret",
    summary:
      "Battle the Yaksha kings woven into Chapter 3's tragic tale of the four sisters.",
    aiTip:
      "Multiple elemental foes — swap your vessel spells to match each Yaksha's weakness.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20The%20Yakshas%20of%20the%20Pagoda%20walkthrough"
  },
  {
    id: 839,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 4,
    title: "Violet Spider (Second Sister)",
    location: "Webbed Hollow",
    length: "long",
    difficulty: "High",
    reward: "Spirit, Chapter 4 arc",
    summary:
      "Face the venomous Violet Spider and her brood in the poisonous Webbed Hollow.",
    aiTip:
      "Poison stacks fast — cleanse often and burst her down during openings.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20Violet%20Spider%20(Second%20Sister)%20walkthrough"
  },
  {
    id: 840,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 4,
    title: "Duo of Corruption",
    location: "Webbed Hollow",
    length: "long",
    difficulty: "High",
    reward: "Spirit, upgrade",
    summary:
      "Take on the paired insect-demon Duo of Corruption guarding Chapter 4's depths.",
    aiTip:
      "Split your attention carefully — immobilize one while you focus the other.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20Duo%20of%20Corruption%20walkthrough"
  },
  {
    id: 841,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 5,
    title: "Bull King & Cloudtreading Deer",
    location: "Flaming Mountains",
    length: "long",
    difficulty: "High",
    reward: "Spirit, Chapter 5 progression",
    summary:
      "Battle the mighty Bull King and the swift Cloudtreading Deer amid the volcanic Chapter 5.",
    aiTip:
      "Fire fills the arena — keep moving and exploit the Bull King's slow recovery.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20Bull%20King%20%26%20Cloudtreading%20Deer%20walkthrough"
  },
  {
    id: 842,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 5,
    title: "The Fire Sages (Five Elements)",
    location: "Flaming Mountains",
    length: "medium",
    difficulty: "High",
    reward: "Elemental spirits, upgrades",
    summary:
      "Defeat the elemental sages tied to the Five-Element Carts and the Flaming Mountains' curse.",
    aiTip:
      "Bring fire resistance and rotate stances to break each sage's guard.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20The%20Fire%20Sages%20(Five%20Elements)%20walkthrough"
  },
  {
    id: 843,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 6,
    title: "Giant Shigandang",
    location: "Mount Huaguo",
    length: "long",
    difficulty: "High",
    reward: "Spirit, Chapter 6 hurdle",
    summary:
      "Face the colossal Giant Shigandang on the road to Wukong's homeland in Chapter 6.",
    aiTip:
      "A huge stone brute — bait its slams, then unload heavy combos on the openings.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20Giant%20Shigandang%20walkthrough"
  },
  {
    id: 844,
    type: "side",
    game: "Black Myth: Wukong",
    chapter: 6,
    title: "Supreme Inspector & the Final Trials",
    location: "Mount Huaguo",
    length: "long",
    difficulty: "High",
    reward: "Spirits, endgame prep",
    summary:
      "Overcome the Supreme Inspector and the last trials guarding the Great Sage's legacy.",
    aiTip:
      "Late-game difficulty — max your spells, gourd, and transformations before the finale.",
    video: "https://www.youtube.com/results?search_query=Black%20Myth%20Wukong%20Supreme%20Inspector%20%26%20the%20Final%20Trials%20walkthrough"
  },
  {
    id: 845,
    type: "side",
    category: "Assignment",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Herbology Assignment I — Professor Garlick",
    location: "Herbology Classroom",
    length: "medium",
    difficulty: "Low",
    reward: "Ancient Magic, spell knowledge",
    summary:
      "Grow and harvest a Mandrake, then use it against enemies as Professor Garlick asks.",
    aiTip:
      "Buy a Mandrake seed from the Magic Neep in Hogsmeade if you don't have one.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Herbology%20Assignment%20I%20%E2%80%94%20Professor%20Garlick%20walkthrough"
  },
  {
    id: 846,
    type: "side",
    category: "Assignment",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Herbology Assignment II — Professor Garlick",
    location: "Herbology Classroom",
    length: "medium",
    difficulty: "Low",
    reward: "Chinese Chomping Cabbage combat",
    summary:
      "Prove your mastery of offensive plants by defeating foes with Chomping Cabbages.",
    aiTip:
      "Equip the Chomping Cabbage to your plant slot and throw it into groups.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Herbology%20Assignment%20II%20%E2%80%94%20Professor%20Garlick%20walkthrough"
  },
  {
    id: 847,
    type: "side",
    category: "Assignment",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Defence Against the Dark Arts Assignment I — Professor Hecat",
    location: "DADA Classroom",
    length: "medium",
    difficulty: "Low",
    reward: "Levioso mastery",
    summary:
      "Hit enemies with Levioso, then combo them in the air as Hecat instructs.",
    aiTip:
      "Levioso first, then basic-cast while they float to chain the requirement.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Defence%20Against%20the%20Dark%20Arts%20Assignment%20I%20%E2%80%94%20Professor%20Hecat%20walkthrough"
  },
  {
    id: 848,
    type: "side",
    category: "Assignment",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Defence Against the Dark Arts Assignment II — Professor Hecat",
    location: "DADA Classroom",
    length: "medium",
    difficulty: "Low",
    reward: "Stupefy counter mastery",
    summary:
      "Stun enemies with Stupefy after blocking their attacks.",
    aiTip:
      "Protego to block, then immediately Stupefy the staggered enemy.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Defence%20Against%20the%20Dark%20Arts%20Assignment%20II%20%E2%80%94%20Professor%20Hecat%20walkthrough"
  },
  {
    id: 849,
    type: "side",
    category: "Assignment",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Potions Assignment I — Professor Sharp",
    location: "Potions Classroom",
    length: "medium",
    difficulty: "Low",
    reward: "Edurus / potion knowledge",
    summary:
      "Brew and use a required potion in combat for Professor Sharp.",
    aiTip:
      "Brew ahead at a Potion Station and keep one equipped before reporting back.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Potions%20Assignment%20I%20%E2%80%94%20Professor%20Sharp%20walkthrough"
  },
  {
    id: 850,
    type: "side",
    category: "Assignment",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Potions Assignment II — Professor Sharp",
    location: "Potions Classroom",
    length: "medium",
    difficulty: "Low",
    reward: "Thunderbrew / Invisibility potion use",
    summary:
      "Demonstrate advanced potion use against tougher enemies.",
    aiTip:
      "Thunderbrew clears crowds fast and satisfies the combat requirement.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Potions%20Assignment%20II%20%E2%80%94%20Professor%20Sharp%20walkthrough"
  },
  {
    id: 851,
    type: "side",
    category: "Assignment",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Beasts Assignment — Professor Howin",
    location: "Beasts Classroom",
    length: "medium",
    difficulty: "Low",
    reward: "Nab-Sack & feeding know-how",
    summary:
      "Capture a beast with the Nab-Sack and care for it in the Room of Requirement.",
    aiTip:
      "Complete 'The Elf, the Nab-Sack, and the Loom' first to unlock the Nab-Sack.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Beasts%20Assignment%20%E2%80%94%20Professor%20Howin%20walkthrough"
  },
  {
    id: 852,
    type: "side",
    category: "Assignment",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Charms Assignment — Professor Ronen",
    location: "Charms Classroom",
    length: "medium",
    difficulty: "Low",
    reward: "Accio / Charms knowledge",
    summary:
      "Use taught charms to solve Ronen's practical challenge.",
    aiTip:
      "Accio and Wingardium Leviosa cover most of Ronen's requests.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Charms%20Assignment%20%E2%80%94%20Professor%20Ronen%20walkthrough"
  },
  {
    id: 853,
    type: "side",
    category: "Assignment",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Transfiguration Assignment — Professor Weasley",
    location: "Transfiguration Courtyard",
    length: "medium",
    difficulty: "Low",
    reward: "Transformation spell knowledge",
    summary:
      "Use Transformation on objects and enemies as Professor Weasley directs.",
    aiTip:
      "Unlock Transformation from Weasley's earlier class before attempting.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Transfiguration%20Assignment%20%E2%80%94%20Professor%20Weasley%20walkthrough"
  },
  {
    id: 854,
    type: "side",
    category: "Assignment",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Divination Assignment — Professor Onai",
    location: "Divination Classroom",
    length: "medium",
    difficulty: "Low",
    reward: "Insight into the future",
    summary:
      "Complete Professor Onai's divination-themed task around the castle.",
    aiTip:
      "Follow the marked locations; no combat pressure here.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Divination%20Assignment%20%E2%80%94%20Professor%20Onai%20walkthrough"
  },
  {
    id: 855,
    type: "side",
    category: "Assignment",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Flying Assignment I — Madam Kogawa",
    location: "Broom flight / Hogwarts grounds",
    length: "medium",
    difficulty: "Low",
    reward: "Broom control practice",
    summary:
      "Complete Madam Kogawa's first timed broom-flying course.",
    aiTip:
      "Buy a broom from Spintwitches in Hogsmeade first; boost through every ring.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Flying%20Assignment%20I%20%E2%80%94%20Madam%20Kogawa%20walkthrough"
  },
  {
    id: 856,
    type: "side",
    category: "Assignment",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Flying Assignment II — Madam Kogawa",
    location: "Broom flight / Highlands",
    length: "medium",
    difficulty: "Low",
    reward: "Advanced broom handling",
    summary:
      "Beat Kogawa's tougher second flying course against the clock.",
    aiTip:
      "Chain speed boosts and cut corners tight to beat the timer.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Flying%20Assignment%20II%20%E2%80%94%20Madam%20Kogawa%20walkthrough"
  },
  {
    id: 857,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "Welcome to Hogsmeade",
    location: "Hogsmeade",
    length: "medium",
    difficulty: "Medium",
    reward: "Access to Hogsmeade shops",
    summary:
      "Travel to Hogsmeade with Sebastian and help fend off a troll attacking the village.",
    aiTip:
      "Use nearby barrels and Accio to hurl objects at the troll's back.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Welcome%20to%20Hogsmeade%20walkthrough"
  },
  {
    id: 858,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Weasley After Class",
    location: "Headmaster's Office / Hogwarts",
    length: "short",
    difficulty: "Medium",
    reward: "Story progression",
    summary:
      "Meet Professor Weasley after class to discuss your unusual gift for ancient magic.",
    aiTip:
      "Purely narrative — talk through the dialogue to open the next classes.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Weasley%20After%20Class%20walkthrough"
  },
  {
    id: 859,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Tomes and Tribulations",
    location: "Hogsmeade / Library Annex",
    length: "medium",
    difficulty: "Medium",
    reward: "Spellcraft, first field trip",
    summary:
      "Shop for school supplies with Sebastian and learn spells at the shady Tomes and Scrolls annex.",
    aiTip:
      "Your first taste of unforgivable curiosity — you'll gain Levioso here.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Tomes%20and%20Tribulations%20walkthrough"
  },
  {
    id: 860,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Herbology Class",
    location: "Herbology Classroom / Greenhouses",
    length: "short",
    difficulty: "Medium",
    reward: "Mandrake, plant combat",
    summary:
      "Attend Professor Garlick's Herbology class and learn to wield combat plants.",
    aiTip:
      "Unlocks the Herbology assignments and plant loadouts.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Herbology%20Class%20walkthrough"
  },
  {
    id: 861,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Trials of Merlin",
    location: "Highlands",
    length: "short",
    difficulty: "Medium",
    reward: "Wand handle, Merlin Trial system",
    summary:
      "Meet Nora Treadwell and reawaken the ancient Merlin Trials scattered across the Highlands.",
    aiTip:
      "Craft Mallowsweet at a Potions station to activate any Merlin Trial.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Trials%20of%20Merlin%20walkthrough"
  },
  {
    id: 862,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "The Room of Requirement",
    location: "Room of Requirement",
    length: "medium",
    difficulty: "Medium",
    reward: "Room of Requirement, Conjuration",
    summary:
      "Deek the house-elf reveals the Room of Requirement — your personal magical workshop and vivarium hub.",
    aiTip:
      "Set up Conjurations and the Potions/Herbology tables early; you'll use them all game.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Room%20of%20Requirement%20walkthrough"
  },
  {
    id: 863,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Beasts Class",
    location: "Beasts Classroom",
    length: "short",
    difficulty: "Medium",
    reward: "Nab-Sack intro",
    summary:
      "Attend Professor Howin's Beasts class and learn the basics of magical creature care.",
    aiTip:
      "Leads into unlocking the Nab-Sack and the beast vivariums.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Beasts%20Class%20walkthrough"
  },
  {
    id: 864,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "The Caretaker's Lunar Lament",
    location: "Hogwarts Castle",
    length: "medium",
    difficulty: "Medium",
    reward: "Demiguise Statues, unlocks Alohomora",
    summary:
      "Help caretaker Gladwin Moon recover Demiguise Statues to learn and upgrade Alohomora.",
    aiTip:
      "Demiguise Statues only appear at night — use the wait function to change time.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Caretaker's%20Lunar%20Lament%20walkthrough"
  },
  {
    id: 865,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Feldcroft",
    title: "In the Shadow of the Estate",
    location: "Feldcroft Region",
    length: "medium",
    difficulty: "Medium",
    reward: "Sebastian arc, Feldcroft access",
    summary:
      "Join Sebastian and Ominis at the Gaunt family estate to seek a cure for Anne's curse.",
    aiTip:
      "Watch your dialogue with Ominis — it colours Sebastian's later choices.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20In%20the%20Shadow%20of%20the%20Estate%20walkthrough"
  },
  {
    id: 866,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Astronomy Class",
    location: "Astronomy Tower",
    length: "short",
    difficulty: "Medium",
    reward: "Astronomy Tables, star charts",
    summary:
      "Attend Astronomy class and learn to read the star tables dotted around the map.",
    aiTip:
      "Unlocks the Astronomy Table pairs that grant collection rewards.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Astronomy%20Class%20walkthrough"
  },
  {
    id: 867,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Back on the Path",
    location: "Highlands",
    length: "short",
    difficulty: "Medium",
    reward: "Story progression",
    summary:
      "After a detour, rejoin Professor Fig and pick the main investigation back up.",
    aiTip:
      "A connective story beat — pursue it to reopen the trial questline.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Back%20on%20the%20Path%20walkthrough"
  },
  {
    id: 868,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "In the Shadow of Revelation",
    location: "Highlands / Map Chamber",
    length: "long",
    difficulty: "Medium",
    reward: "Isidora's memory, endgame setup",
    summary:
      "Follow the aftermath of the Final Repository as Isidora Morganach's secret is fully revealed.",
    aiTip:
      "Flows straight out of 'The Final Repository' — save loadouts before you commit to the finale.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20In%20the%20Shadow%20of%20Revelation%20walkthrough"
  },
  {
    id: 869,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "The Poacher's House Call (Poppy)",
    location: "Highlands",
    length: "medium",
    difficulty: "Medium",
    reward: "Poppy relationship",
    summary:
      "Help Poppy Sweeting confront poachers who have tracked her down over her rescued beasts.",
    aiTip:
      "Bring crowd-control spells — the poacher camp comes at you in numbers.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Poacher's%20House%20Call%20(Poppy)%20walkthrough"
  },
  {
    id: 870,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "The Centaur and the Stone (Poppy)",
    location: "Highlands / Centaur Camp",
    length: "medium",
    difficulty: "Medium",
    reward: "Poppy relationship",
    summary:
      "Accompany Poppy to the centaur camp to recover a stolen moonstone and earn the herd's trust.",
    aiTip:
      "Speak respectfully in the centaur dialogue to keep Poppy's approval high.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Centaur%20and%20the%20Stone%20(Poppy)%20walkthrough"
  },
  {
    id: 871,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "It's in the Stars (Poppy)",
    location: "Highlands",
    length: "medium",
    difficulty: "Medium",
    reward: "Poppy relationship, finale",
    summary:
      "Share a quiet, starlit outing with Poppy that closes her companion questline.",
    aiTip:
      "The capstone of Poppy's arc — do it after her earlier beast quests.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20It's%20in%20the%20Stars%20(Poppy)%20walkthrough"
  },
  {
    id: 872,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "A Basis for Blackmail (Natty)",
    location: "Highlands / Lower Hogsfield",
    length: "medium",
    difficulty: "Medium",
    reward: "Natty relationship",
    summary:
      "Help Natsai Onai dig up leverage on the Ashwinder-aligned townsfolk troubling her mother.",
    aiTip:
      "Stealth with Disillusionment to gather evidence without a fight.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20A%20Basis%20for%20Blackmail%20(Natty)%20walkthrough"
  },
  {
    id: 873,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Feldcroft",
    title: "In the Shadow of Discovery (Sebastian)",
    location: "Feldcroft / Catacombs",
    length: "medium",
    difficulty: "Medium",
    reward: "Sebastian relationship",
    summary:
      "Descend into a catacomb with Sebastian as he chases a forbidden cure for his sister.",
    aiTip:
      "Cast Lumos and Depulso for the catacomb puzzles and spider swarms.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20In%20the%20Shadow%20of%20Discovery%20(Sebastian)%20walkthrough"
  },
  {
    id: 874,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Feldcroft",
    title: "In the Shadow of Distance (Sebastian)",
    location: "Feldcroft Region",
    length: "medium",
    difficulty: "Medium",
    reward: "Sebastian relationship",
    summary:
      "Sebastian's pursuit of dark knowledge starts to strain his bond with Ominis and with you.",
    aiTip:
      "Your choices here steer whether Sebastian embraces the Dark Arts.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20In%20the%20Shadow%20of%20Distance%20(Sebastian)%20walkthrough"
  },
  {
    id: 875,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Feldcroft",
    title: "In the Shadow of Fate (Sebastian)",
    location: "Feldcroft / Catacombs",
    length: "medium",
    difficulty: "Medium",
    reward: "Sebastian relationship, major choice",
    summary:
      "Reach the wrenching climax of Sebastian's story and decide how far you'll follow him.",
    aiTip:
      "A defining, irreversible choice — read every line before you answer.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20In%20the%20Shadow%20of%20Fate%20(Sebastian)%20walkthrough"
  },
  {
    id: 876,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Feldcroft",
    title: "Sacking Selwyn's Estate",
    location: "Feldcroft Region / Selwyn Estate",
    length: "medium",
    difficulty: "Medium",
    reward: "Gear, gold",
    summary:
      "Infiltrate the pure-blood Selwyn family estate to recover what a desperate house-elf's plight demands.",
    aiTip:
      "Expect a fight with Ashwinder loyalists inside — bring crowd control.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Sacking%20Selwyn's%20Estate%20walkthrough"
  },
  {
    id: 877,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Feldcroft",
    title: "Cursed Tomb Treasure",
    location: "Poidsear Coast / Tomb of Treachery",
    length: "medium",
    difficulty: "High",
    reward: "Rare gear",
    summary:
      "Follow a treasure map to the Tomb of Treachery, where an ambush by Ailsa Travers and the Lord of the Manor awaits.",
    aiTip:
      "A tough double ambush — go in over-levelled and keep your dodge ready.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Cursed%20Tomb%20Treasure%20walkthrough"
  },
  {
    id: 878,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Phoenix Rising",
    location: "Poidsear Coast / Phoenix Den",
    length: "medium",
    difficulty: "Medium",
    reward: "The Phoenix beast",
    summary:
      "Help Deek rescue a majestic phoenix hidden in a mountain cave from the poachers hunting it.",
    aiTip:
      "Clear the poacher camp first, then Nab-Sack the phoenix for your vivarium.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Phoenix%20Rising%20walkthrough"
  },
  {
    id: 879,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "The Lord of the Manor",
    location: "Manor Cape / Manor Glen",
    length: "medium",
    difficulty: "High",
    reward: "Gear, Infamous Foe kill",
    summary:
      "Descend into Manor Glen to face the Lord of the Manor, an Infamous Foe, and his accomplice Ailsa Travers.",
    aiTip:
      "An Infamous Foe fight — pack potions and target the Lord's guard breaks.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Lord%20of%20the%20Manor%20walkthrough"
  },
  {
    id: 880,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "E is for Erised",
    location: "Cragcroftshire",
    length: "medium",
    difficulty: "Medium",
    reward: "Gold, gear",
    summary:
      "Help a troubled villager whose obsession echoes the Mirror of Erised's dangerous pull on the heart's desire.",
    aiTip:
      "A shorter narrative quest — follow the marked leads around Cragcroftshire.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20E%20is%20for%20Erised%20walkthrough"
  },
  {
    id: 881,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Venomous Valour",
    location: "Astronomy Wing / DADA Tower",
    length: "medium",
    difficulty: "Medium",
    reward: "Gear, talent practice",
    summary:
      "Prove yourself to the boastful Duncan Hobhouse by clearing out a dangerous nest he's too afraid to face.",
    aiTip:
      "Bring solid AoE — the den throws several foes at you at once.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Venomous%20Valour%20walkthrough"
  },
  {
    id: 882,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Like a Moth to a Frame",
    location: "Hogwarts Castle",
    length: "medium",
    difficulty: "Low",
    reward: "Portrait lore, cosmetic",
    summary:
      "Aid the vain portrait subject Nellie Oggspire, who wants her likeness admired across the castle's frames.",
    aiTip:
      "A light, exploration-focused quest around the castle corridors.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Like%20a%20Moth%20to%20a%20Frame%20walkthrough"
  },
  {
    id: 883,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Portrait in a Pickle",
    location: "Library Annex",
    length: "medium",
    difficulty: "Low",
    reward: "Gold, gear",
    summary:
      "Free a portrait trapped behind the Library Annex and untangle the mischief that got it stuck.",
    aiTip:
      "Speak to the portrait at the back of the Annex to begin; simple puzzle-solving.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Portrait%20in%20a%20Pickle%20walkthrough"
  },
  {
    id: 884,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "Follow the Butterflies",
    location: "Hogsmeade / Highlands",
    length: "medium",
    difficulty: "Low",
    reward: "Collection Chest, gear",
    summary:
      "Trail Clementine Willardsey's enchanted wildflower butterflies to a hidden treasure.",
    aiTip:
      "Cast Lumos and keep pace with the butterflies — they lead straight to the cache.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Follow%20the%20Butterflies%20walkthrough"
  },
  {
    id: 885,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "Take the Biscuit",
    location: "Hogsmeade",
    length: "medium",
    difficulty: "Low",
    reward: "Gold, gear",
    summary:
      "Settle a curious dispute over a batch of enchanted biscuits for a Hogsmeade local.",
    aiTip:
      "A quick, low-stakes fetch-and-talk quest.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Take%20the%20Biscuit%20walkthrough"
  },
  {
    id: 886,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "The Plight of the House-Elf",
    location: "Hogwarts / Room of Requirement",
    length: "medium",
    difficulty: "Medium",
    reward: "Deek's story, gear",
    summary:
      "Help the house-elf Deek confront the cruelty of a house-elf's servitude under a pure-blood master.",
    aiTip:
      "Unlocks after Astronomy Class and The High Keep; ties into Deek's beast-rescue arc.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Plight%20of%20the%20House-Elf%20walkthrough"
  },
  {
    id: 887,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "Flight Test",
    location: "Hogsmeade",
    length: "medium",
    difficulty: "Low",
    reward: "Broom upgrade",
    summary:
      "Take on Everett Clopton's daredevil broom-flying test through a course of rings.",
    aiTip:
      "Available after Flying Class; boost through every ring without missing one.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Flight%20Test%20walkthrough"
  },
  {
    id: 888,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Sweeping the Competition",
    location: "Highlands / Broom Race",
    length: "medium",
    difficulty: "Medium",
    reward: "Broom upgrade",
    summary:
      "Beat rival flier Imelda Reyes in a high-speed broom race across the Highlands.",
    aiTip:
      "Requires Percival Rackham's Trial; chain speed boosts and cut the corners tight.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Sweeping%20the%20Competition%20walkthrough"
  },
  {
    id: 889,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Tangled Web",
    location: "Highlands / Spider Lair",
    length: "medium",
    difficulty: "Medium",
    reward: "Gear, gold",
    summary:
      "Clear out a nest of Venomous Tentacula and giant spiders threatening a local's livelihood.",
    aiTip:
      "Fire spells (Incendio/Confringo) shred spiders — keep moving to avoid webbing.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Tangled%20Web%20walkthrough"
  },
  {
    id: 890,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Absconder",
    location: "Forbidden Forest / Absconder Den",
    length: "medium",
    difficulty: "High",
    reward: "Rare gear, Infamous Foe kill",
    summary:
      "Track and defeat the Absconder, a colossal Infamous Foe lurking in a hidden den.",
    aiTip:
      "A boss-tier creature — bring Maxima potions and dodge its charge.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Absconder%20walkthrough"
  },
  {
    id: 891,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "The Hunt for the Missing Pages",
    location: "Hogwarts Castle",
    length: "medium",
    difficulty: "Low",
    reward: "Field Guide Pages",
    summary:
      "Recover a set of stolen Field Guide pages that have gone missing around the castle.",
    aiTip:
      "Uses Revelio liberally — the pages hide in plain sight along the corridors.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Hunt%20for%20the%20Missing%20Pages%20walkthrough"
  },
  {
    id: 892,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "Dissending for Sweets",
    location: "Hogsmeade / Honeydukes",
    length: "medium",
    difficulty: "Low",
    reward: "Gold, gear",
    summary:
      "Help Garreth Weasley sneak into the Honeydukes cellar to retrieve ingredients for his experiments.",
    aiTip:
      "Disillusionment gets you past the shopkeeper; grab the crates and slip out.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Dissending%20for%20Sweets%20walkthrough"
  },
  {
    id: 893,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "A Demanding Delivery",
    location: "Hogsmeade",
    length: "medium",
    difficulty: "Low",
    reward: "Gold",
    summary:
      "Make good on a delivery for a pushy Hogsmeade shopkeeper before their patience runs out.",
    aiTip:
      "A short courier quest — follow the marker and hand over the goods.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20A%20Demanding%20Delivery%20walkthrough"
  },
  {
    id: 894,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Kidnapped Cabbage",
    location: "Highlands",
    length: "medium",
    difficulty: "Low",
    reward: "Combat plant, gold",
    summary:
      "Rescue a prized (and very loud) Chinese Chomping Cabbage that poachers have made off with.",
    aiTip:
      "Combat plant reward — handy for the Herbology assignments.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Kidnapped%20Cabbage%20walkthrough"
  },
  {
    id: 895,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Feldcroft",
    title: "In the Shadow of Hope (Sebastian)",
    location: "Feldcroft / Catacombs",
    length: "medium",
    difficulty: "Medium",
    reward: "Sebastian relationship",
    summary:
      "Chase a fragile hope for curing Anne's curse as Sebastian's search leads deeper into dark magic.",
    aiTip:
      "Weigh how far you'll indulge Sebastian — it shapes the arc's grim ending.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20In%20the%20Shadow%20of%20Hope%20(Sebastian)%20walkthrough"
  },
  {
    id: 896,
    type: "side",
    category: "Relationship",
    game: "Hogwarts Legacy",
    region: "Feldcroft",
    title: "In the Shadow of Friendship (Sebastian)",
    location: "Feldcroft Region",
    length: "medium",
    difficulty: "Medium",
    reward: "Sebastian relationship",
    summary:
      "Your loyalty to Sebastian is tested as the cost of his choices comes due for those around him.",
    aiTip:
      "A late beat in Sebastian's story — best done after In the Shadow of Fate.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20In%20the%20Shadow%20of%20Friendship%20(Sebastian)%20walkthrough"
  },
  {
    id: 897,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "The Unique Unicorn",
    location: "Hogwarts Valley / Unicorn Den",
    length: "medium",
    difficulty: "Low",
    reward: "The Unicorn beast",
    summary:
      "Help a kind witch rescue a unicorn and its foal from poachers and settle them safely in a sanctuary.",
    aiTip:
      "Approach unicorns slowly and cast Nab-Sack — no combat needed with the animals themselves.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20The%20Unique%20Unicorn%20walkthrough"
  },
  {
    id: 898,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "Ollivander's Heirloom",
    location: "Hogsmeade / Ollivanders",
    length: "medium",
    difficulty: "Medium",
    reward: "Gear, Ravenclaw lore",
    summary:
      "Ravenclaw house quest — help Mr. Ollivander recover a treasured wandmaking heirloom lost to thieves.",
    aiTip:
      "Ravenclaw-exclusive; expect a short dungeon dive and a puzzle to reclaim the heirloom.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Ollivander's%20Heirloom%20walkthrough"
  },
  {
    id: 899,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "Scrope's Last Hope",
    location: "Hogsmeade / Gaunt connections",
    length: "medium",
    difficulty: "Medium",
    reward: "Gear, Slytherin lore",
    summary:
      "Slytherin house quest — aid the loyal house-elf Scrope in fulfilling his late master's final wish.",
    aiTip:
      "Slytherin-exclusive; a story-driven quest with a poignant finish.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Scrope's%20Last%20Hope%20walkthrough"
  },
  {
    id: 900,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Interior Decorating",
    location: "Room of Requirement",
    length: "medium",
    difficulty: "Low",
    reward: "Conjuration recipes",
    summary:
      "Help decorate the Room of Requirement to a fellow student's exacting taste using Conjuration.",
    aiTip:
      "Unlock Conjurations first from Deek; place the requested items to satisfy the brief.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Interior%20Decorating%20walkthrough"
  },
  {
    id: 901,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogsmeade",
    title: "Spot Removal",
    location: "Hogsmeade",
    length: "medium",
    difficulty: "Low",
    reward: "Gold, gear",
    summary:
      "Gather Bubotuber pus to help a mortified student clear up a nasty magical breakout of spots.",
    aiTip:
      "Squeeze Bubotubers in the Herbology greenhouses or buy pus from the Magic Neep.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Spot%20Removal%20walkthrough"
  },
  {
    id: 902,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "A Friend in Deed",
    location: "Hogwarts Castle",
    length: "medium",
    difficulty: "Low",
    reward: "Gold, gear",
    summary:
      "Lend a hand to a fellow student caught in a bind and repay a small debt of friendship.",
    aiTip:
      "A short, low-stakes favour quest around the castle.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20A%20Friend%20in%20Deed%20walkthrough"
  },
  {
    id: 903,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "Gobs of Gobstones",
    location: "Hogwarts Castle",
    length: "medium",
    difficulty: "Low",
    reward: "Gobstones set, gear",
    summary:
      "Track down six lost Gobstones scattered around the castle for the keen collector Zenobia Noke.",
    aiTip:
      "Use Revelio near statues and alcoves — the Gobstones glow when highlighted.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Gobs%20of%20Gobstones%20walkthrough"
  },
  {
    id: 904,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Feldcroft",
    title: "A Thief in the Night",
    location: "Feldcroft / Irondale",
    length: "medium",
    difficulty: "Low",
    reward: "Gold, gear",
    summary:
      "Help Padraic Haggarty catch the sneaky Niffler pilfering coins by following its trail through the night.",
    aiTip:
      "Follow the trail of dropped coins with Revelio, then Nab-Sack the Niffler.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20A%20Thief%20in%20the%20Night%20walkthrough"
  },
  {
    id: 905,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Breaking Camp",
    location: "Highlands / Goblin Camps",
    length: "medium",
    difficulty: "Medium",
    reward: "Gold, gear",
    summary:
      "Answer Claire's plea and clear out the goblin camps menacing travellers across the Highlands.",
    aiTip:
      "Bring crowd control — the camps throw Ranrok loyalists and Ashwinders at you.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Breaking%20Camp%20walkthrough"
  },
  {
    id: 906,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Hogwarts",
    title: "All's Well That Ends Bell",
    location: "Hogwarts / Bell Tower Courtyard",
    length: "medium",
    difficulty: "Low",
    reward: "Gear, castle lore",
    summary:
      "Solve the enchanted Owl Bell Tower puzzle to lay a restless matter to rest at Hogwarts.",
    aiTip:
      "Ring the bells in the order the owl statues indicate to complete the puzzle.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20All's%20Well%20That%20Ends%20Bell%20walkthrough"
  },
  {
    id: 907,
    type: "main",
    category: "Main Story",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "In the Shadow of the Mine",
    location: "Goblin Mine / Feldcroft",
    length: "medium",
    difficulty: "Medium",
    reward: "Ranrok arc progress, gear",
    summary:
      "Descend into a goblin mine with the translated manuscript to uncover Ranrok's loyalists at work — a key step in the Stop Ranrok and Rookwood arc.",
    aiTip:
      "Follows It's All Gobbledegook; bring light for the dark shafts and expect loyalist ambushes.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20In%20the%20Shadow%20of%20the%20Mine%20walkthrough"
  },
  {
    id: 908,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Brother's Keeper",
    location: "Upper Hogsfield",
    length: "medium",
    difficulty: "Medium",
    reward: "Gold, gear",
    summary:
      "Help a troubled resident of Upper Hogsfield lay a painful family matter — and a brother's fate — to rest.",
    aiTip:
      "Unlocks on your first visit to Upper Hogsfield, just northeast of Hogsmeade.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Brother's%20Keeper%20walkthrough"
  },
  {
    id: 909,
    type: "side",
    category: "Side Quest",
    game: "Hogwarts Legacy",
    region: "Highlands",
    title: "Troll Control",
    location: "Brocburrow",
    length: "medium",
    difficulty: "Medium",
    reward: "Gold, gear",
    summary:
      "Defend the village of Brocburrow when a rampaging mountain troll comes crashing through.",
    aiTip:
      "Reachable once you have a broom; dodge the troll's slams and counter with heavy spells.",
    video: "https://www.youtube.com/results?search_query=Hogwarts%20Legacy%20Troll%20Control%20walkthrough"
  }
];
