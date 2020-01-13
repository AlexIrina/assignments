// // Write a function that accepts two numbers as parameters, and returns the sum.
// const sumOf = (x, y) => x + y;
// console.log(sumOf(2, 3));

// // Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
// let answer;

// const biggestNum = (x, y, z) => {
//   if (x > y && y > z) {
//     answer = console.log(`${x} is the largest number`);
//   } else if (y > x && x > z) {
//     answer = console.log(`${y} is the largest number`);
//   } else {
//     answer = console.log(`${z} is the largest number`);
//   }
// };

// console.log(biggestNum(23, 21, 100));

// // faster way with a method
// const theLargest = (num1, num2, num3) => Math.max(num1, num2, num3);
// console.log(theLargest(23, 333, 444));

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
// let result;

// let evenOdd = num => {
//   if (num % 2 === 0) {
//     result = console.log(`${num} is EVEN`);
//   } else {
//     result = console.log(`${num} is ODD`);
//   }
// };

// console.log(evenOdd(22));

// or
// let result = ``;
// const oddEven = num =>
//   num % 2 === 0 ? (result += `${num} is EVEN`) : (result += `${num} is ODD`);
// console.log(oddEven(23));

// // Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

// const isEven = num => (num % 2 === 0 ? `even` : `odd`);

// (test = () => {
//   console.log(isEven(2));
//   console.log(isEven(3));
//   console.log(isEven(-3));
// })();

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

// let str = `The quick brown fox jumps over the lazy dog.`;
// //splitted string
// let splittedStr = str.length / 2;

// const checkStrLength = str => {
//   if (str.length <= 20) {
//     return str + str;
//   } else {
//     return str.slice(0, splittedStr);
//   }
// };
// console.log(checkStrLength(str));
