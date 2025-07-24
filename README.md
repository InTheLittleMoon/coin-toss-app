# 🪙 Coin Toss App

A simple desktop app built with Electron that lets you guess Heads or Tails, track your wins and losses, and reset your score. Packaged as a standalone Windows `.exe` installer.

---

## 📦 Features

- 🎯 Guess Heads or Tails
- 🧠 Tracks total guesses and wins
- 🔄 Reset button to start fresh
- ⚡ Lightweight, fast, and clean interface
- 🪟 Built as a desktop `.exe` app using Electron

---

## 🚀 Installation

⚠️ This app does not have prebuilt installers yet. You’ll need to build it yourself.

---

## 🧰 Developer Setup

Want to run or modify it locally?

### Requirements:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node)

### Steps:

    # Clone the repo
    git clone https://github.com/your-username/coin-toss-app.git
    cd coin-toss-app

    # Install dependencies
    npm install

    # Run the app in development
    npm start

---

## 🏗 Packaging Into .exe

To generate a Windows installer:

    # Build the app using electron-builder
    npm run dist

Output will appear in the `dist/` folder:
- `CoinTossApp Setup 1.0.0.exe` — installer
- `win-unpacked/` — portable version (no installer)
- `.blockmap` / `latest.yml` — used for auto-updates (optional)

> ⚠️ Don't commit the `dist/` folder — it's in `.gitignore`.

---

## 📁 File Structure Overview

    coin-toss-app/
    ├── main.js         # Electron main process (window logic)
    ├── index.html      # UI layout
    ├── renderer.js     # Game logic and UI interaction
    ├── package.json    # App metadata and scripts
    └── dist/           # Auto-generated folder with your .exe build

---

## 🛠 Tech Stack

- 🖥 [Electron](https://www.electronjs.org/) — for packaging the web UI into a desktop app
- 🌐 Vanilla HTML, CSS, JS — no frameworks

---

## 📜 License

MIT — use freely and modify for your own projects.

---

## 👤 Author

Created by [Gabriel Sanchez](https://github.com/InTheLittleMoon) as a beginner-friendly portfolio app to learn Electron and software packaging.
