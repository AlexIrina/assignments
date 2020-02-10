// .filter()
// Method creates a new array with all elements that pass the test
// filter() purpose is to slim down the data set

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNums = arr.filter(num => num % 2 === 0);
console.log(evenNums); //[ 2, 4, 6, 8, 10 ]

const filteredArr = arr.filter(num => num > 5);
console.log(filteredArr);

// dealing with objects
// Only return ACTION movies
const movies = [
  { name: 'movie1', genre: 'horror' },
  { name: 'movie2', genre: 'action' },
  { name: 'movie3', genre: 'action' },
  { name: 'movie4', genre: 'fantasy' }
];

const actionMovies = movies.filter(movie => movie.genre === 'action');

console.log(actionMovies);
