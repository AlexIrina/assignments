// You should use multiple array methods to solve these problems. Don't use for loops!

// Using the provided peopleArray (bottom of this article), write a function that:

// Returns a list of everyone older than 18, which is
// sorted alphabetically by last name, and where
// each name and age is embedded in a string that looks like an HTML <li> element.

const peopleArray = [
  {
    firstName: 'Sarah',
    lastName: 'Palin',
    age: 47
  },
  {
    firstName: 'Frank',
    lastName: 'Zappa',
    age: 12
  },
  {
    firstName: 'Rick',
    lastName: 'Sanchez',
    age: 78
  },
  {
    firstName: 'Morty',
    lastName: 'Smith',
    age: 29
  },
  {
    firstName: 'Kyle',
    lastName: 'Mooney',
    age: 27
  },
  {
    firstName: 'Pasha',
    lastName: 'Datsyuk',
    age: 13
  },
  {
    firstName: 'Lev',
    lastName: 'Tolstoy',
    age: 82
  }
];
console.log(`test`, peopleArray);

// list of everyone older than 18
const peopleOlderThan18 = arr => {
  return arr
    .filter(person => person.age >= 18)
    .sort((a, b) => {
      let first = a.lastName;
      let second = b.lastName;
      return first < second ? -1 : first > second ? 1 : 0;
    })
    .map(
      person =>
        `<li>${person.firstName} ${person.lastName} is ${person.age} </li>`
    );
};
console.log(peopleOlderThan18(peopleArray));
