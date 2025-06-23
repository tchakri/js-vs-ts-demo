# JavaScript vs TypeScript: Real-Time Project Comparison

This project demonstrates the differences between JavaScript and TypeScript using a real-world example: a simple Task List (To-Do) app.

## Structure

- `javascript-example/`: Task List app in plain JavaScript
- `typescript-example/`: Task List app in TypeScript

Each version is implemented with clear comments highlighting the differences in typing, error checking, and development experience.

## How to Run

1. Open each folder and follow the instructions in their respective `README.md` files.
2. Compare the code and behavior side-by-side.

---

## Key Differences Illustrated
- Type safety
- Compile-time error checking
- Interfaces and types
- Tooling and developer experience

---

## How to Push This Project to GitHub Using GitHub CLI

1. **Make Sure You Have GitHub CLI Installed & Authenticated**
   - If you don’t have it: [Download GitHub CLI](https://cli.github.com/)
   - Authenticate by running:
     ```sh
     gh auth login
     ```
     (Follow the prompts to log in to your GitHub account.)

2. **Initialize Git (if not already done)**
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Create and Push to Remote Repo with GitHub CLI**
   From your project directory (`c:\CodeRepos\Training`), run:
   ```sh
   gh repo create js-vs-ts-demo --public --source=. --remote=origin --push
   ```
   - Replace `js-vs-ts-demo` with your desired repo name.
   - You can use `--private` instead of `--public` if you want a private repository.

