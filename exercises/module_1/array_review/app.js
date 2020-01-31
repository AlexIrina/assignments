// // array of nums
// let numbers = [42, 13, 34, 18, 123];
// // array of strings
// let turtles = ['Raphael', 'Donatello', 'Michelangelo', 'Leonardo'];
// // array of objects
// let users = [
//   {
//     name: 'Joe Schmoe',
//     age: 42,
//     gender: 'Male'
//   },
//   {
//     name: 'Jill Schmoe',
//     age: 41,
//     gender: 'Female'
//   },
//   {
//     name: 'Jimmy Schmoe',
//     age: 9,
//     gender: 'Male'
//   }
// ];

// let disparateArr = ['Alice', 40, true, [8, 10, 12]];

//  * QUIZ:
//  *
//  * 1. What is the purpose of arrays? Why do programmers care about them?
//  * An array is a collection of items programmers use to collect multiple pieces of data
//  *
//  * 2. What are some differences between arrays and objects?
//  * arrays are collections of multiple pieces of data
//  * objects go deeper. A way to describe one thing in a lot more detail
//  *
//  * 3. How would you access the number 34 from the `numbers` array above?
//  * See if you can log it to the console)
//    console.log(numbers[2])
//  *
//  *
//  * 4. What is the length of the `turtles` array? How would you access that length?
//  * console.log(turtles.length)
//  * the length is 4
//  *
//  *
//  * 5. Is it syntactically correct to have an array like `disparateArr`?
//  *No. Arrays need to be plural. They need to end with an 's' because you are storing many different values
//  *
//  * 6. What might be a better data structure to use for `disparateArr`?
//  *creating an object instead of the array. To better describe what the data represents
//  *
//  * 7. How would you log Jill Schmoe's name to the console using the `users` array?
//  * console.log(users[0].name)
//  *
// console.log(numbers[2]);
// console.log(turtles.length);
// console.log(users[1].name);

// // Practice
// // Loop through the following array, and log to the console "hooray" for every party there is.

// let eventsAtWork = [
//   'work',
//   'pretend to work',
//   'party',
//   'work',
//   'meeting',
//   'party',
//   'daily grind',
//   'work',
//   'party'
// ];

// for (let i = 0; i < eventsAtWork.length; i++) {
//   console.log(`Hooray! ${eventsAtWork[i]} `);
// }

// // Loop through the following array, and count how many "trues" there are.

// let booleans = [true, true, false, true, false, false, false];
// let count = 0;
// for (let i = 0; i < booleans.length; i++) {
//   if (booleans[i] === true) {
//     count++;
//   }
// }
// console.log(count);

// // Add an isAdmin property to each of the users in this array.

// let users = [
//   {
//     name: 'Sophie',
//     age: 12
//   },
//   {
//     name: 'Larry',
//     age: 32
//   },
//   {
//     name: 'Cathy',
//     age: 40
//   }
// ];

// for (let i = 0; i < users.length; i++) {
//   console.log((users[i].isAdmin = true));
// }
// console.log(users);

/**
 * QUIZ:
 * 
 * 1. Why do programmers care about loops? What are they good for?
Loops allow programmers run the same sets of code many time until the condition is met
 * 
 * 2. In a for loop, what are the 3 main parts that go into the parentheses?
 * 1. initialize iterables, 2. condition - should I run one more time?, 3. final code that we want to run at the end of the loop
 * 
 * 3. Write a loop that logs the numbers 15 to 50 (inclusive) to the console.
 * for (let i = 15; i <= 50; i++) {
  console.log(i);
}

// // 4. Write a loop that logs the numbers 0 to 10 (inclusive) to the console, but if the number is 7, also log "It's your lucky day!"
// // */

// for (let i = 0; i < 10; i++) {
//   i === 7 ? console.log('its your lucky day') : console.log(i);
// }

////////////////////////////// Review - Arrays and Loops

// let numbersArr = [23, 64, 20, 33, 40, 100, 30, 50, 2];
// let petsArr = ['cat', 'dog', 'bird', 'snake', 'rabbit'];
// let users = [
//   {
//     name: 'joe',
//     age: 30
//   },
//   {
//     name: 'steve',
//     age: 23
//   },
//   {
//     name: 'sarah',
//     age: 39
//   },
//   {
//     name: 'lisa',
//     age: 27
//   }
// ];

/* QUIZ
    1. What part of the for loop will allow you to access each individual item in an array?
    the iterator or variable[i]
    
    2. What part of the for loop will need the array's length in order to run the correct amount of iterations?
    variable.length

    3. Using the pets array, how would you write a for loop to console.log all of the pets with an "s" added to the end? Your console log's should be ( cats, dogs, birds, snakes, rabbits )
    for (let i = 0; i < petsArr.length; i++) {
     console.log(`${petsArr[i]}s`);
    }
    
    4. Using the numbers array, how would you write a for loop to console log only the odd numbers?

    // let numbersArr = [23, 64, 20, 33, 40, 100, 30, 50, 2];
    //  for (let i = 0; i < numbersArr.length; i++) {
     //   if (numbersArr[i] % 3 === 0) console.log(numbersArr[i]);
    //  }
    
    // 5. Using the users array, how would you write a for loop that would console log the following sentence for each user in the array. ("Hi, I am joe and I am 30 years old")

    // for (let i = 0; i < users.length; i++) {
    //   console.log(`Hi, I am ${users[i].name} and I am ${users[i].age} years old`);
    // }

  
  // 6. Using the pets array, how would you write a for loop that would console.log all the pets in
// //     reverse order?

// let petsArr = ['cat', 'dog', 'bird', 'snake', 'rabbit'];

// for (let i = petsArr.length - 1; i >= 0; i--) {
//   console.log(petsArr[i]);
// }
*/
