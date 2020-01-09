// started at 7:30
// CTRL-C stops infinite loops in terminal
// //Preliminaries
// let l = console.log();

// Write a for loop that prints to the console the numbers 0 through 9.

// for (let i = 0; i <= 9; i++) {
//   console.log(i);
// }

// // Write a for loop that prints to the console 9 through 0.
// for (let i = 9; i >= 0; i--) {
//   console.log(i);
// }

// // Write a for loop that prints these fruits to the console.
// let fruit = ["banana", "orange", "apple", "kiwi"];
// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }
// // Bronze Medal

// // Write a for loop that will push the numbers 0 through 9 to an array.
// let arr = [];
// for (let i = 0; i <= 9; i++) {
//   arr.push(i);
// }
// console.log(arr);

// Write a for loop that prints to the console only even numbers 0 through 100.
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// // Write a for loop that will push every other fruit to an array.
// let arr = [];
// let fruit = ["banana", "orange", "apple", "kiwi"];
// for (let i = 0; i < fruit.length; i++) {
//   if (i % 2 === 0) {
//     arr.push(fruit[i]);
//   }
// }
// console.log(arr);

// //Silver Medal
// let peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor"
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer"
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician"
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer"
//   }
// ];
// // Write a loop that will print out all the names of the people of the people array
// // let names = [];
// for (let i = 0; i < peopleArray.length; i++) {
//   console.log(peopleArray[i][`name`]);
//   // names.push(peopleArray[i][`name`]);
// }
// // console.log(names);

// // Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// let names = [];
// let occupations = [];

// for (let i = 0; i < peopleArray.length; i++) {
//   names.push(peopleArray[i][`name`]);
//   occupations.push(peopleArray[i][`occupation`]);
// }
// console.log([names], [occupations]);

// // // Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".
// let peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor"
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer"
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician"
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer"
//   }
// ];

// let nameArr = [];
// let occupationArr = [];
// for (let i = 0; i < peopleArray.length; i++) {
//   if (i % 3 === 0) {
//     nameArr.push(peopleArray[i][`name`]);
//     occupationArr.push(peopleArray[i][`occupation`]);
//   }
// }

// (test = () => {
//   console.log(nameArr);
//   console.log(occupationArr);
// })();

// Gold Medal - Nesting
// Create an array that mimics a grid like the following using nested for loops:
// [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ];

// let pushHere = [];

// let nest1 = [[0, 0, 0]];
// let nest2 = [[0, 0, 0]];
// let nest3 = [[0, 0, 0]];
// for (let i = 0; i < nest1.length; i++) {
//   pushHere.push(nest1[i]);
//   for (let i = 0; i < nest2.length; i++) {
//     pushHere.push(nest2[i]);
//     for (let i = 0; i < nest3.length; i++) {
//       pushHere.push(nest3[i]);
//     }
//   }
// }
// console.log(pushHere);

// for (let i = 0; i <= 2; i++) {
//   pushHere.push([]);
//   console.log(`outside loop`, "i=", i, " ", pushHere);
//   for (let j = 0; j <= 2; j++) {
//     pushHere[i].push(0);
//     console.log(`inside loop`, "i=", i, " ", pushHere);
//   }
// }
// console.log(pushHere);

// // 2.Create an array that mimics a grid like the following using nested for loops:

// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]

// let pushHere = [];
// for (let i = 0; i <= 2; i++) {
//   pushHere.push([]);
//   console.log(`outside loop`, "i=", i, " ", pushHere);
//   for (let j = 0; j <= 2; j++) {
//     pushHere[i].push(i);
//     console.log(`inside loop`, "i=", i, " ", pushHere);
//   }
// }
// console.log(pushHere);
// let pushHere = [];

// // 3.Create an array that mimics a grid like the following using nested for loops:
// for (let i = 0; i <= 2; i++) {
//   // pushes the bracket
//   pushHere.push([]);

//   for (let j = 0; j <= 2; j++) {
//     pushHere[i].push(j);
//   }
// }
// console.log(pushHere);
// [[0, 1, 2],
// [0, 1, 2],
// [0, 1, 2]]

// 4.Given a grid like the previous ones, write a nested for loop that would change every number to an x.
// var grid = [["x", ...],
//             ["x", ...],
// //            ["x",...], ...]
let nestedArr = [
  [0, 1, 2],
  [0, 1, 2],
  [0, 1, 2]
];

// for (let i = 0; i < pushHere.length; i++) {
//   for (let j = 0; j < pushHere[i].length; j++) {
//     pushHere[i][j] = "x";
//   }
// }
// console.log(pushHere);

for (let i = 0; i < nestedArr.length; i++) {
  for (let j = 0; j < nestedArr[i].length; j++) {
    nestedArr[i][j] = "x";
  }
}

console.log(nestedArr);

// for (let i = 0; i < pushHere.length; i++) {

//   for (let j = 0; j < pushHere[i].length; j++) {
//     pushHere[i][j] = 'x'; // [1,2,3]

//   }

//   // change all to 'x'
// }
// console.log(pushHere);

// let matrix = [];

// for (let i = 0; i <= 3; i++) {
//   matrix.push([]);
//   for (let j = 0; j <= 3; j++) {
//     matrix[i].push("hello");
//   }
// }
// console.log(matrix);

// let x = "x";

// for (let i = 0; i <= 2; i++) {
//   // pushes the bracket
//   pushHere.push([]);

//   for (let j = 0; j <= 2; j++) {
//     pushHere[i].push(j);
//   }
// }
// console.log(pushHere);

// for (let i = 0; i <= 2; i++) {
//   pushHere.push([]);
//   for (let j = 0; j <= 2; j++) {
//     pushHere[i].push(x);
//   }
// }
// console.log(pushHere);
