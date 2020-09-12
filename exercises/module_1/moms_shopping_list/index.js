//SELECTORS
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoList = document.getElementById('todo-list');
// select element
const filterOption = document.querySelector('.filter-todo');

//EVENT LISTENERS
//add item
todoButton.addEventListener('click', addTodoItem);
//delete and complete todo item
todoList.addEventListener('click', deleteAndCompleteTodoItem);
//filter todos by All, Completed, Uncompleted
filterOption.addEventListener('click', filterTodo);

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

function filterTodo(e) {
  const todos = todoList.childNodes;
  //loop over all todos
  todos.forEach((todo) => {
    // checking for ALL, COMPLETED,
    switch (e.target.value) {
      case 'all':
        // show all the todos
        //they all have flex style of display on them already
        todo.style.display = 'flex';
        break;
      case 'completed':
        // show all completed todos
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          //remove/don't show them
          todo.style.display = 'none';
        }
    }
  });
}
