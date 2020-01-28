const form = document.getElementById('airline-form');
const submit = document.getElementById(`submit`);

function formAlert() {
  let firstName = form.elements['first-name'].value;
  console.log(firstName);
  let lastName = form.elements['last-name'].value;
  console.log(lastName);

  let age = form.elements['age'].value;

  let gender = form.elements['gender'].value;

  let location = form.elements['travel-location'].value;

  let diet = [];

  if (form.elements['vegan'].checked) {
    diet.push(document.getElementById('vegan').value);
  } else if (form.elements['gluten'].checked) {
    diet.push(document.getElementById('gluten').value);
  } else if (form.elements['paleo'].checked) {
    diet.push(document.getElementById('paleo').value);
  }

  alert(
    `First Name: ${firstName} 
      \n Last Name: ${lastName} 
      \nAge: ${age} 
      \nGender: ${gender} 
      \nTravel Location: ${location} 
      \nDiet: ${diet} 
      \nAwesome, now if you die, it won't be an accident..`
  );
}

// A pop up box should appear when you click the submit button as shown in the image above.
submit.addEventListener('click', formAlert);
