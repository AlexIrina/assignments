// comment this out if you want to see the result in the console
// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// 5 methods i need for an xhr request

//1 xhr.onreadystatechange
//2 xhr.readyState
//3 xhr.status

//4 xhr.responseText -- this is where the server will put the data i requested. Or the error will be stored here if something went wrong

//5 xhr.open() - to set up the request
//6 xhr.send() - to send the request

// url: https://swapi.co/api/people/1

// data received from the server will be stored in this xhr object
const xhr = new XMLHttpRequest();

// 1) tell the xhr object what type of HTTP request im making and where am i sending it
// 1. HTTP method   2. the url  3. async or not
// send async GET request to 'https://swapi.co/api/people/1'
xhr.open('GET', 'https://swapi.co/api/people/1', true);

// 2) send out the open() request
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // response
    // this is where i handle the response from the server when the response comes back to me
    // console.log(xhr.responseText); // receive a giant string back AKA JSON
    // //  i need to convert JSON into JS object
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata); // js now
    console.log(data);
    // calls showData
    showData(data);
  }
};

// HOW TO MAKE THIS DATA SHOW UP ON AN HTML PAGE
function showData(luke) {
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');

  h1.textContent = luke.name;
  h2.textContent = luke.height;

  document.body.appendChild(h1);
  document.body.appendChild(h2);
}

