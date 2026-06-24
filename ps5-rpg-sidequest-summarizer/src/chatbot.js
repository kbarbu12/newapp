(function () {
  var toggle = document.getElementById("chatToggle");
  var panel = document.getElementById("chatPanel");
  var closeBtn = document.getElementById("chatClose");
  var input = document.getElementById("chatInput");
  var sendBtn = document.getElementById("chatSend");
  var messages = document.getElementById("chatMessages");

  var FALLBACK = 'I couldn\'t find that in our quest database. Please contact the support team via the email <a href="mailto:k.barbu12@gmail.com">k.barbu12@gmail.com</a>';

  toggle.addEventListener("click", function () {
    panel.style.display = panel.style.display === "none" ? "flex" : "none";
    if (panel.style.display === "flex") input.focus();
  });

  closeBtn.addEventListener("click", function () {
    panel.style.display = "none";
  });

  sendBtn.addEventListener("click", handleSend);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") handleSend();
  });

  function handleSend() {
    var text = input.value.trim();
    if (!text) return;
    addMsg("user", text);
    input.value = "";
    var reply = getAnswer(text);
    setTimeout(function () { addMsg("bot", reply); }, 300);
  }

  function addMsg(role, html) {
    var div = document.createElement("div");
    div.className = "chat-msg " + role;
    div.innerHTML = html;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function norm(s) { return s.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim(); }

  function getAnswer(question) {
    var q = norm(question);

    if (matchAny(q, ["how many games", "total games", "number of games", "what games", "which games", "list games", "all games"])) {
      var names = [];
      var seen = {};
      quests.forEach(function (quest) {
        if (!seen[quest.game]) { seen[quest.game] = true; names.push(quest.game); }
      });
      names.sort();
      return "We have <strong>" + names.length + " games</strong> in our database:<br>" + names.map(function (n) { return "• " + n; }).join("<br>");
    }

    if (matchAny(q, ["how many quests", "total quests", "number of quests", "quest count"])) {
      return "There are <strong>" + quests.length + " quests</strong> in our database across " + Object.keys(gameImages).length + " games.";
    }

    if (matchAny(q, ["how to filter", "how do i filter", "how to search", "how to use"])) {
      return "You can filter quests using the sidebar (or tap <strong>Filters</strong> on mobile). Filter by game, quest length, difficulty, or use the search bar to find quests by name, location, or reward.";
    }

    if (matchAny(q, ["walkthrough", "video", "watch"])) {
      var withVideo = quests.filter(function (quest) { return quest.video; });
      if (withVideo.length === 0) return "There are currently no video walkthroughs available.";
      return "<strong>" + withVideo.length + " quests</strong> have video walkthroughs. Use the <strong>Walkthrough</strong> filter (select a game first) to find them. Games with videos include The Witcher 3 and Black Myth: Wukong.";
    }

    var gameMatch = findGame(q);
    if (gameMatch) {
      var gameQuests = quests.filter(function (quest) { return quest.game === gameMatch; });
      if (matchAny(q, ["quest", "side quest", "quests", "how many"])) {
        return "<strong>" + gameMatch + "</strong> has <strong>" + gameQuests.length + " quests</strong>:<br>" +
          gameQuests.map(function (quest) { return "• " + quest.title + " (" + quest.difficulty + ", " + quest.length + ")"; }).join("<br>");
      }
      if (matchAny(q, ["hard", "difficult", "tough", "challenge"])) {
        var hard = gameQuests.filter(function (quest) { return quest.difficulty === "High"; });
        if (hard.length === 0) return "<strong>" + gameMatch + "</strong> doesn't have any High difficulty quests.";
        return "Hard quests in <strong>" + gameMatch + "</strong>:<br>" +
          hard.map(function (quest) { return "• <strong>" + quest.title + "</strong> — " + quest.reward; }).join("<br>");
      }
      if (matchAny(q, ["easy", "simple", "beginner", "low"])) {
        var easy = gameQuests.filter(function (quest) { return quest.difficulty === "Low"; });
        if (easy.length === 0) return "<strong>" + gameMatch + "</strong> doesn't have any Low difficulty quests.";
        return "Easy quests in <strong>" + gameMatch + "</strong>:<br>" +
          easy.map(function (quest) { return "• <strong>" + quest.title + "</strong> — " + quest.reward; }).join("<br>");
      }
      if (matchAny(q, ["reward", "loot", "get", "earn", "drop"])) {
        return "Rewards in <strong>" + gameMatch + "</strong>:<br>" +
          gameQuests.map(function (quest) { return "• <strong>" + quest.title + "</strong>: " + quest.reward; }).join("<br>");
      }
      var info = gameQuests.length + " quest" + (gameQuests.length === 1 ? "" : "s") + " available";
      var hasVid = gameQuests.some(function (quest) { return quest.video; });
      return "<strong>" + gameMatch + "</strong> — " + info + (hasVid ? ", includes video walkthroughs" : "") + ".<br>" +
        gameQuests.slice(0, 5).map(function (quest) { return "• " + quest.title; }).join("<br>");
    }

    var questMatch = findQuest(q);
    if (questMatch) {
      var qst = questMatch;
      return "<strong>" + qst.title + "</strong> (" + qst.game + ")<br>" +
        "<strong>Location:</strong> " + qst.location + "<br>" +
        "<strong>Difficulty:</strong> " + qst.difficulty + " | <strong>Length:</strong> " + qst.length + "<br>" +
        "<strong>Reward:</strong> " + qst.reward + "<br><br>" +
        qst.summary + "<br><br>" +
        "<strong>Tip:</strong> " + qst.aiTip +
        (qst.video ? '<br><br><a href="' + qst.video + '" target="_blank">Watch Walkthrough</a>' : "");
    }

    if (matchAny(q, ["short quest", "short", "quick"])) {
      var shortQ = quests.filter(function (quest) { return quest.length === "short"; });
      return "There are <strong>" + shortQ.length + " short quests</strong>. Here are a few:<br>" +
        shortQ.slice(0, 5).map(function (quest) { return "• <strong>" + quest.title + "</strong> (" + quest.game + ")"; }).join("<br>");
    }

    if (matchAny(q, ["long quest", "longest", "big quest"])) {
      var longQ = quests.filter(function (quest) { return quest.length === "long"; });
      return "There are <strong>" + longQ.length + " long quests</strong>. Here are a few:<br>" +
        longQ.slice(0, 5).map(function (quest) { return "• <strong>" + quest.title + "</strong> (" + quest.game + ")"; }).join("<br>");
    }

    if (matchAny(q, ["hard", "hardest", "difficult", "tough"])) {
      var hardQ = quests.filter(function (quest) { return quest.difficulty === "High"; });
      return "There are <strong>" + hardQ.length + " high-difficulty quests</strong>:<br>" +
        hardQ.slice(0, 6).map(function (quest) { return "• <strong>" + quest.title + "</strong> (" + quest.game + ")"; }).join("<br>");
    }

    if (matchAny(q, ["easy", "easiest", "beginner"])) {
      var easyQ = quests.filter(function (quest) { return quest.difficulty === "Low"; });
      return "There are <strong>" + easyQ.length + " easy quests</strong>:<br>" +
        easyQ.slice(0, 6).map(function (quest) { return "• <strong>" + quest.title + "</strong> (" + quest.game + ")"; }).join("<br>");
    }

    if (matchAny(q, ["reward", "best reward", "loot"])) {
      return "Every quest has rewards listed on its card. You can search for specific rewards using the search bar. Some notable rewards include the Dark Moon Greatsword (Elden Ring), Uchitsune's Longbow (Ghost of Tsushima), and mastercraft sword upgrades (Witcher 3).";
    }

    if (matchAny(q, ["hello", "hi", "hey", "sup"])) {
      return "Hey! I can help you find quests, games, rewards, and walkthroughs. Try asking something like \"What quests does Elden Ring have?\" or \"Show me short quests.\"";
    }

    if (matchAny(q, ["help", "what can you do", "what do you know"])) {
      return "I can answer questions about:<br>• Games and their quests<br>• Quest details (difficulty, rewards, tips)<br>• Filtering and searching<br>• Video walkthroughs<br><br>Try: \"How many games are there?\" or \"Tell me about Ranni's Questline\"";
    }

    if (matchAny(q, ["thank", "thanks", "cheers"])) {
      return "You're welcome! Let me know if you need anything else.";
    }

    var searchResults = searchQuests(q);
    if (searchResults.length > 0) {
      return "I found <strong>" + searchResults.length + " quest" + (searchResults.length === 1 ? "" : "s") + "</strong> matching your question:<br>" +
        searchResults.slice(0, 5).map(function (quest) {
          return "• <strong>" + quest.title + "</strong> (" + quest.game + ") — " + quest.difficulty + ", " + quest.length;
        }).join("<br>");
    }

    return FALLBACK;
  }

  function matchAny(text, patterns) {
    for (var i = 0; i < patterns.length; i++) {
      if (text.indexOf(patterns[i]) !== -1) return true;
    }
    return false;
  }

  function findGame(q) {
    var gameNames = Object.keys(gameImages);
    for (var i = 0; i < gameNames.length; i++) {
      if (q.indexOf(norm(gameNames[i])) !== -1) return gameNames[i];
    }
    var aliases = {
      "bg3": "Baldur's Gate 3", "baldur": "Baldur's Gate 3", "baldurs gate": "Baldur's Gate 3",
      "elden": "Elden Ring", "elden ring": "Elden Ring",
      "ff7": "Final Fantasy VII Rebirth", "final fantasy": "Final Fantasy VII Rebirth", "rebirth": "Final Fantasy VII Rebirth",
      "cyberpunk": "Cyberpunk 2077: Ultimate Edition", "cp77": "Cyberpunk 2077: Ultimate Edition",
      "witcher": "The Witcher 3: Wild Hunt", "tw3": "The Witcher 3: Wild Hunt", "geralt": "The Witcher 3: Wild Hunt",
      "metaphor": "Metaphor: ReFantazio", "refantazio": "Metaphor: ReFantazio",
      "demon": "Demon's Souls", "demons soul": "Demon's Souls",
      "hogwarts": "Hogwarts Legacy", "harry potter": "Hogwarts Legacy",
      "wukong": "Black Myth: Wukong", "black myth": "Black Myth: Wukong", "bmw": "Black Myth: Wukong",
      "god of war": "God of War Ragnarök", "ragnarok": "God of War Ragnarök", "gow": "God of War Ragnarök", "kratos": "God of War Ragnarök",
      "persona": "Persona 5 Royal", "p5r": "Persona 5 Royal", "p5": "Persona 5 Royal",
      "ghost": "Ghost of Tsushima", "tsushima": "Ghost of Tsushima", "jin": "Ghost of Tsushima",
      "horizon": "Horizon Forbidden West", "hfw": "Horizon Forbidden West", "aloy": "Horizon Forbidden West", "forbidden west": "Horizon Forbidden West"
    };
    var keys = Object.keys(aliases);
    for (var j = 0; j < keys.length; j++) {
      if (q.indexOf(keys[j]) !== -1) return aliases[keys[j]];
    }
    return null;
  }

  function findQuest(q) {
    for (var i = 0; i < quests.length; i++) {
      if (q.indexOf(norm(quests[i].title)) !== -1) return quests[i];
    }
    for (var j = 0; j < quests.length; j++) {
      var words = norm(quests[j].title).split(" ").filter(function (w) { return w.length > 3; });
      var matchCount = 0;
      for (var k = 0; k < words.length; k++) {
        if (q.indexOf(words[k]) !== -1) matchCount++;
      }
      if (words.length > 0 && matchCount >= Math.ceil(words.length * 0.6)) return quests[j];
    }
    return null;
  }

  function searchQuests(q) {
    var words = q.split(" ").filter(function (w) { return w.length > 2; });
    if (words.length === 0) return [];
    return quests.filter(function (quest) {
      var blob = norm(quest.title + " " + quest.location + " " + quest.reward + " " + quest.summary + " " + quest.game);
      var hits = 0;
      for (var i = 0; i < words.length; i++) {
        if (blob.indexOf(words[i]) !== -1) hits++;
      }
      return hits >= Math.max(1, Math.ceil(words.length * 0.5));
    });
  }
})();
