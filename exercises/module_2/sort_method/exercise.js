// Use the built-in .sort() method on arrays to solve all of these problems

// // 1) Sort an array from smallest number to largest
// const leastToGreatest = arr => arr.sort((x, y) => x - y);
// console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

// // 2) Sort an array from largest number to smallest
// const greatestToLeast = arr => arr.sort((x, y) => y - x);
// console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

// // 3) Sort an array from shortest string to longest
// const lengthSort = arr => arr.sort((x, y) => x.length - y.length);
// console.log(lengthSort(['dog', 'wolf', 'by', 'family', 'eaten'])); // ["by", "dog", "wolf", "eaten", "family"]

// // 4) Sort an array alphabetically
// const alphabetical = arr => arr.sort();
// console.log(alphabetical(['dog', 'wolf', 'by', 'family', 'eaten'])); // ["by", "dog", "eaten", "family", "wolf"]

// 5) Sort the objects in the array by age
const byAge = (arr) => arr.sort((x, y) => x.age - y.age);

console.log(
  byAge([
    { name: 'Quiet Samurai', age: 22 },
    { name: 'Arrogant Ambassador', age: 100 },
    { name: 'Misunderstood Observer', age: 2 },
    { name: 'Unlucky Swami', age: 77 },
  ])
);
// // => [ { name: 'Misunderstood Observer', age: 2 },
// //  { name: 'Quiet Samurai', age: 22 },
// //  { name: 'Unlucky Swami', age: 77 },
// //  { name: 'Arrogant Ambassador', age: 100 } ]
