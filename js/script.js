const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const dateInput = document.getElementById('date-input');
const todoList = document.getElementById('todo-list');
const filterInput = document.getElementById('filter-input');

let todos = [];

todoForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const task = todoInput.value.trim();
  const date = dateInput.value;

  if (!task || !date) {
    alert('Please fill out both task and date!');
    return;
  }

  const todo = {
    id: Date.now(),
    task,
    date
  };

  todos.push(todo);
  displayTodos(todos);
  todoForm.reset();
});

function displayTodos(data) {
  todoList.innerHTML = '';

  data.forEach(todo => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${todo.task} - <small>${todo.date}</small>
      <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
    `;
    todoList.appendChild(li);
  });
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  displayTodos(todos);
}

filterInput.addEventListener('input', function () {
  const keyword = filterInput.value.toLowerCase();
  const filtered = todos.filter(todo => todo.task.toLowerCase().includes(keyword));
  displayTodos(filtered);
});
