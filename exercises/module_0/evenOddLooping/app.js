// Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".

// for (let i = 0; i < 101; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is EVEN`);
//   } else {
//     console.log(`${i} is ODD`);
//   }
// }

// // FizzBuzz practice
// const fizzBuzzSwitch = () => {
//   for (let i = 1; i <= 100; i++) {
//     switch (true) {
//       case i % 3 == 0 && i % 5 == 0:
//         console.log(`FizzBuzz`);
//         break;
//       case i % 3 == 0:
//         console.log(`Fizz`);
//         break;

//       case i % 5 == 0:
//         console.log(`Buzz`);
//         break;

//       default:
//         console.log(i);
//         break;
//     }
//   }
// };
// console.log(fizzBuzzSwitch());

// fizzBuzz = () => {
//   for (let i = 0; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log(`FizzBuzz`);
//     } else if (i % 3 == 0) {
//       console.log(`fizz`);
//     } else if (i % 5 == 0) {
//       console.log(`buzz`);
//     } else {
//       console.log(i);
//     }
//   }
// };

// console.log(fizzBuzz());

// fizzBuzzSwitch = () => {
//   for (let i = 0; i <= 100; i++) {
//     switch (true) {
//       case i % 3 == 0 && i % 5 == 0:
//         console.log(`FizzBuzz`);
//         break;
//       case i % 3 == 0:
//         console.log(`Fizz`);
//         break;
//       case i % 5 == 0:
//         console.log(`Buzz`);
//         break;
//       default:
//         console.log(`i`);
//         break;
//     }
//   }
// };
// console.log(fizzBuzzSwitch());

// // let age = prompt(`How old are you?`);

// // age > 21 ? alert(`Old enough to drink`) : alert(`Go home kid`);

// // 3. Write a function that takes in a number as an argument, and returns the string "Even" if the number is even, and "Odd" if the number is odd.
// let num = 2;
// oddEven = num =>
//   num % 2 === 0 ? `${num} is an EVEN number` : `${num} is an ODD number`;

// let result = oddEven(num);

// console.log(result);

// function profit(info) {
//   info = {
//     costPrice: 32.67,
//     sellPrice: 45.0,
//     inventory: 1200
//   };
// }

// // #1
// // Loop through the following array and count how many "computers" there are. Log the final count:

// let count = 0;

let officeItems = [
  'stapler',
  'monitor',
  'computer',
  'desk',
  'lamp',
  'computer',
  'lamp',
  'stapler',
  'computer',
  'computer',
  'computer'
];

// for (let i = 0; i < officeItems.length; i++) {
//   if (officeItems[i] === "computer") {
//     count++;
//   }
// }
// console.log(`there are ${count} computers in the officeItems array`);
// let copy = [];
// officeItems.forEach(item => {
//   if (item === 'computer') copy.push(item);
// });
// console.log(copy);
// #2
// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

// let peopleWhoWantToSeeMadMaxFuryRoad = [
//   {
//     name: "Mike",
//     age: 12,
//     gender: "male"
//   },
//   {
//     name: "Madeline",
//     age: 80,
//     gender: "female"
//   },
//   {
//     name: "Cheryl",
//     age: 22,
//     gender: "female"
//   },
//   {
//     name: "Sam",
//     age: 30,
//     gender: "male"
//   },
//   {
//     name: "Suzy",
//     age: 4,
//     gender: "female"
//   }
// ];

// for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//   // male younger than 18
//   // let gender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender;
//   // let pronoun;
//   if (gender === "male")
//     if (
//       peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 &&
//       peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"
//     ) {
//       console.log(
//         `${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough to see the Mad Max movie. Dont let HIM in.`
//       );
//     } else if (
//       peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 &&
//       peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"
//     ) {
//       console.log(
//         `${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough to see the Mad Max movie. Let HIM in.`
//       );
//       // female younger than 18
//     } else if (
//       peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 &&
//       peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"
//     ) {
//       console.log(
//         `${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough to see the Mad Max movie. Dont let HER in.`
//       );
//     } else if (
//       peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 &&
//       peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"
//     ) {
//       console.log(
//         `${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough to see the Mad Max movie. Let HER in.`
//       );
//     }
// }

// Optional Bonus challenge
// Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.

// The light is off to start with. Log to the console whether or not the light is on at the end.

// [2, 5, 435, 4, 3] // "The light is on"
// [1, 1, 1, 1, 3]   // "The light is on"
// [9, 3, 4, 2]      // "The light is off"

// let myArr = [9, 3, 4, 2];
// // let sum = myArr.reduce((a, b) => a + b, 0);

// let sum = 0;
// for (let i = 0; i < myArr.length; i++) {
//   sum += myArr[i];
// }

// console.log(sum);
// // sum % 2 === 0
// //   ? console.log(`The light is off`)
// //   : console.log(`The light is on`);
