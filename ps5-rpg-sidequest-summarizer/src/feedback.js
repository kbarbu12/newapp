/* Feedback box — delivers messages to the site owner via Web3Forms.
   The site is a static GitHub Pages page with no backend of its own, so we POST
   the form to Web3Forms (https://web3forms.com), a free relay that emails each
   submission straight to the address tied to the access key below.

   To activate/rotate: get a free access key at https://web3forms.com (it is
   emailed to k.barbu12@gmail.com) and paste it into ACCESS_KEY. */
(function () {
  "use strict";

  // Public access key (safe to expose in client code — it only allows sending
  // to the inbox it is registered to). Replace REPLACE_WITH_KEY to go live.
  var ACCESS_KEY = "REPLACE_WITH_KEY";
  var ENDPOINT = "https://api.web3forms.com/submit";

  var form = document.getElementById("feedbackForm");
  if (!form) return;

  var nameInput = document.getElementById("fbName");
  var topicInput = document.getElementById("fbTopic");
  var messageInput = document.getElementById("fbMessage");
  var botInput = document.getElementById("fbBotcheck");
  var statusEl = document.getElementById("feedbackStatus");
  var submitBtn = form.querySelector(".feedback-submit");

  function showStatus(text, state) {
    statusEl.textContent = text;
    statusEl.classList.toggle("is-error", state === "error");
    statusEl.classList.toggle("is-ok", state === "ok");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Honeypot: real users never toggle this hidden checkbox.
    if (botInput && botInput.checked) return;

    var name = (nameInput.value || "").trim();
    var topic = topicInput.value || "Feedback";
    var message = (messageInput.value || "").trim();

    if (!message) {
      showStatus("Please write a message first.", "error");
      messageInput.focus();
      return;
    }

    if (ACCESS_KEY === "REPLACE_WITH_KEY") {
      showStatus(
        "Feedback isn't connected yet — please email k.barbu12@gmail.com directly.",
        "error"
      );
      return;
    }

    var payload = {
      access_key: ACCESS_KEY,
      subject: "RPG Quest Guide feedback: " + topic,
      from_name: name || "RPG Quest Guide visitor",
      // Fields below appear in the email body:
      Topic: topic,
      Name: name || "(anonymous)",
      Message: message,
      "Sent from": window.location.href,
    };

    submitBtn.disabled = true;
    showStatus("Sending…", null);

    fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (data && data.success) {
          showStatus("Thanks! Your feedback was sent. 🎮", "ok");
          form.reset();
        } else {
          showStatus(
            "Sorry, that didn't go through. Please email k.barbu12@gmail.com directly.",
            "error"
          );
        }
      })
      .catch(function () {
        showStatus(
          "Network error — please email k.barbu12@gmail.com directly.",
          "error"
        );
      })
      .finally(function () {
        submitBtn.disabled = false;
      });
  });
})();
