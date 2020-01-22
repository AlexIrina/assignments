// array of nums
let numbers = [42, 13, 34, 18, 123];
// array of strings
let turtles = ['Raphael', 'Donatello', 'Michelangelo', 'Leonardo'];
// array of objects
var users = [
  {
    name: 'Joe Schmoe',
    age: 42,
    gender: 'Male'
  },
  {
    name: 'Jill Schmoe',
    age: 41,
    gender: 'Female'
  },
  {
    name: 'Jimmy Schmoe',
    age: 9,
    gender: 'Male'
  }
];

let disparateArr = ['Alice', 40, true, [8, 10, 12]];

/**
 * QUIZ:
 *
 * 1. What is the purpose of arrays? Why do programmers care about them?
 * An array is a collection of items programmers use to collect multiple pieces of data
 *
 * 2. What are some differences between arrays and objects?
 * arrays are collections of multiple pieces of data
 * objects go deeper. A way to describe one thing in a lot more detail
 *
 * 3. How would you access the number 34 from the `numbers` array above?
 * See if you can log it to the console)
   console.log(numbers[2])
 *
 *
 * 4. What is the length of the `turtles` array? How would you access that length?
 * console.log(turtles.length)
 * the length is 4
 *
 *
 * 5. Is it syntactically correct to have an array like `disparateArr`?
 *No. Arrays need to be plural. They need to end with an 's' because you are storing many different values
 *
 * 6. What might be a better data structure to use for `disparateArr`?
 *creating an object instead of the array. To better describe what the data represents
 *
 * 7. How would you log Jill Schmoe's name to the console using the `users` array?
 * console.log(users[0].name)
 */
// console.log(numbers[2]);
// console.log(turtles.length);
// console.log(users[1].name);
