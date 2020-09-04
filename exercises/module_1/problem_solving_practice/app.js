// // Write a function that takes an array of numbers and returns the largest (without using Math.max())

// //function that finds the largest number

// const largestNum = (...nums) => {
//   let largest = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (largest < nums[i]) {
//       largest = nums[i];
//     }
//   }
//   return largest;
// };

// console.log(largestNum(12, 30, 40, 200));

// // Write a function that takes an array of words and a character and returns each word that has that character present.
// function lettersWithStrings(item, character) {
//   let output = [];
//   for (let i = 0; i < item.length; i++) {
//     if (item[i].includes(character)) output.push(item[i]);
//   }
//   return output;
// }
// console.log(lettersWithStrings(['#3', '$$$', 'C%4!', 'Hey!'], '!')); // => ["C%4!", "Hey!"]

// // Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

// const isDivisible = (num1, num2) => (num1 % num2 === 0 ? true : false);

// console.log(isDivisible(4, 2)); // => true
// console.log(isDivisible(9, 3)); // => true
// console.log(isDivisible(15, 4)); // => false

// // Write a function that takes an array of numbers and returns the largest (without using Math.max())

// const largest = (arr) => {
//   let largestNum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (largestNum < arr[i]) {
//       largestNum = arr[i];
//     }
//   }
//   return largestNum;
// };

// console.log(largest([3, 5, 2, 8, 1])); // = 8

// // Write a function that takes an array of words and a character and returns each word that has that character present.

// const lettersWithStrings = (arr, symbol) =>
//   arr.filter((item) => item.includes('!'));

// console.log(lettersWithStrings(['#3', '$$$', 'C%4!', 'Hey!'], '!')); // => ["C%4!", "Hey!"]

// // Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
// const isDivisible = (num1, num2) => num1 % num2 == 0;

// (() => {
//   isDivisible(4, 2); // => true
//   isDivisible(9, 3); // => true
//   isDivisible(15, 4); // => false
// })();

