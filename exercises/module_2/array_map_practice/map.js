// // Use the built-in .map() method on arrays to solve all of these problems
// // Feel free to copy and paste the function and tests in this assignment.

// // 1) Make an array of numbers that are doubles of the first array
// const doubleNumbers = arr => arr.map(num => num * 2);
// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// // 2) Take an array of numbers and make them strings
// const stringItUp = arr => arr.map(num => String(num));
// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// // 3) Capitalize each of an array of names
// const capitalizeNames = arr =>
//   arr.map(name => name.charAt(0).toUpperCase() + name.substr(1).toLowerCase());

// console.log(capitalizeNames(['john', 'JACOB', 'jinGleHeimer', 'schmidt'])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// // 4) Make an array of strings of the names
// const namesOnly = arr => arr.map(person => person.name);

// console.log(
//   namesOnly([
//     {
//       name: 'Angelina Jolie',
//       age: 80
//     },
//     {
//       name: 'Eric Jones',
//       age: 2
//     },
//     {
//       name: 'Paris Hilton',
//       age: 5
//     },
//     {
//       name: 'Kanye West',
//       age: 16
//     },
//     {
//       name: 'Bob Ziroll',
//       age: 100
//     }
//   ])
// );
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// // 5) Make an array of strings of the names saying whether or not they can go to The Matrix
// const makeStrings = arr => {
//   return arr.map(function(person) {
//     if (person.age > 18) {
//       return `${person.name} can go to The Matrix.`;
//     } else {
//       return `${person.name} is under age!!`;
//     }
//   });
// };

// console.log(
//   makeStrings([
//     {
//       name: 'Angelina Jolie',
//       age: 80
//     },
//     {
//       name: 'Eric Jones',
//       age: 2
//     },
//     {
//       name: 'Paris Hilton',
//       age: 5
//     },
//     {
//       name: 'Kayne West',
//       age: 16
//     },
//     {
//       name: 'Bob Ziroll',
//       age: 100
//     }
//   ])
// );
// // ["Angelina Jolie can go to The Matrix",
// // "Eric Jones is under age!!",
// // "Paris Hilton is under age!!",
// // "Kayne West is under age!!",
// // "Bob Ziroll can go to The Matrix"]

// 6) Make an array of the names in h1s, and the ages in h2s
// const h1 = document.createElement('h1');
// const h2 = document.createElement('h2');
// let p = document.createTextNode('This is a paragraph.'); // Create a text node
// h1.appendChild(p);
// console.log(h1);

const readyToPutInTheDOM = arr =>
  arr.map(person => `<h1>${person.name}</h1> <h2>${person.age}</h2> `);

console.log(
  readyToPutInTheDOM([
    {
      name: 'Angelina Jolie',
      age: 80
    },
    {
      name: 'Eric Jones',
      age: 2
    },
    {
      name: 'Paris Hilton',
      age: 5
    },
    {
      name: 'Kayne West',
      age: 16
    },
    {
      name: 'Bob Ziroll',
      age: 100
    }
  ])
);
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
