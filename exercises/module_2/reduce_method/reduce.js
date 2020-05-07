// .reduce()
// needs 2 arguments...use result and currentNum
// result is whats returned and saved in your variable
// currentNum is the current number or current iteration

// 1 - reduce the array of numbers into a sum of all the numbers 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                              
const total = nums.reduce((result, currentNum) => {
  // for each iteration result is equal to current iterated number
  result += currentNum;
  return result;
}, 0); // 0 is the second argument. It means that the RESULT variable starts at 0.which is number 1 otherwise it will start looping at the umber 2

console.log(total);

// 2 - reduce the users to an array of strings of the user's first and last names
const users = [
  { fName: 'joe', lName: 'smithy' },
  { fName: 'tina', lName: 'johnson' },
  { fName: 'rick', lName: 'sanchez' }
];
// final and current is each user || user
// since we want to get an array of names from this object i have to start with an empty array
const result1 = users.reduce(
  function(final, user) {
    // i can use the push method because final starts at []...making it an array
    final.push(`${user.fName} ${user.lName}`);
    return final; //this keeps track of each iteration
  },
  [] //final is now an array and i can use all the methods
);
console.log(result1);

const result2 = users.reduce(
  (final, user) => {
    final.push(`${user.fName} ${user.lName}`);
    // you HAVE to return final. Otherwise it will return undefined
    return final;
  },
  [1, 2, 3, 4, 5, 6] //example
);
console.log(result2);

// // 3 - reduce the array into a count of how many people voted
const voters1 = [
  { name: 'steve', voted: true },
  { name: 'janet', voted: true },
  { name: 'rebecca', voted: false },
  { name: 'harvey', voted: true }
];

const peopleVoted = voters1.reduce(function(final, voter) {
  if (voter.voted) {
    final++;
  }
  return final;
}, 0); //this makes it so it returns a number);
console.log(peopleVoted);

const voters2 = [
  { name: 'steve', voted: true },
  { name: 'janet', voted: true },
  { name: 'rebecca', voted: false },
  { name: 'harvey', voted: true }
];
// Return an object that has a count of both who voted and who didnt
// looks like this { didVote: 3, didntVote: 1 }
const votedAndNotVoted = voters2.reduce(
  function(final, voter) {
    if (voter.voted) {
      final.voted++;
    } else {
      final.notVoted++;
    }
    return final; //this keeps track of the mutations
  },
  {
    voted: 0,
    notVoted: 0
  }
); //this makes it so it returns a number);
console.log(votedAndNotVoted);
