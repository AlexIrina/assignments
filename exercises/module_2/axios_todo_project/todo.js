const title = document.getElementById('title');
const notes = document.getElementById('notes');
const price = document.getElementById('price');
// const imageUrl = document.getElementById('imageUrl');
const submit = document.getElementById('submit');
const todoForm = document['todo-form'];

// GET DATA
// GET's THE TODO's FROM THE DATABASE
function getData() {
  axios
    .get('https://api.vschool.io/alex2/todo')
    .then(res => listData(res.data))
    .catch(err => console.log(err));
}

// LISTS THE TODO TITLES TO THE DOM
function listData(data) {
  // clears the list then adds data to the list
  clearList();

  for (let i = 0; i < data.length; i++) {
    const list = document.getElementById('todo-list');
    const row = document.createElement('tr');
    const title = document.createElement('td');
    const description = document.createElement('td');
    const price = document.createElement('td');
    const checkBox = document.createElement('td');
    const deleted = document.createElement('td');
    const update = document.createElement('td');

    title.textContent = data[i].title;
    description.textContent = data[i].description;
    price.textContent = data[i].price;
    checkBox.textContent = data[i].checkBox;
    deleted.textContent = data[i].deleted;
    update.textContent = data[i].update;

    const checkBtn = document.createElement('p');
    checkBtn.textContent = '√';
    checkBtn.addEventListener('click', () => {
      isCompleted(data[i]);
    });

    // creating delete button when clicked should delete the item
    const deleteBtn = document.createElement('p');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', () => {
      deleteItem(data[i]);
    });

    row.append(title);
    row.append(description);
    row.append(price);
    row.append(checkBox);
    row.append(deleted);
    row.append(update);
    // check and delete buttons
    checkBox.append(checkBtn);
    deleted.append(deleteBtn);

    //Append to the list.
    list.appendChild(row); //Will show the added todo at the bottom
    document.getElementById('todo-list').appendChild(row);
  }
}
// if item is completed
function isCompleted(todo) {
  axios
    .put(`https://api.vschool.io/alex2/todo/${todo._id}`, {
      ...todo,
      completed: !todo.completed
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}

// clears the list of items so i can add a new item to the list
function clearList() {
  // while div has something in it then remove it
  const element = document.getElementById('todo-list');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

getData();

// PUT requests
// Update (PUT) an existing todo: https://api.vschool.io/<yourname>/todo/<todoId>
function updateList(todo) {
  axios
    .put(`https://api.vschool.io/alex2/todo/${todo._id}`, {})
    .then(res => console.log(res.data)) // will be entire updated todo
    .catch(error => console.log(error));
}

// FORM FOR THE POST REQUEST
todoForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const newTodo = {
    title: todoForm.title.value,
    description: todoForm.notes.value,
    price: todoForm.price.value
  };
  // to do form disappears
  todoForm.title.value = '';

  axios
    .post('https://api.vschool.io/alex2/todo', newTodo)
    .then(response => getData())
    .catch(err => console.log(err));
});

// DELETE requests
// DELETE an existing todo: https://api.vschool.io/<yourname>/todo/<todoId>

function deleteItem() {
  const `deleteButton` = document.getElementById('delete-button');
  `deleteButton`.addEventListener('click', function() {
    axios
      .delete(`https://api.vschool.io/alex2/todo/${todo._id}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  });
}
