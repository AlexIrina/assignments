//SELECTORS
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoList = document.getElementById('todo-list');

//EVENT LISTENERS
//add item
todoButton.addEventListener('click', addTodoItem);
//delete and complete todo item
todoList.addEventListener('click', deleteAndCompleteTodoItem);

//FUNCTIONS
// generate a new todo with delete and completed buttons
function addTodoItem(e) {
  e.preventDefault();
  //create a div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  // put newTodo inside the created div
  todoDiv.appendChild(newTodo);
  //SAVE TODO TO LOCAL STORAGE
  saveLocalTodos(todoInput.value);

  // COMPLETED BUTTON
  const completedBtn = document.createElement('button');
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.classList.add('completed-btn');
  //append completed button to the div
  todoDiv.appendChild(completedBtn);

  // DELETE BUTTON
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.classList.add('delete-btn');
  //append delete button to the div
  todoDiv.appendChild(deleteBtn);
  // APPEND TODO TO LIST
  todoList.appendChild(todoDiv);
  // clear todo input value
  todoInput.value = '';
}

function deleteAndCompleteTodoItem(e) {
  // console.log(e.target);
  let item = e.target;
  //DELETE TODO
  if (item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    //fall animation class
    todo.classList.add('fall');
    // when fall animation is finishes the function will run and the item will get deleted from the list
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }

  // COMPLETE TODO
  if (item.classList[0] === 'completed-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

//save todos to local storage
function saveLocalTodos(todo) {
  let todos = [];
  //check if i already have todos in local storage
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

// pulls items out of local storage and display them in the UI

