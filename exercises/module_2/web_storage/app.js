// Web Storage
/*
 Go to Applications and click Local Storage in dev tools to see it
 */

//  JSON - Javascript Object Notation --- turns arrays and objects into giant strings
// when you receive that string you can turn it back into a javascript object using JSON.parse()
// local storage wants items saved with JSON not vanilla javascript

// JSON.stringify => turning JS into JSON ---save to ls

// JSON.parse => Turns JSON into JS  ---return from ls

////////////// SETTER --setItem() -- Saves data into local storage (key = value pairs)
// primitive data types
localStorage.setItem('name', 'steve');
localStorage.setItem('age', 10);
localStorage.setItem('isAlive', true);
// complex data types

// array
// localStorage.setItem('friends', ['alex', 'irina', 'bob']); //wrong way of saving to local storage
localStorage.setItem('friends', JSON.stringify(['alex', 'Irina', 'bob'])); //wrong way of saving to local storage

// object
localStorage.setItem(
  'address',
  JSON.stringify({
    city: 'Millcreek',
    state: 'Utah',
    zipcode: 84106
  })
);

// GETTER -- Gets saved data from local storage
// get Steve from ls
const name = localStorage.getItem('name');
console.log(name); //steve is returned from ls
const age = localStorage.getItem('age');
const isAlive = localStorage.getItem('isAlive');

// const friends = localStorage.getItem('friends'); // --returns a string --wrong way of doing it
// console.log(typeof friends); //string

const friends = JSON.parse(localStorage.getItem('friends')); //returns an object
console.log(friends[1]);

const address = JSON.parse(localStorage.getItem('address'));
console.log(`OUTPUT: address`, address);

// Remove items from local storage
// localStorage.removeItem("age")
