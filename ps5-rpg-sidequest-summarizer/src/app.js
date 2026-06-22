import { quests } from "../data/quests.js";

const searchInput = document.querySelector("#searchInput");
const gameFilter = document.querySelector("#gameFilter");
const lengthFilter = document.querySelector("#lengthFilter");
const resetButton = document.querySelector("#resetButton");
const questGrid = document.querySelector("#questGrid");
const resultCount = document.querySelector("#resultCount");

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

function getFilteredQuests() {
  const searchTerm = normalize(searchInput.value);
  const selectedGame = gameFilter.value;
  const selectedLength = lengthFilter.value;

  return quests.filter((quest) => {
    const matchesSearch = !searchTerm || questMatchesSearch(quest, searchTerm);
    const matchesGame = selectedGame === "all" || quest.game === selectedGame;
    const matchesLength = selectedLength === "all" || quest.length === selectedLength;

    return matchesSearch && matchesGame && matchesLength;
  });
}

function createQuestCard(quest) {
  const article = document.createElement("article");
  article.className = "quest-card";

  article.innerHTML = `
    <div class="card-topline">
      <span class="game-name">${quest.game}</span>
      <span class="pill ${quest.length}">${quest.length}</span>
    </div>
    <h3>${quest.title}</h3>
    <p class="meta"><strong>Location:</strong> ${quest.location}</p>
    <p class="meta"><strong>Difficulty:</strong> ${quest.difficulty}</p>
    <p>${quest.summary}</p>
    <div class="summary-box">
      <strong>AI-style recommendation:</strong>
      <p>${quest.aiTip}</p>
    </div>
    <p class="reward"><strong>Reward:</strong> ${quest.reward}</p>
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
  renderQuests();
}

populateGameFilter();
renderQuests();

searchInput.addEventListener("input", renderQuests);
gameFilter.addEventListener("change", renderQuests);
lengthFilter.addEventListener("change", renderQuests);
resetButton.addEventListener("click", resetFilters);
