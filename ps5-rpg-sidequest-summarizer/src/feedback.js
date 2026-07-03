/* Feedback box — composes an email to the site owner via the user's mail client.
   The site is a static GitHub Pages page with no backend, so we build a mailto:
   link from the form fields. Submissions are also cached in localStorage so a
   returning visitor sees a friendly acknowledgement. */
(function () {
  "use strict";

  var CONTACT = "k.barbu12@gmail.com";

  var form = document.getElementById("feedbackForm");
  if (!form) return;

  var nameInput = document.getElementById("fbName");
  var topicInput = document.getElementById("fbTopic");
  var messageInput = document.getElementById("fbMessage");
  var statusEl = document.getElementById("feedbackStatus");

  function showStatus(text, isError) {
    statusEl.textContent = text;
    statusEl.classList.toggle("is-error", !!isError);
    statusEl.classList.toggle("is-ok", !isError);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = (nameInput.value || "").trim();
    var topic = topicInput.value || "Feedback";
    var message = (messageInput.value || "").trim();

    if (!message) {
      showStatus("Please write a message first.", true);
      messageInput.focus();
      return;
    }

    var subject = "RPG Quest Guide feedback: " + topic;
    var bodyLines = [
      message,
      "",
      "—",
      "Topic: " + topic,
      name ? "From: " + name : "From: (anonymous)",
      "Sent from: " + window.location.href,
    ];
    var mailto =
      "mailto:" +
      CONTACT +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(bodyLines.join("\n"));

    // Keep a lightweight local record (best-effort; ignore quota/privacy errors).
    try {
      var stored = JSON.parse(localStorage.getItem("rqg_feedback") || "[]");
      stored.push({ topic: topic, name: name, message: message, at: Date.now() });
      localStorage.setItem("rqg_feedback", JSON.stringify(stored.slice(-50)));
    } catch (err) {
      /* localStorage unavailable — non-fatal */
    }

    window.location.href = mailto;

    showStatus("Thanks! Your email app should open — hit send to deliver it.", false);
    form.reset();
  });
})();
