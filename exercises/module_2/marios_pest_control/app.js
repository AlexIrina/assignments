//Grabs the form
const form = document['my-form'];

// // Grab all the inputs
const bobombsInput = form.bobombsInput;
const goombasInput = form.goombasInput;
const cheepcheepsInput = form.cheepcheepsInput;

// // grabs the result output
const outputResult = form['result'];

// Create a submit event listener for the whole form
form.addEventListener('submit', addItAllUp);

// Add all the values and return the result
function addItAllUp(event) {
  // prevent the page auto-refreshing on submit
  event.preventDefault();

  // first initialize all fields that haven't been touched
  if (bobombsInput.value === '') {
    bobombsInput.value = 0;
  }
  if (goombasInput.value === '') {
    goombasInput.value = 0;
  }
  if (cheepcheepsInput.value === '') {
    cheepcheepsInput.value = 0;
  }

  // // Return the grand total:
  // // Bob-ombs are worth 7 coins each
  // // Goombas are worth 5 coins each
  // // Cheep-cheeps are worth 11 coins each
  const result =
    Number(bobombsInput.value) * 7 +
    Number(goombasInput.value) * 5 +
    Number(cheepcheepsInput.value) * 11;

  // // update the output to display the total
  outputResult.value = result;

  // // reset all the fields after submit is clicked
  bobombsInput.value = '';
  goombasInput.value = '';
  cheepcheepsInput.value = '';

  result.value = 0;
}

// // When a character is clicked, add 1 to its field
// // str holds value for "bobomb", "goomba" or "cheepcheep"
// // to keep track
function addOne(str) {
  if (str === 'bobombs') {
    bobombsInput.value = Number(bobombsInput.value) + 1;
  } else if (str === 'goombas') {
    goombasInput.value = Number(goombasInput.value) + 1;
  } else if (str === 'cheepcheeps') {
    cheepcheepsInput.value = Number(cheepcheepsInput.value) + 1;
  }
}

//  // 1 . <h1></h1>
//  const h1 = document.createElement('h1')
//  // 2. <h1>Harry Potter</h1>
//  h1.textContent = firstName + " " + lastName
//  // 3. Append
//  document.getElementsByTagName("body")[0].append(h1)
