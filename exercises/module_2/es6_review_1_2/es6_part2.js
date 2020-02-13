const button = document.getElementById('button');
const output = document.getElementById('output');
const input = document.getElementById('input');
// // change this function to be an arrow function

button.addEventListener('click', () => {
  output.innerText = `You've entered: ${input.value} `;

  !input.value ? (output.innerText = `You didn't enter anything in`) : null;
});

// //-------------------------------------------------------------------------------------------
// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
const collectAnimals = (...animals) => {
  return animals;
};

console.log(collectAnimals('dog', 'cat', 'mouse', 'jackolope', 'platypus'));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// -------------------------------------------------------------------------------------------
// Use destructuring to use the property names as variables:
const vacation = { location: 'Russia', duration: '2 years' };

const parseSentence = ({ location, duration }) => {
  return `We're going to have a good time in ${location} for ${duration}`;
};

console.log(parseSentence(vacation)); // this line will break stuff unless you fix the parameter

// -------------------------------------------------------------------------------------------
// Make the following function more ES6xy.
// Use both the rest and spread operators:
// This function should add as many items to the front of the returned array as the caller of the function wants

const unshift = (array, ...abc) => [...abc, ...array];

console.log(unshift([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd']));

// -------------------------------------------------------------------------------------------
// make "greeting" default to "hello"
const greet = (name = 'enter a name', greeting = 'Hello') =>
  `${greeting}, ${name}`;

console.log(greet('Emily'));
console.log(greet('Emily', 'Good morning'));
