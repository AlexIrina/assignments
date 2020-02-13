// Why is ageRange not defined?
// How can we fix this function with var?
// How can we fix this function avoiding the use of var?
// Why would you use const vs let?

const person = { name: 'Andrea', age: 27 };

// What would the below function potentially look like if we destructured the person parameter?
const getAgeRange = ({ age }) => {
  let ageRange;
  if (age < 18) {
    ageRange = 'Child';
  } else if (age >= 18 && age < 80) {
    ageRange = 'Adult';
  } else {
    ageRange = 'Elderly Person';
  }
  return ageRange;
};

console.log(getAgeRange(person));

// Why can we add .ageRange to person when we used const to define person?
// A: Because objects are mutable

person.ageRange = getAgeRange(person); // feel free to comment out lines that cause errors

console.log(
  `The ${person.ageRange} ${person.name} is ${person.age} years old.`
);
// change the above concatenated string into a template literal

const springMonths = ['March', 'April', 'May'];
const fallMonths = ['September', 'October', 'November'];

// replace this line with one that uses a spread operator to do the same thing as concat
const fringeMonths = [...springMonths, ...fallMonths];

console.log(springMonths, fallMonths, fringeMonths);
