(function () {
  var searchInput = document.querySelector("#searchInput");
  var gameFilter = document.querySelector("#gameFilter");
  var lengthFilter = document.querySelector("#lengthFilter");
  var typeFilter = document.querySelector("#typeFilter");
  var difficultyFilter = document.querySelector("#difficultyFilter");
  var videoFilter = document.querySelector("#videoFilter");
  var videoFilterGroup = document.querySelector("#videoFilterGroup");
  var subFilterContainer = document.querySelector("#subFilterContainer");
  var resetButton = document.querySelector("#resetButton");
  var questGrid = document.querySelector("#questGrid");
  var resultCount = document.querySelector("#resultCount");
  var filterPanel = document.querySelector("#filterPanel");
  var filterToggle = document.querySelector("#mobileFilterToggle");
  var questDetail = document.querySelector("#questDetail");
  var mainLayout = document.querySelector("main.layout");
  var heroSection = document.querySelector("header.hero");

  var activeSubFilter = null;
  var uniqueGames = [];
  var seen = {};
  quests.forEach(function (q) {
    if (!seen[q.game]) {
      seen[q.game] = true;
      uniqueGames.push(q.game);
    }
  });
  uniqueGames.sort();

  function populateGameFilter() {
    uniqueGames.forEach(function (game) {
      var option = document.createElement("option");
      option.value = game;
      option.textContent = game;
      gameFilter.appendChild(option);
    });
  }

  function normalize(value) {
    return value.toLowerCase().trim();
  }

  function questMatchesSearch(quest, searchTerm) {
    var searchableText = [
      quest.game,
      quest.title,
      quest.location,
      quest.length,
      quest.difficulty,
      quest.reward,
      quest.summary,
      quest.aiTip
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(searchTerm);
  }

  function buildSubFilter(config) {
    subFilterContainer.innerHTML = "";
    if (!config) {
      activeSubFilter = null;
      return;
    }
    var wrapper = document.createElement("div");
    wrapper.className = "sub-filter";

    var label = document.createElement("label");
    label.setAttribute("for", "gameSubFilter");
    label.textContent = config.label;
    wrapper.appendChild(label);

    var select = document.createElement("select");
    select.id = "gameSubFilter";

    var allOpt = document.createElement("option");
    allOpt.value = "all";
    allOpt.textContent = "All " + config.label.toLowerCase() + "s";
    select.appendChild(allOpt);

    config.options.forEach(function (opt) {
      var o = document.createElement("option");
      o.value = opt.value;
      o.textContent = opt.text;
      select.appendChild(o);
    });

    wrapper.appendChild(select);
    subFilterContainer.appendChild(wrapper);

    select.addEventListener("change", renderQuests);
    activeSubFilter = { field: config.field, select: select };
  }

  function updateSubFilters() {
    var selectedGame = gameFilter.value;
    var config = subFilterConfig[selectedGame];
    var hasVideo = quests.some(function (q) {
      return q.game === selectedGame && q.video;
    });

    buildSubFilter(config || null);
    videoFilterGroup.style.display = hasVideo ? "" : "none";
    if (!hasVideo) {
      videoFilter.value = "all";
    }
  }

  function getFilteredQuests() {
    var searchTerm = normalize(searchInput.value);
    var selectedGame = gameFilter.value;
    var selectedLength = lengthFilter.value;
    var selectedType = typeFilter.value;
    var selectedDifficulty = difficultyFilter.value;
    var selectedVideo = videoFilter.value;

    var subValue = "all";
    var subField = null;
    if (activeSubFilter) {
      subValue = activeSubFilter.select.value;
      subField = activeSubFilter.field;
    }

    return quests.filter(function (quest) {
      var matchesSearch = !searchTerm || questMatchesSearch(quest, searchTerm);
      var matchesGame = selectedGame === "all" || quest.game === selectedGame;
      var matchesLength = selectedLength === "all" || quest.length === selectedLength;
      var matchesType = selectedType === "all" || quest.type === selectedType;
      var matchesDifficulty = selectedDifficulty === "all" || quest.difficulty === selectedDifficulty;
      var matchesVideo = selectedVideo === "all" || (selectedVideo === "video" && quest.video);
      var matchesSub = subValue === "all" || String(quest[subField]) === subValue;

      return matchesSearch && matchesGame && matchesType && matchesLength && matchesDifficulty && matchesVideo && matchesSub;
    });
  }

  function createQuestCard(quest) {
    var article = document.createElement("article");
    article.className = "quest-card";

    var img = gameImages[quest.game];
    var bannerStyle = "background: " + img.gradient + ";";

    var regionHtml = quest.region
      ? '<p class="meta"><strong>Region:</strong> ' + quest.region + "</p>"
      : "";
    var chapterHtml = quest.chapter
      ? '<p class="meta"><strong>Chapter:</strong> ' + quest.chapter + "</p>"
      : "";
    var videoHtml = quest.video
      ? '<a class="video-link" href="' +
        quest.video +
        '" target="_blank" rel="noopener noreferrer">&#9654; Watch Walkthrough</a>' +
        '<span class="video-disclaimer">Video by its respective creator — not affiliated with RPG Quest Guide</span>'
      : "";

    var diffClass = quest.difficulty.toLowerCase();

    article.classList.add("clickable");
    article.setAttribute("tabindex", "0");
    article.setAttribute("role", "link");
    article.setAttribute("aria-label", "View details for " + quest.title);
    article.addEventListener("click", function (e) {
      if (e.target.closest("a")) return;
      window.location.hash = "quest-" + quest.id;
    });
    article.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        window.location.hash = "quest-" + quest.id;
      }
    });

    article.innerHTML =
      '<div class="card-banner" style="' +
      bannerStyle +
      '">' +
      '<img src="' +
      img.cover +
      '" alt="' +
      quest.game +
      '" class="card-banner-img" />' +
      "</div>" +
      '<div class="card-body">' +
      '<div class="card-topline">' +
      '<span class="game-name">' +
      quest.game +
      "</span>" +
      '<span class="quest-type-badge ' + quest.type + '">' + (quest.type === "main" ? "Main Quest" : "Side Quest") + "</span>" +
      '<span class="pill ' +
      quest.length +
      '">' +
      quest.length +
      "</span>" +
      "</div>" +
      "<h3>" +
      quest.title +
      ' <span class="difficulty-badge ' + diffClass + '">' + quest.difficulty + "</span>" +
      "</h3>" +
      chapterHtml +
      regionHtml +
      '<p class="meta"><strong>Location:</strong> ' +
      quest.location +
      "</p>" +
      '<p class="summary-text">' +
      quest.summary +
      "</p>" +
      '<div class="tip-box">' +
      "<strong>Tip</strong>" +
      "<p>" +
      quest.aiTip +
      "</p>" +
      "</div>" +
      '<p class="reward"><strong>Reward:</strong> ' +
      quest.reward +
      "</p>" +
      videoHtml +
      "</div>";

    return article;
  }

  function renderQuests() {
    var filteredQuests = getFilteredQuests();
    questGrid.innerHTML = "";
    resultCount.textContent =
      filteredQuests.length + " quest" + (filteredQuests.length === 1 ? "" : "s");

    if (filteredQuests.length === 0) {
      questGrid.innerHTML =
        '<div class="empty-state">' +
        "<h3>No quests found</h3>" +
        "<p>Try changing the game, length, or search term.</p>" +
        "</div>";
      return;
    }

    filteredQuests.forEach(function (quest, index) {
      var card = createQuestCard(quest);
      card.style.animationDelay = Math.min(index * 0.06, 0.6) + "s";
      questGrid.appendChild(card);
    });
  }

  function resetFilters() {
    searchInput.value = "";
    gameFilter.value = "all";
    lengthFilter.value = "all";
    typeFilter.value = "all";
    difficultyFilter.value = "all";
    videoFilter.value = "all";
    updateSubFilters();
    renderQuests();
  }

  function updatePageTitle() {
    var selectedGame = gameFilter.value;
    if (selectedGame === "all") {
      document.title = "RPG Quest Guide — Side Quests & Walkthroughs";
    } else {
      document.title = selectedGame + " Side Quests & Walkthroughs — RPG Quest Guide";
    }
  }

  function onGameChange() {
    updateSubFilters();
    renderQuests();
    updatePageTitle();
  }

  function toggleFilters() {
    filterPanel.classList.toggle("open");
  }

  function findQuestById(id) {
    for (var i = 0; i < quests.length; i++) {
      if (quests[i].id === id) return quests[i];
    }
    return null;
  }

  function renderQuestDetail(quest) {
    var img = gameImages[quest.game];
    var diffClass = quest.difficulty.toLowerCase();

    var regionHtml = quest.region
      ? '<p class="meta"><strong>Region:</strong> ' + quest.region + "</p>"
      : "";
    var chapterHtml = quest.chapter
      ? '<p class="meta"><strong>Chapter:</strong> ' + quest.chapter + "</p>"
      : "";
    var videoSidebarHtml = quest.video
      ? '<div class="sidebar-card">' +
        '<h3 class="sidebar-title">Watch Walkthrough</h3>' +
        '<a class="video-link video-link-wide" href="' +
        quest.video +
        '" target="_blank" rel="noopener noreferrer">&#9654; Watch on YouTube</a>' +
        '<span class="video-disclaimer">Video by its respective creator — not affiliated with RPG Quest Guide</span>' +
        "</div>"
      : "";

    var statsHtml =
      '<div class="detail-stats">' +
      '<div class="stat"><span class="stat-label">Quest Type</span>' +
      '<span class="quest-type-badge ' + quest.type + '">' + (quest.type === "main" ? "Main Quest" : "Side Quest") + "</span></div>" +
      '<div class="stat"><span class="stat-label">Difficulty</span>' +
      '<span class="difficulty-badge ' + diffClass + '">' + quest.difficulty + "</span></div>" +
      '<div class="stat"><span class="stat-label">Duration</span>' +
      '<span class="pill ' + quest.length + '">' + quest.length + "</span></div>" +
      '<div class="stat"><span class="stat-label">Location</span>' +
      '<span class="stat-value">' + quest.location + "</span></div>" +
      "</div>";

    questDetail.innerHTML =
      '<button type="button" class="btn-back" id="detailBack">&larr; Back to all quests</button>' +
      '<article class="detail-card">' +
      '<div class="detail-banner">' +
      '<img src="' + img.cover + '" alt="" class="detail-banner-bg" aria-hidden="true" />' +
      '<img src="' + img.cover + '" alt="' + quest.game + '" class="detail-banner-img" />' +
      "</div>" +
      '<div class="detail-columns">' +
      '<div class="detail-body">' +
      '<p class="game-name">' + quest.game + "</p>" +
      "<h1>" + quest.title + "</h1>" +
      statsHtml +
      chapterHtml +
      regionHtml +
      '<h2 class="detail-heading">Quest Summary</h2>' +
      '<p class="summary-text">' + quest.summary + "</p>" +
      '<div class="tip-box"><strong>Tip</strong><p>' + quest.aiTip + "</p></div>" +
      '<p class="reward"><strong>Reward:</strong> ' + quest.reward + "</p>" +
      "</div>" +
      '<aside class="detail-sidebar">' +
      videoSidebarHtml +
      '<div class="sidebar-card">' +
      '<h3 class="sidebar-title">About the Game</h3>' +
      '<p class="sidebar-text">This quest is part of <strong>' + quest.game + "</strong>. " +
      "Buy links and related quests are coming soon.</p>" +
      "</div>" +
      "</aside>" +
      "</div>" +
      "</article>";

    document.querySelector("#detailBack").addEventListener("click", function () {
      window.location.hash = "";
    });
  }

  function handleRoute() {
    var match = window.location.hash.match(/^#quest-(\d+)$/);
    var quest = match ? findQuestById(parseInt(match[1], 10)) : null;

    if (quest) {
      renderQuestDetail(quest);
      questDetail.style.display = "block";
      mainLayout.style.display = "none";
      heroSection.style.display = "none";
      document.title = quest.title + " — " + quest.game + " | RPG Quest Guide";
      window.scrollTo(0, 0);
    } else {
      questDetail.style.display = "none";
      questDetail.innerHTML = "";
      mainLayout.style.display = "";
      heroSection.style.display = "";
      updatePageTitle();
    }
  }

  populateGameFilter();
  renderQuests();
  handleRoute();

  window.addEventListener("hashchange", handleRoute);

  searchInput.addEventListener("input", renderQuests);
  gameFilter.addEventListener("change", onGameChange);
  lengthFilter.addEventListener("change", renderQuests);
  typeFilter.addEventListener("change", renderQuests);
  difficultyFilter.addEventListener("change", renderQuests);
  videoFilter.addEventListener("change", renderQuests);
  resetButton.addEventListener("click", resetFilters);
  filterToggle.addEventListener("click", toggleFilters);
})();
