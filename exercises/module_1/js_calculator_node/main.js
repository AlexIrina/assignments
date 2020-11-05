const ask = require('readline-sync');
// Each function will have 2 parameters, num1, num2

// A function that adds two numbers and returns the result
const add = (num1, num2) => `${num1 + num2}`;


// A function that subtracts two numbers and returns the result
const subtract = (num1, num2) => `${num1 - num2}`;


// A function that multiplies two numbers and returns the result
const multiply = (num1, num2) => `${num1 * num2}`;

// A function that divides two numbers and returns the result
const divide = (num1, num2) => `${num1 / num2}`;


// while (!areValidNumb) {
let num1 = Number(ask.question(`Please enter your first number\n`));

// Please enter your second number (store that number)
let num2 = Number(ask.question(`Please enter your second number\n`));

//message that asks the users choice of operation to perform
const operation = String(
  ask.keyIn('Please enter your operation! Add [a], Subtract [s], Multiply [m] or Divide [d]', {limit: ['asmd']})
);


// Please enter the operation to perform: add, sub, mul, div (then store the operation)
const operationToPerform = () => {
  if (operation === `add` || operation ===  `a`) {
    return `The result is:  ${add(num1, num2)}`;
  } else if (operation === `subtract`|| operation === `s`) {
    return `The result is:  ${subtract(num1, num2)}`;
  } else if (operation === `multiply` || operation === `m`) {
    return `The result is:  ${multiply(num1, num2)}`;
  } else if (operation === `divide` || operation === `d`) {
    return `The result is: ${divide(num1, num2)}`;
  } else {
    return `Invalid operation! Please choose from the following. add, subtract, multiply and divide.`;
  }
};
console.log(operationToPerform());
