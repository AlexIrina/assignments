// form
const form = document.getElementById('addForm');
// UL
const itemList = document.getElementById('items');
// Filter items
const filter = document.getElementById('filter');

// create a submit event on the form
// once the submit button is clicked he addItem fires off and that item im submitting gets added to the list
form.addEventListener('submit', addItem);

// DELETE ITEMS FROM THE UL
itemList.addEventListener('click', removeItem);

// Filter Items Event
filter.addEventListener('keyup', filterItems);

// addItem function
function addItem(e) {
  e.preventDefault();

  // This gets the value of the input
  let newItem = document.getElementById('item').value;

  // CRETE LI BEFORE THE DELETE BUTTON
  // create a new LI element that will be added to the items list when submit is clicked
  let li = document.createElement('li');
  // create a class for that li. Same class as the other lis
  li.className = 'list-group-item';

  // now i want to append the text that comes from the form to the list item
  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // create the delete button element
  // CRETE DELETE AFTER LI
  let deleteButton = document.createElement('button');
  // add classes to the button has to be the exact same ones the other delete buttons have
  deleteButton.className = 'btn btn-danger btn-sm float-right delete';
  // add a text node to the delete button
  deleteButton.appendChild(document.createTextNode('X'));
  // Now i have to append the button to the li
  li.appendChild(deleteButton);
  // NO THE DELETE BUTTON IS ADDED TO THE CREATED LI

  // append the li to the ul
  itemList.appendChild(li);
  // NOW THE CREATED LI IS ADDED TO THE UL. NOW I NEED TO CREATE THE DELETE BUTTON
}

// e is an event object
function removeItem(e) {
  // i don't want to delete all the uls so i need to target only the one im deleting
  // checks if what im clicking has the class of delete
  if (e.target.classList.contains('delete')) {
    // console.log('delete is clicked');
    if (confirm('Are you sure?')) {
      // getting the parent LI
      let li = e.target.parentElement;
      // remove the child of the item list
      // li is the child of the itemlist aka UL
      itemList.removeChild(li);
    }
  }
}

// filter Items
function filterItems(e) {
  // first get the filter text thats being typed in
  // change the text thats being typed in to lowercase
  let text = e.target.value.toLowerCase();
  // get all the lis within the item list
  let items = itemList.getElementsByTagName('li');
  // convert the HtmlCollection of the list items to an Array
  // need to loop through each item with a foreach loop
  // item in the function is the identifier
  Array.from(items).forEach(function(item) {
    let itemName = item.firstChild.textContent;
    // compare if what i type in the filter is equal to what is in the item name

    // if its not a match then it will equal to -1
    if (itemName.toLowerCase().indexOf(text) != -1) {
      // if not equal to -1 then it means that its a match
      // show item
      item.style.display = 'block';
    } else {
      // don't want it to show
      // When you start typing in the filter nothing will show until it matched something you type
      item.style.display = 'none';
    }
  });
}
