//Grabs the form
const form = document.myForm;

// Grab all the inputs
const bobombsInput = form.bobombsInput;
const goombasInput = form.goombasInput;
const cheepcheepsInput = form.cheepcheepsInput;

// grabs the result output
const outputResult = form.result;

// // grab each character's div so that it can be clicked
// const bobomb = document.bobomb;
// const goomba = document.goomba;
// const cheepcheep = document.cheepcheep;

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

  // Return the grand total:
  // Bob-ombs are worth 7 coins each
  // Goombas are worth 5 coins each
  // Cheep-cheeps are worth 11 coins each
  const result =
    Number(bobombsInput.value) * 7 +
    Number(goombasInput.value) * 5 +
    Number(cheepcheepsInput.value) * 11;

  // update the output to display the total
  outputResult.value = result;

  // reset all the fields after submit is clicked
  bobombsInput.value = '';
  goombasInput.value = '';
  cheepcheepsInput.value = '';

  // document.body.style.backgroundImage = "url('images/bgimage.jpg')";

  // // resets background image
  // document.body.style.backgroundColor = 'bisque';
}

// When a character is clicked, add 1 to its field
// str holds value for "bobomb", "goomba" or "cheepcheep"
// to keep track
function addOne(str) {
  if (str === 'bobombs') {
    bobombsInput.value = Number(bobombsInput.value) + 1;
  } else if (str === 'goombas') {
    goombasInput.value = Number(goombasInput.value) + 1;
  } else if (str === 'cheepcheeps') {
    cheepcheepsInput.value = Number(cheepcheepsInput.value) + 1;
  }
}
