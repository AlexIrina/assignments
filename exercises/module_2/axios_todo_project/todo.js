const title = document.getElementById('title');
const notes = document.getElementById('notes');
const price = document.getElementById('price');
const imageUrl = document.getElementById('imageUrl');
const submit = document.getElementById('submit');
const todoForm = document['todo-form'];

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
    console.log(data[i]);
    const list = document.getElementById('todo-list');
    const row = document.createElement('tr');
    const title = document.createElement('td');
    const description = document.createElement('td');
    const price = document.createElement('td');
    const imageUrl = document.createElement('td');
    const checkBox = document.createElement('td');
    const deleted = document.createElement('td');
    const update = document.createElement('td');

    title.textContent = data[i].title;
    description.textContent = data[i].description;
    price.textContent = data[i].price;
    imageUrl.textContent = data[i].imageUrl;
    checkBox.textContent = data[i].checkBox;
    deleted.textContent = data[i].deleted;
    update.textContent = data[i].update;

    if (data[i].completed) {
      description.className = 'completed';
    }

    const checkBtn = document.createElement('p');
    checkBtn.textContent = '√';
    checkBtn.style.color = 'blue';
    checkBtn.addEventListener('click', () => {
      isCompleted(data[i]);
    });

    // creating delete button when clicked should delete the item
    const deleteBtn = document.createElement('p');
    deleteBtn.textContent = 'X';
    deleteBtn.style.color = 'red';
    deleteBtn.addEventListener('click', () => {
      deleteItem(data[i]);
    });

    row.append(title);
    row.append(description);
    row.append(price);
    row.append(imageUrl);
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

// If item is completed
function isCompleted(todo) {
  console.log('todo', todo);
  axios
    .put(`https://api.vschool.io/alex2/todo/${todo._id}`, {
      ...todo,
      completed: !todo.completed
    })

    .then(res => console.log(res.data))
    .then(res => getData())
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
    price: todoForm.price.value,
    imageUrl: todoForm.imageUrl.value
  };
  // to do form disappears
  clearFields();

  axios
    .post('https://api.vschool.io/alex2/todo', newTodo)
    .then(response => getData())
    .catch(err => console.log(err));
});

// DELETE requests
// DELETE an existing todo: https://api.vschool.io/<yourname>/todo/<todoId>

function deleteItem(todo) {
  // const deleteButton = document.getElementById('delete-button');
  axios
    .delete(`https://api.vschool.io/alex2/todo/${todo._id}`)
    .then(response => console.log(response.data))
    .then(getData)
    .catch(error => console.log(error));
}

// clear fields
function clearFields() {
  document.getElementById('title').value = '';
  document.getElementById('notes').value = '';
  document.getElementById('price').value = '';
  document.getElementById('imageUrl').value = '';
}
