// JS String Methods

// Methods are Functions
// String Methods are pre-built by Javascript, so all you have to do is use them!
// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_string.asp

// var name = "luke"

// toUpperCase & toLowerCase
// var uppercasedLuke = name.toUpperCase()
// console.log(uppercasedLuke)
// var lowercasedLuke = uppercasedLuke.toLowerCase()
// console.log(lowercasedLuke)

// concat
// var s = "s"
// var newName = name.concat(s)
// console.log(newName)

// split - turn a string into an array
// var animal = "tigergerger"
// var characterArr = animal.split("g")
// console.log(characterArr)

// slice => cut up string
// var phoneNumber = "6764567890" // "676-456-7890"
// var first3 = phoneNumber.slice(0, 3)
// var next3 = phoneNumber.slice(3, 6)
// var last4 = phoneNumber.slice(6)
// var phoneNumWithDashes = first3 + "-" + next3 + "-" + last4
// console.log(phoneNumWithDashes)

// // indexOf = I need to know if the letter "a" occurs in a string
// var city = "New York City"
// var indexOfC = city.indexOf("!")
// console.log(indexOfC)

//                                                                String Methods Exercise

// Make a function that will return any given string into all caps followed by the same string all lowercase.

// const capitalizeAndLowercase = str => `${str.toUpperCase()} ${str}`;
// console.log(capitalizeAndLowercase(`kjsghdfkjhkjshdf`));

// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

// const findMiddleIndex = str => {
//   return Math.floor(str.length / 2);
// };
// console.log(findMiddleIndex('Hello')); // => 2
// console.log(findMiddleIndex('Hello World')); // => 5

// // Make a function that uses slice() and the other functions you've written to return the first half of the string
// // get help with this when you see eric
// const returnFirstHalf = str => {
//   console.log(findMiddleIndex(str));
// };

// returnFirstHalf('Hello'); // => "He"
// returnFirstHalf('Hello World'); // => "Hello"

// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.

// hint: If the half way point is a decimal, or rather, your string length is odd. Use Math.floor to round down.

// const capitalizeAndLowercase = str => {
//   let middleIndex = Math.floor(str.length / 2);

//   let firstHalf = str.slice(0, middleIndex);

//   let secondHalf = str.slice(middleIndex, str.length);

//   return `${firstHalf.toUpperCase()}${secondHalf.toLowerCase()}`;
// };

// console.log(capitalizeAndLowercase('Hello')); // => "HEllo"
// console.log(capitalizeAndLowercase('Hello World')); // => "HELLO world"
