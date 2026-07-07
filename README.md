# newapp
An app for side quests in popular PS5 RPG games.

## Editing the code (recommended setup)

The easiest way to view and edit this project is **Visual Studio Code (VS Code)** — a free editor from Microsoft.

### 1. Install VS Code
1. Download it from https://code.visualstudio.com
2. Install and open it.
3. Use **File → Open Folder** and select this `newapp` folder to see the whole project.

### 2. Helpful free extensions
Open the Extensions panel (the four-squares icon on the left) and install:
- **Prettier** — auto-formats code so it stays clean and readable.
- **ESLint** — highlights mistakes in JavaScript / TypeScript.
- **Live Server** — right-click `index.html` → *Open with Live Server* to preview the site instantly.

### 3. Project layout
- `ps5-rpg-sidequest-summarizer/` — the plain HTML / CSS / JavaScript site.
- `redesign/` — a newer version built with Vite + TypeScript + React (shadcn).

## Working with Claude Code + GitHub

**Claude Code** is an AI coding assistant that can read and edit this project for you.

### Set up Claude Code inside VS Code
1. Install the **Claude Code** extension from the VS Code Extensions panel (search "Claude Code").
2. Open this project folder in VS Code.
3. Sign in when prompted, then open the Claude Code panel and ask it to make changes in plain English.

You can also install the terminal version: see https://code.claude.com/docs

### Connect GitHub
This repo already lives on GitHub (`kbarbu12/newapp`), so changes flow like this:
1. **Sign in to GitHub in VS Code** — click the account icon (bottom-left) → *Sign in with GitHub*.
2. Claude Code makes edits on a branch and can **commit** and **push** them to GitHub for you.
3. On GitHub, those pushes appear as a **Pull Request** you can review and merge.

You can also run Claude Code directly from the browser at https://claude.ai/code — it clones this repo, makes changes on a branch, and opens a Pull Request without anything installed locally.
