// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

// const test = undefined;

const collectAnimals = (/*test = 'test',*/ ...animals) => {
  return [/*test , */ ...animals];
};

console.log(
  collectAnimals(/*test ,*/ 'dog', 'cat', 'mouse', 'jackolope', 'platypus')
);
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// The Object literal notation is basically an array of key:value pairs, with a colon separating the keys and values

// Write a function that returns a food object with the array names as properties using Object Literals:
const combineFruit = (fruit, sweets, vegetables) => ({
  fruit: [...fruit],
  sweets: sweets,
  vegetables
});

console.log(combineFruit(['apple', 'pear'], ['cake', 'pie'], ['carrot']));

// Use destructuring to use the property names as variables. Destructure the object in the parameter:

// const vacation = {
//   location: 'Burly Idaho',
//   duration: '2 weeks'
// };

// function parseSentence(_________) {
//   return `We're going to have a good time in ${location} for ${duration}`;
// }

// What does destructuring mean? It's a JavaScript expression that allows us to extract data from arrays, object

const vacation = {
  location: 'Burly Idaho',
  duration: '2 weeks'
};
// extra practice
const person = {
  name: 'Alex',
  age: '23 weeks'
};

const parseSentence = ({ location, duration }, { age, name }) => {
  console.log(`My name is ${name} and im ${age} years old.`); //extra practice
  return `We're going to have a good time in ${location} for ${duration}.`;
};
console.log(parseSentence(vacation, person));

// Use destructuring to make this code ES6:

// // original
// function returnFirst(items) {
//   const firstItem = items[0]; /*change this line to be es6*/
//   return firstItem; //1
// }
// console.log(returnFirst([1, 2, 3, 4]));

// // my code
// // PULLS ONLY ONE ITEM
// const returnFromArr = items => {
//   const [pullFirst] = items;
//   return pullFirst;
// };

// console.log(returnFromArr([1, 2, 3, 4, 5]));

// Use destructuring to make this code ES6:

// // original
// function returnFirst(items) {
//   const firstItem = items[0]; /*change this line to be es6*/
//   return firstItem;
// }

// my code
const returnFirst = items => {
  const [firstItem, second] = items; //changed to es6
  // this returns 2 strings
  // return `${firstItem}, ${second}`;
  // this returns an array with an string and a number
  return [`${firstItem}`, second];
  // this returns an object
  // return { firstItem, second };
};

console.log(returnFirst([1, 2, 3, 4]));

// Write destructuring code to assign variables that will help us return the expected string.

const favoriteActivities = [
  'magnets',
  'snowboarding',
  'philanthropy',
  'janitor work',
  'eating'
];

const returnFavorites = arr => {
  const [firstFav, secondFav, thirdFav] = arr;

  return `My top three favorite activities are ${firstFav} ${secondFav}  and ${thirdFav}`;
};

console.log(returnFavorites(favoriteActivities));

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always receive three arrays if you would like to.

// original
// function combineAnimals() {
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// ["dog", "cat", "mouse", "jackolope", "platypus"]

const realAnimals = ['dog', 'cat', 'mouse'];
const magicalAnimals = ['jackolope'];
const mysteriousAnimals = ['platypus'];

const combineAnimals = (...realAnimals) => {
  return realAnimals;
};

console.log(
  combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals)
);

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Try to make the following function more ES6xy:

const numbers = [1, 2, 3, 4, 5];
const product = numbers => {
  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1);
};

console.log(product(numbers));

// Make the following function more ES6xy. Use both the rest and spread operators:

function unshift(array, ...nums) {
  return [...array, ...nums];
}
console.log(unshift([1, 2, 3, 4], ...[5, 6, 7, 8]));

// Write some destructuring code to help this function out. Use object literals to simplify it:

const populatePeople = names => {
  return names.map(name => {
    name = name.split(' ');

    const [firstName, lastName] = name;

    return {
      firstName,
      lastName
    };
  });
};

console.log(populatePeople(['Frank Peterson', 'Suzy Degual', 'Liza Jones']));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
