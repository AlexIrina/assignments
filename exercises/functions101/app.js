// // Write a function that accepts two numbers as parameters, and returns the sum.

// const addMe = (num1, num2) => num1 + num2;
// console.log(addMe(2, 5));
// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

// const isTheLargest = (one, two, three) => {
//   if (one < two && two < three) {
//     answer = console.log(`${three} is the largerst`);
//   } else if (one < two && two > three) {
//     answer = console.log(`${two} is the largest`);
//   } else {
//     answer = console.log(`${one} is the largest`);
//   }
// };
// console.log(isTheLargest(5, 0, -3));

// //************ or
// const theLargest = (num1, num2, num3) =>
//   console.log(Math.max(num1, num2, num3));

// theLargest(-2, -3, -4);

// // Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

// const isEven = num => (num % 2 === 0 ? `even` : `odd`);

// (test = () => {
//   console.log(isEven(2));
//   console.log(isEven(3));
//   console.log(isEven(-3));
// })();

// // Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

// let str = `The quick brown fox jumps over the lazy dog.`;

// const stringMix = str => {
//   // if (str.length <= 20) {
//   //   return str + str;
//   // } else {
//   //   // split
//   //   // 0 starts from the beggining
//   //   return str.slice(0, splitedStr);
//   // }

//   // es6
//   let splitedStr = str.length / 2;
//   return str.length <= 20 ? str + str : str.slice(0, splitedStr);
// };

// console.log(stringMix(str));

// // Optional Challenge
// // Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
// // The first numbers are:
// let fibonacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

// // So if n were 6, the sum of 1+1+2+3+5+8 would be 20

// // Don't hardcode the sequence.

// // Create an array with all the numbers in sequence up to n

// // Create an array with all the numbers in sequence up to n
// let n = 12;

// // Basic Fibonacci recursive function
// const fibonacci = n => {
//   if (n <= 1) {
//     return 1;
//   } else {
//     // -1 moves 1 spot -2 moves 2 spots to the left
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// };

// // First find the number in the 'n' position of the fibonacci sequence
// console.log(
//   "\n The number in position " +
//     n +
//     " of the fibonacci sequence = " +
//     fibonacci(n - 1)
// );

// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string. ( White spaces count as a letter )
