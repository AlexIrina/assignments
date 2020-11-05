// Preliminaries
// Write a for loop that prints to the console the numbers 0 through 9.
// Write a for loop that prints to the console 9 through 0.
// Write a for loop that prints these fruits to the console.
const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];


for(let i = 0; i< 10; i++){
  console.log(i);
}

for(let i = 9;i >= 0; i--){
  console.log(i);
}

for(let i=0; i< fruits.length; i++){
  console.log(fruits[i]);
}


// Bronze Medal
// Write a for loop that will push the numbers 0 through 9 to an array.
// Write a for loop that prints to the console only even numbers 0 through 100.
// Write a for loop that will push every other fruit to an array.

const array = [];

for(let i = 0; i < 10; i++){
  array.push(i)
}
console.log(array);

for(let i= 0; i<= 100; i++){
  if(i % 2 ===0) console.log(i);
}

console.log(fruits);

let newFruitsArray = [];

for(let i = 0; i < fruits.length; i++){
  if(i % 2 === 0){
    newFruitsArray.push(fruits[i])
  }
}
console.log(newFruitsArray);

// Silver Medal
// Write a loop that will print out all the names of the people of the people array
// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".
// Think about what good names for the arrays would be. Since it will be an array of each name or occupation, the plurals of name and occupation would be appropriate.

var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

for(let person of peopleArray){
  console.log(person.name);
}

const namesArray = [];
const occupationsArray = [];
const evenNamesArray = [];
const oddOccupationsArray = [];

for(let person of peopleArray){
  console.log(person.name);
  namesArray.push(person.name)
  occupationsArray.push(person.occupation)
}

for (const key in peopleArray) {
  // console.log(`key => ${key} `);
  // console.log(`${peopleArray[key].name}`);
  key % 2 === 0 && evenNamesArray.push(`${peopleArray[key].name}`)
  key % 2 === 1 && oddOccupationsArray.push(`${peopleArray[key].occupation}`)
}

console.log(namesArray);
console.log(occupationsArray);
console.log(evenNamesArray);
console.log(oddOccupationsArray);


// Gold Medal - Nesting
// Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]]

const matrix = [];
// array has 3 arrays in it so i need it to run 3 times
for(let i = 0; i < 3; i++){
  // to push 3 empty arrays just add brackets
  matrix.push([])

  console.log('i:',i);
// run j 3 times because there are 3 zeros in each array
  for(let j = 0; j < 3; j++){
    console.log('j:', j);
    // pushing ---> 0 <-- inside each of the 3 nested arrays
    matrix[i].push(0)
  }
}

console.log(matrix);

// 2.Create an array that mimics a grid like the following using nested for loops:

// [[0, 0, 0], 
// [1, 1, 1], 
// [2, 2, 2]]

const grid = [];

for(let i = 0; i < 3; i++){
  grid.push([])

  for(let j=0; j < 3; j++){
  // here i need to push to the FIRST INDEX of grid
    console.log(i);
    // pushing i to the first index of grid and then the second and then the third the value of i
    grid[i].push(i)
  }
}

console.log(grid);

// 3.Create an array that mimics a grid like the following using nested for loops:

// [[0, 1, 2], 
// [0, 1, 2], 
// [0, 1, 2]]

const grid2 = [];

for(let i = 0; i < 3; i++){
  grid2.push([])
  for(let j=0; j < 3; j++){
    console.log(j);
    grid2[i].push(j)
  }
}

console.log(grid2);

// 4. Given a grid like the previous ones, write a nested for loop that would change every number to an x.
// var grid = [["x", ...], 
//             ["x", ...], 
//             ["x",...], ...] 




const grid3 = [ [ 0, 1, 2 ], [ 0, 1, 2 ], [ 0, 1, 2 ] ];

// grabs the first array inside of the matrix
console.log(grid3[0]);
// grabs the second number inside of the first array thats inside of the matrix
console.log(grid3[0][1]);

for(let i = 0; i < grid3.length; i++){
  for(let j = 0; j < grid[i].length; j++){
    // changes all values to 'X'
    grid3[i][j] = 'X'
  }
}

console.log(grid3);

