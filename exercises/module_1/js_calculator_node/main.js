const readlineSync = require('readline-sync');
// Each function will have 2 parameters, num1, num2

// A function that adds two numbers and returns the result
const add = (num1, num2) => {
  console.log(`The answer is: ${num1 + num2}`);
};

// A function that subtracts two numbers and returns the result
const subtract = (num1, num2) => {
  console.log(`The answer is: ${num1 - num2}`);
};

// A function that multiplies two numbers and returns the result
const multiply = (num1, num2) => {
  console.log(`The answer is: ${num1 * num2}`);
};

// A function that divides two numbers and returns the result
const divide = (num1, num2) => {
  console.log(`The answer is: ${num1 / num2}`);
};

// Your script must have:
// On the console the prompt will print to the user:
// Please enter your first number (store that number)

// const isNumber = (num1, num2) => {
//   if (isNaN(num1)) {
//     console.log(`${num1} is not a number, Please enter a number `);
//     return false;
//   } else {
//     console.log(`${num1}`);
//   }

//   if (isNaN(num2)) {
//     console.log(`${num2} is not a number, Please enter a number `);
//     return false;
//   } else {
//     console.log(`${num2}`);
//   }
//   return true;
// };

// let areValidNumb;

// while (!areValidNumb) {
let num1 = Number(readlineSync.question(`Please enter your first number\n`));

// Please enter your second number (store that number)
let num2 = Number(readlineSync.question(`Please enter your second number\n`));

// areValidNumb = isNumber(num1, num2);
// }

//message that asks the users choice of operation to perform
const operation = String(
  readlineSync.question(`Please enter your operation!\n`)
);

// Please enter the operation to perform: add, sub, mul, div (then store the operation)
const operationToPerform = () => {
  // if user wants to multiply ?
  if (operation === `add`) {
    return `The result is:  ${add(num1, num2)}`;
  } else if (operation === `subtract`) {
    return `The result is:  ${subtract(num1, num2)}`;
  } else if (operation === `multiply`) {
    return `The result is:  ${multiply(num1, num2)}`;
  } else if (operation === `divide`) {
    return `The result is: ${divide(num1, num2)}`;
  } else {
    console.log(
      `Invalid operation! Please choose from the following. Add, subtract, multiply and divide.`
    );
  }
};
operationToPerform();
