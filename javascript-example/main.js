// This is a simple Task List app in JavaScript.
// Notice: No type checking, all variables are dynamic.

let tasks = [];

function addTask() {
  const input = document.getElementById('taskInput');
  const value = input.value.trim();
  if (!value) return;
  tasks.push({ text: value, done: false });
  input.value = '';
  renderTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function renderTasks() {
  const tasksDiv = document.getElementById('tasks');
  tasksDiv.innerHTML = '';
  tasks.forEach((task, i) => {
    const div = document.createElement('div');
    div.className = 'task' + (task.done ? ' done' : '');
    div.textContent = task.text;
    div.onclick = () => toggleTask(i);
    tasksDiv.appendChild(div);
  });
}
