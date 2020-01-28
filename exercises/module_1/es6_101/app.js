// ES6 part one
// ES6 is an update to js that happened in 2015
//  ES^ makes tools and tasks easier and more controlled

// const and let

// ALWAYS declare things as const unless you know they are going to change

// constant --- cant be changed
// let -- replacement of var and its bracket scoped

// const firstName = 'joe';
// // firstName = "steve" //---not changed
// let age = 12;
// // age = 13 //-- age is changed to 14

// 2 Basic Scopes

// Local is anything within a function/objet/ data type

// Global is anything outside the function/objet/ data type

// Let and Const are bracket scoped
// meaning the variable lives in the nearest set of curly brackets where the variable lives

// // Global, Local, Bracket
// function someFunc() {
//   let a;
//   if (2 === 2) {
//     return (a = 'hello');
//   }
//   // console.log(a);
// }

// console.log(someFunc());

// spread and rest
// REST is for gathering content for functions and puts it into an array

// //REST
// function maxNumber(...nums) {
//   // console.log(nums);
// }
// maxNumber(1, 2, 3, 4, 5);

// // SPREAD
// const colors1 = ['red', 'blue'];
// const colors2 = ['yellow', 'green'];

// const allColors = [...colors1, ...colors2];
// // logs an a new array with all numbers
// console.log(allColors);

// // with an object
// let person = {
//   name: `Alex`,
//   age: 32
// };

// // spread
// // copies the person into a new object with the spread
// const personCopy = { ...person };
// console.log(personCopy);

// // template literals
// const name = 'joe';
// // 'hi ' + name; --- old way
// const greeting = `hi ${name}`;

// import & export
// will only work with a bundler such as webpack
// Webpack takes all the code and makes that code readable to the browser

// // used in Node.js
// require(); //imports files using node
// module.exports; //exports files or data using node

// ES6 part 2

// // fat arrow functions
// //function declaration
// const sum = (x, y) => {
//   return x + y;
// };
// function expression

// const message = word => console.log(`ES6 is ${word}`);
// message(`Awesome!`);

// // es6 way to call a function on users click event
// button.addEventListener('click', () => `You clicked a button`);

// // object literals
// // is building variables from existing data
// const blue = 'blue';
// const green = 'green';
// const red = 'red';

// // ES6 way creates a key value pair for you
// const colors = { blue, green, red };
// console.log(`OUTPUT: colors`, colors);

// object destructuring
// lets you pull the data that you need by the name

// const alex = {
//   username: `Alex`,
//   age: 32,
//   _id: `ekjmwekfmd`
// };

// const james = {
//   username: `James`,
//   age: 65,
//   _id: `234234234234`
// };

// // how to do it?
// // Pull out of the user object the following data
// // order doesn't matter in an object
// let { username, age, _id } = james;

// const userInfo = james => {
//   return `Users Name is: ${username},
//   Users Age is: ${age},
//   Users Id is: ${_id}`;
// };

// console.log(userInfo(james));

// // destructuring an array
// // order matters in array
// const names = [`Alex`, `John`, `Brad`];

// const [alex, john, brad] = names;

// const userName = names => {
//   return `Users Name is ${names}`;
// };

// //console.log(userName(john));

// // default parameters are for functions
// //  num1 has a default number of 5 and num2 has a default num of 10
// //  accounts for missing parameters
// const sum = (num1 = 5, num2 = 10) => {
//   return num1 + num2; //will return 15 is the user doesn't put anything in
// };
// console.log(sum()); //15
// console.log(sum(2, 12)); //14
// console.log(sum(2)); //12
