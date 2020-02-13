// let and const
// Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and const

// // John is the pet owner, and his name should be stored differently than the other names.

const owner = { name: 'John', age: 101 };

const runForLoop = ([...pets]) => {
  let petObjects = [];
  for (let i = 0; i < pets.length; i++) {
    let pet = { type: pets[i] };
    pets[i] === 'cat' ? (name = 'fluffy') : (name = 'spot');
    console.log('pet name: ', name);
    pet.name = name;
    petObjects.push(pet);
  }
  console.log('owner: ', owner);
  return petObjects;
};

runForLoop(['cat', 'dog']);

// // ES6 Arrow Functions
// // Task 1
// // Re-write this .map() using an arrow function:

// // Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const carrots = ['bright orange', 'ripe', 'rotten'];

const mapVegetables = arr => {
  return arr.map(carrot => {
    return { type: 'carrot', name: carrot };
  });
};
console.log(mapVegetables(carrots));

// Task 2
// Re-write this .filter() using an arrow function:

const people = [
  {
    name: 'Princess Peach',
    friendly: false
  },
  {
    name: 'Luigi',
    friendly: true
  },
  {
    name: 'Mario',
    friendly: true
  },
  {
    name: 'Bowser',
    friendly: false
  }
];

function filterForFriendly(arr) {
  return arr.filter(person => {
    return person.friendly;
  });
}

console.log(filterForFriendly(people));

// Task 3
// Re-write the following functions to be arrow functions:

const doMathSum = (a, b) => a + b;
console.log(`OUTPUT: doMathSum`, doMathSum(2, 3));

const produceProduct = (a, b) => a * b;
console.log(`OUTPUT: produceProduct`, produceProduct(2, 4));

// Task 4
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

// Hi Kat Stark, how does it feel to be 40?
// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100
// Extra Credit
// Use template literals to build the string

const printString = (firstName = 'Jane', lastName = 'Doe', age = 100) => {
  // Hi Kat Stark, how does it feel to be 40?
  return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
};

console.log(printString());
console.log(printString('Alex', 'George', 32));

// Task 5
// Use the shorthand syntax to make the following filter take up one line.

const animals = [
  {
    type: 'dog',
    name: 'theodore'
  },
  {
    type: 'cat',
    name: 'whiskers'
  },
  {
    type: 'pig',
    name: 'piglet'
  },
  {
    type: 'dog',
    name: 'sparky'
  }
];

const filterForDogs = arr => arr.filter(animal => animal.type === 'dog');

console.log(filterForDogs(animals));

// Template Literals
// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

const welcomeMessage = (
  name = `Janice`,
  location = `Hawaii`,
  footer = `I hope you enjoy your stay!`
) =>
  `
    Hi ${name}!
    Welcome to ${location}. 
    ${footer}
    
  `;

console.log(welcomeMessage());
// Hi Janice!

// Welcome to Hawaii.

// I hope you enjoy your stay!
