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
    video: "https://www.youtube.com/watch?v=VmxPVwEkl48"
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
    video: "https://www.youtube.com/watch?v=VmxPVwEkl48"
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
    video: "https://www.youtube.com/watch?v=VmxPVwEkl48"
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
    video: "https://www.youtube.com/watch?v=rgCgsiCrFX8"
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
    video: "https://www.youtube.com/watch?v=rgCgsiCrFX8"
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
    video: "https://www.youtube.com/watch?v=rgCgsiCrFX8"
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
    video: "https://www.youtube.com/watch?v=ZnCXVzDb9ps"
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
    video: "https://www.youtube.com/watch?v=ZnCXVzDb9ps"
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
    video: "https://www.youtube.com/watch?v=ZnCXVzDb9ps"
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
    video: "https://www.youtube.com/watch?v=eaAUYWHQQ9Y"
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
    video: "https://www.youtube.com/watch?v=eaAUYWHQQ9Y"
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
    video: "https://www.youtube.com/watch?v=eaAUYWHQQ9Y"
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
    video: "https://www.youtube.com/watch?v=VmxPVwEkl48"
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
    video: "https://www.youtube.com/watch?v=VmxPVwEkl48"
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
    video: "https://www.youtube.com/watch?v=VmxPVwEkl48"
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
    video: "https://www.youtube.com/watch?v=VmxPVwEkl48"
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
    video: "https://www.youtube.com/watch?v=VmxPVwEkl48"
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
    video: "https://www.youtube.com/watch?v=rgCgsiCrFX8"
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
    video: "https://www.youtube.com/watch?v=rgCgsiCrFX8"
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
    video: "https://www.youtube.com/watch?v=rgCgsiCrFX8"
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
    video: "https://www.youtube.com/watch?v=rgCgsiCrFX8"
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
    video: "https://www.youtube.com/watch?v=ZnCXVzDb9ps"
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
    video: "https://www.youtube.com/watch?v=ZnCXVzDb9ps"
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
    video: "https://www.youtube.com/watch?v=ZnCXVzDb9ps"
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
    video: "https://www.youtube.com/watch?v=ZnCXVzDb9ps"
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
    video: "https://www.youtube.com/watch?v=eaAUYWHQQ9Y"
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
    video: "https://www.youtube.com/watch?v=eaAUYWHQQ9Y"
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
    video: "https://www.youtube.com/watch?v=eaAUYWHQQ9Y"
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
    video: "https://www.youtube.com/watch?v=eaAUYWHQQ9Y"
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
  }
];
