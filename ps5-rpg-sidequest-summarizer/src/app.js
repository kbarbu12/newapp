import { quests, gameImages } from "../data/quests.js";

const searchInput = document.querySelector("#searchInput");
const gameFilter = document.querySelector("#gameFilter");
const lengthFilter = document.querySelector("#lengthFilter");
const chapterFilter = document.querySelector("#chapterFilter");
const chapterFilterGroup = document.querySelector("#chapterFilterGroup");
const videoFilter = document.querySelector("#videoFilter");
const videoFilterGroup = document.querySelector("#videoFilterGroup");
const resetButton = document.querySelector("#resetButton");
const questGrid = document.querySelector("#questGrid");
const resultCount = document.querySelector("#resultCount");

const BMW_GAME = "Black Myth: Wukong";
const uniqueGames = [...new Set(quests.map((quest) => quest.game))].sort();

function populateGameFilter() {
  uniqueGames.forEach((game) => {
    const option = document.createElement("option");
    option.value = game;
    option.textContent = game;
    gameFilter.appendChild(option);
  });
}

function normalize(value) {
  return value.toLowerCase().trim();
}

function questMatchesSearch(quest, searchTerm) {
  const searchableText = [
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

function updateSubFilters() {
  const isBMW = gameFilter.value === BMW_GAME;
  chapterFilterGroup.style.display = isBMW ? "" : "none";
  videoFilterGroup.style.display = isBMW ? "" : "none";
  if (!isBMW) {
    chapterFilter.value = "all";
    videoFilter.value = "all";
  }
}

function getFilteredQuests() {
  const searchTerm = normalize(searchInput.value);
  const selectedGame = gameFilter.value;
  const selectedLength = lengthFilter.value;
  const selectedChapter = chapterFilter.value;
  const selectedVideo = videoFilter.value;

  return quests.filter((quest) => {
    const matchesSearch = !searchTerm || questMatchesSearch(quest, searchTerm);
    const matchesGame = selectedGame === "all" || quest.game === selectedGame;
    const matchesLength = selectedLength === "all" || quest.length === selectedLength;
    const matchesChapter = selectedChapter === "all" || (quest.chapter && quest.chapter === Number(selectedChapter));
    const matchesVideo = selectedVideo === "all" || (selectedVideo === "video" && quest.video);

    return matchesSearch && matchesGame && matchesLength && matchesChapter && matchesVideo;
  });
}

function createQuestCard(quest) {
  const article = document.createElement("article");
  article.className = "quest-card";

  const img = gameImages[quest.game];
  const bannerStyle = `background: ${img.gradient};`;

  article.innerHTML = `
    <div class="card-banner" style="${bannerStyle}">
      <img
        src="${img.cover}"
        alt="${quest.game} cover art"
        class="card-banner-img"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      />
      <div class="card-banner-fallback" style="display:none;">
        <span class="banner-abbr">${img.abbr}</span>
      </div>
    </div>
    <div class="card-body">
      <div class="card-topline">
        <span class="game-name">${quest.game}</span>
        <span class="pill ${quest.length}">${quest.length}</span>
      </div>
      <h3>${quest.title}</h3>
      ${quest.chapter ? `<p class="meta"><strong>Chapter:</strong> ${quest.chapter}</p>` : ""}
      <p class="meta"><strong>Location:</strong> ${quest.location}</p>
      <p class="meta"><strong>Difficulty:</strong> ${quest.difficulty}</p>
      <p>${quest.summary}</p>
      <div class="summary-box">
        <strong>AI-style recommendation:</strong>
        <p>${quest.aiTip}</p>
      </div>
      <p class="reward"><strong>Reward:</strong> ${quest.reward}</p>
      ${quest.video ? `<a class="video-link" href="${quest.video}" target="_blank" rel="noopener noreferrer">&#9654; Watch Walkthrough</a>` : ""}
    </div>
  `;

  return article;
}

function renderQuests() {
  const filteredQuests = getFilteredQuests();
  questGrid.innerHTML = "";
  resultCount.textContent = `${filteredQuests.length} result${filteredQuests.length === 1 ? "" : "s"}`;

  if (filteredQuests.length === 0) {
    questGrid.innerHTML = `
      <div class="empty-state">
        <h3>No quests found</h3>
        <p>Try changing the game, length, or search term.</p>
      </div>
    `;
    return;
  }

  filteredQuests.forEach((quest) => {
    questGrid.appendChild(createQuestCard(quest));
  });
}

function resetFilters() {
  searchInput.value = "";
  gameFilter.value = "all";
  lengthFilter.value = "all";
  chapterFilter.value = "all";
  videoFilter.value = "all";
  updateSubFilters();
  renderQuests();
}

function onGameChange() {
  updateSubFilters();
  renderQuests();
}

populateGameFilter();
renderQuests();

searchInput.addEventListener("input", renderQuests);
gameFilter.addEventListener("change", onGameChange);
lengthFilter.addEventListener("change", renderQuests);
chapterFilter.addEventListener("change", renderQuests);
videoFilter.addEventListener("change", renderQuests);
resetButton.addEventListener("click", resetFilters);
