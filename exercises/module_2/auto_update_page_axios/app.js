// "https://api.vschool.io/alex/todo"

// GET DATA
// GET's THE TODO's FROM THE DATABASE
function getData() {
  axios
    .get('https://api.vschool.io/alex1/todo')
    .then(res => listData(res.data))
    .catch(err => console.log(err));
}

// LISTS THE TODO TITLES TO THE DOM
function listData(data) {
  //  document.getElementById('todo-list').innerHTML = ""
  // clears the list then adds data to the list
  clearList();

  for (let i = 0; i < data.length; i++) {
    const h1 = document.createElement('h1');
    h1.textContent = data[i].title;
    document.getElementById('todo-list').appendChild(h1);
  }
}
// clears the list of items so i can add a new item to the list
const clearList = () => {
  // while div has something in it then remove it
  const element = document.getElementById('todo-list');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

getData();

// FORM FOR THE POST REQUEST
const todoForm = document['todo-form'];

todoForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const newTodo = {
    // creates an object with a .title
    title: todoForm.title.value
  };
  // to do form disappears
  todoForm.title.value = '';

  axios
    .post('https://api.vschool.io/alex1/todo', newTodo)
    .then(res => getData(res))
    .catch(err => console.log(err));
});

// there are frameworks that will do all this for me
