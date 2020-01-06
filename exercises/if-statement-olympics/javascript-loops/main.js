// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }

// let faveFoods = ["pizza", "pasta", "ice cream", "banana"];

// for (let i = 0; i < faveFoods.length; i++) {
//   console.log(faveFoods[i]);
// }

// console all even numbers
// var numbers = [1, 2, 3, 4, 5, 6];

// for (var i = 1; i <= numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

// /*
// *************#Assignment - Even/Odd looping

//  * Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".

//  */

// for (let i = 0; i <= 100; i++) {
//   console.log([i] % 2 === 0 ? `${i}: even` : `${i}: odd`);
// }

/*
*******************#Assignment - Loops and Arrays practice

* This assignment will give you practice in using for loops and their "i" variable 
to loop through and array of data.
*/

// // Loop through the following array and count how many "computers" there are. Log the final count:
// let officeItems = [
//   "stapler",
//   "monitor",
//   "computer",
//   "desk",
//   "lamp",
//   "computer",
//   "lamp",
//   "stapler",
//   "computer",
//   "computer"
// ];

// let count = 0;
// for (let i = 0; i < officeItems.length; i++) {
//   if (officeItems[i] === "computer") {
//     count++;
//   }
// }

// console.log(`There are ${count} computers in the officeItems array!`);

// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

let peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },
  {
    name: "Madeline",
    age: 80,
    gender: "female"
  },
  {
    name: "Cheryl",
    age: 22,
    gender: "female"
  },
  {
    name: "Sam",
    age: 30,
    gender: "male"
  },
  {
    name: "Suzy",
    age: 4,
    gender: "female"
  }
];
// male female
let gender;

for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  // message with name
  let message = peopleWhoWantToSeeMadMaxFuryRoad[i].name;

  // male or female
  peopleWhoWantToSeeMadMaxFuryRoad[i].gender === `female`
    ? (gender = `her`)
    : (gender = `him`);

  // checks age
  peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18
    ? console.log(
        `${message} is not old enough to watch the movie. Dont let ${gender} in `
      )
    : console.log(
        `${message} is old enough to watch the movie. Let ${gender} in `
      );
}

// #3: OPTIONAL BONUS CHALLENGE
// Imagine you have a button that toggles a light on and off. Loop through the following array
// of numbers and toggle the button the numbers of times for each number.
// The array [2, 3, 2] would toggle the button 7 times.

// The light is off to start with. Log to the console whether or not the light is on at the end.
// Sample Arrays:

//  [2, 5, 435, 4, 3] // "The light is on"
//  [1, 1, 1, 1, 3]   // "The light is on"
//  [9, 3, 4, 2]      // "The light is off"

let lightIsOn;
let myArray = [1, 1, 1, 1, 3];

// add all numbers

const sum = myArray => myArray.reduce((a, b) => a + b, 0);
// The second parameter of the reduce method is the initial value we wish to use. We’ve set our initial value to zero which allows us to use empty arrays with our arrSum functions.
// In other words, we are simply going to start with zero and one by one add each value of the array to our initial value until we’ve looped through the entire array. When done, the accumulator value will be returned

// to check if light is on or off

let check = sum(myArray);

if (check % 2) {
  lightIsOn = true;
  console.log(`the light is on`);
} else {
  lightIsOn = false;
  console.log(`the light is off`);
}
