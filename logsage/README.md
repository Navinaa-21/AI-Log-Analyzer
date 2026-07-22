# LogSage

LogSage VS Code Extension.

## Project Overview
LogSage is a powerful extension designed for log analysis, parsing, and rule-based detection. This repository contains the foundational scaffolding for the project.

## Installation Instructions
For local development:
1. Clone the repository.
2. Open the `logsage` folder in VS Code.
3. Run `npm install` in the terminal to install dependencies.

## Development Instructions
- Run `npm run compile` to build the extension.
- Run `npm run watch` to watch for file changes and compile automatically.
- Run `npm run lint` to lint the source code.

## How to launch Extension Development Host
1. Open the project in VS Code.
2. Press `F5` (or go to Run -> Start Debugging). This will compile the TypeScript code and launch a new VS Code window (the Extension Development Host) with your extension loaded.
3. In the new window, open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
4. Type and select `LogSage: Hello World`.
5. You should see a notification popup: "Hello from LogSage!".
