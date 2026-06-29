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
      "Prioritize mobility spells, prepare healing, and save before major dialogue choices. This quest is best approached after checking companion objectives."
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
      "Bring Shadowheart for maximum narrative impact and explore each trial carefully before entering the final area."
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
      "Protect the Gondians during combat — if too many die, you lose their support. Area-of-effect spells can backfire here."
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
      "Track NPC dialogue carefully. This quest is easier if you keep notes because the game rarely gives direct objective markers."
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
      "Speak to Alexander whenever you meet him and avoid rushing late-game areas before progressing his earlier encounters."
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
      "Don't miss Gowry's shack in Caelid early on. The quest has easy-to-miss steps — check back with NPCs after major boss kills."
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
      "Use this quest to understand tracking mechanics and improve party synergy before harder Grasslands content."
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
      "Complete nearby map objectives first, because several quest steps become faster once fast travel and regional intel are unlocked."
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
      "Focus on your preferred date partner's favorite activities. The chocobo racing and 3D Brawler give the best GP returns."
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
      "Play this when you have time to follow the dialogue. The impact comes from the story, not the reward."
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
      "Scan everything in the apartment and listen to the environmental clues before deciding how much truth to reveal."
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
      "Pay close attention during braindance sequences — missing clues means missing the correct location, which changes the outcome drastically."
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
      "Good to complete early because it supports character growth without requiring heavy combat preparation."
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
      "Treat dialogue as part of the quest system. Metaphor often rewards attention to social context, not only combat strength."
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
      "Bring a healer Archetype and stock up on MP restoratives. The boss hits hard and exploits elemental weaknesses."
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
      "Bring a ranged option and move slowly. The Mind Flayers can paralyze and one-shot you. Free Yuria's key from the guards first."
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
      "Look up the trade list — some of the best rewards come from common items you might otherwise sell."
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
      "You need Pure White World Tendency in World 2 to access the Dragon Bone Smasher. Plan your deaths and kills accordingly."
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
      "Must be done at night — use the wait mechanic if it's daytime. Follow the butterflies carefully; they disappear if you stray too far."
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
      "Master the spell-type matching puzzles before going in. You need Incendio, Glacius, and Levioso at minimum."
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
      "Use Depulso and Accio strategically. The puzzles get progressively harder — the last room requires careful positioning before any block moves."
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
      "Come prepared with your best gear and healing items. Yin Tiger is extremely aggressive with very small dodge windows — patience and perfect timing are essential."
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
      "Fight at night when the wraith appears. Use Moon Dust bombs and Yrden to keep it corporeal. The Specter oil gives a significant damage boost."
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
      "Wait until you have access to both realms fully before starting. Collecting all Gale Sparks completes the Draupnir Spear upgrade."
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
      "Gná is arguably the hardest boss in the game. Equip your best armor and fully upgrade the Draupnir Spear before attempting this fight."
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
      "This takes only a few minutes and rewards a solid Runic Summon. Grab it early when exploring Alfheim for a useful combat ability."
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
      "Prioritize this request quickly after unlocking it. Maxing Kawakami lets you do activities after infiltrating Palaces, one of the best abilities in the game."
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
      "You cannot defeat this target on your first visit. Progress Shinya's Confidant to learn Down Shot, then return to Mementos to land your hits."
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
      "Shadow Sakoda is weak to Bless skills. Equip a Persona with Bless affinity and use ailment-inflicting skills to gain Technical damage bonuses."
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
      "The spirit duel is one of the hardest in the game. Master the timing of perfect parries and watch for unblockable attacks signaled by red glints."
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
      "Follow the painting clues carefully. The Longbow has superior range and armor penetration, making it one of the best ranged weapons in the game."
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
      "Start this questline early as it spans the entire game. The Kunai reward is extremely useful for staggering enemies and breaking their guard."
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
      "Complete The Kulrut main quest first to unlock this. Search the rebel camp thoroughly, including the hidden pit under wooden floor panels."
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
      "This quest has door code puzzles. Pay attention to environmental clues and data logs for the codes rather than brute-forcing combinations."
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
      "This quest has a meaningful choice at the end that affects which characters survive. The Firestorm Warrior Bow reward is one of the strongest early weapons regardless of your decision."
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
      "Bring a priest or paladin for the undead encounters. The final choice affects the district permanently — read the soul descriptions before deciding."
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
      "Talk to Durance at every rest. His dialogue triggers are tied to story progression milestones — miss them and you lock yourself out of later revelations."
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
      "This dungeon hits hard — bring crowd control and area-of-effect damage. The spirits inside resist physical attacks, so casters shine here."
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
      "Don't try to clear it in one go — return between levels to rest and resupply. The Adra Dragon can be talked down if your Resolve and Lore are high enough."
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
      "Your faction choice matters here — completing this for different factions changes later quest availability. Bring a trap specialist for the ruin's interior."
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
      "Find Arkemyr's robes on the second floor and equip them immediately. The imps and constructs won't attack you while disguised, making the whole heist trivial."
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
      "The grimoires are spread across multiple islands — check your map markers after accepting the quest. Each one adds powerful spell options for wizard party members."
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
      "Invest in Perception and Insight before starting — many key clues require skill checks. The shapeshifter's identity isn't obvious; question everyone and cross-reference their stories."
  }
];
