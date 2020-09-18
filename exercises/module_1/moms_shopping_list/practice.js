// SELECTORS
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoList = document.getElementById('todo-list');
todoInput.autocomplete = 'off';
//EVENT LISTENERS
todoButton.addEventListener('click', addTodoItem);
document.addEventListener('DOMContentLoaded', showTodosInUI);
//FUNCTIONS
function addTodoItem(e) {
  e.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.className = 'todo';
  const newTodo = document.createElement('li');
  newTodo.className = 'todo-item';
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);
  saveLocalTodos(todoInput.value);
  const completedBtn = document.createElement('button');
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.className = 'completed-btn';
  completedBtn.addEventListener('click', function (e) {
    const todo = e.currentTarget.parentElement;
    todo.classList.toggle('completed');
  });
  todoDiv.appendChild(completedBtn);
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', function (e) {
    const todo = e.currentTarget.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function () {
      todo.remove();
      updateLocalStorageTodos();
    });
  });
  todoDiv.appendChild(deleteBtn);

  const editBtn = document.createElement('button');
  editBtn.innerHTML = '<i class="fas fa-edit"></i>';
  editBtn.className = 'edit-btn';

  editBtn.addEventListener('click', function (e) {
    if (e.currentTarget.innerHTML === '<i class="fas fa-edit"></i>') {
      let todo = e.currentTarget.parentElement.querySelector('.todo-item');
      todoInput.value = todo.innerText;
      document.getElementById('todo-input').focus();
      const editButtons = document.querySelectorAll('.edit-btn');
      editButtons.forEach(function (i) {
        i.innerHTML = '<i class="fas fa-edit"></i>';
      });
      e.currentTarget.innerHTML = '<i class="fas fa-save"></i>';
    } else if (e.currentTarget.innerHTML === '<i class="fas fa-save"></i>') {
      let todo = e.currentTarget.parentElement.querySelector('.todo-item');
      todo.innerText = todoInput.value;
      todoInput.value = '';
      e.currentTarget.innerHTML = '<i class="fas fa-edit"></i>';
      updateLocalStorageTodos();
      return;
    }
  });
  todoDiv.appendChild(editBtn);
  todoList.appendChild(todoDiv);
  todoInput.value = '';
}
//save to local storage
function saveLocalTodos(todo) {
  let todos;
  localStorage.getItem('todos') === null
    ? (todos = [])
    : (todos = JSON.parse(localStorage.getItem('todos')));
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}
function showTodosInUI() {
  let todos;
  localStorage.getItem('todos') === null
    ? (todos = [])
    : (todos = JSON.parse(localStorage.getItem('todos')));

  todos.forEach(function (todo) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.className = 'completed-btn';
    completedBtn.addEventListener('click', function (e) {
      const todo = e.currentTarget.parentElement;
      todo.classList.toggle('completed');
    });
    todoDiv.appendChild(completedBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function (e) {
      const todo = e.currentTarget.parentElement;
      todo.classList.add('fall');
      todo.addEventListener('transitionend', function () {
        todo.remove();
        updateLocalStorageTodos();
      });
    });
    todoDiv.appendChild(deleteBtn);
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', function (e) {
      let button = e.currentTarget;
      if (button.innerHTML === '<i class="fas fa-edit"></i>') {
        let todoItem = button.parentElement.querySelector('.todo-item');
        todoInput.value = todoItem.innerText;
        document.getElementById('todo-input').focus();
        const editButtons = document.querySelectorAll('.edit-btn');
        editButtons.forEach(function (i) {
          i.innerHTML = '<i class="fas fa-edit"></i>';
        });
        button.innerHTML = '<i class="fas fa-save"></i>';
      } else if (button.innerHTML === '<i class="fas fa-save"></i>') {
        todoItem.innerText = todoInput.value;
        todoInput.value = '';
        button.innerHTML = '<i class="fas fa-edit"></i>';
        updateLocalStorageTodos();
      }
    });
    todoDiv.appendChild(editBtn);
    todoList.appendChild(todoDiv);
  });
}

function updateLocalStorageTodos() {
  const todoItems = document.querySelectorAll('.todo-item');
  let todosToStore = [];
  todoItems.forEach(function (i) {
    todosToStore.push(i.innerText);
  });
  localStorage.setItem('todos', JSON.stringify(todosToStore));
}
