const names = ['Jack', 'John', 'Jill', 'Joseph', 'Jackie', 'Steve'];

// .some()
// returns boolean
// always checks if something in the array is a truthy else falsy

// checks if theres a string in the array of names that start with the letter 'S'
const startWithS = names.some(name => name[0] === 'S');
console.log(startWithS);

// .every()
// returns boolean
// checks if every item in the array is a truthy or falsy
const allJs = names.every(name => name[0] === 'J');
console.log(allJs);
