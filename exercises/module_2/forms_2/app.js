const form = document.myForm;

form.addEventListener('submit', e => {
  e.preventDefault();
  // Circle Radio Inputs
  // return genders value
  console.log(form.gender.value);

  // // Checked Box Inputs
  // 1 returns an array of the Games Movies checkboxes. I need to find out which ones are checked
  console.log(form.entertainment);

  //2 for loop
  for (let i = 0; i < form.entertainment.length; i++) {
    // 5 push the checked value into this array
    const checkedInputs = [];

    // lets me loop over each item thats checked
    // 3 .checked property of thr checked boxes
    // console.log(form.entertainment[i].checked);
    // check boxes in the html

    // 4 Checks if current iteration is checked.
    if (form.entertainment[i].checked) {
      //if true
      //If its is checked then get its value
      checkedInputs.push(form.entertainment[i].value);
    }
  }
  console.log(checkedInputs);

  // checked box input ends here

  // SELECT OPTION INPUTS
  // console.log(form.city.value);
  // if (form.city.value === 'moscow') {
  //   console.log(`Lets go to Moscow!`);
  // } else if (form.city.value === 'sudislavl') {
  //   console.log(`Ive been here!`);
  // } else if (form.city.value === 'kostroma') {
  //   console.log(`Best city on earth`);
  // }
});
