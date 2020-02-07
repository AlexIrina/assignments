// Higher order Array methods
// A.K.A functions that take a function as a parameter

// .map()
const myNumbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// .map() sets up a for loop and loops over each item in the numbers array
const result = myNumbersArr.map(function(num) {
  // arr[i]
  return num + 10;
});
// es6
const resultEs6 = myNumbersArr.map(num => num + 10);

// array of objects
const users = [
  {
    name: 'Joe',
    age: 23
  },
  {
    name: 'Steve',
    age: 98
  },
  {
    name: 'Jill',
    age: 2
  }
];

const usersNames = users.map(user => user.name);

console.log(result);
console.log(resultEs6);
console.log(usersNames);
