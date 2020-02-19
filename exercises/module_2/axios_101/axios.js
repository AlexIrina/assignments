// Get requests with axios
// url: https://api.vschool.io/<yourname>/todo
// Axios is Promise based so i need to use .then() and .catch() methods to see if it all went well or if theres an error

// GET request with Axios
// Get All
// Gets me an array
axios
  .get('https://api.vschool.io/alex/todo')
  .then(res => {
    for (let i = 0; i < res.data.length; i++) {
      let h1 = document.createElement('h1');
      h1.textContent = res.data[i].title;
      // this will output it to the console
      document.body.appendChild(h1);
    }
  })
  .catch(err => console.log(err));

// // Get One
// // the url needs an (_id) from an existing data base
// // Gets me an a single object
axios
  .get('https://api.vschool.io/alex/todo/5e4c1b03f468d266b6c88bb5')
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
