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
  "Final Fantasy VII Remake": {
    gradient: "linear-gradient(135deg, #05140d 0%, #0f766e 50%, #34d399 100%)",
    abbr: "FF7RE",
    cover: "images/ff7-remake-cover.webp"
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
  "Ghost of Yotei": {
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #7c1111 50%, #e84040 100%)",
    abbr: "GOY",
    cover: "images/ghost-of-yotei-cover.jpg"
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
  "Baldur's Gate 3": [
    {
      field: "category",
      label: "Category",
      options: [
        { value: "Main Story", text: "Main Story" },
        { value: "Companion", text: "Companion" },
        { value: "Side Quest", text: "Side Quests" }
      ]
    },
    {
      field: "act",
      label: "Act",
      options: [
        { value: "1", text: "Act 1 – Wilderness & Underdark" },
        { value: "2", text: "Act 2 – Shadow-Cursed Lands" },
        { value: "3", text: "Act 3 – Baldur's Gate" }
      ]
    }
  ],
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
      { value: "Kaer Morhen", text: "Kaer Morhen" },
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
      { value: "Dogtown", text: "Dogtown (Phantom Liberty)" },
      { value: "Multiple", text: "City-Wide" }
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
  "Final Fantasy VII Remake": {
    field: "region",
    label: "Area",
    options: [
      { value: "Sector 7 Slums", text: "Sector 7 Slums" },
      { value: "Sector 5 Slums", text: "Sector 5 Slums" },
      { value: "Wall Market", text: "Wall Market" },
      { value: "Reactors & Upper Plate", text: "Reactors & Upper Plate" },
      { value: "Sewers & Graveyard", text: "Sewers & Train Graveyard" },
      { value: "Shinra HQ & Midgar", text: "Shinra HQ & Midgar" },
      { value: "Intermission", text: "The Intermission (DLC)" }
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
  "Ghost of Tsushima": [
    {
      field: "category",
      label: "Category",
      options: [
        { value: "Jin's Journey", text: "Jin's Journey" },
        { value: "Tales of Tsushima", text: "Tales of Tsushima" },
        { value: "Mythic Tales", text: "Mythic Tales" },
        { value: "Tales of Iki", text: "Tales of Iki" },
        { value: "Exploration", text: "Exploration" }
      ]
    },
    {
      field: "region",
      label: "Region",
      options: [
        { value: "Izuhara", text: "Izuhara" },
        { value: "Toyotama", text: "Toyotama" },
        { value: "Kamiagata", text: "Kamiagata" },
        { value: "Iki Island", text: "Iki Island (DLC)" }
      ]
    }
  ],
  "Ghost of Yotei": [
    {
      field: "category",
      label: "Category",
      options: [
        { value: "Atsu's Journey", text: "Atsu's Journey" },
        { value: "Mythic Tales", text: "Mythic Tales" },
        { value: "Sensei Tales", text: "Sensei Tales" },
        { value: "Side Tales", text: "Side Tales" },
        { value: "Bounties", text: "Bounties" },
        { value: "Post-Game", text: "Post-Game" }
      ]
    },
    {
      field: "region",
      label: "Region",
      options: [
        { value: "Yotei Grasslands", text: "Yōtei Grasslands" },
        { value: "Tokachi Range", text: "Tokachi Range" },
        { value: "Teshio Ridge", text: "Teshio Ridge" },
        { value: "Ishikari Plain", text: "Ishikari Plain" },
        { value: "Nayoro Wilds", text: "Nayoro Wilds" },
        { value: "Oshima Coast", text: "Oshima Coast" },
        { value: "Multiple", text: "Multiple Regions" }
      ]
    }
  ],
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
  },
  "Persona 5 Royal": {
    field: "category",
    label: "Category",
    options: [
      { value: "Palaces", text: "Palaces" },
      { value: "Confidants", text: "Confidants" },
      { value: "Mementos Requests", text: "Mementos Requests" },
      { value: "Activities", text: "Activities" }
    ]
  }
};

const quests = [
  {
    id: 1,
    type: "side",
    category: "Side Quest",
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
    category: "Main Story",
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
    category: "Side Quest",
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
    category: "Mementos Requests",
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
    category: "Mementos Requests",
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
    category: "Mementos Requests",
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
    category: "Mythic Tales",
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
    category: "Mythic Tales",
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
    category: "Jin's Journey",
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
    walkthrough: [
      "Recruit Durance near Magran's Fork on the road to Gilded Vale early in Act 1.",
      "Speak with him at every campfire rest to trigger his story dialogue.",
      "Advance the main story between rests, since his triggers are tied to milestones.",
      "Pursue his questions about Magran and the Saint's War to unlock deeper revelations.",
      "Reach his final confrontation dialogue to resolve his fate and the truth about the gods."
    ],
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
    walkthrough: [
      "Travel to Cliaban Rilag via Stormwall Gorge in Act 2.",
      "Bring crowd control and area damage, and ready casters — the spirits resist physical attacks.",
      "Work through the flooded temple, solving its Engwithan mechanisms and clearing side rooms.",
      "Defeat the guardian spirits and constructs in the depths.",
      "Claim the ruin's secrets and loot about the civilization that made the gods."
    ],
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
    walkthrough: [
      "Enter the Endless Paths of Od Nua beneath Caed Nua after claiming the stronghold.",
      "Descend a few levels at a time, returning to rest and resupply between them.",
      "Push through the escalating encounters down all fifteen levels.",
      "At the bottom, face the Adra Dragon — or talk it down with high Resolve and Lore.",
      "Resolve the dragon to complete the mega-dungeon and claim its rewards."
    ],
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
    category: "Side Quest",
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
    category: "Side Quest",
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
    category: "Side Quest",
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
    category: "Side Quest",
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
    category: "Side Quest",
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
    video: "https://www.youtube.com/watch?v=pDgBBzhZhEE"
  },
  {
    id: 93,
    type: "side",
    game: "God of War Ragnarök",
    region: "Svartalfheim",
    title: "The Spirit of Rebellion",
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
    id: 97,
    type: "side",
    category: "Confidants",
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
    category: "Mementos Requests",
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
    category: "Mythic Tales",
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
    category: "Mythic Tales",
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
    category: "Jin's Journey",
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
    category: "Mythic Tales",
    game: "Ghost of Tsushima",
    region: "Iki Island",
    title: "The Legend of Black Hand Riku",
    location: "Iki Island",
    length: "long",
    difficulty: "High",
    reward: "Kensei armor dye, Mythic reward",
    summary:
      "Hunt down the legend of Black Hand Riku, a fearsome raider whose ghost still haunts Iki Island.",
    aiTip:
      "An Iki Mythic Tale — follow the musician's song to the trail, then master the duel at the end.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Legend%20of%20Black%20Hand%20Riku%20walkthrough"
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
    walkthrough: [
      "In Defiance Bay, meet the three factions: the Dozens, the Crucible Knights, and the Doemenels.",
      "Take a starter quest from each to gauge their rewards and tone.",
      "Commit to one faction, knowing it locks out the others' questlines.",
      "Complete your faction's tasks — Crucible Knights for gear, Dozens for story content.",
      "Build your faction's standing ahead of the Act 2 faction war."
    ],
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
    walkthrough: [
      "Travel to the sanitarium in Brackenbury and gain entry to investigate the animancers.",
      "Read every patient record — they hint at which ward to investigate.",
      "Explore the wards and question the staff about the soul experiments.",
      "Decide how far the animancy should go; your choice affects the later hearing.",
      "Resolve the confrontation to close out the quest."
    ],
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
    category: "Companion",
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
    category: "Companion",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Companion: Shadowheart — Daughter of Darkness",
    location: "Gauntlet of Shar / Baldur's Gate",
    length: "long",
    difficulty: "High",
    reward: "Shadowheart loyalty, powerful cleric abilities, story resolution",
    summary:
      "Uncover the truth about Shadowheart's hidden memories and her devotion to the goddess Shar. The questline culminates in a heart-wrenching choice at the Gauntlet of Shar that defines her character for the rest of the game.",
    aiTip:
      "Build approval with Shadowheart throughout the game before reaching the Gauntlet. The final choice has no objectively correct answer — consider what kind of ending you want for her.",
    walkthrough: [
      "Keep Shadowheart in your party and complete the Gauntlet of Shar to reach the Nightsong.",
      "At the Nightsong, choose whether Shadowheart obeys Shar and kills her, or spares her.",
      "In Act 3, travel to the Shadowfold Temple / House of Grief in the Lower City.",
      "Confront Mother Superior Viconia and the Sharran clergy.",
      "Support Shadowheart's decision to reject or embrace Shar.",
      "Resolve her parents' fate to complete her arc and lock in her ending."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Shadowheart%20%E2%80%94%20Daughter%20of%20Darkness%20walkthrough"
  },
  {
    id: 114,
    type: "side",
    category: "Side Quest",
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
    category: "Side Quest",
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
    category: "Side Quest",
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
    category: "Companion",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Companion: Gale — The Wizard of Waterdeep",
    location: "Blackstaff Tower / Waterdeep",
    length: "long",
    difficulty: "Medium",
    reward: "Gale companion resolution, unique ending option",
    summary:
      "Follow Gale the wizard's questline as he struggles with a magical orb embedded in his chest that threatens to consume him. His story builds to an explosive climax with consequences for the entire city of Baldur's Gate.",
    aiTip:
      "Feed Gale magical items regularly to keep him stable. His questline has one of the most dramatic endings in the game — both the heroic and selfish paths are worth experiencing.",
    walkthrough: [
      "Talk to Gale early and let him feed magical items to his Netherese orb when it flares.",
      "Progress his story to learn about Mystra, Elminster's letter, and the orb's true purpose.",
      "In Act 3, pursue the Crown of Karsus questline beneath the city.",
      "Decide whether Gale seeks godhood or renounces the Crown.",
      "Guide his choice at the Elder Brain confrontation (detonate the orb or not).",
      "His ending follows the path you steered him toward."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Gale%20%E2%80%94%20The%20Wizard%20of%20Waterdeep%20walkthrough"
  },
  {
    id: 118,
    type: "side",
    category: "Companion",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Companion: Wyll — The Blade of Frontiers",
    location: "Various / Act 3",
    length: "long",
    difficulty: "Medium",
    reward: "Wyll companion resolution, pact broken or maintained",
    summary:
      "Help Wyll the Blade of Frontiers uncover the truth about his infernal pact with the devil Mizora. The quest spans all three acts and forces a confrontation with his father, the Grand Duke of Baldur's Gate.",
    aiTip:
      "Rescuing the Grand Duke early affects Wyll's storyline. Breaking his pact requires sacrifice — consider the cost before choosing.",
    walkthrough: [
      "Recruit Wyll and learn of his pact with the devil Mizora.",
      "In Act 2, when Mizora is captured at Moonrise, decide whether to free her.",
      "This choice affects Wyll's pact and his father Duke Ravengard.",
      "In Act 3, rescue Duke Ravengard from the Iron Throne and Bhaal's cult.",
      "Help Wyll confront Mizora and choose to keep, renegotiate, or break the pact.",
      "His fate as the Blade of Avernus or a free man depends on these choices."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Wyll%20%E2%80%94%20The%20Blade%20of%20Frontiers%20walkthrough"
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
    walkthrough: [
      "Descend to the lower tier of the Nexus and speak with Stockpile Thomas, the large man seated near the archstones.",
      "Use his storage service to deposit excess weapons, armor, and consumables — your carry weight and inventory space are limited.",
      "Return and talk to him again after each major boss (archdemon) kill to advance his dialogue.",
      "Keep checking in across your playthrough to hear his search for his family unfold.",
      "Continue the conversations to their end to reach the questline's somber conclusion."
    ],
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
    walkthrough: [
      "Reach the Tower of Latria (3-2) and find Yurt locked in a hanging cage suspended over the walkway.",
      "Free him only if you intend to farm the Gloom armor route — otherwise leave the cage shut and move on.",
      "If freed, Yurt travels to the Nexus and murders one named NPC each time you defeat an archdemon.",
      "To protect the Nexus merchants and questline NPCs, kill Yurt on sight the moment he appears there.",
      "Cutting him down in the Nexus rewards the full Gloom Set.",
      "Advanced: his killings serve Mephistopheles — only accept her contracts at Pure Black world tendency if you deliberately want that path."
    ],
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
    video: "https://www.youtube.com/watch?v=qyrF3EJMKZA"
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
    walkthrough: [
      "Progress the main story until control switches to Atreus for his solo sections — these trigger automatically at set story beats.",
      "During Atreus's chapters, favour stealth and his bow puzzles over head-on fights; use Sonic Arrows to reveal and activate mechanisms.",
      "Explore fully while playing as Atreus — his sections gate unique lore and dialogue you can't revisit later as Kratos.",
      "Follow the objective markers through each realm segment, completing the environmental puzzles that block your path.",
      "Reach the end of his questline to unlock the story context that sets up the game's final act."
    ],
    video: "https://www.youtube.com/watch?v=U3InCcqtpNs"
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
    walkthrough: [
      "Watch for glowing Lore Marker collectibles as you explore each realm — they sit on stones, tablets, and ruins.",
      "Interact with a Lore Marker to trigger Mimir's narrated story, then let the dialogue finish before moving on.",
      "Search side paths, dead ends, and optional rooms — many markers are deliberately off the critical path.",
      "Use the realm-completion menu to see how many lore items remain in each region and revisit areas you've missed.",
      "Collect every Lore Marker across the Nine Realms to complete the set and its associated Labour progress."
    ],
    video: "https://www.youtube.com/watch?v=pIbXqpQmuIg"
  },
  {
    id: 166,
    type: "side",
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Mementos Requests",
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
    category: "Mythic Tales",
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
    category: "Mythic Tales",
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
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "Three Actions, Three Illusions",
    location: "Toyotama",
    length: "medium",
    difficulty: "Medium",
    reward: "Norio tale progress",
    summary:
      "Continue with Norio as he confronts the illusions of vengeance while liberating the faithful.",
    aiTip:
      "Norio Tale 2 of 9.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Three%20Actions%2C%20Three%20Illusions%20walkthrough"
  },
  {
    id: 176,
    type: "main",
    category: "Jin's Journey",
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
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "Nattou and the Sake Seller",
    location: "Toyotama",
    length: "medium",
    difficulty: "Low",
    reward: "Kenji tale progress",
    summary:
      "Help Kenji chase a rival sake seller and a batch of stolen nattou across Toyotama.",
    aiTip:
      "Kenji Tale 2 of 3.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Nattou%20and%20the%20Sake%20Seller%20walkthrough"
  },
  {
    id: 178,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Silent Death",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Yuna tale progress",
    summary:
      "Help Yuna deal ruthlessly with the Mongols hunting her, learning how far she'll go to survive.",
    aiTip:
      "Yuna Tale 2 of 4 — stealth and assassination fit her style.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Silent%20Death%20walkthrough"
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
    walkthrough: [
      "Travel to Esternwood near the stronghold in Act 2 to find the bandits.",
      "Negotiate first — the deposed noble's demands can be met diplomatically.",
      "If talks fail, prepare for a difficult multi-wave battle instead.",
      "Choose an outcome that improves your Stronghold's ties with local settlers.",
      "Report back to close the quest and secure the reward."
    ],
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
    walkthrough: [
      "Take the quest from Wael's followers in Copperlane to recover the stolen holy text.",
      "Track down the thief and retrieve the book.",
      "Read the text before deciding — it unlocks extra dialogue options.",
      "Use Lore and Insight checks to reach the hidden 'best' outcome.",
      "Choose truth or comfortable deception, then return the text (or don't)."
    ],
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
    walkthrough: [
      "In Dyrford Village, hear that a young boy has gone missing.",
      "Ask the reluctant adults and search the village outskirts for clues.",
      "Follow the trail to find the child early in your Dyrford visit.",
      "Speak with the boy for the quest's touching dialogue.",
      "Return to collect the minor reward and close the quest."
    ],
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
    walkthrough: [
      "Accept the merchant's request to recover a stolen egg, then head to Elmshore.",
      "Track the bandits to their camp in the wilderness.",
      "Use a high-Intimidate character to make them hand the egg over without a fight.",
      "Otherwise clear the hard camp encounter, and loot Elmshore's rare crafting ingredients.",
      "Return the egg to the merchant for the reward."
    ],
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
    walkthrough: [
      "Meet the desperate mother in Defiance Bay and take the search for her son.",
      "Investigate the criminal gang's ties fully before confronting anyone.",
      "Gather complete information — partial leads give a worse outcome.",
      "Make the moral choice about the son's redemption.",
      "Resolve it, noting the effect on Copperlane faction reputation."
    ],
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
    walkthrough: [
      "In Ondra's Gift, learn of the brewing gang war between the Doemenels and a rival.",
      "Choose which faction to back in the conflict.",
      "Commit fully to your side — half-measures trigger a difficult three-way battle.",
      "Win the confrontation for your chosen faction.",
      "Claim the reward (best gear if you side with the Doemenels) and shift the balance of power."
    ],
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
    walkthrough: [
      "In Copperlane, take up the case of the missing Glanfathan noble.",
      "Follow the investigation from the city streets toward Twin Elms.",
      "Weigh the diplomatic consequences of each choice carefully.",
      "Uncover the noble's fate — this quest gates access to Twin Elms and Act 3.",
      "Resolve it to open the path into the game's final act."
    ],
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
    category: "Main Story",
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
    category: "Main Story",
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
    category: "Side Quest",
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
    category: "Main Story",
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
    category: "Main Story",
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
    category: "Main Story",
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
    category: "Main Story",
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
    category: "Main Story",
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
    category: "Main Story",
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
    category: "Side Quest",
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
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Find the Blood of Lathander",
    location: "Rosymorn Monastery / Mountain Pass",
    length: "medium",
    difficulty: "Medium",
    reward: "Blood of Lathander legendary mace",
    summary:
      "Solve the stained-glass ritual puzzle in Rosymorn Monastery and disarm an ancient trap to claim one of the game's earliest legendary weapons — a mace that blinds fiends and undead.",
    aiTip:
      "Place the correct weapons on the altar (check the window mural) to open the vault. Bring Misty Step to bypass the destroying-beam trap on the way out.",
    walkthrough: [
      "Reach Crèche Y'llek via the Mountain Pass.",
      "Find the Rosymorn Monastery Trail and climb to the abandoned monastery above.",
      "Collect the three ceremonial weapons (mace, staff, greatsword) from the monastery.",
      "Place each weapon on the correct statue to open the inner sanctum.",
      "Solve the dawnmaster's puzzle by rotating the mirrors to bathe the altar in light.",
      "Claim the Blood of Lathander legendary mace before the trap triggers."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20the%20Blood%20of%20Lathander%20walkthrough"
  },
  {
    id: 234,
    type: "side",
    category: "Side Quest",
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
    category: "Side Quest",
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
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Help Kith'rak Voss",
    location: "Wyrm's Crossing / Camp",
    length: "medium",
    difficulty: "Medium",
    reward: "Githyanki ally; ties into the Astral Prism",
    summary:
      "The githyanki commander Kith'rak Voss, now a traitor to Vlaakith, visits your camp seeking aid to free a prisoner held within the Astral Prism. Hear out a gith's rebellion and decide whether to help.",
    aiTip:
      "Voss appears after you confront Vlaakith during Lae'zel's questline ('The Githyanki Warrior'). Keeping him alive earlier in Act 2 is required for him to return here.",
    walkthrough: [
      "Encounter the githyanki knight Voss at Crèche Y'llek or later in the Shadow-Cursed Lands.",
      "Learn he opposes Vlaakith and seeks the Orpheus prism.",
      "In Act 3, meet Voss atop the roof near the Elfsong Tavern.",
      "Help him recover his dragon Ghustil or aid his rebellion against the lich-queen.",
      "Return the Astral Prism knowledge that frees Orpheus.",
      "Voss becomes an ally for the finale if you support his cause."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Help%20Kith'rak%20Voss%20walkthrough"
  },
  {
    id: 237,
    type: "side",
    category: "Side Quest",
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
    region: "Kaer Morhen",
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
    video: "https://www.youtube.com/watch?v=KENiY0BF9bU"
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
    video: "https://www.youtube.com/watch?v=-Ek2YXlKE6s"
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
    video: "https://www.youtube.com/watch?v=LV4K4jelGJA"
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
    video: "https://www.youtube.com/watch?v=dnmnwVnFkhI"
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
    video: "https://www.youtube.com/watch?v=UY7nTA-5wbk"
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
    video: "https://www.youtube.com/watch?v=VDR434Xe3TM"
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
    video: "https://www.youtube.com/watch?v=Pq0Y2xWFJd4"
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
    video: "https://www.youtube.com/watch?v=1a24wErDJ1c"
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
    video: "https://www.youtube.com/watch?v=wIaaNVKjNQk"
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
    video: "https://www.youtube.com/watch?v=_m5u6Iam1bI"
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
    video: "https://www.youtube.com/watch?v=52sv4ld-cFQ"
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
    video: "https://www.youtube.com/watch?v=QPY1levBDik"
  },
  {
    id: 422,
    type: "side",
    game: "God of War Ragnarök",
    region: "Svartalfheim",
    title: "In Service to Asgard",
    location: "Svartalfheim",
    length: "short",
    difficulty: "Low",
    reward: "Aurvangar Wetlands cleared, gear",
    summary:
      "Clear the Aesir raiders and machines fouling the Aurvangar Wetlands for the dwarves.",
    aiTip:
      "A good early favor to learn Svartalfheim traversal and grab Hacksilver.",
    video: "https://www.youtube.com/watch?v=QR8Sd1C5F54"
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
    video: "https://www.youtube.com/watch?v=_rhlDQ5RbXM"
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
    video: "https://www.youtube.com/watch?v=MNTp3xeYKdo"
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
    video: "https://www.youtube.com/watch?v=A7S9zj3IVP0"
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
    video: "https://www.youtube.com/watch?v=sBspC0sL9Kc"
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
    video: "https://www.youtube.com/watch?v=V7S3fZEN3GU"
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
    video: "https://www.youtube.com/watch?v=KUWc7xb1Ujk"
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
    video: "https://www.youtube.com/watch?v=Q4NGboxarCg"
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
    video: "https://www.youtube.com/watch?v=YP-XMN-3mZM"
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
    video: "https://www.youtube.com/watch?v=yVzY4i0u8Js"
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
    video: "https://www.youtube.com/watch?v=Zz7g-zDynWc"
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
    video: "https://www.youtube.com/watch?v=mSf016We82c"
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
    video: "https://www.youtube.com/watch?v=ndVoVV94wzo"
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
    video: "https://www.youtube.com/watch?v=zdnXYjLbQVI"
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
    video: "https://www.youtube.com/watch?v=D35N8Qr4pf8"
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
    video: "https://www.youtube.com/watch?v=VsAFTz6tecw"
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
    video: "https://www.youtube.com/watch?v=_bIcfkEgUzM"
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
    video: "https://www.youtube.com/watch?v=QzpW4ZyM6oA"
  },
  {
    id: 440,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Fit for a King",
    location: "Multiple realms",
    length: "long",
    difficulty: "High",
    reward: "King Hrólf boss, best-in-slot gear",
    summary:
      "Defeat all the Berserker Souls across the realms to face their king, Hrólf Kraki.",
    aiTip:
      "The toughest optional fights in the game — save Hrólf for endgame with maxed gear.",
    video: "https://www.youtube.com/watch?v=34SHxlFdYFA"
  },
  {
    id: 441,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "The Eyes of Odin",
    location: "All realms",
    length: "medium",
    difficulty: "Low",
    reward: "Raven Keeper reward, gear",
    summary:
      "Hunt down and destroy Odin's spectral ravens hidden across the nine realms.",
    aiTip:
      "Listen for their green glow and cawing — a satisfying realm-spanning collectible favor.",
    video: "https://www.youtube.com/watch?v=DpAyG-bE3BM"
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
    video: "https://www.youtube.com/watch?v=meYAyQiw-lc"
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
    video: "https://www.youtube.com/watch?v=daM1tF5DL90"
  },
  {
    id: 444,
    type: "main",
    category: "Palaces",
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
    category: "Palaces",
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
    category: "Palaces",
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
    category: "Palaces",
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
    category: "Palaces",
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
    category: "Palaces",
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
    category: "Palaces",
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
    category: "Palaces",
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
    category: "Palaces",
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Mementos Requests",
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
    category: "Activities",
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
    category: "Jin's Journey",
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
    category: "Jin's Journey",
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
    category: "Jin's Journey",
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
    category: "Jin's Journey",
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
    category: "Jin's Journey",
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
    category: "Jin's Journey",
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
    category: "Jin's Journey",
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
    category: "Mythic Tales",
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
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Tale of Yuna",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Yuna's trust, charm",
    summary:
      "Begin the thief Yuna's questline as she and Jin search for her captured blacksmith brother, Taka.",
    aiTip:
      "First of Yuna's four tales; unlocks after the early story on Tsushima.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Tale%20of%20Yuna%20walkthrough"
  },
  {
    id: 476,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Sensei and the Student",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Ishikawa tale progress",
    summary:
      "Aid Sensei Ishikawa as he tracks his traitorous former student, the archer Tomoe.",
    aiTip:
      "Ishikawa Tale 2 — a bow-focused tale; keep your Longbow handy.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Sensei%20and%20the%20Student%20walkthrough"
  },
  {
    id: 477,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Headman",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Masako tale progress",
    summary:
      "Join Lady Masako hunting the men who slaughtered Clan Adachi — starting with a village headman.",
    aiTip:
      "First of Masako's revenge tales; expect grim choices.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Headman%20walkthrough"
  },
  {
    id: 478,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Servant of the People",
    location: "Izuhara",
    length: "medium",
    difficulty: "Low",
    reward: "Kenji tale progress",
    summary:
      "Get roped into the sake trader Kenji's schemes as he insists he serves the common folk.",
    aiTip:
      "Kenji Tale 1 of 3 — comic relief with a sting.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Servant%20of%20the%20People%20walkthrough"
  },
  {
    id: 479,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "The Last Warrior Monk",
    location: "Jogaku / Toyotama",
    length: "medium",
    difficulty: "Medium",
    reward: "Norio tale progress",
    summary:
      "Meet the naginata-wielding monk Norio as he fights to reclaim Cedar Temple from the Mongols.",
    aiTip:
      "Norio Tale 1 of 9; the Warrior Monk questline begins here.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Last%20Warrior%20Monk%20walkthrough"
  },
  {
    id: 481,
    type: "side",
    category: "Exploration",
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
    category: "Exploration",
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
    category: "Exploration",
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
    category: "Exploration",
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
    category: "Exploration",
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
    category: "Exploration",
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
    category: "Tales of Iki",
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
    category: "Tales of Iki",
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
    video: "https://www.youtube.com/watch?v=4j81ThxRkWQ"
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
    video: "https://www.youtube.com/watch?v=FQLqJ0qIid4"
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
    video: "https://www.youtube.com/watch?v=IcXEeapcbOA"
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
    video: "https://www.youtube.com/watch?v=jcyG0p2GwHQ"
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
    video: "https://www.youtube.com/watch?v=Xud8fPNrN-c"
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
    video: "https://www.youtube.com/watch?v=uZDZGlnwAms"
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
    video: "https://www.youtube.com/watch?v=WWyPUH35RQU"
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
    video: "https://www.youtube.com/watch?v=QlkMzEO2NgQ"
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
    video: "https://www.youtube.com/watch?v=GrjwUFX970M"
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
    video: "https://www.youtube.com/watch?v=Cg_nMdHsuNo"
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
    video: "https://www.youtube.com/watch?v=hue4Z_G2ttA"
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
    video: "https://www.youtube.com/watch?v=sH99VVGDdUg"
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
    video: "https://www.youtube.com/watch?v=5T4pefO394w"
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
    video: "https://www.youtube.com/watch?v=M2Lh1rCW__I"
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
    video: "https://www.youtube.com/watch?v=8qowtCnPfDw"
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
    video: "https://www.youtube.com/watch?v=-wJ53aZYGCk"
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
    video: "https://www.youtube.com/watch?v=4EVxcKhIWmY"
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
    video: "https://www.youtube.com/watch?v=EOCSuU3tizg"
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
    video: "https://www.youtube.com/watch?v=uJoQQhDUIE4"
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
    video: "https://www.youtube.com/watch?v=lwgsiMEle20"
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
    video: "https://www.youtube.com/watch?v=fIt-643KYRY"
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
    video: "https://www.youtube.com/watch?v=olE0hw0uXz0"
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
    video: "https://www.youtube.com/watch?v=lSZ8-En-TQg"
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
    video: "https://www.youtube.com/watch?v=umJ6S_oQGdw"
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
    video: "https://www.youtube.com/watch?v=XtS7xAM2MaQ"
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
    video: "https://www.youtube.com/watch?v=kwL6GP0y2ZY"
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
video: "https://www.youtube.com/watch?v=HdRArGAruCc",
    walkthrough: [
      "Progress the main story past Percival Rackham's Trial — Ancient Magic Hotspots only appear once you can sense Ancient Magic.",
      "Open the map and look for the swirling Ancient Magic Hotspot icons; there are 20 spread across Hogwarts Valley, the Highlands, Hogsmeade Valley, the Forbidden Forest, the Coast, Feldcroft, Manor Cape, North Ford Bog and Marunweem.",
      "Fast-travel to a hotspot and interact with the glowing pool to begin the challenge.",
      "Cast Revelio to reveal the nearby traces of Ancient Magic, then walk into each glowing trace to absorb it before it fades.",
      "Collect every trace in the area to complete the hotspot and permanently extend your Ancient Magic meter.",
      "Repeat at all 20 hotspots to max out the meter and finish the Exploration challenge."
    ]
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
    video: "https://www.youtube.com/watch?v=aNdqjgJi_9M"
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
    region: "Kaer Morhen",
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
    region: "Kaer Morhen",
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
    region: "Kaer Morhen",
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
    region: "Kaer Morhen",
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
    id: 1057,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Corel",
    title: "Gold Cup or Bust",
    location: "Corel / Gold Saucer",
    length: "medium",
    difficulty: "Medium",
    reward: "Chocoking's Cape (accessory), Tifa relationship boost",
    summary:
      "A Chapter 12 odd job posted by Billy in the Corel region. He asks you to enter and win the Gold Cup chocobo race at the Gold Saucer on his behalf, putting your racing setup and mount to the test.",
    aiTip:
      "Upgrade your chocobo's stats and stock stat-boosting items at the racing shop before entering — the Gold Cup field is fast, so prioritize acceleration and top speed and grab every boost gate.",
    video: "https://www.youtube.com/watch?v=B8oUhHkOKak"
  },
  {
    id: 1058,
    type: "side",
    game: "Final Fantasy VII Rebirth",
    region: "Gongaga",
    title: "Escape from Endless Writer's Block",
    location: "Gongaga Region",
    length: "short",
    difficulty: "Low",
    reward: "Party EXP, relationship points (affects Gold Saucer date)",
    summary:
      "A Chapter 12 odd job for the author Maeve in the Gongaga region. She has run dry on ideas for her children's book, so she asks you to photograph Red XIII in specific poses and locations to spark her inspiration.",
    aiTip:
      "Line up each photo spot and wait for the prompted pose before snapping — the game only accepts the shot when Red XIII strikes the exact expression the objective describes.",
    video: "https://www.youtube.com/watch?v=pIsaVCnmNNo"
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
    video: "https://www.youtube.com/watch?v=kVTnjcYGMPQ"
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
    video: "https://www.youtube.com/watch?v=uSt9ogo2ogA"
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
    video: "https://www.youtube.com/watch?v=NFI3XZoCYZY"
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
    video: "https://www.youtube.com/watch?v=vixWcqUxCTY"
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
    video: "https://www.youtube.com/watch?v=-lhBfKYfoSs"
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
    video: "https://www.youtube.com/watch?v=HXlc5uQSiik"
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
    video: "https://www.youtube.com/watch?v=au3g-1DIEd0"
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
    video: "https://www.youtube.com/watch?v=khYpku49uQc"
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
    video: "https://www.youtube.com/watch?v=9tAXolcuKc8"
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
    video: "https://www.youtube.com/watch?v=oYgN6PXdSIo"
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
    video: "https://www.youtube.com/watch?v=18niu3eyU98"
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
    video: "https://www.youtube.com/watch?v=H7tC-7Dy334"
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
    walkthrough: [
      "Reach the derelict Applecore elevator in the Aurvangar Wetlands of Svartalfheim during or after the main-story visit.",
      "Interact with the elevator controls to learn the mechanism is jammed and needs power restored.",
      "Clear the surrounding enemies and use the Draupnir Spear or Blades of Chaos to activate the sealed vents and gears.",
      "Ride the restored elevator between its upper and lower stops to open the newly reachable sections of the wetlands.",
      "Explore the freshly opened areas to grab the hidden chests and collectibles the elevator now makes accessible."
    ],
    video: "https://www.youtube.com/watch?v=HPe5WhV0LFY"
  },
  {
    id: 664,
    type: "side",
    game: "God of War Ragnarök",
    region: "Svartalfheim",
    title: "The Weight of Chains",
    location: "Svartalfheim",
    length: "medium",
    difficulty: "Medium",
    reward: "Lyngbakr freed, Mimir arc",
    summary:
      "Free the imprisoned sea beast Lyngbakr, chained by Odin, to ease Mimir's old guilt.",
    aiTip:
      "Requires returning with the right tools — a rewarding multi-step favor.",
    video: "https://www.youtube.com/watch?v=oInYLT78d8M"
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Confidants",
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
    category: "Mementos Requests",
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
    category: "Mementos Requests",
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
    category: "Mementos Requests",
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
    category: "Mementos Requests",
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
    category: "Activities",
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
    category: "Activities",
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
    category: "Confidants",
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
    category: "Jin's Journey",
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
    category: "Jin's Journey",
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
    category: "Jin's Journey",
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
    category: "Jin's Journey",
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
    category: "Jin's Journey",
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
    category: "Jin's Journey",
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
    category: "Jin's Journey",
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
    category: "Jin's Journey",
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
    category: "Tales of Iki",
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
    category: "Tales of Iki",
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
    category: "Exploration",
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
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Past Never Passes",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Ishikawa tale progress",
    summary:
      "Follow Ishikawa deeper into his history with Tomoe as old wounds resurface.",
    aiTip:
      "Part of the Unbending Archer questline; verify against a guide if replaying.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Past%20Never%20Passes%20walkthrough"
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
    video: "https://www.youtube.com/watch?v=C3BYlUF7S4A"
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
    video: "https://www.youtube.com/watch?v=isCGCWNLuJo"
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
    video: "https://www.youtube.com/watch?v=A7EKUPK6-Po"
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
    video: "https://www.youtube.com/watch?v=9MREmSZDN6M"
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
    video: "https://www.youtube.com/watch?v=2ClxjV7kCp8"
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
    video: "https://www.youtube.com/watch?v=p5CTz7oNuDE"
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
    video: "https://www.youtube.com/watch?v=ATRG5YtogNQ"
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
    video: "https://www.youtube.com/watch?v=0PNpg9xizUo"
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
    video: "https://www.youtube.com/watch?v=3HVWihCCfso"
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
video: "https://www.youtube.com/watch?v=pwEwccWkYSQ",
    walkthrough: [
      "Pick up the quest in Hogsmeade and speak with the quest giver to learn about the suspicious Animagus.",
      "Follow the objective marker to the poacher-linked location and investigate the area with Revelio.",
      "Defeat the poachers guarding the site and free any captured beasts with your Nab-Sack.",
      "Confront the Animagus and see the reveal play out through the ensuing conversation and fight.",
      "Loot the nearby chests and claim your reward before leaving."
    ]
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
    video: "https://www.youtube.com/watch?v=S0vvmB-he4A"
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
    video: "https://www.youtube.com/watch?v=SG9_r_upWac"
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
    video: "https://www.youtube.com/watch?v=hKcns2obqjI"
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
    video: "https://www.youtube.com/watch?v=EbPMXlGrKTc"
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
    video: "https://www.youtube.com/watch?v=K5B2B59pLOw"
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
    video: "https://www.youtube.com/watch?v=eXRAvLAlAjs"
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
video: "https://www.youtube.com/watch?v=WOvbWbOswRE",
    walkthrough: [
      "Travel to the marked poacher operation in the Hogwarts Highlands.",
      "Clear out the poachers guarding the camp, using Ancient Magic on the tougher Ashwinders and Loyalists.",
      "Free the trafficked magical beasts held in the cages using your Nab-Sack.",
      "Search the camp and open the collection chest for gear.",
      "Finish clearing the site to complete the quest and secure the poacher intel."
    ]
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
    walkthrough: [
      "After dying in the Boletaria tutorial, watch the opening and wake in the Nexus.",
      "Speak with the Monumental to learn the hub's purpose and unlock the archstones.",
      "Talk to the Maiden in Black to spend accumulated souls and level up.",
      "Use the archstones to travel out to any of the five worlds.",
      "Return to the Nexus between runs to restock, store items with Stockpile Thomas, and level up."
    ],
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
    walkthrough: [
      "From the Gates of Boletaria, cross the outer bridge and clear the courtyard to reach the Phalanx fog gate.",
      "Beat Phalanx with firebombs or a fire weapon, then push up the ramparts toward the Tower Knight.",
      "Clear the archers on the side stairs first, then fight the Tower Knight with lightning resistance and strikes to its legs.",
      "Free the knight Biorr from his locked cell along the route so he can be summoned later.",
      "Defeat the Penetrator (summon Biorr for help) to open the inner keep.",
      "Take the archstone up to the False King's arena to finish the world."
    ],
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
    walkthrough: [
      "Descend from the Smithing Grounds and clear the tunnels to the Armor Spider fog gate.",
      "Apply Turpentine or a fire buff and fight the Armor Spider from range to melt it quickly.",
      "Work down through the mine-cart and lava paths to the Flamelurker.",
      "Beat the Flamelurker by dodging its explosive combos, then open the depths.",
      "At the Dragon God, move between the stone cover so it can't spot you, and reach the two ballistae.",
      "Fire both ballistae to pin its arms, then hit its exposed head to finish the Dragon God."
    ],
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
    walkthrough: [
      "Escape the prison cells, avoiding the Mind Flayers' magic, and reach the walkway to the Fool's Idol.",
      "During the Fool's Idol fight, find and kill the hidden disciple in the room so the Idol can no longer revive.",
      "Cross the swinging bridges and rooftops toward the second archstone.",
      "Bait the twin Maneaters onto the narrow bridge and fight them one at a time.",
      "Continue to the Old Monk — note the fight may summon another player to act as the boss.",
      "Defeat the Old Monk (or the invading phantom) to clear the tower."
    ],
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
    walkthrough: [
      "Climb the storm-lashed cliffs and kill the Reaper first so the skeletons stop reviving.",
      "Enter the crypts and fight the Adjudicator, striking the glowing wound on its belly, then its head when it drops.",
      "Reach the blind Old Hero — move quietly and reposition after each hit, since it tracks by sound.",
      "Pick up the Storm Ruler sword in the arena before the final boss.",
      "At the Storm King, charge the Storm Ruler's heavy attack to loose wind blades that shred the flying Manta swarm.",
      "Keep firing wind blades to bring the Storm King down and complete the world."
    ],
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
    walkthrough: [
      "Descend the shanty scaffolding, carrying plague and poison cures for the swamp below.",
      "Fight the Leechmonger in the pit — use fire to stop it healing and burn it down.",
      "Wade through the poison swamp, sticking to the shallow paths, toward Maiden Astraea's sanctuary.",
      "Cross to the boss area and face Garl Vinland, Astraea's devoted protector.",
      "Either defeat Garl or slip past him and approach Astraea directly.",
      "Choose whether to strike down Maiden Astraea to claim her Demon's Soul — an intentionally somber kill."
    ],
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
    walkthrough: [
      "Complete all five worlds so each Archdemon's soul is collected.",
      "Return to the top of Boletaria and enter the False King Allant's arena — save your game first.",
      "Beat Allant, avoiding his soul-draining grab that permanently lowers your Soul Level.",
      "Head back to the Nexus; the path to the Old One opens once Allant falls.",
      "Walk out to the Old One and approach the Maiden in Black.",
      "Choose your ending: let her lull the Old One back to sleep, or kill her to seize its power."
    ],
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
    walkthrough: [
      "Learn the two meters: World Tendency (per world) and Character Tendency (your own alignment).",
      "Explore in Soul form or as a Blue Phantom to avoid blackening a world by dying in body form.",
      "Push a world toward Pure White by killing its bosses and Black Phantoms without dying in body form.",
      "Push toward Pure Black by dying in body form repeatedly or killing key NPCs, unlocking black-tendency enemies and loot.",
      "Shift Character Tendency white by co-op and aiding others, or black by invasions and killing NPCs.",
      "Plan runs around tendency, since some NPCs, bosses, and rare items only appear at a specific state."
    ],
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
    walkthrough: [
      "Note that Primeval Demons are optional foes that drop Colorless Demon's Souls used for flexible upgrades.",
      "Push the target world to Pure White Tendency, since their spawns depend on it.",
      "Travel to that world's Primeval Demon location and clear the path to it.",
      "Defeat the Primeval Demon to claim its Colorless Demon's Soul.",
      "Take Colorless Souls to Blacksmith Ed or Boldwin to apply special upgrades.",
      "Repeat across worlds at Pure White to gather enough Colorless Souls for your build."
    ],
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
    walkthrough: [
      "In Stonefang Tunnel, find Blacksmith Ed and talk to him so he relocates to the Nexus.",
      "Return to the Nexus and bring Ed the boss (Demon's) souls you want to invest.",
      "Ask Ed to forge unique weapons from specific Demon's Souls.",
      "Save build-defining souls — for example, work the right souls toward the Northern Regalia.",
      "Use Colorless Demon's Souls with Ed to push weapons down their special upgrade paths.",
      "Upgrade deliberately, since boss souls are limited per playthrough."
    ],
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
    walkthrough: [
      "Survive the ambush and biawac storm on the road to Gilded Vale in the prologue.",
      "Awaken as a Watcher who can see past lives.",
      "Follow the tutorial prompts to learn the soul-reading mechanic.",
      "Make your way onward toward Gilded Vale to begin the story."
    ],
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
    walkthrough: [
      "Arrive in Gilded Vale beneath its hanging tree and speak with the townsfolk.",
      "Investigate Lord Raedric's brutal rule and the unrest it has caused.",
      "Decide whether to side with, spare, or depose Raedric at his hold.",
      "Carry out your chosen path through Raedric's Hold, each giving different rewards and allies."
    ],
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
    walkthrough: [
      "Travel to the ruined keep of Caed Nua and confront the mad Watcher Maerwald.",
      "Clear the keep and defeat or resolve Maerwald to claim the stronghold.",
      "Begin exploring the Endless Paths dungeon beneath it.",
      "Invest in Caed Nua's upgrades for income, allies, and side content."
    ],
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
    walkthrough: [
      "Reach Hadret House in Defiance Bay and meet the hermit at its center.",
      "Investigate the animancy conspiracy behind the hollowborn crisis.",
      "Follow the leads into the city's factions.",
      "Make the choices that open Act 2's intrigue and shape Defiance Bay's fate."
    ],
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
    walkthrough: [
      "Engage the three-way struggle between the Crucible Knights, the Dozens, and House Doemenel.",
      "Complete quests to earn each faction's trust before the finale.",
      "Pick one faction for the Act 2 climax.",
      "Fight through the faction war, gaining your allies and turning the rest hostile."
    ],
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
    walkthrough: [
      "Journey to the elven city of Twin Elms to pick up Thaos's trail.",
      "Work through the Engwithan ruins and their guardians.",
      "Read the lore closely — it reveals the gods' true nature.",
      "Track the Leaden Key to its source to press on toward Thaos."
    ],
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
    walkthrough: [
      "Descend into Sun in Shadow beneath Teir Evron.",
      "Fight through the Engwithan machine to reach Thaos.",
      "Defeat Thaos in the final confrontation.",
      "Make the ending choice about the fate of countless souls — there is no simple right answer."
    ],
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
    walkthrough: [
      "Bring Edér along and pursue his search for the truth about his brother Woden.",
      "Investigate the war that tore the Dyrwood apart via Gilded Vale and Dyrford leads.",
      "Follow the religious threads the quest raises.",
      "Reach the resolution of Edér's faith to complete his companion arc."
    ],
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
    walkthrough: [
      "Trigger Aloth's arc by exploring his hidden second personality.",
      "Follow the clues tying him to the Leaden Key in Defiance Bay.",
      "Pursue the mystery before the finale, since it ties into the main conspiracy.",
      "Resolve which side of Aloth prevails to close his arc."
    ],
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
    walkthrough: [
      "Take Sagani along and help her hunt for her village elder's reincarnation.",
      "Follow the animal-companion Itumaak's cues across the world map.",
      "Track the target through the various regions as you travel.",
      "Reach the reincarnation to conclude her long hunt."
    ],
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
    walkthrough: [
      "Aid Pallegina as she serves the Vailian Republics in Defiance Bay.",
      "Weigh whether she should follow or defy her order's orders.",
      "Advise her at the key decision points.",
      "Your guidance sets her standing with the order and her ending."
    ],
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
    walkthrough: [
      "Recruit the Grieving Mother and enter her fractured memories.",
      "Work carefully through each memory sequence.",
      "Uncover the terrible mercy she performs on the hollowborn.",
      "Take your time to reach the arc's thematically rich conclusion."
    ],
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
    walkthrough: [
      "Travel to Stalwart in the White March and reopen the frozen fortress of Durgan's Battery.",
      "Clear the fortress of its dangers as high-level, mid-to-late-game content.",
      "Restore the forge and recover the secret of Durgan steel.",
      "Claim the steel to upgrade your best equipment."
    ],
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
    walkthrough: [
      "Continue the White March into He Waits in Fire and reach the sleeping god-forge.",
      "Confront the fate of the smith-god Abydon.",
      "Weigh the weighty theological choice the set piece presents.",
      "Decide Abydon's fate to complete Part II."
    ],
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
    walkthrough: [
      "Approach the mercenary-held Cragholdt Bluffs — very difficult optional content.",
      "Bring a well-geared, high-level party before attempting it.",
      "Fight through the mercenaries to the lich Concelhaut's tower.",
      "Defeat Concelhaut to claim the reward."
    ],
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
    category: "Side Quest",
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
    walkthrough: [
      "Speak with the tieflings and druids inside the Emerald Grove.",
      "Learn that Kagha's druids want to seal the grove and evict the refugees.",
      "Defuse tensions by resolving Arabella's fate and exposing Kagha's Shadow Druid ties.",
      "Deal with the goblin threat that endangers everyone (see Raid the Goblin Camp).",
      "Prevent the ritual sealing the grove.",
      "Keep the refugees safe so they can flee toward the mountain pass."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Save%20the%20Refugees%20(Druid%20Grove)%20walkthrough"
  },
  {
    id: 788,
    type: "main",
    category: "Main Story",
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
    walkthrough: [
      "Travel west from the Blighted Village to the goblin camp at the ruined temple.",
      "Enter openly, in disguise, or by force; the Shattered Sanctum lies below.",
      "Track down the three goblin leaders: Priestess Gut, Dror Ragzlin, and Minthara.",
      "Kill each leader — pick them off separately to avoid being swarmed.",
      "Optionally drop the chandelier or use the war drums against the horde.",
      "With all three dead, the Absolute's grip on the region breaks and Halsin is freed."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Raid%20the%20Goblin%20Camp%20walkthrough"
  },
  {
    id: 789,
    type: "side",
    category: "Side Quest",
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
    walkthrough: [
      "Explore the Blighted Village and clear its goblin and ogre occupants.",
      "Search the buildings for loot, the Whispering Depths well, and hidden cellars.",
      "Descend the well into the Whispering Depths.",
      "Fight through the phase spiders in the cavern.",
      "Defeat the Phase Spider Matriarch, using the egg sacs and chasm to your advantage.",
      "Collect the loot and find the passage onward to the Underdark."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20The%20Blighted%20Village%20%26%20Whispering%20Depths%20walkthrough"
  },
  {
    id: 790,
    type: "side",
    category: "Side Quest",
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
    walkthrough: [
      "Reach Grymforge via the Underdark boat.",
      "Learn that the true soul Nere is trapped behind a collapsed tunnel by poison gas.",
      "Find explosives (Smokepowder barrels or a runepowder bomb) to clear the rubble.",
      "Detonate the charge to free Nere and the choking deep gnomes.",
      "Decide whether to side with Nere or turn on him with the gnomes.",
      "Kill Nere for his head-bounty, or let him live and continue."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Free%20Nere%20(Grymforge%20Duergar)%20walkthrough"
  },
  {
    id: 791,
    type: "side",
    category: "Companion",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Companion: Lae'zel — The Githyanki Warrior",
    location: "Rosymorn Monastery",
    length: "long",
    difficulty: "High",
    reward: "Githyanki truth, Astral tadpole",
    summary:
      "Escort Lae'zel to the githyanki Creche Y'llek to seek a cure — and confront her people's lies.",
    aiTip:
      "A pivotal companion arc; the Creche also holds powerful gear and the Blood of Lathander.",
    walkthrough: [
      "Keep Lae'zel in your party and travel to Crèche Y'llek.",
      "Test the zaith'isk and uncover Vlaakith's lies about the tadpole cure.",
      "Learn the truth about Orpheus from the Astral Prism.",
      "Guide Lae'zel to question her devotion to the lich-queen.",
      "In Act 3, help her confront Vlaakith's agents and choose Orpheus over the queen.",
      "Her ending as a rebel leader depends on breaking her faith in Vlaakith."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Lae'zel%20%E2%80%94%20The%20Githyanki%20Warrior%20walkthrough"
  },
  {
    id: 792,
    type: "side",
    category: "Companion",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Companion: Karlach — The Hellion's Heart",
    location: "Risen Road",
    length: "medium",
    difficulty: "Medium",
    reward: "Karlach's heart repaired",
    summary:
      "Help the fugitive tiefling Karlach cool her failing infernal engine and hunt the paladins of Tyr.",
    aiTip:
      "Bring her infernal iron to Dammon across the acts to keep her heart from burning out.",
    walkthrough: [
      "Recruit Karlach after resolving the Hunt the Devil encounter on the Risen Road.",
      "Learn her infernal engine is failing and needs Infernal Iron to patch.",
      "Bring Infernal Iron to Dammon the tiefling smith in each act to upgrade her engine.",
      "In Act 3, confront Gortash, who once sold her to Zariel.",
      "Explore options to save her: return to Avernus, become a mind flayer, or others.",
      "Choose her ending — most paths require leaving for Avernus with a companion."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Karlach%20%E2%80%94%20The%20Hellion's%20Heart%20walkthrough"
  },
  {
    id: 793,
    type: "side",
    category: "Side Quest",
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
    walkthrough: [
      "Enter the Shadow-Cursed Lands from the Underdark or Mountain Pass.",
      "Acquire protection from the curse: a Moonlantern or Isobel's blessing.",
      "Stay within light sources to avoid the deadly shadows.",
      "Follow the road, freeing the pixie Dolly Dolly Dolly from a Moonlantern if you wish.",
      "Cross the bridge to the Last Light Inn, a Harper safe haven.",
      "Meet Jaheira and Isobel to establish your base for Act 2."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Reach%20the%20Last%20Light%20Inn%20walkthrough"
  },
  {
    id: 794,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Find Arabella's Parents",
    location: "Reithwin Town / Last Light Inn",
    length: "short",
    difficulty: "Medium",
    reward: "Tiefling family's fate resolved",
    summary:
      "Arabella, sheltering at Last Light Inn, begs you to find her parents Locke and Komira, lost in the Shadow-Cursed Lands. Track them through Reithwin before the curse claims them.",
    aiTip:
      "Search Reithwin Town near the toll house; carry Moonlanterns and light sources to survive the shadows on the way.",
    walkthrough: [
      "At the Last Light Inn, meet the grieving tiefling child Arabella.",
      "Agree to search the Shadow-Cursed Lands for her missing parents.",
      "Travel toward the Ruined Battlefield and the Thorm mausoleum area.",
      "Find her parents' fate among the shadow-cursed victims.",
      "Return to Arabella with the news.",
      "Comfort her and complete the quest at the inn."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20Arabella's%20Parents%20walkthrough"
  },
  {
    id: 795,
    type: "side",
    category: "Side Quest",
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
    walkthrough: [
      "Complete the Gauntlet of Shar's Soft-Step trials to earn the Spear of Night.",
      "Enter the inner sanctum and meet Balthazar and the imprisoned Nightsong (Dame Aylin).",
      "Choose to free Aylin rather than kill her for Shar.",
      "Use the Spear of Night to shatter her prison.",
      "Defeat Balthazar if he turns hostile.",
      "Free Aylin, weakening Ketheric Thorm's immortality."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Free%20the%20Nightsong%20(Gauntlet%20of%20Shar)%20walkthrough"
  },
  {
    id: 796,
    type: "side",
    category: "Side Quest",
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
    walkthrough: [
      "Descend beneath Moonrise Towers into the ancient Thorm temple.",
      "Work through the Mind Flayer Colony's illithid horrors and thralls.",
      "Confront Balthazar and secure Ketheric's relic / the Nightsong.",
      "Find the Astral-Touched tadpole and decide whether to use it.",
      "Fight through to the colony's heart.",
      "Emerge to face Ketheric now that his immortality is broken."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20The%20Mind%20Flayer%20Colony%20walkthrough"
  },
  {
    id: 797,
    type: "side",
    category: "Companion",
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
    walkthrough: [
      "Progress Astarion's story to reveal his master, the vampire lord Cazador.",
      "In Act 3, investigate Cazador's Palace and read the Rite of Profane Ascension.",
      "Rescue Astarion's fellow spawn siblings held in the kennels.",
      "Confront Cazador during the ritual in the ceremony chamber.",
      "Decide: let Astarion complete the ascension ritual, or stop him and kill Cazador.",
      "His ending — ascended vampire or free spawn — follows that choice."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Companion%3A%20Astarion's%20Ascension%20walkthrough"
  },
  {
    id: 798,
    type: "side",
    category: "Side Quest",
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
    walkthrough: [
      "Investigate the serial murders tied to the Bhaal cult in the Lower City.",
      "Follow the 'Murder Tribunal' clues and the Dribbles the Clown circus lead.",
      "Collect Dribbles' scattered body parts across the city for the gruesome side task.",
      "Trace the killings to the Temple of Bhaal beneath the Undercity.",
      "Confront Orin and the Bhaalist cult.",
      "End the murder spree by clearing the temple."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Stop%20the%20Murder%20Tribunal%20(Dribbles%20the%20Clown)%20walkthrough"
  },
  {
    id: 799,
    type: "side",
    category: "Side Quest",
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
    walkthrough: [
      "Learn that hostages (including Duke Ravengard) are held in the underwater Iron Throne.",
      "Take the submersible from the Flymm Cargo warehouse down to the prison.",
      "Race the flooding timer once inside.",
      "Free as many prisoners as you can, prioritizing key NPCs.",
      "Fight the guards and Gortash's assassin.",
      "Escape via the submersible before the prison fully floods."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20The%20Iron%20Throne%20walkthrough"
  },
  {
    id: 800,
    type: "side",
    category: "Side Quest",
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
    walkthrough: [
      "Ally with the Ironhand gnomes and Wulbren to plan the sabotage.",
      "Retrieve the runepowder bomb from the gnomes.",
      "Infiltrate the Steel Watch Foundry in Rivington.",
      "Free the enslaved Gondian workers before the blast.",
      "Plant the runepowder at the foundry's core.",
      "Detonate it to destroy the Steel Watch production and cripple Gortash's army."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Destroy%20the%20Steel%20Watch%20Foundry%20walkthrough"
  },
  {
    id: 801,
    type: "side",
    category: "Side Quest",
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
    walkthrough: [
      "Gather the three Netherstones to control the Elder Brain.",
      "Confront Enver Gortash at his coronation in Wyrm's Rock and take his stone.",
      "Disable the Steel Watch first to weaken his defenses.",
      "Track Orin the Red, who hides among your allies in disguise.",
      "Answer her challenge at the Temple of Bhaal and defeat her in single combat.",
      "Claim both Netherstones to prepare for the Netherbrain."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Defeat%20the%20Chosen%3A%20Orin%20%26%20Gortash%20walkthrough"
  },
  {
    id: 802,
    type: "side",
    category: "Companion",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Companion: Jaheira — The High Harper",
    location: "Last Light Inn / Baldur's Gate",
    length: "long",
    difficulty: "High",
    reward: "Jaheira's loyalty, Harper allies",
    summary:
      "Stand with the veteran Harper Jaheira as she rallies her old network and settles a decades-old score against the Absolute's chosen.",
    aiTip:
      "Her arc pays off in Act 3 — keep her in the party for the Harper reinforcements at the finale.",
    walkthrough: [
      "Meet Jaheira at the Last Light Inn and earn her trust through Act 2.",
      "Recruit her after the assault on Moonrise Towers.",
      "In Act 3, visit her home and family in the Lower City.",
      "Help defend the Harpers and her loved ones from the cults.",
      "Reunite her with Minsc after clearing his mind control in the Counting House.",
      "Complete her arc alongside Minsc for the finale."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Jaheira%20The%20High%20Harper%20walkthrough"
  },
  {
    id: 803,
    type: "side",
    category: "Side Quest",
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
    walkthrough: [
      "Obtain the ritual components from Helsik at the Devil's Fee.",
      "Perform the ritual to teleport into the House of Hope.",
      "Meet Hope, the imprisoned archivist, and free her to gain an ally.",
      "Loot the Boudoir and vault for the Orphic Hammer and legendary gear.",
      "Trigger and win the fight against Raphael and his cambions.",
      "Escape with the Orphic Hammer needed to free Orpheus."
    ],
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
    walkthrough: [
      "Defeat Margit the Fell Omen at the bridge to open the main gate.",
      "Choose your entry: the front gate gauntlet or the sewer path on the cliffside to the right.",
      "Rest at the Stormveil Cliffside grace and grab the Rusty Key to unlock the side courtyard route.",
      "Work up through the ramparts, clearing the giant and archers rather than rushing the trapped courtyard.",
      "Find and summon Nepheli Loux near the throne room before the boss fog gate.",
      "Enter the fog and defeat Godrick the Grafted to claim his Great Rune and clear the dungeon."
    ],
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
    walkthrough: [
      "Cross into Liurnia and approach the Academy of Raya Lucaria gate.",
      "Retrieve the Academy Glintstone Key (from the dragon-topped turtle at Church of Vows) and use the sealing to enter.",
      "Rest at the first grace, then take the rooftop route right to loot the hidden gear and shortcuts.",
      "Fight down through the debate parlor and library to the Rennala fog gate.",
      "Defeat Rennala, Queen of the Full Moon, to claim her Great Rune and unlock respeccing."
    ],
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
    walkthrough: [
      "Reach Volcano Manor in the Altus region and accept Lady Tanith's invitation.",
      "Work through the manor's contract questline and lava-tunnel gauntlet to reach Rykard's arena.",
      "Pick up the Serpent-Hunter greatspear lying just before the fog gate.",
      "Enter the fight and rely on the Serpent-Hunter's ranged sweeps to build stagger.",
      "Stagger Rykard, Lord of Blasphemy, and finish him for his Great Rune and the Blasphemous Blade."
    ],
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
    walkthrough: [
      "Travel to the Temple of Eiglay within Volcano Manor.",
      "Clear the path to the Godskin Noble's chamber and rest at the nearby grace.",
      "Stay close during his rolling body-slam and dodge into it rather than away.",
      "Punish the recovery after each roll and belly-flop to whittle his health.",
      "Defeat the Godskin Noble to claim the Godskin gear and continue the region."
    ],
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
    walkthrough: [
      "Head to the Golden Lineage Evergaol on the Altus Plateau.",
      "Activate the evergaol to be pulled into Godefroy's arena.",
      "Treat him as a tougher Godrick reprise — bait the wind and axe combos.",
      "Apply bleed or repeated stance-breaks to open big punish windows.",
      "Defeat Godefroy the Grafted for his runes and lineage lore."
    ],
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
    walkthrough: [
      "Reach Castle Sol in the Mountaintops of the Giants and fight to the summit.",
      "Rest at the grace before the boss and top up your flasks.",
      "At the start of the fight, focus down the two summoned spectral knights first.",
      "With the adds cleared, bait Niall's cannon-arm and greatshield combos and punish gaps.",
      "Defeat Commander Niall to claim the Haligtree Secret Medallion (Left)."
    ],
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
    walkthrough: [
      "Progress Fia's questline at the Roundtable Hold until she offers her embrace request.",
      "Complete the Deathbed Companion steps to reach Deeproot Depths.",
      "Rest at Fia's side and enter her dream to start the Fortissax fight.",
      "Equip lightning-resistant gear and stay under the dragon to avoid its beams.",
      "Defeat Lichdragon Fortissax to finish Fia's arc and earn the Cursemark of Death."
    ],
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
    walkthrough: [
      "Descend into the Siofra/Nokron Eternal City depths.",
      "Follow the glowing ancestral trail of spectral deer to the boss arena.",
      "Light the braziers ringing the arena to make the Regal Ancestor Spirit visible.",
      "With the boss lit, focus its head and legs while dodging the antler charges.",
      "Defeat the Regal Ancestor Spirit for its Remembrance and ancestral rewards."
    ],
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
    walkthrough: [
      "Answer Yura's first summon sign outside Murkwater Cave in Limgrave.",
      "Aid him against the invader, then meet him again near the Second Church of Marika.",
      "Continue answering his summons as his hunt for Eleonora unfolds.",
      "Support Yura through his final confrontation to see his tale through.",
      "Complete the arc to inherit the Nagakiba and his anti-invader legacy."
    ],
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
    walkthrough: [
      "Find Latenna in the Slumbering Wolf's Shack in western Liurnia.",
      "Agree to carry her to the Lands of the Albinaurics.",
      "Travel to the Consecrated Snowfield's Apostate Derelict and interact with her spirit there.",
      "Complete her pact to honor her wolf-bound vow.",
      "Receive the Haligtree Secret Medallion (Right) and the Latenna Spirit Ash."
    ],
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
    walkthrough: [
      "Meet Diallos at the Roundtable Hold and again at Volcano Manor.",
      "Follow his assassination-contract steps alongside the manor questline.",
      "Check in on him at Jarburg as he grieves and searches for purpose.",
      "See his story through its bittersweet confrontation.",
      "Complete Diallos's arc for his fate and Hoslow's gear connections."
    ],
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
    walkthrough: [
      "Speak with Gowry in his shack near Sellia, Caelid, and deliver the Unalloyed Gold Needle to be repaired.",
      "Give the repaired needle to Millicent to halt her scarlet rot.",
      "Follow Millicent's journey from Caelid to the Erdtree-adjacent regions.",
      "At the Haligtree, choose whether to aid Millicent against her sisters or hinder her.",
      "Complete the arc for the unique talisman reward and rot questline conclusion."
    ],
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
    walkthrough: [
      "Meet Rya at the Scenic Isle in Liurnia and recover her stolen necklace.",
      "Return the necklace to learn her true nature and role at Volcano Manor.",
      "Follow her to Volcano Manor and accept Lady Tanith's invitation.",
      "Take on the manor's assassination contracts she helps arrange.",
      "Advance her arc into the deeper Volcano Manor intrigues and Zorayas's story."
    ],
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
    walkthrough: [
      "Find Kenneth Haight on the ruins overlooking eastern Limgrave.",
      "Agree to help him retake Fort Haight to the south.",
      "Clear the enemies occupying Fort Haight.",
      "Report back to Kenneth so he can reclaim the fort.",
      "Complete the short arc to gain an ally and its link to Nepheli Loux's story."
    ],
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
    walkthrough: [
      "Defeat Mohg, Lord of Blood at Mohgwyn Palace to access his arena.",
      "Interact with the withered arm in Mohg's arena to be drawn into the Land of Shadow.",
      "Rest at the first Gravesite Plain grace and get your bearings.",
      "Begin collecting Scadutree Fragments scattered across the map.",
      "Spend fragments at any grace to raise your Scadutree Blessing before major bosses."
    ],
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
    walkthrough: [
      "Enter Belurat, Tower Settlement from the Gravesite Plain.",
      "Fight up through the settlement to the rooftop arena and rest at the grace.",
      "Watch the Dancing Lion's mask to read its wind, frost, and lightning phases.",
      "Dodge through the spinning attacks and punish after each elemental burst.",
      "Defeat the Divine Beast Dancing Lion for its Remembrance."
    ],
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
    walkthrough: [
      "Make your way through Castle Ensis to the pass beyond it.",
      "Rest at the grace before Rellana's fog gate.",
      "Learn her dual-moon combo — bait the twin-blade flurry and the moon projectiles.",
      "Dodge late into her combos and punish the long recovery.",
      "Defeat Rellana, Twin Moon Knight, to clear the pass and claim her Remembrance."
    ],
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
    walkthrough: [
      "Reach the Shadow Keep and fight through to Messmer's tower.",
      "Rest at the grace and equip fire-resistant gear.",
      "In phase one, punish the gaps in his flame and spear combos.",
      "In phase two, watch for the serpents and impaling spears and keep your distance when they rise.",
      "Defeat Messmer the Impaler to open the Shadow Keep and earn his Remembrance."
    ],
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
    walkthrough: [
      "Complete Igon's questline so he will aid you against Bayle.",
      "Descend the Jagged Peak to Bayle's lair and rest at the grace.",
      "Summon Igon and apply his dragon-spear buff at the start of the fight.",
      "Stay under Bayle's body to avoid the fire breath and lightning slams.",
      "Slay Bayle the Dread for his Remembrance and dragon communion reward."
    ],
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
    walkthrough: [
      "Find the entrance to Midra's Manse in the Abyssal Woods.",
      "Move quietly through the Manse to avoid drawing the frenzied enemies.",
      "Rest at the grace and equip madness-resistant gear before the fight.",
      "Keep pressure on Midra while dodging the Frenzied Flame beams that build madness.",
      "Defeat Midra, Lord of Frenzied Flame, for his Remembrance and lore."
    ],
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
    walkthrough: [
      "Complete Count Ymir's questline at the Church of the Bud/Cathedral of Manus Metyr.",
      "Follow the trail to the Finger Ruins and the path to Metyr.",
      "Rest at the grace before her arena.",
      "Close the distance during her beam and finger-rain casts and punish between them.",
      "Defeat Metyr, Mother of Fingers, to finish Ymir's arc and claim her Remembrance."
    ],
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
    walkthrough: [
      "Travel toward Enir-Ilim and reach the Church of the Bud.",
      "Rest at the grace and bring rot-cleansing items and rot-resistant gear.",
      "Dodge Romina's spear thrusts and butterfly swarms to limit scarlet rot buildup.",
      "Cure rot immediately if the meter fills, then resume pressure.",
      "Defeat Romina, Saint of the Bud, to open the path to Enir-Ilim and claim her Remembrance."
    ],
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
    walkthrough: [
      "Reach the summit of Enir-Ilim and rest at the final grace.",
      "Max out your Scadutree Blessing and bring a strong Spirit Ash summon.",
      "In phase one, hug Radahn and dodge into his gravity slams and cross-slashes.",
      "In phase two, weather Miquella's light storm and punish the brief openings after his combos.",
      "Defeat Promised Consort Radahn to complete Shadow of the Erdtree."
    ],
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
    walkthrough: [
      "Meet Leda and her companions across the Land of Shadow's graces.",
      "Advance each companion's dialogue — Ansbach, Thiollier, Freyja, Hornsent, and Moore.",
      "Make your choices as their loyalties begin to split near Enir-Ilim.",
      "Survive the invasions triggered by the fractured band.",
      "Resolve Leda's questline to determine who aids you and who turns hostile."
    ],
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
    walkthrough: [
      "Find Thiollier among Leda's companions and progress his dialogue.",
      "Follow his search for St. Trina across the Land of Shadow.",
      "Explore to the hidden location where St. Trina slumbers.",
      "Complete Thiollier's steps at St. Trina's resting place.",
      "Finish the arc for its sleep-themed conclusion and unique reward."
    ],
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20St.%20Trina%20%26%20Thiollier%20walkthrough"
  },
  {
    id: 1011,
    type: "main",
    game: "Elden Ring",
    region: "Limgrave",
    title: "Become Elden Lord (Main Story)",
    location: "The Lands Between (Limgrave to Farum Azula)",
    length: "long",
    difficulty: "High",
    reward: "Elden Lord ending, Rune of the chosen ending",
    summary:
      "The central journey of Elden Ring: rise from a graveyard-bound Tarnished, defeat the demigod Shardbearers, and claim the Elden Throne.",
    aiTip:
      "Explore widely and level up before major bosses. The main path is gated by Great Runes, so tackle Godrick and Rennala early to open the route north.",
    walkthrough: [
      "Start at the Stranded Graveyard and reach the open world of Limgrave.",
      "Unlock the Roundtable Hold hub after your first grace-guided steps.",
      "Defeat the Shardbearers: Godrick, Rennala, Radahn, and Morgott.",
      "Reach the Mountaintops of the Giants and defeat the Fire Giant.",
      "Burn the Erdtree, then clear Crumbling Farum Azula and defeat Maliketh.",
      "Return to the Ashen Capital and beat Godfrey and Morgott's echoes.",
      "Face the final bosses, Radagon and the Elden Beast.",
      "Choose your ending at the Elden Throne to become Elden Lord."
    ],
    video: "https://www.youtube.com/watch?v=K_03kFqWfqs"
  },
  {
    id: 1012,
    type: "side",
    game: "Elden Ring",
    region: "Limgrave",
    title: "Roderika's Questline",
    location: "Stormhill Shack, Roundtable Hold",
    length: "short",
    difficulty: "Low",
    reward: "Spirit Ash tuning at Roundtable Hold",
    summary:
      "Guide the timid Roderika from Stormhill Shack to Roundtable Hold, where she overcomes her grief and becomes the Spirit Tuner.",
    aiTip:
      "Deliver her chrysalids' memento to Blacksmith Hewg, then speak to both repeatedly across visits to unlock Spirit Ash upgrades.",
    walkthrough: [
      "Find Roderika at the Stormhill Shack near the start of Limgrave.",
      "Exhaust her dialogue and encourage her to travel to the Roundtable Hold.",
      "Deliver her chrysalids' memento to Blacksmith Hewg at the Roundtable.",
      "Speak with both Roderika and Hewg again to nudge her past her grief.",
      "Return across later visits until she becomes the Spirit Tuner and unlocks Spirit Ash upgrades."
    ],
    video: "https://www.youtube.com/watch?v=5vZpTq3nW0c"
  },
  {
    id: 1013,
    type: "side",
    game: "Elden Ring",
    region: "Liurnia",
    title: "Thops' Questline",
    location: "Church of Irith, Raya Lucaria Academy",
    length: "short",
    difficulty: "Low",
    reward: "Thops's Barrier sorcery, Thops's Bell Bearing",
    summary:
      "A sorcerer locked out of the Academy asks you to find him a Glintstone Key so he can return to his studies.",
    aiTip:
      "Grab a Glintstone Key from the dragon-guarded rise near the Academy, give it to Thops, then return later to find his fate and claim his gear.",
    walkthrough: [
      "Meet Thops at the Church of Irith in eastern Liurnia and hear his request for a Glintstone Key.",
      "Collect a Glintstone Key from the dragon-guarded Gate Town Bridge rise near Raya Lucaria.",
      "Return and hand the Glintstone Key to Thops so he can enter the Academy.",
      "Progress the game, then travel to the Raya Lucaria Academy classroom.",
      "Find Thops's remains there to claim Thops's Barrier sorcery and his Bell Bearing."
    ],
    video: "https://www.youtube.com/watch?v=3n4T6k8d9oA"
  },
  {
    id: 1014,
    type: "side",
    game: "Elden Ring",
    region: "Liurnia",
    title: "Seluvis' Questline",
    location: "Seluvis's Rise, Liurnia",
    length: "medium",
    difficulty: "Medium",
    reward: "Seluvis's Potion, Magic Scorpion Charm, puppet Spirit Ashes",
    summary:
      "The scheming sorcerer Seluvis entangles you in his puppet plots, tied closely to Ranni's and Nepheli's questlines.",
    aiTip:
      "His quest branches sharply — the potion he gives you can be used on Nepheli or given to Gideon. Decide carefully, as choices lock out rewards.",
    walkthrough: [
      "Reach Seluvis's Rise in Liurnia (accessible via Ranni's questline through Renna's Rise).",
      "Accept his task to deliver Seluvis's Potion to Nepheli Loux.",
      "Choose whether to puppet Nepheli, warn her, or hand the potion to Gideon instead.",
      "Return to buy puppet Spirit Ashes from his stock at Seluvis's Rise.",
      "Progress Ranni's questline; siding with Ranni ultimately ends Seluvis's scheme."
    ],
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Seluvis%20questline%20walkthrough"
  },
  {
    id: 1015,
    type: "side",
    game: "Elden Ring",
    region: "Limgrave",
    title: "Blaidd's Questline",
    location: "Mistwood, Siofra River, Forlorn Hound Evergaol",
    length: "medium",
    difficulty: "Medium",
    reward: "Royal Greatsword (after his fate), story progression",
    summary:
      "Ranni's loyal half-wolf shadow Blaidd aids you across the map, from Mistwood howls to the Radahn Festival, before a tragic end.",
    aiTip:
      "Free him from the Forlorn Hound Evergaol early and follow Ranni's quest — Blaidd's arc is bound to hers and can be missed if you rush.",
    walkthrough: [
      "Howl at the Mistwood ruins after speaking to Kalé, or free Blaidd from the Forlorn Hound Evergaol.",
      "Meet him again in the Siofra River and receive his help hints for Ranni's quest.",
      "Fight alongside him at the Radahn Festival in Redmane Castle.",
      "Continue Ranni's questline through Nokron and beyond.",
      "Return to Ranni's Rise near the end to confront the maddened Blaidd and claim his gear."
    ],
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Blaidd%20questline%20walkthrough"
  },
  {
    id: 1016,
    type: "side",
    game: "Elden Ring",
    region: "Leyndell & Altus",
    title: "Bernahl's Questline",
    location: "Warmaster's Shack, Volcano Manor, Farum Azula",
    length: "medium",
    difficulty: "Medium",
    reward: "Devourer's Scepter, Beast Champion armor set",
    summary:
      "The Recusant Bernahl teaches Ashes of War before recruiting you into Volcano Manor's assassination schemes and a final duel in Farum Azula.",
    aiTip:
      "Buy his Ashes of War at Warmaster's Shack early. His arc concludes as an endgame invasion — don't skip past Farum Azula without triggering it.",
    walkthrough: [
      "Meet Bernahl at the Warmaster's Shack in Limgrave and buy Ashes of War.",
      "Join Volcano Manor and find Bernahl there among the recusants.",
      "Complete Volcano Manor assassination contracts alongside the questline.",
      "Travel to Crumbling Farum Azula late in the game.",
      "Answer his invasion sign and defeat him to claim the Devourer's Scepter."
    ],
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Bernahl%20questline%20walkthrough"
  },
  {
    id: 1017,
    type: "side",
    game: "Elden Ring",
    region: "Caelid",
    title: "Gurranq, Beast Clergyman",
    location: "Bestial Sanctum, Caelid",
    length: "medium",
    difficulty: "Medium",
    reward: "Beast-based incantations, Ash of War: Determination, Clawmark Seal",
    summary:
      "Feed Deathroot to the ravenous Beast Clergyman Gurranq to unlock powerful beast incantations and rare rewards.",
    aiTip:
      "Use the teleporter trap in eastern Limgrave to reach the Bestial Sanctum early. Back off when Gurranq turns hostile after feedings, then continue.",
    walkthrough: [
      "Reach the Bestial Sanctum in northern Caelid (fastest via the Limgrave teleporter trap).",
      "Speak with Gurranq and hand over your first Deathroot.",
      "When he becomes aggressive, retreat or survive until he calms, then talk again.",
      "Collect Deathroot from dungeon and boss drops across the Lands Between.",
      "Deliver all nine Deathroot to exhaust his rewards, including the Beast Eye and Clawmark Seal."
    ],
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Gurranq%20Deathroot%20walkthrough"
  },
  {
    id: 1018,
    type: "side",
    game: "Elden Ring",
    region: "Haligtree",
    title: "Jar Bairn's Questline",
    location: "Jarburg, Liurnia",
    length: "short",
    difficulty: "Low",
    reward: "Companion Jar talisman, Ash of War: Lightning Ram",
    summary:
      "A gentle living jar in Jarburg dreams of becoming a great pot, tied to Diallos's and Iron Fist Alexander's arcs.",
    aiTip:
      "Visit Jarburg repeatedly and progress Diallos's Volcano Manor thread — Jar Bairn's ending depends on advising him after Diallos falls.",
    walkthrough: [
      "Travel to Jarburg in eastern Liurnia and speak with Jar Bairn.",
      "Talk to Diallos, who has come to protect the village.",
      "Return after major story progress to find the village attacked and Diallos wounded.",
      "Advise Jar Bairn about his future when prompted in dialogue.",
      "Continue visiting to receive the Companion Jar talisman and Lightning Ram."
    ],
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Jar%20Bairn%20questline%20walkthrough"
  },
  {
    id: 1019,
    type: "side",
    game: "Elden Ring",
    region: "Liurnia",
    title: "Shabriri & the Frenzied Flame",
    location: "Frenzied Flame Village, Subterranean Shunning-Grounds",
    length: "medium",
    difficulty: "Medium",
    reward: "Path to the Lord of Frenzied Flame ending",
    summary:
      "The malevolent Shabriri, disguised as Yura, steers you toward embracing the Frenzied Flame and its world-ending ending.",
    aiTip:
      "This locks you into the Frenzied Flame ending unless reversed via Miquella's Needle. Warn: it overrides other endings until cured.",
    walkthrough: [
      "Progress Yura's questline until Shabriri possesses his body in the Zamor Ruins area.",
      "Speak with Shabriri, who directs you to the Frenzied Flame Proscription.",
      "Descend the Subterranean Shunning-Grounds to the Frenzied Flame Proscription door.",
      "Remove all armor and touch the Three Fingers to accept the Frenzied Flame.",
      "This sets the Lord of Frenzied Flame ending — reverse it later with Miquella's Needle if desired."
    ],
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Shabriri%20Frenzied%20Flame%20walkthrough"
  },
  {
    id: 1020,
    type: "side",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Sir Ansbach's Questline (DLC)",
    location: "Shadow Keep, Land of Shadow",
    length: "medium",
    difficulty: "High",
    reward: "Ansbach's armor set, Nail-Bracelet Talisman, endgame support",
    summary:
      "A loyal servant of Mohg who now follows Miquella's trail, Sir Ansbach aids you through Shadow of the Erdtree's finale.",
    aiTip:
      "Track Miquella's crosses and speak with Ansbach at each Shadow Keep visit. His fate depends on how St. Trina's and Leda's threads resolve.",
    walkthrough: [
      "Meet Sir Ansbach in the Shadow Keep's Storehouse, disguised among the servants.",
      "Follow Miquella's crosses across the Land of Shadow, reporting back as the story advances.",
      "Deliver information about Miquella's true plan when he asks.",
      "Side with him during the Needle Knight Leda companions' confrontation.",
      "Reach the final boss arena, where Ansbach's summon sign aids you if he survives."
    ],
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Sir%20Ansbach%20questline%20walkthrough"
  },
  {
    id: 1021,
    type: "side",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Hornsent & Grandam (DLC)",
    location: "Belurat, Enir-Ilim, Land of Shadow",
    length: "medium",
    difficulty: "Medium",
    reward: "Story progression, unique gestures and lore rewards",
    summary:
      "The vengeful Hornsent and the mysterious Grandam share a linked storyline about the shamans and the crucible of the Hornsent people.",
    aiTip:
      "Speak to Grandam in Bonny Village between Hornsent's appearances — her cryptic hints and his revenge arc unfold together across the DLC.",
    walkthrough: [
      "Meet Hornsent early after entering the Land of Shadow near Belurat.",
      "Find Grandam seated in Bonny Village and exhaust her dialogue.",
      "Progress toward Shadow Keep, meeting Hornsent again at key sites.",
      "Return to Grandam after major bosses for further lore and gestures.",
      "Follow Hornsent to Enir-Ilim to resolve his vengeance at the tower's summit."
    ],
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Hornsent%20Grandam%20questline%20walkthrough"
  },
  {
    id: 1022,
    type: "side",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Ymir & Jolán (DLC)",
    location: "Church of the Bud, Land of Shadow",
    length: "medium",
    difficulty: "High",
    reward: "Finger-based sorceries, boss fight against Ymir",
    summary:
      "Mother Church sage Ymir and his attendant Jolán guide a magic-focused questline that unravels into a hidden boss encounter.",
    aiTip:
      "Buy his sorceries and follow Jolán's leads. Ymir's quest branches into a fight — keep Jolán's thread alive for the full resolution.",
    walkthrough: [
      "Meet Ymir at the Church of the Bud in Scadu Altus and purchase sorceries.",
      "Accept his tasks and speak with his attendant Jolán.",
      "Follow the map markers to the two Fingers he sends you to investigate.",
      "Return to trigger the confrontation and defeat Ymir, Mother of Fingers' would-be heir.",
      "Complete Jolán's follow-up to conclude the questline and claim its rewards."
    ],
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Ymir%20Jolan%20questline%20walkthrough"
  },
  {
    id: 1023,
    type: "side",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Igon & the Dragon Priestess (DLC)",
    location: "Jagged Peak, Land of Shadow",
    length: "medium",
    difficulty: "High",
    reward: "Aid against Bayle, dragon communion rewards",
    summary:
      "The dragon-hunter Igon's fury against Bayle the Dread and the Dragon Priestess's rites drive a questline of dragon transformation rewards.",
    aiTip:
      "Summon Igon for the Bayle fight — his impassioned battle cries mark the arc's climax. Complete dragon communion at the Priestess's altar afterward.",
    walkthrough: [
      "Find the wounded Igon along the path up the Jagged Peak.",
      "Read his messages and progress toward Bayle's lair.",
      "Summon Igon at the fog wall before Bayle the Dread and defeat the dragon together.",
      "Speak with the Dragon Priestess to access dragon communion incantations.",
      "Offer Dragon Hearts at the altar to claim the DLC's dragon rewards."
    ],
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Igon%20Bayle%20Dragon%20Priestess%20walkthrough"
  },
  {
    id: 1024,
    type: "side",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Moore's Questline (DLC)",
    location: "Gravesite Plain, Land of Shadow",
    length: "short",
    difficulty: "Low",
    reward: "Aged One's Exultation talisman",
    summary:
      "A soft-spoken merchant met early in the Land of Shadow, Moore's short arc rewards revisiting him as the story unfolds.",
    aiTip:
      "Note his changing location and mood after major DLC bosses — speaking to him each time is needed to reach his questline's end.",
    walkthrough: [
      "Meet Moore near the Gravesite Plain shortly after entering the Land of Shadow.",
      "Buy from his stock and exhaust his dialogue.",
      "Return after progressing the DLC to find him relocated.",
      "Continue talking across visits as his outlook darkens.",
      "Resolve his final encounter to obtain the Aged One's Exultation talisman."
    ],
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Moore%20questline%20walkthrough"
  },
  {
    id: 1025,
    type: "side",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Queelign's Questline (DLC)",
    location: "Fire Knights' sites, Land of Shadow",
    length: "short",
    difficulty: "Medium",
    reward: "Fire Knight incantations, unique gear",
    summary:
      "The zealous Fire Knight Queelign hunts the impure across the Land of Shadow before a final duel decides his fate.",
    aiTip:
      "Give him the Fire Knight's Prayerbook to unlock incantations, then meet him where he invades to complete the arc.",
    walkthrough: [
      "Encounter Queelign preaching at Belurat or the Church District.",
      "Locate the Fire Knight's Prayerbook and hand it to him.",
      "Purchase his fire incantations from his stock.",
      "Travel onward until he appears as an invader.",
      "Defeat Queelign in his final duel to complete the questline."
    ],
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Queelign%20questline%20walkthrough"
  },
  {
    id: 1026,
    type: "side",
    game: "Elden Ring",
    region: "Land of Shadow",
    title: "Freyja's Questline (DLC)",
    location: "Shadow Keep, Land of Shadow",
    length: "short",
    difficulty: "Medium",
    reward: "Companionship, endgame summon support",
    summary:
      "One of Miquella's followers among Leda's companions, Freyja's arc weaves through the group's growing conflict in the Land of Shadow.",
    aiTip:
      "Speak with Freyja at each Shadow Keep rest and track how the companions turn on one another — her survival hinges on the choices you make.",
    walkthrough: [
      "Meet Freyja among Leda's companions after reaching the Shadow Keep.",
      "Talk to her at rest sites as the group discusses Miquella's path.",
      "Follow the companions' storyline through the mounting tension.",
      "Take sides during the companions' final confrontation.",
      "If she survives, summon Freyja for support in the DLC's climactic battle."
    ],
    video: "https://www.youtube.com/results?search_query=Elden%20Ring%20Freyja%20questline%20walkthrough"
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
    video: "https://www.youtube.com/watch?v=1PADqZwyVmY"
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
    video: "https://www.youtube.com/watch?v=U0npnqpDxYU"
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
    video: "https://www.youtube.com/watch?v=4ZSWj7lf4Is"
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
    video: "https://www.youtube.com/watch?v=L3VgmITSCQc"
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
    video: "https://www.youtube.com/watch?v=nX3M41Znnwo"
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
    video: "https://www.youtube.com/watch?v=7e2jqaar8oY"
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
    video: "https://www.youtube.com/watch?v=ibvtNpXacJo"
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
    video: "https://www.youtube.com/watch?v=erDLjDZ7pck"
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
    video: "https://www.youtube.com/watch?v=59EtR6arBLc"
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
    video: "https://www.youtube.com/watch?v=3QoHNgfyW0A"
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
    video: "https://www.youtube.com/watch?v=8X4f5PEsTqs"
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
    video: "https://www.youtube.com/watch?v=lRt40fZkdTw"
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
    video: "https://www.youtube.com/watch?v=wpqlKtoIe3Y"
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
    video: "https://www.youtube.com/watch?v=aC6DM7wGFck"
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
    video: "https://www.youtube.com/watch?v=wj8brNiltAM"
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
    video: "https://www.youtube.com/watch?v=esv5rh66SHY"
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
    video: "https://www.youtube.com/watch?v=Irm6HJa2NCo"
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
    video: "https://www.youtube.com/watch?v=2JlRk_8Fb2k"
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
    video: "https://www.youtube.com/watch?v=Ka26p_TZCg8"
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
    video: "https://www.youtube.com/watch?v=VwuAXrU3ImY"
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
    video: "https://www.youtube.com/watch?v=xjLVii9XWeA"
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
    video: "https://www.youtube.com/watch?v=jNNr6eHycNI"
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
    video: "https://www.youtube.com/watch?v=yT7NIWbJ54g"
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
    video: "https://www.youtube.com/watch?v=9u2qDvYyQ6U"
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
    video: "https://www.youtube.com/watch?v=8bxu0rvqLGM"
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
    video: "https://www.youtube.com/watch?v=9U-sKO9Jrng"
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
    video: "https://www.youtube.com/watch?v=uTsJ7ztnG1Y"
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
    video: "https://www.youtube.com/watch?v=fSlzrxWGs9E"
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
    video: "https://www.youtube.com/watch?v=rh2ZIJfvf7w"
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
    video: "https://www.youtube.com/watch?v=7jxvcaIa7zo"
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
    video: "https://www.youtube.com/watch?v=KLERaAR8otA"
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
    video: "https://www.youtube.com/watch?v=DGAF0OnVd3A"
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
    video: "https://www.youtube.com/watch?v=ZZSiz2_Gk74"
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
    video: "https://www.youtube.com/watch?v=361e5n2gsfQ"
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
    video: "https://www.youtube.com/watch?v=WfZgkpxRcNY"
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
video: "https://www.youtube.com/watch?v=0MryWc56s1Y",
    walkthrough: [
      "Begin the quest and follow the objective marker to investigate the Mirror of Erised lead.",
      "Use Revelio to uncover clues and Depulso/Accio to solve the environmental puzzles blocking your path.",
      "Progress through the area, defeating any enemies you encounter along the way.",
      "Reach and interact with the Mirror of Erised to trigger the quest's key scene.",
      "Collect your reward and any nearby chests to complete the quest."
    ]
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
    video: "https://www.youtube.com/watch?v=w1pW8uvI5vI"
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
    video: "https://www.youtube.com/watch?v=mGxOHI2So94"
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
    video: "https://www.youtube.com/watch?v=IH0kKjwD02M"
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
    video: "https://www.youtube.com/watch?v=EN59nPw7-v4"
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
    video: "https://www.youtube.com/watch?v=CVz9l-5ZKZs"
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
    video: "https://www.youtube.com/watch?v=HqKe7YyvKZM"
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
    video: "https://www.youtube.com/watch?v=USPtQaT3p28"
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
    video: "https://www.youtube.com/watch?v=ZqiBaxoGxEM"
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
    video: "https://www.youtube.com/watch?v=f_Hkl8IdgoE"
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
    video: "https://www.youtube.com/watch?v=Z08mA1dbDU8"
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
    video: "https://www.youtube.com/watch?v=UKa-bbqFBzM"
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
    video: "https://www.youtube.com/watch?v=BerVRvSzacE"
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
    video: "https://www.youtube.com/watch?v=Mf0j6CiaQrI"
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
    video: "https://www.youtube.com/watch?v=lrC_NOfmqWk"
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
    video: "https://www.youtube.com/watch?v=6TACQOMJyrg"
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
    video: "https://www.youtube.com/watch?v=r1eqqlpF0so"
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
    video: "https://www.youtube.com/watch?v=nZSyCjh2D80"
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
    video: "https://www.youtube.com/watch?v=LUMg5EdxgCg"
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
    video: "https://www.youtube.com/watch?v=M9PUMckftjQ"
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
    video: "https://www.youtube.com/watch?v=tO6w7bgfGX8"
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
    video: "https://www.youtube.com/watch?v=1Vzl5BTLths"
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
    video: "https://www.youtube.com/watch?v=VE0XET2jBLI"
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
    video: "https://www.youtube.com/watch?v=9rK2SV7zOmI"
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
    video: "https://www.youtube.com/watch?v=Nxs7Dl3vFfU"
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
    video: "https://www.youtube.com/watch?v=BwSwv88o6VQ"
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
    video: "https://www.youtube.com/watch?v=nchawQBXB10"
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
    video: "https://www.youtube.com/watch?v=fE3D0ds2WsU"
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
    video: "https://www.youtube.com/watch?v=QFhMvz-HwUM"
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
    video: "https://www.youtube.com/watch?v=lY1IgeVz9Y8"
  },
  {
    id: 910,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Black Wolf",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Yuna tale progress",
    summary:
      "Track a brutal Mongol commander known as the Black Wolf alongside Yuna.",
    aiTip:
      "Yuna Tale 3 of 4.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Black%20Wolf%20walkthrough"
  },
  {
    id: 911,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Message in Blood",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Yuna questline finale",
    summary:
      "Close out Yuna's story as her search for Taka reaches its emotional end.",
    aiTip:
      "Yuna Tale 4 of 4.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Message%20in%20Blood%20walkthrough"
  },
  {
    id: 912,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Way of the Bow",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Ishikawa tale progress",
    summary:
      "Train and hunt with Ishikawa as he teaches Jin the discipline of the bow.",
    aiTip:
      "Ishikawa questline.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Way%20of%20the%20Bow%20walkthrough"
  },
  {
    id: 913,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "Dreams of Conquest",
    location: "Toyotama",
    length: "medium",
    difficulty: "Medium",
    reward: "Ishikawa tale progress",
    summary:
      "Pursue Tomoe as she aids the Mongols' ambitions across Toyotama.",
    aiTip:
      "Ishikawa questline.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Dreams%20of%20Conquest%20walkthrough"
  },
  {
    id: 914,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "The Ghost and the Demon Sensei",
    location: "Toyotama",
    length: "medium",
    difficulty: "High",
    reward: "Ishikawa tale progress",
    summary:
      "Confront the darker rumors about Ishikawa as the hunt for Tomoe intensifies.",
    aiTip:
      "Ishikawa questline.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Ghost%20and%20the%20Demon%20Sensei%20walkthrough"
  },
  {
    id: 915,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Kamiagata",
    title: "The Terror of Otsuna",
    location: "Kamiagata",
    length: "medium",
    difficulty: "High",
    reward: "Ishikawa tale progress",
    summary:
      "Chase Tomoe to Otsuna, where her reign of terror must finally be answered.",
    aiTip:
      "Ishikawa questline.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Terror%20of%20Otsuna%20walkthrough"
  },
  {
    id: 916,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "Friends in Passing",
    location: "Izuhara",
    length: "short",
    difficulty: "Medium",
    reward: "Ishikawa tale progress",
    summary:
      "A quieter beat in Ishikawa's story as allies come and go.",
    aiTip:
      "Ishikawa questline.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Friends%20in%20Passing%20walkthrough"
  },
  {
    id: 917,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Kamiagata",
    title: "Laid to Rest",
    location: "Kamiagata",
    length: "long",
    difficulty: "High",
    reward: "Unbending Archer trophy",
    summary:
      "Bring the Sensei and the Student saga to its bittersweet conclusion.",
    aiTip:
      "Final Ishikawa tale — completes the Unbending Archer.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Laid%20to%20Rest%20walkthrough"
  },
  {
    id: 918,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Husband",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Masako tale progress",
    summary:
      "Follow a lead to one of the Adachi conspirators — a man hiding behind his marriage.",
    aiTip:
      "Masako revenge tale.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Husband%20walkthrough"
  },
  {
    id: 919,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Traitor",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Masako tale progress",
    summary:
      "Unmask a traitor who sold out Clan Adachi from within.",
    aiTip:
      "Masako revenge tale.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Traitor%20walkthrough"
  },
  {
    id: 920,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Fool",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Masako tale progress",
    summary:
      "Track a foolish accomplice in the Adachi massacre.",
    aiTip:
      "Masako revenge tale.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Fool%20walkthrough"
  },
  {
    id: 921,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Family Man",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Masako tale progress",
    summary:
      "Weigh mercy against vengeance when a killer turns out to be a devoted father.",
    aiTip:
      "Masako revenge tale — a hard choice.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Family%20Man%20walkthrough"
  },
  {
    id: 922,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "The Thief",
    location: "Izuhara",
    length: "medium",
    difficulty: "Medium",
    reward: "Masako tale progress",
    summary:
      "Hunt a thief tangled up in the betrayal of Masako's family.",
    aiTip:
      "Masako revenge tale.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Thief%20walkthrough"
  },
  {
    id: 923,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "The Conspirator",
    location: "Toyotama",
    length: "medium",
    difficulty: "High",
    reward: "Masako tale progress",
    summary:
      "Close in on the conspirator orchestrating the Adachi killings.",
    aiTip:
      "Masako revenge tale.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Conspirator%20walkthrough"
  },
  {
    id: 924,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "The Sister Betrayed",
    location: "Toyotama",
    length: "long",
    difficulty: "High",
    reward: "Vengeful Warrior trophy",
    summary:
      "Reach the wrenching heart of Masako's revenge — the sister who betrayed her.",
    aiTip:
      "Completes the Vengeful Warrior.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Sister%20Betrayed%20walkthrough"
  },
  {
    id: 925,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Izuhara",
    title: "A Mother's Peace",
    location: "Izuhara",
    length: "short",
    difficulty: "Low",
    reward: "Masako bonus tale",
    summary:
      "A quiet, optional coda to Masako's story about the family she lost.",
    aiTip:
      "Bonus tale — unlocks after The Husband.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20A%20Mother's%20Peace%20walkthrough"
  },
  {
    id: 926,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "The Delicate Art of Negotiation",
    location: "Toyotama",
    length: "medium",
    difficulty: "Low",
    reward: "Kenji questline finale",
    summary:
      "Back Kenji in a wildly ill-advised 'negotiation' that only he could talk his way into.",
    aiTip:
      "Kenji Tale 3 of 3.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Delicate%20Art%20of%20Negotiation%20walkthrough"
  },
  {
    id: 927,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "Ghosts in the Fog",
    location: "Toyotama",
    length: "medium",
    difficulty: "Medium",
    reward: "Norio tale progress",
    summary:
      "Fight beside Norio to free monks and villagers hidden in the fog.",
    aiTip:
      "Norio questline.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20Ghosts%20in%20the%20Fog%20walkthrough"
  },
  {
    id: 928,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "The Birth of Suffering",
    location: "Toyotama",
    length: "medium",
    difficulty: "Medium",
    reward: "Norio tale progress",
    summary:
      "Norio wrestles with the violence his cause demands.",
    aiTip:
      "Norio questline.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Birth%20of%20Suffering%20walkthrough"
  },
  {
    id: 929,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Toyotama",
    title: "The Blood Sutra",
    location: "Toyotama",
    length: "medium",
    difficulty: "High",
    reward: "Norio tale progress",
    summary:
      "Recover a blood-stained sutra and confront what Norio is becoming.",
    aiTip:
      "Norio questline.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Blood%20Sutra%20walkthrough"
  },
  {
    id: 930,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Kamiagata",
    title: "The Cause of Suffering",
    location: "Kamiagata",
    length: "medium",
    difficulty: "High",
    reward: "Norio tale progress",
    summary:
      "Trace the root of the suffering plaguing Kamiagata's faithful.",
    aiTip:
      "Norio questline.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Cause%20of%20Suffering%20walkthrough"
  },
  {
    id: 931,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Kamiagata",
    title: "The End of Suffering",
    location: "Kamiagata",
    length: "medium",
    difficulty: "High",
    reward: "Norio tale progress",
    summary:
      "Help Norio bring an end to a cycle of vengeance and grief.",
    aiTip:
      "Norio questline.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20End%20of%20Suffering%20walkthrough"
  },
  {
    id: 932,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Kamiagata",
    title: "The Guardian of Tsushima",
    location: "Kamiagata",
    length: "long",
    difficulty: "High",
    reward: "Norio tale progress",
    summary:
      "Stand with Norio as the guardian the island's people need.",
    aiTip:
      "Norio Tale 8 of 9.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Guardian%20of%20Tsushima%20walkthrough"
  },
  {
    id: 933,
    type: "side",
    category: "Tales of Tsushima",
    game: "Ghost of Tsushima",
    region: "Kamiagata",
    title: "This Threefold World",
    location: "Kamiagata",
    length: "long",
    difficulty: "High",
    reward: "Warrior Monk trophy",
    summary:
      "Bring Norio's story to its close in a final reckoning of faith and blood.",
    aiTip:
      "Completes the Warrior Monk.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20This%20Threefold%20World%20walkthrough"
  },
  {
    id: 934,
    type: "side",
    category: "Mythic Tales",
    game: "Ghost of Tsushima",
    region: "Iki Island",
    title: "The Legacy of Kazumasa Sakai",
    location: "Iki Island",
    length: "long",
    difficulty: "High",
    reward: "Sakai armor dye, Mythic reward",
    summary:
      "Uncover the legend of Jin's father, Kazumasa Sakai, in this Iki Island Mythic Tale.",
    aiTip:
      "Iki Mythic Tale — follow the musician's song, then win the final duel.",
    video: "https://www.youtube.com/results?search_query=Ghost%20of%20Tsushima%20The%20Legacy%20of%20Kazumasa%20Sakai%20walkthrough"
  },
  {
    id: 935,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Find the Missing Shipment",
    location: "Risen Road / Waukeen's Rest",
    length: "medium",
    difficulty: "Medium",
    reward: "Zhentarim allies, gear",
    summary:
      "Track down the Zhentarim's stolen shipment and decide whether to side with the smugglers.",
    aiTip:
      "Leads into The Risen Road; talk your way past the Zhent guards or fight through.",
    walkthrough: [
      "Speak with the Zhentarim contact about their lost caravan.",
      "Search the Risen Road for the ambushed shipment.",
      "Find the hidden Zhentarim basement beneath the toll house waypoint.",
      "Use the password or fight your way in.",
      "Locate the stolen goods within the hideout.",
      "Return the shipment or claim it for a reward."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20the%20Missing%20Shipment%20walkthrough"
  },
  {
    id: 936,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Rescue the Gnome",
    location: "Blighted Village Windmill",
    length: "medium",
    difficulty: "Low",
    reward: "Barcus Wroot ally",
    summary:
      "Free the deep gnome Barcus Wroot from the windmill's sails before the goblins finish him off.",
    aiTip:
      "Turn the windmill brake inside first, then interact with the sails to save him.",
    walkthrough: [
      "Reach the goblin camp and spot the deep gnome Barcus Wroot tied to a windmill sail.",
      "Climb to the windmill's mechanism inside.",
      "Stop the sails (or pass a check) so Barcus isn't flung off.",
      "Cut Barcus loose safely.",
      "Fend off any goblins who attack.",
      "Send Barcus on his way — he reappears later in the Underdark."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Rescue%20the%20Gnome%20walkthrough"
  },
  {
    id: 937,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Investigate Kagha",
    location: "Emerald Grove",
    length: "medium",
    difficulty: "Medium",
    reward: "Grove politics, tiefling fate",
    summary:
      "Uncover druid Kagha's secret dealings with the Shadow Druids that threaten the tiefling refugees.",
    aiTip:
      "Read the letter in the Grove and confront Kagha to change the Grove's outcome.",
    walkthrough: [
      "Notice Kagha's harsh treatment of the tieflings in the Emerald Grove.",
      "Search the grove for evidence of her secret dealings.",
      "Read the letter revealing her ties to the Shadow Druids.",
      "Confront Kagha with the proof in front of the circle.",
      "Expose or spare her depending on your approach.",
      "Resolve the grove's leadership crisis."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Investigate%20Kagha%20walkthrough"
  },
  {
    id: 938,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Finish the Masterwork Weapon",
    location: "Nautiloid Crash / Blighted Village",
    length: "medium",
    difficulty: "Medium",
    reward: "Masterwork weapon",
    summary:
      "Help the smith complete a masterwork weapon by recovering the sundered fragments.",
    aiTip:
      "Bring the missing pieces to the forge; ties into the Adamantine Forge questline.",
    walkthrough: [
      "Talk to the smith about the unfinished masterwork weapon.",
      "Learn you need the Sussur Bark from the Underdark's Arcane Tower.",
      "Travel to the glowing Sussur Tree and harvest the bark (magic is nullified nearby).",
      "Return the Sussur Bloom/Bark to the forge.",
      "Complete the weapon at the Grymforge or smithy.",
      "Claim the finished anti-magic weapon."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Finish%20the%20Masterwork%20Weapon%20walkthrough"
  },
  {
    id: 939,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "The Risen Road",
    location: "Risen Road",
    length: "medium",
    difficulty: "High",
    reward: "Gear, Gut/paladins outcome",
    summary:
      "Brave the Risen Road and its warring factions — paladins of Tyr, a hidden fiend, and Zhentarim smugglers.",
    aiTip:
      "Watch for the fiend disguised among the survivors; approach the toll bridge carefully.",
    walkthrough: [
      "Head east along the Risen Road from the Blighted Village.",
      "Deal with the paladins of Tyr and the disguised cultists (Hunt the Devil).",
      "Clear the burning toll house and the gnolls in the area.",
      "Rescue any survivors trapped inside.",
      "Explore the Zhentarim hideout hidden nearby.",
      "Secure the road and its loot before moving on."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20The%20Risen%20Road%20walkthrough"
  },
  {
    id: 940,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Find the Missing Boots",
    location: "Last Light Inn",
    length: "medium",
    difficulty: "Low",
    reward: "Gear, minor reward",
    summary:
      "Recover a pair of missing boots for a distraught patron at the Last Light Inn.",
    aiTip:
      "A quick fetch quest around the inn and its surrounds.",
    walkthrough: [
      "Meet the shoe-obsessed NPC at the Last Light Inn asking after special boots.",
      "Search the Shadow-Cursed Lands for the missing footwear.",
      "Check the shadow-cursed corpses and hidden stashes.",
      "Recover the boots.",
      "Return them to the owner.",
      "Collect your reward."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20the%20Missing%20Boots%20walkthrough"
  },
  {
    id: 941,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Save Vanra",
    location: "Lower City / Old Garlow's Place",
    length: "medium",
    difficulty: "Medium",
    reward: "Vanra rescued, hag loot",
    summary:
      "Rescue the girl Vanra from a hag preying on the mothers of the Lower City.",
    aiTip:
      "Another Auntie Ethel-style hag fight — bring anti-charm options and save first.",
    walkthrough: [
      "Meet the distraught mother at the Baldur's Gate market whose daughter Vanra is taken.",
      "Learn the hag Auntie Ethel is behind the abduction.",
      "Track Ethel to her lair beneath the city (the riverside/sewer entrance).",
      "Navigate the illusions and swallow trap inside the hag's lair.",
      "Defeat Ethel and free Vanra from her clutches (or from being swallowed).",
      "Return Vanra to her mother."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Save%20Vanra%20walkthrough"
  },
  {
    id: 942,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Explore the Ruins",
    location: "Nautiloid Crash / Dank Crypt",
    length: "medium",
    difficulty: "Medium",
    reward: "Gear, Withers unlocked",
    summary:
      "Delve the overgrown ruins near the crash site and the crypt below to face a hooded skeleton and claim its secrets.",
    aiTip:
      "Persuade or fight the adventurers at the door; the Dank Crypt's sarcophagus reveals Withers.",
    walkthrough: [
      "From the Ravaged Beach, head up to the Dank Crypt / overgrown ruins.",
      "Deal with the adventurers arguing outside over buried treasure.",
      "Enter the ruins and search for the hidden crypt below.",
      "Disarm the trapped sarcophagus room.",
      "Defeat or avoid the awakened skeletons and Withers' guardians.",
      "Loot the crypt and awaken Withers, who joins your camp."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Explore%20the%20Ruins%20walkthrough"
  },
  {
    id: 943,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Search the Cellar",
    location: "Blighted Village",
    length: "medium",
    difficulty: "Medium",
    reward: "The Necromancy of Thay",
    summary:
      "Investigate the hidden cellar beneath the Blighted Village apothecary and its arcane mirror.",
    aiTip:
      "Ties into The Necromancy of Thay; answer the mirror's riddle to pass unharmed.",
    walkthrough: [
      "Find the trapdoor to the Blighted Village apothecary's cellar (or Waukeen's Rest cellar).",
      "Descend and search for hidden compartments.",
      "Watch for traps and ambushing enemies.",
      "Read the notes and letters to uncover the cellar's secret.",
      "Collect the hidden loot or quest item.",
      "Report back or continue the related questline."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Search%20the%20Cellar%20walkthrough"
  },
  {
    id: 944,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Steal the Sacred Idol",
    location: "Emerald Grove",
    length: "medium",
    difficulty: "Low",
    reward: "Idol of Silvanus, grove tension",
    summary:
      "Sneak into the druids' inner sanctum and lift the Idol of Silvanus at Mol's request.",
    aiTip:
      "Use Stealth/Invisibility; taking the idol has consequences for the grove.",
    walkthrough: [
      "Learn from Zevlor or a tiefling that the druids' Idol of Silvanus could distract them.",
      "Enter the inner sanctum where the druids perform their ritual.",
      "Sneak or turn invisible to approach the idol undetected.",
      "Pass a Sleight of Hand check to lift the idol from its pedestal.",
      "Avoid or survive the summoned guardian if you fail.",
      "Escape with the idol and deliver it as agreed."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Steal%20the%20Sacred%20Idol%20walkthrough"
  },
  {
    id: 945,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Wake Up Art Cullagh",
    location: "Last Light Inn",
    length: "medium",
    difficulty: "Low",
    reward: "Lead to Thaniel, Halsin arc",
    summary:
      "Rouse the catatonic Art Cullagh at Last Light Inn to uncover the key to lifting the shadow curse.",
    aiTip:
      "Play the flute found at the Mason's Guild by his bedside; feeds Halsin's Thaniel questline.",
    walkthrough: [
      "Find the wounded Art Cullagh unconscious in the Last Light Inn's infirmary.",
      "Speak with Halsin, who wants to reach Cullagh's mind.",
      "Search for what stirs his memory — a song tied to Thaniel.",
      "Trigger the memory to wake Cullagh briefly.",
      "Learn about Thaniel and the way to lift the Shadow Curse.",
      "This opens Halsin's path to heal the land."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Wake%20Up%20Art%20Cullagh%20walkthrough"
  },
  {
    id: 946,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Steal a Githyanki Egg",
    location: "Mountain Pass / Crèche Y'llek",
    length: "medium",
    difficulty: "High",
    reward: "Reward from Lady Esther, or Lae'zel approval",
    summary:
      "Lady Esther at the Mountain Pass asks you to steal a githyanki egg from the Hatchery deep in Crèche Y'llek. Retrieve it, then decide its fate — hand it over, keep it, or let Lae'zel raise it.",
    aiTip:
      "You need boots that resist the caustic pools in the Hatchery. Giving the egg to Lae'zel instead of Esther deepens her approval.",
    walkthrough: [
      "At Crèche Y'llek, take on the task (from Voss) to retrieve a githyanki egg.",
      "Find the incubation chamber deep in the crèche.",
      "Pass the guards using stealth, disguise, or distraction.",
      "Sleight of Hand the egg from its nest without raising the alarm.",
      "Slip back out of the chamber.",
      "Deliver the egg to complete the covert task."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Steal%20a%20Githyanki%20Egg%20walkthrough"
  },
  {
    id: 947,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Punish the Wicked",
    location: "Ruined Battlefield (Shadow-Cursed Lands)",
    length: "medium",
    difficulty: "Medium",
    reward: "Spirit's blessing",
    summary:
      "Speak with the tormented spirit He Who Was on the Ruined Battlefield and avenge him by hunting down the paladins of Tyr who broke their oath and became the Shadow-Cursed dead.",
    aiTip:
      "The oathbreaker paladins are scattered across Act 2 — finish them before you leave the Shadow-Cursed Lands or the spirit's vengeance goes uncompleted.",
    walkthrough: [
      "Accept the Selûnite/Harper task to bring justice to a shadow-cursed wrongdoer.",
      "Investigate the target's crimes in the Shadow-Cursed Lands.",
      "Track them to their hiding place near Moonrise or the ruined village.",
      "Confront the guilty party.",
      "Deliver punishment or show mercy per your judgment.",
      "Report the outcome to complete the quest."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Punish%20the%20Wicked%20walkthrough"
  },
  {
    id: 948,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Free Counsellor Florrick",
    location: "Wyrm's Rock Fortress",
    length: "medium",
    difficulty: "Medium",
    reward: "Ally at the final battle",
    summary:
      "An execution notice in the Lower City reveals Counsellor Florrick is imprisoned deep within Wyrm's Rock. Break her out before Gortash carries out the sentence.",
    aiTip:
      "Time-sensitive — she must be freed within about five long rests. A cultist disguise or the Wyrm's Rock sewers ease the approach.",
    walkthrough: [
      "Learn that Counsellor Florrick is imprisoned at Wyrm's Rock Fortress.",
      "Gain entry to the fortress (invitation or infiltration).",
      "Find Florrick held in the prison cells.",
      "Persuade the guards or fight to reach her cell.",
      "Free Florrick before her scheduled execution.",
      "Escort her to safety to earn an ally."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Free%20Counsellor%20Florrick%20walkthrough"
  },
  {
    id: 949,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Find the Missing Letters",
    location: "Baldur's Gate — Lower City",
    length: "short",
    difficulty: "Low",
    reward: "Gold and sundry rewards",
    summary:
      "Postmaster Danzo's carrier pigeons have scattered across the city with their letters undelivered. Recover the lost mail in a quirky citywide errand.",
    aiTip:
      "The pigeons perch on rooftops and ledges around the Lower City — Feather Fall, jump, or a fly spell make reaching them painless.",
    walkthrough: [
      "Take the task from the Zhentarim/Guild about intercepted correspondence.",
      "Search the Lower City for the missing letters.",
      "Check couriers, hidden stashes, and the Counting House.",
      "Recover all the letters.",
      "Read them for blackmail material or leads.",
      "Return them to your employer for the reward."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20the%20Missing%20Letters%20walkthrough"
  },
  {
    id: 950,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Deal with the Gnomes",
    location: "Rivington — Falcäo's Checkpoint",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, or gnomish allies",
    summary:
      "Manip Falcäo hires you to wipe out the gnomes raiding his checkpoint and bring back their leader's head — though the Ironhand gnomes' side of the story may change your mind.",
    aiTip:
      "You can side with Falcäo or the gnomes; the Ironhand gnomes tie into the Steel Watch and Gondian questlines, so weigh the bigger picture before striking.",
    walkthrough: [
      "Meet the Ironhand gnomes who want revenge on Gortash for enslaving them.",
      "Coordinate with Wulbren and the Underduke on a plan.",
      "Retrieve the runepowder needed for sabotage.",
      "Decide whether to back Wulbren's aggressive plan or restrain him.",
      "Help strike at the Steel Watch Foundry.",
      "Resolve the gnomes' fate based on your guidance."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Deal%20with%20the%20Gnomes%20walkthrough"
  },
  {
    id: 951,
    type: "side",
    game: "God of War Ragnarök",
    region: "Alfheim",
    title: "Song of the Sands",
    location: "The Forbidden Sands, Alfheim",
    length: "long",
    difficulty: "Medium",
    reward: "Hardened Svartalfheim Steel, Sand-swept loot, XP",
    summary:
      "Deep in Alfheim's Forbidden Sands, giant sand-whales called Hafgufa lie trapped beneath the dunes. Kratos must solve the red-vine sand-flow puzzles to raise and lower the seas of sand and free every Hafgufa so their song can be heard again.",
    aiTip:
      "Hit the red sap-vine growths to drain or flood each basin of sand, then climb the exposed structures. Free all of the Hafgufas to finish the favor and open the path to Song of the Sands' loot.",
    video: "https://www.youtube.com/watch?v=182xIugReiM"
  },
  {
    id: 952,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Animal Instincts",
    location: "Raider Hideouts, Lake of Nine, Midgard",
    length: "long",
    difficulty: "Medium",
    reward: "Besties Trophy, Kol raider loot, XP",
    summary:
      "Sindri asks Kratos to clear the Kol Raider hideouts that have sprung up around the Lake of Nine. Work through every camp and finally defeat their leader, Oluf Nautson, to break the raiders' grip on Midgard.",
    aiTip:
      "The camps unlock as the lake water level drops during the story, so return to Midgard mid/late-game. Save Oluf Nautson's camp for last — he is a tougher fight than the rank-and-file raiders.",
    video: "https://www.youtube.com/watch?v=gjn2zni1ArY"
  },
  {
    id: 953,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "A Stag for All Seasons",
    location: "The Crater, Vanaheim",
    length: "medium",
    difficulty: "Medium",
    reward: "Pure of Hart Trophy, seasonal loot, XP",
    summary:
      "Ratatoskr sends Kratos to find four mystical Stags of the Seasons hidden throughout Vanaheim's Crater. Each stag is tied to a season and must be tracked down and freed.",
    aiTip:
      "You can only reach the Crater after the Scent of Survival favor opens it. Use Spartan Rage to break the roots binding each stag; finding all four earns the Pure of Hart trophy.",
    video: "https://www.youtube.com/watch?v=v6dCmR0ALw4"
  },
  {
    id: 954,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "Nocturnal Predator",
    location: "The Plains, Vanaheim",
    length: "medium",
    difficulty: "Medium",
    reward: "Sigil Plate, Flame Phantom loot, XP",
    summary:
      "A night-only favor on Vanaheim's Plains. Capture the three roaming Wisps with the Blades of Chaos, then face the Flame Phantom boss that guards the sealed plate.",
    aiTip:
      "Change the time to night at a Celestial Altar first, or the Wisps will not appear. Aim the Blades of Chaos (L2 + R2) to pin each Wisp, then keep your distance and dodge during the fire-based Flame Phantom fight.",
    video: "https://www.youtube.com/watch?v=0xC1RQX85Qo"
  },
  {
    id: 955,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "Casualty of War: The Scroll",
    location: "The Plains, Vanaheim",
    length: "short",
    difficulty: "Low",
    reward: "Spirit's gratitude, loot, XP",
    summary:
      "One of the Casualties of War favor chain. Picking up half of a burnt scroll in a cave on The Plains summons a spirit; find the matching half to make the spirit whole and learn more about the battle between Faye and Thor.",
    aiTip:
      "Smash the cracked rocks nearby to reach the cave, then follow the marker to the second scroll half. This chain also includes the Toy, Hourglass, Stein and Brooch — do them together while you sweep The Plains.",
    video: "https://www.youtube.com/watch?v=641Y-tmjE0I"
  },
  {
    id: 956,
    type: "side",
    game: "God of War Ragnarök",
    region: "Vanaheim",
    title: "Casualty of War: The Brooch",
    location: "The Plains, Vanaheim",
    length: "short",
    difficulty: "Medium",
    reward: "Spirit's gratitude, loot, XP",
    summary:
      "Another Casualties of War favor. A broken brooch on The Plains summons a spirit who wants to be made whole. The second half sits across a gap south of the Eastern Plains Celestial Altar, guarded by Egil the Oath Guard.",
    aiTip:
      "Defeat Egil the Oath Guard — a mini-boss — before you can grab the brooch half. Bring healing; he hits hard for an optional encounter.",
    video: "https://www.youtube.com/watch?v=xKukCdtgelM"
  },
  {
    id: 957,
    type: "side",
    game: "God of War Ragnarök",
    region: "Muspelheim",
    title: "The Final Challenges",
    location: "The Crucible, Muspelheim",
    length: "long",
    difficulty: "High",
    reward: "Chaos/Frozen Flames, cosmetic armor, XP",
    summary:
      "After completing The Crucible, a second, much harder set of six combat trials unlocks in Muspelheim — a true endgame boss-rush and survival gauntlet that tests every skill Kratos has learned.",
    aiTip:
      "Come back late or post-game with upgraded gear and a Realm Shift/relic setup. Each of the six challenges rewards Muspelheim ore and cosmetics; the boss-rush trial is the toughest optional fight before the Berserkers and Gná.",
    video: "https://www.youtube.com/watch?v=dqYmv1KA1H0"
  },
  {
    id: 958,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Across the Realms",
    location: "Sindri's House / multiple realms",
    length: "medium",
    difficulty: "Low",
    reward: "Rare crafting ingredients, XP",
    summary:
      "Lunda asks Kratos to gather four rare cooking ingredients scattered across the Nine Realms for a special feast. A light, exploration-focused favor that rewards realm traversal.",
    aiTip:
      "The ingredients (Eternal Campfire, Nordic Gourd, Prongfruit, Elven Cap, Bantam Melon) are marked once you have the traversal tools. Do it late so every realm is fully accessible and you can grab them in one loop.",
    video: "https://www.youtube.com/watch?v=M-frWdmibHs"
  },
  {
    id: 959,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "The Last Remnants of Asgard",
    location: "Post-game / multiple realms",
    length: "long",
    difficulty: "Medium",
    reward: "Fortified & Tempered Remnants, lore scrolls, XP",
    summary:
      "A post-game favor unlocked after The Realms at War. Ten wreckages of Asgard now litter the realms, each guarded by Einherjar. Track them all down and clear the guardians to loot the fallen kingdom's remains.",
    aiTip:
      "Locations are roughly noted in the Goals menu and marked on the map. Each site drops a lore scroll plus Fortified/Tempered Remnants used for top-tier armor upgrades — worth doing before the hardest post-game bosses.",
    video: "https://www.youtube.com/watch?v=qNkb-BU04WM"
  },
  {
    id: 960,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Hel to Pay",
    location: "Hel-Tears / multiple realms",
    length: "long",
    difficulty: "Medium",
    reward: "Rare enchantments, loot, XP",
    summary:
      "Six Hel-Tears have torn open across the realms, spilling out undead. Closing the first one begins the favor; seal all six, defeating the increasingly dangerous Draugr and Wraiths that pour from each.",
    aiTip:
      "Each Hel-Tear scales up in difficulty. Bring resurrection stones for the later ones and clear the surrounding enemies before channeling to close the rift, or you will be interrupted.",
    video: "https://www.youtube.com/watch?v=bHT3DbsrwTI"
  },
  {
    id: 961,
    type: "side",
    game: "God of War Ragnarök",
    region: "Midgard",
    title: "Born From Fire",
    location: "Draugr Holes / multiple realms",
    length: "long",
    difficulty: "High",
    reward: "The Hateful loot, rare crafting mats, XP",
    summary:
      "Six Draugr Holes have opened across the realms, each belching out endless undead. Close all six and defeat the recurring Draugr boss, The Hateful, that guards the source.",
    aiTip:
      "The Hateful is a repeated, aggressive fight — learn its unblockable tells and use ranged Blades attacks to whittle it down. Closing every Draugr Hole is required for full realm completion.",
    video: "https://www.youtube.com/watch?v=mhUSLQwhsJ4"
  },
  {
    id: 962,
    type: "main",
    category: "Main Story",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Rescue the Illithid's Captive",
    location: "Nautiloid / Ravaged Beach",
    length: "short",
    difficulty: "Low",
    reward: "Frees a potential companion (Shadowheart)",
    summary: "One of the captives aboard the crashing nautiloid is trapped in a mind flayer pod. Reach the console and release her before the ship is destroyed.",
    aiTip: "You need Intelligence or the right rune — grab the Eldritch Rune nearby if the console resists you.",
    walkthrough: [
      "On the nautiloid, fight through the cambions and intellect devourers toward the transponder room.",
      "Find the pod holding the captive and interact with the nearby console.",
      "If the console fails, pick up the Eldritch Rune from the dead mind flayer and use it to power the console.",
      "Free the captive; she can later be recruited on the beach.",
      "Reach the helm and grab the transponder to trigger the crash.",
      "Wake on the Ravaged Beach and look for the freed captive among the wreckage."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Rescue%20the%20Illithid's%20Captive%20walkthrough"
  },
  {
    id: 963,
    type: "main",
    category: "Main Story",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Find a Cure",
    location: "Wilderness (Act 1)",
    length: "long",
    difficulty: "Medium",
    reward: "Progresses the main story; multiple leads",
    summary: "The tadpole in your brain will turn you into a mind flayer. Chase down every lead — druids, hags, githyanki, and a mysterious deep gnome — for a way to remove it.",
    aiTip: "This is the umbrella Act 1 goal; pursue several leads at once since some conflict with each other.",
    walkthrough: [
      "Speak to survivors on the beach and follow rumors of a healer at the nearby Druid Grove.",
      "Investigate each cure lead: Healer Nettie, Auntie Ethel, the Githyanki Crèche, and Omeluum.",
      "Weigh the risks — Ethel and Vlaakith both offer dangerous 'cures'.",
      "Keep exploring; the true nature of the tadpole is revealed as the act progresses.",
      "Reach the Mountain Pass or the Underdark to continue the search.",
      "No safe cure appears in Act 1 — the goal carries into Act 2."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20a%20Cure%20walkthrough"
  },
  {
    id: 964,
    type: "main",
    category: "Main Story",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Ask the Goblin Priestess for Help",
    location: "Goblin Camp / Shattered Sanctum",
    length: "medium",
    difficulty: "Medium",
    reward: "A possible (deceptive) tadpole lead",
    summary: "Priestess Gut in the goblin camp claims she can remove your parasite. Follow her into her private chambers to see if her offer is genuine.",
    aiTip: "Her 'ritual' is a trap — go in prepared to fight, or knock her out to interrogate her.",
    walkthrough: [
      "Enter the Shattered Sanctum beneath the goblin camp, avoiding or passing the goblin guards.",
      "Find Priestess Gut and accept her offer to look at your tadpole.",
      "Follow her to her private room; she will try to knock you unconscious.",
      "Break free (or wake up) and confront her about the deception.",
      "Defeat or subdue Gut — she is one of the three goblin leaders.",
      "Loot her key and quarters before leaving."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Ask%20the%20Goblin%20Priestess%20for%20Help%20walkthrough"
  },
  {
    id: 965,
    type: "main",
    category: "Main Story",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Find the Githyanki Crèche",
    location: "Mountain Pass / Crèche Y'llek",
    length: "long",
    difficulty: "High",
    reward: "A githyanki cure lead; Lae'zel's arc",
    summary: "Lae'zel insists her people's crèche can cure the tadpole. Travel through the Mountain Pass to Crèche Y'llek and seek out the zaith'isk healing machine.",
    aiTip: "The zaith'isk is dangerous — a failed roll can hurt you, and the crèche turns hostile easily.",
    walkthrough: [
      "Take the Mountain Pass route north out of the starting region.",
      "Reach Crèche Y'llek and speak with the githyanki, keeping Lae'zel in your party.",
      "Find the infirmary and sit in the zaith'isk to test the 'cure'.",
      "Survive the machine; it does not remove the tadpole.",
      "Investigate the crèche's secrets — the Astral Prism and the truth about Vlaakith.",
      "Decide whether to leave peacefully or fight your way out with the Blood of Lathander."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20the%20Githyanki%20Cr%C3%A8che%20walkthrough"
  },
  {
    id: 966,
    type: "main",
    category: "Main Story",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Get Help from Auntie Ethel",
    location: "Riverside Teahouse / Sunlit Wetlands",
    length: "medium",
    difficulty: "Medium",
    reward: "A hag's bargain for the tadpole",
    summary: "The kindly 'Auntie Ethel' offers to remove your parasite — for a price. Find her teahouse in the wetlands and hear her terms.",
    aiTip: "Ethel is a green hag; her cure costs an eye. Refuse and you will have to fight her in the Overgrown Tunnel.",
    walkthrough: [
      "Travel to the Sunlit Wetlands and find Auntie Ethel's riverside teahouse.",
      "Ask her about curing the tadpole; she demands one of your eyes.",
      "Refuse the bargain to reveal her true hag form.",
      "Chase her into the Overgrown Tunnel below.",
      "Fight through her illusions and masked victims to reach Ethel herself.",
      "Defeat her (optionally sparing Mayrina's fate) to end the threat."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Get%20Help%20from%20Auntie%20Ethel%20walkthrough"
  },
  {
    id: 967,
    type: "main",
    category: "Main Story",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Get Help from Healer Nettie",
    location: "Emerald Grove / Apothecary",
    length: "short",
    difficulty: "Low",
    reward: "Early tadpole information",
    summary: "Nettie, the druids' apothecary in the Emerald Grove, has treated a tadpole victim before. Speak with her about your infection.",
    aiTip: "She may offer you poison as a 'mercy' — you can pass Charisma checks to defuse the standoff without violence.",
    walkthrough: [
      "Enter the Emerald Grove and find the apothecary at the back.",
      "Speak to Nettie and mention your tadpole.",
      "She shows you a paralyzed victim and offers a grim option.",
      "Pass the dialogue checks to calm her and avoid drinking the poison.",
      "Learn what she knows about the parasite and Halsin.",
      "Leave with the lead to find Halsin, the archdruid."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Get%20Help%20from%20Healer%20Nettie%20walkthrough"
  },
  {
    id: 968,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Free Lae'zel",
    location: "Risen Road / Tiefling Cage",
    length: "short",
    difficulty: "Low",
    reward: "Recruits Lae'zel as a companion",
    summary: "A captured githyanki hangs in a cage strung up by tiefling refugees. Decide how to get her down and recruit her.",
    aiTip: "You can persuade the tieflings, cut the cage rope, or fight — dropping the cage frees her fastest.",
    walkthrough: [
      "Head up the cliff path north of the crash site to find the caged githyanki.",
      "Talk to the two tieflings guarding her.",
      "Choose to persuade them, attack the cage's rope, or side with the tieflings.",
      "Free Lae'zel from the cage.",
      "Agree to help her find a crèche to recruit her to your party.",
      "She will now offer guidance toward Crèche Y'llek."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Free%20Lae'zel%20walkthrough"
  },
  {
    id: 969,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Hunt the Devil",
    location: "Risen Road / Toll House",
    length: "medium",
    difficulty: "Medium",
    reward: "Karlach's introduction; XP and loot",
    summary: "A group of Paladins of Tyr are hunting a 'devil' on the Risen Road. That devil is Karlach — decide whom to believe.",
    aiTip: "The paladins are actually Zariel's cultists; siding with Karlach is the good outcome and recruits her.",
    walkthrough: [
      "Travel the Risen Road and meet the wounded paladins hunting a devil.",
      "Continue on to find Karlach cooling off at a stream.",
      "Hear her side — she is an escaped hellrider, not a monster.",
      "Return to the paladins and confront the truth about their order.",
      "Fight the disguised cultists alongside Karlach.",
      "Recruit Karlach and agree to help fix her infernal engine."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Hunt%20the%20Devil%20walkthrough"
  },
  {
    id: 970,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Rescue the Trapped Man",
    location: "Blighted Village / Whispering Depths",
    length: "short",
    difficulty: "Low",
    reward: "Loot; a minor NPC",
    summary: "A frightened man is trapped and calling for help near the Blighted Village. Investigate before rushing in — not everything is as it seems.",
    aiTip: "Check for traps and ambushes; some 'trapped' NPCs are bait for gnolls or ambushers.",
    walkthrough: [
      "Follow the cries for help near the Blighted Village outskirts.",
      "Approach carefully and inspect the surroundings for an ambush.",
      "Free the trapped man or dispatch the threat menacing him.",
      "Question him about how he ended up here.",
      "Deal with any gnolls or bandits that appear.",
      "Collect any reward or loot and move on."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Rescue%20the%20Trapped%20Man%20walkthrough"
  },
  {
    id: 971,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Find Doni",
    location: "Emerald Grove / Hidden Cave",
    length: "short",
    difficulty: "Low",
    reward: "Grove refugee side content",
    summary: "A tiefling woman is worried about a missing child named Doni who ran off into a hidden cave in the grove.",
    aiTip: "Doni is hiding down a trapdoor — use a gentle, non-threatening dialogue approach with the child.",
    walkthrough: [
      "Speak to the anxious refugee in the Emerald Grove about the missing boy.",
      "Search the grove for a concealed trapdoor.",
      "Descend into the hidden cave to find Doni.",
      "Reassure the frightened child with a calm dialogue choice.",
      "Guide him back toward the surface.",
      "Report to the refugee that Doni is safe."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20Doni%20walkthrough"
  },
  {
    id: 972,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Find Your Belongings",
    location: "Emerald Grove / Zevlor's Camp",
    length: "short",
    difficulty: "Low",
    reward: "Recovers stolen goods",
    summary: "After the crash, some of your belongings have gone missing among the refugees. Track down the thief in the grove.",
    aiTip: "A pickpocketing tiefling child is often the culprit — persuade or intimidate rather than kill.",
    walkthrough: [
      "Notice missing items and ask around the refugee camp.",
      "Follow the clues to a young tiefling pickpocket.",
      "Confront the thief with persuasion or intimidation.",
      "Recover your stolen belongings.",
      "Decide whether to report or forgive the child.",
      "Return to your business in the grove."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20Your%20Belongings%20walkthrough"
  },
  {
    id: 973,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Investigate the Beach",
    location: "Ravaged Beach",
    length: "short",
    difficulty: "Low",
    reward: "Early companions and loot",
    summary: "The wreckage of the nautiloid is strewn across the beach. Search it for survivors and salvage before heading inland.",
    aiTip: "Several recruitable companions and useful early gear are found here — sweep the whole shoreline.",
    walkthrough: [
      "Wake on the Ravaged Beach after the crash.",
      "Search the wreckage for survivors trapped in the debris.",
      "Free or recruit any companions you find (Shadowheart, Us).",
      "Loot crates and corpses for early equipment.",
      "Note the path inland toward the Druid Grove.",
      "Head off the beach once you've searched it thoroughly."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Investigate%20the%20Beach%20walkthrough"
  },
  {
    id: 974,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Rescue Volo",
    location: "Goblin Camp",
    length: "medium",
    difficulty: "Medium",
    reward: "Recruits Volo; later grants a special 'surgery'",
    summary: "The bard Volothamp Geddarm has been captured by the goblins and locked in a pen. Free him from the camp.",
    aiTip: "Volo later offers to 'treat' your tadpole with an ice pick — the outcome grants the Ersatz Eye.",
    walkthrough: [
      "Enter the goblin camp and locate Volo's cage near the ruined chapel.",
      "Distract or defeat the goblin guarding him.",
      "Pick the lock or persuade the guard to free Volo.",
      "Send him back to your camp.",
      "Later, let him attempt his eye 'surgery' if you wish.",
      "Receive the Ersatz Eye as a reward for surviving it."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Rescue%20Volo%20walkthrough"
  },
  {
    id: 975,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Return the Locket",
    location: "Blighted Village",
    length: "short",
    difficulty: "Low",
    reward: "Minor reward; roleplay",
    summary: "A locket found in the Blighted Village belongs to someone who lost it. Return it to its rightful owner.",
    aiTip: "Read the locket's inscription for a clue to the owner's identity.",
    walkthrough: [
      "Find the locket while looting the Blighted Village.",
      "Inspect it for an inscription or portrait.",
      "Identify the owner among nearby NPCs or refugees.",
      "Return the locket to them.",
      "Choose whether to ask for a reward.",
      "Complete the small act of kindness."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Return%20the%20Locket%20walkthrough"
  },
  {
    id: 976,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Save Arabella",
    location: "Emerald Grove / Sacred Pool",
    length: "short",
    difficulty: "Medium",
    reward: "Druid and tiefling relations",
    summary: "The tiefling child Arabella is caught stealing from the druids and Kagha threatens her life with a serpent. Intervene to save her.",
    aiTip: "Persuasion or intimidation can talk Kagha down; failing the check means acting fast before the snake strikes.",
    walkthrough: [
      "Enter the inner sanctum of the Emerald Grove during the confrontation.",
      "Find Kagha threatening Arabella with her serpent Teela.",
      "Step in and pass a Persuasion or Intimidation check.",
      "If talks fail, be ready to kill the snake before it bites.",
      "Free Arabella and return her to her parents.",
      "Note the tension this reveals within the druid circle."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Save%20Arabella%20walkthrough"
  },
  {
    id: 977,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Save the Goblin Sazza",
    location: "Emerald Grove / Goblin Camp",
    length: "short",
    difficulty: "Medium",
    reward: "A route into the goblin camp",
    summary: "A captured goblin, Sazza, is imprisoned in the Druid Grove. Freeing her earns safe passage into the goblin camp.",
    aiTip: "Escorting her out requires avoiding the druids — the back tunnel by the sluice gate is safest.",
    walkthrough: [
      "Find Sazza locked in a cell within the Emerald Grove.",
      "Decide to free her for a way into the goblin camp.",
      "Guide her out through the side tunnel to avoid the druids.",
      "Fight or sneak past any druids who spot you.",
      "See Sazza safely out of the grove.",
      "She will vouch for you at the goblin camp gate."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Save%20the%20Goblin%20Sazza%20walkthrough"
  },
  {
    id: 978,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Avenge Sovereign Glut",
    location: "Underdark / Myconid Colony",
    length: "medium",
    difficulty: "Medium",
    reward: "A myconid ally; Underdark progression",
    summary: "The myconid Glut wants revenge on the duergar who slew his sovereign. Help him — but beware his true intentions.",
    aiTip: "Glut may turn on your other myconid allies; decide whose side you value more.",
    walkthrough: [
      "Meet Glut in the Underdark's myconid colony.",
      "Agree to help him avenge Sovereign Spaw's killers.",
      "Travel toward the duergar at Grymforge or the beach.",
      "Fight the duergar responsible.",
      "Watch Glut — he may ask you to betray the colony.",
      "Resolve his fate depending on your loyalties."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Avenge%20Sovereign%20Glut%20walkthrough"
  },
  {
    id: 979,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Cure the Poisoned Gnome",
    location: "Grymforge",
    length: "short",
    difficulty: "Medium",
    reward: "Saves an NPC; crafting help",
    summary: "The deep gnome Thulla is dying from Nere's poisonous gas in Grymforge. Find an antidote before she succumbs.",
    aiTip: "The cure is on a nearby duergar or crafted from Timmask spores — hurry, she's on a timer.",
    walkthrough: [
      "Find Thulla poisoned and collapsed in Grymforge.",
      "Search nearby duergar bodies for an antidote.",
      "Alternatively brew a cure from Timmask spores.",
      "Administer the antidote to Thulla quickly.",
      "Learn what she knows about Nere and the gnomes.",
      "Keep her alive as a friendly contact."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Cure%20the%20Poisoned%20Gnome%20walkthrough"
  },
  {
    id: 980,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Defeat the Duergar",
    location: "Grymforge",
    length: "medium",
    difficulty: "High",
    reward: "Clears Grymforge; loot",
    summary: "The duergar slavers control Grymforge under the Absolute's banner. Break their hold on the ancient forge.",
    aiTip: "The duergar boss Nere is trapped behind rubble — how you free (or kill) him shapes this fight.",
    walkthrough: [
      "Arrive at Grymforge and assess the duergar slavers.",
      "Deal with the collapsed tunnel trapping Nere.",
      "Choose to rescue Nere or let him die and claim his head.",
      "Fight the hostile duergar throughout the forge.",
      "Free the enslaved deep gnomes if you can.",
      "Secure the forge and its adamantine secrets."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Defeat%20the%20Duergar%20walkthrough"
  },
  {
    id: 981,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Deliver Nere's Head",
    location: "Grymforge / Zhentarim",
    length: "short",
    difficulty: "Low",
    reward: "Gold reward from the Zhentarim",
    summary: "The true soul Nere has a bounty on his head. If he dies, take his severed head to the interested party for a reward.",
    aiTip: "Both a duergar and the Zhentarim want proof of Nere's death — pick the more profitable buyer.",
    walkthrough: [
      "After Nere dies at Grymforge, sever and take his head.",
      "Decide who to deliver it to for the bounty.",
      "Travel to the buyer (a duergar or the Zhentarim hideout).",
      "Present the head as proof of the kill.",
      "Collect your reward.",
      "Note any faction consequences of the deal."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Deliver%20Nere's%20Head%20walkthrough"
  },
  {
    id: 982,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Find the Mushroom Picker",
    location: "Underdark / Arcane Tower",
    length: "short",
    difficulty: "Medium",
    reward: "Helps a merchant couple",
    summary: "The deep gnome merchant Derryth Bonecloak's husband Baelen is stranded in a field of explosive bibberbang mushrooms in the Underdark.",
    aiTip: "The bibberbang detonates in a chain — use Feather Fall or a careful path to reach Baelen safely.",
    walkthrough: [
      "Speak to Derryth Bonecloak near the Underdark beach.",
      "Head to the bibberbang mushroom field to find Baelen.",
      "Avoid triggering the explosive spores.",
      "Reach Baelen and retrieve the noblestalk if asked.",
      "Guide him back out of the field.",
      "Return to Derryth to resolve their story."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20the%20Mushroom%20Picker%20walkthrough"
  },
  {
    id: 983,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Find Explosives",
    location: "Grymforge",
    length: "short",
    difficulty: "Medium",
    reward: "Clears a blocked path",
    summary: "A pile of rubble blocks a key passage in Grymforge. Locate the runepowder or explosives needed to blast it open.",
    aiTip: "The gnome Wulbren or nearby barrels of Smokepowder can provide the blast — clear the area first.",
    walkthrough: [
      "Discover the rubble-blocked passage in Grymforge.",
      "Search the area for explosives or runepowder.",
      "Speak with the imprisoned gnomes for help.",
      "Gather Smokepowder barrels or a runepowder bomb.",
      "Place and detonate the charge from a safe distance.",
      "Advance through the cleared passage."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20Explosives%20walkthrough"
  },
  {
    id: 984,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Save the Grymforge Gnomes",
    location: "Grymforge",
    length: "medium",
    difficulty: "Medium",
    reward: "Frees enslaved gnomes; allies",
    summary: "The duergar have enslaved deep gnomes to work the forge. Free them from bondage.",
    aiTip: "Some gnomes are chained near hazards — clear the duergar before triggering the forge's lava.",
    walkthrough: [
      "Find the enslaved deep gnomes laboring in Grymforge.",
      "Overcome the duergar overseers.",
      "Free the gnomes from their chains and cages.",
      "Protect them during any ensuing fight.",
      "Direct them to safety.",
      "Earn their gratitude and possible aid later."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Save%20the%20Grymforge%20Gnomes%20walkthrough"
  },
  {
    id: 985,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Get Past the Rubble",
    location: "Grymforge / Adamantine Forge",
    length: "short",
    difficulty: "Medium",
    reward: "Opens the path to the forge",
    summary: "Collapsed rock bars the way deeper into Grymforge. Find a way through to reach the Adamantine Forge.",
    aiTip: "Explosives are the intended solution — combine this with the runepowder from the gnomes.",
    walkthrough: [
      "Reach the impassable rubble in Grymforge.",
      "Look for barrels of Smokepowder or a runepowder bomb.",
      "Position the explosives against the rubble.",
      "Detonate from cover to avoid the blast.",
      "Cross into the deeper forge chambers.",
      "Continue toward the Adamantine Forge."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Get%20Past%20the%20Rubble%20walkthrough"
  },
  {
    id: 986,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 1,
    title: "Talk to the Sentient Amulet",
    location: "Underdark / Selûnite Outpost",
    length: "short",
    difficulty: "Low",
    reward: "Lore; a quirky companion item",
    summary: "A strange amulet found in the Underdark speaks aloud. Converse with it to learn its secrets.",
    aiTip: "Wear the amulet and it will chatter — some lines hint at nearby secrets and loot.",
    walkthrough: [
      "Loot the talking amulet in the Underdark ruins.",
      "Equip it to hear it speak.",
      "Engage the amulet in conversation.",
      "Follow any hints it offers about the area.",
      "Decide whether to keep or discard the chatty item.",
      "Note the lore it reveals about the region."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Talk%20to%20the%20Sentient%20Amulet%20walkthrough"
  },
  {
    id: 987,
    type: "main",
    category: "Main Story",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Capture Isobel",
    location: "Last Light Inn",
    length: "medium",
    difficulty: "High",
    reward: "Protects the Shadow-Cursed refuge",
    summary: "Marcus and his winged horrors attack the Last Light Inn to abduct the cleric Isobel, whose ward keeps the Shadow Curse at bay.",
    aiTip: "If Isobel is taken or killed, the inn falls to the curse — protect her at all costs.",
    walkthrough: [
      "Arrive at the Last Light Inn and meet Isobel.",
      "When Marcus attacks, rush to defend her.",
      "Focus fire on Marcus before he can grab Isobel.",
      "Keep Isobel alive through the aerial assault.",
      "Drive off or kill the winged attackers.",
      "Secure the inn as a safe haven."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Capture%20Isobel%20walkthrough"
  },
  {
    id: 988,
    type: "main",
    category: "Main Story",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Find Ketheric's Relic",
    location: "Mind Flayer Colony / Moonrise",
    length: "long",
    difficulty: "High",
    reward: "Reveals Ketheric's immortality secret",
    summary: "Ketheric Thorm cannot be killed while his relic sustains him. Track it down beneath Moonrise Towers.",
    aiTip: "The relic lies deep in the Mind Flayer Colony past Balthazar — expect a nautiloid and heavy resistance.",
    walkthrough: [
      "Descend beneath Moonrise Towers toward the old temple.",
      "Work through the Mind Flayer Colony and its horrors.",
      "Confront Balthazar and the Nightsong's prison.",
      "Locate the source of Ketheric's immortality.",
      "Destroy or claim the relic to make Ketheric mortal.",
      "Return to face Ketheric with his protection broken."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20Ketheric's%20Relic%20walkthrough"
  },
  {
    id: 989,
    type: "main",
    category: "Main Story",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Follow the Convoy",
    location: "Shadow-Cursed Lands",
    length: "medium",
    difficulty: "Medium",
    reward: "Route into Moonrise Towers",
    summary: "An Absolutist convoy of caged prisoners travels toward Moonrise Towers. Track it to find a way inside.",
    aiTip: "Following the convoy leads to the Last Light Inn and the road to Moonrise — don't ambush it blindly.",
    walkthrough: [
      "Pick up the convoy's trail in the Shadow-Cursed Lands.",
      "Follow the caged prisoners along the cursed road.",
      "Avoid the shadows by keeping to lit paths.",
      "Track the convoy toward Moonrise Towers.",
      "Decide whether to intervene or observe.",
      "Use the route to reach Moonrise."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Follow%20the%20Convoy%20walkthrough"
  },
  {
    id: 990,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Resolve the Abduction",
    location: "Last Light Inn",
    length: "medium",
    difficulty: "Medium",
    reward: "Saves an abducted child (Mol)",
    summary: "The tiefling children who fled to the Last Light Inn are in danger — one, Mol, has struck a dangerous bargain.",
    aiTip: "Mol's deal with Raphael's cambion Korrilla is hard to undo; talk her out of it if you can.",
    walkthrough: [
      "Reach the Last Light Inn and check on the tiefling children.",
      "Discover Mol has made a deal with a devil's agent.",
      "Confront the cambion pressuring the children.",
      "Try to break or renegotiate the infernal bargain.",
      "Protect Mol from the consequences.",
      "Resolve the children's fate at the inn."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Resolve%20the%20Abduction%20walkthrough"
  },
  {
    id: 991,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Decide Minthara's Fate",
    location: "Moonrise Towers",
    length: "medium",
    difficulty: "High",
    reward: "Potentially recruits Minthara",
    summary: "The drow Minthara is imprisoned and tortured in Moonrise Towers. Decide whether to free her, recruit her, or leave her.",
    aiTip: "Recruiting her cleanly is tricky — freeing her without alerting the whole tower requires stealth or a fight.",
    walkthrough: [
      "Find Minthara held in the Moonrise Towers prison.",
      "Speak with her about the Absolute's control over her.",
      "Choose to free her, kill her, or leave her.",
      "If freeing her, help her break the Absolute's hold.",
      "Fight your way out if the tower turns hostile.",
      "Recruit Minthara to camp if she survives."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Decide%20Minthara's%20Fate%20walkthrough"
  },
  {
    id: 992,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Find Mol",
    location: "Last Light Inn",
    length: "short",
    difficulty: "Low",
    reward: "Tiefling refugee follow-up",
    summary: "Mol, the enterprising tiefling girl, has gone missing from the Last Light Inn. Locate her.",
    aiTip: "Mol tends to wander into trouble — check the inn's upper floors and hidden corners.",
    walkthrough: [
      "Ask the tieflings at the Last Light Inn about Mol.",
      "Search the inn and its surroundings.",
      "Find where Mol has hidden herself.",
      "Learn what trouble she's gotten into.",
      "Help her out of her predicament.",
      "Reunite her with the other refugees."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20Mol%20walkthrough"
  },
  {
    id: 993,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Find Rolan",
    location: "Last Light Inn / Moonrise",
    length: "medium",
    difficulty: "High",
    reward: "Saves the wizard Rolan",
    summary: "The wizard Rolan storms off to rescue his family at Moonrise Towers and gets in over his head. Save him before it's too late.",
    aiTip: "Rolan is on a timer and badly outmatched — reach him quickly during the Moonrise assault.",
    walkthrough: [
      "Hear that Rolan has left the inn to rescue his siblings.",
      "Track him toward Moonrise Towers.",
      "Find him cornered by Absolutist forces.",
      "Fight to save Rolan before he's killed.",
      "Help reunite him with his family.",
      "Return him safely to the Last Light Inn."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20Rolan%20walkthrough"
  },
  {
    id: 994,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Find Zevlor",
    location: "Moonrise Towers",
    length: "medium",
    difficulty: "Medium",
    reward: "Resolves the tiefling leader's arc",
    summary: "Zevlor, the tieflings' former protector, is imprisoned within Moonrise Towers under the Absolute's sway.",
    aiTip: "Zevlor is held near the Mind Flayer Colony — freeing him ties into the abducted refugees' fate.",
    walkthrough: [
      "Learn that Zevlor was taken to Moonrise Towers.",
      "Search the towers' prison levels.",
      "Find Zevlor held captive or mind-controlled.",
      "Confront him about abandoning the refugees.",
      "Free him from the Absolute's influence.",
      "Decide his role going forward."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20Zevlor%20walkthrough"
  },
  {
    id: 995,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Investigate Selûnite Resistance",
    location: "Last Light Inn / Shadowlands",
    length: "medium",
    difficulty: "Medium",
    reward: "Harper and Selûnite allies",
    summary: "The Harpers and Selûnite faithful fight a hidden war against the Shadow Curse. Uncover their resistance and lend aid.",
    aiTip: "Jaheira leads the Harpers here — supporting them strengthens your allies for the assault on Moonrise.",
    walkthrough: [
      "Speak with Jaheira and the Harpers at the Last Light Inn.",
      "Learn about the Selûnite resistance to the curse.",
      "Investigate their efforts against the shadows.",
      "Complete tasks to earn their trust.",
      "Rally the resistance for the coming battle.",
      "Secure their support against Ketheric."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Investigate%20Sel%C3%BBnite%20Resistance%20walkthrough"
  },
  {
    id: 996,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 2,
    title: "Kill Yurgir",
    location: "Gauntlet of Shar",
    length: "long",
    difficulty: "High",
    reward: "Astarion's benefit; rare loot",
    summary: "The orthon Yurgir lurks in the Gauntlet of Shar, bound by a contract from Raphael. Hunt him down.",
    aiTip: "You can persuade Yurgir to turn on his own merregons, or fight the whole warband — the social route is far easier.",
    walkthrough: [
      "Enter the Gauntlet of Shar and find the Ritual of Silence area.",
      "Track Yurgir through the shadowed halls.",
      "Optionally pass Insight/Persuasion checks to break his contract.",
      "Convince him to kill his own merregons and himself, or fight him.",
      "Defeat Yurgir and his displacer beasts if it comes to battle.",
      "Loot his rewards for Raphael's contract."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Kill%20Yurgir%20walkthrough"
  },
  {
    id: 997,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Acquire Gauntlets for Helsik",
    location: "Devil's Fee, Baldur's Gate",
    length: "short",
    difficulty: "Medium",
    reward: "Opens the ritual to the House of Hope",
    summary: "The merchant Helsik can send you to Raphael's House of Hope — if you provide the ritual components, including infernal gauntlets.",
    aiTip: "Buy or steal the required diamond, infernal iron, and other reagents from Helsik's own shop.",
    walkthrough: [
      "Visit Helsik at the Devil's Fee in the Lower City.",
      "Ask about reaching the House of Hope.",
      "Gather the ritual components she requires.",
      "Acquire the infernal gauntlets and other reagents.",
      "Return everything to Helsik.",
      "Perform the ritual to teleport into the House of Hope."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Acquire%20Gauntlets%20for%20Helsik%20walkthrough"
  },
  {
    id: 998,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Aid the Underduke",
    location: "Lower City / Ironhand Gnomes",
    length: "medium",
    difficulty: "Medium",
    reward: "Rallies the Ironhand gnomes",
    summary: "The Ironhand gnomes and their leader need help striking back at Gortash's Steel Watch. Coordinate with the Underduke.",
    aiTip: "This dovetails with destroying the Steel Watch Foundry — freeing Wulbren's gnomes gives you the runepowder plan.",
    walkthrough: [
      "Make contact with the Ironhand gnome resistance.",
      "Meet the Underduke coordinating their efforts.",
      "Agree to help sabotage Gortash's Steel Watch.",
      "Free imprisoned gnomes to bolster their numbers.",
      "Plan the assault on the Steel Watch Foundry.",
      "Deliver the blow that cripples the Watch."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Aid%20the%20Underduke%20walkthrough"
  },
  {
    id: 999,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Avenge the Hag Survivors",
    location: "Lower City / Ethel's Lair",
    length: "medium",
    difficulty: "High",
    reward: "Closes Auntie Ethel's story",
    summary: "Survivors maimed by Auntie Ethel gather in the city, seeking to end her for good. Track the hag to her final lair.",
    aiTip: "Ethel hides among illusions and doubles in her Lower City lair — an illusion-piercing approach helps.",
    walkthrough: [
      "Meet the victims scarred by Auntie Ethel.",
      "Follow their leads to Ethel's hidden lair.",
      "Navigate her illusions and false selves.",
      "Confront the hag in her true form.",
      "Defeat Ethel once and for all.",
      "Free any remaining captives and report back."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Avenge%20the%20Hag%20Survivors%20walkthrough"
  },
  {
    id: 1000,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Avenge the Ironhands",
    location: "Lower City / Steel Watch Foundry",
    length: "medium",
    difficulty: "High",
    reward: "Justice for the enslaved gnomes",
    summary: "Gortash enslaved the Ironhand gnomes to build his Steel Watch. Bring their tormentors to justice.",
    aiTip: "Freeing the Gondian and Ironhand workers first weakens the foundry's defenses for the reckoning.",
    walkthrough: [
      "Learn the fate of the enslaved Ironhand gnomes.",
      "Infiltrate the Steel Watch Foundry.",
      "Free the surviving gnome workers.",
      "Confront the overseers responsible.",
      "Destroy the Steel Watch production.",
      "Deliver justice for the Ironhands."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Avenge%20the%20Ironhands%20walkthrough"
  },
  {
    id: 1001,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Feed the Mind Flayer",
    location: "Emperor's Hideout",
    length: "short",
    difficulty: "Medium",
    reward: "Companion consequences; power boost",
    summary: "Your protector reveals it needs to feed on a thrall to stay strong. Decide whether to provide a victim — and who.",
    aiTip: "Refusing weakens your guardian's protection; the choice has major companion reactions.",
    walkthrough: [
      "Enter the Emperor's hideout and hear its request.",
      "Learn why it needs to feed on a humanoid.",
      "Weigh the moral cost against the tactical benefit.",
      "Choose whether to provide a thrall.",
      "Deal with your companions' strong reactions.",
      "Live with the consequences of your decision."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Feed%20the%20Mind%20Flayer%20walkthrough"
  },
  {
    id: 1002,
    type: "main",
    category: "Main Story",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Enter Wyrm's Rock Fortress",
    location: "Wyrm's Rock Fortress",
    length: "medium",
    difficulty: "High",
    reward: "Advances the Gortash confrontation",
    summary: "Gortash's coronation takes place in the heavily guarded Wyrm's Rock Fortress. Get inside to confront him.",
    aiTip: "You can attend the coronation peacefully or storm the gates — an ambush at the ceremony is possible either way.",
    walkthrough: [
      "Approach Wyrm's Rock Fortress in the Lower City.",
      "Choose to enter via invitation or by force.",
      "Navigate the fortress's guards and traps.",
      "Reach Gortash at his coronation.",
      "Decide to parley or fight the Chosen of Bane.",
      "Claim his Netherstone if he falls."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Enter%20Wyrm's%20Rock%20Fortress%20walkthrough"
  },
  {
    id: 1003,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Defeat Mystic Carrion",
    location: "Philgrave's Mansion, Lower City",
    length: "medium",
    difficulty: "High",
    reward: "Rare loot; frees a servant",
    summary: "The undead necromancer Mystic Carrion rules Philgrave's Mansion. His servant Thrumbo begs for freedom from his master.",
    aiTip: "Carrion revives unless you destroy his hidden Heart and organs first — search the sarcophagi before the fight.",
    walkthrough: [
      "Enter Philgrave's Mansion in the Lower City.",
      "Meet Mystic Carrion and his abused servant Thrumbo.",
      "Search the crypts for Carrion's hidden organs and Heart.",
      "Destroy the phylactery-like remains.",
      "Confront and defeat Mystic Carrion.",
      "Free Thrumbo and loot the necromancer's treasures."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Defeat%20Mystic%20Carrion%20walkthrough"
  },
  {
    id: 1004,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Find Ffion",
    location: "Lower City",
    length: "short",
    difficulty: "Low",
    reward: "Zhentarim / missing person lead",
    summary: "A missing person named Ffion is tied to the Zhentarim's troubles in the city. Track down what became of them.",
    aiTip: "Ffion's trail connects to the smuggled letters and the Guild — follow the paper trail.",
    walkthrough: [
      "Pick up the lead about the missing Ffion.",
      "Question contacts in the Lower City.",
      "Follow clues toward the Zhentarim or Guild.",
      "Discover Ffion's fate.",
      "Recover any related evidence or letters.",
      "Report your findings."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Find%20Ffion%20walkthrough"
  },
  {
    id: 1005,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Help the Cursed Monk",
    location: "Lower City",
    length: "short",
    difficulty: "Medium",
    reward: "Lifts a curse; reward",
    summary: "A monk suffers under a lingering curse and pleads for aid in breaking it.",
    aiTip: "Identifying the curse's source is key — investigate the monk's history before attempting a cure.",
    walkthrough: [
      "Meet the afflicted monk in the Lower City.",
      "Learn the nature of the curse plaguing him.",
      "Investigate its origin.",
      "Gather what's needed to break the curse.",
      "Perform or arrange the remedy.",
      "Free the monk and accept his thanks."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Help%20the%20Cursed%20Monk%20walkthrough"
  },
  {
    id: 1006,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Help the Devilish Ox",
    location: "Elfsong Tavern / Lower City",
    length: "short",
    difficulty: "Medium",
    reward: "Karlach-related; roleplay",
    summary: "A peculiar ox near the tavern is not what it seems — it's a disguised devil watching over someone dear to Karlach.",
    aiTip: "Passing perception and dialogue checks reveals the ox's true purpose; handle it gently for Karlach's sake.",
    walkthrough: [
      "Notice the odd ox loitering near the Elfsong Tavern.",
      "Inspect it and pass the checks to see through its disguise.",
      "Learn it is a devil connected to Karlach.",
      "Speak with it about its intentions.",
      "Decide how to handle the revelation.",
      "Resolve the encounter without endangering Karlach."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Help%20the%20Devilish%20Ox%20walkthrough"
  },
  {
    id: 1007,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Retrieve Omeluum",
    location: "Iron Throne / Underwater Prison",
    length: "medium",
    difficulty: "High",
    reward: "Frees the friendly mind flayer",
    summary: "Your Underdark ally Omeluum has been captured by the Society of Brilliance and held in the flooded Iron Throne prison.",
    aiTip: "The Iron Throne is on a strict timer as it floods — prioritize reaching Omeluum's cell quickly.",
    walkthrough: [
      "Learn Omeluum is imprisoned in the Iron Throne.",
      "Take the submersible down to the underwater prison.",
      "Race against the flooding timer.",
      "Reach Omeluum's cell and free the mind flayer.",
      "Escape the collapsing prison in time.",
      "Reunite with Omeluum on the surface."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Retrieve%20Omeluum%20walkthrough"
  },
  {
    id: 1008,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Return Rakath's Gold",
    location: "Counting House Vault, Lower City",
    length: "medium",
    difficulty: "High",
    reward: "Large gold reward",
    summary: "A fortune belonging to Rakath sits in the Counting House vault. Recover it — legitimately or otherwise.",
    aiTip: "The vault is trapped and guarded; a heist route via the sewers avoids the front-desk scrutiny.",
    walkthrough: [
      "Learn about Rakath's gold held in the Counting House.",
      "Gain access to the vault by key or by force.",
      "Navigate the vault's traps and guardians.",
      "Recover the gold from the deposit boxes.",
      "Decide whether to return it or keep it.",
      "Collect your reward or the loot itself."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Return%20Rakath's%20Gold%20walkthrough"
  },
  {
    id: 1009,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Stop the Presses",
    location: "Baldur's Mouth Gazette, Lower City",
    length: "short",
    difficulty: "Medium",
    reward: "Reputation; information",
    summary: "The Baldur's Mouth newspaper is printing Gortash's propaganda. Reach the printing press and change the story.",
    aiTip: "Digging up dirt on Gortash lets you run a damaging exposé instead of his approved narrative.",
    walkthrough: [
      "Enter the Baldur's Mouth Gazette offices.",
      "Investigate the propaganda being printed.",
      "Gather blackmail or evidence against Gortash.",
      "Confront the editor at the printing press.",
      "Persuade or force a change to the headline.",
      "Publish the truth to sway the city."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Stop%20the%20Presses%20walkthrough"
  },
  {
    id: 1010,
    type: "side",
    category: "Side Quest",
    game: "Baldur's Gate 3",
    act: 3,
    title: "Visit Emperor's Hideout",
    location: "Emperor's Hideout / Astral Prism",
    length: "short",
    difficulty: "Medium",
    reward: "Story revelations; romance option",
    summary: "Your dream guardian invites you to its private hideout to reveal its true identity and intentions.",
    aiTip: "The Emperor's reveal is a major turning point — your reaction shapes its trust and a possible romance.",
    walkthrough: [
      "Accept the guardian's invitation to its hideout.",
      "Enter the safe pocket within the Astral Prism.",
      "Learn the Emperor's true identity and history.",
      "Question it about its plans for the Netherbrain.",
      "Choose how to respond to its overtures.",
      "Decide how far to trust the Emperor going forward."
    ],
    video: "https://www.youtube.com/results?search_query=Baldur's%20Gate%203%20Visit%20Emperor's%20Hideout%20walkthrough"
  }

,  {
    id: 1027,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Reactors & Upper Plate",
    title: "Bombing Mission",
    location: "Sector 1 Reactor",
    length: "medium",
    difficulty: "Medium",
    reward: "Story progression, first Materia and the Guard Scorpion boss",
    summary:
      "Join Avalanche's raid on the Mako Reactor 1 in the game's explosive opening, ending in a duel with Shinra's Guard Scorpion.",
    aiTip:
      "Attack the Guard Scorpion's tail when it braces to fire its tail laser, and take cover behind rubble during its barrage phase.",
    walkthrough: [
      "Follow Barret through the Sector 1 station and into the reactor.",
      "Set the bomb at the reactor core when prompted.",
      "Fight the Guard Scorpion — target its weak points with Cloud's Braver ability.",
      "Take cover behind debris when it charges the tail laser, then punish the recovery.",
      "Escape the reactor before the timer expires."
    ],
    video: "https://www.youtube.com/watch?v=6rMTj-wMT3Q"
  },
  {
    id: 1028,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Reactors & Upper Plate",
    title: "Escape from the Reactor",
    location: "Sector 8",
    length: "short",
    difficulty: "Low",
    reward: "Story progression, Aerith encounter",
    summary:
      "Flee the collapsing Sector 8 after the bombing and meet the flower girl Aerith amid the chaos.",
    aiTip:
      "There's no combat pressure here — explore Sector 8 for items and enjoy the set-piece before regrouping with Avalanche.",
    walkthrough: [
      "Escape the reactor blast and reach the Sector 8 streets.",
      "Speak with Aerith when you meet her among the swirling Whispers.",
      "Push through the Shinra troops blocking the plaza.",
      "Board the train back to the Sector 7 hideout."
    ],
    video: "https://www.youtube.com/watch?v=3TUN5MCYfR4"
  },
  {
    id: 1029,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Sector 7 Slums",
    title: "Sector 7 Slums",
    location: "Sector 7",
    length: "short",
    difficulty: "Low",
    reward: "Unlocks the slums hub and its side quests",
    summary:
      "Return to the Seventh Heaven hideout, meet Tifa, and get your first taste of the Sector 7 slums where side jobs open up.",
    aiTip:
      "Talk to everyone in the slums to unlock the odd-job board — this is your first window for missable side quests.",
    walkthrough: [
      "Arrive at the Seventh Heaven bar and reunite with Tifa.",
      "Explore the Sector 7 slums and speak with residents.",
      "Accept available odd jobs from the notice board.",
      "Rest at the hideout to advance the story."
    ],
    video: "https://www.youtube.com/watch?v=5QlLp40GiWY"
  },
  {
    id: 1030,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Reactors & Upper Plate",
    title: "Jessie's Home Invasion",
    location: "Upper Plate",
    length: "medium",
    difficulty: "Medium",
    reward: "Story progression, upgraded weapons materia",
    summary:
      "Sneak onto the upper plate with Jessie, Biggs, and Wedge to steal explosives from her family's home for the next reactor job.",
    aiTip:
      "Use the motorcycle sequence to build up your limit gauge — you'll want it charged for the ambush at the end.",
    walkthrough: [
      "Ride the train and infiltrate the upper plate with Jessie's crew.",
      "Sneak past the Shinra patrols to Jessie's house.",
      "Recover the stashed explosives.",
      "Escape on the highway and survive the Roche motorcycle chase."
    ],
    video: "https://www.youtube.com/watch?v=rGKBdxxNp94"
  },
  {
    id: 1031,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Reactors & Upper Plate",
    title: "The Reactor 5 Raid",
    location: "Railway",
    length: "long",
    difficulty: "Medium",
    reward: "Story progression, Crab Warden boss materia",
    summary:
      "Ride the rails to Mako Reactor 5 for a second bombing run that goes wrong when Shinra springs a trap.",
    aiTip:
      "Save your ATB for the Crab Warden's legs — breaking them staggers it and opens a huge damage window.",
    walkthrough: [
      "Traverse the railway and enter Reactor 5.",
      "Plant the bomb at the core with Tifa and Barret.",
      "Fight the Crab Warden — destroy its legs to topple it.",
      "Exploit the stagger to burn it down before its cannon volley.",
      "Survive the ambush that follows the explosion."
    ],
    video: "https://www.youtube.com/watch?v=VGR8joU9ems"
  },
  {
    id: 1032,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Reactors & Upper Plate",
    title: "The Town That Never Sleeps",
    location: "Reactor 5",
    length: "medium",
    difficulty: "Medium",
    reward: "Story progression",
    summary:
      "With the sun-lamps of the slums as backdrop, Cloud is separated from the group and plummets into the Sector 5 church.",
    aiTip:
      "This chapter is light on combat and heavy on story — explore for hidden items before the fall.",
    walkthrough: [
      "Fight through the reactor aftermath alongside Barret.",
      "Get separated during the escape and fall through the plate.",
      "Awaken in the Sector 5 church and meet Aerith again.",
      "Fend off the first wave of Shinra pursuers."
    ],
    video: "https://www.youtube.com/watch?v=lTRNdJCBQUE"
  },
  {
    id: 1033,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Reactors & Upper Plate",
    title: "Defeat Airbuster",
    location: "Reactor 5",
    length: "medium",
    difficulty: "High",
    reward: "Story progression, Airbuster boss loot and materia choices",
    summary:
      "Confront Shinra's Airbuster war machine on the reactor bridge — a fight whose difficulty you can ease beforehand.",
    aiTip:
      "Divert the keycards to strip the Airbuster's parts before the fight; lightning materia melts its health bar.",
    walkthrough: [
      "Choose which keycard terminals to divert to weaken the Airbuster.",
      "Enter the bridge fight and stay mobile to avoid its missile spread.",
      "Hit it with Thunder/Thundara to build stagger fast.",
      "Destroy it, then survive the cliffhanger with Barret."
    ],
    video: "https://www.youtube.com/watch?v=yzErRMtkd9g"
  },
  {
    id: 1034,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Sector 5 Slums",
    title: "Escort the Flower Girl",
    location: "Sector 5",
    length: "medium",
    difficulty: "Medium",
    reward: "Story progression, unlocks Sector 5 side quests",
    summary:
      "Guide Aerith safely home through the Sector 5 slums, opening up the district's odd jobs and the moogle shop.",
    aiTip:
      "Take the detours with Aerith to trigger her side content — several missable jobs unlock only during this stretch.",
    walkthrough: [
      "Walk Aerith home through the Sector 5 slums.",
      "Complete the slum errands that open along the way.",
      "Reach Aerith's house and rest.",
      "Agree to help her cross to Sector 7 the next day."
    ],
    video: "https://www.youtube.com/watch?v=FhTPJWE-Pec"
  },
  {
    id: 1035,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Wall Market",
    title: "Wall Market",
    location: "Wall Market",
    length: "long",
    difficulty: "Medium",
    reward: "Story progression, the crossdressing set-piece and dress outcome",
    summary:
      "Infiltrate Don Corneo's mansion by winning over Wall Market — the outcome depends on the sidequests you complete.",
    aiTip:
      "Do the Corneo Colosseum and dressmaker sidequests to earn the best dress and honeybee outcomes; they're fully missable.",
    walkthrough: [
      "Arrive in Wall Market and learn Tifa has gone to Corneo's mansion.",
      "Complete the dress, colosseum, and massage-parlor branches for better outcomes.",
      "Get dressed up and enter the mansion audition.",
      "Confront Don Corneo and escape with Tifa and Aerith."
    ],
    video: "https://www.youtube.com/watch?v=2gShRpduP38"
  },
  {
    id: 1036,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Sewers & Graveyard",
    title: "The Collapsed Expressway",
    location: "Sewers",
    length: "medium",
    difficulty: "Medium",
    reward: "Story progression, Abzu boss materia",
    summary:
      "Drop into the sewers beneath Wall Market and fight through Corneo's beasts, including the hulking Abzu.",
    aiTip:
      "Abzu is weak to fire; keep Aerith at range casting while Cloud pressures it up close.",
    walkthrough: [
      "Descend into the Sector 6 sewers after fleeing Corneo.",
      "Navigate the flooded tunnels and sluice gates.",
      "Fight Abzu — exploit its fire weakness and dodge its charge.",
      "Reach the exit toward the train graveyard."
    ],
    video: "https://www.youtube.com/watch?v=KQccocCQ0SU"
  },
  {
    id: 1037,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Sewers & Graveyard",
    title: "The Train Graveyard",
    location: "Graveyard",
    length: "medium",
    difficulty: "Medium",
    reward: "Story progression, Ghost enemy materia",
    summary:
      "Pick through the eerie, ghost-haunted Train Graveyard on the way back to Sector 7.",
    aiTip:
      "The child-ghost puzzles gate your progress — interact with the kids in order and use fire on the spectral enemies.",
    walkthrough: [
      "Enter the Train Graveyard with Tifa and Aerith.",
      "Solve the ghost-children puzzles to open the path.",
      "Burn down the Eligor and ghost enemies with fire spells.",
      "Emerge at the base of the Sector 7 pillar."
    ],
    video: "https://www.youtube.com/watch?v=06iAqPVrSwA"
  },
  {
    id: 1038,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Sector 7 Slums",
    title: "The Sector 7 Plate Collapse",
    location: "Sector 7",
    length: "long",
    difficulty: "High",
    reward: "Story progression, Reno & Rude boss fight",
    summary:
      "Race to stop Shinra from dropping the Sector 7 plate, battling the Turks Reno and Rude atop the pillar.",
    aiTip:
      "Reno punishes greed — bait his EM-rod combos, then punish; swap targets when Rude casts to interrupt.",
    walkthrough: [
      "Climb the Sector 7 pillar under fire.",
      "Fight Reno and Rude at the top of the tower.",
      "Reach the plate-support terminal.",
      "Survive the collapse and its heartbreaking aftermath."
    ],
    video: "https://www.youtube.com/watch?v=zWIWtPwHteM"
  },
  {
    id: 1039,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Sector 7 Slums",
    title: "Rescue Aerith",
    location: "Sector 7",
    length: "medium",
    difficulty: "Medium",
    reward: "Story progression, underground lab route",
    summary:
      "Descend through the ruined slums and the underground lab in pursuit of the Turks who captured Aerith.",
    aiTip:
      "Stock up and upgrade weapons at the collapse aftermath — the Shinra Building assault ahead is long with no shops.",
    walkthrough: [
      "Search the ruins of Sector 7 for a way up.",
      "Travel through the underground test lab.",
      "Regroup with Barret and Tifa on the plan to save Aerith.",
      "Reach the base of the Shinra Building."
    ],
    video: "https://www.youtube.com/watch?v=cItnWImfcwk"
  },
  {
    id: 1040,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Sector 5 Slums",
    title: "Open the Hub",
    location: "Sector 5/6",
    length: "medium",
    difficulty: "Medium",
    reward: "Multiple side quests unlock, Chocobo & moogle content",
    summary:
      "A breather chapter that reopens the slums as a hub, letting you mop up side quests before the Shinra assault.",
    aiTip:
      "This is the last chance for many Sector 5/6 side quests — clear the job board before advancing to Shinra HQ.",
    walkthrough: [
      "Return to the reopened slums hub.",
      "Accept and complete the remaining odd jobs.",
      "Upgrade weapons and restock consumables.",
      "Meet the group to begin the Shinra Building plan."
    ],
    video: "https://www.youtube.com/watch?v=cS07VIv18uA"
  },
  {
    id: 1041,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Shinra HQ & Midgar",
    title: "Climb the Plate",
    location: "Midgar",
    length: "medium",
    difficulty: "Medium",
    reward: "Story progression",
    summary:
      "Scale the towering support structure of Midgar's plate to infiltrate the Shinra Building from below.",
    aiTip:
      "Manage stamina during the climb sequences and pick up the hidden manuscripts tucked along the girders.",
    walkthrough: [
      "Begin the long climb up the plate supports.",
      "Cross the collapsing walkways and machinery.",
      "Fight the security drones guarding the ascent.",
      "Reach the rear entrance of the Shinra Building."
    ],
    video: "https://www.youtube.com/watch?v=FMKRvc1r1Hg"
  },
  {
    id: 1042,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Shinra HQ & Midgar",
    title: "Infiltrate Shinra HQ",
    location: "Shinra",
    length: "long",
    difficulty: "Medium",
    reward: "Story progression, Shinra Building exploration and lore",
    summary:
      "Break into Shinra headquarters — by stairs or front door — and climb its floors toward the executive suites.",
    aiTip:
      "Take the stairs for the achievement and extra fights, or the front assault for a quicker, harder path.",
    walkthrough: [
      "Choose the stealth stairwell or the front-door assault.",
      "Work through the corporate floors and museum exhibits.",
      "Recover Aerith and confront the science department.",
      "Reach the executive levels for the confrontation with Hojo."
    ],
    video: "https://www.youtube.com/watch?v=r-vykmKc-wA"
  },
  {
    id: 1043,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Shinra HQ & Midgar",
    title: "Hojo's Laboratory",
    location: "Shinra",
    length: "long",
    difficulty: "High",
    reward: "Story progression, Jenova Dreamweaver & Rufus boss fights",
    summary:
      "Break out of Hojo's specimen labs and battle your way down through Jenova and Rufus Shinra's escape.",
    aiTip:
      "Rufus's fight is a duel — dodge his pistol shots and Dark Nation's buffs, and punish between his gunslinger combos.",
    walkthrough: [
      "Escape the specimen containment in Hojo's lab.",
      "Fight Jenova Dreamweaver alongside the party.",
      "Duel Rufus Shinra and Dark Nation on the helipad.",
      "Regroup for the escape from the tower."
    ],
    video: "https://www.youtube.com/watch?v=sRlQE1YwNP4"
  },
  {
    id: 1044,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Shinra HQ & Midgar",
    title: "Escape from Midgar",
    location: "Midgar",
    length: "long",
    difficulty: "High",
    reward: "Ending, Motor Ball and the Arbiter of Fate finale",
    summary:
      "Blast down the Midgar Expressway on stolen bikes, defeat Motor Ball, and face the Whispers to leave the city behind.",
    aiTip:
      "Charge your limit breaks before the highway boss; the multi-phase finale rewards saving them for the Arbiter of Fate.",
    walkthrough: [
      "Flee Shinra HQ on the highway with the party split across vehicles.",
      "Defeat Motor Ball during the expressway chase.",
      "Confront Sephiroth at the edge of Midgar.",
      "Battle the Whispers — the Arbiter of Fate — to close the story."
    ],
    video: "https://www.youtube.com/watch?v=yhdDsCVImDo"
  },
  {
    id: 1045,
    type: "side",
    game: "Final Fantasy VII Remake",
    region: "Sector 7 Slums",
    title: "Chocobo Search (Rat Problem)",
    location: "Sector 7",
    length: "short",
    difficulty: "Low",
    reward: "Gil and a Chocobo & Moogle summon materia progress",
    summary:
      "Help Wymer clear a rat and monster infestation plaguing the Sector 7 slums.",
    aiTip:
      "Quick early-game job — bring some AoE to sweep the rat packs efficiently.",
    walkthrough: [
      "Take the request from Wymer at the slum entrance.",
      "Track down the wererat nests around Sector 7.",
      "Clear each infestation point.",
      "Return to Wymer for your reward."
    ],
    video: "https://www.youtube.com/watch?v=n01UEoX-Nj4"
  },
  {
    id: 1046,
    type: "side",
    game: "Final Fantasy VII Remake",
    region: "Sector 7 Slums",
    title: "Lost Friends",
    location: "Sector 7",
    length: "short",
    difficulty: "Low",
    reward: "Healing items and slum reputation",
    summary:
      "Round up a group of missing cats for a worried slum resident.",
    aiTip:
      "The cats are scattered across nearby screens — check rooftops and alleys; no combat required beyond stray monsters.",
    walkthrough: [
      "Accept the Lost Friends job in Sector 7.",
      "Search the slum streets for each missing cat.",
      "Coax the cats back one by one.",
      "Report back to complete the request."
    ],
    video: "https://www.youtube.com/watch?v=YJQZl0q2SSU"
  },
  {
    id: 1047,
    type: "side",
    game: "Final Fantasy VII Remake",
    region: "Sector 7 Slums",
    title: "On the Prowl",
    location: "Sector 7",
    length: "short",
    difficulty: "Medium",
    reward: "Elixir and combat reputation",
    summary:
      "Hunt down the aggressive monsters stalking the Sector 7 slum outskirts for the watch.",
    aiTip:
      "Equip an Assess materia to spot each target's weakness and finish the hunt faster.",
    walkthrough: [
      "Take the hunt request from the slum watch.",
      "Locate the marked monster dens.",
      "Defeat the prowling beasts.",
      "Turn in the bounty for an Elixir."
    ],
    video: "https://www.youtube.com/watch?v=cyNzZULI_EQ"
  },
  {
    id: 1048,
    type: "side",
    game: "Final Fantasy VII Remake",
    region: "Sector 5 Slums",
    title: "Kids on Patrol",
    location: "Sector 5",
    length: "short",
    difficulty: "Low",
    reward: "A weapon and slum-kid reputation",
    summary:
      "Play along with the slum children's neighborhood watch by clearing the pests they've marked.",
    aiTip:
      "Light, low-stakes job — good for testing new materia loadouts on weak enemies.",
    walkthrough: [
      "Accept Kids on Patrol from the children in Sector 5.",
      "Visit each patrol point they mark.",
      "Defeat the monsters harassing the area.",
      "Return to the kids for a weapon reward."
    ],
    video: "https://www.youtube.com/watch?v=q4h8PZmKws8"
  },
  {
    id: 1049,
    type: "side",
    game: "Final Fantasy VII Remake",
    region: "Sector 5 Slums",
    title: "The Angel of the Slums (Moogle Merchant)",
    location: "Sector 5",
    length: "short",
    difficulty: "Low",
    reward: "Unlocks the Moogle Emporium shop",
    summary:
      "Earn Moogle Medals for the mysterious child running the Moogle Emporium to unlock its exclusive stock.",
    aiTip:
      "Save your Moogle Medals for the summon and accessory items — they're some of the best early purchases.",
    walkthrough: [
      "Find the Moogle Emporium in the Sector 5 slums.",
      "Complete tasks to earn Moogle Medals.",
      "Spend medals to unlock the shop's stock.",
      "Buy the exclusive materia and items."
    ],
    video: "https://www.youtube.com/watch?v=CRGlett0WO8"
  },
  {
    id: 1050,
    type: "side",
    game: "Final Fantasy VII Remake",
    region: "Wall Market",
    title: "Burning Thighs",
    location: "Wall Market",
    length: "medium",
    difficulty: "Medium",
    reward: "Improves the Wall Market dress branch outcome",
    summary:
      "Train at the Wall Market gym in a squat-contest minigame that feeds into the crossdressing set-piece.",
    aiTip:
      "Nail the button rhythm to beat the champion — winning improves which dress and outcome you unlock later.",
    walkthrough: [
      "Enter the gym in Wall Market and challenge the squat contest.",
      "Match the on-screen button prompts in rhythm.",
      "Beat the reigning champion Jules.",
      "Collect the reward that boosts your dress-branch outcome."
    ],
    video: "https://www.youtube.com/watch?v=XDwOql565bQ"
  },
  {
    id: 1051,
    type: "side",
    game: "Final Fantasy VII Remake",
    region: "Wall Market",
    title: "The Price of Thievery",
    location: "Wall Market",
    length: "medium",
    difficulty: "Medium",
    reward: "Wall Market rewards and dress-branch progress",
    summary:
      "Recover stolen goods for a Wall Market vendor as part of earning your way into Corneo's audition.",
    aiTip:
      "This branch feeds the same outcome tree as the dress and colosseum jobs — complete it before the mansion.",
    walkthrough: [
      "Take the vendor's request in Wall Market.",
      "Track the thieves through the back alleys.",
      "Defeat them and recover the stolen goods.",
      "Return the goods for rewards and branch progress."
    ],
    video: "https://www.youtube.com/watch?v=ahnJxa4n-3o"
  },
  {
    id: 1052,
    type: "side",
    game: "Final Fantasy VII Remake",
    region: "Sector 5 Slums",
    title: "Missing Children",
    location: "Sector 5",
    length: "medium",
    difficulty: "Medium",
    reward: "Accessories and Chapter 14 reputation",
    summary:
      "Search the reopened Sector 5 slums for children who wandered off toward the collapsed plate.",
    aiTip:
      "Available only in the Chapter 14 hub window — grab it before advancing or it's gone.",
    walkthrough: [
      "Accept Missing Children in the Chapter 14 slum hub.",
      "Follow the trail toward the ruined outskirts.",
      "Fight off the monsters and find each child.",
      "Escort them home for your reward."
    ],
    video: "https://www.youtube.com/watch?v=FMkKY_34Q3Q"
  },
  {
    id: 1053,
    type: "side",
    game: "Final Fantasy VII Remake",
    region: "Sector 5 Slums",
    title: "Secret Medicine",
    location: "Sector 5",
    length: "medium",
    difficulty: "Medium",
    reward: "Rare healing items and reputation",
    summary:
      "Gather ingredients for a slum doctor's remedy during the Chapter 14 hub window.",
    aiTip:
      "Note the ingredient locations before you start — a couple require clearing monster nests near the waterway.",
    walkthrough: [
      "Take the Secret Medicine request from the slum clinic.",
      "Collect the required ingredients around Sector 5.",
      "Clear the monsters guarding the rarer components.",
      "Deliver everything to the doctor for the reward."
    ],
    video: "https://www.youtube.com/watch?v=QCiLElY5Vb0"
  },
  {
    id: 1054,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Intermission",
    title: "Wutai's Finest",
    location: "Midgar",
    length: "medium",
    difficulty: "Medium",
    reward: "Story progression, Yuffie and the Fort Condor minigame unlock",
    summary:
      "Play as Yuffie Kisaragi infiltrating Midgar to steal Shinra's ultimate materia in the INTERmission DLC.",
    aiTip:
      "Master Yuffie's ranged/melee stance swap early — throwing and recalling her shuriken is her whole damage engine.",
    walkthrough: [
      "Arrive in Midgar as Yuffie and meet your Avalanche HQ contact.",
      "Learn Yuffie's shuriken-throw and elemental ninjutsu combat.",
      "Explore the slums and unlock the Fort Condor board-game minigame.",
      "Team up with Sonon to begin the infiltration."
    ],
    video: "https://www.youtube.com/watch?v=OD9JBLCOlVM"
  },
  {
    id: 1055,
    type: "main",
    game: "Final Fantasy VII Remake",
    region: "Intermission",
    title: "Covert Ops",
    location: "Shinra",
    length: "long",
    difficulty: "High",
    reward: "Ending, Nero the Sable boss fight",
    summary:
      "Break into the Shinra Building with Sonon, culminating in a desperate duel against Nero the Sable.",
    aiTip:
      "Use Synchronized ATB with Sonon to chain abilities; Nero's darkness voids punish sloppy dodges, so stay patient.",
    walkthrough: [
      "Infiltrate the Shinra Building's lower levels with Sonon.",
      "Fight through the security and research floors.",
      "Confront Nero the Sable in the depths.",
      "Use synergy attacks to break him and escape with the materia."
    ],
    video: "https://www.youtube.com/watch?v=41Y15qTjWMk"
  },
  {
    id: 1056,
    type: "side",
    game: "Final Fantasy VII Remake",
    region: "Intermission",
    title: "Fort Condor",
    location: "Various",
    length: "medium",
    difficulty: "Low",
    reward: "Unlocks board-game rewards and materia",
    summary:
      "Take on the slums' Fort Condor board-game champions across Midgar for exclusive materia and prizes.",
    aiTip:
      "Build a balanced deck of ranged, defense, and vanguard units, and target the enemy's outposts first to snowball.",
    walkthrough: [
      "Unlock the Fort Condor minigame during Wutai's Finest.",
      "Challenge each ranked board-game opponent.",
      "Adjust your unit loadout between matches.",
      "Beat the champions to claim the exclusive rewards."
    ],
    video: "https://www.youtube.com/watch?v=4-8DnPOCsWc"
  },
  // ── Metaphor: ReFantazio — Main Quests (MQ-01 to MQ-11) ──
  {
    id: 1132,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Save the Prince from Death's Curse",
    location: "Grand Trad / Regalith Grand Cathedral",
    length: "long",
    difficulty: "High",
    reward: "Story progression, first Gauntlet Runner access",
    summary:
      "The opening main quest: the king is assassinated and his death-curse passes to the prince. Race against the calendar to find a cure while entering the Royal Election to claim the throne.",
    aiTip:
      "Time is limited from day one — prioritize the main dungeon over social activities on your first run. Learn the Archetype system here.",
    video: "https://www.youtube.com/watch?v=nMAjonCPoHc"
  },
  {
    id: 1133,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Necromancer Takedown",
    location: "Grand Trad Cathedral",
    length: "long",
    difficulty: "High",
    reward: "Story progression, Archetype mastery points",
    summary:
      "Pursue and defeat Zorba the Necromancer before he can use the undead to seize power. The dungeon tests your elemental coverage and introduces Synthesis attacks as a necessity.",
    aiTip:
      "Zorba summons undead constantly — use Synthesis Skills like Energy Ray and Hammer of Justice to wipe adds quickly before focusing the boss.",
    video: "https://www.youtube.com/watch?v=MhQHGZPfOHo"
  },
  {
    id: 1059,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Thwart Zorba's Plan",
    location: "Grand Trad",
    length: "long",
    difficulty: "High",
    reward: "Story advancement, new Archetype lines",
    summary:
      "Zorba has a backup scheme that threatens the election and the capital. Unravel his plot across multiple investigation scenes before a boss confrontation closes this chapter.",
    aiTip:
      "Reach the dungeon as early as the calendar allows — running out of days here forces a retry of the whole month.",
    video: "https://www.youtube.com/watch?v=Wrqf0ZH3qJw"
  },
  {
    id: 1060,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Apprehend the Real Kidnapper",
    location: "Martira",
    length: "long",
    difficulty: "High",
    reward: "Story revelation, Follower bond growth",
    summary:
      "A kidnapping in Martira has an unexpected culprit. Investigate informants across the city and track the true suspect before they escape, culminating in a mid-game boss fight.",
    aiTip:
      "Talk to every NPC that has a '!' marker — missing one informant locks you out of the true suspect's location.",
    video: "https://www.youtube.com/watch?v=IeS3_Ef9ltc"
  },
  {
    id: 1061,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Infiltrate the Charadrius",
    location: "The Charadrius (Louis's Flagship)",
    length: "long",
    difficulty: "High",
    reward: "Story revelation about Louis, key Archetype abilities",
    summary:
      "Board Louis's formidable flagship the Charadrius to gather intelligence. The dungeon is filled with elite soldiers and ends with an encounter that shifts the entire political landscape.",
    aiTip:
      "Stealth sections matter here — triggering alarms adds enemies that drain valuable MP before the boss.",
    video: "https://www.youtube.com/watch?v=fOzug0yoLCg"
  },
  {
    id: 1062,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Skanda",
    title: "Obtain Drakodios",
    location: "Virga Island / Dragon Temple",
    length: "long",
    difficulty: "Very High",
    reward: "Drakodios relic, powerful late-game Archetypes",
    summary:
      "Sail to the remote Virga Island and enter the Dragon Temple to obtain the legendary relic Drakodios. The dungeon is among the longest in the game with multiple boss encounters.",
    aiTip:
      "Max your Archetype masteries before entering — the Dragon Temple has a difficulty spike that catches underprepared parties.",
    video: "https://www.youtube.com/watch?v=Gh3jebko0Bc"
  },
  {
    id: 1063,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Skanda",
    title: "Ancestral Solution",
    location: "Virga Island / Dragon Temple",
    length: "long",
    difficulty: "Very High",
    reward: "Key story resolution, ultimate Archetype upgrades",
    summary:
      "Delve deeper into the Dragon Temple's secrets to find the ancestral solution that can break the prince's death-curse. A lore-dense quest that reveals the world's true history.",
    aiTip:
      "The Homo Sabara boss here has multiple phases — bring wind and fire coverage and keep everyone above half HP entering the final phase.",
    video: "https://www.youtube.com/watch?v=x4pwmrmYpTc"
  },
  {
    id: 1064,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Skanda",
    title: "Eliminate Virga Island's Threat",
    location: "Virga Island",
    length: "long",
    difficulty: "Very High",
    reward: "Island cleared, MAG and rare materials",
    summary:
      "A powerful threat blocks progress on Virga Island. Hunt it down across the island's dangerous terrain to clear the path for the main quest.",
    aiTip:
      "Save before the engagement — this is an optional but difficult encounter. Stock up on revival items.",
    video: "https://www.youtube.com/watch?v=fkXz2y8VHdE"
  },
  {
    id: 1065,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Skanda",
    title: "Prepare for the Final Battle",
    location: "Grand Trad / Skybound Avatar",
    length: "long",
    difficulty: "Very High",
    reward: "Final dungeon access, party-wide stat boosts",
    summary:
      "With the Royal Election decided, make final preparations before ascending to the Skybound Avatar. Complete remaining Follower bonds, stock items, and master your Archetypes.",
    aiTip:
      "This is the point of no return for many side quests. Spend all remaining days on Follower bonds and Virtue trials before entering the final dungeon.",
    video: "https://www.youtube.com/watch?v=kn6weGHUbl4"
  },
  {
    id: 1066,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Skanda",
    title: "Skybound Avatar Conquest",
    location: "Skybound Avatar (Final Dungeon)",
    length: "long",
    difficulty: "Very High",
    reward: "True Ending, platinum trophy route",
    summary:
      "The final multi-phase gauntlet. Ascend the Skybound Avatar, face Zorba's return, and confront the final manifestation of the kingdom's fear — the throne's true enemy revealed.",
    aiTip:
      "Bring maximum healing stock and your three strongest Archetype setups. The final boss has three distinct phases with no save point between them.",
    video: "https://www.youtube.com/watch?v=hj3mzTO_zbA"
  },
  {
    id: 1067,
    type: "main",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Save the Country",
    location: "Grand Trad Throne Room",
    length: "medium",
    difficulty: "High",
    reward: "True Ending cutscenes, credit roll",
    summary:
      "The climax after defeating the final boss. A series of story sequences and decisions determines the fate of the kingdom and the protagonist's future.",
    aiTip:
      "Your accumulated Royal Virtue and Follower bond ranks affect dialogue options and ending variants — max them out before this point.",
    video: "https://www.youtube.com/watch?v=kt2jvZc6BHg"
  },
  // ── More's Tasks (SQ-01 to SQ-07) ──
  {
    id: 1068,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "More's Task: Foreword and Prologue",
    location: "Grand Trad / Gauntlet Runner",
    length: "short",
    difficulty: "Low",
    reward: "Archetype system unlocked, bond with More initiated",
    summary:
      "More introduces himself and the Archetype codex, setting the foundation for the game's class system. This first task is essentially the tutorial for unlocking new Archetypes through bond progression.",
    aiTip:
      "Completing More's Tasks in order is required to unlock advanced Archetype lineages — don't skip early chapters even if they seem brief.",
    video: "https://www.youtube.com/watch?v=fqtOVv4Atro"
  },
  {
    id: 1069,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "More's Task Chapter One: Ordeal",
    location: "Grand Trad",
    length: "short",
    difficulty: "Low",
    reward: "Archetype unlock, bond rank increase",
    summary:
      "More's first task asks you to face an ordeal that tests your resolve and combat preparation. Completing it opens the next tier of Archetype lineages.",
    aiTip:
      "Talk to More whenever a '!' appears on the Gauntlet Runner — his tasks are calendar-gated and easy to miss.",
    video: "https://www.youtube.com/watch?v=burZDgeyC88"
  },
  {
    id: 1070,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "More's Task Chapter Two: Solitude",
    location: "Grand Trad",
    length: "short",
    difficulty: "Low",
    reward: "Archetype unlock, bond rank increase",
    summary:
      "More reflects on solitude and what it means to walk a path alone. This chapter deepens his backstory and rewards a new Archetype lineage on completion.",
    aiTip:
      "Choose dialogue options that align with empathy for the best bond growth outcome.",
    video: "https://www.youtube.com/watch?v=YIvj7wtc5O4"
  },
  {
    id: 1071,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "More's Task Chapter Three: Drifting",
    location: "Martira",
    length: "short",
    difficulty: "Low",
    reward: "Archetype unlock, bond rank increase",
    summary:
      "As the party drifts between cities, More opens up about his past as a driver and his place in the journey. A quiet but character-defining chapter.",
    aiTip:
      "This chapter unlocks on the road to Martira — trigger it before the next main quest deadline.",
    video: "https://www.youtube.com/watch?v=TSww6LGRKiE"
  },
  {
    id: 1072,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "More's Task Chapter Four: Turmoil",
    location: "Martira",
    length: "medium",
    difficulty: "Low",
    reward: "Archetype unlock, bond rank increase",
    summary:
      "Political turmoil tests More's loyalty and judgment. This chapter involves a short confrontation that reveals his personal code of ethics.",
    aiTip:
      "Have at least Tolerance Rank 3 before this chapter — one dialogue option requires it for the best reward.",
    video: "https://www.youtube.com/watch?v=11LpCTXbnVM"
  },
  {
    id: 1073,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Kriegante",
    title: "More's Task Chapter Five: Resolve",
    location: "Kriegante",
    length: "medium",
    difficulty: "Medium",
    reward: "Advanced Archetype unlock, key bond ability",
    summary:
      "More's resolve is tested in Kriegante as the political situation turns dangerous. He must make a critical decision about his role in the party's mission.",
    aiTip:
      "This chapter has a combat encounter — bring a balanced party as it can catch you off guard mid-story.",
    video: "https://www.youtube.com/watch?v=nCAPUAauOHk"
  },
  {
    id: 1074,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Skanda",
    title: "More's Task Chapter Six: The End",
    location: "Skanda / Gauntlet Runner",
    length: "medium",
    difficulty: "Medium",
    reward: "Final Archetype mastery unlock, unique bond ability",
    summary:
      "The conclusion of More's story arc. What began as a simple job as driver has become something far greater. This final chapter rewards the strongest Archetype abilities tied to his bond.",
    aiTip:
      "Complete all previous More's Tasks before the final dungeon — Chapter Six locks after entering the point of no return.",
    video: "https://www.youtube.com/watch?v=BQ5_mzODNVA"
  },
  // ── Favor / NPC Quests (SQ-10 to SQ-25) ──
  {
    id: 1075,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "A Friend in Need",
    location: "Grand Trad",
    length: "short",
    difficulty: "Low",
    reward: "MAG, bond growth, consumables",
    summary:
      "A Grand Trad resident is in trouble and needs help that goes beyond coin. A short quest that expands the city's texture and rewards a modest MAG boost.",
    aiTip:
      "Talk to everyone around the quest NPC — one of their neighbours holds the key information needed to resolve the situation.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+A+Friend+in+Need+walkthrough",
    walkthrough: [
      "Speak to the troubled NPC in Grand Trad with the '!' marker to accept the quest.",
      "Talk to the two neighbours indicated nearby to gather information about the problem.",
      "Return to the original NPC and choose the correct dialogue option based on what you learned.",
      "If a short combat encounter triggers, exploit enemy weaknesses for a fast finish.",
      "Collect the MAG reward and bond point from the quest completion screen."
    ]
  },
  {
    id: 1076,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Missing Child",
    location: "Grand Trad Residential District",
    length: "short",
    difficulty: "Low",
    reward: "MAG, Courage stat growth",
    summary:
      "A child has wandered off into a dangerous part of Grand Trad. Track them down before nightfall in this time-sensitive fetch quest that rewards Courage stat growth.",
    aiTip:
      "The child hides in the area nearest the city walls — check the outer residential alley first to save time.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Missing+Child+walkthrough",
    walkthrough: [
      "Accept the quest from the worried parent in the Grand Trad residential district.",
      "Head to the outer alley near the city walls — the child is hiding behind a stack of crates.",
      "Speak to the child and select the reassuring dialogue option to coax them out.",
      "Escort the child back to the parent by following the quest marker.",
      "Collect the Courage stat point and MAG reward from the parent."
    ]
  },
  {
    id: 1077,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Merchant's Request",
    location: "Grand Trad Market",
    length: "short",
    difficulty: "Low",
    reward: "Discounted shop prices, MAG",
    summary:
      "A market merchant needs a specific item retrieved to fulfil a trade order. Simple but rewards a permanent shop discount that makes it well worth doing early.",
    aiTip:
      "The item the merchant needs is sold by the vendor two stalls over — buy it immediately and return for the discount reward.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Merchant%27s+Request+walkthrough",
    walkthrough: [
      "Talk to the merchant with the '!' marker in Grand Trad's market district.",
      "Note the specific item they need — it is stocked by a nearby vendor in the same market.",
      "Purchase the item and bring it back to the merchant.",
      "Confirm the trade to receive MAG and unlock a permanent discount at that merchant's shop.",
      "Revisit this merchant throughout the game to benefit from the reduced prices on consumables."
    ]
  },
  {
    id: 1078,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Delivery Troubles",
    location: "Grand Trad",
    length: "short",
    difficulty: "Low",
    reward: "MAG, Tolerance stat growth",
    summary:
      "A courier is blocked from making a delivery by a bureaucratic obstacle. Help cut through the red tape and see the package delivered to earn Tolerance stat growth.",
    aiTip:
      "The gatekeeper NPC who is blocking the delivery has a hidden condition — speak to a nearby guard first to learn how to satisfy it.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Delivery+Troubles+walkthrough",
    walkthrough: [
      "Accept the quest from the frustrated courier outside a gated district in Grand Trad.",
      "Talk to the nearby guard to learn what document or condition would allow passage.",
      "Retrieve or fulfill the condition — usually a short fetch from a building nearby.",
      "Return to the gatekeeper with the required item or information to clear the way.",
      "Watch the delivery complete and collect your MAG and Tolerance growth reward."
    ]
  },
  {
    id: 1079,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Stolen Goods Recovery",
    location: "Grand Trad",
    length: "short",
    difficulty: "Low",
    reward: "MAG, stolen item returned",
    summary:
      "Goods have been stolen from a vendor in the market. Track the thief through Grand Trad, retrieve the stolen merchandise, and return it to the owner.",
    aiTip:
      "The thief is near the city's lower district — follow the trail of NPC hints rather than wandering; each one points closer.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Stolen+Goods+Recovery+walkthrough",
    walkthrough: [
      "Speak to the victimised vendor with the '!' marker in the Grand Trad market.",
      "Ask nearby stall owners about unusual activity — each gives a clue narrowing the location.",
      "Head to the lower district and locate the thief hiding near the exit gate.",
      "Confront the thief; a brief combat encounter or a successful dialogue check recovers the goods.",
      "Return the stolen goods to the vendor and collect the MAG reward."
    ]
  },
  {
    id: 1080,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Troubled Soldier",
    location: "Fort Endra, Martira",
    length: "medium",
    difficulty: "Medium",
    reward: "MAG, Courage stat growth, unique consumable",
    summary:
      "A soldier stationed at Fort Endra is struggling with something that goes beyond combat fatigue. Hear him out, gather what he needs, and help him find his footing again.",
    aiTip:
      "This quest has two parts visited on separate calendar days — return to Fort Endra after advancing the main quest by one day.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Troubled+Soldier+walkthrough",
    walkthrough: [
      "Find the troubled soldier at Fort Endra's barracks with the '!' quest marker.",
      "Listen to his concerns and choose the empathetic dialogue response to progress the quest.",
      "Exit and advance one calendar day, then return to Fort Endra to trigger the follow-up scene.",
      "Retrieve the specific item he requires from a vendor in Martira's market.",
      "Return to the soldier to deliver the item and resolve his situation, collecting Courage growth and MAG."
    ]
  },
  {
    id: 1081,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Lost Necklace",
    location: "Grand Trad",
    length: "short",
    difficulty: "Low",
    reward: "MAG, Wisdom stat growth",
    summary:
      "An NPC has lost a treasured necklace somewhere in Grand Trad. Search the city's hidden corners, question witnesses, and return the keepsake for a Wisdom reward.",
    aiTip:
      "The necklace is in a non-obvious spot behind a breakable object — check the area around the fountain near the market.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Lost+Necklace+walkthrough",
    walkthrough: [
      "Accept the quest from the upset NPC near the Grand Trad residential entrance.",
      "Question the three witnesses scattered around the central plaza for location clues.",
      "Head to the fountain area and inspect the small alcove or breakable object behind it.",
      "Pick up the necklace from the spot and return it to the quest giver.",
      "Collect the Wisdom growth and MAG reward from the grateful NPC."
    ]
  },
  {
    id: 1082,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Herbal Remedy",
    location: "Grand Trad",
    length: "short",
    difficulty: "Low",
    reward: "MAG, healing items, Wisdom growth",
    summary:
      "A healer needs rare herbs to prepare medicine for sick residents. Gather the herbs from the outskirts of Grand Trad and return them for a healing item reward.",
    aiTip:
      "The herbs spawn on the outer road near the Gauntlet Runner docking area — they respawn on calendar days so check back if you missed them.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Herbal+Remedy+walkthrough",
    walkthrough: [
      "Speak to the healer at the clinic in Grand Trad with the '!' marker.",
      "Head to the outer road near the Gauntlet Runner dock and gather the glowing herb nodes.",
      "Collect all three herb stacks indicated by the minimap icons.",
      "Return to the healer and hand over the herbs.",
      "Receive healing items and a Wisdom growth reward from the healer."
    ]
  },
  {
    id: 1083,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Guard Duty Assistance",
    location: "Grand Trad City Gate",
    length: "short",
    difficulty: "Low",
    reward: "MAG, Courage growth",
    summary:
      "A city guard needs backup during a short patrol after reports of suspicious activity near the gate. Accompany them, handle any encounter, and report back.",
    aiTip:
      "The enemy that spawns during patrol is weak to lightning — bring a Mage-type Archetype for a quick sweep.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Guard+Duty+Assistance+walkthrough",
    walkthrough: [
      "Talk to the guard at the Grand Trad city gate with the '!' marker to start escort duty.",
      "Follow the guard along the patrol route, keeping pace with their movement.",
      "When the ambush enemy spawns, exploit its lightning weakness to dispatch it in one round.",
      "Continue the patrol to its endpoint with no further incidents.",
      "Report back to the guard's captain to collect MAG and Courage growth."
    ]
  },
  {
    id: 1084,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Fisherman's Problem",
    location: "Port Brilehaven, Martira",
    length: "short",
    difficulty: "Low",
    reward: "MAG, unique fish item",
    summary:
      "A fisherman at Port Brilehaven is being driven out of his usual spot by a territorial creature. Clear the nuisance and let him fish in peace.",
    aiTip:
      "The creature guarding the fishing spot is an early-rank bounty-style monster — hit it with fire to end the fight quickly.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Fisherman%27s+Problem+walkthrough",
    walkthrough: [
      "Find the fisherman with the '!' marker at Port Brilehaven's dock.",
      "Head to the marked fishing spot on the port's outer edge where the creature lurks.",
      "Engage and defeat the territorial monster — fire attacks are most effective.",
      "Return to the fisherman and report that the spot is clear.",
      "Receive MAG and a unique fish item that can be used in cooking or sold for extra coin."
    ]
  },
  {
    id: 1085,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Old Woman's Request",
    location: "Grand Trad",
    length: "short",
    difficulty: "Low",
    reward: "MAG, Tolerance growth",
    summary:
      "An elderly woman asks you to find a specific person in Grand Trad she has lost contact with. A simple but touching quest about reconnection in the middle of political upheaval.",
    aiTip:
      "The person she's looking for has moved to a different district — check the lower residential area near the market.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Old+Woman%27s+Request+walkthrough",
    walkthrough: [
      "Speak to the old woman with the '!' marker near the Grand Trad residential square.",
      "Note the name of the person she is looking for and head to the lower residential district.",
      "Find the NPC near the market entrance and relay the old woman's message.",
      "Return to the old woman to deliver the response and trigger a short cutscene.",
      "Collect MAG and Tolerance growth as the quest completes."
    ]
  },
  {
    id: 1086,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Broken Cart",
    location: "Martira Trade Road",
    length: "short",
    difficulty: "Low",
    reward: "MAG, crafting materials",
    summary:
      "A merchant's cart broke down on the trade road into Martira, blocking goods from reaching the market. Gather repair materials from the roadside and fix the cart.",
    aiTip:
      "The repair materials are scattered on the road itself as glowing pickups — no combat required for this quest.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Broken+Cart+walkthrough",
    walkthrough: [
      "Speak to the stranded merchant on the trade road outside Martira with the '!' marker.",
      "Walk along the road and collect the three glowing material nodes nearby.",
      "Return to the merchant and hand over the materials to initiate the repair sequence.",
      "Watch the short animation of the cart being fixed.",
      "Receive MAG and crafting materials as the merchant thanks you and moves on."
    ]
  },
  {
    id: 1087,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Refugee Aid",
    location: "Martira Refugee Camp",
    length: "medium",
    difficulty: "Low",
    reward: "MAG, Tolerance growth, bond affection",
    summary:
      "Refugees from the ongoing conflict need aid that the city can't provide alone. Gather supplies, speak to the right official, and ensure the camp gets what it needs.",
    aiTip:
      "The official who can authorize aid is in the Martira government building — bring him the petition from the camp leader first.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Refugee+Aid+walkthrough",
    walkthrough: [
      "Visit the refugee camp on Martira's outskirts and speak to the camp leader with the '!' marker.",
      "Accept the petition document and take it to the official in the Martira government building.",
      "Navigate the bureaucratic conversation — choose the dialogue option that cites the children's welfare for the best result.",
      "Return to the camp leader with the authorization and trigger the supply delivery cutscene.",
      "Receive MAG and Tolerance growth plus a bump in Eupha's or Heismay's follower affection."
    ]
  },
  {
    id: 1088,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Noble Dispute",
    location: "Martira Noble District",
    length: "medium",
    difficulty: "Medium",
    reward: "MAG, Wisdom growth, information about Louis",
    summary:
      "Two noble factions in Martira are on the verge of a violent confrontation. Mediate the dispute using dialogue skill and gather intel on Louis's backing in the process.",
    aiTip:
      "The correct mediation path requires Wisdom Rank 3 — if you don't have it, grind a social activity first.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Noble+Dispute+walkthrough",
    walkthrough: [
      "Speak to the agitated noble representative near the Martira noble district gate.",
      "Visit both factions' representatives and hear each side's grievance.",
      "Return to the neutral meeting point and choose the mediation option that addresses the root financial issue.",
      "Pass the Wisdom check (requires Rank 3) to broker a temporary peace.",
      "Collect MAG and Wisdom growth, and note the intel about Louis's financial supporters revealed during the scene."
    ]
  },
  {
    id: 1089,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Food Supply Crisis",
    location: "Martira Market",
    length: "medium",
    difficulty: "Low",
    reward: "MAG, cooking materials, Tolerance growth",
    summary:
      "A food supply shortage is hitting Martira's lower districts hard. Track down where the supplies are being diverted and return them to the market.",
    aiTip:
      "The diversion point is a storage warehouse on the docks — a guard there requires either a bribe (costs MAG) or a Courage check to pass.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Food+Supply+Crisis+walkthrough",
    walkthrough: [
      "Speak to the market vendor with the '!' marker about the food shortage.",
      "Follow the paper trail by visiting the city's supply office and asking about recent shipments.",
      "Head to the warehouse on the Martira docks and confront the guard blocking entry.",
      "Either pay the bribe (500 MAG) or pass the Courage Rank 2 check to enter.",
      "Inside, confirm the diverted supplies and report back to the market vendor to receive MAG and cooking materials."
    ]
  },
  {
    id: 1090,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Caravan Escort",
    location: "Martira Trade Road",
    length: "medium",
    difficulty: "Medium",
    reward: "MAG, rare trade goods, Courage growth",
    summary:
      "A merchant caravan needs protection on a stretch of road where bandits have been active. Escort them safely through two ambush encounters.",
    aiTip:
      "The second ambush includes a magic-type enemy that hits hard — position your knight Archetype in front and have your healer ready.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Caravan+Escort+walkthrough",
    walkthrough: [
      "Speak to the caravan leader at the Martira gate with the '!' marker to begin the escort.",
      "Follow the caravan along the trade road; the first bandit ambush triggers after the first bend.",
      "Defeat the first wave of bandits — they are weak to lightning.",
      "Continue escorting until the second ambush triggers near the forest clearing.",
      "Defeat the second wave including the magic-user enemy, then escort the caravan to the destination for your reward."
    ]
  },
  // ── Bounty / Hunt Quests (SQ-26 to SQ-35) ──
  {
    id: 1091,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Hunt: Forest Beast",
    location: "Forest outside Grand Trad",
    length: "short",
    difficulty: "Medium",
    reward: "Bounty coin, rare beast material",
    summary:
      "A large predatory beast has been terrorizing travellers in the forest outside Grand Trad. Accept the bounty from the recruitment center and eliminate it.",
    aiTip:
      "The Forest Beast is weak to fire — a single Mage with a fire Archetype can stagger it each round.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Hunt+Forest+Beast+walkthrough",
    walkthrough: [
      "Accept the Forest Beast bounty from the recruitment center in Grand Trad.",
      "Travel to the forest zone indicated on the world map and locate the creature's territory.",
      "Engage the beast and exploit its fire weakness to generate Press Turns for your party.",
      "Use Synthesis attacks once you have full Press Turns to burst it down quickly.",
      "Return to the recruitment center to claim the bounty reward and rare beast material."
    ]
  },
  {
    id: 1092,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Hunt: Cave Horror",
    location: "Cave system near Grand Trad",
    length: "medium",
    difficulty: "Medium",
    reward: "Bounty coin, cave mineral drops",
    summary:
      "Something horrifying lurks in the cave system east of Grand Trad. Track it to its den and exterminate it before it claims more victims.",
    aiTip:
      "Bring a torch or light-type skill — the cave has dark sections that reduce accuracy without illumination.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Hunt+Cave+Horror+walkthrough",
    walkthrough: [
      "Pick up the Cave Horror bounty at the Grand Trad recruitment center.",
      "Navigate the cave entrance using the minimap — the Horror is in the deepest chamber.",
      "Equip a light-type skill on one party member to counter the cave's accuracy penalty.",
      "The Cave Horror has a high physical defense — use magic attacks rather than physical strikes.",
      "After defeating it, loot the rare mineral drops and return to the recruitment center for the bounty payout."
    ]
  },
  {
    id: 1093,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Hunt: Bandit Leader",
    location: "Martira outskirts",
    length: "medium",
    difficulty: "Medium",
    reward: "Bounty coin, stolen goods recovered",
    summary:
      "The leader of a bandit gang operating on Martira's outskirts has a bounty on their head. Find their camp and defeat them to break up the gang.",
    aiTip:
      "The Bandit Leader surrounds themselves with three minions — use a multi-target spell to clear the adds first, then focus the leader.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Hunt+Bandit+Leader+walkthrough",
    walkthrough: [
      "Accept the Bandit Leader bounty from Martira's recruitment center.",
      "Head to the camp location on Martira's outskirts — look for smoke on the hillside.",
      "Enter the camp and trigger the boss fight; prioritize the minions with a Mage's multi-target fire spell.",
      "Focus single-target attacks on the Bandit Leader once the minions are cleared.",
      "Collect the stolen goods loot and return to the recruitment center for the full bounty reward."
    ]
  },
  {
    id: 1094,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Hunt: Swamp Creature",
    location: "Martira swamplands",
    length: "medium",
    difficulty: "High",
    reward: "Bounty coin, rare alchemical material",
    summary:
      "A massive creature has claimed the Martira swamplands, cutting off a key supply route. Eliminate it to reopen the path.",
    aiTip:
      "The Swamp Creature is resistant to physical attacks and water — bring wind or electric Archetypes for best results.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Hunt+Swamp+Creature+walkthrough",
    walkthrough: [
      "Accept the Swamp Creature bounty at the Martira recruitment center.",
      "Travel to the swamplands zone south of Martira — expect the terrain to slow movement.",
      "Locate the creature's nest in the central bog area and initiate combat.",
      "Avoid water and physical skill types — use wind or electric skills to bypass its resistances.",
      "Collect the rare alchemical material from the body and return for the bounty payout."
    ]
  },
  {
    id: 1095,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Hunt: Desert Predator",
    location: "Tradia Desert",
    length: "medium",
    difficulty: "High",
    reward: "Bounty coin, desert creature material",
    summary:
      "An apex predator is picking off caravans crossing the Tradia Desert. Hunt it down and secure the trade route.",
    aiTip:
      "Desert Predators are fast and attack first — equip an Agility-boosting accessory or use a Knight Archetype to absorb the opening hit.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Hunt+Desert+Predator+walkthrough",
    walkthrough: [
      "Pick up the Desert Predator bounty from Martira's recruitment center before heading into the desert.",
      "Travel through the Tradia Desert and look for tracks leading to the predator's hunting ground.",
      "Equip an Agility accessory or place your Knight in the front position to absorb the first strike.",
      "Use ice skills — desert predators are typically weak to ice in Metaphor.",
      "Claim the desert creature material and return for the bounty coin reward."
    ]
  },
  {
    id: 1096,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Kriegante",
    title: "Hunt: Mountain Giant",
    location: "Kriegante mountain pass",
    length: "long",
    difficulty: "High",
    reward: "Bounty coin, giant's bone material, rare equipment",
    summary:
      "A Mountain Giant is blocking the Kriegante mountain pass, making travel impossible. Take the bounty and clear the path — but be prepared for a multi-phase fight.",
    aiTip:
      "Giants have enormous HP and hit extremely hard — bring a Healer Archetype and stack physical defense buffs before engaging.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Hunt+Mountain+Giant+walkthrough",
    walkthrough: [
      "Accept the Mountain Giant bounty from the Kriegante recruitment center.",
      "Travel up the mountain pass to the giant's location — be prepared, it patrols a large area.",
      "Open with Tarukaja (attack buff) and Rakukaja (defense buff) before engaging in damage.",
      "The giant staggers at 50% HP — use Synthesis attacks during the stagger window to maximize damage.",
      "Finish with your strongest single-target skills and claim the giant's bone material and rare equipment drop."
    ]
  },
  {
    id: 1097,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Kriegante",
    title: "Hunt: Undead Commander",
    location: "Kriegante ruins",
    length: "medium",
    difficulty: "High",
    reward: "Bounty coin, undead core material",
    summary:
      "An undead commander is rallying the dead in Kriegante's ancient ruins, threatening the region. Put it down permanently and disperse its undead forces.",
    aiTip:
      "Light-element skills are essential here — both the commander and its undead retinue share a light weakness.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Hunt+Undead+Commander+walkthrough",
    walkthrough: [
      "Accept the Undead Commander bounty at the Kriegante recruitment center.",
      "Navigate the ruins to the central hall where the commander is raising the dead.",
      "Open with area-of-effect light skills to hit both the commander and its retinue simultaneously.",
      "The commander can resummon undead each turn — prioritize killing it before clearing adds.",
      "Collect the undead core material and return for the bounty coin reward."
    ]
  },
  {
    id: 1098,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Kriegante",
    title: "Hunt: Rogue Mage",
    location: "Kriegante tower",
    length: "medium",
    difficulty: "High",
    reward: "Bounty coin, spellbook material",
    summary:
      "A rogue mage has taken over a tower in Kriegante and is using it to launch magical attacks on the region. Ascend the tower and bring the mage down.",
    aiTip:
      "The Rogue Mage reflects magical attacks periodically — watch for the buff indicator and switch to physical skills when it is active.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Hunt+Rogue+Mage+walkthrough",
    walkthrough: [
      "Take the Rogue Mage bounty from the Kriegante recruitment center.",
      "Enter the tower and fight through the two floors of construct guardians — they fall easily to physical attacks.",
      "On the top floor, engage the Rogue Mage and watch for the reflect buff (shown by a golden glow).",
      "Use physical skills when the reflect is active; switch back to magic once it drops.",
      "Defeat the mage, loot the spellbook material, and return for the bounty."
    ]
  },
  {
    id: 1099,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Hunt: Arena Champion",
    location: "Grand Trad Arena",
    length: "medium",
    difficulty: "Very High",
    reward: "Bounty coin, champion's emblem, rare equipment",
    summary:
      "A rogue fighter has claimed the Grand Trad Arena's champion title through force and intimidation. Challenge them in a regulated bout and take back the title.",
    aiTip:
      "The Arena Champion has no elemental weakness — fight with your strongest physical Archetypes and buff up before the match.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Hunt+Arena+Champion+walkthrough",
    walkthrough: [
      "Pick up the Arena Champion bounty from the Grand Trad recruitment center.",
      "Register at the arena front desk and wait for the match to be announced.",
      "In the pre-fight phase, use all your buff skills (Tarukaja, Rakukaja) before the champion acts.",
      "The champion uses multi-hit physical attacks — keep your entire party above 60% HP at all times.",
      "Finish with your party's strongest physical Synthesis attack and claim the champion's emblem and rare equipment."
    ]
  },
  {
    id: 1100,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Skanda",
    title: "Hunt: Ancient Guardian",
    location: "Skanda ancient ruins",
    length: "long",
    difficulty: "Very High",
    reward: "Bounty coin, ancient core material, top-tier gear",
    summary:
      "An Ancient Guardian has awoken in Skanda's ruins and is classified as an SSS-rank threat. The highest-tier bounty in the game — only attempt it with maxed Archetypes.",
    aiTip:
      "The Ancient Guardian cycles through elemental buffs — bring a party that can exploit multiple elements and switch targets based on the active cycle.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Hunt+Ancient+Guardian+walkthrough",
    walkthrough: [
      "Accept the Ancient Guardian bounty at the Skanda recruitment center — requires having cleared all previous bounties.",
      "Enter the ruins and navigate to the inner sanctum where the guardian stands dormant.",
      "The guardian cycles through fire, ice, and lightning resistance every two turns — hit the non-resisted element each cycle.",
      "At 30% HP the guardian enters berserker mode, ignoring its own weaknesses — use buffs and full Synthesis attacks.",
      "After defeating it, collect the ancient core material and top-tier gear, then claim the final bounty reward."
    ]
  },
  // ── Investigation / Story Side Quests (SQ-36 to SQ-45) ──
  {
    id: 1101,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Church Investigation",
    location: "Grand Trad Cathedral District",
    length: "medium",
    difficulty: "Medium",
    reward: "MAG, Wisdom growth, key lore revelation",
    summary:
      "Suspicious activity in Grand Trad's cathedral district warrants an investigation. Interview clergy, search restricted areas, and uncover who is operating in the shadows of the church.",
    aiTip:
      "One of the priests you need to interview will only speak to you after a Wisdom Rank 3 dialogue check — raise Wisdom first.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Church+Investigation+walkthrough",
    walkthrough: [
      "Accept the investigation request from the contact with the '!' marker near the cathedral.",
      "Interview three clergy members in the district — note their inconsistencies.",
      "Gain access to the restricted archive by passing the Wisdom Rank 3 check with the senior priest.",
      "Search the archive for the relevant documents and piece together the evidence.",
      "Return to your contact with the findings to receive MAG, Wisdom growth, and a lore document."
    ]
  },
  {
    id: 1102,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Political Spy Hunt",
    location: "Martira Government District",
    length: "medium",
    difficulty: "Medium",
    reward: "MAG, intel on rival election candidates",
    summary:
      "A spy is leaking election campaign intelligence in Martira. Identify them before they can report to their handlers and eliminate the information leak.",
    aiTip:
      "The spy rotates between three locations on a schedule — visit each location in the morning, afternoon, and evening to catch them in the act.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Political+Spy+Hunt+walkthrough",
    walkthrough: [
      "Accept the quest from the contact in the Martira government district.",
      "Visit the three indicated locations — government office, market, and tavern — at different times of day.",
      "At the tavern in the evening, spot the spy making contact with their handler.",
      "Follow the spy without being detected (stay behind cover objects) to their drop point.",
      "Confront the spy at the drop point — a brief combat or dialogue check concludes the quest."
    ]
  },
  {
    id: 1103,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Missing Official",
    location: "Martira",
    length: "medium",
    difficulty: "Medium",
    reward: "MAG, Courage growth, city access improvement",
    summary:
      "A mid-ranking official who handles merchant permits has gone missing. Find them — the trail leads somewhere unexpected and reveals a minor conspiracy.",
    aiTip:
      "The official is being held in the dockside warehouse — you need Courage Rank 2 to bluff past the guard at the gate.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Missing+Official+walkthrough",
    walkthrough: [
      "Speak to the official's aide with the '!' marker in the Martira government building.",
      "Ask merchants in the market about the official — one saw them near the docks.",
      "Head to the dockside warehouse gate and use the Courage Rank 2 dialogue check to bluff entry.",
      "Inside, locate the official in a locked back room and confront the minor conspirators holding them.",
      "Escort the official back to the government building and receive MAG, Courage growth, and improved merchant permit access."
    ]
  },
  {
    id: 1104,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Underground Network",
    location: "Grand Trad Underground",
    length: "long",
    difficulty: "High",
    reward: "MAG, rare crafting materials, Archetype mastery",
    summary:
      "Rumours point to an underground network operating beneath Grand Trad dealing in stolen Archetypes. Infiltrate it and shut it down before it grows further.",
    aiTip:
      "The underground entrance is accessed through a hidden door in the market's eastern alley — inspect the cracked wall to reveal it.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Underground+Network+walkthrough",
    walkthrough: [
      "Accept the investigation tip from the informant with the '!' marker in the market alley.",
      "Inspect the cracked wall in the eastern alley to find and open the hidden entrance.",
      "Navigate the underground tunnels — fight through two rooms of low-rank enemies.",
      "Reach the network's storage room and confront the mid-boss guarding the stolen Archetype codices.",
      "Defeat the mid-boss, recover the codices, and bring them to the Grand Trad authorities for the reward."
    ]
  },
  {
    id: 1105,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Smuggling Ring",
    location: "Port Brilehaven, Martira",
    length: "long",
    difficulty: "High",
    reward: "MAG, confiscated trade goods, Wisdom growth",
    summary:
      "A smuggling operation at Port Brilehaven is funnelling goods to Louis's faction. Expose the ring's ringleader and disrupt the supply chain.",
    aiTip:
      "The ringleader is disguised as a dockworker — use the Wisdom dialogue check to identify them from a group of three suspects.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Smuggling+Ring+walkthrough",
    walkthrough: [
      "Accept the quest from the customs officer with the '!' marker at Port Brilehaven.",
      "Inspect the three marked cargo areas on the docks for suspicious manifests.",
      "Return to the customs officer with the manifests — one has forged paperwork.",
      "Confront the group of dockworkers and use the Wisdom Rank 3 check to identify the ringleader.",
      "A short combat encounter follows; defeat the ringleader's bodyguards and receive the full reward."
    ]
  },
  {
    id: 1106,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Hidden Archive",
    location: "Grand Trad Library",
    length: "medium",
    difficulty: "Low",
    reward: "MAG, lore document, Wisdom growth",
    summary:
      "A historian believes a hidden archive beneath Grand Trad's library holds records that could change the kingdom's official history. Help access and retrieve the documents.",
    aiTip:
      "The hidden archive door requires solving a three-part symbol puzzle — the solution is hinted at in the books on the library's upper floor.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Hidden+Archive+walkthrough",
    walkthrough: [
      "Speak to the historian with the '!' marker in Grand Trad's library.",
      "Read the three relevant books on the upper floor to gather the symbol puzzle hints.",
      "Descend to the basement and input the correct symbol sequence on the archive door.",
      "Explore the archive and retrieve the two key documents the historian needs.",
      "Return to the historian for MAG, a lore document that adds to your quest log, and Wisdom growth."
    ]
  },
  {
    id: 1107,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Secret Experiment",
    location: "Martira Research Facility",
    length: "long",
    difficulty: "High",
    reward: "MAG, experimental equipment, Wisdom growth",
    summary:
      "A whistleblower reveals that illegal experiments are being conducted in a Martira research facility. Investigate, gather evidence, and neutralise the experiment before it escapes.",
    aiTip:
      "The experimental creature that escapes at the quest's climax has no elemental weakness — use debuffs to reduce its stats and outlast it.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Secret+Experiment+walkthrough",
    walkthrough: [
      "Meet the whistleblower at the Martira marketplace to receive the facility location and access key.",
      "Enter the research facility after hours and document the experiments in the first two labs.",
      "The experiment escapes its containment in the third lab — prepare for a boss fight immediately.",
      "Without an elemental weakness, use Rakukaja (defense buff) and debuffs on the creature to control the fight.",
      "After defeating it, collect the experimental equipment and bring the evidence to Martira's council for the reward."
    ]
  },
  {
    id: 1108,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Kriegante",
    title: "Noble Conspiracy",
    location: "Kriegante Castle Town",
    length: "long",
    difficulty: "High",
    reward: "MAG, political intel, Wisdom growth",
    summary:
      "Noble families in Kriegante are conspiring to tip the Royal Election through fraud and intimidation. Expose the conspiracy to protect the election's integrity.",
    aiTip:
      "This quest has three investigation stages spread across three calendar days — start it at least four days before the next main quest deadline.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Noble+Conspiracy+walkthrough",
    walkthrough: [
      "Accept the quest from the anonymous tip contact with the '!' marker in Kriegante's town square.",
      "On day 1, investigate the noble's estate by interviewing servants — gather statements from two of them.",
      "On day 2, follow the money trail to the Kriegante counting house and access the fraudulent ledger.",
      "On day 3, confront the noble conspirators at their planned meeting location.",
      "Defeat the hired guards they bring to the confrontation and hand the evidence to the election commission for the reward."
    ]
  },
  {
    id: 1109,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Royal Document Recovery",
    location: "Grand Trad Royal Archive",
    length: "medium",
    difficulty: "Medium",
    reward: "MAG, royal seal item, Courage growth",
    summary:
      "Critical royal documents have gone missing from the archive during the political chaos. Retrieve them before they fall into the wrong hands.",
    aiTip:
      "The thief who stole the documents took them to the market district — a Courage Rank 2 check convinces a fence to give up the buyer's location.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Royal+Document+Recovery+walkthrough",
    walkthrough: [
      "Speak to the archive custodian with the '!' marker in the Grand Trad Royal Archive.",
      "Head to the market and locate the fence who received the stolen documents.",
      "Pass the Courage Rank 2 dialogue check to get the buyer's identity and location.",
      "Confront the buyer in the noble district — a short combat encounter follows.",
      "Recover the documents and return them to the archive for MAG, the royal seal item, and Courage growth."
    ]
  },
  {
    id: 1110,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Assassin Plot",
    location: "Martira",
    length: "long",
    difficulty: "Very High",
    reward: "MAG, rare weapon, Courage growth",
    summary:
      "An assassination plot targeting an election candidate has been uncovered. Stop the assassins before the target is killed — failure ends the candidate's campaign permanently.",
    aiTip:
      "This quest is time-sensitive: once accepted, you have two calendar days to complete it. The assassins are among the toughest enemies in the side quest pool.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Assassin+Plot+walkthrough",
    walkthrough: [
      "Accept the urgent tip from the informant at Martira's tavern — the clock starts immediately.",
      "Head to the candidate's safehouse and confirm the threat — pick up the assassins' trail from a witness.",
      "Track the assassins to their staging point on the city's outskirts before nightfall on day 1.",
      "Engage and defeat the two assassin vanguards — they hit hard; open with full buffs and Synthesis attacks.",
      "Defeat the lead assassin (the toughest fight) and receive the rare weapon drop and Courage growth reward."
    ]
  },
  // ── Retrieval / Dungeon Side Quests (SQ-46 to SQ-55) ──
  {
    id: 1111,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Retrieve Sacred Artifact",
    location: "Grand Trad Cathedral Vault",
    length: "medium",
    difficulty: "Medium",
    reward: "MAG, sacred artifact item, bond growth",
    summary:
      "A sacred artifact has been moved to an unsecured part of the Grand Trad cathedral. Retrieve it before thieves can claim it.",
    aiTip:
      "The vault section of the cathedral has dark corridors that lower accuracy — equip a light skill before entering.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Retrieve+Sacred+Artifact+walkthrough",
    walkthrough: [
      "Speak to the cathedral keeper with the '!' marker about the missing artifact.",
      "Enter the lower cathedral vault via the side passage behind the main altar.",
      "Navigate the dark corridors using a light skill to maintain accuracy.",
      "Retrieve the sacred artifact from the unmarked chest in the vault's final chamber.",
      "Return it to the cathedral keeper for MAG and a bond growth reward."
    ]
  },
  {
    id: 1112,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Recover Lost Weapon",
    location: "Martira battlefields",
    length: "medium",
    difficulty: "Medium",
    reward: "MAG, unique weapon, Courage growth",
    summary:
      "A soldier's heirloom weapon was lost on the battlefield outside Martira. Enter the monster-infested field to find it.",
    aiTip:
      "The weapon is in a chest guarded by a stronger-than-usual field enemy — preemptive strike from behind to get the initiative advantage.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Recover+Lost+Weapon+walkthrough",
    walkthrough: [
      "Accept the quest from the veteran soldier with the '!' marker at Fort Endra.",
      "Travel to the battlefield zone outside Martira marked on the map.",
      "Navigate the monster-infested field and locate the chest with the glowing marker.",
      "Strike from behind the guarding enemy to get a preemptive round advantage.",
      "After defeating the guardian, loot the chest and return the heirloom weapon to the soldier for your reward."
    ]
  },
  {
    id: 1113,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Skanda",
    title: "Ancient Relic Hunt",
    location: "Skanda ruins",
    length: "long",
    difficulty: "High",
    reward: "MAG, ancient relic equipment, Archetype mastery",
    summary:
      "A collector in Skanda is seeking ancient relics buried in the region's ruins. Retrieve three specific pieces from different ruin chambers.",
    aiTip:
      "Each chamber has a trap mechanic — step on the correct floor tiles to deactivate traps before opening the relic chest.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Ancient+Relic+Hunt+walkthrough",
    walkthrough: [
      "Accept the hunt from the collector with the '!' marker in Skanda's town.",
      "Travel to the Skanda ruins and enter the first chamber — deactivate the trap tiles before opening the chest.",
      "Proceed to the second chamber; the trap pattern here mirrors the wall symbols near the entrance.",
      "In the third chamber, defeat the guardian enemy protecting the most valuable relic.",
      "Return all three relics to the collector for a large MAG reward and ancient relic equipment."
    ]
  },
  {
    id: 1114,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Dungeon Key Search",
    location: "Martira Dungeon",
    length: "medium",
    difficulty: "Medium",
    reward: "MAG, dungeon loot access, crafting materials",
    summary:
      "The key to a sealed treasure vault inside Martira's dungeon has been misplaced. Find the key and unlock the vault for the dungeon's keeper.",
    aiTip:
      "The key is held by a mid-boss on floor two — it will not drop unless you trigger the quest first, so accept it before entering the dungeon.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Dungeon+Key+Search+walkthrough",
    walkthrough: [
      "Speak to the dungeon keeper with the '!' marker at the Martira dungeon entrance.",
      "Enter the dungeon and proceed to floor two, fighting through the standard enemy patrol.",
      "Locate the mid-boss on floor two and defeat it to obtain the dungeon key.",
      "Use the key on the sealed vault door in floor one's side corridor.",
      "Loot the vault and return to the keeper with confirmation for MAG and crafting materials."
    ]
  },
  {
    id: 1115,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Hidden Treasure Map",
    location: "Grand Trad and surrounds",
    length: "medium",
    difficulty: "Low",
    reward: "Large MAG payout, rare equipment",
    summary:
      "An old treasure map has surfaced in Grand Trad's market. Decode the map's clues to find the buried treasure before another party gets there first.",
    aiTip:
      "The three map clues correspond to city landmarks — the fountain, the gate, and the old tree — each pointing to the next location.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Hidden+Treasure+Map+walkthrough",
    walkthrough: [
      "Purchase or receive the treasure map from an NPC with the '!' marker in the market.",
      "Visit the fountain landmark and examine it to find the first directional clue.",
      "Follow the clue to the city gate area and examine the base of the eastern pillar.",
      "The second clue points to the old tree outside the residential district — dig at its base.",
      "Collect the buried chest and open it for the rare equipment and large MAG payout."
    ]
  },
  {
    id: 1116,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Forgotten Library",
    location: "Abandoned Wing, Grand Trad Library",
    length: "medium",
    difficulty: "Medium",
    reward: "MAG, lore books, Wisdom growth",
    summary:
      "A librarian reveals that an abandoned wing of the Grand Trad library holds books sealed off for decades. Clear out the monsters that moved in and recover the lost volumes.",
    aiTip:
      "The enemies in the abandoned wing are undead — bring light-element skills to sweep them efficiently.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Forgotten+Library+walkthrough",
    walkthrough: [
      "Speak to the librarian with the '!' marker about the forbidden abandoned wing.",
      "Gain access to the wing via a key the librarian provides.",
      "Clear through the three rooms of undead enemies using light-element skills.",
      "Collect the four sealed tomes scattered on the reading tables in the final room.",
      "Return the tomes to the librarian for MAG and Wisdom growth."
    ]
  },
  {
    id: 1117,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Martira",
    title: "Sunken Ruins Expedition",
    location: "Coastal ruins near Martira",
    length: "long",
    difficulty: "High",
    reward: "MAG, waterlogged treasure, unique accessory",
    summary:
      "Partially submerged coastal ruins near Martira hide a cache of pre-kingdom treasures. Wade into the ruins and retrieve them before the tides rise again.",
    aiTip:
      "The boss guarding the treasure cache is ice-elemental — bring fire Archetypes for easy damage and exploit the weakness for Press Turns.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Sunken+Ruins+Expedition+walkthrough",
    walkthrough: [
      "Accept the expedition request from the adventurer with the '!' marker at Port Brilehaven.",
      "Travel to the coastal ruins location and navigate the flooded first floor on foot.",
      "Fight through the aquatic enemies — they are weak to lightning.",
      "Reach the central chamber where the ice-elemental boss guards the treasure cache.",
      "Exploit the boss's fire weakness, loot the cache, and return to the adventurer for the unique accessory reward."
    ]
  },
  {
    id: 1118,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Skanda",
    title: "Crystal Core Retrieval",
    location: "Skanda Crystal Caves",
    length: "long",
    difficulty: "High",
    reward: "MAG, crystal core material, rare Archetype equipment",
    summary:
      "A craftsman in Skanda needs a crystal core from the depths of the local crystal caves to forge a special weapon. Retrieve the core from the cave's guarded inner chamber.",
    aiTip:
      "The Crystal Guardian boss shatters into multiple smaller crystals when damaged — use area-of-effect skills to damage all fragments simultaneously.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Crystal+Core+Retrieval+walkthrough",
    walkthrough: [
      "Accept the commission from the craftsman with the '!' marker in Skanda's market.",
      "Enter the crystal caves and follow the luminescent trail to the inner chamber.",
      "The Crystal Guardian splits into four fragments at 50% HP — switch to area-of-effect skills immediately.",
      "Once all fragments are defeated, the crystal core is accessible in the cave's central plinth.",
      "Retrieve the core and bring it to the craftsman for the unique Archetype equipment reward."
    ]
  },
  {
    id: 1119,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Kriegante",
    title: "Forbidden Tome",
    location: "Kriegante Castle Library",
    length: "medium",
    difficulty: "Medium",
    reward: "MAG, forbidden tome (lore item), Wisdom growth",
    summary:
      "A forbidden tome locked away in Kriegante Castle's private library contains dangerous knowledge. Retrieve it before the wrong people read it.",
    aiTip:
      "Access to the castle library requires either Louis's enemy status to have been established in the story, or a Wisdom Rank 4 forgery check.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Forbidden+Tome+walkthrough",
    walkthrough: [
      "Accept the quest from the scholar contact with the '!' marker in Kriegante's town.",
      "Gain castle library access via the story flag or the Wisdom Rank 4 forgery check.",
      "Navigate the library's restricted section — the tome is on the top shelf of the third bookcase.",
      "A castle guard patrols the area; time your movement to avoid triggering combat.",
      "Retrieve the tome and deliver it to the scholar for MAG and Wisdom growth."
    ]
  },
  {
    id: 1120,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Skanda",
    title: "Mystic Orb Recovery",
    location: "Skanda Spirit Shrine",
    length: "long",
    difficulty: "Very High",
    reward: "MAG, mystic orb (key item), powerful Archetype boost",
    summary:
      "A mystic orb of enormous power has been stolen from Skanda's spirit shrine and taken deep into a spirit-infested ruin. Recover it before it falls into enemy hands.",
    aiTip:
      "The spirit enemies here drain MP instead of HP on their special attacks — bring MP recovery items or a Knight tank to absorb the drain.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Mystic+Orb+Recovery+walkthrough",
    walkthrough: [
      "Accept the recovery quest from the shrine keeper with the '!' marker at Skanda's spirit shrine.",
      "Enter the ruin and encounter the spirit enemies — bring MP recovery items to counter their drain attacks.",
      "The orb is held by the Ruin Specter boss on the final floor — it reflects magic periodically.",
      "Use physical attacks during the reflect phase and magic during the open phase.",
      "Retrieve the mystic orb after defeating the Ruin Specter and return it to the shrine keeper for a powerful Archetype boost reward."
    ]
  },
  // ── Special / Time-Gated Quests (SQ-56 to SQ-65) ──
  {
    id: 1121,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Festival Preparation",
    location: "Grand Trad",
    length: "short",
    difficulty: "Low",
    reward: "MAG, festival-exclusive items, social stat growth",
    summary:
      "Grand Trad is holding a festival and volunteers are needed to help set up. A brief but rewarding quest that unlocks festival-exclusive items only available during this calendar window.",
    aiTip:
      "The festival quest is available for only two calendar days — accept and complete it immediately when it appears.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Festival+Preparation+walkthrough",
    walkthrough: [
      "Spot the '!' marker at the Grand Trad plaza — it appears only during the designated festival calendar window.",
      "Accept the organizer's request and complete the three preparation tasks: gather supplies, decorate the stall, and recruit a performer.",
      "Each task is in a different part of the city — use the minimap markers to locate them efficiently.",
      "Return to the organizer after completing all three tasks to trigger the festival opening cutscene.",
      "Collect festival-exclusive items and social stat growth from the concluding conversation."
    ]
  },
  {
    id: 1122,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Tournament Qualifier",
    location: "Grand Trad Arena",
    length: "medium",
    difficulty: "High",
    reward: "MAG, arena ranking, equipment prize",
    summary:
      "Qualify for the Grand Trad Arena's main tournament bracket by winning the qualifier rounds. Three consecutive fights with increasing difficulty.",
    aiTip:
      "The third qualifier opponent uses a full buff rotation on turn one — dispel their buffs immediately with a Mage's dekaja skill.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Tournament+Qualifier+walkthrough",
    walkthrough: [
      "Register at the Grand Trad Arena front desk for the qualifier tournament.",
      "Win the first qualifier fight — the opponent is straightforward, weak to ice.",
      "Win the second fight — the opponent uses physical skills; keep your HP above 50%.",
      "In the third fight, dispel the opponent's full buff stack immediately using dekaja, then burst with Synthesis attacks.",
      "Collect the equipment prize and your arena ranking card at the conclusion."
    ]
  },
  {
    id: 1123,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Arena Challenge Series",
    location: "Grand Trad Arena",
    length: "long",
    difficulty: "Very High",
    reward: "MAG, champion title, rare equipment set",
    summary:
      "A multi-match challenge gauntlet at the Grand Trad Arena. Survive consecutive fights without recovering HP between rounds to claim the champion title and top-tier equipment.",
    aiTip:
      "Stock consumable HP restoratives before entering — you cannot visit the shop between rounds. Bring a healer Archetype as your primary.",
    video: "https://www.youtube.com/watch?v=WicCVm90Phw"
  },
  {
    id: 1124,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Grand Trad",
    title: "Companion Trial",
    location: "Various — unlocked via Follower bonds",
    length: "medium",
    difficulty: "High",
    reward: "Unique companion ability, bond max rank",
    summary:
      "Each party member has a final Companion Trial that tests them in a scenario tied to their personal story. Completing it maxes their bond rank and unlocks their ultimate ability.",
    aiTip:
      "Companion Trials unlock only after reaching Follower Rank 9 with the corresponding party member — invest time in their bond early.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Companion+Trial+walkthrough",
    walkthrough: [
      "Reach Follower Rank 9 with the companion whose trial you want to unlock.",
      "The '!' trial marker appears at the companion's preferred location in the current city.",
      "Accept the trial and engage in the story scenario unique to that companion's arc.",
      "A final combat challenge occurs — use the companion's signature Archetype synergy to win.",
      "Completion rewards max bond rank, the companion's ultimate ability, and a closing character scene."
    ]
  },
  {
    id: 1125,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Skanda",
    title: "Secret Ending Requirement Quest",
    location: "Various — calendar-dependent",
    length: "long",
    difficulty: "Very High",
    reward: "Secret ending route unlocked",
    summary:
      "A hidden set of conditions that, when fulfilled, unlocks a secret ending path. Requires maxing specific Follower bonds, completing all Virtue Trials, and clearing a hidden dungeon before the final deadline.",
    aiTip:
      "Start this checklist from day one: max Gallica and Louis's bonds, complete all five Virtue Trials, and unlock the secret dungeon by reading the hidden memo in the Skanda library.",
    video: "https://www.youtube.com/watch?v=tOx-mhC-VeY"
  },
  {
    id: 1126,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Skanda",
    title: "Final Preparation Task",
    location: "Gauntlet Runner / Skanda",
    length: "short",
    difficulty: "Low",
    reward: "Party stat buffs, final supplies",
    summary:
      "A small set of tasks on the Gauntlet Runner and in Skanda town before the final dungeon locks out side content. Completing them provides permanent stat buffs for the finale.",
    aiTip:
      "These tasks are only available in the short window after MQ-09 and before entering the Skybound Avatar — do not skip them.",
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Final+Preparation+Task+walkthrough",
    walkthrough: [
      "After MQ-09 completes, speak to each party member on the Gauntlet Runner with a '!' marker.",
      "Complete the three short activities they request — each takes less than one calendar day.",
      "Visit the Skanda shop keeper with the '!' marker to receive a special pre-final supply package.",
      "Use the supply package before entering the final dungeon to apply the permanent stat buffs.",
      "Once all tasks are done, confirm readiness with Gallica to trigger the final dungeon entry."
    ]
  },
  {
    id: 1127,
    type: "side",
    game: "Metaphor: ReFantazio",
    region: "Skanda",
    title: "Hidden Postgame Challenge",
    location: "Skanda Secret Dungeon",
    length: "long",
    difficulty: "Very High",
    reward: "Postgame trophy, ultimate equipment, true platinum route",
    summary:
      "A secret dungeon only accessible after clearing the true ending. The ultimate challenge of Metaphor: ReFantazio — enemies here exceed final boss difficulty and require maxed-out Archetypes.",
    aiTip:
      "Bring your three strongest Archetype builds and enough revival items for a sustained run. The final floor boss has no elemental weakness.",
    walkthrough: [
      "Complete the true ending route and reach the postgame save point.",
      "Look for the hidden dungeon entrance in the Skanda region — it only appears after the credits.",
      "Stock up on revival items, MP restoratives, and high-tier consumables before entering.",
      "Each floor introduces enemies that exceed final-boss difficulty; use Press Turn mechanics to chain weaknesses.",
      "Max out your three primary Archetypes before attempting — underlevelled parties will be wiped on floor 3+.",
      "The final floor boss has no elemental weakness; use your strongest physical and almighty skills.",
      "Clearing the dungeon unlocks the ultimate equipment set and the platinum trophy route."
    ],
    video: "https://www.youtube.com/results?search_query=Metaphor+ReFantazio+Hidden+Postgame+Challenge+secret+dungeon"
  },
  {
    id: 1134,
    type: "main",
    category: "Atsu's Journey",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "The Snake",
    location: "Yōtei Grasslands — Roadside Outpost",
    length: "short",
    difficulty: "Low",
    reward: "First Yōtei Six kill, Ghost Stance seeds",
    summary:
      "Atsu tracks down the Snake — the first of the Yōtei Six — a drunk, cowardly bandit lord who terrorises the outer grassland roads. The confrontation ends in a disarming QTE after he throws sand in Atsu's eyes.",
    aiTip:
      "The Snake is the easiest of the Six. When he reaches back to grab dirt, dodge sideways immediately — the sand blinds you if you stay still. Block and counter-attack through his drunken stagger.",
    video: "https://www.youtube.com/watch?v=g1DcufkkCTU"
  },
  {
    id: 1135,
    type: "main",
    category: "Atsu's Journey",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "The Old Inn",
    location: "Yōtei Grasslands — Riverside Inn",
    length: "medium",
    difficulty: "Low",
    reward: "Map expansion, first ally contact",
    summary:
      "Atsu finds her first safe haven at a crumbling roadside inn and begins building the network of contacts she needs to hunt the rest of the Yōtei Six. An old innkeeper reveals what she knows of the gang's movements.",
    aiTip:
      "Talk to every NPC in the inn — optional conversations unlock rumours that mark bounty targets on your map before you'd naturally discover them.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Old+Inn+walkthrough",
    walkthrough: [
      "Follow the road north from the Snake's outpost into the Yōtei Grasslands proper.",
      "Locate the Riverside Inn marked on your map — clear the two bandits loitering outside.",
      "Speak with the innkeeper Hana at the counter to trigger the main cutscene.",
      "Choose dialogue options to press her for information about the Yōtei Six's current base.",
      "After the cutscene, speak with all three other NPCs in the common room for optional lore and rumours.",
      "Rest at the inn to unlock the map expansion and advance to the next main quest."
    ]
  },
  {
    id: 1136,
    type: "main",
    category: "Atsu's Journey",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "The Way of Dual Katana",
    location: "Yōtei Grasslands — Training Ground",
    length: "medium",
    difficulty: "Medium",
    reward: "Dual Katana weapon system unlocked",
    summary:
      "A wandering ronin recognises Atsu's raw skill and offers to teach her the dual-blade style. A series of combat trials culminates in a duel that unlocks the dual katana as Atsu's signature weapon.",
    aiTip:
      "The dual katana's fast flurry attacks excel against lightly armoured enemies. Complete the optional bonus trial at the end to unlock the first upgrade slot immediately.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Way+of+Dual+Katana+walkthrough",
    walkthrough: [
      "Accept the ronin's offer at the training ground marker in the western Grasslands.",
      "Complete Trial 1: defeat three straw dummies within the time limit using basic slashes.",
      "Complete Trial 2: survive a sparring bout against the ronin without taking more than two hits.",
      "Complete Trial 3: chain a five-hit combo — the game prompts the input sequence on screen.",
      "Finish the final duel against the ronin; block his overhead strike and counter three times to end it.",
      "Collect the dual katana from the chest and equip it from the weapon wheel."
    ]
  },
  {
    id: 1137,
    type: "main",
    category: "Atsu's Journey",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "Saito",
    location: "Yōtei Grasslands — Fort Takeda",
    length: "long",
    difficulty: "Medium",
    reward: "Second Yōtei Six kill, Ghost tool upgrade",
    summary:
      "Saito, the strategic mind of the Yōtei Six, has fortified himself inside a riverside fort surrounded by elite guards. Atsu must infiltrate the fort, dismantle his defences, and fight him in a one-on-one duel.",
    aiTip:
      "Saito counters every direct assault — use the Ghost stance to terrify outer guards before entering so you face fewer enemies inside. In the duel, bait his triple-slash then punish the recovery.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Saito+walkthrough",
    walkthrough: [
      "Investigate the fort exterior and find the three weak-point entrances marked by owl symbols.",
      "Eliminate the two rooftop archers silently before breaching — they alert everyone if missed.",
      "Work through the courtyard using fear kills to build Ghost Stance before the inner gate.",
      "Eavesdrop on the two guards near the barracks to learn Saito's patrol schedule.",
      "Confront Saito in the inner courtyard; the duel begins automatically after the cutscene.",
      "Bait his triple slash combo, dodge the third hit, and counter with a heavy dual-katana strike.",
      "Finish with a Ghost Stance execution when his posture breaks to end the mission."
    ]
  },
  {
    id: 1138,
    type: "main",
    category: "Atsu's Journey",
    game: "Ghost of Yotei",
    region: "Multiple",
    title: "The Yōtei Six",
    location: "Ezo — Multiple Regions",
    length: "long",
    difficulty: "Medium",
    reward: "Open hunt system unlocked, regional map markers",
    summary:
      "With two members of the Six dead, Atsu learns the rest have scattered across Ezo. This quest opens the free-roaming hunt system and marks the remaining four targets across the game's regions.",
    aiTip:
      "You can tackle the remaining four members in any order. Do the Mythic Tales and Sensei quests in each region first — the gear and skills you earn will make each Six encounter significantly easier.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Yōtei+Six+walkthrough",
    walkthrough: [
      "After Saito's defeat, return to the Riverside Inn and speak with Hana for new intelligence.",
      "A cutscene reveals the remaining four members have fled to Tokachi, Teshio, Ishikari, and Oshima.",
      "Open the map — four new main quest markers appear, one per region.",
      "Travel to any region of your choice; the game recommends Tokachi as the natural next step.",
      "Complete each region's main quest to eliminate the corresponding Six member.",
      "Return to the Grasslands after all four are dead to trigger the next story cutscene."
    ]
  },
  {
    id: 1139,
    type: "main",
    category: "Atsu's Journey",
    game: "Ghost of Yotei",
    region: "Multiple",
    title: "The Oni",
    location: "Tokachi Range — Oni's Stronghold",
    length: "long",
    difficulty: "High",
    reward: "Third Yōtei Six kill, heavy armour upgrade",
    summary:
      "The Oni is a hulking enforcer who wears demonic armour and leads raids across Tokachi. He fights with overwhelming power and uses subordinates as shields. Atsu must outmanoeuvre both him and his elite guard.",
    aiTip:
      "The Oni's overhead slams are unblockable — watch for the red glow on his gauntlets. Dodge to his left flank and strike twice before repositioning. The Kusarigama's ranged pull breaks his guard stance.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Oni+walkthrough",
    walkthrough: [
      "Infiltrate the Oni's stronghold via the cliffside route marked on the Tokachi map.",
      "Eliminate the four courtyard guards quietly — the Oni patrols inside and will join if alerted.",
      "Use the environment: collapse the hanging cage to distract the two inner guards.",
      "Trigger the boss fight by entering the main hall; the Oni ambushes you from behind a pillar.",
      "Dodge his overhead slams left and attack twice from his flank — never attack from the front.",
      "At half health he calls two elite guards; use Ghost Stance to wipe them quickly.",
      "Land the final blow during his exhaustion animation to trigger the execution cutscene."
    ]
  },
  {
    id: 1140,
    type: "main",
    category: "Atsu's Journey",
    game: "Ghost of Yotei",
    region: "Multiple",
    title: "The Kitsune",
    location: "Nayoro Wilds — Spirit Shrine",
    length: "medium",
    difficulty: "Medium",
    reward: "Fourth Yōtei Six kill, stealth technique upgrade",
    summary:
      "The Kitsune uses disguise and poison to operate unseen. Atsu must see through the deception, track the real Kitsune through the Nayoro spirit shrines, and fight them before the poison takes full effect.",
    aiTip:
      "Equip herbal medicine before this quest — the Kitsune opens with a poisoned dart. Identify the real Kitsune by the slight limp on their right side during the disguise phase.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Kitsune+walkthrough",
    walkthrough: [
      "Follow the rumour chain in Nayoro to the Spirit Shrine district — three NPCs each give a clue.",
      "At the shrine, you encounter three identical-looking figures; observe movement to spot the limp.",
      "Pursue the real Kitsune through the forest shrine path — they drop smoke bombs every 30 seconds.",
      "Use your listening sense (L2 pulse) to track them through smoke.",
      "Corner the Kitsune at the upper shrine; they attack with a poisoned tantō and quick dodges.",
      "Stay aggressive — the Kitsune has low health but will flee and reset if given breathing room.",
      "Collect the spirit token from the body and return it to the Nayoro elder to complete the quest."
    ]
  },
  {
    id: 1141,
    type: "main",
    category: "Atsu's Journey",
    game: "Ghost of Yotei",
    region: "Multiple",
    title: "The Saito Brothers (Part 1)",
    location: "Ishikari Plain — Saito Manor",
    length: "long",
    difficulty: "High",
    reward: "Story revelation, access to Oshima",
    summary:
      "The elder Saito brother is revealed to be the true architect of the massacre that destroyed Atsu's village. A confrontation at Saito Manor unravels the conspiracy behind the Yōtei Six — and ends in a shocking betrayal.",
    aiTip:
      "Save before entering the manor. The final encounter has no checkpoint — if you die you restart from the manor gate. Stock up on healing items and use every stealth advantage before the confrontation.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Saito+Brothers+(Part+1)+walkthrough",
    walkthrough: [
      "Investigate the three Saito Manor outposts to gather evidence — each is guarded by six elites.",
      "Present the evidence to your ally at the Ishikari inn to confirm the elder brother's location.",
      "Infiltrate the manor at night using the dry moat on the eastern side.",
      "Eliminate all guards before reaching the elder Saito — a full alert triggers a failed state.",
      "Witness the cutscene that reveals the conspiracy; do not skip it as it changes available dialogue.",
      "Survive the ambush by twelve guards after the revelation — Ghost Stance is essential here.",
      "Escape through the manor's underground passage to trigger Part 2's unlock."
    ]
  },
  {
    id: 1142,
    type: "main",
    category: "Atsu's Journey",
    game: "Ghost of Yotei",
    region: "Multiple",
    title: "The Saito Brothers (Part 2)",
    location: "Oshima Coast — Sea Fortress",
    length: "long",
    difficulty: "High",
    reward: "Fifth Yōtei Six kill, legendary weapon upgrade",
    summary:
      "Atsu pursues the elder Saito brother to his sea fortress on the Oshima Coast for a final reckoning. A brutal two-phase duel determines whether the conspiracy dies with him.",
    aiTip:
      "Phase 1 is a sword duel — standard parry timing. Phase 2 he uses a spear; switch your deflect timing to half a beat later than normal. Break his posture three times to end the fight.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Saito+Brothers+(Part+2)+walkthrough",
    walkthrough: [
      "Sail to the Oshima sea fortress using the boat at the Nayoro harbour.",
      "Scale the sea cliffs on the fortress blind side — avoid the searchlight sweep pattern.",
      "Clear the inner courtyard of eight guards before the brother emerges.",
      "Phase 1 duel: deflect his katana combos and punish with dual-katana flurries.",
      "At half health, the Phase 2 cutscene triggers — he switches to a yari spear.",
      "Adjust deflect timing and use the Kusarigama pull to break his spear guard.",
      "Execute the finishing blow in the QTE to complete Part 2 and advance the story."
    ]
  },
  {
    id: 1144,
    type: "main",
    category: "Atsu's Journey",
    game: "Ghost of Yotei",
    region: "Multiple",
    title: "The Final Hunt of the Onryō",
    location: "Mount Yōtei — Summit Shrine",
    length: "long",
    difficulty: "High",
    reward: "Endgame, Ghost of Yōtei title, Onryō armour set",
    summary:
      "The final confrontation with the last of the Yōtei Six at the summit shrine of Mount Yōtei. Atsu embraces her legend as the Ghost — the Onryō — and ends the cycle of vengeance in a multi-stage climactic battle.",
    aiTip:
      "The final boss has three phases. Phase 1 is aggressive melee — play defensively. Phase 2 adds explosive traps — clear them with the Tanzutsu before engaging. Phase 3 is a Ghost Stance showdown — fill your meter before triggering it.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Final+Hunt+of+the+Onryō+walkthrough",
    walkthrough: [
      "Ascend Mount Yōtei along the marked path — expect five elite ambushes on the way up.",
      "Clear the outer shrine guards before approaching the summit; stealth is rewarded here.",
      "Phase 1: fight defensively, deflect the fast combo strings and punish recovery windows.",
      "Phase 2 trigger: explosive traps appear — shoot each with the Tanzutsu before resuming the duel.",
      "Phase 3 trigger: the final Six member unleashes a berserker mode — fill Ghost Stance immediately.",
      "Activate Ghost Stance to deliver the decisive damage burst and trigger the execution sequence.",
      "Watch the ending cutscene in full — it determines which of two endings plays based on earlier choices."
    ]
  },
  {
    id: 1145,
    type: "side",
    category: "Post-Game",
    game: "Ghost of Yotei",
    region: "Multiple",
    title: "Duel the Unrivaled",
    location: "Ezo — Multiple Dueling Grounds",
    length: "medium",
    difficulty: "High",
    reward: "Endgame challenger trophy, Unrivaled sword kit",
    summary:
      "Post-story dueling challenges against Ezo's greatest swordspeople, unlocked after the finale. Each duel tests mastery of a different weapon and stance, culminating in a final bout against a returning character.",
    aiTip:
      "Each duelist counters one weapon type — switch away from whatever they're deflecting most. The final challenger punishes impatience; wait for their tells before committing to an attack.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Duel+the+Unrivaled+walkthrough",
    walkthrough: [
      "Unlock after completing the main story — a new notice board appears at the Grasslands inn.",
      "Accept the first challenge; each duelist location is marked on the regional map.",
      "Duel 1 (Grasslands): katana specialist — use dual-katana flurry combos to break their guard.",
      "Duel 2 (Tokachi): odachi fighter — dodge the wide sweeps and counter with the yari's thrust.",
      "Duel 3 (Ishikari): a spear master — use Kusarigama pull to cancel their stance attacks.",
      "Final duel (Mount Yōtei summit): a returning rival — adapt to all weapon types mid-fight.",
      "Claim the Unrivaled sword kit from the summit chest after victory."
    ]
  },
  {
    id: 1146,
    type: "side",
    category: "Post-Game",
    game: "Ghost of Yotei",
    region: "Multiple",
    title: "Burning Plains",
    location: "Ezo — Multiple Outlaw Camps",
    length: "medium",
    difficulty: "Medium",
    reward: "100% region cleanup, rare supply caches",
    summary:
      "Post-story cleanup quest clearing the last pockets of outlaw activity still burning across the Ezo plains. Former Yōtei Six lieutenants refuse to disperse and must be rooted out region by region.",
    aiTip:
      "These camps respawn lieutenants if you skip the named target — always find and kill the yellow-named officer first before clearing the rank and file.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Burning+Plains+walkthrough",
    walkthrough: [
      "Accept the quest from Kojiro the Bounty Broker after the credits.",
      "The map marks five remaining outlaw strongholds across three regions.",
      "Clear each stronghold by killing the named lieutenant — they are marked with a yellow skull icon.",
      "After each stronghold, loot the supply cache in the commander's tent for rare materials.",
      "Return to Kojiro after clearing all five for the completion reward.",
      "Remaining random camps will stop respawning once all five strongholds are cleared."
    ]
  },
  {
    id: 1147,
    type: "side",
    category: "Post-Game",
    game: "Ghost of Yotei",
    region: "Multiple",
    title: "A Haunted Land",
    location: "Ezo — Spirit Shrines",
    length: "long",
    difficulty: "Medium",
    reward: "Spirit armour set, Ainu elder's blessing",
    summary:
      "A mysterious spiritual disturbance lingers across Ezo after the Yōtei Six are defeated. The Ainu elders believe the violence has stirred restless spirits. Atsu must cleanse five shrines to restore balance.",
    aiTip:
      "Each shrine has a different spirit encounter — some are combat, some are environmental puzzles. Equip the Onryō armour from the main story finale for a damage bonus against spirit enemies.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+A+Haunted+Land+walkthrough",
    walkthrough: [
      "Speak with the Nayoro Ainu elder after the credits — she senses the spiritual unrest.",
      "Travel to each of the five marked spirit shrines across the six regions.",
      "At each shrine, interact with the offering stone to begin the encounter.",
      "Combat shrines: defeat the spirit guardian within the time limit.",
      "Puzzle shrines: light the three torches in the correct sequence shown by the shrine's paintings.",
      "After all five are cleansed, return to the Nayoro elder for the cutscene and armour reward."
    ]
  },
  {
    id: 1148,
    type: "side",
    category: "Mythic Tales",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "Takezo the Unrivalled",
    location: "Yōtei Grasslands — Six Dueling Trees",
    length: "long",
    difficulty: "High",
    reward: "Takezo's Katana legendary weapon, Unrivaled stance technique",
    summary:
      "A wandering musician sings of Takezo, a legendary swordmaster whose five disciples guard dueling trees across Ezo. Defeat all five, then face Takezo himself at the peak of Mount Yōtei to claim his blade.",
    aiTip:
      "Each disciple uses a different weapon — switch your own weapon to counter theirs. Takezo himself telegraphs every attack with a breath pause; perfect deflection is rewarded with a massive posture break.",
    video: "https://www.youtube.com/watch?v=AQ-Eti68xhs"
  },
  {
    id: 1149,
    type: "side",
    category: "Mythic Tales",
    game: "Ghost of Yotei",
    region: "Multiple",
    title: "The Five Teachings",
    location: "Ezo — Five Sacred Waypoints",
    length: "long",
    difficulty: "Medium",
    reward: "Five secret combat techniques, Sage's Charm",
    summary:
      "A blind sage at a mountain pass claims the land itself holds five forgotten teachings. Each trial — at a different region's waypoint — tests a different aspect of Atsu's skills to unlock ancient combat secrets.",
    aiTip:
      "The five trials are: stealth kill, perfect deflect, fear kill, horseback kill, and environmental kill. Read each waypoint inscription carefully — it describes exactly what the trial requires before you start.",
    video: "https://www.youtube.com/watch?v=tLoWypwSLyE"
  },
  {
    id: 1150,
    type: "side",
    category: "Mythic Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "The Undying Samurai",
    location: "Ishikari Plain — Nakagoya Spring",
    length: "medium",
    difficulty: "High",
    reward: "Undying Samurai Armour, Iron Will technique",
    summary:
      "A storyteller at Nakagoya Spring tells of a samurai who cannot die. Find four wind chimes hidden across Ishikari to summon his restless spirit and end his suffering — or his siege — in a fearsome boss duel.",
    aiTip:
      "The Undying Samurai regenerates health unless you break his spirit seal — hit him three times with the Tanzutsu between each health bar. Stock up on gun powder before starting this quest.",
    video: "https://www.youtube.com/watch?v=qEiLfOKxysI"
  },
  {
    id: 1151,
    type: "side",
    category: "Mythic Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "The Spider Lily General",
    location: "Tokachi Range — Mysterious Gate",
    length: "medium",
    difficulty: "High",
    reward: "Spider Lily Armour set, Venom Strike technique",
    summary:
      "A gate sealed by four locks guards the tomb of a general who dressed her soldiers in spider lilies. Find the four keys scattered through Tokachi's most dangerous areas to open the gate and face the guardian within.",
    aiTip:
      "The Spider Lily General inflicts poison on every hit — bring maximum antidote supplies and the medicine pouch upgrade. Her attack windows are short; focus on perfect deflects rather than aggression.",
    video: "https://www.youtube.com/watch?v=OGiWDrMTG3w"
  },
  {
    id: 1152,
    type: "side",
    category: "Mythic Tales",
    game: "Ghost of Yotei",
    region: "Nayoro Wilds",
    title: "The Legend of Opusnupuri",
    location: "Nayoro Wilds — Mount Opusnupuri",
    length: "long",
    difficulty: "High",
    reward: "Opusnupuri Armour, Spirit Step technique",
    summary:
      "Ainu legend holds that Mount Opusnupuri's spirit demands a challenger worthy of its memory. Follow the Ainu elder's guidance through sacred rituals and a treacherous ascent to face the mountain's guardian spirit.",
    aiTip:
      "The guardian spirit has no physical weak point — you must use the ritual fire arrows crafted during the quest to deal meaningful damage. Don't use them all in the first phase; save two for the final burst.",
    video: "https://www.youtube.com/watch?v=PK76hT3UiIQ"
  },
  {
    id: 1153,
    type: "side",
    category: "Mythic Tales",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "The Crimson Kimono",
    location: "Teshio Ridge — Frozen Peaks",
    length: "medium",
    difficulty: "Medium",
    reward: "Crimson Kimono Armour, Phantom Step ability",
    summary:
      "Travellers on the Teshio Ridge speak of a woman in crimson who vanishes into the blizzards. Track her ghost across three frozen peaks using offerings of incense to reveal her true form and earn her legendary armour.",
    aiTip:
      "The Crimson Kimono boss fight takes place in a blizzard that limits visibility. Use your listening sense frequently to track her movement. She is vulnerable for only two seconds after each disappearing vanish.",
    video: "https://www.youtube.com/watch?v=eXVWa7Bs1No"
  },
  {
    id: 1154,
    type: "side",
    category: "Mythic Tales",
    game: "Ghost of Yotei",
    region: "Oshima Coast",
    title: "The Storm Blade",
    location: "Oshima Coast — Forgotten Shrine",
    length: "medium",
    difficulty: "High",
    reward: "Storm Blade (Jin Sakai's legendary katana), Storm Strike technique",
    summary:
      "A shrine keeper on the Oshima Coast guards the tomb of a legendary warrior from the mainland. Solve the shrine's three trials of water, wind, and steel to unearth a blade that carries the storm within it.",
    aiTip:
      "The Storm Blade's special attack sends a ranged lightning arc — upgrade it as soon as possible. The three trials can be done in any order; the water trial is easiest if done first to learn the puzzle pattern.",
    video: "https://www.youtube.com/watch?v=vMvLZuZ2FKc"
  },
  {
    id: 1155,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "The Way of the Shamisen",
    location: "Yōtei Grasslands — River Crossing",
    length: "short",
    difficulty: "Low",
    reward: "Shamisen — songs reveal hidden collectible locations",
    summary:
      "A travelling musician at the river crossing teaches Atsu the shamisen. Mastering three melodies unlocks a unique ability: playing the correct song at a landmark causes nearby hidden collectibles to glow.",
    aiTip:
      "Learn all three songs before leaving the quest area — the third is only available in this location. The Ainu Heirloom and Fox Den collectibles are easiest to find once this quest is complete.",
    video: "https://www.youtube.com/watch?v=j7vbgg8qtaE"
  },
  {
    id: 1156,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "The Path of the Odachi",
    location: "Tokachi Range — Mountain Dojo",
    length: "medium",
    difficulty: "Medium",
    reward: "Odachi weapon unlocked, Wide Sweep technique",
    summary:
      "A solitary swordsmith in the Tokachi mountains offers to teach Atsu the great odachi blade — a heavy two-handed weapon devastating against groups. Three training trials unlock the weapon and its first technique.",
    aiTip:
      "The odachi's Wide Sweep is your best tool against shield-bearing enemies — it breaks guard regardless of block. Complete all three trials without taking a hit to earn a bonus upgrade material.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Path+of+the+Odachi+walkthrough",
    walkthrough: [
      "Find the Mountain Dojo marker on the western Tokachi map edge.",
      "Speak with Swordsmith Daisuke to accept the first trial.",
      "Trial 1: cut down five training posts with precisely timed heavy strikes.",
      "Trial 2: defeat two sparring partners using only odachi attacks — no other weapons.",
      "Trial 3: break three shield-bearers' guard using the Wide Sweep technique Daisuke demonstrates.",
      "Receive the odachi and the technique scroll after all three trials pass."
    ]
  },
  {
    id: 1157,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "The Odachi's Redemption",
    location: "Tokachi Range — Abandoned Fort",
    length: "medium",
    difficulty: "Medium",
    reward: "Rising Storm odachi technique",
    summary:
      "Daisuke's past catches up with him — a disgraced student blames him for an old failure and threatens the village. Atsu must help Daisuke confront his guilt and defeat his former student to earn the advanced technique.",
    aiTip:
      "The former student fights dirty — he opens with a feint into a grab. Dodge backward on the first input and he will always over-commit, leaving a two-hit window.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Odachis+Redemption+walkthrough",
    walkthrough: [
      "Return to Daisuke's dojo after completing The Path of the Odachi.",
      "A villager reports trouble at the fort east of the dojo — escort Daisuke there.",
      "Clear the fort's outer ring of six guards while Daisuke defends the gate.",
      "A cutscene introduces the disgraced student Koya; Atsu challenges him on Daisuke's behalf.",
      "Duel Koya: dodge his opening feint, counter twice, then use Rising Storm when the prompt appears.",
      "After the fight, speak with Daisuke to receive the Rising Storm scroll."
    ]
  },
  {
    id: 1158,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "Master Yoshida's Final Lesson",
    location: "Tokachi Range — Summit Dojo",
    length: "medium",
    difficulty: "High",
    reward: "Heaven's Fall ultimate odachi technique",
    summary:
      "Daisuke's own master, the elderly Yoshida, summons Atsu for one last lesson before he dies. The final duel against Yoshida — fighting at a fraction of his former power — teaches Atsu the Heaven's Fall technique.",
    aiTip:
      "Yoshida fights slowly but his Heaven's Fall hit is lethal. Watch for the two-second wind-up — that is your cue to dodge sideways, not back. Mirroring his Heaven's Fall back at him ends the duel fastest.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Master+Yoshidas+Final+Lesson+walkthrough",
    walkthrough: [
      "Complete The Odachi's Redemption first — Yoshida's summons only appear afterward.",
      "Climb to the Summit Dojo in northern Tokachi — it requires clearing a short enemy path.",
      "Speak with Master Yoshida; accept his final lesson.",
      "The duel begins immediately — survive three rounds of increasingly aggressive attacks.",
      "When Yoshida uses Heaven's Fall, dodge sideways and strike during his recovery.",
      "After three successful counter-hits, the duel ends with a teaching cutscene.",
      "Receive the Heaven's Fall scroll and say goodbye to Yoshida to complete the arc."
    ]
  },
  {
    id: 1159,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "The Winter Farms",
    location: "Teshio Ridge — Snowbound Village",
    length: "short",
    difficulty: "Low",
    reward: "Cold-Forged armour upgrade material, Farmer's Resolve charm",
    summary:
      "A retired warrior defends his snowbound village farm against outlaws demanding tribute. He offers to teach Atsu in exchange for help repelling the raid — a straightforward combat mission that kicks off the Teshio Sensei arc.",
    aiTip:
      "This is an escort-style quest — keep the farmer alive. Position yourself between him and the incoming raiders rather than chasing the flankers. The raiders prioritise him over Atsu.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Winter+Farms+walkthrough",
    walkthrough: [
      "Find the Snowbound Village marker in the southern Teshio Ridge.",
      "Speak with Farmer-Warrior Genzo to learn the raid is imminent.",
      "Defend the three farm entry points over two raid waves — raiders come from north and east simultaneously.",
      "Keep Genzo's health above 50% through both waves to earn the bonus charm reward.",
      "After the raid, speak with Genzo to receive the cold-forged material and advance the Sensei arc."
    ]
  },
  {
    id: 1160,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "The Way of the Kusarigama",
    location: "Teshio Ridge — Hidden Barn",
    length: "medium",
    difficulty: "Medium",
    reward: "Kusarigama weapon unlocked, Chain Pull technique",
    summary:
      "Genzo reveals his weapon of choice — the kusarigama chain sickle — and offers to teach it to Atsu. A deceptively rural sensei, he hides extraordinary skill behind a weather-beaten farmer's demeanour.",
    aiTip:
      "The Chain Pull technique is one of the game's most versatile tools — it yanks shielded enemies off balance and pulls aerial crossbow users to the ground. Learn its timing in this quest and use it constantly.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Way+of+the+Kusarigama+walkthrough",
    walkthrough: [
      "Return to Genzo after completing The Winter Farms.",
      "Follow him to the hidden barn north of the village.",
      "Trial 1: use the Chain Pull on five stationary targets without missing.",
      "Trial 2: pull three shielded enemies off balance and finish them before they recover.",
      "Trial 3: defeat Genzo in a sparring bout — he telegraphs every attack; read the shoulder dip.",
      "Receive the kusarigama and Chain Pull scroll after the bout."
    ]
  },
  {
    id: 1161,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "The Path of the Kusarigama",
    location: "Teshio Ridge — Frozen River Camp",
    length: "medium",
    difficulty: "Medium",
    reward: "Spinning Death technique",
    summary:
      "Genzo sends Atsu to a camp on the frozen river where his old training partner holds court — the only person who can teach the advanced kusarigama spinning technique. Getting there requires crossing enemy-held ice.",
    aiTip:
      "The Spinning Death hits all enemies in a 360-degree arc — essential for the crowd control situations Teshio constantly presents. Upgrade it to extend the chain length as soon as crafting materials allow.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Path+of+the+Kusarigama+walkthrough",
    walkthrough: [
      "Receive Genzo's letter directing you to the Frozen River Camp.",
      "Cross the frozen river — three enemy patrols use the ice as cover; the Tanzutsu breaks the ice beneath them.",
      "Reach Genzo's former partner Kimura at the camp's central fire.",
      "Complete Kimura's two trials: timing-based chain swings and a combat demonstration.",
      "Duel two of Kimura's students simultaneously to prove readiness.",
      "Receive the Spinning Death scroll and return to Genzo to continue the arc."
    ]
  },
  {
    id: 1162,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "The Kusarigama's Shame",
    location: "Teshio Ridge — Ridge Shrine",
    length: "medium",
    difficulty: "High",
    reward: "Soul Reaper ultimate kusarigama technique",
    summary:
      "Kimura's past crime — killing an innocent with a wild chain throw — has followed him to Teshio. The victim's son has hired an assassin to end Kimura's life. Atsu must defend Kimura and help him face his guilt.",
    aiTip:
      "The hired assassin is the hardest enemy in the Teshio Sensei arc. He counters the Chain Pull — use Spinning Death instead to keep him off balance while Kimura recovers.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Kusarigamas+Shame+walkthrough",
    walkthrough: [
      "A cutscene triggers at the Ridge Shrine when you return after The Path of the Kusarigama.",
      "Defend Kimura from the first four assassin's scouts — stealth approach recommended.",
      "The main assassin arrives after the scouts fall; he is immune to Chain Pull.",
      "Use Spinning Death to break his stance and dual-katana flurries to chip his health.",
      "At one-third health, the assassin calls Kimura out for a final duel — step aside and watch.",
      "Kimura wins but is wounded; treat him with a herbal kit from your inventory.",
      "Receive the Soul Reaper scroll from Kimura in gratitude."
    ]
  },
  {
    id: 1163,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "A Land Reforged",
    location: "Teshio Ridge — Blacksmith Quarter",
    length: "medium",
    difficulty: "Low",
    reward: "Teshio Steel armour upgrade tier unlocked",
    summary:
      "A master blacksmith in Teshio's isolated quarter claims the region's unique cold-forged steel can upgrade Atsu's armour beyond normal limits. Help him reopen his forge after an outlaw occupation to unlock the upgrade tier.",
    aiTip:
      "Completing this quest unlocks a permanent armour upgrade tier, not just a one-time item. Prioritise it early in your Teshio visit — the upgrade makes the later Sensei duels significantly more forgiving.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+A+Land+Reforged+walkthrough",
    walkthrough: [
      "Find the blacksmith Tanaka in the locked Blacksmith Quarter — the key is on a guard captain nearby.",
      "Clear the six outlaws occupying the forge interior.",
      "Gather three cold-ore chunks from the Teshio mine shaft — marked on map after clearing the forge.",
      "Return the ore to Tanaka and watch the forge reopen in a short cutscene.",
      "Commission your first Teshio Steel armour upgrade to complete the quest."
    ]
  },
  {
    id: 1164,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "Secrets of the Heart",
    location: "Teshio Ridge — Medicine Woman's Hut",
    length: "short",
    difficulty: "Low",
    reward: "Herbal Resolve — restores Resolve on herbal medicine use",
    summary:
      "A reclusive medicine woman offers Atsu a unique teaching: herbal preparations that restore Resolve — the combat resource — rather than only health. A short quest of conversation and ingredient gathering unlocks the passive upgrade.",
    aiTip:
      "The Herbal Resolve upgrade is one of the most useful passives in the game. It effectively doubles your Ghost Stance uptime if you use herbal medicine regularly during fights.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Secrets+of+the+Heart+walkthrough",
    walkthrough: [
      "Find the medicine woman Yuki's hut on the eastern Teshio Ridge path.",
      "Gather the three mountain herbs she requests — all are within 200m of the hut.",
      "Return the herbs and sit with Yuki for the teaching conversation.",
      "Complete the optional listening exercise — identify three sounds she plays on a small drum.",
      "Receive the Herbal Resolve charm and equip it in the charm menu to activate the upgrade."
    ]
  },
  {
    id: 1165,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "The Blind Stranger",
    location: "Teshio Ridge — Crossroads Shrine",
    length: "medium",
    difficulty: "High",
    reward: "Blind Warrior's Sense — listening detection upgraded",
    summary:
      "A blind swordsman at the Teshio crossroads challenges Atsu to a duel in complete darkness. The encounter teaches hearing-based combat instincts and permanently upgrades Atsu's listening detection range.",
    aiTip:
      "The darkness duel disables the HUD entirely. Listen for his footstep rhythm — two heavy steps means a thrust attack, one light step means a sweep. Deflect timing is pure audio here.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Blind+Stranger+walkthrough",
    walkthrough: [
      "Meet the blind swordsman Mushin at the Crossroads Shrine at night — he only appears after dusk.",
      "Accept his challenge; the screen fades to black for the duel.",
      "Listen for his movement audio cues: two heavy steps = thrust (deflect), one light step = sweep (dodge).",
      "Land five successful deflections to trigger his teaching monologue.",
      "A second, harder duel follows — same rules but faster tempo.",
      "Winning gives the permanent listening range upgrade and Mushin's departing riddle (flavour only)."
    ]
  },
  {
    id: 1166,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "The Way of the Yari",
    location: "Ishikari Plain — Veterans' Post",
    length: "medium",
    difficulty: "Medium",
    reward: "Yari spear unlocked, Charging Thrust technique",
    summary:
      "An old ashigaru veteran at the Veterans' Post still drills daily with his yari spear. He agrees to teach Atsu the weapon in exchange for help clearing a bandit blockade choking the road to his home village.",
    aiTip:
      "The yari's Charging Thrust covers ground fast and breaks heavy armour — use it to open fights against armoured enemies. Complete the blockade without being detected for a bonus supply reward.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Way+of+the+Yari+walkthrough",
    walkthrough: [
      "Find Veteran Ishida at the Veterans' Post in central Ishikari.",
      "Clear the three-camp bandit blockade on the northern road — stealth earns a bonus.",
      "Return to Ishida; he teaches Trial 1: yari thrusts against moving targets.",
      "Trial 2: use the Charging Thrust to break three armoured dummy shields in sequence.",
      "Trial 3: hold off four attackers using only the yari for 90 seconds.",
      "Receive the yari and Charging Thrust scroll after completing all three trials."
    ]
  },
  {
    id: 1167,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "The Path of the Yari",
    location: "Ishikari Plain — River Barracks",
    length: "medium",
    difficulty: "Medium",
    reward: "Spinning Sweep yari technique",
    summary:
      "Ishida sends Atsu to his old commanding officer at the River Barracks for advanced yari training. The Spinning Sweep technique turns the yari into a crowd-control weapon — vital for Ishikari's large enemy groups.",
    aiTip:
      "The Spinning Sweep has a brief startup that enemies can interrupt. Use it only after a Charging Thrust stuns the lead enemy — the stun gives you the gap needed for the full sweep animation.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Path+of+the+Yari+walkthrough",
    walkthrough: [
      "Receive Ishida's referral letter and travel to the River Barracks.",
      "The barracks is under light occupation — clear it before the commander Roku will talk.",
      "Complete Roku's Trial 1: land Charging Thrust into Spinning Sweep on each of three targets.",
      "Trial 2: use Spinning Sweep to simultaneously hit three enemies in one rotation.",
      "Spar with Roku using only the yari — do not switch weapons.",
      "Receive the Spinning Sweep scroll from Roku and return to Ishida."
    ]
  },
  {
    id: 1168,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "The Yari's Fury",
    location: "Ishikari Plain — Fury Grounds",
    length: "medium",
    difficulty: "High",
    reward: "Fury Stance — berserker yari mode",
    summary:
      "The final yari lesson pushes Atsu to her limits. Roku reveals the legendary Fury Stance — a berserker mode that temporarily doubles attack speed — and tests her in a punishing gauntlet before teaching it.",
    aiTip:
      "Fury Stance depletes Resolve while active — don't trigger it until you have a full Resolve bar. The gauntlet's final wave has six enemies; save the stance activation for that wave specifically.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Yaris+Fury+walkthrough",
    walkthrough: [
      "Return to Roku after completing The Path of the Yari.",
      "The Fury Grounds are marked east of the barracks — a natural arena.",
      "Wave 1: defeat four basic enemies using only yari techniques.",
      "Wave 2: defeat three shielded enemies — Charging Thrust into Spinning Sweep is optimal.",
      "Wave 3: defeat five mixed enemies while Roku observes your stance control.",
      "Wave 4: six elite enemies — activate the demonstrated Fury Stance and clear the wave.",
      "Receive the permanent Fury Stance unlock and the yari's final upgrade slot."
    ]
  },
  {
    id: 1169,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Sensei Takahashi's Persimmon Tree",
    location: "Ishikari Plain — Takahashi's Orchard",
    length: "short",
    difficulty: "Low",
    reward: "Persimmon Charm — reduces cooldowns",
    summary:
      "Eccentric Sensei Takahashi refuses to teach until Atsu tends his cherished persimmon tree, which bandits have damaged and deer have stripped. A meditative quest that rewards patience with a useful passive charm.",
    aiTip:
      "This is purely a non-combat quest — the only one in the Sensei arc. Don't bring weapons out; Takahashi disapproves and locks you out of the charm if you attack the deer rather than shooing them.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Sensei+Takahashis+Persimmon+Tree+walkthrough",
    walkthrough: [
      "Find Sensei Takahashi sulking by his orchard in southern Ishikari.",
      "Repair the three damaged tree supports using the crafting prompt at each one.",
      "Shoo away the three deer grazing on the low branches — walk toward them, do not attack.",
      "Gather two persimmon fruits from the tree and offer them to Takahashi.",
      "Sit with him for the brief conversation to receive the Persimmon Charm."
    ]
  },
  {
    id: 1170,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "The Bomb Maker",
    location: "Ishikari Plain — Hidden Laboratory",
    length: "medium",
    difficulty: "Medium",
    reward: "Scorch Bomb, Smoke Bomb, Sticky Bomb crafting recipes unlocked",
    summary:
      "A reclusive alchemist hiding a laboratory in an Ishikari cave has developed three types of explosive ordnance. She will teach Atsu her craft in exchange for gathering rare materials from a heavily guarded supply depot.",
    aiTip:
      "The scorch bomb is your most versatile new tool — it creates a fire zone that damages and staggers. Combine it with the oil jar (unlocked via a separate upgrade) for a devastating area-denial combo.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Bomb+Maker+walkthrough",
    walkthrough: [
      "Discover the Hidden Laboratory by investigating the smoking chimney vent near the eastern Ishikari cliffs.",
      "Speak with alchemist Fumiko — she needs sulphur, charcoal, and pine resin from the supply depot.",
      "The depot has twelve guards; approach from the river side where a blind spot exists.",
      "Loot the three material crates marked by Fumiko's sketched map.",
      "Return to Fumiko and watch the crafting demonstration cutscene.",
      "Receive all three bomb recipes and the crafting bench upgrade."
    ]
  },
  {
    id: 1171,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Fighting Fire With Fire",
    location: "Ishikari Plain — Burning Mill",
    length: "medium",
    difficulty: "Medium",
    reward: "Oil Jar and Explosive Arrow recipes, Fire Mastery upgrade",
    summary:
      "Fumiko's advanced course covers large-scale incendiary weapons. A crisis arrives when outlaws torch the Ishikari mill — Atsu must use her new bomb skills to fight fire with fire and save the structure.",
    aiTip:
      "Use smoke bombs to move safely through the burning mill interior. Save scorch bombs for the enemy arsonists at the back — three consecutive hits will end the encounter before they can ignite the grain store.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Fighting+Fire+With+Fire+walkthrough",
    walkthrough: [
      "Return to Fumiko after completing The Bomb Maker — she has heard about the mill fire.",
      "Rush to the Burning Mill; three arsonist groups are actively spreading the fire.",
      "Extinguish fire patches using the water barrels at each mill entrance before proceeding.",
      "Use smoke bombs to obscure your movement through heavy smoke sections.",
      "Reach the three arsonist leaders at the rear and defeat them with scorch bombs and melee.",
      "Return to Fumiko for the oil jar and explosive arrow recipes to complete the quest."
    ]
  },
  {
    id: 1172,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "The Burning of Castle Ishikari",
    location: "Ishikari Plain — Castle Ishikari",
    length: "long",
    difficulty: "High",
    reward: "Grand Alchemist armour, Master Bomb Maker title, all bomb upgrades",
    summary:
      "Fumiko's arc climaxes as a warlord seizes Castle Ishikari and threatens to destroy everything within. Atsu storms the burning fortress using every explosive skill learned — a full-scale siege where Fumiko fights at her side.",
    aiTip:
      "Manage your bomb supply carefully — you cannot restock during the castle assault. Prioritise oil jars for the armoured gate guards and save explosive arrows for the castle's three reinforced barriers.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Burning+of+Castle+Ishikari+walkthrough",
    walkthrough: [
      "Receive Fumiko's urgent message at the Ishikari inn after completing Fighting Fire With Fire.",
      "Approach Castle Ishikari from the eastern gate — Fumiko meets you there with a supply pack.",
      "Breach Gate 1 using oil jar plus scorch bomb on the reinforced door.",
      "Fight through two courtyard waves; Fumiko provides covering fire with crossbow.",
      "Breach Gate 2 using an explosive arrow on the gate's powder barrel.",
      "Reach the warlord in the throne room; he fights with a flaming odachi — dodge all flame arcs.",
      "Defeat the warlord to end the siege and unlock all remaining bomb upgrades in the crafting menu."
    ]
  },
  {
    id: 1173,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Oshima Coast",
    title: "Guns and Consequences",
    location: "Oshima Coast — Harbour Gunsmith",
    length: "medium",
    difficulty: "Medium",
    reward: "Tanzutsu matchlock rifle unlocked, Steady Shot technique",
    summary:
      "A conflicted ex-pirate gunsmith on the Oshima harbour wants out of his old crew. He will teach Atsu to use the Tanzutsu matchlock rifle if she helps him settle his debts — a quest balancing mercy and violence.",
    aiTip:
      "The Tanzutsu is the game's only ranged weapon that penetrates armour and breaks ice underfoot. Its reload time is long — only fire when a target is stationary. The Steady Shot technique halves reload time after a successful headshot.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Guns+and+Consequences+walkthrough",
    walkthrough: [
      "Find Gunsmith Ryo hiding in the Oshima harbour warehouse.",
      "Agree to help him settle debts with his old crew — three locations marked on the harbour map.",
      "Location 1: recover stolen goods peacefully by paying with found coin from the harbour crates.",
      "Location 2: the second creditor will not negotiate — defeat his four guards without killing him.",
      "Location 3: the crew captain demands a duel — win to settle all remaining debts.",
      "Return to Ryo; he teaches the Tanzutsu in a brief tutorial and awards the Steady Shot scroll."
    ]
  },
  {
    id: 1174,
    type: "side",
    category: "Sensei Tales",
    game: "Ghost of Yotei",
    region: "Oshima Coast",
    title: "Pride Before Tea",
    location: "Oshima Coast — Clifftop Tea House",
    length: "short",
    difficulty: "Low",
    reward: "Resolve Regen passive — Resolve slowly regenerates out of combat",
    summary:
      "A tea ceremony master at a clifftop house believes focus and patience are the true weapons. Teaching Atsu a formal tea ceremony provides a permanent Resolve regeneration upgrade — invisible strength earned through stillness.",
    aiTip:
      "This is the only quest that grants out-of-combat Resolve regeneration. Combined with the Herbal Resolve charm from Teshio, your Resolve management in longer fights becomes almost effortless.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Pride+Before+Tea+walkthrough",
    walkthrough: [
      "Find Tea Master Tomoe at the Clifftop Tea House on the Oshima southern headland.",
      "Accept the ceremony invitation and sit across from her.",
      "Follow the on-screen prompts: bow, pour, present, receive — four actions in correct order.",
      "If you rush or miss an action, the ceremony restarts; there is no penalty.",
      "Complete the ceremony without error to trigger the teaching conversation.",
      "Receive the Resolve Regen passive upgrade permanently added to Atsu's skill sheet."
    ]
  },
  {
    id: 1175,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "Old Trails",
    location: "Yōtei Grasslands — Northern Forest Path",
    length: "short",
    difficulty: "Low",
    reward: "Trail Charm, forest path shortcut unlocked",
    summary:
      "A retired road warden asks Atsu to clear the old forest trails of outlaws who have made the paths too dangerous to use. Restoring the trails opens a useful shortcut across the Grasslands.",
    aiTip:
      "The three bandit camps on this quest are small and lightly guarded — a perfect opportunity to practice stealth kills. Clearing them without alerts earns a bonus Trail Charm with faster horse travel.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Old+Trails+walkthrough",
    walkthrough: [
      "Speak with Warden Kenji at the northern Grasslands trailhead.",
      "Clear Camp 1 (4 bandits) on the eastern ridge — approach from the high ground.",
      "Clear Camp 2 (5 bandits) at the river ford — stealth through the tall grass.",
      "Clear Camp 3 (6 bandits) at the forest shrine — one archer on the roof requires priority.",
      "Return to Kenji to receive the Trail Charm and unlock the forest shortcut on your map."
    ]
  },
  {
    id: 1176,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "Building Bridges",
    location: "Yōtei Grasslands — Riverside Crossing",
    length: "short",
    difficulty: "Low",
    reward: "Bridge restored, Carpenter's Charm",
    summary:
      "Villagers need help rebuilding a bridge the Yōtei Six destroyed during their initial raid. Gathering materials and defending the workers from a retaliatory strike reconnects two halves of a cut-off community.",
    aiTip:
      "The worker defence wave comes from the river — position yourself on the bridge itself to funnel enemies into a narrow chokepoint and use the Spinning Sweep to hit multiple targets.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Building+Bridges+walkthrough",
    walkthrough: [
      "Talk to Village Elder Mio at the western Grasslands riverbank.",
      "Gather two bundles of timber from the marked lumber piles east of the river.",
      "Carry materials back — you cannot fight while carrying, so check the road is clear.",
      "Defend the three carpenters through one attack wave of eight bandits.",
      "The bridge completes in a short cutscene; receive the Carpenter's Charm from Mio."
    ]
  },
  {
    id: 1177,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "A Fleeting Thought",
    location: "Yōtei Grasslands — Poet's Waypoint",
    length: "short",
    difficulty: "Low",
    reward: "Poet's Charm, Haiku collectible unlocked",
    summary:
      "A wandering poet encountered on the road carries a sealed message for a family three villages away but is too fearful to travel alone. Escort them safely through an ambush to deliver a final farewell letter.",
    aiTip:
      "This escort quest is peaceful until the mid-point ambush. Stay close to the poet — they panic and freeze if enemies get within five metres, but will not run back to safety on their own.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+A+Fleeting+Thought+walkthrough",
    walkthrough: [
      "Meet poet Reiko at the crossroads marker in central Grasslands.",
      "Escort Reiko along the western road — the walk takes about two minutes.",
      "An ambush of six bandits triggers at the old oak landmark; defeat them before they reach Reiko.",
      "Continue the escort to the Kobayashi farmhouse at the trail's end.",
      "Watch the letter delivery cutscene; receive the Poet's Charm from Reiko."
    ]
  },
  {
    id: 1178,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "The Worth of a Man",
    location: "Yōtei Grasslands — Bandit Hideout",
    length: "medium",
    difficulty: "Medium",
    reward: "Gold, Rescued Hostage's Blade",
    summary:
      "A farmer pays Atsu to rescue his son taken hostage by bandits. On infiltrating the hideout, Atsu discovers the son voluntarily joined the bandits to escape debt — a quest about family, choice, and consequence.",
    aiTip:
      "You can resolve this quest peacefully by speaking with the son before fighting. Choosing the 'let him decide' dialogue gives the best outcome reward. Attacking immediately locks out the peaceful ending.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Worth+of+a+Man+walkthrough",
    walkthrough: [
      "Accept the job from Farmer Noburu at the Grasslands inn.",
      "Infiltrate the bandit hideout on the eastern hill from the blind side — avoid the two rooftop guards.",
      "Find the son Tatsuya in the second building — a cutscene begins.",
      "Choose 'let him decide' in dialogue to unlock the peaceful resolution.",
      "Escort Tatsuya out if he agrees to leave, or leave him and return to Noburu alone.",
      "Report to Noburu; both outcomes give the gold reward, but the peaceful path adds the Rescued Blade."
    ]
  },
  {
    id: 1179,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "Lost in Reflection",
    location: "Yōtei Grasslands — Mirror Lake",
    length: "short",
    difficulty: "Low",
    reward: "Lake Charm, haiku composition",
    summary:
      "A grieving mother has been searching the Grasslands for the lake where her son drowned years ago to leave an offering. Atsu guides her through bandits and over difficult terrain to reach Mirror Lake and its quiet memorial.",
    aiTip:
      "This is a quiet story quest with minimal combat. The single bandit encounter can be avoided entirely by taking the mountain goat trail — ask the mother about alternate routes in the first dialogue tree.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Lost+in+Reflection+walkthrough",
    walkthrough: [
      "Meet grieving mother Ume at the southern Grasslands waypoint.",
      "Ask about the mountain goat trail in dialogue to bypass the bandit ambush.",
      "Guide Ume along the goat trail — slow pace required, stay within 10 metres.",
      "Reach Mirror Lake; watch the offering ceremony cutscene.",
      "Sit at the lakeside with Ume to compose the optional haiku before leaving.",
      "Receive the Lake Charm when Ume departs."
    ]
  },
  {
    id: 1180,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "Memories of Home",
    location: "Yōtei Grasslands — Refugee Camp",
    length: "medium",
    difficulty: "Medium",
    reward: "Survivor's Charm, ally contact added",
    summary:
      "A refugee family from Atsu's home village survived the Yōtei Six massacre but is stranded and pursued by survivors of the gang. Escort them through two outlaw ambushes to a safe farmstead.",
    aiTip:
      "The family has three members — if any are killed the quest fails. Use smoke bombs to create cover during the first ambush and herd them behind the cart. The second ambush has a mounted archer; kill the horse first.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Memories+of+Home+walkthrough",
    walkthrough: [
      "Find the refugee family at the marked camp near the Grasslands southern border.",
      "Clear the eight outlaws watching the road before signalling the family to move.",
      "First ambush: twelve attackers come from both sides — use smoke bombs to regroup the family.",
      "Second ambush: a mounted archer plus six ground troops — dismount the archer with a Tanzutsu shot.",
      "Escort the family the final stretch to Hayashi Farmstead.",
      "Receive the Survivor's Charm and the new ally contact marker on your map."
    ]
  },
  {
    id: 1181,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "Sleight of Hand",
    location: "Yōtei Grasslands — Market Town",
    length: "short",
    difficulty: "Low",
    reward: "Intelligence on Yōtei Six movements, Trickster's Charm",
    summary:
      "A street magician who witnessed the Yōtei Six massacre holds key intelligence — but won't share it until Atsu helps him recover his stolen props from a pickpocket gang running the market.",
    aiTip:
      "The pickpocket gang fight takes place in a crowded market — area attacks will hit innocent bystanders and trigger a failed state. Use precise single-target attacks only.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Sleight+of+Hand+walkthrough",
    walkthrough: [
      "Speak with Magician Sho at the market town plaza.",
      "Track the three pickpockets through the crowd — use the listening sense to follow the stolen prop sounds.",
      "Corner each pickpocket individually in the market's side alleys.",
      "Return all three props to Sho; he performs a trick as thanks.",
      "Receive the intelligence note about the Yōtei Six and the Trickster's Charm."
    ]
  },
  {
    id: 1182,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "A Drink with a Stranger",
    location: "Yōtei Grasslands — Riverside Inn",
    length: "short",
    difficulty: "Low",
    reward: "Informant contact, Sake Charm",
    summary:
      "A suspiciously well-informed traveller at the Riverside Inn offers to buy Atsu a drink. Over conversation, the traveller reveals they are an undercover informant with intelligence on outlaw movements — and a dangerous tail.",
    aiTip:
      "The four assassins that ambush the informant at the end arrive from the rooftop — clear the roof before the final conversation to avoid being flanked. They are among the fastest enemies in the Grasslands.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+A+Drink+with+a+Stranger+walkthrough",
    walkthrough: [
      "Speak with the stranger Nori at the inn bar — accept the drink offer.",
      "Complete three rounds of conversation, choosing to share information openly each time.",
      "After the third round, Nori signals urgency — check the rooftop before continuing.",
      "Clear the four assassins waiting on the roof above the inn.",
      "Return to Nori; they share their intelligence and depart.",
      "Receive the informant contact (new map markers) and the Sake Charm."
    ]
  },
  {
    id: 1183,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "The Ainu Heirloom",
    location: "Yōtei Grasslands — Ainu Elder's Village",
    length: "medium",
    difficulty: "Medium",
    reward: "Ainu Heirloom Charm, Ainu community trust",
    summary:
      "An Ainu elder asks Atsu to recover an ancestral relic — a carved wooden bear — stolen by bandits who raided their village. Returning it strengthens the Ainu community's trust and unlocks optional Ainu side content.",
    aiTip:
      "The bandit captain guarding the relic uses a buckler shield — the Kusarigama Chain Pull bypasses it instantly. After recovering the relic, do not fast-travel; a second bandit group ambushes the return path.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Ainu+Heirloom+walkthrough",
    walkthrough: [
      "Speak with Ainu Elder Ekashi at the village on the Grasslands north edge.",
      "Travel to the bandit camp three kilometres east — approach at dusk for reduced guard density.",
      "Locate the carved bear in the camp's storage tent — marked by the listening sense pulse.",
      "Defeat the captain and two guards in the tent.",
      "Return to the village via foot — a six-bandit ambush waits on the main road.",
      "Present the relic to Ekashi to receive the Ainu Heirloom Charm and unlock Ainu content."
    ]
  },
  {
    id: 1184,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "A Normal Life",
    location: "Yōtei Grasslands — Roadside Farm",
    length: "medium",
    difficulty: "Medium",
    reward: "Reformed Outlaw's Blade, farmstead safe house unlocked",
    summary:
      "A former Yōtei Six foot soldier trying to live peacefully as a farmer is hunted by his former gang. Atsu must decide whether to help him fight his past or advise him to flee — both paths have consequences.",
    aiTip:
      "Choosing to fight alongside him unlocks the farmstead as a fast-travel safe house. Choosing flight gives the better weapon reward but no safe house. Pick fight if you value map utility over the immediate gear.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+A+Normal+Life+walkthrough",
    walkthrough: [
      "Find former outlaw Jiro tending his farm on the western Grasslands road.",
      "He reveals three former comrades are hunting him — investigate the marked locations for intel.",
      "Return to Jiro with the intelligence; choose fight or flee in dialogue.",
      "Fight path: defend the farmstead through two attack waves (9 total enemies) alongside Jiro.",
      "Flee path: escort Jiro to the forest border and watch him disappear into safety.",
      "Collect your reward from Jiro's hidden cache under the barn floorboard regardless of path chosen."
    ]
  },
  {
    id: 1185,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "A Flower For Your Thoughts",
    location: "Tokachi Range — Marshland Village",
    length: "short",
    difficulty: "Low",
    reward: "Herbalist's Charm, rare bloom crafting material",
    summary:
      "A herbalist in the Tokachi marshes needs protection while gathering rare winter blooms from dangerous terrain patrolled by outlaws. A peaceful quest for anyone who takes a stealthy approach.",
    aiTip:
      "The herbalist stops to gather at three locations — each one draws a nearby patrol. Eliminate each patrol before the herbalist reaches the gathering point to avoid a stressful escort fight.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+A+Flower+For+Your+Thoughts+walkthrough",
    walkthrough: [
      "Meet Herbalist Yuki at the Marshland Village gate.",
      "Scout ahead of Yuki to each of three gathering points and clear patrols before she arrives.",
      "Point 1: two patrols, approach from the reed beds.",
      "Point 2: a rooftop lookout calls reinforcements — prioritise him.",
      "Point 3: no guards if previous patrols were cleared, otherwise three respawn.",
      "Escort Yuki safely back to the village and receive the charm and bloom material."
    ]
  },
  {
    id: 1186,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "A Matter of Honour",
    location: "Tokachi Range — Samurai Estate",
    length: "medium",
    difficulty: "Medium",
    reward: "Honour Blade, duel techniques insight",
    summary:
      "A samurai demands satisfaction from Atsu for a slight she supposedly committed. The investigation reveals a third party fabricated the insult to provoke both of them. Exposing the scheme avoids a needless duel.",
    aiTip:
      "Finding the forged letter before confronting the samurai unlocks a peaceful resolution that awards the better reward. If you miss the letter and duel him, win by using standard deflect-counter timing — he has no tricks.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+A+Matter+of+Honour+walkthrough",
    walkthrough: [
      "Be challenged by Samurai Goto at the Tokachi estate gate.",
      "Before accepting or refusing the duel, investigate the three marked locations for evidence.",
      "Find the forged letter in the steward's study — it proves the insult was fabricated.",
      "Present the letter to Goto; the fabricator is his own steward.",
      "Confront the steward — he flees into the estate; pursue and defeat him.",
      "Return to Goto for the Honour Blade reward and duel techniques insight."
    ]
  },
  {
    id: 1187,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "Easy Coin",
    location: "Tokachi Range — Trading Post",
    length: "medium",
    difficulty: "Medium",
    reward: "Gold, Merchant's Contact",
    summary:
      "A merchant's supposedly simple courier job turns into a trap — the package contains blackmail material and the merchant's former allies are waiting at the delivery point. Atsu must fight out of the ambush.",
    aiTip:
      "The ambush is ten enemies in a small space — use your first scorch bomb immediately on entry to stagger the clustered group. The merchant turns hostile in the final phase; the Charging Thrust ends his sprint.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Easy+Coin+walkthrough",
    walkthrough: [
      "Accept the courier job from Merchant Ueda at the trading post.",
      "Deliver the package to the marked waypoint three kilometres south.",
      "Eight former allies spring the ambush — clear them with explosive tools.",
      "The merchant arrives and turns hostile; defeat him — non-lethal option available.",
      "Inspect the package contents to understand the blackmail scheme.",
      "Report to the trading post elder for a finder's reward and Merchant's Contact."
    ]
  },
  {
    id: 1188,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "Every Man for Himself",
    location: "Tokachi Range — Ransacked Camp",
    length: "medium",
    difficulty: "Medium",
    reward: "Survivor's Pack, Mediation Charm",
    summary:
      "Survivors of a bandit raid are turning on each other over the last supplies in a ransacked camp. Atsu must defuse the tension through conversation and, if necessary, combat before the survivors kill each other.",
    aiTip:
      "The peaceful resolution requires choosing 'share the supplies' twice in dialogue before the fight triggers. If combat starts, knock out rather than kill the aggressors — the survivors grant a better reward for mercy.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Every+Man+for+Himself+walkthrough",
    walkthrough: [
      "Discover the ransacked camp on the Tokachi eastern trail.",
      "Speak with survivor leader Masa — tensions are at a breaking point.",
      "Choose 'share the supplies' in both dialogue prompts to attempt peaceful mediation.",
      "If it fails, non-lethally defeat the two aggressors using pommel strikes (hold heavy attack).",
      "Distribute the remaining supplies equally between the four survivors.",
      "Receive the Survivor's Pack and Mediation Charm from grateful survivor Hana."
    ]
  },
  {
    id: 1189,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "Desperate Remedy",
    location: "Tokachi Range — Outlaw Supply Camp",
    length: "medium",
    difficulty: "Medium",
    reward: "Medicine Cache, Healer's Charm",
    summary:
      "A healer's village faces a disease outbreak but the medicine needed is locked inside a heavily guarded outlaw supply camp. Atsu raids the camp to secure the supplies before the outbreak claims more lives.",
    aiTip:
      "The medicine is in a locked chest requiring the camp captain's key. Kill the captain first and take the key before engaging the rest of the camp — his patrol pattern brings him to the western gate every 90 seconds.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Desperate+Remedy+walkthrough",
    walkthrough: [
      "Speak with Healer Sora at the Tokachi village — she marks the supply camp on the map.",
      "Observe the camp exterior; the captain patrols the western gate every 90 seconds.",
      "Intercept the captain's patrol with a stealth kill to obtain the chest key.",
      "Use the key on the medicine chest in the camp's central storage building.",
      "Fight out of the camp or sneak out through the river exit.",
      "Deliver the medicine to Sora; receive the Medicine Cache and Healer's Charm."
    ]
  },
  {
    id: 1190,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "Marshland Homestead",
    location: "Tokachi Range — Marsh Farmstead",
    length: "medium",
    difficulty: "Medium",
    reward: "Stubborn Farmer's Charm, homestead safe house",
    summary:
      "A stubborn farming family refuses to abandon their marshland home despite persistent outlaw raids. Atsu helps them fortify the homestead and repels a final large assault to secure their right to stay.",
    aiTip:
      "The final assault has twelve attackers coming from three directions simultaneously. Use the fortification points the family built — the barricade on the north road funnels half the attackers into a chokepoint.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Marshland+Homestead+walkthrough",
    walkthrough: [
      "Meet the family patriarch Gota at the Marsh Farmstead entrance.",
      "Build three fortifications: barricade (north), watchtower (east), fence (south) — materials nearby.",
      "Survive Wave 1: six attackers, mostly from the north.",
      "Survive Wave 2: twelve attackers from all three directions — use the barricade chokepoint.",
      "After the assault, the family thanks Atsu; the homestead unlocks as a safe house.",
      "Receive the Stubborn Farmer's Charm from Gota's daughter."
    ]
  },
  {
    id: 1191,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "Protecting the Peace",
    location: "Tokachi Range — Village Constable Post",
    length: "medium",
    difficulty: "Medium",
    reward: "Constable's Badge Charm, cleared patrol routes",
    summary:
      "Village constables overwhelmed by gang activity ask Atsu for temporary help. A three-part mission clears a gang's three outposts and ends with a confrontation against their local lieutenant.",
    aiTip:
      "The lieutenant uses a war fan as a weapon — it deflects arrows and Tanzutsu shots. Close in with dual katana and ignore the fan; it only blocks ranged, not melee.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Protecting+the+Peace+walkthrough",
    walkthrough: [
      "Speak with Constable Chief Daichi at the post in northern Tokachi.",
      "Clear Outpost 1 (6 gang members) on the river island — approach by swimming.",
      "Clear Outpost 2 (8 gang members) at the lumber yard — a fire alert is possible; have a bucket ready.",
      "Clear Outpost 3 (5 gang members plus lookout) on the hill — take out the lookout first.",
      "Confront Lieutenant Bando at the gang's main camp; he uses a war fan — fight in melee only.",
      "Return to Daichi; receive the Constable's Badge Charm."
    ]
  },
  {
    id: 1192,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "The Ainu Kotan",
    location: "Tokachi Range — Ainu Settlement",
    length: "long",
    difficulty: "High",
    reward: "Ainu Warrior's Charm, Kotan alliance",
    summary:
      "An Ainu settlement in the Tokachi foothills faces forced relocation by a lord claiming their land. Atsu investigates the land claim, exposes its fraud, and defends the settlement against the lord's enforcers.",
    aiTip:
      "The land claim fraud evidence is in the lord's office — three documents, each in a different guarded room. Read all three before confronting the lord to unlock the full peaceful dialogue option that avoids unnecessary bloodshed.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Ainu+Kotan+walkthrough",
    walkthrough: [
      "Speak with Ainu community leader Huci at the settlement gates.",
      "Infiltrate the lord's manor to find the three forged land documents.",
      "Document 1: administrator's desk in the main hall.",
      "Document 2: locked box in the treasury — key is on a guard captain.",
      "Document 3: the lord's personal study on the top floor.",
      "Confront the lord with all three documents — he orders his enforcers to attack regardless.",
      "Defeat the twelve enforcers in the settlement defence to complete the quest."
    ]
  },
  {
    id: 1193,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "The Dragonfly Armor",
    location: "Tokachi Range — Dragonfly Forge",
    length: "medium",
    difficulty: "Low",
    reward: "Dragonfly Armour, armour weight reduction upgrade",
    summary:
      "A blacksmith legend operating out of a hidden marsh forge claims to have crafted armour light as a dragonfly's wing. Gather the three rare materials she needs and commission Ezo's lightest armour set.",
    aiTip:
      "The Dragonfly Armour's weight reduction applies to your entire loadout — it is the best armour for players who rely on dodge-heavy playstyles. Prioritise this quest early in Tokachi if you favour agility over defence.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Dragonfly+Armor+walkthrough",
    walkthrough: [
      "Discover the Dragonfly Forge by following a dragonfly (literal in-game creature) near the Tokachi marsh.",
      "Speak with Smith Chiyo — she needs reed fibre, swamp iron, and dragonfly wing resin.",
      "Reed fibre: gather from the marsh reeds north of the forge (no combat).",
      "Swamp iron: mine from the deposit guarded by four outlaws at the marsh centre.",
      "Dragonfly wing resin: crafted at Chiyo's bench using two blooms from the Herbalist quest.",
      "Commission the armour and wait one in-game day — rest at the forge camp to advance time.",
      "Collect the Dragonfly Armour and weight reduction upgrade from Chiyo."
    ]
  },
  {
    id: 1194,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "The Loss We Carry",
    location: "Tokachi Range — Old Battle Site",
    length: "medium",
    difficulty: "Low",
    reward: "Reconciliation Charm, memory haiku",
    summary:
      "Two old warriors meet again at the site of a battle from decades ago, each blaming the other for a costly defeat. Atsu mediates their confrontation and helps them reach a truth that neither has faced alone.",
    aiTip:
      "This is a dialogue-driven quest with no combat. Choose the 'hear both sides' prompt every time it appears — cutting one veteran off locks you out of the full memory sequence and the bonus Reconciliation Charm.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Loss+We+Carry+walkthrough",
    walkthrough: [
      "Find the two veterans arguing at the Old Battle Site memorial stone.",
      "Speak with Veteran Hayato first; choose 'hear both sides' when prompted.",
      "Speak with Veteran Mori; again choose 'hear both sides'.",
      "Return to Hayato with Mori's account; choose 'share what Mori said'.",
      "A joint memory cutscene plays — let it finish without skipping.",
      "Speak with both veterans together at the memorial stone to conclude and receive the charm."
    ]
  },
  {
    id: 1195,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "The Soul of an Instrument",
    location: "Tokachi Range — Hidden Valley",
    length: "medium",
    difficulty: "Medium",
    reward: "Resonance Charm, shamisen upgrade",
    summary:
      "A shamisen craftsman needs a rare paulownia wood that only grows in a valley too dangerous for him to enter alone. The wood's supernatural resonance — and the valley's guardian — make this more than a simple supply run.",
    aiTip:
      "The valley guardian is not a combat encounter — it is a music puzzle. Use the shamisen and play the three notes shown by the glowing moths circling the tree. Wrong notes summon hostile spirits; correct notes appease the guardian.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Soul+of+an+Instrument+walkthrough",
    walkthrough: [
      "Meet Craftsman Keiko at the Tokachi foothills — he marks the Hidden Valley on the map.",
      "Enter the valley solo — Keiko cannot enter.",
      "Find the paulownia tree at the valley's centre, surrounded by glowing moths.",
      "Equip the shamisen and observe the three moths' positions to identify the note sequence.",
      "Play the correct three-note sequence — the guardian spirit appears peacefully.",
      "Harvest the paulownia wood from the guardian's offered branch.",
      "Return to Keiko; receive the Resonance Charm and a shamisen upgrade."
    ]
  },
  {
    id: 1196,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "Those Who Leave",
    location: "Tokachi Range — Tokachi Road South",
    length: "medium",
    difficulty: "High",
    reward: "Freed Captives, Liberator's Charm",
    summary:
      "Young people fleeing rural poverty are being intercepted by slavers on the Tokachi southern road. Atsu dismantles three slaver checkpoints and frees the captives before they disappear across the mountains.",
    aiTip:
      "The slaver captain at Checkpoint 3 carries a key that frees all remaining captives simultaneously — kill him first to avoid having to find individual cell keys. He wears red armour and stays at the rear of the camp.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Those+Who+Leave+walkthrough",
    walkthrough: [
      "Speak with a sobbing family at the Tokachi inn — their child was taken at a checkpoint.",
      "Checkpoint 1 (4 slavers): free 2 captives from the cart.",
      "Checkpoint 2 (7 slavers): free 3 captives from the stockade — pick the lock or fight for the key.",
      "Checkpoint 3 (10 slavers, captain in red): kill the captain first and use his master key.",
      "Free the final 5 captives and escort them to the safe farmhouse north of the road.",
      "Return to the inn to find the family reunited; receive the Liberator's Charm."
    ]
  },
  {
    id: 1197,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Nayoro Wilds",
    title: "A Melody of Thoughts",
    location: "Nayoro Wilds — Spirit Forest",
    length: "medium",
    difficulty: "Low",
    reward: "Forest Spirit Charm, Ainu lore entries",
    summary:
      "An Ainu singer's ancient songs are said to guide travellers through the spirit-haunted Nayoro forest safely. Atsu joins her on a ritual journey, protecting her voice — and learning something of the Ainu world in return.",
    aiTip:
      "The spirits in this quest are non-hostile unless Atsu draws a weapon. Keep weapons sheathed throughout the forest walk and the spirits will provide illumination rather than attacking.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+A+Melody+of+Thoughts+walkthrough",
    walkthrough: [
      "Find Singer Sipne at the Nayoro forest edge at dawn.",
      "Follow Sipne into the Spirit Forest — keep weapons sheathed at all times.",
      "When hostile bandits interrupt the journey, use hand-to-hand throws to incapacitate without drawing steel.",
      "Sipne sings at three waypoints — stand in the glowing circle to receive the spirits' guidance.",
      "At the forest centre, a single large spirit guards the path — Sipne's fourth song appeases it.",
      "Exit the forest with Sipne and receive the Forest Spirit Charm."
    ]
  },
  {
    id: 1198,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Nayoro Wilds",
    title: "The Face of a Master",
    location: "Nayoro Wilds — Remote Village",
    length: "medium",
    difficulty: "High",
    reward: "Master's Disguise Charm, assassination technique",
    summary:
      "A disguised master assassin is hiding among the workers of a Nayoro village, gathering intelligence on Atsu's movements. Expose them through careful observation before they act.",
    aiTip:
      "The assassin changes disguise between observation phases. Track them by the slight scar visible on their left wrist — every disguise leaves this detail. Look for it on each suspect before accusing.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Face+of+a+Master+walkthrough",
    walkthrough: [
      "Receive a tip from an Ainu elder about a suspicious worker in the Nayoro village.",
      "Observe the five suspects going about their daily routines — look for the wrist scar.",
      "Two suspects can be eliminated in Phase 1 (scar absent); focus on the remaining three.",
      "The assassin changes disguise at midday — recheck all remaining suspects at noon.",
      "Identify the correct suspect and confront them at the village well.",
      "Defeat the assassin — they fight with twin knives and smoke bombs.",
      "Receive the Master's Disguise Charm and a new assassination technique from the search of their belongings."
    ]
  },
  {
    id: 1199,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Nayoro Wilds",
    title: "The Face of a Demon",
    location: "Nayoro Wilds — Eastern Farmlands",
    length: "medium",
    difficulty: "Medium",
    reward: "Exile's Charm, peaceful resolution bonus",
    summary:
      "Farmers in the Nayoro eastern lands blame a disfigured exile for livestock deaths and crop destruction. Atsu investigates and discovers the true culprit — a natural predator — and must choose whether to defend the exile.",
    aiTip:
      "Finding the animal tracks before confronting the farmers unlocks a full peaceful resolution. If you skip the investigation and go straight to the exile, the quest resolves with combat only and no bonus charm.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Face+of+a+Demon+walkthrough",
    walkthrough: [
      "Hear the farmers' complaint at the Nayoro market.",
      "Investigate the crime scene: three sets of animal claw marks, not human footprints.",
      "Track the claw marks to a bear's den north of the farmlands — clear the bear.",
      "Find the exile Juko hiding nearby — he has been protecting the farmers from the bear all along.",
      "Bring the farmers and Juko together for a confrontation dialogue.",
      "Choose 'show them the evidence' to resolve peacefully and earn both rewards."
    ]
  },
  {
    id: 1200,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Nayoro Wilds",
    title: "The Heart of an Ainu",
    location: "Nayoro Wilds — Trial Grounds",
    length: "long",
    difficulty: "Medium",
    reward: "Ainu Trial Charm, Nayoro alliance",
    summary:
      "A young Ainu warrior needs to complete a coming-of-age trial in the deep forest to earn their place in the community. Atsu accompanies them as a witness, offering guidance through three ancient trials.",
    aiTip:
      "The trials test the young warrior, not Atsu — let them fight each encounter. Only intervene if they are about to die (health below 20%) or the quest will count Atsu as a cheater and lock the alliance reward.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Heart+of+an+Ainu+walkthrough",
    walkthrough: [
      "Meet young warrior Piri at the Nayoro Trial Grounds entrance.",
      "Trial 1 (Hunt): Piri must track and fell a deer — guide them to the animal's tracks.",
      "Trial 2 (Combat): Piri fights three outlaw scouts alone — only intervene if HP drops below 20%.",
      "Trial 3 (Endurance): Piri must cross a frozen river — assist only by breaking the ice ahead with the Tanzutsu.",
      "Witness the completion ceremony at the far bank.",
      "Receive the Ainu Trial Charm and the Nayoro community alliance marker."
    ]
  },
  {
    id: 1201,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Nayoro Wilds",
    title: "The Load We Bear",
    location: "Nayoro Wilds — Forest Supply Route",
    length: "medium",
    difficulty: "Medium",
    reward: "Packhorse Charm, fast-travel route added",
    summary:
      "A supply chain carrying critical medicine through the Nayoro wilds is being systematically robbed by a bandit cell that knows the route schedule. Atsu must protect the final shipment and eliminate the cell's leadership.",
    aiTip:
      "The bandit cell leader stays back during each ambush wave — only engaging after his subordinates fall. Save your Ghost Stance for him; he is immune to fear and fights with dual axes that deflect standard attacks.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Load+We+Bear+walkthrough",
    walkthrough: [
      "Speak with Supply Master Kano at the Nayoro forest trailhead.",
      "Escort the two supply carriers through the first forest section.",
      "Wave 1 ambush (6 bandits): eliminate quickly — carriers stop if they see combat for too long.",
      "Wave 2 ambush (8 bandits): one flanks the carriers — intercept the flanker first.",
      "The cell leader appears after Wave 2; use Ghost Stance and yari thrusts to handle his dual-axe defence.",
      "Escort the carriers to the Nayoro village and receive the Packhorse Charm and fast-travel route."
    ]
  },
  {
    id: 1202,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "A Fox in Monk's Clothing",
    location: "Teshio Ridge — Mountain Monastery",
    length: "medium",
    difficulty: "Medium",
    reward: "Monk's Stolen Seal, Fox Charm",
    summary:
      "A corrupt travelling monk is extorting isolated Teshio ridge villages under the guise of spiritual blessing. Exposing his deception requires gathering testimony from three villages and cornering him at the monastery.",
    aiTip:
      "The monk is a skilled swordsman despite his robes — do not underestimate him. He opens with a deceptive prayer stance that transitions into a fast draw; do not parry the prayer animation, wait for the draw.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+A+Fox+in+Monks+Clothing+walkthrough",
    walkthrough: [
      "Hear the first complaint at the Teshio Ridge village — an elder paid for a blessing that failed.",
      "Visit two more villages on the ridge for corroborating testimony.",
      "Track the monk to the Mountain Monastery using the villagers' descriptions of his route.",
      "Confront the monk; he refuses to return the money and draws his sword.",
      "Wait through his prayer animation before deflecting the fast draw that follows.",
      "Defeat the monk and recover the stolen seal; return it to the first village elder."
    ]
  },
  {
    id: 1203,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "Encounters of the Wild",
    location: "Teshio Ridge — High Pass",
    length: "short",
    difficulty: "Medium",
    reward: "Hunter's Charm, pelt crafting material",
    summary:
      "An escaped exotic animal — a snow leopard brought north by traders — is causing havoc in the Teshio mountain passes, attacking travellers. Track and subdue it without killing it, as a local village considers it sacred.",
    aiTip:
      "The snow leopard is immune to all lethal attacks — equip the non-lethal pommel strike and chain it three times to trigger a wrestle QTE. Killing it fails the quest and cannot be undone.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Encounters+of+the+Wild+walkthrough",
    walkthrough: [
      "Speak with the panicked trader at the Teshio High Pass waypoint.",
      "Track the snow leopard using paw prints and broken branches — listening sense helps.",
      "Corner the leopard at the cliff ledge — do not use weapons.",
      "Use pommel strikes (hold heavy attack) three times; each non-lethal hit stuns briefly.",
      "Complete the wrestle QTE to subdue the animal safely.",
      "Return it to the village elder using the provided carrying wrap; receive the Hunter's Charm."
    ]
  },
  {
    id: 1204,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "No Brother Left Behind",
    location: "Teshio Ridge — Frozen Northern Slopes",
    length: "medium",
    difficulty: "Medium",
    reward: "Brotherhood Charm, supply cache",
    summary:
      "A soldier searches the frozen Teshio slopes for a younger brother who never returned from a patrol months ago. The trail leads through a collapsed outpost, a bandit camp, and finally a mountain shrine.",
    aiTip:
      "The younger brother is alive but injured at the mountain shrine. Carry him back by choosing 'carry him' in the dialogue — the walking escort sequence is slow but avoids a fight that endangers him further.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+No+Brother+Left+Behind+walkthrough",
    walkthrough: [
      "Meet Soldier Taro at the Teshio Ridge camp — he shows a rough map of the patrol route.",
      "Investigate the collapsed outpost; find patrol notes that redirect to the bandit camp.",
      "Infiltrate the bandit camp and find a prisoner log showing the brother escaped east.",
      "Track the escape route to the mountain shrine using blood marks in the snow.",
      "Find the injured brother Kenta at the shrine; choose 'carry him' in dialogue.",
      "Carry Kenta slowly back to the Teshio camp — no combat, but the path is treacherous.",
      "Reunite the brothers; receive the Brotherhood Charm and supply cache coordinates."
    ]
  },
  {
    id: 1205,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "A Life to Be",
    location: "Ishikari Plain — Roadside Dojo",
    length: "medium",
    difficulty: "Low",
    reward: "Apprentice's Charm, ally Kohana added",
    summary:
      "A young orphan named Kohana watches Atsu fight from a distance and asks to apprentice under her. Atsu sets three tests of resourcefulness, heart, and courage — not combat — to see if Kohana is ready.",
    aiTip:
      "This is a character-driven quest with no combat. Choosing 'teach her' at the end rather than 'send her to safety' adds Kohana as a recurring ally who appears in two later quests with useful information.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+A+Life+to+Be+walkthrough",
    walkthrough: [
      "Notice Kohana watching at the Ishikari roadside dojo — she approaches after a fight.",
      "Set Test 1 (Resourcefulness): ask her to find food for three villagers — she succeeds.",
      "Set Test 2 (Heart): ask her to help an injured traveller — observe from a distance.",
      "Set Test 3 (Courage): she must talk down a threatening drunk at the inn — no weapons.",
      "Return and evaluate all three results in dialogue.",
      "Choose 'teach her' to add Kohana as an ally and receive the Apprentice's Charm."
    ]
  },
  {
    id: 1206,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Artisanal Treasures",
    location: "Ishikari Plain — Craftsman District",
    length: "medium",
    difficulty: "Medium",
    reward: "Artisan's Commission Charm, armour decoration unlocked",
    summary:
      "A master craftsman's workshop is being extorted by a gang demanding protection money. Defeating the gang and recovering stolen design scrolls allows the craftsman to return to creating the region's finest armour decorations.",
    aiTip:
      "The gang leader uses a halberd with extreme reach — stay inside his swing arc during the duel. The stolen scrolls are split between two locations; check both before leaving the gang's warehouse.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Artisanal+Treasures+walkthrough",
    walkthrough: [
      "Speak with Craftsman Daiki at his locked workshop in the Craftsman District.",
      "Track the extortion gang to their warehouse south of the district.",
      "Clear the eight gang members inside the warehouse.",
      "Locate Scroll Cache 1 on the warehouse shelves and Scroll Cache 2 in the locked back room.",
      "Defeat Gang Leader Kuro — stay inside his halberd arc and attack twice per opening.",
      "Return both scroll caches to Daiki and receive the Commission Charm and armour decoration."
    ]
  },
  {
    id: 1207,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Bold Kaji Forge",
    location: "Ishikari Plain — Kaji Forge",
    length: "medium",
    difficulty: "Medium",
    reward: "Bold Kaji weapon upgrade tier, rare ore",
    summary:
      "The famed Bold Kaji forge was shut down after an outlaw siege. Gathering the ore it needs and clearing its remaining occupants allows it to reopen — unlocking a premium weapon upgrade tier unique to Ishikari.",
    aiTip:
      "The forge's premium upgrade tier gives weapons a fire damage bonus — pair it with the scorch bomb for a devastating fire build. Complete the Bomb Maker Sensei quest before this one to make the most of that synergy.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Bold+Kaji+Forge+walkthrough",
    walkthrough: [
      "Find the abandoned Kaji Forge and read the closure notice on the door.",
      "Clear the eight outlaw squatters inside the forge.",
      "Gather two veins of Kaji Ore from the mine shaft behind the forge — guarded by four more outlaws.",
      "Speak with hidden forgemaster Taro hiding in a nearby barn — he returns with the ore.",
      "Watch the reopening cutscene and commission a weapon upgrade to complete the quest.",
      "Receive the Bold Kaji upgrade tier and rare ore bonus."
    ]
  },
  {
    id: 1208,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Broken Horn Garrison",
    location: "Ishikari Plain — Broken Horn Garrison",
    length: "long",
    difficulty: "High",
    reward: "Garrison Restored, Commander's Seal Charm",
    summary:
      "A strategic garrison that once protected Ishikari's northern road has been overrun and used as an outlaw staging base. Retaking it is a full assault against an entrenched force of twenty defenders.",
    aiTip:
      "The garrison has two floors — clear the ground floor completely before ascending. The outlaw commander on the upper floor calls for reinforcements if he spots you on the stairs; silence him quickly with a Tanzutsu shot.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Broken+Horn+Garrison+walkthrough",
    walkthrough: [
      "Receive the retake order from a Ishikari military contact after completing Protecting the Peace.",
      "Observe the garrison exterior; twenty defenders plus a commander on the upper floor.",
      "Breach the ground floor via the damaged south wall — six defenders inside.",
      "Clear all ground-floor defenders before ascending — the staircase has a tripwire.",
      "Reach the upper floor; use a Tanzutsu shot to silence the commander before he calls reinforcements.",
      "Clear eight upper-floor defenders and loot the commander's office for the Seal.",
      "Hold the garrison for 60 seconds while a small relief wave attacks — then the garrison is secured."
    ]
  },
  {
    id: 1209,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Cursed Ground",
    location: "Ishikari Plain — Abandoned Fields",
    length: "medium",
    difficulty: "Low",
    reward: "Fields Reclaimed, Harvest Charm",
    summary:
      "Villagers refuse to farm land they believe is spiritually cursed after crops repeatedly died there. Atsu's investigation reveals the real cause is buried contraband leaching poison into the soil.",
    aiTip:
      "This is an investigation quest — no combat required. Use the listening sense near the three failed crop rows to identify the buried contraband locations. Each spot glows faintly with a green tint.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Cursed+Ground+walkthrough",
    walkthrough: [
      "Speak with Village Elder Shiro about the abandoned fields.",
      "Use the listening sense near each of the three failed crop rows.",
      "Dig up the contraband package at each glowing location using the interact prompt.",
      "Inspect the packages — they contain discarded poison used by a disbanded outlaw group.",
      "Report to the elder with the evidence and identify the responsible party from your quest log.",
      "Receive the Harvest Charm and watch the fields reclamation cutscene."
    ]
  },
  {
    id: 1210,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Oni's Breath Inn",
    location: "Ishikari Plain — Oni's Breath Inn",
    length: "medium",
    difficulty: "Medium",
    reward: "Inn re-opened (safe house), Innkeeper's Charm",
    summary:
      "Rumours of a ghost haunting a once-popular inn have driven away all customers and staff. Atsu investigates the haunting and discovers a very human source — an outlaw gang using the ghost story as cover for their operation.",
    aiTip:
      "The ghost effects (floating objects, strange sounds) are triggered by a pressure plate system the outlaws installed. Disable the three plates before confronting the gang to expose the trick during the dialogue.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Onis+Breath+Inn+walkthrough",
    walkthrough: [
      "Speak with nervous former Innkeeper Masa outside the closed inn.",
      "Investigate the inn interior; locate and disable three pressure plates (listening sense reveals them).",
      "Search the basement — find the outlaw gang's hidden living quarters and operation evidence.",
      "Confront the gang leader (5 members total) in the main hall.",
      "Present the pressure plate evidence in dialogue for the humiliating exposure cutscene.",
      "Help Masa reopen the inn; it becomes a safe house and the Innkeeper's Charm is awarded."
    ]
  },
  {
    id: 1211,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Shelter from the Storm",
    location: "Ishikari Plain — Snowbound Lodge",
    length: "medium",
    difficulty: "High",
    reward: "Storm Survival Charm, secret identity revealed",
    summary:
      "Travellers stranded by a sudden blizzard take shelter in a remote lodge alongside Atsu. One of them is a Yōtei Six informant in disguise — Atsu must identify them before they slip away under cover of the storm.",
    aiTip:
      "The informant is identified by three clues hidden in the lodge: a coded letter, a Yōtei Six sigil on their boot sole, and a second water flask (informants carry two for long missions). Find all three before accusing.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Shelter+from+the+Storm+walkthrough",
    walkthrough: [
      "Shelter at the Snowbound Lodge when a blizzard closes the road.",
      "Mingle with the four other travellers; each has a backstory — listen carefully.",
      "Clue 1: find the coded letter under the informant's bedroll during a search.",
      "Clue 2: observe the sigil on the boot sole when a traveller removes their boots by the fire.",
      "Clue 3: count the water flasks on each traveller's pack — the informant has two.",
      "Confront the identified informant; they draw a weapon and fight — five enemies if they alert allies.",
      "Receive the Storm Survival Charm and new intelligence after the confrontation."
    ]
  },
  {
    id: 1212,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "The Great Jigoku Gambit",
    location: "Ishikari Plain — Jigoku Gambling Den",
    length: "medium",
    difficulty: "Medium",
    reward: "Gambler's Fortune Charm, Gold",
    summary:
      "A con artist's elaborate scheme to swindle the local gambling den accidentally draws in three real Yōtei Six lieutenants — who believe the con is a rival operation targeting them. Atsu must manage the chaos.",
    aiTip:
      "This quest has a comedic tone with three branching confrontations running simultaneously. Handle the den owner first — he has the most guards. The con artist Cho is genuinely funny; let her scenes play out for optional lore.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Great+Jigoku+Gambit+walkthrough",
    walkthrough: [
      "Find con artist Cho frantically trying to escape the gambling den.",
      "Learn that three Yōtei Six lieutenants have crashed her scheme, each thinking she's a rival.",
      "Handle Lieutenant 1 (den entrance): defeat his four guards and send him off with false intelligence.",
      "Handle Lieutenant 2 (upper floor): Cho distracts him while Atsu incapacitates his bodyguard.",
      "Handle Lieutenant 3 (basement): a direct fight — nine enemies, use the narrow stairwell as a chokepoint.",
      "Help Cho escape with her winnings; receive the Gambler's Fortune Charm and gold from her share."
    ]
  },
  {
    id: 1213,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "The Lost Scouts",
    location: "Ishikari Plain — Eastern Wilderness",
    length: "medium",
    difficulty: "Medium",
    reward: "Scout's Compass Charm, new patrol intel",
    summary:
      "Three advance scouts who disappeared in enemy territory must be found. Each is in a different predicament — captured, injured, and hiding — requiring a different rescue approach for each.",
    aiTip:
      "Rescue Scout 2 (injured) before Scout 3 (hiding) — Scout 3's hiding spot is only revealed by Scout 2's information. Going out of order causes Scout 3 to move and become much harder to locate.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Lost+Scouts+walkthrough",
    walkthrough: [
      "Receive the missing scouts report from the Ishikari military commander.",
      "Scout 1 (captured): infiltrate the outlaw camp, free her from the cage with the captain's key.",
      "Scout 2 (injured): follow the blood trail east to a collapsed barn; treat wounds with herbal kit.",
      "Get Scout 2's information about Scout 3's hiding location before moving on.",
      "Scout 3 (hiding): use the specific landmark Scout 2 described to find the concealed cave entrance.",
      "Escort all three scouts to the military post; receive the Scout's Compass Charm."
    ]
  },
  {
    id: 1214,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "The Sentinel",
    location: "Ishikari Plain — Ruined Post",
    length: "short",
    difficulty: "Low",
    reward: "Sentinel's Charm, lore document",
    summary:
      "An ancient samurai stands guard alone at a ruined outpost, still waiting for orders from a lord who died thirty years ago. Atsu must decide whether to tell him the truth or find a way to give him permission to rest.",
    aiTip:
      "This is a purely narrative quest with no combat. The best reward comes from finding the lord's old seal in the ruined post first — presenting it gives the samurai official permission to stand down, earning the bonus lore document.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Sentinel+walkthrough",
    walkthrough: [
      "Find the elderly sentinel Goemon at the crumbling outpost on the Ishikari eastern road.",
      "Search the ruined post — find the lord's old seal in a collapsed room.",
      "Speak with Goemon; present the seal.",
      "Watch the extended cutscene where Goemon stands down after thirty years.",
      "Receive the Sentinel's Charm and the lore document about Ishikari's history."
    ]
  },
  {
    id: 1215,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "The Weight of Coin",
    location: "Ishikari Plain — Tax Collector's Route",
    length: "medium",
    difficulty: "Medium",
    reward: "Villagers' Gold Returned, Balance Charm",
    summary:
      "A corrupt tax collector is starving Ishikari villages with impossible demands. Atsu can resolve this peacefully by exposing the collection fraud to the regional authority — or by force, taking the gold back directly.",
    aiTip:
      "The peaceful path (collecting evidence and reporting to the authority) gives better charm rewards. The force path is faster and still returns the gold, but locks out the Balance Charm.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Weight+of+Coin+walkthrough",
    walkthrough: [
      "Speak with starving villagers in three Ishikari settlements about the excessive taxation.",
      "Peaceful path: collect three falsified tax ledger pages from the collector's camps.",
      "Present the ledgers to the Ishikari regional magistrate — the collector is arrested.",
      "The magistrate returns the gold to the villages — receive the Balance Charm.",
      "Force path alternative: ambush the tax collector's convoy and take the gold directly.",
      "Distribute the gold manually to three villages for the force path completion."
    ]
  },
  {
    id: 1216,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Oshima Coast",
    title: "A Brokered Trust",
    location: "Oshima Coast — Pirate Harbour",
    length: "medium",
    difficulty: "High",
    reward: "Pirate Intel on Yōtei Six, Broker's Charm",
    summary:
      "A pirate broker offers Atsu actionable intelligence on the Yōtei Six's sea routes in exchange for completing a dangerous heist — stealing a rival pirate captain's logbook from a guarded ship in the harbour.",
    aiTip:
      "Board the ship from the water side after nightfall — the crew rotates to the port side at midnight, leaving the starboard unguarded for a 90-second window. Use it or fight through ten naval guards.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+A+Brokered+Trust+walkthrough",
    walkthrough: [
      "Meet Broker Kaida at the Pirate Harbour tavern.",
      "Scout the target ship at the harbour; note the midnight crew rotation.",
      "Swim to the starboard side at midnight and climb the anchor chain silently.",
      "Locate the captain's logbook in the stern cabin — one guard inside.",
      "Exit via the anchor chain before the crew rotates back.",
      "Deliver the logbook to Kaida; receive the intelligence and Broker's Charm."
    ]
  },
  {
    id: 1217,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Oshima Coast",
    title: "A Promise of Treasure",
    location: "Oshima Coast — Coastal Caves",
    length: "medium",
    difficulty: "Medium",
    reward: "Treasure Cache, Sailor's Charm",
    summary:
      "A dying sailor passes Atsu a hand-drawn map to a coastal treasure cache his crew buried years ago — on the condition she splits it with his estranged daughter. Finding both the treasure and the daughter makes this more than a simple treasure hunt.",
    aiTip:
      "The treasure cave is guarded by a rival pirate gang who found the map first. They are entrenched inside the cave — use the Scorch Bomb at the cave entrance to flush them out rather than fighting in the dark.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+A+Promise+of+Treasure+walkthrough",
    walkthrough: [
      "Receive the map from the dying sailor Kenji at the Oshima dockside.",
      "Locate his daughter Ami at the fish market — she is wary but agrees to accompany you.",
      "Follow the map to the coastal cave entrance; pirates guard the entrance.",
      "Use a Scorch Bomb at the cave entrance to flush eight pirates into the open.",
      "Clear the cave interior of four more pirates and claim the treasure chest.",
      "Return to Ami with her half of the treasure; receive the Sailor's Charm from her gratitude."
    ]
  },
  {
    id: 1218,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Oshima Coast",
    title: "The New Lord",
    location: "Oshima Coast — Coastal Manor",
    length: "medium",
    difficulty: "High",
    reward: "Usurper's Seal, Legitimacy Charm",
    summary:
      "A young noble arrives on Oshima claiming authority over the coastal trade routes. The locals know his documents are forged — the real heir died at sea. Atsu must expose the impostor before he consolidates power.",
    aiTip:
      "The impostor's four bodyguards are elite fighters with coordinated attack patterns. Separate them by throwing a smoke bomb into the centre of the group before engaging — isolated fights are far more manageable.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+New+Lord+walkthrough",
    walkthrough: [
      "Speak with dock master Haruto about the suspicious new lord.",
      "Investigate the manor: find the forged appointment letter in the archives room.",
      "Research the real heir's fate at the Oshima records office — a ship manifest confirms he drowned.",
      "Confront the impostor at the coastal manor with the evidence.",
      "Fight his four elite bodyguards — smoke bomb to separate them.",
      "Defeat the impostor in a final duel and hand the forged documents to the magistrate.",
      "Receive the Usurper's Seal and Legitimacy Charm."
    ]
  },
  {
    id: 1219,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Oshima Coast",
    title: "The Tooth Breaker",
    location: "Oshima Coast — Fishing Village",
    length: "short",
    difficulty: "Medium",
    reward: "Village Protected, Iron Fist Charm",
    summary:
      "A notorious fistfighter turned enforcer is terrorising the Oshima fishing villages, demanding tribute before every tide. Atsu challenges him to a public duel to end the extortion and restore the fishermen's dignity.",
    aiTip:
      "The Tooth Breaker fights with no weapons — pure grapple and punch. He counters all sword attacks when his guard is up; wait for him to overextend on a haymaker and hit him during the recovery.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Tooth+Breaker+walkthrough",
    walkthrough: [
      "Hear the fishermen's complaint at the Oshima village market.",
      "Challenge the Tooth Breaker to a public duel at the village square.",
      "Wait for his haymaker overextension — he swings wide every third attack.",
      "Strike twice during the recovery window; repeat.",
      "At half health he grabs — complete the wrestling QTE to break free.",
      "Finish with three consecutive hits after his final haymaker; he surrenders.",
      "Receive the Iron Fist Charm from the grateful village headman."
    ]
  },
  {
    id: 1220,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "The Weight of Snow",
    location: "Teshio Ridge — Avalanche Zone",
    length: "medium",
    difficulty: "Medium",
    reward: "Avalanche Survivor's Charm, rescue supplies",
    summary:
      "A Teshio ridge village is partially buried by a sudden avalanche. Survivors need rescue before outlaw scavengers — who follow disasters looking for easy pickings — arrive to strip what little remains.",
    aiTip:
      "There are six buried survivors across three locations. Rescue the two children first — they are in the most structurally unstable section and have the shortest time window before a secondary collapse.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Weight+of+Snow+walkthrough",
    walkthrough: [
      "Arrive at the Teshio Avalanche Zone after hearing the disaster bell.",
      "Rescue the two children in the unstable northern section first — time-sensitive.",
      "Clear the four outlaw scavengers who arrive at the village edge.",
      "Dig out survivor 3 and 4 from the inn ruins — use the provided shovel interact prompt.",
      "Find and rescue survivors 5 and 6 in the collapsed barn on the south side.",
      "Receive the Avalanche Survivor's Charm once all six are safe."
    ]
  },
  {
    id: 1221,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Nayoro Wilds",
    title: "A Journey North",
    location: "Nayoro Wilds — Northern Trailhead",
    length: "medium",
    difficulty: "Medium",
    reward: "Northern Trade Charm, trade route unlocked",
    summary:
      "A merchant caravan heading deeper into Ezo's northern wilds needs protection through the most dangerous stretch of the Nayoro forest. Three bandit ambushes and one river crossing test Atsu's escort skills.",
    aiTip:
      "The river crossing is the hardest section — bandits attack from both banks simultaneously. Get the caravan onto the far bank first, then fight from the high ground on the far side rather than splitting your attention mid-river.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+A+Journey+North+walkthrough",
    walkthrough: [
      "Meet Merchant Leader Saku at the Northern Trailhead.",
      "Ambush 1 (4 bandits): intercept before they reach the caravan — 200m ahead on the trail.",
      "Ambush 2 (7 bandits): come from the tree line; use the cart as cover for the merchants.",
      "River Crossing: get the caravan to the far bank first, then hold the high ground against 8 attackers.",
      "Ambush 3 (5 bandits): the final stretch — clear them before Saku's departure point.",
      "Receive the Northern Trade Charm and the new trade route map marker."
    ]
  },
  {
    id: 1222,
    type: "side",
    category: "Side Tales",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Youth Under Fire",
    location: "Ishikari Plain — Burning Mill",
    length: "medium",
    difficulty: "High",
    reward: "Young Soldiers' Charm, Ishikari defence alliance",
    summary:
      "A small garrison of inexperienced soldiers is defending a strategically vital burning mill against a sustained outlaw siege. Atsu arrives to find them outmatched and rallies them through two desperate defensive waves.",
    aiTip:
      "The soldiers will charge recklessly if left alone. Issue the 'hold position' command by speaking with the garrison sergeant between waves — it keeps them alive and gives Atsu room to flank the attackers.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Youth+Under+Fire+walkthrough",
    walkthrough: [
      "Hear the mill alarm bells from the Ishikari road and investigate.",
      "Speak with Sergeant Daichi to trigger the first defensive wave.",
      "Wave 1 (10 outlaws): position yourself at the mill's southern gate chokepoint.",
      "Between waves: speak with Daichi and choose 'hold position' to prevent suicidal charges.",
      "Wave 2 (15 outlaws including a mounted attacker): use Tanzutsu to dismount the rider first.",
      "After Wave 2, a brief cutscene ends the siege; receive the charm and alliance unlock."
    ]
  },
  {
    id: 1223,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "Smiling Yoshitomo",
    location: "Yōtei Grasslands — Outlaw Hamlet",
    length: "short",
    difficulty: "Low",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A deceptively cheerful bandit leader who lures victims with a friendly smile before ambushing with his crew. He is located in a small hamlet north of the Grasslands inn.",
    aiTip:
      "His crew of four attacks the moment he is threatened — open with a Ghost Stance kill on Yoshitomo himself to end the fight before it starts.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Smiling+Yoshitomo+walkthrough",
    walkthrough: [
      "Accept the bounty from the Grasslands inn bounty board or Kojiro the Bounty Broker.",
      "Travel to the Outlaw Hamlet in northern Grasslands.",
      "Identify Yoshitomo by his distinctive red sash — he greets you warmly before signalling his crew.",
      "Activate Ghost Stance immediately and execute him before his crew can react.",
      "Defeat the remaining four crew members.",
      "Return to Kojiro to claim the reward."
    ]
  },
  {
    id: 1224,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "Crow Genzo",
    location: "Yōtei Grasslands — Eastern Treetops",
    length: "short",
    difficulty: "Low",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A thief who scouts targets from treetops using a trained crow as a lookout. His crow alerts him to approach — eliminate the bird first or find the blind spot in its patrol pattern.",
    aiTip:
      "The crow patrols a figure-eight pattern — there is a five-second gap on the west side between loops. Use that gap to climb the tree and reach Genzo before the crow returns.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Crow+Genzo+walkthrough",
    walkthrough: [
      "Accept the bounty from the Grasslands board.",
      "Locate Genzo's roost in the eastern Grasslands tall pines.",
      "Time the crow's figure-eight patrol and move during the five-second western gap.",
      "Climb the tree and reach Genzo's platform before the crow completes its loop.",
      "Defeat Genzo — he uses throwing knives and drops from the tree; catch him at the base.",
      "Return to Kojiro for the reward."
    ]
  },
  {
    id: 1225,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "Black Powder Ippei",
    location: "Yōtei Grasslands — Abandoned Mill",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A reckless bomb-thrower operating in the outer grassland trails. Ippei throws improvised explosives at anyone who approaches and has booby-trapped the abandoned mill he uses as a base.",
    aiTip:
      "Do not sprint toward Ippei — the mill perimeter has three tripwire bombs. Walk slowly through the entrance and use the listening sense to spot the wires. His own bombs can be deflected back with a well-timed dodge-roll.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Black+Powder+Ippei+walkthrough",
    walkthrough: [
      "Accept the bounty from the Grasslands board.",
      "Approach the Abandoned Mill slowly — three tripwires visible with listening sense.",
      "Disable or dodge around the tripwires before entering.",
      "Ippei throws bombs in arcs — dodge-roll into them to send them back.",
      "Close the distance when he reloads and finish with melee.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1226,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Yotei Grasslands",
    title: "Soma the Condemned",
    location: "Yōtei Grasslands — River Ravine",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A former executioner turned outlaw, branded for death by two rival clans who both want her head. Soma fights with a large executioner's blade and has no fear — she charges immediately on sight.",
    aiTip:
      "Soma's executioner blade has massive range and cleave — never get caught between her and a wall. Fight in open ground, stay mobile, and use the Kusarigama pull to interrupt her charging attack at mid-range.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Soma+the+Condemned+walkthrough",
    walkthrough: [
      "Accept the bounty and travel to the River Ravine camp.",
      "Soma charges immediately — maintain distance and stay in open ground.",
      "Use Kusarigama Chain Pull to interrupt her charge when she winds up.",
      "Two chain pulls stagger her enough for a three-hit combo.",
      "At half health she switches to slower, heavier overhead swings — easier to time deflects.",
      "Defeat her and report to Kojiro."
    ]
  },
  {
    id: 1227,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "The Three Terrors",
    location: "Tokachi Range — Marsh Crossing",
    length: "short",
    difficulty: "High",
    reward: "Gold, Bounty Broker standing",
    summary:
      "Three brothers who operate as a coordinated combat pack — one grappler, one knife-thrower, one shieldbearer — and must be fought simultaneously. Arguably the hardest bounty in the game.",
    aiTip:
      "Focus down the grappler first — if he grabs you while the knife-thrower fires, you lose enormous health instantly. Use Ghost Stance at the start to execute the grappler and even the odds immediately.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Three+Terrors+walkthrough",
    walkthrough: [
      "Accept the bounty — this is rated hard, come prepared with full supplies.",
      "Find the Three Terrors at the Tokachi Marsh Crossing.",
      "Activate Ghost Stance immediately and execute the grappler (leftmost brother).",
      "Target the knife-thrower second — keep dodging his throws while closing distance.",
      "The shieldbearer is last — use Kusarigama Chain Pull to break his guard.",
      "Report all three kills to Kojiro for the combined reward."
    ]
  },
  {
    id: 1228,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "Muneji the Bone Crusher",
    location: "Tokachi Range — Quarry Camp",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A massive brawler who fights with a war club and has survived three previous bounty hunters. He camps at a quarry outside Tokachi with six loyal followers.",
    aiTip:
      "Muneji's war club is slow but its area stagger is huge. Stay at medium range and bait the club swing, then sprint in for two hits during the long recovery. The yari's Charging Thrust is ideal for this rhythm.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Muneji+the+Bone+Crusher+walkthrough",
    walkthrough: [
      "Accept the bounty and travel to the Quarry Camp.",
      "Clear the six followers first using stealth — Muneji does not notice quiet kills.",
      "Engage Muneji alone; stay at medium range to bait the club swing.",
      "Sprint in during the club's recovery window and hit twice.",
      "Repeat the bait-and-punish cycle five times to end the fight.",
      "Collect the bounty from Kojiro."
    ]
  },
  {
    id: 1229,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "Bear Man Chikatoshi",
    location: "Tokachi Range — Deep Mountain Camp",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A hermit hunter who has lived alone in the Tokachi mountains so long he moves like a bear — on all fours for sprinting and with unpredictable direction changes. Travellers report he ambushes from above.",
    aiTip:
      "Chikatoshi attacks from high ground — always look up when his marker appears. He drops from trees and cliffs without warning. Equipping the listening sense before approaching reveals his position above you.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Bear+Man+Chikatoshi+walkthrough",
    walkthrough: [
      "Accept the bounty and travel to the Deep Mountain Camp area.",
      "Use listening sense as you approach — Chikatoshi is above, not on the ground.",
      "He drops from a tree when you step into the clearing; dodge the impact immediately.",
      "Fight normally once he is on the ground — he is fast but has no special attacks standing.",
      "He retreats to high ground once at half health; use Tanzutsu to knock him down.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1230,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "One-Eye Moritaka",
    location: "Tokachi Range — Ridgeline Nest",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A veteran archer who lost his eye and his honour in a battle long ago. Now he picks off merchants from ridgeline nests above the Tokachi trade roads. His remaining eye makes him deadly at range.",
    aiTip:
      "Moritaka fires fast and accurately from extreme range — do not approach in the open. Hug the cliff wall below his nest to stay out of his line of sight, then climb to him from behind using the cliff's blind side.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+One-Eye+Moritaka+walkthrough",
    walkthrough: [
      "Accept the bounty and locate the ridgeline nest on the Tokachi map.",
      "Approach along the cliff wall directly below — stay out of his sightline.",
      "Climb the cliff from the blind side (eastern face); he cannot see this approach.",
      "Reach the nest and engage in melee — he is defenceless at close range.",
      "Defeat Moritaka and claim the reward from Kojiro."
    ]
  },
  {
    id: 1231,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "Junpei the Snatcher",
    location: "Tokachi Range — Marsh Town",
    length: "short",
    difficulty: "Low",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A quick, nimble thief who kidnaps merchants for ransom in the Tokachi marsh towns. He is never seen arriving — only leaving with a hostage. Track him to his holding site and free his current victim.",
    aiTip:
      "Junpei runs the moment combat starts — he will not fight until cornered. Chase him through the marsh town and cut off his exit route by positioning at the docks before triggering the encounter.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Junpei+the+Snatcher+walkthrough",
    walkthrough: [
      "Accept the bounty and find Junpei's holding site at the Marsh Town docks.",
      "Position yourself at the dock exit before approaching Junpei.",
      "He bolts immediately — he has a 10-second head start but cannot cross the water.",
      "Corner him at the dock edge; he finally fights — quick but fragile.",
      "Free the hostage merchant from the holding cage after Junpei is defeated.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1232,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Tokachi Range",
    title: "Blue Yamauba",
    location: "Tokachi Range — Forest Edge Camp",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A woman outlaw who dresses as the demon-witch Yamauba in blue robes to terrify her victims into compliance. Her theatrical persona hides a genuine swordswoman with a flair for misdirection.",
    aiTip:
      "She opens with a scream that briefly stuns Atsu if you face her directly — look away or close your eyes (hold the shield button) for the first two seconds of the encounter to avoid the stun.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Blue+Yamauba+walkthrough",
    walkthrough: [
      "Accept the bounty and travel to the Forest Edge Camp.",
      "She opens with a stun scream — hold the shield button for the first two seconds to resist.",
      "After the scream, she switches to fast sword strikes — standard deflect timing.",
      "At half health she throws blue smoke powder — use listening sense to track her through it.",
      "Corner her after the smoke clears and finish the fight.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1233,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "Houndmaster Toyotaro",
    location: "Teshio Ridge — Frozen Kennel",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A bounty hunter turned outlaw who hunts his own targets using a pack of four trained dogs. Neutralise the dogs before engaging Toyotaro — they lock-on and pin Atsu if she fights him first.",
    aiTip:
      "Throw food scraps (found near the kennel entrance) to distract the dogs and move them away from Toyotaro. The scorch bomb also routes them without killing them — useful for the humane-completion bonus.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Houndmaster+Toyotaro+walkthrough",
    walkthrough: [
      "Accept the bounty and travel to the Frozen Kennel camp.",
      "Find the food scraps near the kennel entrance.",
      "Throw food to draw the four dogs away from Toyotaro.",
      "Alternatively, use a scorch bomb near the kennel to rout the dogs non-lethally.",
      "Engage Toyotaro alone — he uses a chain whip with decent range.",
      "Deflect the chain when it extends and counter during the retraction pause.",
      "Defeat Toyotaro and claim the reward from Kojiro."
    ]
  },
  {
    id: 1234,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "Inagawa the Gambler",
    location: "Teshio Ridge — Gambling House",
    length: "short",
    difficulty: "Low",
    reward: "Gold, Bounty Broker standing",
    summary:
      "Inagawa runs a loaded dice operation that strips travellers dry, then his enforcers take what the dice leave behind. He surrounds himself with eight heavies in the Teshio gambling house.",
    aiTip:
      "Inagawa himself is weak — his eight bodyguards are the real challenge. Use a scorch bomb at the gambling house entrance during a busy moment to scatter the bodyguards before Inagawa can organise a coordinated defence.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Inagawa+the+Gambler+walkthrough",
    walkthrough: [
      "Accept the bounty and locate the Teshio Gambling House.",
      "Throw a scorch bomb through the entrance to scatter the eight bodyguards.",
      "Engage the disorganised bodyguards in pairs as they recover.",
      "Inagawa panics once bodyguards fall — he hides under the main table.",
      "Pull him out with the Kusarigama Chain Pull and finish the fight.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1235,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "Snowstorm Katagiri",
    location: "Teshio Ridge — Northern Blizzard Pass",
    length: "short",
    difficulty: "High",
    reward: "Gold, Bounty Broker standing",
    summary:
      "Katagiri only strikes during blizzards and uses the whiteout conditions as camouflage for a hit-and-run fighting style. This bounty can only trigger during the Teshio Ridge blizzard weather event.",
    aiTip:
      "This bounty can only be completed during the blizzard weather event — rest at a Teshio camp to advance time until the blizzard begins. Use the listening sense constantly; Katagiri's footsteps are the only reliable indicator of position.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Snowstorm+Katagiri+walkthrough",
    walkthrough: [
      "Accept the bounty — note it can only complete during a Teshio blizzard.",
      "Rest at a Teshio camp until the blizzard event triggers (check weather icon on map).",
      "Travel to the Northern Blizzard Pass — visibility drops to 20 metres.",
      "Use listening sense to track Katagiri's circling movement pattern.",
      "He attacks from behind — time a back-dodge when his footsteps stop for two seconds.",
      "Counter-attack aggressively; he retreats if hit three times — chase him with the Charging Thrust.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1236,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "Nameless Killer",
    location: "Teshio Ridge — Remote Post Road",
    length: "short",
    difficulty: "High",
    reward: "Gold, Bounty Broker standing",
    summary:
      "An assassin with no known identity who uses poisoned needles launched from a blowpipe and misdirection tactics. The bounty notice has no portrait — only a description of the needle pouch they always carry.",
    aiTip:
      "The Nameless Killer uses poison needles that do not break block but apply a stacking poison dot. Equip maximum antidotes and herbal medicine before the encounter. The killer flees after three hits — use the Charging Thrust to close down each escape attempt.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Nameless+Killer+walkthrough",
    walkthrough: [
      "Accept the bounty — note there is no portrait, only a needle pouch description.",
      "Travel to the Remote Post Road; the Killer appears once you enter the marked zone.",
      "They open with a poison needle burst — block to reduce the hit, use antidote immediately.",
      "Close the distance and land three hits before they flee the first time.",
      "Use Charging Thrust to close down two escape attempts.",
      "After three flight-and-return cycles, they tire and fight to the finish.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1237,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Teshio Ridge",
    title: "Black Night Kubo",
    location: "Teshio Ridge — Moonless Hollow",
    length: "short",
    difficulty: "High",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A night-only raider in all-black gear who has never been identified or seen in daylight. This bounty only completes at night and Kubo fights with near-invisible shadowstep movement.",
    aiTip:
      "This bounty is night-only — rest until nightfall at the nearest camp. Kubo's shadowstep movement disappears him from sight for two seconds; use listening sense during the invisible phase to pre-dodge his re-emergence attack.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Black+Night+Kubo+walkthrough",
    walkthrough: [
      "Accept the bounty — note night-only requirement.",
      "Rest until nightfall and travel to Moonless Hollow.",
      "Kubo appears from shadow — use listening sense to track the invisible phase.",
      "Pre-dodge left when the listening sense pulse ends (his re-emergence comes from the right).",
      "Counter-attack immediately after the dodge — he is vulnerable for one second on re-emergence.",
      "Repeat the listen-dodge-counter cycle eight times to end the fight.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1238,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Bloody Strings Hachibee",
    location: "Ishikari Plain — Roadside Inn",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A former shamisen player whose intimate performances always ended with his clients being robbed and murdered. He uses the shamisen strings as a garrotte weapon in close combat.",
    aiTip:
      "Do not let Hachibee get behind you — his garrotte attack from the rear is a one-hit kill on hard difficulty. Keep a wall at your back throughout the fight and use the yari's Spinning Sweep to maintain frontal spacing.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Bloody+Strings+Hachibee+walkthrough",
    walkthrough: [
      "Accept the bounty and travel to the Roadside Inn.",
      "Hachibee is performing for an audience — wait for him to finish or interrupt with a challenge.",
      "Keep a wall at your back — never let him manoeuvre behind you.",
      "Use yari Spinning Sweep to maintain distance and create opening windows.",
      "His garrotte grab has a slow wind-up — dodge immediately when he raises both hands.",
      "Defeat Hachibee and claim the reward from Kojiro."
    ]
  },
  {
    id: 1239,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Toshi the Torch",
    location: "Ishikari Plain — Hay District",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "An arsonist who sets buildings ablaze as distractions, then his crew loots the chaos. Three fires around Ishikari's hay district burn simultaneously when you arrive — extinguish them and find Toshi in the confusion.",
    aiTip:
      "Extinguishing the fires is optional but earns bonus standing. Toshi is always near the largest fire — look for the figure in the firelight who is not panicking. He uses a fire lance with a short but lethal range.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Toshi+the+Torch+walkthrough",
    walkthrough: [
      "Accept the bounty; three fires in the Hay District burn when you arrive.",
      "Optional: extinguish all three fires using water barrel interact prompts for bonus standing.",
      "Locate Toshi near the largest fire — he wears an orange headband.",
      "His fire lance has short range — stay outside it and use the Kusarigama Chain Pull to drag him into fighting distance.",
      "Defeat Toshi; his crew scatters without him.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1240,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Eijiro the Ruthless",
    location: "Ishikari Plain — Village Crossroads",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "Eijiro runs a brutal extortion ring across three Ishikari villages, collecting from each in rotation. He travels with six enforcers and considers himself untouchable.",
    aiTip:
      "Intercept Eijiro on the road between villages where he has fewer enforcers — catching him mid-transit reduces the escort from six to two. The bounty board description includes his travel schedule.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Eijiro+the+Ruthless+walkthrough",
    walkthrough: [
      "Accept the bounty and read the schedule description on the notice.",
      "Intercept Eijiro on the road between Village 2 and Village 3 at mid-morning.",
      "Mid-transit escort is only two enforcers — defeat them quickly.",
      "Eijiro fights with a large club; standard bait-and-punish timing.",
      "Defeat him and claim the reward from Kojiro."
    ]
  },
  {
    id: 1241,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Turtle Man Kamekichi",
    location: "Ishikari Plain — Stone Quarry",
    length: "short",
    difficulty: "High",
    reward: "Gold, Bounty Broker standing",
    summary:
      "Kamekichi fights behind a reinforced shell-like body shield so heavy it stops all frontal attacks. He is mechanically impossible to damage from the front — requiring creative positioning to defeat.",
    aiTip:
      "The Kusarigama Chain Pull yanks Kamekichi's shield aside for two seconds — use that window to land two hits from the front. Alternatively, bait him to charge and sidestep to his unshielded rear.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Turtle+Man+Kamekichi+walkthrough",
    walkthrough: [
      "Accept the bounty and travel to the Stone Quarry.",
      "Frontal attacks bounce off the shield — do not waste Resolve trying.",
      "Option A: use Kusarigama Chain Pull to yank the shield sideways and attack during the two-second gap.",
      "Option B: bait his forward charge and sidestep to attack his exposed rear.",
      "Both options work; Chain Pull is more reliable in the open quarry environment.",
      "Claim the reward from Kojiro after defeating him."
    ]
  },
  {
    id: 1242,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Shiro the Swindler",
    location: "Ishikari Plain — Document Stall",
    length: "short",
    difficulty: "Low",
    reward: "Gold, Bounty Broker standing",
    summary:
      "Shiro sells forged travel permits and identity papers to desperate refugees at exploitative prices. He operates openly from a document stall — but is rarely where his stall is, sending an apprentice to take the blame.",
    aiTip:
      "His apprentice at the stall will send you to the wrong location three times before revealing Shiro's real hiding spot if you press him. Alternatively, use the listening sense near the stall — Shiro's distinct coughing is audible from 50 metres.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Shiro+the+Swindler+walkthrough",
    walkthrough: [
      "Accept the bounty and find the document stall in Ishikari market.",
      "Use listening sense near the stall — follow the coughing sound to the real Shiro.",
      "Confront Shiro in his hiding spot behind the sake warehouse.",
      "He surrenders immediately — escort him to the magistrate or take the bounty directly.",
      "Both resolutions pay the same reward from Kojiro."
    ]
  },
  {
    id: 1243,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Old Lady Yae",
    location: "Ishikari Plain — Roadside Inn Kitchen",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "Do not be fooled by the grandmother persona — Yae runs a sophisticated poison supply ring from her inn kitchen basement, providing toxins to multiple outlaw groups across Ishikari.",
    aiTip:
      "Yae fights surprisingly well using a weighted cooking ladle and paralysing poisons she throws at the start. Block the first throw and close immediately — she has no melee ability once in grapple range.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Old+Lady+Yae+walkthrough",
    walkthrough: [
      "Accept the bounty and enter the Roadside Inn as a customer.",
      "Find the basement entrance behind the kitchen fireplace.",
      "The poison operation is fully operational; four workers scatter on sight.",
      "Yae throws a paralysing poison vial immediately — block it before closing.",
      "Grapple range neutralises her — use pommel strikes to subdue her without killing.",
      "Hand Yae to the Ishikari authorities or take the direct bounty from Kojiro."
    ]
  },
  {
    id: 1244,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Inokichi the Hungry",
    location: "Ishikari Plain — Farm Road",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "An enormous bandit who demands food tribute from every farm he passes through — and then demands more. He travels slowly with a huge pack of stolen food and four exhausted followers.",
    aiTip:
      "Inokichi is slow but his hunger gives him fury when you damage the food packs on his back. Do not attack the packs — target him directly. The followers are too tired to fight effectively; handle Inokichi first.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Inokichi+the+Hungry+walkthrough",
    walkthrough: [
      "Accept the bounty and intercept Inokichi on the Farm Road.",
      "Do not attack the food packs on his back — it triggers a fury mode.",
      "The four followers are sluggish and low-health — knock them down quickly.",
      "Fight Inokichi one-on-one: he is slow, powerful, and predictable.",
      "Bait his two-step advance swing and counter twice each time.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1245,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Ishikari Plain",
    title: "Iron Chuta",
    location: "Ishikari Plain — Blacksmith Ruin",
    length: "short",
    difficulty: "High",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A former blacksmith who covers himself in improvised iron plating and fights with iron-clad fists. Every punch stuns briefly — a chain of punches can kill Atsu before she recovers. One of the toughest solo bounties.",
    aiTip:
      "The Kusarigama Chain Pull pulls Iron Chuta off balance even with all his armour — it is the only reliable interrupt. Pull him whenever he loads up for a punch chain and counter with dual-katana flurries during the stumble.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Iron+Chuta+walkthrough",
    walkthrough: [
      "Accept the bounty and travel to the Blacksmith Ruin.",
      "Iron Chuta opens with a fast punch chain — immediately use Kusarigama Chain Pull to interrupt.",
      "Counter with dual-katana flurries during his stumble (two to three hits maximum).",
      "Repeat the Pull-counter cycle; do not get greedy with hit counts.",
      "At half health he adds an unblockable haymaker — dodge backward when his shoulder drops.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1246,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Nayoro Wilds",
    title: "Wayward Oni Raiders",
    location: "Nayoro Wilds — Ainu Village Perimeter",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A roving band of outlaws who paint themselves to look like oni demons and terrorise Ainu settlements with theatrical violence. The paint is intimidation only — they fight as ordinary bandits.",
    aiTip:
      "The leader wears the most elaborate oni makeup and holds back during the initial charge. Ignore the seven painted raiders and use Ghost Stance to execute the leader immediately — the rest scatter on his death.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Wayward+Oni+Raiders+walkthrough",
    walkthrough: [
      "Accept the bounty and locate the Wayward Oni Raiders near the Nayoro Ainu village.",
      "Seven raiders charge first; the leader hangs back.",
      "Activate Ghost Stance and push through the raiders to execute the leader directly.",
      "The remaining raiders flee on the leader's death — no need to fight them all.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1247,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Nayoro Wilds",
    title: "Bloody Eye Matsuda",
    location: "Nayoro Wilds — Forest Outpost",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A former military scout who defected after a court martial and now leads precision raids into the Nayoro interior using his professional training. He sets up defensive perimeters before Atsu can reach him.",
    aiTip:
      "Matsuda's perimeter has three tripwires and two flare traps — triggering any of them calls four reinforcements. Use listening sense to map the perimeter before entering and disable the flare traps with throwing stones.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Bloody+Eye+Matsuda+walkthrough",
    walkthrough: [
      "Accept the bounty and approach the Forest Outpost cautiously.",
      "Use listening sense to identify all three tripwires and two flare traps.",
      "Disable the two flare traps with thrown stones before entering.",
      "Navigate around the tripwires to reach Matsuda's position.",
      "He fights with precise, military sword technique — deflect-counter timing is standard.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1248,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Nayoro Wilds",
    title: "Whistling Ren",
    location: "Nayoro Wilds — Forest Road",
    length: "short",
    difficulty: "Low",
    reward: "Gold, Bounty Broker standing",
    summary:
      "Always announces his presence with a distinctive whistle before attacking — victims are so unsettled by the signal that they freeze. Ironically, this makes him easy to prepare for if you know the whistle means incoming.",
    aiTip:
      "The whistle is a free heads-up — the moment you hear it, activate your stance of choice before Ren arrives. Ghost Stance on the whistle cue lets you execute him during his approach for a near-instant completion.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Whistling+Ren+walkthrough",
    walkthrough: [
      "Accept the bounty and travel to the Forest Road zone.",
      "Wait in the zone until Ren's distinctive whistle sounds.",
      "Immediately activate Ghost Stance on the whistle cue before he arrives.",
      "Execute Ren as he emerges from the trees.",
      "Claim the reward from Kojiro — possibly the fastest bounty completion in the game."
    ]
  },
  {
    id: 1249,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Oshima Coast",
    title: "Eagle Eye Kondo",
    location: "Oshima Coast — Coastal Cliffs",
    length: "short",
    difficulty: "High",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A sharpshooter perched on the Oshima coastal cliffs who has sunk three ships with a single Tanzutsu shot each. He commands the cliff overlooking the harbour and picks off anyone he deems a threat.",
    aiTip:
      "Kondo fires once every four seconds with near-perfect accuracy. The only safe approach is the underwater tunnel that exits behind his cliff position — swim from the southern beach and ascend from behind.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Eagle+Eye+Kondo+walkthrough",
    walkthrough: [
      "Accept the bounty and swim from the southern Oshima beach.",
      "Find the underwater tunnel entrance 15 metres below the cliff base.",
      "Swim through and ascend the tunnel to exit behind Kondo's position.",
      "Approach from behind for a stealth execution — the easiest ending.",
      "If detected, stay close and use melee — his Tanzutsu is useless at zero range.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1250,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Oshima Coast",
    title: "Iwa the Beautiful",
    location: "Oshima Coast — Harbour Tavern",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A con woman who seduces wealthy targets before her crew strips them of valuables — and occasionally their lives. She is always working a mark in the harbour tavern; confronting her in public draws her entire crew.",
    aiTip:
      "Pull Iwa away from the tavern by slipping her a note (interact prompt at the tavern door) inviting her to meet 'a wealthy merchant' outside. Her crew stays inside while she investigates — fight her alone in the alley.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Iwa+the+Beautiful+walkthrough",
    walkthrough: [
      "Accept the bounty and locate Iwa working a mark in the Harbour Tavern.",
      "Use the interact prompt at the tavern door to slip her a note.",
      "She excuses herself and follows the note to the alley — crew stays inside.",
      "Confront Iwa alone; she draws a tanto and fights precisely.",
      "Her crew emerges after 60 seconds — defeat Iwa quickly.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1251,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Oshima Coast",
    title: "Tadaaki the Terrible",
    location: "Oshima Coast — Pirate Cove",
    length: "short",
    difficulty: "High",
    reward: "Gold, Bounty Broker standing",
    summary:
      "A pirate captain feared across the Oshima sea lanes for unpredictable brutality. He fights with two short swords and a complete disregard for conventional fighting patterns — every move is improvised.",
    aiTip:
      "Tadaaki has no repeating pattern — read each attack individually rather than trying to memorise a combo sequence. Perfect deflects give the biggest windows; focus on deflect quality over attack frequency.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Tadaaki+the+Terrible+walkthrough",
    walkthrough: [
      "Accept the bounty and locate Tadaaki at the Pirate Cove.",
      "Clear his four pirate guards using stealth before the fight if possible.",
      "Engage Tadaaki — do not try to memorise a pattern; read each attack individually.",
      "Focus on perfect deflects to create the largest counter windows.",
      "At one-third health he throws both swords and fights with kicks — dodge backward.",
      "Close after the kick combo and finish with a heavy attack.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1252,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Oshima Coast",
    title: "The Last Brother",
    location: "Oshima Coast — Clifftop Memorial",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Bounty Broker standing",
    summary:
      "The sole survivor of a bandit clan destroyed by a previous bounty hunter, now sworn to avenge his fallen brothers by hunting that hunter and anyone associated with them. He has found Kojiro's connection to Atsu.",
    aiTip:
      "He fights with grief-fuelled aggression — relentless forward pressure with no defensive pauses. Do not back-pedal; he closes the gap faster than you can create it. Stand ground, deflect, and counter in place.",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+The+Last+Brother+walkthrough",
    walkthrough: [
      "Accept the bounty — he is already coming for you.",
      "Travel to the Clifftop Memorial where he waits.",
      "He charges immediately with no opening dialogue.",
      "Stand ground and deflect; backing up only extends his aggressive phase.",
      "After three perfect deflects he staggers — land two heavy hits.",
      "Repeat the deflect-punish cycle four times to end the fight.",
      "Claim the reward from Kojiro."
    ]
  },
  {
    id: 1253,
    type: "side",
    category: "Bounties",
    game: "Ghost of Yotei",
    region: "Oshima Coast",
    title: "Shinpachi the Armor Thief",
    location: "Oshima Coast — Dockside Warehouse",
    length: "short",
    difficulty: "Medium",
    reward: "Gold, Stolen Armour returned, Bounty Broker standing",
    summary:
      "Shinpachi specialises in stealing rare armour from samurai he defeats in surprise ambushes. He is currently wearing a full suit of stolen legendary armour — which explains why this bounty has never been completed.",
    aiTip:
      "The stolen armour means Shinpachi has extremely high defence — standard attacks do minimal damage. Use the odachi's Heaven's Fall technique to break through the armour's protection, or use the Tanzutsu to damage the armour's weak points (the joints glow orange with the listening sense).",
    video: "https://www.youtube.com/results?search_query=Ghost+of+Yotei+Shinpachi+the+Armor+Thief+walkthrough",
    walkthrough: [
      "Accept the bounty and travel to the Dockside Warehouse.",
      "Use listening sense to identify the armour's glowing orange joint weak points.",
      "Target weak points with Tanzutsu shots — each hit reduces his defence rating.",
      "After four weak-point hits, the stolen armour is sufficiently damaged for normal attacks to land.",
      "Finish with the odachi's Heaven's Fall to end the fight decisively.",
      "Recover the stolen armour and return it to its original owner for a bonus reward.",
      "Claim the bounty from Kojiro."
    ]
  }
];
