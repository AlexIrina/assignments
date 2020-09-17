SELECTORS

- input
- button
- list

EVENT LISTENERS

- addTodoItem on submit button click
- deleteAndCompleteTodoItem on click inside the list
- shows local storage items in the UI when DOMContentLoaded

FUNCTIONS
// generates a new todo with delete and completed buttons

- addTodoItem(e){

  - div with delete and completed buttons
    - create a todo div
    - add a class to the todo div
  - li newTodo
    - generate the li element
    - to the inner text add the todos inputs value
    - add a class to the li
    - append newTodo inside the created div

  // SAVE inputs value to local storage -- saveLocalTodos()

  - create a complete button element
    - add fas fa-check to the innerHtml of the button
    - add a completed-btn class to the button
    - append the button to the div
  - create a delete button element

    - add fas fa-trash to the innerHtml of the button
    - add a delete-btn class to the button
    - append the button to the div

  - append the div to the todo list
  - clear todo input value
    }

- deleteAndCompleteTodoItem(e) {
  - assign e.target to item variable
  - if items classList  === 'delete-btn'
    - then assign items parentElement to a todo variable
    - add a class of 'fall' to the todo //styled in css
    - call the deleteLocalStorageTodos(todo)
    // when fall animation is finishes below function will run and the item will get deleted from the list
    - todo.addEventListener('transitionend', function () {
      todo.remove();
    });

  - if items classList === 'complete-btn'
    - then assign items parentElement to a todo variable
    - add a toggle class of 'completed' to the todo //styled in css
}

- save todos to local storage
  - saveLocalTodos(todo){
    - create a todos variable and set it to an empty array
    //check if i already have todos in local storage
      - if getting the todos item from the localStorage === null 
      - then set the todos to an empty array
      - else set todos to JSON.parse(localStorage.getItem('todos')
      //then
      - push todo into the todos variable
      //set todos to local storage
      - localStorage.setItem('todos', JSON.stringify(todos))
  }
  - pull items out of local storage and display them in the UI
  -showTodosInUI(){
    - check if the todo is already in local storage like i did in the saveLocalTodos(todo) 
    - run a forEach on the todos. todo as the parameter
      - recreate the todo div element like i did in addTodoItem(e)
      - add a class of 'todo' to the div
      - create and li element called newTodo
      - set inner text to the newTodo that im looping 
      add a class of 'todo-item' to the new todo
      -append new todo to the div

      - copy completed button
      - append completed button to the div

      -copy deleted button
      -append it to the div
      
      append the div to the todoList
  }
  -  deleteLocalStorageTodos(todo) {
    - init todos
    - check local storage if the 'todos' are already in there like above
    //remove todos by its position in the LS
    - set todoIndex to the children[0] of the todo innerText
     // console.log(todo.children[0].innerText);
   // checking the todos array in local storage and splice out the index of
   the item (todoIndex) that im deleting. How many items im removing? --> 1


  //need to set todos to back to local storage
  }
