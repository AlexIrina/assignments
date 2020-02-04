const form = document.myForm;

form.addEventListener('submit', e => {
  e.preventDefault();
  // first name
  const firstName = form.firstName;
  // console.log(firstName.value);
  // last name
  const lastName = form.lastName;
  // console.log(lastName.value);
  // age
  const usersAge = form.age.value;
  // console.log(usersAge);
  // gender
  const gender = form.gender.value;
  // console.log(gender);
  // Location traveling to
  const travelTo = form.city.value;
  // console.log(travelTo);
  // Dietary restrictions

  // 1 returns an array of the food restrictions checkboxes.
  // console.log(form.restrictions); test
  // 2 I need to find out which ones are checked with a for loop
  const checkedInputs = [];
  for (let i = 0; i < form.restrictions.length; i++) {
    // 5 push the checked value into this array
    // lets me loop over each item thats checked
    // Use .checked... It's property of the checked boxes in your html
    // 4 Checks if current iteration is checked.
    if (form.restrictions[i].checked) {
      //if true
      //If its is checked then get its value
      checkedInputs.push(form.restrictions[i].value);
    }
  }
  // console.log(checkedInputs);

  // SELECT OPTION INPUTS
  // console.log(form.city.value); test
  // if (form.city.value === 'Moscow') {
  //   // console.log(`Enjoy your stay in Moscow, Russia!`);
  // } else if (form.city.value === 'Peter') {
  //   // console.log(`Enjoy your stay in Saint Petersburg, Russia!`);
  // } else if (form.city.value === 'Kostroma') {
  //   // console.log(`Enjoy your stay in Kostroma, Russia!`);
  // }

  alert(`
      First Name: ${firstName.value}
      Last Name: ${lastName.value}
      Age: ${usersAge}
      Gender: ${gender}
      Location : ${travelTo}
      Food Restrictions: ${checkedInputs}

      Have a wonderful time in ${travelTo}, ${firstName.value} ${lastName.value}!
      From Skyline Airlines.
`);
});
