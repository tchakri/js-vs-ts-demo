// This is a simple Task List app in TypeScript.
// Notice: Type annotations and interfaces provide safety.

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

function toggleTask(index: number): void {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function renderTasks(): void {
  const tasksDiv = document.getElementById('tasks') as HTMLDivElement;
  tasksDiv.innerHTML = '';
  tasks.forEach((task, i) => {
    const div = document.createElement('div');
    div.className = 'task' + (task.done ? ' done' : '');
    div.textContent = task.text;
    div.onclick = () => toggleTask(i);
    tasksDiv.appendChild(div);
  });
}
