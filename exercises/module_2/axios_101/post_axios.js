// // Post request
// POST is for creating or updating content to a database or server
// Here im adding a new To Do to the list
// POST requires 2 arguments. First argument is the url with an endpoint. Second argument is the object id like to add to the database
// Request Body

/*
don't need this.
This is a new toDo object that i want to add/POST to the database
const newTodo = {
  title: 'My 4th Todo',
  description: 'This is my 4th entry',
  imgUrl:
    'https://images.unsplash.com/photo-1569429593410-b498b3fb3387?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80'
};
*/

// // POST request

// // Grab the To Do Form to get the users input
// const todoForm = document.todoform;
// // add a submit event to the form
// todoForm.addEventListener('submit', function(event) {
//   event.preventDefault();
//   // new toDo object that i want to add/POST to the database
//   const newToDo = {
//     // references to the values on the form
//     // make sure the Keys match what the database is expecting
//     title: todoForm.title.value,
//     description: todoForm.description.value,
//     imgUrl: todoForm.imgUrl.value
//   };
//   // have to use response.data to get all the data back
//   axios
//     .post('https://api.vschool.io/alex/todo', newToDo)
//     .then(response => console.log(response.data))
//     .catch(err => console.log(err));
// });

// GET request

// check if the To Do got added to the database
// // GETs all the todos
// axios
//   .get('https://api.vschool.io/alex/todo')
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err));
