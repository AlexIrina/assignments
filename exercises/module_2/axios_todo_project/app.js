//todo and UI objects in appES5 are now going to be classes in appES6
//First i built the project with es5 prototype syntax and then i reformated it to use es6 classes. As you see here. Same exact application built both ways.

//Everything happens in the UI theres no database.
//I learned how to build something with object oriented programming in vanilla js
//Everything is the same under the hood but i added local storage in es6 version
//At the end i pushed to local storage.Made all the classes static
//Full functionality with local storage. Not just a UI application.

class Todo {
  constructor(title, notes, price, imageUrl) {
    this.title = title;
    this.notes = notes;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}

//the UI is where im putting all the methods to deal with the User Interface. Same methods i used in the prototypes in appes5.
class UI {
  addTodoToList(todo) {
    const list = document.getElementById('todo-list');
    //Create a TR (table row) element. Created for the tbody. Where the todos will be stored
    const row = document.createElement('tr');
    //INSERT cols in the tr. <td> is a table cell that goes in the <tr>. Similar to a <li> to a <ol>
    row.innerHTML = `
        <td>${todo.title}</td>
        <td>${todo.notes}</td>
        <td>${todo.price}</td>
        <td>${todo.imageUrl}</td>
        <td><a href = "#" class="delete">X</a></td>
      `;

    //Append to the list.
    list.appendChild(row); //Will show the added todo at the bottom
  }

  showAlert(message, className) {
    //Construct the element
    //Create a div
    const div = document.createElement('div');
    //Adds Classes to the div element
    div.className = `alert ${className}`; //alert with the classname thats in the parameter above
    //Add text...need to add a text Node
    div.appendChild(document.createTextNode(message)); //message thats comming in from the alert messagefunction
    //NOW I NEED TO INSERT THE MESSAGE TO THE DOM
    //Get parent
    const container = document.querySelector('.container');

    //Next two lines of code allow the message to be shown above the form.
    const form = document.querySelector('#todo-form');

    //Insert alert
    container.insertBefore(div, form); //what i want to insert (DIV)and what i want to insert it before (FORM)

    //Message Dissaper after 3 seconds
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteTodo(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove(); // a href tag is the target.Delete parent of the parent which is the tr from the DOM
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('notes').value = '';
    document.getElementById('price').value = '';
    document.getElementById('imageUrl').value = '';
  }
} //UI class ends here

//Local Storage Class

//Static method calls are made directly on the class and are not callable on instances of the class.
//In order to call a static method within another static method of the same class, you can use the this keyword.
//Static methods are not directly accessible using the this keyword from non-static methods. You need to call them using the class name: CLASSNAME.STATIC_METHOD_NAME() or by calling the method as a property of the constructor: this.constructor.STATIC_METHOD_NAME().

class Store {
  //methods are getTodos(), displayTodos(),addTodo(), removeTodo()
  //Whenever i want to get something in Local Storage ill use getTodos
  static getTodos() {
    //takes care of getting todos from local storage.
    //Initialize a local variable called todos

    let todos;
    //check local storage
    if (localStorage.getItem('todos') === null) {
      //If there are no todos in local storage
      todos = []; //empty array
    } else {
      //This needs to be a javascript object. needs to be ran through JSON.Parse() function.
      todos = JSON.parse(localStorage.getItem('todos'));
    }

    return todos;
  }

  static displayTodos() {
    //takes care of displaying the todos in the UI
    //Display whats stored in local storage
    //first Get the todos
    const todos = Store.getTodos();

    //then loop through the todos with forEach()
    todos.forEach(todo => {
      //after i get the todos i need to put it in the UI
      //I have a class called UI that has a method called addtodo() to list. Line 109
      //First Instantiate that class
      const ui = new UI();

      //Then i can Add todo to UI
      ui.addTodoToList(todo);
    });
  }

  static addTodo(todo) {
    //adds a todo to local storage
    //Using the actual class name (Store) because its a static method. No need to instatiate it.
    const todos = Store.getTodos();

    todos.push(todo); //push on the todo parameter

    //Set Local Storage with the new todo.
    //Needs to be ran through JSON.stingify to be stored to the local storage
    localStorage.setItem('todos', JSON.stringify(todos)); //set local storage with the new todo
    //set it as 'todos', and set todos array thats in JSON.stringify to store it in local storage
  }

  static removeTodo(price) {
    //Removes a todo from local storage
    //console.log(price); //Removes the todo from UI
    //To remove it permanently from local storage i need to loop through.
    //First i need to get todos from LS
    const todos = Store.getTodos(); //line 106
    //Use forEach loop. Line 93

    todos.forEach(function(todo, index) {
      //if todo (thats passed into the function above) price is equal to the price thats passed into the method removetodo(price) then thats the one i want to delete

      if (todo.price === price) {
        todos.splice(index, 1); //todos is the entire array. Splice out the index(thats being passed into the forEach loop). Remove 1
      }
    }); // forEach loop ends here
    console.log(todos);
    //Set Local Storage like line 113
    localStorage.setItem('todos', JSON.stringify(todos)); //this will delete todos from local storage  d
  }
}

//DOM Load Event. When DOM content is loaded, call function displaytodos
document.addEventListener('DOMContentLoaded', Store.displayTodos);

//Event Listener For Adding A todo
document.getElementById('todo-form').addEventListener('submit', function(e) {
  //What do i want to happen when i click submit?
  //Create Form Values...title, notes, price
  const title = document.getElementById('title').value;
  const notes = document.getElementById('notes').value;
  const price = document.getElementById('price').value;
  const imageUrl = document.getElementById('imageUrl').value;

  //Once Form Values are submitted i want to Instantiate the todo Object
  const todo = new Todo(title, notes, price, imageUrl);

  //Instantiate the UI Object so i can add a todo to the list below
  const ui = new UI();

  // Validate
  if (title === '' || notes === '' || price === '' || imageUrl === '') {
    //Create an alert in the UI. ERROR ALERT
    ui.showAlert('Please fill in all the fields', 'error'); //dont use UI
    //alert('failed');
  } else {
    //UI add todo to list
    ui.addTodoToList(todo); //pass in the todo object

    //Add To Local Storage
    Store.addTodo(todo);

    //Show an Alert message when boon gets added to the list below
    ui.showAlert('todo Added!', 'success');

    //Clear Fields after submitting
    ui.clearFields();
  }

  //stop the form from submitting
  e.preventDefault();
});

//Event Listener for Delete A todo
//Have to use a parent of the delete button....this is the 'todo-list'
document.getElementById('todo-list').addEventListener('click', function(e) {
  //Instantiate the UI Object so i can delete todo from list
  const ui = new UI();

  //console.log(ui);//shows all class methods inside the prototype object

  //Delete todo
  console.log(e.target);
  ui.deleteTodo(e.target);

  //Remove From Local Storage. Console.log in removetodo(price)
  Store.removeTodo(
    e.target.parentElement.previousElementSibling.previousElementSibling
      .textContent
  ); //a href is the target.The parentElement is the td. previousElementSibling is the td with the price#. textContent is the text inside the P.E.S. This will give me the price number.

  //After todo is deleted show an alert message
  ui.showAlert('Todo Removed!', 'success');

  e.preventDefault();
});
