// // .push(item[s])
// // Adds one or more elements to the end of an array and returns the new length of the array.

// // Every line builds on the previous lines of code.

// var myArray = [];

// myArray.push('apple');
// console.log(myArray); // ["apple"];

// myArray.push('banana');
// console.log(myArray); // ["apple", "banana"];

// // Can push multiple items at once
// myArray.push(1, [], {});
// console.log(myArray); // ["apple", "banana", 1, [], {}];

// // .pop()
// // Removes the last element from an array and returns that element. This method changes the length of the array.

// var myArray = ['Mario', 'Luigi', 'Peach', 'Toad'];
// var poppedItem = myArray.pop();
// console.log(poppedItem); // "Toad"
// console.log(myArray); // ["Mario", "Luigi", "Peach"]

// // .shift()
// // Removes the first element from an array and returns that element. This method changes the length of the array.
// const myArray = ['Mario', 'Luigi', 'Peach', 'Toad'];

// let removeFirstElement = myArray.shift();
// console.log(removeFirstElement); // 'Luigi', 'Peach', 'Toad' ]
// console.log(myArray); //["Mario", "Luigi", "Peach", "Toad"];

// // .unshift()
// // Adds one or more elements to the beginning of an array and returns the new length of the array.
// const veggies = ['pickles'];
// let addedVeggie = veggies.unshift('tomatoes', 'kale', 'lettuce');
// console.log(veggies); // [ 'tomatoes', 'kale', 'lettuce', 'pickles' ]

// .splice(startingIndex, numberToRemove[, itemsToInsert])
// Changes the contents of an array by removing existing elements and/or adding new elements.

// const myCars = ['toyota', 'honda', 'bentley', 'lamborghini'];

// // remove 1 element from index 2
// let removed = myCars.splice(2, 1);
// // myCars is ['toyota', 'honda', 'bentley', 'lamborghini']
// // removed is 'bentley'
// // console.log(removed);

// // remove 0 elements from index 2, and insert 'jaguar'
// let removed2 = myCars.splice(2, 0, 'jaguar');
// // myCars is ['toyota', 'honda', 'bentley', 'lamborghini']
// console.log(removed2); //[]

// // remove 1 element from index 2, and insert 'jaguar'
// let removed3 = myCars.splice(2, 1, 'jaguar');
// // myCars is ['toyota', 'honda', 'bentley', 'lamborghini']
// // removed3 is ['bentley']
// console.log(removed3);

// // removes 2 elements starting from index 0, and inserts 'nascar', 'sedan' and 'van'.
// let removed4 = myCars.splice(0, 2, 'nascar', 'sedan', 'van');
// // myCars is ['toyota', 'honda', 'bentley', 'lamborghini']
// // removed is [ 'toyota', 'honda']
// console.log(myCars);
// console.log(removed4);

// .slice(startIndex [, endIndex])
// Returns a shallow (non-destructive) copy of a portion of an array into a new array object selected from beginning to the end (end not included). The original array will not be modified.

// // The second parameter is optional. If omitted, endIndex defaults through the end of the array. If provided, it specifies the non-inclusive ending point of the slice. (The item at the index of endIndex will NOT be included in the new array).

// const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// // remove from index 1 and stop at index 3
// const citrus = fruits.slice(1, 3); // ["Orange", "Lemon"]
// console.log(citrus);
// const citrusToEnd = fruits.slice(1); // ["Orange", "Lemon", "Apple", "Mango"]

// // .indexOf(item)
// // Returns the first index at which a given element can be found in the array, or -1 if it is not present.

// let myArray = ['grape', 'orange', 'banana', 'orange', 'apple'];
// let index = myArray.indexOf('orange');
// console.log(index); // 1

// let notFoundItemIndex = myArray.indexOf('kiwi');
// console.log(notFoundItemIndex); // -1

// .lastIndexOf(item[, fromIndex])
// Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex (or the end of the array if fromIndex is omitted).

// let myArray = ['grape', 'orange', 'banana', 'orange', 'apple'];
// let index = myArray.lastIndexOf('orange');
// console.log(index); // 3

// // .join(separator)
// // Joins all elements of an array into a string and returns that string, separated by separator (or commas if separator is omitted).

// const elements = ['Earth', 'Fire', 'Wind', 'Water'];
// (test = () => {
//   console.log(elements.join(' ')); //'Earth', 'Fire', 'Wind', 'Water'
//   console.log(elements.join('-')); // 'Earth-Fire-Wind-Water'
//   console.log(elements.join()); //'Earth,Fire,Wind,Water'
// })();

// .concat(array[s])
// Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// const names = ['alex', 'billy', 'tommy'];
// const moreNames = ['tom', 'bob', 'sandra'];
// let allNames = names.concat(moreNames);
// console.log(allNames);

// let arr1 = ['Cecile', 'Lone'];
// let arr2 = ['Emil', 'Tobias', 'Linus'];
// let arr3 = ['Robin', 'Morgan'];
// let myChildren = arr1.concat(arr2, arr3); // Concatenates arr1 with arr2 and arr3
// console.log(myChildren); // ["Cecile", "Lone", "Emil", "Tobias", "Linus", "Robin", "Morgan"]

// // .reverse()
// // Reverses the elements in an array in place, modifying the original array.
// let myNumbers = [1, 2, 3, 4, 5, 6];
// let reversedNums = myNumbers.reverse();
// console.log(reversedNums);

const items = [
  { name: 'bike', price: 100, currency: '$' },
  { name: 'tv', price: 1000, currency: '$' },
  { name: 'table', price: 50, currency: '$' },
  { name: 'xbox', price: 300, currency: '$' },
  { name: 'kitten', price: 40, currency: '$' },
  { name: 'painting', price: 1000000, currency: '$' },
  { name: 'skateboard', price: 250, currency: '$' },
  { name: 'laptop', price: 1500, currency: '$' }
];

// // FILTER
// // returns a filtered array
// // have to create a new variable to store the new array
// const filteredItems = items.filter(item => {
//   return item.price > 10000;
// });
// console.log(`OUTPUT: filteredItems -> filteredItems`, filteredItems);

// //FIND
// // finds and returns a single item in the array
// const findBike = items.find(item => {
//   return item.name === 'bike';
// });

// // console.log(findBike);

// // MAP
// // returns a key or value from the array
// const itemNames = items.map(item => {
//   return item.name;
// });
// // console.log(`OUTPUT: itemNames`, itemNames);

// // FOREACH
// // method that is similar to a for loop. It loops over an array and returns the key or value
// const showPrices = items.forEach(item => {
//   // console.log(item.price);
// });

// //SOME
// // returns true or false if anything in the array matches the checked condition
// const isNotExpensive = items.some(item => {
//   return item.price <= 50; //there are items less than 50
// });

// // EVERY
// // return a boolean if all the items in the array match the condition
// const checkPrice = items.every(item => {
//   return item.currency === '$';
// });
// console.log(`OUTPUT: checkPrice`, checkPrice);

// REDUCE

// // create a variable that im going to store the total amount in
// const total = items.reduce((currentTotal, items) => {
//   return items.price + currentTotal;
// }, 0);
// console.log(total);

// // INCLUDES
// checks if the array includes that item
// let nums = [1, 2, 3, 4, 5];
// const inTheArray = nums.includes(2);
// console.log(`OUTPUT: inTheArray`, inTheArray);
