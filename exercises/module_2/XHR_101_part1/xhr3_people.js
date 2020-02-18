// comment this out if you want to see the result in the console
// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// 5 methods i need for an xhr request

//1 xhr.onreadystatechange
//2 xhr.readyState
//3 xhr.status

//4 xhr.responseText -- this is where the server will put the data i requested. Or the error will be stored here if something went wrong

//5 xhr.open() - to set up the request
//6 xhr.send() - to send the request

// list all 10 starwars character names to the document
// xhr.onreadystatechange
// xhr.readyState
// xhr.status
// xhr.responseTextc

// xhr.open()
// xhr.send()

// url: https://swapi.co/api/people/1

const xhr = new XMLHttpRequest();
// method  // url                     // async?
xhr.open('GET', 'https://swapi.co/api/people', true);
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata);
    showData(data.results);
  }
};

function showData(arr) {
  for (let i = 0; i < arr.length; i++) {
    const h1 = document.createElement('h1');
    // add the name of whoever you're currently looping over
    h1.textContent = arr[i].name;
    document.body.appendChild(h1);
    // repeat the process until the end of the names arr
  }
}
