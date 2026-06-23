(function () {
  var searchInput = document.querySelector("#searchInput");
  var gameFilter = document.querySelector("#gameFilter");
  var lengthFilter = document.querySelector("#lengthFilter");
  var difficultyFilter = document.querySelector("#difficultyFilter");
  var videoFilter = document.querySelector("#videoFilter");
  var videoFilterGroup = document.querySelector("#videoFilterGroup");
  var subFilterContainer = document.querySelector("#subFilterContainer");
  var resetButton = document.querySelector("#resetButton");
  var questGrid = document.querySelector("#questGrid");
  var resultCount = document.querySelector("#resultCount");
  var filterPanel = document.querySelector("#filterPanel");
  var filterToggle = document.querySelector("#mobileFilterToggle");

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
      var matchesDifficulty = selectedDifficulty === "all" || quest.difficulty === selectedDifficulty;
      var matchesVideo = selectedVideo === "all" || (selectedVideo === "video" && quest.video);
      var matchesSub = subValue === "all" || String(quest[subField]) === subValue;

      return matchesSearch && matchesGame && matchesLength && matchesDifficulty && matchesVideo && matchesSub;
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
        '" target="_blank" rel="noopener noreferrer">&#9654; Watch Walkthrough</a>'
      : "";

    var diffClass = quest.difficulty.toLowerCase();

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

    filteredQuests.forEach(function (quest) {
      questGrid.appendChild(createQuestCard(quest));
    });
  }

  function resetFilters() {
    searchInput.value = "";
    gameFilter.value = "all";
    lengthFilter.value = "all";
    difficultyFilter.value = "all";
    videoFilter.value = "all";
    updateSubFilters();
    renderQuests();
  }

  function onGameChange() {
    updateSubFilters();
    renderQuests();
  }

  function toggleFilters() {
    filterPanel.classList.toggle("open");
  }

  populateGameFilter();
  renderQuests();

  searchInput.addEventListener("input", renderQuests);
  gameFilter.addEventListener("change", onGameChange);
  lengthFilter.addEventListener("change", renderQuests);
  difficultyFilter.addEventListener("change", renderQuests);
  videoFilter.addEventListener("change", renderQuests);
  resetButton.addEventListener("click", resetFilters);
  filterToggle.addEventListener("click", toggleFilters);
})();
