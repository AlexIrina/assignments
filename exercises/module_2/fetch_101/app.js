// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// Fetch is a Native API that popular for HTTP requests

// Fetch
// url: "https://rickandmortyapi.com/api/character"

// 1 call fetch
// 2 In the parentheses put where do you want to fetch the data from
// Fetch is doing a GET request by default
// response is whats coming back from the server
// in .then() put what data format were you expecting to use in your application ...its .json
// .json method reads the response as json and parses the response so i can use it as JS
// .then() creates a new Promise that resolves to a .then()
// 2nd .then() is the JS version of the first response

fetch('https://rickandmortyapi.com/api/character', {
  //here im configuring what the fetch is doing
  method: 'get' //CRUD
  // whatever i want to show up in the body when the post is completed
  // body: JSON.stringify({})
})
  .then(response => response.json())
  .then(response => {
    for (let i = 0; i < response.results.length; i++) {
      let h1 = document.createElement('h1');
      h1.textContent = response.results[i].name;
      document.body.appendChild(h1);
    }
  })
  .catch(error => console.log(error));
