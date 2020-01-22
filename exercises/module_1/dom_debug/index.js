// Goal
// You'll want to be able to add new items to the list and change the background of each item separately. The text for each item should be from the input box.

// It's up to you if you want to start the background of each item white or red.
// colors array
const colors = ['red', 'blue', 'green', 'orange'];

// this function creates a div on click
document.getElementById('add').addEventListener('click', function(e) {
  const subItem = createSubItem(e);
  document.getElementById('list').appendChild(subItem);
});

// dropdown
function createDropDown() {
  const dropDown = document.createElement('select');

  for (let i = 0; i < colors.length; i++) {
    const option = document.createElement('option');
    option.innerHTML = colors[i];
    option.value = colors[i];
    // can add a default value here
    // appending option to the dropdown
    dropDown.appendChild(option);
    console.log(option);
  }

  dropDown.addEventListener('change', function(e) {
    // parent vs parentNode
    e.target.parentNode.style.backgroundColor = e.target.value;
  });
  return dropDown;
}

function createSubItem(e) {
  const subItem = document.createElement('div');
  var subItemValue = document.getElementById('input');
  subItem.textContent = subItemValue.value;
  //   console.log(
  //     `OUTPUT: createSubItem -> subItem.textContent`,
  //     subItem.textContent
  //   );
  const dropDown = createDropDown();
  console.dir(dropDown);
  subItem.appendChild(dropDown);
  dropDown.parentElement.style.backgroundColor = 'red';
  subItem.setAttribute('class', 'subItem');
  return subItem;
}
