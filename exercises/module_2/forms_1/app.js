////////////////////How to select the form from HTML

const form = document['my-form'];

// Submit event
form.addEventListener('submit', function(event) {
  // the event prevents the page from refreshing every time the user clicks the submit button
  event.preventDefault();

  // this gets get the first name.
  // Need to grab the name of the input and get its value
  const fName = form.firstName.value;

  // grabs last name
  const lName = form.lastName.value;

  // to clear out the users input after submit is fired
  form.lastName.value = '';
  form.firstName.value = '';
  console.log(`Users name is ${fName} ${lName}`);

  //////////////                         Now i need to show it in the window using this 3 steps

  // 1. Create an element
  // <h1></h1>
  const h1 = document.createElement('h1');

  // 2. Put text content of fName and lName into the <h1></h1>
  // <h1>Alex George</h1>
  h1.textContent = `${fName} ${lName}`;

  // Append the created element to the page/DOM
  document.getElementsByTagName('body')[0].append(h1);
  // now you can see the users first and last name on the page
});
