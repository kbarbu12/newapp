
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(<App />);

  // Named app-sw.js (not sw.js) so it can't collide with the legacy
  // root-scoped kill-switch worker the prod deploy publishes at /newapp/sw.js.
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register(`${import.meta.env.BASE_URL}app-sw.js`);
    });
  }
