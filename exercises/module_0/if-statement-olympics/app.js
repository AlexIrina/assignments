// If Statement Olympics

/*

Write an if statement that prints "is greater than" if 5 is greater than 3
Write an if statement that prints "is the length" if the length of "cat" is 3
Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.
Bronze Medal
Using the below object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.
var person = {
  name: "Bobby",
  age: 12
}
Using that same object, only allow them into the movie if their name starts with "B"
Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.
Silver Medal
Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4
Gold Medal
Gold may take some googling!

Write an if statement that checks to see if "dog" is a string
Write an if statement that checks to see if "true" is a boolean
Write an if statement that checks to see if a variable has been defined or not
Write an if statement asking if "s" greater than 12?
Try it with a few more letters and a few numbers.

Write a ternary statement that console.logs whether a number is odd or even. For example:
var myNum = 10;
// Write your ternary here to log if `myNum` is odd or even.
(It should continue to work correctly even if myNum changes to a different number).
*/

// Preliminaries

// // ************** Write an if statement that prints "is greater than" if 5 is greater than 3
// if (5 > 3) {
//   console.log(`5 is greater than 3`);
// }

// // **************** Write an if statement that prints "is the length" if the length of "cat" is 3

// let cat = {
//   length: 3
// };

// if (cat.length === 3) {
//   console.log("is the length");
// } else {
//   console.log("you got someone elses cat bro!");
// }

// //************************** Write an if statement that checks to see if a variable has been defined or not
// let name = "Alex";

// switch (name) {
//   case undefined:
//     console.log("name is undefined");
//     break;
//   case name:
//     console.log("name is defined");
//     break;
//   default:
//     console.log(`Hello ${name}`);
// }

// // ********************** Write an if statement asking if "s" is greater than 12? Try it with a few more letters and a few numbers.
// let s = 198934894835;

// // bellow will return less than

// let x = 11.9;
// let y = 11;

// const greaterOrLessThan = y => {
//   // using ternary operator
//   return y > 12
//     ? console.log(`Yes, ${y} is greater than 12`)
//     : console.log(`No, ${y} is not greater than 12`);
// };
// greaterOrLessThan(y);

//using switch statement

// let s = 23;
// let x;
// let y;
// switch (true) {
//   case s > 12:
//     console.log(`S is greater than 12`);
//     break;
//   default:
//     console.log(`S is less than 12`);
// }

// **************Write a ternary statement that console.logs whether a number is odd or even. For example:
// Write your ternary here to log if `myNum` is odd or even.
// It should continue to work correctly even if myNum changes to a different number
// let myNum;
// console.log(myNum % 2 === 0 ? `${myNum} is EVEN` : `${myNum} is ODD`);

//heres a function for fun
// const OddOrEven = num =>
//   console.log(num % 2 === 0 ? `${num} is EVEN` : `${num} is ODD`);
// OddOrEven(23);

// FizzBuzz
// function fizzBuzzSwitch() {
//   for (var i = 1; i <= 100; i++) {
//     switch (true) {

//       case i % 3 == 0 && i % 5 == 0:
//         console.log(‘FizzBuzz’);
//         break;
//       case i % 3 == 0:
//         console.log(‘Fizz’);
//         break;

//       case i % 5 == 0:
//         console.log(‘Buzz’);
//         break;

//       default:
//         console.log(i);
//         break;
//     }
//   }
// }

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

// function fizzBuzzSwitch() {
//   for (var i = 0; i <= 100; i++) {
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
//     }
//   }
// }

// console.log(fizzBuzzSwitch());

// let age = prompt(`How old are you?`);

// age > 21 ? alert(`Old enough to drink`) : alert(`Go home kid`);

// // 3. Write a function that takes in a number as an argument, and returns the string "Even" if the number is even, and "Odd" if the number is odd.
// let num = 2;
// oddEven = num =>
//   num % 2 === 0 ? `${num} is an EVEN number` : `${num} is an ODD number`;

// let result = oddEven(num);

// console.log(result);

function profit(info) {
  info = {
    costPrice: 32.67,
    sellPrice: 45.0,
    inventory: 1200
  };
}
