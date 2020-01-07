const l = console.log;
// Preliminaries

// // ************** Write an if statement that prints "is greater than" if 5 is greater than 3
// if (5 > 3) {
//   console.log(`5 is greater than 3`);
// }
// ternary way
// 5 > 3 ? console.log(`5 is greater than 3`) : console.log(`5 is less than 3`);

// //////////////Write an if statement that prints "is the length" if the length of "cat" is 3

// let pet = `cat`;

// if (pet.length === 3) {
//   console.log(`is the length`);
// }

// Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.

// let cat = `cat`;
// let dog = `dog`;

// if (cat === dog) {
//   console.log(`the same`);
// } else {
//   console.log(`not the same`);
// }

/////////////////////// Using the below object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.

// let person = {
//   name: `Bobby`,
//   age: 12
// };

// // if else
// if (person.age > 18) {
//   console.log(`${person.name} is old enough to go to the movies`);
// } else {
//   console.log(`${person.name} is not old enough to go to the movies`);
// }

// // ternary
// const { age, name } = person;
// const l = console.log;
// person.age > 18
//   ? l(`${person.name} is old enough to go to the movies`)
//   : l(`${person.name} is not old enough to go to the movies`);

////////////////// Using that same object, only allow them into the movie if their name starts with "B"
// ////////////////// Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.

// let person = [
//   {
//     name: `Brian`,
//     age: 23
//   },
//   {
//     name: `Jason`,
//     age: 18
//   },
//   {
//     name: `Bob`,
//     age: 12
//   }
// ];

// for (let i = 0; i < person.length; i++) {
//   if (person[i].name[0] === "B" && person[i].age >= 18) {
//     console.log(`${person[i].name} is allowed to go to the movie`);
//   } else {
//     console.log(`${person[i].name} is not allowed to go to the movie`);
//   }
// }

// // ternary way
// for (let i = 0; i < person.length; i++) {
//   person[i].name[0] === "B" && person[i].age >= 18
//     ? l(`${person[i].name} is allowed to go to the movie`)
//     : l(`${person[i].name} is not allowed to go to the movie`);
// }

// // Silver Medal

// // Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.

// let num = 1;
// let str = "1";

// if (num === str) {
//   console.log(`strict`);
// } else if (num == str) {
//   console.log(`loose`);
// } else {
//   console.log(`not equal at all`);
// }

// // Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4

// let num1 = 1;
// let num2 = 2;
// let num4 = 4;

// if (num1 <= num2 && num2 === num4) {
//   console.log(`yes`);
// } else {
//   console.log(`no`);
// }

// // Gold Medal
// // Gold may take some googling!
// // Write an if statement that checks to see if "dog" is a string
// // Write an if statement that checks to see if "true" is a boolean
// let vals = ["dog", true, "true"];

// for (let i = 0; i < vals.length; i++) {
//   if (typeof vals[i] === "string") {
//     console.log(`${vals[i]} is a string`);
//   } else if (typeof vals[1] === "boolean") {
//     console.log(`${vals[i]} is a boolean`);
//   } else if (typeof vals[i][2] === "string") {
//     console.log(`${vals[i]} is a boolean`);
//   }
// }

//************************** Write an if statement that checks to see if a variable has been defined or not

// let name = "Alex";

// if (name === undefined) {
//   console.log(`${name} is undefined`);
// } else {
//   console.log(`${name} is defined`);
// }

// switch way

// let name = "Alex";

// switch (name) {
//   case undefined:
//     console.log(`name is undefined`);
//     break;

//   case name:
//     console.log(`name is defined it is ${name}`);
//     break;

//   case null:
//     console.log(`name is undeclared `);
//     break;

//   default:
//     console.log(`Hello ${name}`);
// }

// ********************** Write an if statement asking if "s" is greater than 12? Try it with a few more letters and a few numbers.
// let s = [198934894835, 12, 11, 23, 9];

// for (let i = 0; i < s.length; i++) {
//   if (s[i] > 12) {
//     console.log(`${s[i]} is greater than 12`);
//   }
// }

// // function with a ternary operator
// const greaterOrLessThan = s => {
//   // using ternary operator
//   return s > 12
//     ? console.log(`Yes, ${s} is greater than 12`)
//     : console.log(`No, ${s} is not greater than 12`);
// };
// greaterOrLessThan(23);

// // switch
// let s = 23;

// switch (true) {
//   case s < 12:
//     console.log(`s is less than 12`);
//     break;
//   default:
//     console.log(`s is greater than 12`);
// }

// **************Write a ternary statement that console.logs whether a number is odd or even. For example:
// Write your ternary here to log if `myNum` is odd or even.
// It should continue to work correctly even if myNum changes to a different number

// let myNum = 23;
// console.log(myNum % 2 === 0 ? `${myNum} is EVEN` : `${myNum} is ODD`);

// // function for extra practice
// oddEven = myNum => (myNum % 2 === 0 ? `${myNum} is EVEN` : `${myNum} is ODD`);
// l(oddEven(22));
