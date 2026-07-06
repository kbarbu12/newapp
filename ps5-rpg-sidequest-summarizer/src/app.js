(function () {
  "use strict";

  // ── Per-game accent colors (from the QuestAtlas design) ──────────────────
  var ACCENTS = {
    "Baldur's Gate 3": "#c084fc",
    "Elden Ring": "#fbbf24",
    "Final Fantasy VII Rebirth": "#60a5fa",
    "Cyberpunk 2077: Ultimate Edition": "#fcd34d",
    "The Witcher 3: Wild Hunt": "#4ade80",
    "Metaphor: ReFantazio": "#f0abfc",
    "Demon's Souls": "#9ca3af",
    "Hogwarts Legacy": "#f59e0b",
    "Black Myth: Wukong": "#f97316",
    "God of War Ragnarök": "#8fb8de",
    "Persona 5 Royal": "#ff4444",
    "Ghost of Tsushima": "#e8d5a3",
    "Horizon Forbidden West": "#e8a84c",
    "Pillars of Eternity": "#d4a836",
    "Pillars of Eternity II: Deadfire": "#38bdf8",
  };
  function accent(game) { return ACCENTS[game] || "#c5933a"; }

  // ── Inline icons ─────────────────────────────────────────────────────────
  var ICON = {
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    flame: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1 4-2 5-2 8a2 2 0 004 0c0-1 2 2 2 4a6 6 0 11-9-5c2-2 3-5 5-7z"/></svg>',
    zap: '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9.3 9 9"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h9a3 3 0 013 3v13a2.5 2.5 0 00-2.5-2.5H4z"/><path d="M20 4h-3a3 3 0 00-3 3v13a2.5 2.5 0 012.5-2.5H20z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.5-.4-5.1a2.6 2.6 0 00-1.8-1.8C19.1 4.7 12 4.7 12 4.7s-7.1 0-8.8.4a2.6 2.6 0 00-1.8 1.8C1 8.5 1 12 1 12s0 3.5.4 5.1a2.6 2.6 0 001.8 1.8c1.7.4 8.8.4 8.8.4s7.1 0 8.8-.4a2.6 2.6 0 001.8-1.8C23 15.5 23 12 23 12zM9.7 15.3V8.7l5.7 3.3z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',
    swords: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" y1="19" x2="19" y2="13"/><line x1="16" y1="16" x2="20" y2="20"/><line x1="19" y1="21" x2="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" y1="14" x2="9" y2="18"/><line x1="7" y1="17" x2="4" y2="20"/><line x1="3" y1="19" x2="5" y2="21"/></svg>',
  };

  // ── DOM refs ─────────────────────────────────────────────────────────────
  var searchInput = document.querySelector("#searchInput");
  var questGrid = document.querySelector("#questGrid");
  var resultCount = document.querySelector("#resultCount");
  var headerCount = document.querySelector("#headerCount");
  var heroTitle = document.querySelector("#heroTitle");
  var heroSub = document.querySelector("#heroSub");
  var heroStats = document.querySelector("#heroStats");
  var gameGallery = document.querySelector("#gameGallery");
  var galleryShowAll = document.querySelector("#galleryShowAll");
  var resetButton = document.querySelector("#resetButton");
  var subFilterRow = document.querySelector("#subFilterRow");
  var subDivider = document.querySelector("#subDivider");
  var videoFilterRow = document.querySelector("#videoFilterRow");
  var videoDivider = document.querySelector("#videoDivider");
  var questDetail = document.querySelector("#questDetail");

  var browseSections = [
    document.querySelector(".hero"),
    document.querySelector(".gallery-section"),
    document.querySelector(".filter-bar"),
    document.querySelector("main.content"),
    document.querySelector("#feedback"),
  ];

  // ── State ────────────────────────────────────────────────────────────────
  var state = {
    game: "all",
    type: "all",
    difficulty: "all",
    length: "all",
    video: "all",
    subs: {},
  };
  // Active per-game sub-filter configs (a game may expose more than one axis,
  // e.g. Hogwarts Legacy shows both Region and Category).
  var subConfigs = [];

  // ── Game list (ordered as in gameImages) ─────────────────────────────────
  var games = Object.keys(gameImages);
  var countByGame = {};
  quests.forEach(function (q) { countByGame[q.game] = (countByGame[q.game] || 0) + 1; });

  // A "real" walkthrough video is a specific YouTube video/playlist link.
  // Placeholder search links (…/results?search_query=…) don't count.
  function hasRealVideo(q) {
    return !!q.video && q.video.indexOf("/results") === -1;
  }

  // ── Hero ─────────────────────────────────────────────────────────────────
  function renderHeroStats() {
    var withVideo = quests.filter(hasRealVideo).length;
    var high = quests.filter(function (q) { return q.difficulty === "High"; }).length;
    var tiles = [
      { label: "Quests", value: quests.length },
      { label: "Games", value: games.length },
      { label: "With Video", value: withVideo },
      { label: "High Difficulty", value: high },
    ];
    heroStats.innerHTML = tiles.map(function (t) {
      return '<div class="stat-tile"><span class="stat-value">' + t.value +
        '</span><span class="stat-label">' + t.label + "</span></div>";
    }).join("");
    headerCount.textContent = quests.length + " quests · " + games.length + " games";
  }

  function updateHero() {
    var heroImg = document.querySelector(".hero-bg");
    if (heroImg) {
      if (state.game !== "all" && gameImages[state.game]) {
        heroImg.style.backgroundImage = 'url("' + gameImages[state.game].cover + '")';
        heroImg.style.opacity = "0.25";
      } else {
        heroImg.style.backgroundImage = "";
        heroImg.style.opacity = "0.9";
      }
    }
    if (state.game === "all") {
      heroTitle.textContent = "Discover the Best RPG Side Quests";
      heroSub.textContent = "Browse walkthroughs and guides across " + games.length +
        " games — filtered to exactly what you need.";
      document.title = "RPG Quest Guide — Side Quests & Walkthroughs";
    } else {
      heroTitle.innerHTML =
        '<span class="game-accent" style="color:' + accent(state.game) + '">' + state.game + "</span>" +
        '<span class="game-sub">Quest Library</span>';
      heroSub.textContent = countByGame[state.game] + " quests documented for " + state.game + ".";
      document.title = state.game + " Side Quests & Walkthroughs — RPG Quest Guide";
    }
  }

  // ── Game gallery ─────────────────────────────────────────────────────────
  function buildGallery() {
    gameGallery.innerHTML = "";
    games.forEach(function (game) {
      var meta = gameImages[game];
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "game-poster" + (state.game === game ? " selected" : "");
      btn.style.setProperty("--poster-accent", accent(game));
      btn.setAttribute("aria-label", game);
      btn.innerHTML =
        '<img src="' + meta.cover + '" alt="' + game + '" loading="lazy" />' +
        '<span class="poster-shade"></span>' +
        '<span class="poster-dot"></span>' +
        '<span class="poster-meta">' +
        '<span class="poster-abbr">' + meta.abbr + "</span>" +
        '<span class="poster-count">' + (countByGame[game] || 0) + " quests</span>" +
        "</span>";
      btn.addEventListener("click", function () { selectGame(game); });
      gameGallery.appendChild(btn);
    });
  }

  function selectGame(game) {
    state.game = state.game === game ? "all" : game;
    state.subs = {};
    galleryShowAll.style.display = state.game === "all" ? "none" : "";
    buildGallery();
    updateSubFilter();
    updateHero();
    renderQuests();
  }

  // ── Sub-filter(s) (per-game act/region/chapter/category) as pills ─────────
  // A game's config may be a single axis or an array of axes; each renders as
  // its own labelled pill row and filters independently (AND-combined).
  function updateSubFilter() {
    var raw = state.game !== "all" ? subFilterConfig[state.game] : null;
    var configs = raw ? (Array.isArray(raw) ? raw : [raw]) : null;
    if (!configs || !configs.length) {
      subConfigs = [];
      state.subs = {};
      subFilterRow.style.display = "none";
      subFilterRow.innerHTML = "";
      subDivider.style.display = "none";
      return;
    }
    subConfigs = configs;
    state.subs = {};
    var html = "";
    configs.forEach(function (config) {
      state.subs[config.field] = "all";
      var pills = '<button type="button" class="filter-pill active" data-value="all">All</button>';
      config.options.forEach(function (opt) {
        pills += '<button type="button" class="filter-pill" data-value="' + opt.value + '">' +
          opt.text + "</button>";
      });
      html +=
        '<div class="filter-row sub-filter-block" data-sub-field="' + config.field + '">' +
        '<span class="filter-label">' + config.label + "</span>" +
        '<div class="pill-group">' + pills + "</div></div>";
    });
    subFilterRow.innerHTML = html;
    subFilterRow.style.display = "";
    subDivider.style.display = "";

    subFilterRow.querySelectorAll(".sub-filter-block").forEach(function (block) {
      var field = block.getAttribute("data-sub-field");
      block.querySelectorAll(".filter-pill").forEach(function (pill) {
        pill.addEventListener("click", function () {
          setActivePill(block, pill);
          state.subs[field] = pill.getAttribute("data-value");
          renderQuests();
        });
      });
    });
  }

  function setActivePill(row, pill) {
    row.querySelectorAll(".filter-pill").forEach(function (p) { p.classList.remove("active"); });
    pill.classList.add("active");
  }

  // ── Filtering ────────────────────────────────────────────────────────────
  function questMatchesSearch(quest, term) {
    return [quest.game, quest.title, quest.location, quest.length, quest.difficulty, quest.reward, quest.summary, quest.aiTip]
      .join(" ").toLowerCase().includes(term);
  }

  function getFiltered() {
    var term = searchInput.value.toLowerCase().trim();
    return quests.filter(function (q) {
      if (state.game !== "all" && q.game !== state.game) return false;
      if (state.type !== "all" && q.type !== state.type) return false;
      if (state.difficulty !== "all" && q.difficulty !== state.difficulty) return false;
      if (state.length !== "all" && q.length !== state.length) return false;
      if (state.video === "video" && !hasRealVideo(q)) return false;
      if (state.video === "none" && hasRealVideo(q)) return false;
      for (var s = 0; s < subConfigs.length; s++) {
        var field = subConfigs[s].field;
        var val = state.subs[field];
        if (val && val !== "all" && String(q[field]) !== val) return false;
      }
      if (term && !questMatchesSearch(q, term)) return false;
      return true;
    });
  }

  // ── Quest card ───────────────────────────────────────────────────────────
  function diffTag(level) {
    var key = level.toLowerCase();
    var ic = { low: ICON.shield, medium: ICON.flame, high: ICON.zap }[key];
    return '<span class="tag tag-diff-' + key + '">' + ic + level + "</span>";
  }

  function lenDots(length) {
    var n = { short: 1, medium: 2, long: 3 }[length] || 1;
    var dots = "";
    for (var i = 0; i < 3; i++) dots += '<span class="len-dot' + (i < n ? " on" : "") + '"></span>';
    return '<span class="len-wrap"><span class="len-clock">' + ICON.clock +
      '</span><span class="len-dots">' + dots + '</span><span class="len-label">' + length + "</span></span>";
  }

  function createCard(quest) {
    var meta = gameImages[quest.game];
    var col = accent(quest.game);
    var article = document.createElement("article");
    article.className = "quest-card";
    article.style.setProperty("--card-accent", col);
    article.setAttribute("tabindex", "0");
    article.setAttribute("role", "link");
    article.setAttribute("aria-label", "View details for " + quest.title);

    var typeTag = quest.type === "main"
      ? '<span class="tag tag-main">' + ICON.star + "Main</span>"
      : '<span class="tag tag-side">' + ICON.book + "Side</span>";
    var videoTag = hasRealVideo(quest)
      ? '<span class="card-video">' + ICON.youtube + "Video</span>" : "";

    article.innerHTML =
      '<div class="card-cover">' +
      '<img src="' + meta.cover + '" alt="' + quest.game + '" loading="lazy" />' +
      '<span class="cover-fade"></span><span class="card-edge"></span>' +
      "</div>" +
      '<div class="card-content">' +
      '<div class="card-top">' +
      '<span class="card-game" style="color:' + col + '">' + quest.game + "</span>" +
      videoTag +
      "</div>" +
      '<h3 class="card-title">' + quest.title + "</h3>" +
      '<p class="card-summary">' + quest.summary + "</p>" +
      '<div class="card-tags">' + typeTag + diffTag(quest.difficulty) + lenDots(quest.length) + "</div>" +
      "</div>";

    function open() { window.location.hash = "quest-" + quest.id; }
    article.addEventListener("click", function (e) { if (!e.target.closest("a")) open(); });
    article.addEventListener("keydown", function (e) { if (e.key === "Enter") open(); });
    return article;
  }

  // Count active non-"all" filters (games, static rows, and per-game sub-axes).
  function getActiveFilterCount() {
    return [state.type, state.difficulty, state.length, state.video]
      .filter(function (v) { return v !== "all"; }).length
      + (state.game !== "all" ? 1 : 0)
      + Object.keys(state.subs).filter(function (k) { return state.subs[k] !== "all"; }).length;
  }

  function updateResetButton() {
    var n = getActiveFilterCount();
    resetButton.innerHTML = n > 0
      ? '↺ Reset <span class="filter-badge">' + n + "</span>"
      : "↺ Reset";
  }

  function renderQuests() {
    updateResetButton();
    var list = getFiltered();
    resultCount.textContent = list.length + " result" + (list.length === 1 ? "" : "s");
    questGrid.innerHTML = "";
    if (list.length === 0) {
      questGrid.innerHTML =
        '<div class="empty-state"><h3>No quests match your filters</h3>' +
        "<p>Try changing the game, filters, or search term.</p>" +
        '<button type="button" id="emptyReset">Reset filters</button></div>';
      var er = document.querySelector("#emptyReset");
      if (er) er.addEventListener("click", resetFilters);
      return;
    }
    var frag = document.createDocumentFragment();
    list.forEach(function (q, i) {
      var card = createCard(q);
      card.style.animationDelay = Math.min(i * 0.035, 0.35) + "s";
      frag.appendChild(card);
    });
    questGrid.appendChild(frag);
  }

  // ── Pill filter wiring (static rows) ─────────────────────────────────────
  function wirePillRow(name) {
    var row = document.querySelector('.filter-row[data-filter="' + name + '"]');
    if (!row) return;
    row.querySelectorAll(".filter-pill").forEach(function (pill) {
      pill.addEventListener("click", function () {
        setActivePill(row, pill);
        state[name] = pill.getAttribute("data-value");
        renderQuests();
      });
    });
  }

  function resetFilters() {
    state = { game: "all", type: "all", difficulty: "all", length: "all", video: "all", subs: {} };
    subConfigs = [];
    searchInput.value = "";
    document.querySelectorAll(".filter-bar .filter-row").forEach(function (row) {
      var pills = row.querySelectorAll(".filter-pill");
      pills.forEach(function (p, i) { p.classList.toggle("active", i === 0); });
    });
    galleryShowAll.style.display = "none";
    buildGallery();
    updateSubFilter();
    updateHero();
    renderQuests();
  }

  // ── Quest detail page ────────────────────────────────────────────────────
  function findQuest(id) {
    for (var i = 0; i < quests.length; i++) if (quests[i].id === id) return quests[i];
    return null;
  }

  function renderDetail(quest) {
    var meta = gameImages[quest.game];
    var col = accent(quest.game);
    var d = quest.difficulty.toLowerCase();

    var regionHtml = quest.region ? '<p class="meta"><strong>Region:</strong> ' + quest.region + "</p>" : "";
    var chapterHtml = quest.chapter ? '<p class="meta"><strong>Chapter:</strong> ' + quest.chapter + "</p>" : "";
    var videoCard = hasRealVideo(quest)
      ? '<div class="sidebar-card"><h3 class="sidebar-title">Watch Walkthrough</h3>' +
        '<a class="video-link video-link-wide" href="' + quest.video +
        '" target="_blank" rel="noopener noreferrer">' + ICON.youtube + " Watch on YouTube</a>" +
        '<span class="video-disclaimer">Video by its respective creator — not affiliated with RPG Quest Guide</span></div>'
      : '<div class="sidebar-card"><h3 class="sidebar-title">Watch Walkthrough</h3>' +
        '<p class="video-unavailable">Video walkthrough not available</p>' +
        (quest.walkthrough ? '<span class="video-disclaimer">A written step-by-step guide is provided below.</span>' : "") +
        "</div>";

    var walkthroughHtml = (!hasRealVideo(quest) && quest.walkthrough)
      ? '<h2 class="detail-heading">Step-by-Step Walkthrough</h2>' +
        '<ol class="walkthrough-steps">' +
        quest.walkthrough.map(function (s) { return "<li>" + s + "</li>"; }).join("") +
        "</ol>"
      : "";

    questDetail.innerHTML =
      '<button type="button" class="btn-back" id="detailBack">← Back to all quests</button>' +
      '<article class="detail-card">' +
      '<div class="detail-banner">' +
      '<img src="' + meta.cover + '" alt="" class="detail-banner-bg" aria-hidden="true" />' +
      '<img src="' + meta.cover + '" alt="' + quest.game + '" class="detail-banner-img" />' +
      "</div>" +
      '<div class="detail-columns">' +
      '<div class="detail-body">' +
      '<p class="game-name" style="color:' + col + '">' + quest.game + "</p>" +
      "<h1>" + quest.title + "</h1>" +
      '<div class="detail-stats">' +
      '<div class="stat"><span class="stat-label-sm">Quest Type</span><span class="stat-value-sm">' +
      (quest.type === "main" ? "Main Quest" : "Side Quest") + "</span></div>" +
      '<div class="stat"><span class="stat-label-sm">Difficulty</span><span class="difficulty-badge ' + d + '">' + quest.difficulty + "</span></div>" +
      '<div class="stat"><span class="stat-label-sm">Duration</span><span class="stat-value-sm" style="text-transform:capitalize">' + quest.length + "</span></div>" +
      '<div class="stat"><span class="stat-label-sm">Location</span><span class="stat-value-sm">' + quest.location + "</span></div>" +
      "</div>" +
      chapterHtml + regionHtml +
      '<h2 class="detail-heading">Quest Summary</h2>' +
      '<p class="summary-text">' + quest.summary + "</p>" +
      '<div class="tip-box"><strong>Tip</strong><p>' + quest.aiTip + "</p></div>" +
      '<p class="reward"><strong>Reward:</strong> ' + quest.reward + "</p>" +
      walkthroughHtml +
      "</div>" +
      '<aside class="detail-sidebar">' + videoCard +
      '<div class="sidebar-card"><h3 class="sidebar-title">About the Game</h3>' +
      '<p class="sidebar-text">This quest is part of <strong>' + quest.game +
      "</strong>. Buy links and related quests are coming soon.</p></div>" +
      "</aside></div></article>";

    document.querySelector("#detailBack").addEventListener("click", function () { window.location.hash = ""; });
  }

  function showBrowse(show) {
    browseSections.forEach(function (el) { if (el) el.style.display = show ? "" : "none"; });
  }

  function handleRoute() {
    var m = window.location.hash.match(/^#quest-(\d+)$/);
    var quest = m ? findQuest(parseInt(m[1], 10)) : null;
    if (quest) {
      renderDetail(quest);
      questDetail.style.display = "block";
      showBrowse(false);
      document.title = quest.title + " — " + quest.game + " | RPG Quest Guide";
      window.scrollTo(0, 0);
    } else {
      questDetail.style.display = "none";
      questDetail.innerHTML = "";
      showBrowse(true);
      updateHero();
    }
  }

  // ── Init ─────────────────────────────────────────────────────────────────
  renderHeroStats();
  buildGallery();
  updateHero();
  ["type", "difficulty", "length", "video"].forEach(wirePillRow);
  videoFilterRow.style.display = "";
  videoDivider.style.display = "";
  renderQuests();
  handleRoute();

  window.addEventListener("hashchange", handleRoute);
  searchInput.addEventListener("input", renderQuests);
  resetButton.addEventListener("click", resetFilters);
  galleryShowAll.addEventListener("click", function () { selectGame(state.game); });
})();
