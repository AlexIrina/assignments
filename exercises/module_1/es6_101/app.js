// ES6 part one

// const and let
// constant --- cant be changed
// let -- replacement of var and its bracket scoped
// const firstName = 'joe';
// // firstName = "steve"
// let age = 12;
// // age = 13 -- age will change to 14

// // Global, Local, Bracket
// function someFunc() {
//   let a;
//   if (2 === 2) {
//     return (a = 'hello');
//   }
//   // console.log(a);s
// }

// // console.log(someFunc());

// // spread and rest
// REST is for gathering content for functions
// SPREAD is for spreading content

// function numbers(...nums) {
//   // console.log(nums);
// }
// maxNumber(1, 2, 3, 4, 5);

// // with an arrays
// const colors1 = ['red', 'blue'];
// const colors2 = ['yellow', 'green'];

// const allColors = [...colors1, ...colors2];
// // logs an a new array with all numbers
// // console.log(allColors);

// // with an object
// let person = {
//   name: `Alex`,
//   age: 32
// };
// // copies the person into a new object with the spread
// const personCopy = { ...person };
// console.log(personCopy);

// // template literals
// const name = 'joe';
// // 'hi ' + name; --- old way
// const greeting = `hi ${name}`;

// // import & export
// // will only work with a bundler such as webpack
// require(); //imports files using node
// module.exports; //exports files or data using node

// ES6 part 2

// // fat arrow functions
// //function declaration
// const sum = (x, y) => {
//   return x + y;
// };
//function expression
// const sum2 = word => `es6 is ${word}`;

// es6 way to call a function users on click event
// addEventListener('click', () => {});

// // object literals
// const blue = 'blue';
// const green = 'green';
// const red = 'red';

// const colors = { blue, green, red };
// console.log(`OUTPUT: colors`, colors);

// // object destructuring
// // let you pull the data that you need by the name
// const user = {
//   username = `Alex`,
//   age: 32,
//   _id: `ekjmwekfmd`
// }
// // how to do it?
// // Pull out of the user object the following data
// order doesn't matter in array
// const {username, age, _id} = user

// console.log(username)

// // destructuring an array
// // order matters in array
// const names = [`Alex`, `John`, `Brad`];

// const [alex, john, brad] = names;

// // default parameters
// // are for functions
// // num1 has a default number of 5 and num2 has a default num of 10
// const sum = (num1 = 5, num2 = 10) => {
//   return num1 + num2;
// };
// console.log(sum(7, 12)); //19 
