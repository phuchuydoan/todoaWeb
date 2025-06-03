// Load tasks from localStorage
window.onload = () => {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    document.getElementById("taskList").innerHTML = saved;
    addEventListeners();
  }
};

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task}</span>
    <div>
      <button onclick="completeTask(this)">✔</button>
      <button onclick="deleteTask(this)">✖</button>
    </div>
  `;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
  saveTasks();
}

function completeTask(button) {
  const li = button.closest("li");
  li.classList.toggle("completed");
  saveTasks();
}

function deleteTask(button) {
  const li = button.closest("li");
  li.remove();
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

function addEventListeners() {
  const buttons = document.querySelectorAll("li button");
  buttons.forEach((btn) => {
    if (btn.textContent === "✔") btn.onclick = () => completeTask(btn);
    if (btn.textContent === "✖") btn.onclick = () => deleteTask(btn);
  });
}
