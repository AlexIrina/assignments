// Higher Order Functions
// callback is a function passed into another function

// doMath, sum and subtract are the high order functions that require the CALLBACK function for them to work. So that it can call it with the data callback(num1, num2) and return the value
function doMath(num1, num2, callback) {
  // returns a callback function...sum or/and subtract
  return callback(num1, num2);
}

function sum(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

// below SUM and SUBTRACT are the callback functions
console.log(doMath(5, 10, sum));
console.log(doMath(5, 10, subtract));

function test(num1, num2, sum) {
  // returns a callback function...sum or/and subtract
  return sum(num1, num2);
}
console.log(test(5, 10, sum));
