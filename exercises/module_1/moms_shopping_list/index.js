
const form = document.getElementById('add-todo');
const itemList = document.getElementById('list');

// Part 1
// A user will be able to add list items to the pre-built ul using the pre-built form
// New list items should have the same format as the li's that came with the git repo

// adds a new item to the form
form.addEventListener('submit', addItem);

// Delete item from the list
itemList.addEventListener('click', deleteItem);

function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById('title').value;

  let li = document.createElement('li');
  let newDiv = document.createElement('div');
  newDiv.textContent = newItem;

  //edit button
  const editBtn = document.createElement('button');
  editBtn.appendChild(document.createTextNode('edit'));
  // delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.appendChild(document.createTextNode('X'));
  // save button
  const saveBtn = document.createElement('button');
  saveBtn.appendChild(document.createTextNode('save'));

  li.appendChild(newDiv);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  li.appendChild(saveBtn);

  // append li's to the ul
  itemList.appendChild(li);
}

//delete item from the form
function deleteItem(e) {
  const li = e.target.parentElement;
  itemList.removeChild(li);
}
//
function editItem(e) {
  const li = e.target.parentElement;
  itemList.removeChild(li);
}