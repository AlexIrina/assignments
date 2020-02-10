// Working with these two variables
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const users = [{ name: 'joe' }, { name: 'julie' }, { name: 'rick' }];

// .forEach
// always returns undefined. Used to replace the for loop
// always loops the entire length of the array
// const evenNumsArr = [];
// arr.forEach(num => {
//   count += 1;
//   num % 2 === 0 ? evenNumsArr.push(num) : null;
// });
// console.log(evenNumsArr, count);
// arr.forEach(num => num % 2 === 0 && evenNumsArr.push(num));
// console.log(evenNumsArr);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const users = [{ name: 'joe' }, { name: 'julie' }, { name: 'rick' }];
// // .find()
// // find() purpose is to find the FIRST SINGLE true in the array or object

// const findTwo = arr.find(num => num === 2);
// console.log(findTwo);
// // find users that start with the letter "J"
// const startWithJ = users.find(user => user.name[0] === 'j' && user);
// console.log(startWithJ); //returns 'joe'

// // .findIndex()
// // similar to find. But it returns the first index number it finds
// // has to return TRUE
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// // const indexOfNum = arr.indexOf(num => num === 2);
// // console.log(indexOfNum);
// const users = [{ name: 'joe' }, { name: 'julie' }, { name: 'rick' }];
// const findUsersIndex = users.findIndex(
//   user => (user.name === 'rick' ? true : null) // or use &&
// );
// // const findUsersIndex = users.findIndex(name => name === 'rick' && true);
// console.log(findUsersIndex);
