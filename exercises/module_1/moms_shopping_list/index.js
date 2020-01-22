// form
const form = document.getElementById('add-todo');
// UL
const itemList = document.getElementById('list');
// Filter items
const filter = document.getElementById('title');

// Part 1
// A user will be able to add list items to the pre-built ul using the pre-built form
// New list items should have the same format as the li's that came with the git repo

// create a submit event on the form
// once the submit button is clicked the addItem fires off and that item im submitting gets added to the list
form.addEventListener('submit', addItem);

// DELETE ITEMS FROM THE UL
itemList.addEventListener('click', removeItem);

// // Filter Items Event
// filter.addEventListener('keyup', filterItems);

// Adds items to the UL
function addItem(e) {
  e.preventDefault();

  // gets the value of the input and what ill use to create a new item
  let newItem = document.getElementById('title').value;
  console.log(newItem);

  // create a new LI element that will be added to the items list when submit is clicked
  let li = document.createElement('li');

  // creates a div that im putting the new item into
  let newDiv = document.createElement('div');
  newDiv.textContent = newItem;

  // create edit button
  let editBtn = document.createElement('button');

  editBtn.appendChild(document.createTextNode('edit'));
  // create delete button
  let deleteBtn = document.createElement('button');
  deleteBtn.appendChild(document.createTextNode('X'));

  // now i want to append the text that comes from the form to the list item
  // add text node with input value
  li.appendChild(newDiv);

  // append the edit button to the li
  li.appendChild(editBtn);

  // append the delete button to the li
  li.appendChild(deleteBtn);

  // append the li to the ul
  itemList.appendChild(li);
}

// DELETE
// e is an event object
function removeItem(e) {
  console.log(e, 'delete is clicked');
  if (confirm('Are you sure?')) {
    // getting the parent LI
    let li = e.target.parentElement;
    // remove the child of the item list
    // li is the child of the itemlist aka UL
    itemList.removeChild(li);
  }
}
