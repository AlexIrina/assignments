// Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".

for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is EVEN`);
  } else {
    console.log(`${i} is ODD`);
  }
}

// FizzBuzz practice
const fizzBuzzSwitch = () => {
  for (let i = 1; i <= 100; i++) {
    switch (true) {
      case i % 3 == 0 && i % 5 == 0:
        console.log(`FizzBuzz`);
        break;
      case i % 3 == 0:
        console.log(`Fizz`);
        break;

      case i % 5 == 0:
        console.log(`Buzz`);
        break;

      default:
        console.log(i);
        break;
    }
  }
};
console.log(fizzBuzzSwitch());

fizzBuzz = () => {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`FizzBuzz`);
    } else if (i % 3 == 0) {
      console.log(`fizz`);
    } else if (i % 5 == 0) {
      console.log(`buzz`);
    } else {
      console.log(i);
    }
  }
};

console.log(fizzBuzz());

fizzBuzzSwitch = () => {
  for (let i = 0; i <= 100; i++) {
    switch (true) {
      case i % 3 == 0 && i % 5 == 0:
        console.log(`FizzBuzz`);
        break;
      case i % 3 == 0:
        console.log(`Fizz`);
        break;
      case i % 5 == 0:
        console.log(`Buzz`);
        break;
      default:
        console.log(`i`);
        break;
    }
  }
};
console.log(fizzBuzzSwitch());

// let age = prompt(`How old are you?`);

// age > 21 ? alert(`Old enough to drink`) : alert(`Go home kid`);

// 3. Write a function that takes in a number as an argument, and returns the string "Even" if the number is even, and "Odd" if the number is odd.
let num = 2;
oddEven = num =>
  num % 2 === 0 ? `${num} is an EVEN number` : `${num} is an ODD number`;

let result = oddEven(num);

console.log(result);

function profit(info) {
  info = {
    costPrice: 32.67,
    sellPrice: 45.0,
    inventory: 1200
  };
}
