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
      { value: "Haligtree", text: "Miquella's Haligtree" }
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
    type: "side",
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
    video: "https://www.youtube.com/watch?v=IAMn_0_6IvY"
  },
  {
    id: 20,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=Riigb2TiFFo"
  },
  {
    id: 21,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=4QzsNkwfzIg"
  },
  {
    id: 22,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=ftHhNS_PJFw"
  },
  {
    id: 23,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=T8k6izOn6Bs"
  },
  {
    id: 24,
    type: "side",
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
    type: "side",
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
    type: "side",
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
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
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
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
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
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
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
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
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
    type: "side",
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
    type: "side",
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
    type: "side",
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
    video: "https://www.youtube.com/watch?v=th0qgF9VTsA"
  },
  {
    id: 86,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=L-uQipj4SKc"
  },
  {
    id: 87,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=rvLPhn9oh4k"
  },
  {
    id: 88,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=G6qxi3c8_9I"
  },
  {
    id: 89,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=fuvTMtslfCQ"
  },
  {
    id: 90,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=HJWdEOHVZhk"
  },
  {
    id: 91,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=oxCQJy9qGw0"
  },
  {
    id: 92,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=64sie5KvlWU"
  },
  {
    id: 93,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=6PdPpJlonMM"
  },
  {
    id: 94,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=QHVV4jmX0N4"
  },
  {
    id: 95,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=QHVV4jmX0N4"
  },
  {
    id: 96,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=_Hqs6ztq29s"
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
    id: 99,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=c_zQVGlTO-4"
  },
  {
    id: 100,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=0WV7wgGfe-g"
  },
  {
    id: 101,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=SDRtxDz7Duc"
  },
  {
    id: 102,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=Uw12nUwnKWM"
  },
  {
    id: 103,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=MATxmNS9GxY"
  },
  {
    id: 104,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=_j4_NpcVMHw"
  },
  {
    id: 105,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=jMCtZ4xkIJ4"
  },
  {
    id: 106,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=w3wURjVgnI0"
  },
  {
    id: 107,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=UP5p7BpHyjc"
  },
  {
    id: 108,
    type: "side",
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
    type: "main",
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
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
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
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
  },

  // ── Baldur's Gate 3 (additional) ──────────────────────────────────────────
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

  // ── Elden Ring (additional) ───────────────────────────────────────────────
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

  // ── Final Fantasy VII Rebirth (additional) ────────────────────────────────
  {
    id: 125,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=E_Any2rW-RE"
  },
  {
    id: 126,
    type: "side",
    game: "Final Fantasy VII Rebirth",
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

  // ── Cyberpunk 2077 (additional) ───────────────────────────────────────────
  {
    id: 132,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=TarX-C4vhik"
  },
  {
    id: 133,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=xX6auIAS1uU"
  },
  {
    id: 134,
    type: "side",
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
    video: "https://www.youtube.com/playlist?list=PLU9RCp3FVNkSAPtWpgXD3NabQLTHTj-36"
  },
  {
    id: 135,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=FjJaMeQ8wLE"
  },
  {
    id: 136,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=1YNkVrWNP0o"
  },
  {
    id: 137,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=82hrT1j_Fpc"
  },
  {
    id: 138,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=Ea6mRQEyT7g"
  },

  // ── Demon's Souls (additional) ────────────────────────────────────────────
  {
    id: 139,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=8-_55ap2Q5s"
  },
  {
    id: 140,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=XyzirgD-YOY"
  },
  {
    id: 141,
    type: "side",
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
    type: "main",
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
    video: "https://www.youtube.com/watch?v=wFBFbLHL8CQ"
  },
  {
    id: 143,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=GpKMwv2AU1w"
  },
  {
    id: 144,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=k2chOJD9DoI"
  },
  {
    id: 145,
    type: "side",
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
    type: "main",
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
    video: "https://www.youtube.com/watch?v=QJZOywqytyM"
  },
  {
    id: 147,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=0e1tDb6CnXg"
  },
  {
    id: 148,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=9qAEXqMhnGQ"
  },
  {
    id: 149,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=dQEkASZR7CY"
  },
  {
    id: 150,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=fftOxQH9tAE"
  },
  {
    id: 151,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=X_3qK9gvHoY"
  },
  {
    id: 152,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=pK3OUx9tNNE"
  },

  // ── Metaphor: ReFantazio (additional) ─────────────────────────────────────
  {
    id: 153,
    type: "side",
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
    type: "side",
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
    type: "side",
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
    type: "side",
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
    type: "side",
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
    type: "side",
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
    type: "side",
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
    video: "https://www.youtube.com/watch?v=LkmFAuvkxVQ"
  },
  {
    id: 160,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=w7nx2a8ocmg"
  },
  {
    id: 161,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=7BgCbCDpm6c"
  },
  {
    id: 162,
    type: "side",
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
    type: "side",
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
    video: "https://www.youtube.com/watch?v=YnnRcfIMHNA"
  },
  {
    id: 164,
    type: "side",
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
    type: "side",
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
    video: "https://www.youtube.com/watch?v=JmBTiG6pCfk"
  },

  // ── Persona 5 Royal (additional) ──────────────────────────────────────────
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
    id: 169,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=AcnGlLoSd0Y"
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
    id: 171,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=St2qV3aXJIk"
  },
  {
    id: 172,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=e3kNa_G8_yQ"
  },

  // ── Ghost of Tsushima (additional) ────────────────────────────────────────
  {
    id: 173,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=LfHsYzm3Zp4"
  },
  {
    id: 174,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=bWe2G16Hsks"
  },
  {
    id: 175,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=NFIy0-yiTg4"
  },
  {
    id: 176,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=F2duQ_Yt3zk"
  },
  {
    id: 177,
    type: "side",
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
    type: "side",
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
    type: "side",
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
    video: "https://www.youtube.com/playlist?list=PLNVZ0VbA46mqXmXe_XscAEyZUCEHJpemQ"
  },
  {
    id: 180,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=pFEhMNlfCA0"
  },
  {
    id: 181,
    type: "side",
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
    type: "side",
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
    type: "main",
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
    video: "https://www.youtube.com/watch?v=cA_I3lOQmvA"
  },
  {
    id: 184,
    type: "side",
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
    video: "https://www.youtube.com/watch?v=7JVGDFq0bw8"
  },
  {
    id: 185,
    type: "main",
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
    video: "https://www.youtube.com/watch?v=goI8MktOdhM"
  },

  // ── Pillars of Eternity (additional) ──────────────────────────────────────
  {
    id: 186,
    type: "side",
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
    type: "side",
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
    type: "side",
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
    type: "side",
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
    type: "side",
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
    type: "side",
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
    type: "main",
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
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
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
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
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
    video: "https://www.youtube.com/watch?v=WLdvPE8kjSo"
  },
  {
    id: 199,
    type: "side",
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
  }
];
