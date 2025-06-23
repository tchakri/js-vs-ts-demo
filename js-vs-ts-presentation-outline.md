# JavaScript vs. TypeScript: Real-World Example Presentation

---

## Slide 1: Title
**JavaScript vs. TypeScript: Real-World Example**

---

## Slide 2: The Scenario
- “We want to build a simple Task List (To-Do) app.”
- “Let’s see how this is done in JavaScript and TypeScript.”

---

## Slide 3: JavaScript Example
```js
let tasks = [];
function addTask() {
  const input = document.getElementById('taskInput');
  const value = input.value.trim();
  if (!value) return;
  tasks.push({ text: value, done: false });
  input.value = '';
  renderTasks();
}
```
- JavaScript is easy to start with and very flexible.
- No type checking—variables can be anything.
- Errors only show up when you run the code.

---

## Slide 4: TypeScript Example
```ts
interface Task {
  text: string;
  done: boolean;
}
let tasks: Task[] = [];
function addTask(): void {
  const input = document.getElementById('taskInput') as HTMLInputElement;
  const value = input.value.trim();
  if (!value) return;
  tasks.push({ text: value, done: false });
  input.value = '';
  renderTasks();
}
```
- TypeScript adds type annotations and interfaces.
- We define what a Task looks like, and TypeScript checks our code as we write.
- Errors are caught before running the app.

---

## Slide 5: Live Demo (Optional)
- Open both apps side by side.
- Try to add a task with a typo in the property name in both versions.
- In JavaScript, the app might break or behave unexpectedly, but there’s no warning.
- In TypeScript, we get an error immediately. This helps us catch bugs early.

---

## Slide 6: Key Differences
| Feature         | JavaScript      | TypeScript         |
|-----------------|----------------|--------------------|
| Type Checking   | No             | Yes                |
| Compile Errors  | No             | Yes                |
| Interfaces      | No             | Yes                |
| Tooling         | Basic          | Advanced           |

---

## Slide 7: When to Use Each
- **JavaScript:** Quick prototypes, small scripts, learning basics.
- **TypeScript:** Large projects, teamwork, code safety, long-term maintenance.

---

## Slide 8: Summary
- JavaScript is fast and flexible, but can be error-prone.
- TypeScript adds safety and confidence, especially for bigger projects.

---

## Slide 9: Q&A / Discussion
- Invite questions, or ask the audience:
  - “Have you ever run into a bug that TypeScript would have caught?”
  - “Would you consider using TypeScript for your next project?”

---

## Bonus: Live Demo Script
1. Show adding a task in both apps.
2. Intentionally make a typo in a property (`donee` instead of `done`).
   - JavaScript: No warning, runtime bug.
   - TypeScript: Compile-time error.
3. Try to push a string instead of an object into `tasks`.
   - JavaScript: No warning.
   - TypeScript: Compile-time error.
