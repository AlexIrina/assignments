// using the Constructor function
// newUser now has all the properties I want my user objects to have, and all the values that were (supposedly) entered by the user.
// let newUser = new User('Joe', 'Schmoe', 42, 'Ernest Goes to Camp', 'UFC');

// // What if I wanted to create 100 new objects and save them all to an array?
// const objectArray = [];
// // creates 5 users and pushes them to the Object Array
// for (let i = 0; i < 5; i++) {
//   let newObj = new User('Joe', 'Schmoe', 42, 'Ernest Goes to Camp', 'UFC');
//   objectArray.push(newObj);
// }
function User(fName, lName, age, favMovie, favSport) {
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.favoriteMovie = favMovie;
  this.favoriteSport = favSport;
  User.prototype.speak = function() {
    return `Hi! My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old. My favorite movie is ${this.favoriteMovie} and my favorite sport is ${this.favoriteSport}`;
  };
}

// Creating a new user
const joe = new User('Joe', 'Rogan', 52, 'The Mechanic', 'UFC');
const alex = new User(`Alex`, `George`, 32, `Scarface`, `MMA`);

console.log(alex, alex.speak());
console.log(joe, joe.speak());

// console.log(jill.speak());
// jill.speak(); // prints "Hi! My name is Jill Hill and my favorite movie is Jack and the Beanstalk".
