# PS5 RPG Side Quest Summarizer

A small mock web app for a course/GitHub portfolio. It shows popular PS5 RPGs and summarizes notable side quests using static sample data.

> This is a demo project. The quest data is manually mocked and should not be treated as a complete game guide.

## Features

- Browse sample side quests from popular PS5 RPGs
- Filter by game and estimated quest length
- Search quests by title, location, reward, or summary
- View a compact AI-style summary for each quest
- No backend required; runs as a static web app

## Games Included

- Baldur's Gate 3
- Elden Ring
- Final Fantasy VII Rebirth
- Cyberpunk 2077: Ultimate Edition
- The Witcher 3: Wild Hunt Complete Edition
- Metaphor: ReFantazio

## How to Run

Option 1: Open directly

```bash
open index.html
```

Option 2: Use a local server

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Project Structure

```text
.
├── index.html
├── src
│   ├── app.js
│   └── styles.css
├── data
│   └── quests.js
└── README.md
```

## Future Improvements

- Replace static data with an API
- Add user accounts and saved quests
- Add spoiler-free / spoiler-heavy summary modes
- Add completion tracking
- Connect to an AI summarization endpoint
