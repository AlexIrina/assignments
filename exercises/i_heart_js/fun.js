//convert(1, 3) ➞ 3780
//convert(2, 0) ➞ 7200

//convert(0, 0) ➞ 0
//Write a function that takes two integers (hours, minutes)
//and converts them into seconds.

// const convert = (hrs, mins) => hrs * 3600 + mins * 60;

// console.log(convert(1, 3));
// console.log(convert(2, 0));

// stackBoxes = n => (n === 0 ? 0 : Math.pow(n,2));
// console.log(stackBoxes(0));
// stackBoxes(1) ➞ 1

// stackBoxes(2) ➞ 4

// stackBoxes(0) ➞ 0
// //// simple
// Math.pow(7, 2);    // 49
// Math.pow(7, 3);    // 343
// Math.pow(2, 10);   // 1024
// /

// Write a function that validates whether two strings are identical. Make it case insensitive.

// match("hello", "hELLo"); //➞ true

// match("motive", "emotive"); //➞ false

// match("venom", "VENOM"); //➞ true

// match("mask", "mAskinG"); // ➞ false
// let city = {
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// };

// console.log(cityFacts(city));

// const negate = arr => {
//   return console.log(arr.map(x => -x))
// }

// negate([1, 2, 3, 4])// ➞ [-1, -2, -3, -4]

// negate([-1, 2, -3, 4])// ➞ [1, -2, 3, -4]

// negate([-0]) //➞ []

// ********Write a function that: Takes one argument,
// a number. Has a for loop that iterates from 0-10.
//Each number in the for loop (0-10) will be multiplied by the number
//given as a parameter to the function log to the console “0 multiplied by
//11 equals 0”, “1 multiplied by 11 equals 11”, “2 multiplied by 11 equals 22”, etc.

// const runThis = num => {
//   for (let i = 0; i < 10; i++) {
//      total = i * num`;
//     console.log(` ${i} multiplied by ${num} equals`);
//   }
// };
// runThis(2);

//----------->>>>>>.      ||

//In classical programming, the logical OR is meant to manipulate boolean values only.
//If any of its arguments are true, it returns true, otherwise it returns false.

// if (1 || 1) { // works just like if( true || false )
//   console.log('returns true one or both of the sides are true!');
// }else{
//   console.log('returns false only if both sides are false')
// }

// 1 = true
// true = true
// strings = true

// 0 = false
//false = false

// //create a function that returns
// //person works from 9 - 5

// function scheadule(hour, name){

//   if(hour < 9 || hour > 17){
//     //console.log('go home and rest')
//     return `go home and rest ${name}`;
//   }else {
//     //console.log('work work work')
//     return `work work work ${name}`;
//   }
// }

// console.log(scheadule(9 , 'Artyom'));

// //console.log(scheadule(10));
// //console.log(scheadule(8));

// //a little confusing
// let hour = 12;
// let isWeekend = false;

// //working from 10 to 18
// if (hour < 10 || hour > 18 || isWeekend) {
//   console.log('The office is closed.'); // it is the weekend
// }else{
//   console.log('work ')
// }

//console.log(true||1||'YES')

//understand this
// let currentUser = null;
// let defaultUser = "John";

// let name = "unnamed" || currentUser || defaultUser ;
// console.log(name);

//______________TRUTHY____FALSY
// //Always prints the first truthy
// let x;

// let result = false || true || 1 || (x = 2);

// console.log(x) // x is in the back of another truthy so it doest get assigned to 2
// console.log(result) //finds the first truthy

// // //always prints the last falsy
// const theFalsyFamily = () => {
//   let falsys = false || null || undefined || 0;
//  return falsys;
//  }

//  console.log(theFalsyFamily()); //prints 0

////----------------------        &&      ------------>>>>>
//In classical programming, AND returns true if BOTH operands are truthy and false otherwise:

// AND returns the first falsy value or the last value if none were found.

// console.log(true && true && true && true && false); //false
// console.log(false && false); //false
// console.log(false && true); //false
// console.log(true && true); //true

// //if comparing different TRUTHY values with && the LAST TRUTHY value will be picked
// console.log(true && 33 && 21 && 23 && "im picked because im last"); //prints the last truthy

// //if comparing different FALSY values with && the FIRST FALSY value will be picked
// console.log(null && undefined && null && false); //first falsy value is picked

// In other words, AND returns the first falsy value or the last value if none were found.

// The rules above are similar to OR.The difference is that AND returns the first falsy value while OR returns the first truthy one.

// function great3(x, y, z) {
//   return x & y & z;
//   console.log(x, y, z);
// }
// console.log(great3(1, 2, 3));

//comeback here tomorrow

//logical operators 101
//https://javascript.info/logical-operators?fbclid=IwAR2mK8_1JtnVqa2s_7S0vf8ESZh9XSnUrIx6dUtlkuOxDzJf_swtdHF9_iU

//Comparisons 101
//https://javascript.info/comparison?fbclid=IwAR1D5XLTgO8-xbybsh1iXS0kWPXnPf_DgQLC-R-_aG3XERLPfA1Ii7KCO90

//Operators 101
//https://javascript.info/operators?fbclid=IwAR0xfi0LS5RN-UNDUw63qSDKBecaBu361C2skclP04_lINcrL_6XDRAd6qY

//Task 04 - numUnique

// function numUnique(num1, num2, num3) {
//   // make it return the number of unique values among num1, num2 and num3
// }
//console.log(numUnique(3,5,3))

// Test case
// Expected value
// numUnique(3, 5, 1)
// 3
// numUnique(0, -4, 0)
// 2
// numUnique(2, 2, 2)
// 1
// numUnique("love", "hate", "love")
// 2

// console.log(true && false && true ); //false
// console.log(true || true || false ); //true

// // && returns the first falsy if any one of the vals are false.
// //if none of the vals are false it picks the last true valuse
// console.log(0&&true&&undefined); //returns 0

// // || returns a truthy the first truthy val
// console.log(null||true||false); //returns true

// //truthy finder
// function truthyFinder(val1,val2,val3){

//   return val1||val2||val3;
// }
// console.log(truthyFinder(0,false,'pick me'))

// //falsey finder
// function falsyFinder(val1, val2, val3) {

//   return val1 && val2 && val3;
// }
// console.log(falsyFinder(0, false, 'pick me')) // 0

// // .        &&
// console.log(falsyFinder(1,true,'pick me')); //4
// //         ||
// console.log(truthyFinder(2,3,4)) //2

// && return opposite of ||

//Task 06 - booleanAnd
// function booleanAnd(arg1, arg2) {
// make this function act as a logical "AND" operator defined on strings
// (in other words, return true if and only if both arguments are truthy)
// again, for this task assume that each argument is a string
// let's agree that for the purpose of this task a string is truthy if
// and only if it is one of these: "true", "truth", "yes", "да", "1"
//   function booleanAnd(arg1, arg2) {

// // Test case
// // Expected value
// (function test(){
// (booleanAnd("yes", "no"))
// false
// booleanAnd("yes", "maybe")
// false
// booleanAnd("1", "да")
// true
// booleanAnd("truth", "да")
// true
// booleanAnd("true", "bullshit")
// false
// })();
//a string is truthy if and only if it is one of these"
//the function should treat "yes" as truthy
//"no" and "banana" as NOT truthy

//nope, return value 'true' if both arguments are "truthy"
//return value 'false' if either of them is not "truthy" (again, in task 06's sense of truthiness)

// function booleanAnd(val) {
//   if (
//     val === "yes" &&
//     val === "1" &&
//     val === "truth" &&
//     val === "true" &&
//     val === "да"
//   ) {
//     return console.log(true);
//   } else if (val === "no" && val === "maybe" && val === "bullshit") {
//     return console.log(false);
//   }
//   return val;
// }

// (function testThese() {
//   booleanAnd("yes", "no");
//   //false
//   booleanAnd("yes", "maybe");
//   //false
//   booleanAnd("1", "да");
//   //true
//   booleanAnd("truth", "да");
//   //true
//   booleanAnd("true", "bullshit");
//   //false
// })();

// console.log(typeof ("345" + 5))
// console.log("345" + 5)
// console.log(typeof (true && "falsy"))

// console.log(true&&true&&1||true||true||1);

// console.log(true||true||true&&true);

// console.log(true||0 && 1||null);

// //Test 5
// function swap(a, b) {
//   // make this function return "5:3" if it was called like swap(3, 5)
//   // this may seem silly, but this will teach you a very common pattern
//   if (a !== b || a === b) {
//     // IMPORTANT: you can't change the line below (and it's not a typo)
//     return a + ":" + b && b + ":" + a;
//   }
// }

// (function test() {
//   console.log(swap(3, 5));
//   console.log(swap(0, -4));
//   console.log(swap(2, 2));
//   console.log(swap("zz", "cc"));
//   console.log(swap(2, 4));
// })();
// //5:3
// //- 4: 0
// //2: 2
// //cc: zz
// //4:2

// function booleanAnd(arg1, arg2) {
//   let truthyVals = ["true", "truth", "yes", "да", "1"];

//   if (arg1 !== truthyVals) {
//     return console.log(false);
//   } else if (arg2 !== truthyVals) {
//     return console.log(false);
//   } else {
//     return console.log(true);
//   }
// }

// (function test() {
//   booleanAnd("yes", "no");
//   //false
//   booleanAnd("yes", "maybe");
//   //false
//   booleanAnd("1", "да");
//   //true
//   booleanAnd("truth", "да");
//   //true
//   booleanAnd("true", "bullshit");
//   //false
// })();

//Task 03 - max3

//Task 03 - max3 - NOT QUITE

// function max3(num1, num2, num3) {
// make this function return the maximum of num1, num2 and num3
// can’t use any built-in max functions if any exists in JS
//   if (num2 > 0 && num2 > 0 && num1 > -0){
//     return num2;
//   }
// }

// (function test(){
// console.log(max3(3, 5, 1))
// //5
// console.log(max3(0, -4, 0))
// //0
// console.log(max3(1, 2, 3));
// //3
// console.log(max3(3, 2, 1));
// //3
// console.log(max3(0, 0, 0));
// //0
// console.log(max3(1, 1, 1));
// //1
// console.log(max3(1,3,2));
// //3
// })();

// //falsy
// console.log(null && 0 && -0);

// //truthy
// console.log(null || undefined || 0)

//Write an “if” condition to check that age is between 14 and 90 inclusively.

//“Inclusively” means that age can reach the edges 14 or 90.

// //1 Check the range between
// //Write an “if” condition to check that age is between 14 and 90 inclusively.
// //“Inclusively” means that age can reach the edges 14 or 90.
// function checkAge(age) {
//   return (age >= 14 && age <= 90 ? "in the ballpark" : "over or unerage");
// }

// console.log(checkAge(91))

// // 2 Check the range outside
// // Write an if condition to check that age is NOT between 14 and 90 inclusively.
// // Create two variants: the first one using NOT! , the second one – without it.

// function checkAge(age) {
//   console.log(!(age >= 14 && age <= 90)? 'is NOT between 14 and 90': 'try again');
//   console.log(age < 14 || age > 90 ? 'is NOT between 14 and 90' : 'try again');
// }
// console.log(checkAge(1));

// Check the login
// // Write the code which asks for a login with prompt.

// // If the visitor enters "Admin", then prompt for a password,
// // if the input is an empty line or Esc – show “Canceled.”,
// // if it’s another string – then show “I don’t know you”.

// // The password is checked as follows:

// // If it equals “TheMaster”, then show “Welcome!”,
// // Another string – show “Wrong password”,
// // For an empty string or cancelled input, show “Canceled.”

// let userName = prompt('Whos There?','');

// if (userName === 'Irina'){
//   let password = prompt('Please type in your password','');
//   if(password === 'Suslova'){
//     alert(`Welcome ${userName}`)
//     }else if(password === ''|| password === null){
//       alert('Type something here...');
//     }else{
//       alert('Wrong Password');
//     }
//   }else if(userName === '' || userName === null){
//   alert('Type in your username please!');
// }else{
//   alert('I dont know you!!');
// }

//a is greater than A. wow!
//alert('a' === 'A')? true: false;
//alert('2' > 1); // true, string '2' becomes a number 2

//For boolean values, true becomes 1 and false becomes 0.
// alert(true == 1); // true
// alert(false == 0); // true
//Don’t use comparisons >= > < <= with a variable which may be null/undefined, --
//--unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.
//"2" > "12" → true
//Again, dictionary comparison, first char of "2" is greater than the first char of "1".

//However, note that operations run from left to right. If there are two numbers followed by a string, the numbers will be added before being converted to a string:

//alert(2 + 2 + '1'); // "41" and not "221"

//The exponentiation operator ** is a recent addition to the language.
//For a natural number b, the result of a ** b is a multiplied by itself b times.
//For instance:
//alert(2 ** 4); // 16 (2 * 2 * 2 * 2)

//alert(2**4) 2*2*2*2 === 16

// let counter = 1;
// let a = ++counter; // (*)
// console.log(`I am #${a -1}` )

// const totalNums = (n, x, z) => {

//   return console.log(x + n + z);

// }
// // totalNums(2,3,4);
// function test() {
//   console.log("hi")
// }

// test();

// function test() {
//   console.log("hi")
//   return "stuff";
//   console.log("ola");
// }

// console.log(test())

// function test() {
//   console.log("hi")
//   return "stuff";
//   console.log("ola");
// }

// console.log(test())

// //#4 Given this function
// //10       0      2

// function test(num) {
//   console.log("hi")
//   if (num > 5) {
//     console.log(num);
//     return "foo";
//   }
//   else if (num >= 2) {
//    console.log(num * 2);
//   }
//   else {
//     return "other";
//   }
//  // console.log("finish")
// }

// console.log(test(2))

// //hi

// //10

// //foo

// //10

// function test(numA, numB) {
//   if (numA <= numB && numB > 4) {
//     console.log("deal");
//   }
//   else if (numB >= 4) {
//     return "no deal";
//   }
//   return "nope";
// }
// 1 < 5 && 5 > 4

// //returns deal

// //"nope"

// //console.log(test(1, 5));

// //console.log(test(100, 40));
// //100 <= 40 && 40 > 4

// //returns "no deal"

// 2 <= 2 && 2 > 4

// console.log(2 <= 2 && 2 > 4)
// //"deal"
// //nope

// console.log(test(2,2));
// functions

// let animal = 'tiger';
// const favoriteAnimal = () => {
//   let message = `My favorite animal is a ${animal}`;
//   return console.log(message);
// }
// favoriteAnimal();

// const favoritePet = (pet) => {
//   pet = 'dog';
//   let message = `My favorite animal is a ${pet}`;
//   return console.log(message);
// }
// favoritePet();

// let userName = 'John';

// function showMessage() {
//   let userName = "Bob"; // declare a local variable

//   let message = 'Hello, ' + userName; // Bob

//   return console.log(message);
// }

// // the function will create and use its own userName
// showMessage();

// const showMessage = (from, text , to) => {
//   return console.log(`${from} : ${text} : ${to}`);
// }

// showMessage('Alex', 'Hello beautiful', 'Irina')

// const showMessage = (from, text) => {
//   from = '*' + from + '*';
//   text = '<-----' + text;
//   return console.log(from, text);
// }

// showMessage('Alex', ' Is cool');
// showMessage('jeff', ' Is cool');

// const anotherFunction = (message) =>{
//   let name = 'Alex';
//   message = `Hello ${name}`
//   return message
// }

// function showMessage(from, text = anotherFunction()) {

//   return console.log((`${from} : ${text}`));
// }
// showMessage('Irina said')

// function showMessage(from, text) {
//   // if text is falsy then text gets the "default" value
//   text = text || 'no text given';
//   return console.log(from, text);
// }

// showMessage('Alex', 'message');

//test 1 PASS
// function checkAge(age){
//   if(age >= 18){
//     return 'Come in';
//   }
//   return 'Go Away!';
// }

// console.log(checkAge(23))

// //test 2 PASS

// // function test(age){
// //   return (age >= 18 ? 'Come in': 'Go away!');
// // }
// // console.log(test(2))

// // function checkAge(age){
// //   return(age >= 18 )|| 'go away';
// // }

// // console.log(checkAge(32))

// function checkAge(age){return console.log((age >= 18 ? 'Come In': 'Get Lost'))}; checkAge(2);
// function checkAge2(age){return console.log((age >= 18) || 'Get Away')} checkAge2(2)

// //test 3 PASS
// function min(num1, num2){
//    return (num1 < num2) ? num1:num2;
// }
// console.log(min(2,3));

// //test 4
// //Function pow(x,n)
// //Write a function pow(x, n) that returns x in power n.
// //Or, in other words, multiplies x by itself n times and returns the result.
// function power(num1, num2){
//   let output = num1;

//   for(let i = 1; i < num2; i++){
//      //I is equal to 1, if i is less than value of num2 which is 3, i is added until it breaks the loop
//      //in this case 2 times. 1 + 1 = 2...still less than 3 so it loops again 1+1 = 2.
//      //now 2+2 === 4 so that breaks the loop because its greater than 3
//     output *= num1;
//     //output is equals to value inside the value of num1 ...in this case 2
//     // *= means number1 = number1 * number1
//     //here i am multiplying 2 * 2 * 2 == 8
//   }
//   return output;

// }
// console.log(power(2,3)) //8

// function power(x,n){
//   let output = x;
//   for(let i = 1; i < n; i++){
//     output *= x;
//   }
//   return output;
// }
// console.log(power(2,3))

// Clarification:
// Arguments to this function can be of any type, so you can't assume there
// is ">" operation defined for every pair of them, so you can't use it.

// Review your logic to fix failed test cases and don't use ">" because comparing numbers and strings doesn't make sense but this function should work on a mix of argument types just fine.

// //Task 04 - numUnique
// function numUnique(x,y,z) {
//   // make it return the number of unique values among num1, num2 and num3
//   if(x == y || y == z || x === y || y === z){
//     return console.log(1);
//   }else if(x == y && y == z ){
//     return console.log(3);

//   }else {
//     return console.log('i dont know');
//   }
// }

// (function test(){
//   numUnique("zz", "cc", "aa");
//   // should print 3
//   numUnique(1, 4, 1);
//   // should print 2
//   numUnique(3, 5, 1)
// //3
//   numUnique(0, -4, 0)
// //2
//   numUnique(2, 2, 2)
// //1
//   numUnique("love", "hate", "love")
// //2
// })();

// // Task 07 - hasSameType

// function hasSameType(arg1, arg2) {
//   // make it return true if and only if arguments are of the same type, false otherwise

//   // you need to thoroughly read this chapter of the tutorial before doing this
//   // task

//   if(typeof arg1 === typeof arg2){
//     return console.log(true);
//   }else {
//     return console.log(false);
//   }
// }

// (function test(){
// hasSameType("1", 1)
// //false
// hasSameType("yes", "maybe")
// //true
// hasSameType(true, false)
// //true
// hasSameType("true", false)
// //false
// })();

// //Task 09 - repeat

// function repeat(x, n) {
//   // make this function print value x n times (if n is positive) or
//   // print nothing if n is negative or zero
//   let value = x;

//   if(n % 3 === 0){
//      console.log(true)

// }

// (function(){
// repeat("haha", 3)

// // haha
// // haha
// // haha

// })()

//Task 06 - booleanAnd

// function booleanAnd(arg1, arg2) {
//   // make this function act as a logical "AND" operator defined on strings
//   // (in other words, return true if and only if both arguments are truthy)

//   // again, for this task assume that each argument is a string

//   // let's agree that for the purpose of this task a string is truthy if
//   // and only if it is one of these: "true", "truth", "yes", "да", "1"
//   let x = ["true", "truth", "yes", "да", "1"];

//   x = true;

// (function test(){
// booleanAnd("yes", "no")
// // false
// booleanAnd("yes", "maybe")
// // false
// booleanAnd("1", "да")
// // true
// booleanAnd("truth", "да")
// // true
// booleanAnd("true", "bullshit")
// // false
// })();

// Create a variable with the name of our planet.How would you name such a variable ?
// Create a variable to store the name of a current visitor to a website.How would you name that variable ?

// let nameOfJS = prompt(`What is the official name of JS?, ''`);

// if(nameOfJS == 'EcmaScript'){
//   console.log('Right');
// }else{
//   console.log(`You dont know? EcmaScript`);
// }

// function getVal(val){

//   if(val > 0) {
//     return 1;
//   }else if(val < 0){
//     return -1;
//   }else {
//     return 0;
//   }

// }
// console.log(getVal());

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// function test(login){
//   let message =
//     (login == 'Employee')? 'hello' :
//     (login == 'Director')? 'Greetingd':
//     (login == '')? 'No login':
//     '';

//   return message;
// }

// console.log(test(''));

// Task 07 - hasSameType

// (function test() {
//   console.log(hasSameType("1", 1));
//   //false
//   console.log(hasSameType("yes", "maybe"));
//   //true
//   console.log(hasSameType(true, false));
//   //true
//   console.log(hasSameType("true", false));
//   //false
// })();
//sol #2

// function hasSameType(arg1, arg2) {
//   let output1;
//   output1 = typeof arg1 === typeof arg2 ? true : false;
//   return output1;
// }

// //sol #3
// function hasSameType2(arg1, arg2) {
//   let output2;
//   output2 = typeof arg1 === typeof arg2;
//   return output2;
// }

// function hasSameType3(arg1, arg2) {
//   return typeof arg1 === typeof arg2;
// }

// (function test() {
//   console.log(hasSameType("1", 1));
//   console.log(hasSameType2("yes", "maybe"));
//   console.log(hasSameType3('1',1));
// })();

//PAIN IN THE ASS
// //Create a function that takes a number(from 1 - 60) and returns a corresponding string of hyphens.
// function Go(num){
//   for (let y = 0; y < num; y++) {
//   for(let line = '-';line.length < num; line +='-'){
//     return line.repeat( num + y)
//   }
//   }

// }

// console.log(Go(19))

// //Create a function that takes a string as its argument and returns the string in reversed order.

// function reverse(str) {
//   str = str.split("");
//   console.log(str);

//   str = str.reverse();
//   console.log(str);

//   str = str.join("");
//   console.log(str);
// }

// (function test() {
//   reverse("Hello World");
//   // "dlroW olleH"

//   reverse("The quick brown fox.");
//   // ".xof nworb kciuq ehT"

//   reverse("Edabit is really helpful!");
//   //"!lufpleh yllaer si tibadE"
// })();

//----------->>>>>>.      ||

//In classical programming, the logical OR is meant to manipulate boolean values only.
//If any of its arguments are true, it returns true, otherwise it returns false.

// if (1 || 1) { // works just like if( true || false )
//   console.log('returns true one or both of the sides are true!');
// }else{
//   console.log('returns false only if both sides are false')
// }

// 1 = true
// true = true
// strings = true

// 0 = false
//false = false

// //create a function that returns
// //person works from 9 - 5

// function scheadule(hour, name){

//   if(hour < 9 || hour > 17){
//     //console.log('go home and rest')
//     return `go home and rest ${name}`;
//   }else {
//     //console.log('work work work')
//     return `work work work ${name}`;
//   }
// }

// console.log(scheadule(9 , 'Artyom'));

// //console.log(scheadule(10));
// //console.log(scheadule(8));

// //a little confusing
// let hour = 12;
// let isWeekend = false;

// //working from 10 to 18
// if (hour < 10 || hour > 18 || isWeekend) {
//   console.log('The office is closed.'); // it is the weekend
// }else{
//   console.log('work ')
// }

//console.log(true||1||'YES')

//understand this
// let currentUser = null;
// let defaultUser = "John";

// let name = "unnamed" || currentUser || defaultUser ;
// console.log(name);

//______________TRUTHY____FALSY
// //Always prints the first truthy
// let x;

// let result = false || true || 1 || (x = 2);

// console.log(x) // x is in the back of another truthy so it doest get assigned to 2
// console.log(result) //finds the first truthy

// // //always prints the last falsy
// const theFalsyFamily = () => {
//   let falsys = false || null || undefined || 0;
//  return falsys;
//  }

//  console.log(theFalsyFamily()); //prints 0

////----------------------        &&      ------------>>>>>
//In classical programming, AND returns true if BOTH operands are truthy and false otherwise:

// AND returns the first falsy value or the last value if none were found.

// console.log(true && true && true && true && false); //false
// console.log(false && false); //false
// console.log(false && true); //false
// console.log(true && true); //true

// //if comparing different TRUTHY values with && the LAST TRUTHY value will be picked
// console.log(true && 33 && 21 && 23 && "im picked because im last"); //prints the last truthy

// //if comparing different FALSY values with && the FIRST FALSY value will be picked
// console.log(null && undefined && null && false); //first falsy value is picked

// In other words, AND returns the first falsy value or the last value if none were found.

// The rules above are similar to OR.The difference is that AND returns the first falsy value while OR returns the first truthy one.

// function great3(x, y, z) {
//   return x & y & z;
//   console.log(x, y, z);
// }
// console.log(great3(1, 2, 3));

//comeback here tomorrow

//logical operators 101
//https://javascript.info/logical-operators?fbclid=IwAR2mK8_1JtnVqa2s_7S0vf8ESZh9XSnUrIx6dUtlkuOxDzJf_swtdHF9_iU

//Comparisons 101
//https://javascript.info/comparison?fbclid=IwAR1D5XLTgO8-xbybsh1iXS0kWPXnPf_DgQLC-R-_aG3XERLPfA1Ii7KCO90

//Operators 101
//https://javascript.info/operators?fbclid=IwAR0xfi0LS5RN-UNDUw63qSDKBecaBu361C2skclP04_lINcrL_6XDRAd6qY

//Task 04 - numUnique

// function numUnique(num1, num2, num3) {
//   // make it return the number of unique values among num1, num2 and num3
// }
//console.log(numUnique(3,5,3))

// Test case
// Expected value
// numUnique(3, 5, 1)
// 3
// numUnique(0, -4, 0)
// 2
// numUnique(2, 2, 2)
// 1
// numUnique("love", "hate", "love")
// 2

// console.log(true && false && true ); //false
// console.log(true || true || false ); //true

// // && returns the first falsy if any one of the vals are false.
// //if none of the vals are false it picks the last true valuse
// console.log(0&&true&&undefined); //returns 0

// // || returns a truthy the first truthy val
// console.log(null||true||false); //returns true

// //truthy finder
// function truthyFinder(val1,val2,val3){

//   return val1||val2||val3;
// }
// console.log(truthyFinder(0,false,'pick me'))

// //falsey finder
// function falsyFinder(val1, val2, val3) {

//   return val1 && val2 && val3;
// }
// console.log(falsyFinder(0, false, 'pick me')) // 0

// // .        &&
// console.log(falsyFinder(1,true,'pick me')); //4
// //         ||
// console.log(truthyFinder(2,3,4)) //2

// && return opposite of ||

//Task 06 - booleanAnd
// function booleanAnd(arg1, arg2) {
// make this function act as a logical "AND" operator defined on strings
// (in other words, return true if and only if both arguments are truthy)
// again, for this task assume that each argument is a string
// let's agree that for the purpose of this task a string is truthy if
// and only if it is one of these: "true", "truth", "yes", "да", "1"
//   function booleanAnd(arg1, arg2) {

// // Test case
// // Expected value
// (function test(){
// (booleanAnd("yes", "no"))
// false
// booleanAnd("yes", "maybe")
// false
// booleanAnd("1", "да")
// true
// booleanAnd("truth", "да")
// true
// booleanAnd("true", "bullshit")
// false
// })();
//a string is truthy if and only if it is one of these"
//the function should treat "yes" as truthy
//"no" and "banana" as NOT truthy

//nope, return value 'true' if both arguments are "truthy"
//return value 'false' if either of them is not "truthy" (again, in task 06's sense of truthiness)

// function booleanAnd(val) {
//   if (
//     val === "yes" &&
//     val === "1" &&
//     val === "truth" &&
//     val === "true" &&
//     val === "да"
//   ) {
//     return console.log(true);
//   } else if (val === "no" && val === "maybe" && val === "bullshit") {
//     return console.log(false);
//   }
//   return val;
// }

// (function testThese() {
//   booleanAnd("yes", "no");
//   //false
//   booleanAnd("yes", "maybe");
//   //false
//   booleanAnd("1", "да");
//   //true
//   booleanAnd("truth", "да");
//   //true
//   booleanAnd("true", "bullshit");
//   //false
// })();

// console.log(typeof ("345" + 5))
// console.log("345" + 5)
// console.log(typeof (true && "falsy"))

// console.log(true&&true&&1||true||true||1);

// console.log(true||true||true&&true);

// console.log(true||0 && 1||null);

// //Test 5
// function swap(a, b) {
//   // make this function return "5:3" if it was called like swap(3, 5)
//   // this may seem silly, but this will teach you a very common pattern
//   if (a !== b || a === b) {
//     // IMPORTANT: you can't change the line below (and it's not a typo)
//     return a + ":" + b && b + ":" + a;
//   }
// }

// (function test() {
//   console.log(swap(3, 5));
//   console.log(swap(0, -4));
//   console.log(swap(2, 2));
//   console.log(swap("zz", "cc"));
//   console.log(swap(2, 4));
// })();
// //5:3
// //- 4: 0
// //2: 2
// //cc: zz
// //4:2

// function booleanAnd(arg1, arg2) {
//   let truthyVals = ["true", "truth", "yes", "да", "1"];

//   if (arg1 !== truthyVals) {
//     return console.log(false);
//   } else if (arg2 !== truthyVals) {
//     return console.log(false);
//   } else {
//     return console.log(true);
//   }
// }

// (function test() {
//   booleanAnd("yes", "no");
//   //false
//   booleanAnd("yes", "maybe");
//   //false
//   booleanAnd("1", "да");
//   //true
//   booleanAnd("truth", "да");
//   //true
//   booleanAnd("true", "bullshit");
//   //false
// })();

//Task 03 - max3

//Task 03 - max3 - NOT QUITE

// function max3(num1, num2, num3) {
// make this function return the maximum of num1, num2 and num3
// can’t use any built-in max functions if any exists in JS
//   if (num2 > 0 && num2 > 0 && num1 > -0){
//     return num2;
//   }
// }

// (function test(){
// console.log(max3(3, 5, 1))
// //5
// console.log(max3(0, -4, 0))
// //0
// console.log(max3(1, 2, 3));
// //3
// console.log(max3(3, 2, 1));
// //3
// console.log(max3(0, 0, 0));
// //0
// console.log(max3(1, 1, 1));
// //1
// console.log(max3(1,3,2));
// //3
// })();

// //falsy
// console.log(null && 0 && -0);

// //truthy
// console.log(null || undefined || 0)

//Write an “if” condition to check that age is between 14 and 90 inclusively.

//“Inclusively” means that age can reach the edges 14 or 90.

// //1 Check the range between
// //Write an “if” condition to check that age is between 14 and 90 inclusively.
// //“Inclusively” means that age can reach the edges 14 or 90.
// function checkAge(age) {
//   return (age >= 14 && age <= 90 ? "in the ballpark" : "over or unerage");
// }

// console.log(checkAge(91))

// // 2 Check the range outside
// // Write an if condition to check that age is NOT between 14 and 90 inclusively.
// // Create two variants: the first one using NOT! , the second one – without it.

// function checkAge(age) {
//   console.log(!(age >= 14 && age <= 90)? 'is NOT between 14 and 90': 'try again');
//   console.log(age < 14 || age > 90 ? 'is NOT between 14 and 90' : 'try again');
// }
// console.log(checkAge(1));

// Check the login
// // Write the code which asks for a login with prompt.

// // If the visitor enters "Admin", then prompt for a password,
// // if the input is an empty line or Esc – show “Canceled.”,
// // if it’s another string – then show “I don’t know you”.

// // The password is checked as follows:

// // If it equals “TheMaster”, then show “Welcome!”,
// // Another string – show “Wrong password”,
// // For an empty string or cancelled input, show “Canceled.”

// let userName = prompt('Whos There?','');

// if (userName === 'Irina'){
//   let password = prompt('Please type in your password','');
//   if(password === 'Suslova'){
//     alert(`Welcome ${userName}`)
//     }else if(password === ''|| password === null){
//       alert('Type something here...');
//     }else{
//       alert('Wrong Password');
//     }
//   }else if(userName === '' || userName === null){
//   alert('Type in your username please!');
// }else{
//   alert('I dont know you!!');
// }

//a is greater than A. wow!
//alert('a' === 'A')? true: false;
//alert('2' > 1); // true, string '2' becomes a number 2

//For boolean values, true becomes 1 and false becomes 0.
// alert(true == 1); // true
// alert(false == 0); // true
//Don’t use comparisons >= > < <= with a variable which may be null/undefined, --
//--unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.
//"2" > "12" → true
//Again, dictionary comparison, first char of "2" is greater than the first char of "1".

//However, note that operations run from left to right. If there are two numbers followed by a string, the numbers will be added before being converted to a string:

//alert(2 + 2 + '1'); // "41" and not "221"

//The exponentiation operator ** is a recent addition to the language.
//For a natural number b, the result of a ** b is a multiplied by itself b times.
//For instance:
//alert(2 ** 4); // 16 (2 * 2 * 2 * 2)

//alert(2**4) 2*2*2*2 === 16

// let counter = 1;
// let a = ++counter; // (*)
// console.log(`I am #${a -1}` )

// const totalNums = (n, x, z) => {

//   return console.log(x + n + z);

// }
// // totalNums(2,3,4);
// function test() {
//   console.log("hi")
// }

// test();

// function test() {
//   console.log("hi")
//   return "stuff";
//   console.log("ola");
// }

// console.log(test())

// function test() {
//   console.log("hi")
//   return "stuff";
//   console.log("ola");
// }

// console.log(test())

// //#4 Given this function
// //10       0      2

// function test(num) {
//   console.log("hi")
//   if (num > 5) {
//     console.log(num);
//     return "foo";
//   }
//   else if (num >= 2) {
//    console.log(num * 2);
//   }
//   else {
//     return "other";
//   }
//  // console.log("finish")
// }

// console.log(test(2))

// //hi

// //10

// //foo

// //10

// function test(numA, numB) {
//   if (numA <= numB && numB > 4) {
//     console.log("deal");
//   }
//   else if (numB >= 4) {
//     return "no deal";
//   }
//   return "nope";
// }
// 1 < 5 && 5 > 4

// //returns deal

// //"nope"

// //console.log(test(1, 5));

// //console.log(test(100, 40));
// //100 <= 40 && 40 > 4

// //returns "no deal"

// 2 <= 2 && 2 > 4

// console.log(2 <= 2 && 2 > 4)
// //"deal"
// //nope

// console.log(test(2,2));
// functions

// let animal = 'tiger';
// const favoriteAnimal = () => {
//   let message = `My favorite animal is a ${animal}`;
//   return console.log(message);
// }
// favoriteAnimal();

// const favoritePet = (pet) => {
//   pet = 'dog';
//   let message = `My favorite animal is a ${pet}`;
//   return console.log(message);
// }
// favoritePet();

// let userName = 'John';

// function showMessage() {
//   let userName = "Bob"; // declare a local variable

//   let message = 'Hello, ' + userName; // Bob

//   return console.log(message);
// }

// // the function will create and use its own userName
// showMessage();

// const showMessage = (from, text , to) => {
//   return console.log(`${from} : ${text} : ${to}`);
// }

// showMessage('Alex', 'Hello beautiful', 'Irina')

// const showMessage = (from, text) => {
//   from = '*' + from + '*';
//   text = '<-----' + text;
//   return console.log(from, text);
// }

// showMessage('Alex', ' Is cool');
// showMessage('jeff', ' Is cool');

// const anotherFunction = (message) =>{
//   let name = 'Alex';
//   message = `Hello ${name}`
//   return message
// }

// function showMessage(from, text = anotherFunction()) {

//   return console.log((`${from} : ${text}`));
// }
// showMessage('Irina said')

// function showMessage(from, text) {
//   // if text is falsy then text gets the "default" value
//   text = text || 'no text given';
//   return console.log(from, text);
// }

// showMessage('Alex', 'message');

//test 1 PASS
// function checkAge(age){
//   if(age >= 18){
//     return 'Come in';
//   }
//   return 'Go Away!';
// }

// console.log(checkAge(23))

// //test 2 PASS

// // function test(age){
// //   return (age >= 18 ? 'Come in': 'Go away!');
// // }
// // console.log(test(2))

// // function checkAge(age){
// //   return(age >= 18 )|| 'go away';
// // }

// // console.log(checkAge(32))

// function checkAge(age){return console.log((age >= 18 ? 'Come In': 'Get Lost'))}; checkAge(2);
// function checkAge2(age){return console.log((age >= 18) || 'Get Away')} checkAge2(2)

// //test 3 PASS
// function min(num1, num2){
//    return (num1 < num2) ? num1:num2;
// }
// console.log(min(2,3));

// //test 4
// //Function pow(x,n)
// //Write a function pow(x, n) that returns x in power n.
// //Or, in other words, multiplies x by itself n times and returns the result.
// function power(num1, num2){
//   let output = num1;

//   for(let i = 1; i < num2; i++){
//      //I is equal to 1, if i is less than value of num2 which is 3, i is added until it breaks the loop
//      //in this case 2 times. 1 + 1 = 2...still less than 3 so it loops again 1+1 = 2.
//      //now 2+2 === 4 so that breaks the loop because its greater than 3
//     output *= num1;
//     //output is equals to value inside the value of num1 ...in this case 2
//     // *= means number1 = number1 * number1
//     //here i am multiplying 2 * 2 * 2 == 8
//   }
//   return output;

// }
// console.log(power(2,3)) //8

// function power(x,n){
//   let output = x;
//   for(let i = 1; i < n; i++){
//     output *= x;
//   }
//   return output;
// }
// console.log(power(2,3))

// Clarification:
// Arguments to this function can be of any type, so you can't assume there
// is ">" operation defined for every pair of them, so you can't use it.

// Review your logic to fix failed test cases and don't use ">" because comparing numbers and strings doesn't make sense but this function should work on a mix of argument types just fine.

// //Task 04 - numUnique
// function numUnique(x,y,z) {
//   // make it return the number of unique values among num1, num2 and num3
//   if(x == y || y == z || x === y || y === z){
//     return console.log(1);
//   }else if(x == y && y == z ){
//     return console.log(3);

//   }else {
//     return console.log('i dont know');
//   }
// }

// (function test(){
//   numUnique("zz", "cc", "aa");
//   // should print 3
//   numUnique(1, 4, 1);
//   // should print 2
//   numUnique(3, 5, 1)
// //3
//   numUnique(0, -4, 0)
// //2
//   numUnique(2, 2, 2)
// //1
//   numUnique("love", "hate", "love")
// //2
// })();

// // Task 07 - hasSameType

// function hasSameType(arg1, arg2) {
//   // make it return true if and only if arguments are of the same type, false otherwise

//   // you need to thoroughly read this chapter of the tutorial before doing this
//   // task

//   if(typeof arg1 === typeof arg2){
//     return console.log(true);
//   }else {
//     return console.log(false);
//   }
// }

// (function test(){
// hasSameType("1", 1)
// //false
// hasSameType("yes", "maybe")
// //true
// hasSameType(true, false)
// //true
// hasSameType("true", false)
// //false
// })();

// //Task 09 - repeat

// function repeat(x, n) {
//   // make this function print value x n times (if n is positive) or
//   // print nothing if n is negative or zero
//   let value = x;

//   if(n % 3 === 0){
//      console.log(true)

// }

// (function(){
// repeat("haha", 3)

// // haha
// // haha
// // haha

// })()

//Task 06 - booleanAnd

// function booleanAnd(arg1, arg2) {
//   // make this function act as a logical "AND" operator defined on strings
//   // (in other words, return true if and only if both arguments are truthy)

//   // again, for this task assume that each argument is a string

//   // let's agree that for the purpose of this task a string is truthy if
//   // and only if it is one of these: "true", "truth", "yes", "да", "1"
//   let x = ["true", "truth", "yes", "да", "1"];

//   x = true;

// (function test(){
// booleanAnd("yes", "no")
// // false
// booleanAnd("yes", "maybe")
// // false
// booleanAnd("1", "да")
// // true
// booleanAnd("truth", "да")
// // true
// booleanAnd("true", "bullshit")
// // false
// })();

// Create a variable with the name of our planet.How would you name such a variable ?
// Create a variable to store the name of a current visitor to a website.How would you name that variable ?

// let nameOfJS = prompt(`What is the official name of JS?, ''`);

// if(nameOfJS == 'EcmaScript'){
//   console.log('Right');
// }else{
//   console.log(`You dont know? EcmaScript`);
// }

// function getVal(val){

//   if(val > 0) {
//     return 1;
//   }else if(val < 0){
//     return -1;
//   }else {
//     return 0;
//   }

// }
// console.log(getVal());

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// function test(login){
//   let message =
//     (login == 'Employee')? 'hello' :
//     (login == 'Director')? 'Greetingd':
//     (login == '')? 'No login':
//     '';

//   return message;
// }

// console.log(test(''));

// Task 07 - hasSameType

// function hasSameType(arg1, arg2) {
//   //cool way...that doesnt work
//   let lame;
//   lame = typeof arg1 === typeof arg2 ? true : false;
//   return lame;
//   //lame way..that works
//   if (typeof arg1 === typeof arg2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// (function test() {
//   console.log(hasSameType("1", 1));
//   //false
//   console.log(hasSameType("yes", "maybe"));
//   //true
//   console.log(hasSameType(true, false));
//   //true
//   console.log(hasSameType("true", false));
//   //false
// })();
//sol #2

// function hasSameType(arg1, arg2) {
//   let output1;
//   output1 = typeof arg1 === typeof arg2 ? true : false;
//   return output1;
// }

// //sol #3
// function hasSameType2(arg1, arg2) {
//   let output2;
//   output2 = typeof arg1 === typeof arg2;
//   return output2;
// }

// function hasSameType3(arg1, arg2) {
//   return typeof arg1 === typeof arg2;
// }

// (function test() {
//   console.log(hasSameType("1", 1));
//   console.log(hasSameType2("yes", "maybe"));
//   console.log(hasSameType3('1',1));
// })();

// //Create a function that takes an array of students and returns an array of student names.
//stuck
// //array of students
// const students = [{ name: "Steve" }, { name: "Mike" }, { name: "John" }] // desired output ["Steve", "Mike", "John"]

// return console.log(students[0].name)

//Create a function that takes a number(from 1 - 60) and returns a corresponding string of hyphens.

// function Go(number) {
//   let dash = "-";
//   for (let number = 1; number <= 60; number++) {
//     number = number + dash;
//     console.log(number);
//   }
// }

// //Examples

// Go(1); // "-"

// Go(5); // "-----"

// Go(3); // "---"
//In classical programming, the logical OR is meant to manipulate boolean values only.
//If any of its arguments are true, it returns true, otherwise it returns false.

// if (1 || 1) { // works just like if( true || false )
//   console.log('returns true one or both of the sides are true!');
// }else{
//   console.log('returns false only if both sides are false')
// }

// 1 = true
// true = true
// strings = true

// 0 = false
//false = false

// //create a function that returns
// //person works from 9 - 5

// function scheadule(hour, name){

//   if(hour < 9 || hour > 17){
//     //console.log('go home and rest')
//     return `go home and rest ${name}`;
//   }else {
//     //console.log('work work work')
//     return `work work work ${name}`;
//   }
// }

// console.log(scheadule(9 , 'Artyom'));

// //console.log(scheadule(10));
// //console.log(scheadule(8));

// //a little confusing
// let hour = 12;
// let isWeekend = false;

// //working from 10 to 18
// if (hour < 10 || hour > 18 || isWeekend) {
//   console.log('The office is closed.'); // it is the weekend
// }else{
//   console.log('work ')
// }

//console.log(true||1||'YES')

//understand this
// let currentUser = null;
// let defaultUser = "John";

// let name = "unnamed" || currentUser || defaultUser ;
// console.log(name);

//______________TRUTHY____FALSY
// //Always prints the first truthy
// let x;

// let result = false || true || 1 || (x = 2);

// console.log(x) // x is in the back of another truthy so it doest get assigned to 2
// console.log(result) //finds the first truthy

// // //always prints the last falsy
// const theFalsyFamily = () => {
//   let falsys = false || null || undefined || 0;
//  return falsys;
//  }

//  console.log(theFalsyFamily()); //prints 0

////----------------------        &&      ------------>>>>>
//In classical programming, AND returns true if BOTH operands are truthy and false otherwise:

// AND returns the first falsy value or the last value if none were found.

// console.log(true && true && true && true && false); //false
// console.log(false && false); //false
// console.log(false && true); //false
// console.log(true && true); //true

// //if comparing different TRUTHY values with && the LAST TRUTHY value will be picked
// console.log(true && 33 && 21 && 23 && "im picked because im last"); //prints the last truthy

// //if comparing different FALSY values with && the FIRST FALSY value will be picked
// console.log(null && undefined && null && false); //first falsy value is picked

// In other words, AND returns the first falsy value or the last value if none were found.

// The rules above are similar to OR.The difference is that AND returns the first falsy value while OR returns the first truthy one.

// function great3(x, y, z) {
//   return x & y & z;
//   console.log(x, y, z);
// }
// console.log(great3(1, 2, 3));

//comeback here tomorrow

//logical operators 101
//https://javascript.info/logical-operators?fbclid=IwAR2mK8_1JtnVqa2s_7S0vf8ESZh9XSnUrIx6dUtlkuOxDzJf_swtdHF9_iU

//Comparisons 101
//https://javascript.info/comparison?fbclid=IwAR1D5XLTgO8-xbybsh1iXS0kWPXnPf_DgQLC-R-_aG3XERLPfA1Ii7KCO90

//Operators 101
//https://javascript.info/operators?fbclid=IwAR0xfi0LS5RN-UNDUw63qSDKBecaBu361C2skclP04_lINcrL_6XDRAd6qY

//Task 04 - numUnique

// function numUnique(num1, num2, num3) {
//   // make it return the number of unique values among num1, num2 and num3
// }
//console.log(numUnique(3,5,3))

// Test case
// Expected value
// numUnique(3, 5, 1)
// 3
// numUnique(0, -4, 0)
// 2
// numUnique(2, 2, 2)
// 1
// numUnique("love", "hate", "love")
// 2

// console.log(true && false && true ); //false
// console.log(true || true || false ); //true

// // && returns the first falsy if any one of the vals are false.
// //if none of the vals are false it picks the last true valuse
// console.log(0&&true&&undefined); //returns 0

// // || returns a truthy the first truthy val
// console.log(null||true||false); //returns true

// //truthy finder
// function truthyFinder(val1,val2,val3){

//   return val1||val2||val3;
// }
// console.log(truthyFinder(0,false,'pick me'))

// //falsey finder
// function falsyFinder(val1, val2, val3) {

//   return val1 && val2 && val3;
// }
// console.log(falsyFinder(0, false, 'pick me')) // 0

// // .        &&
// console.log(falsyFinder(1,true,'pick me')); //4
// //         ||
// console.log(truthyFinder(2,3,4)) //2

// && return opposite of ||

//Task 06 - booleanAnd
// function booleanAnd(arg1, arg2) {
// make this function act as a logical "AND" operator defined on strings
// (in other words, return true if and only if both arguments are truthy)
// again, for this task assume that each argument is a string
// let's agree that for the purpose of this task a string is truthy if
// and only if it is one of these: "true", "truth", "yes", "да", "1"
//   function booleanAnd(arg1, arg2) {

// // Test case
// // Expected value
// (function test(){
// (booleanAnd("yes", "no"))
// false
// booleanAnd("yes", "maybe")
// false
// booleanAnd("1", "да")
// true
// booleanAnd("truth", "да")
// true
// booleanAnd("true", "bullshit")
// false
// })();
//a string is truthy if and only if it is one of these"
//the function should treat "yes" as truthy
//"no" and "banana" as NOT truthy

//nope, return value 'true' if both arguments are "truthy"
//return value 'false' if either of them is not "truthy" (again, in task 06's sense of truthiness)

// function booleanAnd(val) {
//   if (
//     val === "yes" &&
//     val === "1" &&
//     val === "truth" &&
//     val === "true" &&
//     val === "да"
//   ) {
//     return console.log(true);
//   } else if (val === "no" && val === "maybe" && val === "bullshit") {
//     return console.log(false);
//   }
//   return val;
// }

// (function testThese() {
//   booleanAnd("yes", "no");
//   //false
//   booleanAnd("yes", "maybe");
//   //false
//   booleanAnd("1", "да");
//   //true
//   booleanAnd("truth", "да");
//   //true
//   booleanAnd("true", "bullshit");
//   //false
// })();

// console.log(typeof ("345" + 5))
// console.log("345" + 5)
// console.log(typeof (true && "falsy"))

// console.log(true&&true&&1||true||true||1);

// console.log(true||true||true&&true);

// console.log(true||0 && 1||null);

// //Test 5
// function swap(a, b) {
//   // make this function return "5:3" if it was called like swap(3, 5)
//   // this may seem silly, but this will teach you a very common pattern
//   if (a !== b || a === b) {
//     // IMPORTANT: you can't change the line below (and it's not a typo)
//     return a + ":" + b && b + ":" + a;
//   }
// }

// (function test() {
//   console.log(swap(3, 5));
//   console.log(swap(0, -4));
//   console.log(swap(2, 2));
//   console.log(swap("zz", "cc"));
//   console.log(swap(2, 4));
// })();
// //5:3
// //- 4: 0
// //2: 2
// //cc: zz
// //4:2

// function booleanAnd(arg1, arg2) {
//   let truthyVals = ["true", "truth", "yes", "да", "1"];

//   if (arg1 !== truthyVals) {
//     return console.log(false);
//   } else if (arg2 !== truthyVals) {
//     return console.log(false);
//   } else {
//     return console.log(true);
//   }
// }

// (function test() {
//   booleanAnd("yes", "no");
//   //false
//   booleanAnd("yes", "maybe");
//   //false
//   booleanAnd("1", "да");
//   //true
//   booleanAnd("truth", "да");
//   //true
//   booleanAnd("true", "bullshit");
//   //false
// })();

//Task 03 - max3

//Task 03 - max3 - NOT QUITE

// function max3(num1, num2, num3) {
// make this function return the maximum of num1, num2 and num3
// can’t use any built-in max functions if any exists in JS
//   if (num2 > 0 && num2 > 0 && num1 > -0){
//     return num2;
//   }
// }

// (function test(){
// console.log(max3(3, 5, 1))
// //5
// console.log(max3(0, -4, 0))
// //0
// console.log(max3(1, 2, 3));
// //3
// console.log(max3(3, 2, 1));
// //3
// console.log(max3(0, 0, 0));
// //0
// console.log(max3(1, 1, 1));
// //1
// console.log(max3(1,3,2));
// //3
// })();

// //falsy
// console.log(null && 0 && -0);

// //truthy
// console.log(null || undefined || 0)

//Write an “if” condition to check that age is between 14 and 90 inclusively.

//“Inclusively” means that age can reach the edges 14 or 90.

// //1 Check the range between
// //Write an “if” condition to check that age is between 14 and 90 inclusively.
// //“Inclusively” means that age can reach the edges 14 or 90.
// function checkAge(age) {
//   return (age >= 14 && age <= 90 ? "in the ballpark" : "over or unerage");
// }

// console.log(checkAge(91))

// // 2 Check the range outside
// // Write an if condition to check that age is NOT between 14 and 90 inclusively.
// // Create two variants: the first one using NOT! , the second one – without it.

// function checkAge(age) {
//   console.log(!(age >= 14 && age <= 90)? 'is NOT between 14 and 90': 'try again');
//   console.log(age < 14 || age > 90 ? 'is NOT between 14 and 90' : 'try again');
// }
// console.log(checkAge(1));

// Check the login
// // Write the code which asks for a login with prompt.

// // If the visitor enters "Admin", then prompt for a password,
// // if the input is an empty line or Esc – show “Canceled.”,
// // if it’s another string – then show “I don’t know you”.

// // The password is checked as follows:

// // If it equals “TheMaster”, then show “Welcome!”,
// // Another string – show “Wrong password”,
// // For an empty string or cancelled input, show “Canceled.”

// let userName = prompt('Whos There?','');

// if (userName === 'Irina'){
//   let password = prompt('Please type in your password','');
//   if(password === 'Suslova'){
//     alert(`Welcome ${userName}`)
//     }else if(password === ''|| password === null){
//       alert('Type something here...');
//     }else{
//       alert('Wrong Password');
//     }
//   }else if(userName === '' || userName === null){
//   alert('Type in your username please!');
// }else{
//   alert('I dont know you!!');
// }

//a is greater than A. wow!
//alert('a' === 'A')? true: false;
//alert('2' > 1); // true, string '2' becomes a number 2

//For boolean values, true becomes 1 and false becomes 0.
// alert(true == 1); // true
// alert(false == 0); // true
//Don’t use comparisons >= > < <= with a variable which may be null/undefined, --
//--unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.
//"2" > "12" → true
//Again, dictionary comparison, first char of "2" is greater than the first char of "1".

//However, note that operations run from left to right. If there are two numbers followed by a string, the numbers will be added before being converted to a string:

//alert(2 + 2 + '1'); // "41" and not "221"

//The exponentiation operator ** is a recent addition to the language.
//For a natural number b, the result of a ** b is a multiplied by itself b times.
//For instance:
//alert(2 ** 4); // 16 (2 * 2 * 2 * 2)

//alert(2**4) 2*2*2*2 === 16

// let counter = 1;
// let a = ++counter; // (*)
// console.log(`I am #${a -1}` )

// const totalNums = (n, x, z) => {

//   return console.log(x + n + z);

// }
// // totalNums(2,3,4);
// function test() {
//   console.log("hi")
// }

// test();

// function test() {
//   console.log("hi")
//   return "stuff";
//   console.log("ola");
// }

// console.log(test())

// function test() {
//   console.log("hi")
//   return "stuff";
//   console.log("ola");
// }

// console.log(test())

// //#4 Given this function
// //10       0      2

// function test(num) {
//   console.log("hi")
//   if (num > 5) {
//     console.log(num);
//     return "foo";
//   }
//   else if (num >= 2) {
//    console.log(num * 2);
//   }
//   else {
//     return "other";
//   }
//  // console.log("finish")
// }

// console.log(test(2))

// //hi

// //10

// //foo

// //10

// function test(numA, numB) {
//   if (numA <= numB && numB > 4) {
//     console.log("deal");
//   }
//   else if (numB >= 4) {
//     return "no deal";
//   }
//   return "nope";
// }
// 1 < 5 && 5 > 4

// //returns deal

// //"nope"

// //console.log(test(1, 5));

// //console.log(test(100, 40));
// //100 <= 40 && 40 > 4

// //returns "no deal"

// 2 <= 2 && 2 > 4

// console.log(2 <= 2 && 2 > 4)
// //"deal"
// //nope

// console.log(test(2,2));
// functions

// let animal = 'tiger';
// const favoriteAnimal = () => {
//   let message = `My favorite animal is a ${animal}`;
//   return console.log(message);
// }
// favoriteAnimal();

// const favoritePet = (pet) => {
//   pet = 'dog';
//   let message = `My favorite animal is a ${pet}`;
//   return console.log(message);
// }
// favoritePet();

// let userName = 'John';

// function showMessage() {
//   let userName = "Bob"; // declare a local variable

//   let message = 'Hello, ' + userName; // Bob

//   return console.log(message);
// }

// // the function will create and use its own userName
// showMessage();

// const showMessage = (from, text , to) => {
//   return console.log(`${from} : ${text} : ${to}`);
// }

// showMessage('Alex', 'Hello beautiful', 'Irina')

// const showMessage = (from, text) => {
//   from = '*' + from + '*';
//   text = '<-----' + text;
//   return console.log(from, text);
// }

// showMessage('Alex', ' Is cool');
// showMessage('jeff', ' Is cool');

// const anotherFunction = (message) =>{
//   let name = 'Alex';
//   message = `Hello ${name}`
//   return message
// }

// function showMessage(from, text = anotherFunction()) {

//   return console.log((`${from} : ${text}`));
// }
// showMessage('Irina said')

// function showMessage(from, text) {
//   // if text is falsy then text gets the "default" value
//   text = text || 'no text given';
//   return console.log(from, text);
// }

// showMessage('Alex', 'message');

//test 1 PASS
// function checkAge(age){
//   if(age >= 18){
//     return 'Come in';
//   }
//   return 'Go Away!';
// }

// console.log(checkAge(23))

// //test 2 PASS

// // function test(age){
// //   return (age >= 18 ? 'Come in': 'Go away!');
// // }
// // console.log(test(2))

// // function checkAge(age){
// //   return(age >= 18 )|| 'go away';
// // }

// // console.log(checkAge(32))

// function checkAge(age){return console.log((age >= 18 ? 'Come In': 'Get Lost'))}; checkAge(2);
// function checkAge2(age){return console.log((age >= 18) || 'Get Away')} checkAge2(2)

// //test 3 PASS
// function min(num1, num2){
//    return (num1 < num2) ? num1:num2;
// }
// console.log(min(2,3));

// //test 4
// //Function pow(x,n)
// //Write a function pow(x, n) that returns x in power n.
// //Or, in other words, multiplies x by itself n times and returns the result.
// function power(num1, num2){
//   let output = num1;

//   for(let i = 1; i < num2; i++){
//      //I is equal to 1, if i is less than value of num2 which is 3, i is added until it breaks the loop
//      //in this case 2 times. 1 + 1 = 2...still less than 3 so it loops again 1+1 = 2.
//      //now 2+2 === 4 so that breaks the loop because its greater than 3
//     output *= num1;
//     //output is equals to value inside the value of num1 ...in this case 2
//     // *= means number1 = number1 * number1
//     //here i am multiplying 2 * 2 * 2 == 8
//   }
//   return output;

// }
// console.log(power(2,3)) //8

// function power(x,n){
//   let output = x;
//   for(let i = 1; i < n; i++){
//     output *= x;
//   }
//   return output;
// }
// console.log(power(2,3))

// Clarification:
// Arguments to this function can be of any type, so you can't assume there
// is ">" operation defined for every pair of them, so you can't use it.

// Review your logic to fix failed test cases and don't use ">" because comparing numbers and strings doesn't make sense but this function should work on a mix of argument types just fine.

// //Task 04 - numUnique
// function numUnique(x,y,z) {
//   // make it return the number of unique values among num1, num2 and num3
//   if(x == y || y == z || x === y || y === z){
//     return console.log(1);
//   }else if(x == y && y == z ){
//     return console.log(3);

//   }else {
//     return console.log('i dont know');
//   }
// }

// (function test(){
//   numUnique("zz", "cc", "aa");
//   // should print 3
//   numUnique(1, 4, 1);
//   // should print 2
//   numUnique(3, 5, 1)
// //3
//   numUnique(0, -4, 0)
// //2
//   numUnique(2, 2, 2)
// //1
//   numUnique("love", "hate", "love")
// //2
// })();

// // Task 07 - hasSameType

// function hasSameType(arg1, arg2) {
//   // make it return true if and only if arguments are of the same type, false otherwise

//   // you need to thoroughly read this chapter of the tutorial before doing this
//   // task

//   if(typeof arg1 === typeof arg2){
//     return console.log(true);
//   }else {
//     return console.log(false);
//   }
// }

// (function test(){
// hasSameType("1", 1)
// //false
// hasSameType("yes", "maybe")
// //true
// hasSameType(true, false)
// //true
// hasSameType("true", false)
// //false
// })();

// //Task 09 - repeat

// function repeat(x, n) {
//   // make this function print value x n times (if n is positive) or
//   // print nothing if n is negative or zero
//   let value = x;

//   if(n % 3 === 0){
//      console.log(true)

// }

// (function(){
// repeat("haha", 3)

// // haha
// // haha
// // haha

// })()

//Task 06 - booleanAnd

// function booleanAnd(arg1, arg2) {
//   // make this function act as a logical "AND" operator defined on strings
//   // (in other words, return true if and only if both arguments are truthy)

//   // again, for this task assume that each argument is a string

//   // let's agree that for the purpose of this task a string is truthy if
//   // and only if it is one of these: "true", "truth", "yes", "да", "1"
//   let x = ["true", "truth", "yes", "да", "1"];

//   x = true;

// (function test(){
// booleanAnd("yes", "no")
// // false
// booleanAnd("yes", "maybe")
// // false
// booleanAnd("1", "да")
// // true
// booleanAnd("truth", "да")
// // true
// booleanAnd("true", "bullshit")
// // false
// })();

// Create a variable with the name of our planet.How would you name such a variable ?
// Create a variable to store the name of a current visitor to a website.How would you name that variable ?

// let nameOfJS = prompt(`What is the official name of JS?, ''`);

// if(nameOfJS == 'EcmaScript'){
//   console.log('Right');
// }else{
//   console.log(`You dont know? EcmaScript`);
// }

// function getVal(val){

//   if(val > 0) {
//     return 1;
//   }else if(val < 0){
//     return -1;
//   }else {
//     return 0;
//   }

// }
// console.log(getVal());

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// function test(login){
//   let message =
//     (login == 'Employee')? 'hello' :
//     (login == 'Director')? 'Greetingd':
//     (login == '')? 'No login':
//     '';

//   return message;
// }

// console.log(test(''));

// Task 07 - hasSameType

// function hasSameType(arg1, arg2) {
//   //cool way...that doesnt work
//   let lame;
//   lame = typeof arg1 === typeof arg2 ? true : false;
//   return lame;
//   //lame way..that works
//   if (typeof arg1 === typeof arg2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// (function test() {
//   console.log(hasSameType("1", 1));
//   //false
//   console.log(hasSameType("yes", "maybe"));
//   //true
//   console.log(hasSameType(true, false));
//   //true
//   console.log(hasSameType("true", false));
//   //false
// })();
//sol #2

// function hasSameType(arg1, arg2) {
//   let output1;
//   output1 = typeof arg1 === typeof arg2 ? true : false;
//   return output1;
// }

// //sol #3
// function hasSameType2(arg1, arg2) {
//   let output2;
//   output2 = typeof arg1 === typeof arg2;
//   return output2;
// }

// function hasSameType3(arg1, arg2) {
//   return typeof arg1 === typeof arg2;
// }

// (function test() {
//   console.log(hasSameType("1", 1));
//   console.log(hasSameType2("yes", "maybe"));
//   console.log(hasSameType3('1',1));
// })();
// var students = [{ name: "Steve" }, { name: "Mike" }, { name: "John" }];//["Steve", "Mike", "John"]

// function getStudentNames(students) {
//   //let map1 = students.map(x => x * 2);

//   console.log(students);

// }

// //example
// getStudentNames(([{ name: "Steve" }, { name: "Mike" }, { name: "John" }]))

//Create a function that takes a number(from 1 - 60) and returns a corresponding string of hyphens.
// function Go(num){
// return '-'.repeat(num);\
// }

// //console.log(Go(5))

//   //Examples
// console.log(Go(1)) // "-"

// // Go(5) // "-----"

// // Go(3) // "---"

//Create a function that takes an array of numbers and returns only the even values.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function noOdds(arr) {
//   return console.log(arr.filter(x => !(x % 2) ));
// }

//  //Examples

// noOdds( [1, 2, 3, 4, 5, 6, 7, 8])        //[2, 4, 6, 8]

// noOdds(  [43, 65, 23, 89, 53, 9, 6] )       //[6]

// noOdds(  [718, 991, 449, 644, 380, 440])    //[718, 644, 380, 440]

//Create a function that takes a string and returns a string with its letters in alphabetical order.

// function AlphabetSoup(str) {
//  return console.log(str.sort().join(''));

// }

// //  Examples
// AlphabetSoup("hello") // "ehllo"

// AlphabetSoup("edabit") // "abdeit"

// AlphabetSoup("hacker") // "acehkr"

// AlphabetSoup("geek") // "eegk"

// AlphabetSoup("javascript") // "aacijprstv"

// //Hard way
// function fiveLetterWords(arr){
//   let myResult = [];

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i].length == 5){
//       myResult.push(arr[i])
//     }
//   }
//   return console.log(myResult);
// }

// fiveLetterWords(['lallalal', 'wewewe', 'aaaaa'])

// //Cooler way
// function fourLetterWords(arr){
//   return arr.filter(x => x.length == 4)
// }

// console.log(fourLetterWords(['lallalal', 'wewewe', 'aaaaa','irina', 'alex']))

//Create a function that takes an array of non - negative numbers and strings
//and return a new array without the strings.

// function filterArray(arr) {
//   return arr.filter(x => !x.length);
// }

// // Examples
// console.log(filterArray([1, 2, "a", "b"])); //[1, 2]

// console.log(filterArray([1, "a", "b", 0, 15])); //[1, 0, 15]

// console.log(filterArray([1, 2, "aasf", "1", "123", 123])); //[1, 2, 123]

// //Create a function that takes two arguments (item, times).
// //The first argument (item) is the item that needs repeating while the second argument (times)
// //is the number of times the item is to be repeated.
// //Return the result in an array.

// function repeat(item, times) {
//   let result = [];

//   for (let i = 0; i < times; i++) {
//     result.push(item);
//   }
//   return result;
// }

// (function test(){
//   console.log(repeat("edabit", 3))
//   //  ["edabit", "edabit", "edabit"]);
//   console.log(repeat(13, 5))
//   //[13, 13, 13, 13, 13]);
//   console.log(repeat("7", 2))
//   // ["7", "7"]);
//   console.log(repeat("2 0 1 8", 1))
//   // ["2 0 1 8"]);
//   console.log(repeat("tom dick and harry", 6))
//   // ["tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry"]);
//   console.log(repeat(0, 1))
//   // [0]);
//   console.log(repeat(0, 0))
//   // []);
//   console.log(repeat("z", 0))
//   // []);
// })()

// function repeatMe(item, times){
//   // return Array(times).fill(item);
//   // let result = [];
//   // for(let i = 0; i < times; i++){
//   //   result.push(item);
//   // }
//   // return result;

// }

// console.log(repeatMe('lame',4))

//Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th)
// and false otherwise. Keep in mind JavaScript's Date month is 0 based,
// meaning December is the 11th month while January is 0.
// function timeForMilkAndCookies(date) {

// }

// (function test(){
//   console.log(timeForMilkAndCookies(new Date(2013, 11, 24)))// true)
//   console.log(timeForMilkAndCookies(new Date(3000, 11, 24))// true)
//   console.log(timeForMilkAndCookies(new Date(2154, 11, 11))// false)
//   console.log(timeForMilkAndCookies(new Date(2010, 11, 2)))// false)
//   console.log(timeForMilkAndCookies(new Date(1980, 9, 24)))// false)
// })()

// let arr1 = ["a", "b", "c"];
// // let arr2 = ['d','e','f'];
// // let arr3 = arr1 + arr2;
// // console.log(arr3); // 4 ?

// // let arr4 = arr1.concat(...arr2);
// // console.log(arr4);

// console.log(arr1.push(["d"]));
// console.log(arr1.toString());

// function checkEnding(str1, str2){
//   return str1.substring(-str2.length) === str2;
// }

// //checkEnding("abc", "bc") ➞ true
// (function test(){
// console.log(checkEnding("abc", "d")) // false

// console.log(checkEnding("samurai", "zi") )// false

// console.log(checkEnding("feminine", "nine")) // true

// checkEnding("convention", "tio") // false
// })()

//Create a function that takes a number as an argument.
//Add up all the numbers from 1 to the number you passed to the function.For example,
//if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

//Create a function that takes an array of numbers
//and return both the minimum and maximum numbers,
//in that order.
// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }

// console.log(minMax([1, 2, 3, 4, 5]));

// let arr2 = [2,3,4,5];
// console.log(Math.min(...arr2));
// console.log(Math.max(...arr2));

//[1, 2, 3, 4, 5]         ➞ [1, 5]

//[2334454, 5]            ➞[5, 2334454]

//[1]                     ➞[1, 1]

// function divisible(num) {
//   return num % 100 === 0

// }
// console.log(divisible(200))
// console.log(divisible(50))

//Zip codes consist of 5 consecutive digits.Given a string, write a function to determine whether the input is a valid zip code.

// function isValid(zip) {

// return !isNaN(zip);

// }
// // Examples
// console.log(isValid("59001"))// true);
// console.log(isValid("853a7"))//false);
// console.log(isValid("732 32"))// false);
// console.log(isValid("1  34 99"))// false);
// console.log(isValid("19923"))// true);
// console.log(isValid("aabcd"))// false);
// console.log(isValid("a8887"))// false);
// console.log(isValid("a923b"))// false);
// console.log(isValid("88231"))// true);

//Write a function that takes in a word and determines whether or not it is plural.A plural word is one that ends in s.

// const isPlural = word => word.endsWith('s');

//  // Examples
// console.log(isPlural("changes")) // true

// console.log(isPlural("change")) // false

// isPlural("dudes") // true

// isPlural("magic") // false

//Create a function that finds all even numbers from 1 to the given number.

// const findEvenNums = num => {
//   let output = [];
//   for (let i = 2; i <= num; i++) {
//     if (i % 2 === 0) {
//       output.push(i)
//     }
//   }
//   return output;
// }

// // Examples
// console.log(findEvenNums(4))// [2, 4]);
// console.log(findEvenNums(8))// [2, 4, 6, 8]);
// console.log(findEvenNums(2))// [2]);
// console.log(findEvenNums(1))// []);
// console.log(findEvenNums(9))// [2, 4, 6, 8]);
// console.log(findEvenNums(11))// [2, 4, 6, 8, 10]);

//You are given 2 out of 3 of the angles in a triangle, in degrees.

//Write a function that determines the classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.

// An acute angle is one smaller than 90 degrees.
// A right angle is one that is exactly 90 degrees.
// An obtuse angle is one greater than 90 degrees(but smaller than 180 degrees).
// For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

//Triangle has 180 degrees.

// //What kind of triangle am i
// const missingAngle = (x,y) => {
//   let output = '';
//   let sum = x + y;
//   // console.log(sum)
//     if (sum < 90){
//       output = 'obtuse'
//     }
//     else if(sum === 90){
//     output = 'right';
//     }else{
//     output = 'acute';
//     }
//   return output;

// }

// console.log(missingAngle(27, 59))
// // "obtuse");
// console.log(missingAngle(135, 11))
// // "acute");
// console.log(missingAngle(45, 45))
// // "right");
// console.log(missingAngle(45, 15))
// // "obtuse");
// console.log(missingAngle(31, 100))
// // "acute");
// console.log(missingAngle(35, 55))
// "right");

// Create a function that takes in 3 parameters(probability of winning, prize value, and cost of playing) and returns whether or not the gamble is profitable.

// A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner:
// net_outcome = probability_of_winning * prize - cost_of_playing.

// For instance, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 0.2 * 50 - 9 = 1 and 1 > 0.

// function profitableGamble(
//   probability_of_winning,
//   prize_value,
//   cost_of_playing
// ) {
//   return probability_of_winning * prize_value - cost_of_playing > 0;

// }

// // Examples
// console.log(profitableGamble(0.2, 50, 9), true);
// console.log(profitableGamble(0.9, 1, 2), false);
// console.log(profitableGamble(0.9, 3, 2), true);
// console.log(profitableGamble(0.33, 10, 3.3), true);
// console.log(profitableGamble(0, 1000, 0.01), false);
// console.log(profitableGamble(0.1, 1000, 7), true);
// console.log(profitableGamble(0, 0, 0), false);

// //Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.
// const isTruthy = val => val ? 1: 0;

// //Examples
// console.log(isTruthy(1))
// // 1);
// console.log(isTruthy(-1))
// // 1);
// console.log(isTruthy("false"))
// // 1);
// console.log(isTruthy([]))
// // 1);
// console.log(isTruthy(true))
// // 1);
// console.log(isTruthy({}))
// // 1);
// console.log(isTruthy(function () { }))
// // 1);
// console.log(isTruthy(0))
// // 0);
// console.log(isTruthy(""))
// // 0);
// console.log(isTruthy(null))
// // 0);
// console.log(isTruthy(undefined))
// // 0);
// console.log(isTruthy(false))
// // 0);
// console.log(isTruthy(NaN))
// // 0);
// console.log(isTruthy(''))
// // 0);

// //Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise.
// //Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
// const timeForMilkAndCookies = date => new Date.getDate() === 24
// //Examples
// console.log(timeForMilkAndCookies(Date(2013, 11, 24))) // true

// console.log(timeForMilkAndCookies(Date(2013, 0, 23))) // false

// console.log(timeForMilkAndCookies(Date(3000, 11, 24))) // true

// // function isChristmas(dateToTest) {
// //   return (dateToTest.getFullYear() === 2014) &&
// //     // getMonth is 0-indexed
// //     (dateToTest.getMonth() === 11) &&
// //     (dateToTest.getDate() == 25);
// // }

// // console.log(isChristmas(new Date("12/25/2014 12:00")));
// // // => true

//Create a function that takes two strings as arguments
// and returns the number of times the first string is found in the second string.

// const charCount = (char, str) => str.split('').filter(x => x === char).length;
// // correct way...but long
// // str = str.split('');
// // let result = str.filter(x => x === char);
// // return result.length;

// // simplified...BOSS :)

// console.log(charCount('a', 'edabit'))
// // 1);
// console.log(charCount('b', 'big fat bubble'))
// // 4);
// console.log(charCount('c', 'Chamber of secrets'))
// // 1);
// console.log(charCount('f', 'frank and his friends have offered five foxes for sale'))
// // 7);
// console.log(charCount('x', 'edabit'))
// // 0);
// console.log(charCount('a', 'Adam and Eve bit the apple and found a snake'))
// // 6);
// console.log(charCount('s', 'sssssssssssssssssssssssss'))
// // 25);
// console.log(charCount('7', '10795426697'))
// // 2);

//
// const canCapture = ([yourRook, opponentsRook]) =>
//   yourRook[0].charAt(0) === opponentsRook[0].charAt(0) ||
//   yourRook[1].charAt(0) === opponentsRook[1].charAt(0);

// yourRook = yourRook.split('')
// console.log(yourRook);

// let yourFirstChar = yourRook[0].charAt(0)

// console.log(yourFirstChar)

// let yourSecondChar = yourRook[1].charAt(0);
// console.log(yourSecondChar)

// // opponentsRook = opponentsRook.split('');
// // console.log(opponentsRook);

// let opponentsFirstChar = opponentsRook[0].charAt(0);
// console.log(opponentsFirstChar);

// let opponentsSecondChar = opponentsRook[1].charAt(0);
// console.log(opponentsSecondChar);

//My LONG solution...works but too long
// if(yourFirstChar === opponentsFirstChar || opponentsSecondChar === yourSecondChar){
//   return true;
// }else{
//   return false;
// }

//a little better
// return yourFirstChar === opponentsFirstChar || opponentsSecondChar === yourSecondChar;

//the best

// // console.log(yourRook[0] === opponentsRook[0])

// // console.log(yourRook[1] === opponentsRook[1])

// console.log(yourRook[0].charAt(0) === opponentsRook[0].charAt[0])

// console.log(yourRook[0].charAt(1) === opponentsRook[0].charAt[1])

// return yourRook[0].charAt(0) === opponentsRook[0].charAt[0] || yourRook[0].charAt(1) === opponentsRook[0].charAt[1];

// (function test() {
//   console.log(canCapture(["A8", "E8"]), true);
//   console.log(canCapture(["A1", "B2"]), false);
//   console.log(canCapture(["H4", "H3"]), true);
//   console.log(canCapture(["F5", "C8"]), false);
//   console.log(canCapture(["G3", "G7"]), true);
//   console.log(canCapture(["B3", "B2"]), true);
//   console.log(canCapture(["F5", "B2"]), false);
//   console.log(canCapture(["H5", "C8"]), false);
// })();

// Create a function that takes an integer and returns an array from 1 to the given number, where:

// // If the number can be divided evenly by 4, amplify it by 10(i.e.return 10 times the number).
// // If the number cannot be divided evenly by 4, simply return the number.
// const amplify =  num  => {

//  //return num % 4 === 0 ? [num].map(x => x * 10) : num;

// //  const map1 = [num].map(x => x * 10 )
// //  console.log(map1)

// }
// (function test(){
//   console.log(amplify(4), [1, 2, 3, 40])
//   console.log(amplify(3), [1, 2, 3])
//   console.log(amplify(1), [1]);

// })()

//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
//For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// const addUp = num => num * ( num + 1) / 2;

// //sumTo(4) = 4 + 3 + 2 + 1 = 10

// console.log(addUp(4))
// //, 10)

// console.log(addUp(13))
// //, 91)
// console.log(addUp(600))
// //, 180300)

// console.log(addUp(392))
// //, 77028)
// console.log(addUp(53))
// //, 1431)
// console.log(addUp(897))
// //, 402753)
// console.log(addUp(23))
// //, 276)
// console.log(addUp(1000))
// //, 500500)
// console.log(addUp(738))
// //, 272691)

// console.log(addUp(100))
// //, 5050)
// console.log(addUp(925))
// //, 428275)
// console.log(addUp(1))
// //, 1)
// console.log(addUp(999))
// //, 499500)
// console.log(addUp(175))
// //, 15400)
// console.log(addUp(111))
// //, 6216)

//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
//For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// const addUp = num =>  num * (num + 1) / 2
// //console.log(10 * (10 + 1) /2)

// console.log(addUp(10));
//Create a function that determines whether or not
//...it's possible to split a pie fairly given these three parameters:

// Total number of slices.
// Number of recipients.
// How many slices each person gets.

// const equalSlices = (total, people, each) => people * each <= total;

// console.log(equalSlices(8, 3, 2))//, true);
// console.log(equalSlices(8, 3, 3))//, false);
// console.log(equalSlices(24, 12, 2))//, true);
// console.log(equalSlices(5, 6, 1))//, false);
// console.log(equalSlices(5, 0, 100))//, true);
// console.log(equalSlices(15, 2, 7))//, true);
// console.log(equalSlices(15, 2, 8))//, false);

// ---------- 2
//A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

// hurdleJump([1, 2, 4, 3, 2, 3], 4) should return true,
// since 4 is greater than or equal to each element in the array.
// const hurdleJump = (hurdles, jumpHeight) => jumpHeight >= Math.max(...hurdles);

// console.log(hurdleJump([1, 2, 3, 4, 5], 5))
// //, true);
// console.log(hurdleJump([5, 5, 3, 4, 5], 3))
// //, false);
// console.log(hurdleJump([5, 4, 5, 6], 10))
// //, true);
// console.log(hurdleJump([1, 2, 1], 1))
// //, false);
// console.log(hurdleJump([3, 3, 3], 4))
// //, true);
// console.log(hurdleJump([4, 4], 3))
// //, false);
// console.log(hurdleJump([], 4))
//, true);

// ---------- 3

//Create a function that takes a string and returns a string in which each character is repeated once.

// const doubleChar = str => [...str].map(x=> x + x).join('');

// console.log(doubleChar("String"),  "SSttrriinngg" )

// console.log(doubleChar("Hello World!"),"HHeelllloo  WWoorrlldd!!" )

// console.log(doubleChar("1234!_ "), "11223344!!__ " )

// //How i did it.
// let elements = "String";
// elements = elements.split('');
// //console.log(elements)
// //console.log(elements.join(elements));

// let array1 = [...elements];

// // pass a function to map
// let map1 = array1.map(x => x + x).join('');

// console.log(map1)

// ---------- 4

// //Create a function that takes a string and returns the number(count) of vowels contained within it.
// const countVowels = str => {
//   let re = /[aeiou]/gi;
//   let match = str.match(re).length;
//   console.log(match)

// }

//   //Examples
// console.log(countVowels("Celebration") , 5)

// console.log(countVowels("Palm") , 1)

// console.log(countVowels("Prediction") , 4)

// const countVowels2 = str => str.match(/[aeiou]/gi).length

// console.log(countVowels2("Celebration"), 5)

// console.log(countVowels2("Palm"), 1)

// console.log(countVowels2("Prediction"), 4)

//----1
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // change code below this line
//     newArr.push([...arr]);
//     // change code above this line
//     num--;
//   }
//   return newArr;
// }

// // change code here to test different cases:

// (function test(){

//   console.log(copyMachine([true, false, true], 2)) // [[true, false, true], [true, false, true]]
//   console.log(copyMachine([1, 2, 3], 5)) // [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
//   console.log(copyMachine([true, true, null], 1)) // [[true, true, null]]
//   console.log(copyMachine(["it works"], 3))// [["it works"], ["it works"], ["it works"]]

// })()

//----2
// function quickCheck(arr, elem) {
//   // change code below this line
//   let check = [...arr].indexOf(elem);
//   console.log(check );
//   return check < 0
//   // change code above this line
// }

// // change code here to test different cases:
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// function greaterThanTen(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));
// // returns [12, 14, 80]

// //---- 3
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].indexOf(elem) == -1){
//       newArr.push(arr[i]);
//     }
//   }
//   // change code above this line
//   return newArr;
// }

// // change code here to test different cases:
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)
// // should return [[10, 8, 3], [14, 6, 23]]
// )

// -----4
//Given an array of numbers(a list in groovy), determine whether the sum of all of the numbers is odd or even.

//Give your answer in string format as 'odd' or 'even'.

//If the input array is empty consider it as: [0](array with a zero).

// const oddOrEven = arr => arr.reduce((a, b) => a + b) % 2 === 0 ? 'even': 'odd';

// console.log(oddOrEven([0]), 'even')
// console.log(oddOrEven([2, 5, 34, 6]), 'odd')
// console.log(oddOrEven([0, -1, -5]), 'even')

// console.log(oddOrEven([0, 1, 5]), 'even')
// console.log(oddOrEven([0, 1, 3]), 'even')
// console.log(oddOrEven([1023, 1, 2]), 'even')

// console.log(oddOrEven([0, -1, -5]), 'even')
// console.log(oddOrEven([0, -1, -3]), 'even')
// console.log(oddOrEven([-1023, 1, -2]), 'even')

// console.log(oddOrEven([0, 1, 2]), 'odd')
// console.log(oddOrEven([0, 1, 4]), 'odd')
// console.log(oddOrEven([1023, 1, 3]), 'odd')

// ----5
//Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings,
//ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// const sortByLength = arr => arr.sort((a, b) => a.length - b.length);
//   // Return an array containing the same strings, ordered from shortest to longest
//   // return arr.sort(function(a, b) { b.length - a.length }).reverse();

// console.log(sortByLength(["Longer", "Longest", "Short"]), ["Short", "Longer", "Longest"]);
// console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]), ["", "Pizza", "Brains", "Moderately"]);
// console.log(sortByLength(["Beg", "Life", "I", "To"]), ["I", "To", "Beg", "Life"]);

// ///-----6

// const inputString = str => [...str].reverse().join('') === str;

// console.log(inputString("aabaa")) /// true

// console.log(inputString("aba")) // true

// console.log(inputString("a")) //true

// console.log(inputString("ba")) //false

// // ------1
// function quickCheck(arr, elem) {
//   // change code below this line
// return arr.indexOf(elem) >= 0? true: false
//   // change code above this line
// }

// // change code here to test different cases:
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'shallots'));

// //-----2
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // change code below this line

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(elem) === -1) {
//       //Checks every parameter for the element and if is NOT there continues the code
//       newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
//     }
//   }

//   // change code above this line
//   return newArr;
// }
// // change code here to test different cases:
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
// console.log(
//   filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")
// );
// // [ ["amy", "beth", "sam"] ])

//-----3

//write a function that returns the first index and the last index of a character.

// function charIndex(word, char) {
//NOOB WAY

//  let  firstIndex = [...word].indexOf(char);
//  console.log(firstIndex)
//  let lastIndex = [...word].lastIndexOf(char);
//  console.log(lastIndex);

//  return [firstIndex, lastIndex];

// (function test() {
//   console.log(charIndex("hello", "l"), [2, 3]);
//   console.log(charIndex("circumlocution", "r"), [2, 2]);
//   console.log(charIndex("circumlocution", "i"), [1, 11]);
//   console.log(charIndex("circumlocution", "c"), [0, 8]);
//   console.log(charIndex("happy", "h"), [0, 0]);
//   console.log(charIndex("happy", "p"), [2, 3]);
//   console.log(charIndex("happy", "e"), undefined);
// })();

// // Create a function that returns true if a string contains any spaces.

// const hasSpaces = (str) => str.includes(' ') ? true: false;

// (function test(){
// console.log(hasSpaces("Foo"), false)
// console.log(hasSpaces("Foo bar"), true)
// console.log(hasSpaces("Foo "), true)
// console.log(hasSpaces(" Foo"), true)
// console.log(hasSpaces(" "), true)
// console.log(hasSpaces(""), false)
// console.log(hasSpaces(",./;'[]-="), false)
// })()

//HELP!! ---1

// //Create a function that converts two arrays of x- and y- coordinates into an array of (x,y) coordinates.

// function convertCartesian(x, y) {

// }

// (function test(){
// console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]),
//  [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]])
// console.log(convertCartesian([9, 8, 3], [1, 1, 1]),
//  [[9, 1], [8, 1], [3, 1]])
// console.log(convertCartesian([2, 5, 1], [7, 8, 9]),
//  [[2, 7], [5, 8], [1, 9]])
// console.log(convertCartesian([3, 2, 2], [6, 1, 7]),
//  [[3, 6], [2, 1], [2, 7]])
// })()

// //------2  -----COMPLETED
// //Create a function that adds a string ending to each member in an array.

// const addEnding = (arr, ending) => [...arr].map(x => x + ending);

// console.log(addEnding(['clever', 'meek', 'hurried', 'nice'], 'ly'), ['cleverly', 'meekly', 'hurriedly', 'nicely'])
// console.log(addEnding(['new', 'pander', 'scoop'], 'er'), ['newer', 'panderer', 'scooper'])
// console.log(addEnding(['bend', 'sharpen', 'mean'], 'ing'), ['bending', 'sharpening', 'meaning'])
// console.log(addEnding(['bend', 'tooth', 'mint'], 'y'), ['bendy', 'toothy', 'minty'])
// console.log(addEnding(['bend', 'tooth', 'mint'], 'ier'), ['bendier', 'toothier', 'mintier'])

// //---3 ----SOLVED
// //Given a number and an object with min and max properties,
// // return true if the number lies within the given range (inclusive).

// const isInRange = (num, range) =>  num >= range.min && num <= range.max;

// (function test(){
// console.log(isInRange(4, { min: 0, max: 5 })      , true)
// console.log(isInRange(4, { min: 4, max: 5 })      , true)
// console.log(isInRange(4, { min: 0, max: 4 })      , true)
// console.log(isInRange(4, { min: 6, max: 10 })     , false)
// console.log(isInRange(11, { min: 6, max: 10 })    , false)
// console.log(isInRange(5, { min: 5, max: 5 })      , true)
// console.log(isInRange(1.5, { min: 1.25, max: 1.75 })   , true)
// console.log(isInRange(1.1, { min: 1.25, max: 1.75 })   , false)
// console.log(isInRange(1.8, { min: 1.25, max: 1.75 })   , false)
// console.log(isInRange(-1, { min: -1, max: 1 })         , true)
// })()

// // ---4 ---I GOT IT :)
// //Create a function to calculate the determinant of a 2 x 2 matrix.
// // The determinant of the following matrix is: ad - bc:

//My way below
// const calcDeterminant = matrix => matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

//Cooler way
// const calcDeterminant = ([[a,b], [c,d]]) => a* d - c * b;

// (function test() {
//   console.log(calcDeterminant([[1, 2], [3, 4]]), -2);

//   console.log(calcDeterminant([[5, 3], [3, 1]]), -4);

//   console.log(calcDeterminant([[1, 1], [1, 1]]), 0);

//   console.log(calcDeterminant([[1, 1], [1, 0]]), -1);
// })();

//   let a = matrix[0]; //[1, 2]
// let b = matrix[1]; //[3, 4]
// console.log(matrix[0][0]);
// console.log(matrix[0][1]);

// console.log(matrix[1][0]);
// console.log(matrix[1][1]);

// let c = a[0]; //1
// let d = a[1]; // 2

// let e = b[0]; //1
// let f = b[1]; // 2

// return [c * f - d * e];

// //----5 ===STUCK

// //Create a function that converts two arrays of x- and y- coordinates into an array of (x,y) coordinates.
// function convertCartesian(x, y) {
//   let result = [];

//   console.log(x)

//   console.log(y)

// }

// (function test(){
// console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]),     [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]])
// console.log(convertCartesian([9, 8, 3], [1, 1, 1]),                [[9, 1], [8, 1], [3, 1]])
// console.log(convertCartesian([2, 5, 1], [7, 8, 9]),                [[2, 7], [5, 8], [1, 9]])
// console.log(convertCartesian([3, 2, 2], [6, 1, 7]),                [[3, 6], [2, 1], [2, 7]])
// })()

// //6 ---passed

// //Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.
// const numberSyllables = word => word.split('-').length;

// (function test(){
// console.log(numberSyllables("buf-fet"), 2)
// console.log(numberSyllables("beau-ti-ful"), 3)
// console.log(numberSyllables("mon-u-men-tal"), 4)
// console.log(numberSyllables("on-o-mat-o-poe-ia"), 6)
// console.log(numberSyllables("o-ver-ly"), 3)
// console.log(numberSyllables("pas-try"), 2)
// console.log(numberSyllables("flu-id"), 2)
// console.log(numberSyllables("syl-la-ble"), 3)
// })()

// // ----7 -----Passed
// //Create a function that takes in an array and returns true if all its values are even, and false otherwise.

// //Stupid way with 2 functions
// // const divisableByTwo = currentValue => currentValue % 2 === 0;

// // const checkAllEven = val => [...val].every(divisableByTwo);

// //right way
// const checkAllEven = val => val.every(x => x % 2 === 0);

// (function test() {
//   console.log(checkAllEven([1, 2, 3, 4]), false);
//   console.log(checkAllEven([2, 4, 6]), true);
//   console.log(checkAllEven([5, 6, 8, 10]), false);
//   console.log(checkAllEven([-2, 2, -2, 2]), true);
// })();

// ---- 8 ---Completed
//Create a function that filters out an array of state names into two categories based on the second parameter.

//Abbreviations    abb
//Full names       full

// function filterStateNames(arr, type){
//   if (type === "abb") {
//     return arr.filter(arr => arr.length <= 2);
//   } else {
//     return  arr.filter(arr => arr.length > 2);
//   }
// }

// (function test() {
//   console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb"), [
//     "CA",
//     "NY"
//   ]);
//   console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full"), [
//     "Arizona",
//     "Nevada"
//   ]);

//   console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb"), [
//     "MT",
//     "NJ",
//     "TX",
//     "ID",
//     "IL"
//   ]);
//   console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full"), []);

//   console.log(filterStateNames(["Montana", "FL"], "abb"), ["FL"]);
//   console.log(filterStateNames(["Montana", "FL"], "full"), ["Montana"]);
// })();

// // ---- 9 ----HELP
// //In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.

// // The first number is the major version.
// // The second number is the minor version.
// // The third number is the patch (bug fixes).
// // Write three separate functions, one to retrieve each element in the semantic versioning specification.
// function retrieveMajor(semver) {
// 	return semver[0];
// }

// function retrieveMinor(semver) {
// 	return semver[2]
// }

// function retrievePatch(semver) {
// 	return semver[4]
// }

// (function test(){
//   // Test group 1
// console.log(retrieveMajor("6.1.9"), "6")
// console.log(retrieveMinor("6.1.9"), "1")
// console.log(retrievePatch("6.1.9"), "9")
// // Test group 2
// console.log(retrieveMajor("2.1.0"), "2")
// console.log(retrieveMinor("2.1.0"), "1")
// console.log(retrievePatch("2.1.0"), "0")
// // Test group 3
// console.log(retrieveMajor("5.12.13"), "5")

// console.log(retrieveMinor("5.12.13"), "12", 'should work with 2-digit version numbers')
// console.log(retrievePatch("5.12.13"), "13", 'should work with 2-digit version numbers')
// })()

// //---10
// // A palindrome is a word that is identical forward and backwards.

// // mom
// // racecar
// // kayak

// // Given a word, create a function that checks whether it is a palindrome.

// const checkPalindrome = str => str.split('').reverse().join('') === str;

// (function test(){
// console.log(checkPalindrome('mom'), true)
// console.log(checkPalindrome('scary'), false)
// console.log(checkPalindrome('reviver'), true)
// console.log(checkPalindrome('stressed'), false )
// console.log(checkPalindrome('good'), false)
// console.log(checkPalindrome('refer'), true)
// console.log(checkPalindrome('something'), false)
// console.log(checkPalindrome('redder'), true)
// console.log(checkPalindrome('civic'), true)
// })()

// //---11 ---passed
// //Write a function that returns the total number of parameters passed in.
// const numberArgs = (...val) => val.length;

// (function test(){
//   console.log(numberArgs('a', 'b', 'c'), 3)
//   console.log(numberArgs(10, 20, 30, 40, 50), 5)
//   console.log(numberArgs('x', 'y'), 2)
//   console.log(numberArgs(), 0)
// })()

// // ===12 ----passed

// //Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

// const countdown = start => {
//   let result = [];
//   for (let i = start; i >= 0; i--) {
//     result.push(i);
//   }
//   return result;
// };

// (function test() {
//   console.log(countdown(3), [3, 2, 1, 0]);
//   console.log(countdown(20), [
//     20,
//     19,
//     18,
//     17,
//     16,
//     15,
//     14,
//     13,
//     12,
//     11,
//     10,
//     9,
//     8,
//     7,
//     6,
//     5,
//     4,
//     3,
//     2,
//     1,
//     0
//   ]);
//   console.log(countdown(1), [1, 0]);
//   console.log(countdown(0), [0]);
// })();

//----13
//Create a function that takes in an array of names and return's the name of the secret society.

// const societyName = friends => {
//   return [...friends]
//     .map(friends => friends[0])
//     .sort()
//     .join("");
// };

// (function test() {
//   console.log(societyName(["Adam", "Sarah", "Malcolm"]), "AMS");
//   console.log(
//     societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]),
//     "CJMPRR"
//   );
//   console.log(societyName(["Harry", "Newt", "Luna", "Cho"]), "CHLN");
//   console.log(societyName(["Sherlock", "Irene", "John"]), "IJS");
//   console.log(
//     societyName(["Sheldon", "Amy", "Penny", "Howard", "Raj"]),
//     "AHPRS"
//   );
// })();

// -----14
// [ "Alex" ]
//     0   ->  1
// [ "Alex", "Belka" ]
//     0        1   -> 2
// [ "Alex", "Belka" , "Artem"]
//                        2     -> 3

// let ourGroup = ["Alex", "Irina", "Belka", "Artem", "Simba"];
// // let ourGroup = ["Alex", "Irina", "Belka", "Artem"];
// // //                 0        1        2        3       4

// abba

// for (let i = ourGroup.length - 1; i >= 0; i--) {
//   // i ? 1
//   // "Irina"
//   // pass it to console.log
//   console.log(ourGroup[i]);
// }

// let myArray = [1, 65, 34, 2, 5, 345, 34, 534, 3453];
// // arr.map
// myArray.sort();

// for (let i = myArray.length - 1; i >= 0; i--) {
//   console.log(myArray[i]);
// }

// let myArray = [1, 65, 34, 2, 5, 345, 34, 534, 3453];
// myArray.sort((a, b) => {
//   if (a < b) {
//     return 1;
//   }
//   if (a === b) {
//     return 0;
//   }
//   return -1;
// });
// console.log(myArray);

// //Create a function that converts two arrays
// // of x- and y- coordinates into an array of (x,y) coordinates.
// const convertCartesian = (x, y) => {
//   let result = [];

//   for (let i = 0; i < x.length; i++) {
//     result.push([x[i], y[i]]);
//   }

//   return result;
// };

// (function test() {
//   console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]), [
//     [1, 5],
//     [5, 8],
//     [3, 9],
//     [3, 1],
//     [4, 0]
//   ]);
//   console.log(convertCartesian([9, 8, 3], [1, 1, 1]), [[9, 1], [8, 1], [3, 1]]);
//   console.log(convertCartesian([2, 5, 1], [7, 8, 9]), [[2, 7], [5, 8], [1, 9]]);
//   console.log(convertCartesian([3, 2, 2], [6, 1, 7]), [[3, 6], [2, 1], [2, 7]]);
// })();

// // --- 15
// //Write a function that returns true if all integers in an array are factors of a number,
// //and false otherwise.

// function checkFactors(factors, num) {

// }

// (function test() {
//   console.log(checkFactors([2, 3, 4], 12), true);
//   console.log(checkFactors([1, 2, 3, 8], 12), false, "8 is not a factor of 12");
//   console.log(checkFactors([1, 2, 50], 100), true);
//   console.log(checkFactors([1, 9, 81], 81), true);
//   console.log(checkFactors([5, 10, 50], 500), true);
//   console.log(
//     checkFactors([5, 10, 499], 500),
//     false,
//     "499 is not a factor of 500"
//   );
//   console.log(checkFactors([3, 6], 9), false, "6 is not a factor of 9");
// })();

// // ---16
// //check if its a palindrome
// const palindrome = str => {
//   let newStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]; // or newString = newString + str[i];
//   }
//   return newStr === str;
// };

// (function test() {
//   console.log(palindrome("mom"));
//   console.log(palindrome("abba daad"));
// })();

// ---17
//Write a function that returns true if all integers in an array are factors of a number,
// and false otherwise.

// const divisableByTwo = val => {
//   return val % 2 === 0;
// };

// let ourGroup = [2, 3, 4];
// for (let i = ourGroup.length - 1; i >= 0; i--) {
//   console.log(ourGroup[i]);
// }

//Given an array of integers,
// find the pair of adjacent elements
//that has the largest product and return that product.

// function adjacentElementsProduct(arr) {
//   // let result = [];

//   let secondMax = function(arr) {
//     let max = Math.max.apply(null, arr); // get the max of the array

//     let maxi = arr.indexOf(max);
//     console.log(maxi);

//     arr[maxi] = -Infinity; // replace max in the array with -infinity
//     let secondMax = Math.max.apply(null, arr); // get the new max
//     arr[maxi] = max;
//     console.log(secondMax);
//   };

//   // return result;
// }

// (function test() {
//   console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
//   console.log(adjacentElementsProduct([-1, -2]), 2);
//   console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
// })();

// ---1  1:58 ---finished 2:14

//Create a function that returns true if two arrays contain identical values,
//and false otherwise.
// const checkEquals = (arr1, arr2) => {
//   return arr1.join(" ") === arr2.join(" ");
// };

// function checkEquals(arr1, arr2) {
//   if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// (function test() {
//   console.log(checkEquals([1, 2], [1, 3]), false);

//   console.log(checkEquals([1, 2], [1, 2]), true);

//   console.log(checkEquals([4, 5, 6], [4, 5, 6]), true);

//   console.log(checkEquals([4, 7, 6], [4, 5, 6]), false);

//   console.log(checkEquals([1, 12], [11, 2]), false);
// })();

// // ---2    2:17   ---2:37 .....STUCK
// //Write three separate functions,
// //one to retrieve each element in the semantic versioning specification.

// function retrieveMajor(val) {
//   // console.log(val[0]);
//   let nums = val.split("").join();
//   console.log(nums);
//   // console.log(nums[0]);
//   console.log(nums.charAt(0, 2));
// }

// function retrieveMinor(val) {
//   // console.log(val[2]);
// }

// function retrievePatch(val) {
//   // console.log(val[4]);
// }

// (function test() {
//   // Test group 1
//   console.log(retrieveMajor("61.12.19"), "61");
//   // console.log(retrieveMinor("6.1.9"), "1");
//   // console.log(retrievePatch("6.1.9"), "9");
//   // // Test group 2
//   // console.log(retrieveMajor("2.1.0"), "2");
//   // console.log(retrieveMinor("2.1.0"), "1");
//   // console.log(retrievePatch("2.1.0"), "0");
//   // // Test group 3
//   // console.log(retrieveMajor("5.12.13"), "5");
//   console.log(
//     retrieveMinor("5.12.13"),
//     "12",
//     "should work with 2-digit version numbers"
//   );
//   console.log(
//     retrievePatch("5.12.13"),
//     "13",
//     "should work with 2-digit version numbers"
//   );
// })();

//---3 3:20 ---stuck

// function filterDigitLength(arr, num) {
//   console.log(arr);
//   console.log(num);
// }

// (function test() {
//   console.log(filterDigitLength([88, 232, 4, 9721, 555], 3), [232, 555]);
//   console.log(filterDigitLength([2, 7, 8, 9, 1012], 1), [2, 7, 8, 9]);
//   console.log(
//     filterDigitLength([32, 88, 74, 91, 300, 4050], 1),
//     [],
//     "Should return empty array if no numbers of specified length exist."
//   );
//   console.log(
//     filterDigitLength([5, 6, 8, 9], 1),
//     [5, 6, 8, 9],
//     "Should return original array if every digit is that length."
//   );
//   console.log(filterDigitLength([99, 838, 435, 7666, 989, 431], 3), [
//     838,
//     435,
//     989,
//     431
//   ]);
//   console.log(filterDigitLength([99, 838, 435, 7666, 989, 431], 2), [99]);
// })();

// //----4 6:00 ---passed

// //Write two functions:

// // firstArg() should return the first parameter passed in.
// // lastArg() should return the last parameter passed in.
// // Return undefined if the function takes no parameters.

// const firstArg = (...val) => {
//   return val[0] || undefined;
// };

// function lastArg(...val) {
//   return val.pop() || undefined;
// }

// (function test() {
//   console.log(firstArg(1, 2, 3), 1);
//   console.log(firstArg("a", "b", "c"), "a");
//   console.log(firstArg(8), 8);
//   console.log(firstArg(), undefined);
//   console.log(lastArg(1, 2, 3), 3);
//   console.log(lastArg("a", "b", "c"), "c");
//   console.log(lastArg(8), 8);
//   console.log(lastArg(), undefined);
// })();

// ----5 6:36
// create a function that returns the nth smallest element (the smallest element is the first smallest,
// the second smallest element is the second smallest, etc).

// function nthSmallest(arr, n) {
//   // second smallest
//   console.log([...arr].sort().pop(n));
// }

// (function test() {
//   console.log(nthSmallest([1, 3, 5, 7], 1), 1);
//   console.log(nthSmallest([1, 3, 5, 7], 3), 5);
//   console.log(nthSmallest([1, 3, 5, 7], 5), null);
//   console.log(nthSmallest([7, 3, 5, 1], 2), 3);
//   console.log(nthSmallest([5, 4, 3, 2, 1, -3], 1), -3);
//   console.log(nthSmallest([5, 4, 3, 2, 1, -3], 5), 4);
//   console.log(nthSmallest([4, 5], 3), null);
//   console.log(nthSmallest([4, 5], 2), 5);
//   console.log(nthSmallest([4, 5], 1), 4);
// })();

//----1 STUCK
//An array is special, if every even index contains an even number and every odd index contains an odd number.
// Create a function that returns true if an array is special, and false otherwise.

// function isSpecialArray(arr) {
//   console.log([...arr].every(x => x % 2 === 0));
// }

// (function test() {
//   console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]), true);
//   console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]), false);
//   console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]), false);
//   console.log(isSpecialArray([1, 1, 1, 2]), false);
//   console.log(isSpecialArray([2, 2, 2, 2]), false);
//   console.log(isSpecialArray([2, 1, 2, 1]), true);
//   console.log(isSpecialArray([4, 5, 6, 7]), true);
//   console.log(isSpecialArray([4, 5, 6, 7, 0, 5]), true);
// })();

// //----2 ---done ---passed
// //remove all NULL vals from the arr
// const removeNull = arr => arr.filter(x => x);

// (function test() {
//   console.log(removeNull(["a", null, "b", null]), ["a", "b"]);
//   console.log(removeNull([null, null, null, null, null]), []);
//   console.log(removeNull([7, 8, null, 9]), [7, 8, 9]);
//   console.log(removeNull([7, null, 8, null, 9]), [7, 8, 9]);
// })();

// function for adding two numbers. Easy!
// const add = (a, b) => a + b;
// use reduce to sum our array

//---3 ---=passed
//Create a function that returns the minimum number of removals to make the sum of
// all elements in an array even.
// const minimumRemovals = arr => (arr.reduce((a, b) => a + b) % 2 === 0 ? 0 : 1);

// (function test() {
//   console.log(minimumRemovals([1, 2, 3, 4, 5]), 1);
//   console.log(minimumRemovals([5, 7, 9, 11]), 0);
//   console.log(minimumRemovals([5, 7, 9, 12]), 1);
//   console.log(minimumRemovals([5, 8, 8, 8]), 1);
//   console.log(minimumRemovals([5, 8, 8, 8, 9, 9]), 1);
//   console.log(minimumRemovals([9, 8, 8, 8, 9, 9]), 1);
//   console.log(minimumRemovals([5, 5, 4, 4, 3, 3]), 0);
//   console.log(minimumRemovals([5, 3, 4, 4, 3]), 1);
//   console.log(minimumRemovals([5, 3, 4, 4, 0]), 0);
// })();
// //4 ----stuck
// //Create a function that filters out an array to include numbers
// // who only have a certain number of digits.
// function filterDigitLength(arr, num) {
//   return arr;
// }

// (function test() {
//   console.log(filterDigitLength([88, 232, 4, 9721, 555], 3), [232, 555]);
//   // console.log(filterDigitLength([2, 7, 8, 9, 1012], 1), [2, 7, 8, 9]);
//   // console.log(
//   //   filterDigitLength([32, 88, 74, 91, 300, 4050], 1),
//   //   [],
//   //   "Should return empty array if no numbers of specified length exist."
//   // );
//   // console.log(
//   //   filterDigitLength([5, 6, 8, 9], 1),
//   //   [5, 6, 8, 9],
//   //   "Should return original array if every digit is that length."
//   // );
//   // console.log(filterDigitLength([99, 838, 435, 7666, 989, 431], 3), [
//   //   838,
//   //   435,
//   //   989,
//   //   431
//   // ]);
//   // console.log(filterDigitLength([99, 838, 435, 7666, 989, 431], 2), [99]);
// })();

// ///----5 ===got it now
// //create a function that returns the nth smallest element
// //(the smallest element is the first smallest,
// //the second smallest element is the second smallest, etc).

// // const nthSmallest = (arr, n) => (arr.sort() ? arr[n - 1] : null);
// const nthSmallest = (arr, n) => ([...arr].sort ? arr[n - 1] : null);
// (function test() {
//   console.log(nthSmallest([1, 3, 5, 7], 1), 1);
//   console.log(nthSmallest([1, 3, 5, 7], 3), 5);
//   console.log(nthSmallest([1, 3, 5, 7], 5), null);
//   console.log(nthSmallest([7, 3, 5, 1], 2), 3);
//   console.log(nthSmallest([5, 4, 3, 2, 1, -3], 1), -3);
//   console.log(nthSmallest([5, 4, 3, 2, 1, -3], 5), 4);
//   console.log(nthSmallest([4, 5], 3), null);
//   console.log(nthSmallest([4, 5], 2), 5);
//   console.log(nthSmallest([4, 5], 1), 4);
// })();

// // ---- 6 ----stuck
// // Fix this incorrect code, so that all tests pass!
// function removeVowels(str) {
//   return str.replace(/[aeiou]/, "");
// }

// (function test() {
//   console.log(removeVowels("ben"), "bn");
//   console.log(removeVowels("many"), "mny");
//   console.log(removeVowels("candy"), "cndy");
//   console.log(removeVowels("hello"), "hll");
//   console.log(removeVowels("apple"), "ppl");
//   console.log(removeVowels("fever"), "fvr");
// })();
//---7--done fcc
//---8- done fcc
//---9---done fcc
//---9---done fcc
//--10 --fcc
// let a = "me",
//   b = "you";

// [b, a] = [a, b];
// (() => {
//   console.log([a, b]);
// })();

// //--11
// const reverseString = str => [...str].reverse("").join("");

// console.log(reverseString("hello"));

//----12

// // console.log(1 * 2 * 3 * 4 * 5);
// function factorialize(num) {
//   if (num < 0)
//   return -1;

// // If the number is 0, its factorial is 1.
// else if (num == 0)
// return 1;

// // Otherwise, call the recursive procedure again
// else {
//   return (num * factorialize(num - 1));
// }

//   return num;
// }

// factorialize(5);

//13 --

// function findLongestWordLength(str) {
//   //splits the string of words
//   let words = str.split(" ");
//   //something to compare max length of the string to
//   let maxLength = 0;

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//     }
//   }

//   return maxLength;
// }
// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );

//---14
//Create a function which takes in a word and spells it out,
//by consecutively adding letters until the full word is completed.

// function processData(inputString) {
//   return "Hello, World. \n" + inputString;
// }

// console.log(processData("Welcome to 30 Days of Code!"));

//----15 ---finished
//Write a function named sumDigits which takes a number as input
//and returns the sum of the absolute value of each of the number's decimal digits

// const sumDigits = num => {
//   let digits = num
//     .toString()
//     .split("")
//     .map(Number) ////////////////////////            CODEWARS
//     .filter(x => x)
//     .reduce((a, b) => a + b);
//   return digits;
// };

// console.log(sumDigits(10)); // Returns 1
// console.log(sumDigits(99)); // Returns 18
// console.log(sumDigits(-32)); // Returns 5

// //---1 ---finished
// //reverse str...remove numbers
// const reverseLetter = str => {
//   //coding and coding..
//   let reversedStr = str
//     .split("")
//     .reverse()
//     .join("")
//     .replace(/[^a-zA-Z ]/g, "");
//   return reversedStr;

//   // let filteredStr = [...reversedStr].join("");
//   // console.log(filteredStr.replace(/[^a-zA-Z ]/g, ""));
// };

// (() => {
//   console.log(reverseLetter("krishan"), "nahsirk");

//   console.log(reverseLetter("ultr53o?n"), "nortlu");

//   console.log(reverseLetter("ab23c"), "cba");

//   console.log(reverseLetter("krish21an"), "nahsirk");
// })();

// //eplace(/\d+|^\s+|\s+$/g, "")

// //------2
// //Square every digit of a number.

// //For example, if we run 9119 through the function, 811181 will come out,
// //because 92 is 81 and 12 is 1.

// function squareDigits(num) {
//   //may the code be with you
//   let digits = num
//     .toString()
//     .split("")
//     .map(x => x * x)
//     .join("");
//   return Number(digits);
// }

// (function test() {
//   console.log(squareDigits(9119)); //, 81 1 1 81);
// })();

// // -------3 ---stuck
// function songDecoder(song) {
//   let regex = /WUB/gi;
//   let cleanedUp = song.replace(regex, "");
//   let string = cleanedUp.replace(/^\s+|\s+$/g, "");
//   return string.split("").join("");
// }

// (function test() {
//   console.log(
//     songDecoder("AWUBBWUBC"),
//     "A B C",
//     "WUB should be replaced by 1 space"
//   );
//   console.log(
//     songDecoder("AWUBWUBWUBBWUBWUBWUBC"),
//     "A B C",
//     "multiples WUB should be replaced by only 1 space"
//   );
//   console.log(
//     songDecoder("WUBAWUBBWUBCWUB"),
//     "A B C",
//     "heading or trailing spaces should be removed"
//   );
//   console.log(
//     songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"),
//     "WE ARE THE CHAMPIONS MY FRIEND"
//   );
// })();

//----4 ---passed
// // Fix this incorrect code, so that all tests pass!
// const removeVowels = str => str.replace(/[aeiou]/gi, "");

// (function test() {
//   console.log(removeVowels("ben"), "bn");
//   console.log(removeVowels("many"), "mny");
//   console.log(removeVowels("candy"), "cndy");
//   console.log(removeVowels("hello"), "hll");
//   console.log(removeVowels("apple"), "ppl");
//   console.log(removeVowels("fever"), "fvr");
// })();

// //----5
// function spelling(str) {
//   return str === str.toUpperCase() || str === str.toLowerCase();
// }
// (function test() {
//   console.log(spelling("asdASAS"));
//   console.log(spelling("asddadada"));
// })();

//-----6 ---stuck
//Create a function which takes in a word and spells it out,
// by consecutively adding letters until the full word is completed.
// function spelling(str) {

// }

// (function test() {
//   console.log(spelling("bee"), ["b", "be", "bee"]);
//   console.log(spelling("cake"), ["c", "ca", "cak", "cake"]);
//   console.log(spelling("happy"), ["h", "ha", "hap", "happ", "happy"]);
//   console.log(spelling("eagerly"), [
//     "e",
//     "ea",
//     "eag",
//     "eage",
//     "eager",
//     "eagerl",
//     "eagerly"
//   ]);
//   console.log(spelling("believe"), [
//     "b",
//     "be",
//     "bel",
//     "beli",
//     "belie",
//     "believ",
//     "believe"
//   ]);
// })();

//----7
//
// function powersOfTwo(n) {}

//----1

//---2
// function repeat(n) {
//   for (let i = 0; i <= 10; i++) { ////wrong
//     n = i++;
//   }
//   return n;
// }

// console.log(repeat());

//function that retuns array of my pets;
// let myPets = ["Ginger", "Asya", "Fluffy", "Tsera", "Hercules", "Wolfy"];

// //function that returns an array of petNames
// const returnPets = petNames => {
//   // let justNames = [...petNames]
//   //   .toString()
//   //   .split(" ")
//   //   .join();

//   return petNames;
// };

// //adds Taco to my pets
// myPets.push("Taco");

// //adds a pet to my pets
// myPets.unshift("Cressy");

// //delete the last pet from the array
// // myPets.pop();

// //deletes Ginger or first string from my pets
// // myPets.shift();

// //how to iterate through an array using for loop
// for (let i = 0; i < myPets.length; i++) {
//   console.log(myPets[i]);
// }
// //console.log(returnPets(myPets));
// console.log("/////////////////////////////////////");

// // let myPetsObj = [
// //   {
// //     name: "Ginger"
// //   },
// //   {
// //     name: "Asya"
// //   },
// //   {
// //     name: "Ochi"
// //   },
// //   {
// //     name: "Hercules"
// //   },
// //   {
// //     name: "Tsera"
// //   }
// // ];
// // // console.log(myPetsObj[0]);
// // //how to iterate through an object using for loops
// // for (let i = 0; i < myPetsObj.length; i++) {
// //   console.log(myPetsObj[i].name);
// // }

// // console.log("............................forEach......");
// // //how to use for each on an array
// // myPetsObj.forEach(function(myPetsObj) {
// //   console.log(myPetsObj.name);
// // });

// // for (let i = 0; i < myPets.length; i++) {
// //   console.log("element", i, "is", myPets[i]);
// // }

// // console.log("...............CONGRATS ALEX..........");

// //filter

// let ages = [34, 12, 43, 23, 1, 23, 18];

// // let legalDrink = ages.filter(x => x >= 21);

// // console.log(legalDrink);

// //map
// const newAge = ages.map(x => x + 10);
// console.log(newAge);

// //reduce

// const totalAge = ages.reduce((a, b) => a + b);

// console.log(totalAge);

// // let addThisUp = [34, 12, 43, 23, 1, 23, 18];
// let ages = [2, 4, 6, 8, 10];

// console.log(ages);

// //sliced

// // let slicedAge = ages.slice(0, 2);
// // console.log(slicedAge);
// // let newObj = myPetsObj.slice(0, 1);
// // console.log(newObj);

// //concat
// let addAges = ages.concat(12, 313);

// console.log(addAges);

// //returns the ASCII value of the passed in character.
// const a = c => c.charCodeAt();

// (function test() {
//   console.log(a(" "), 32);
//   console.log(a("A"), 65);
//   console.log(a("]"), 93);
//   console.log(a("^"), 94);
//   console.log(a("c"), 99);
// })();

// //--2
// //Create a function that goes through the array,
// //incrementing (+1) for each odd element and
// //decrementing (-1) for each even number
// const transform = arr => {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i] - 1);
//     } else {
//       result.push(arr[i] + 1);
//     }
//   }

//   return result;
// };

// const transform2 = arr => arr.map(x => (x % 2 === 0 ? x - 1 : x + 1));

// (() => {
//   console.log(transform([1, 2, 3, 4, 5]), [2, 1, 4, 3, 6]);
//   console.log(transform([3, 3, 4, 3]), [4, 4, 3, 4]);
//   console.log(transform2([2, 2, 0, 8, 10]), [1, 1, -1, 7, 9]);
//   console.log(transform2([9, 13, 15, 5, 2, 11]), [10, 14, 16, 6, 1, 12]);
// })();

// const transform = arr => {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i] - 1);
//     } else {
//       result.push(arr[i] + 1);
//     }
//   }

//   return result;
// };

//--------start time 3: 02

//------1
//toInt() : A function to convert the integer value of a string.
//toStr() : A function to transform a string into an integer.

// const toInt = str => Number(str);
// const toStr = num => num.toString();

// (() => {
//   console.log(toInt("37"), 37);
//   console.log(toInt("113"), 113);
//   console.log(toInt("5"), 5);
//   console.log(toInt("5231"), 5231);
//   console.log(toStr(37), "37");
//   console.log(toStr(113), "113");
//   console.log(toStr(5), "5");
//   console.log(toStr(5231), "5231");
// })();

//-----2
//A pair of strings form a strange pair if the first string's last letter
// equals the second string's first letter and vice versa.
// Create a function that returns true if a pair of strings constitutes a strange pair,
//and false otherwise.
// const isStrangePair = (str1, str2) => {
//   return (
//     str1.charAt(0) === str2.charAt(str2.length - 1) &&
//     str1.charAt(str1.length - 1) === str2.charAt(0)
//   );
// };

// (() => {
//   console.log(isStrangePair("ratio", "orator"), true);
//   console.log(isStrangePair("sparkling", "groups"), true);
//   console.log(isStrangePair("mentee", "eminem"), true);
//   console.log(isStrangePair("yahtzee", "easy"), true);
//   console.log(isStrangePair("bush", "hubris"), false);
//   console.log(isStrangePair("false", "true"), false);
//   console.log(isStrangePair("cupid", "dionysus"), false);
//   console.log(isStrangePair("futile", "elephant"), false);
//   console.log(isStrangePair("", ""), true);
//   console.log(isStrangePair("", "abc"), false);

//   console.log(isStrangePair("a", "a"), true);
//   console.log(isStrangePair("a", "b"), false);

//   console.log(isStrangePair("&", "&"), true);
//   console.log(isStrangePair("&!", "!&"), true);
//   console.log(isStrangePair("5556", "65"), true);
// })();

// //------3
// //Create a function replaces all the vowels in a string with a specified character.

// const replaceVowels = (str, ch) => str.replace(/[aeiou]/gi, ch);

// (() => {
//   console.log(replaceVowels("the aardvark", "#"), "th# ##rdv#rk");
//   console.log(replaceVowels("minnie mouse", "?"), "m?nn?? m??s?");
//   console.log(replaceVowels("shakespeare", "*"), "sh*k*sp**r*");
//   console.log(
//     replaceVowels("all is fair in love and war", "<"),
//     "<ll <s f<<r <n l<v< <nd w<r"
//   );
// })();

// //-----4
// //Create a function that removes the first and last characters from a string.
// const removeFirstLast = str => str.slice(1, -1) || str;

// (() => {
//   console.log(removeFirstLast("hello"), "ell");
//   console.log(removeFirstLast("benefit"), "enefi");
//   console.log(removeFirstLast("wordy"), "ord");
//   console.log(removeFirstLast("maybe"), "ayb");
//   console.log(removeFirstLast("to"), "to");
//   console.log(removeFirstLast("a"), "a");
//   console.log(removeFirstLast(""), "");
// })();

// //-------5
// // Fix this incorrect code, so that all tests pass!
// const minusOne = arr => arr.slice(0, -1);

// (() => {
//   let x = [1, 2, 3, 4, 5];
//   console.log(minusOne(x), [1, 2, 3, 4]);
//   console.log(minusOne(x), [1, 2, 3, 4]);
//   console.log(minusOne(x), [1, 2, 3, 4]);
//   console.log(minusOne(x), [1, 2, 3, 4]);
//   console.log(minusOne(x), [1, 2, 3, 4]);
// })();

// //-----6
// //Create a function that repeats each character in a string n times.
// const repeat = (str, n) => [...str].map(x => x.repeat(n)).join("");

// (() => {
//   console.log(repeat("mice", 5), "mmmmmiiiiiccccceeeee");
//   console.log(repeat("hello", 3), "hhheeellllllooo");
//   console.log(repeat("stop", 1), "stop");
//   console.log(repeat("tomato", 2), "ttoommaattoo");
// })();

//----7 ---finsish later...dont give up

//In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.

// The first number is the major version.
// The second number is the minor version.
// The third number is the patch (bug fixes).
// Write three separate functions, one to retrieve each element in the semantic versioning specification.

// const retrieveMajor = nums => {
//   let splitNums = [...nums];
//   console.log(splitNums);
//   let sliceNums = splitNums.slice(0, 1);

//   return String(sliceNums);
// };

// const retrieveMinor = nums => {
//   let splitNums = [...nums];
//   console.log(splitNums);
//   let sliceNums = splitNums.slice(2, 4);

//   return String(sliceNums);
// };

// const retrievePatch = nums => {
//   let splitNums = [...nums];
//   console.log(splitNums);
//   let sliceNums = splitNums.slice(4, 7);
//   return String([...sliceNums]);
// };

// (() => {
//   // Test group 1
//   console.log(retrieveMajor("6.1.9"), "6");
//   console.log(retrieveMinor("6.1.9"), "1");
//   console.log(retrievePatch("6.1.9"), "9");
//   // Test group 2
//   console.log(retrieveMajor("2.1.0"), "2");
//   console.log(retrieveMinor("2.1.0"), "1");
//   console.log(retrievePatch("2.1.0"), "0");
//   // Test group 3
//   console.log(retrieveMajor("5.12.13"), "5");
//   console.log(
//     retrieveMinor("5.12.13"),
//     "12",
//     "should work with 2-digit version numbers"
//   );
//   console.log(
//     retrievePatch("5.12.13"),
//     "13",
//     "should work with 2-digit version numbers"
//   );
// })();

// //------8
// //A number added with its additive inverse equals zero.
// //Create a function that returns an array of additive inverses.
// const additiveInverse = arr => arr.map(x => (x = -x));

// (() => {
//   console.log(additiveInverse([5, -7, 8, 3]), [-5, 7, -8, -3]);
//   console.log(additiveInverse([1, 1, 1, 1, 1]), [-1, -1, -1, -1, -1]);
//   console.log(additiveInverse([-5, -25, 35]), [5, 25, -35]);
// })();

//-----9
//I am trying to filter out empty arrays from an array.
// I want to transform something that looks like this: ['a', 'b', [], [], [1, 2, 3]]
//to look like ['a', 'b', [1, 2, 3]]. My code looks like this:

//// Fix this incorrect code so that all tests pass!
// Fix this incorrect code so that all tests pass!
// const removeEmptyArrays = arr => arr.filter(x => x.length !== 0);

// (() => {
//   console.log(removeEmptyArrays(["a", "b", []]), ["a", "b"]);
//   console.log(removeEmptyArrays([1, 2, [], 4]), [1, 2, 4]);
//   console.log(removeEmptyArrays([[], [], [], []]), []);
//   console.log(removeEmptyArrays([1, 2, 3, 4]), [1, 2, 3, 4]);
//   console.log(removeEmptyArrays([1, [], [], 4]), [1, 4]);
// })();

// //----10

//-----1
//----1 ---finsish later...dont give up

//In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.

// The first number is the major version.
// The second number is the minor version.
// The third number is the patch (bug fixes).
// Write three separate functions, one to retrieve each element in the semantic versioning specification.

// const retrieveMajor = nums => {
//   let splitNums = [...nums];
//   console.log(splitNums);
//   let sliceNums = splitNums.slice(0, 1); ///-------passes ///first number

//   console.log("///////////111111111111/////////////////////////////////");
//   return String(sliceNums);
// };

// const retrieveMinor = nums => {
//   let splitNums = [...nums];
//   console.log(splitNums);
//   let sliceNums = splitNums.slice(2, 4); // ----secong  number

//   let stringNumber = String(sliceNums);
//   console.log(stringNumber);

//   // let justNum = stringNumber.charAt(0,);
//   // return justNum;
//   console.log("////////////2222222222222222/////////////////////////////////");
// };

// const retrievePatch = nums => {
//   // let splitNums = [...nums];
//   // console.log(splitNums);
//   // let sliceNums = splitNums.slice(4, 7); ///thirt number
//   // return String([...sliceNums]);

//   console.log(nums.split("").slice(0, 2));

//   console.log("//////////333333333333333333//////////////////////////////////");
// };

// //test======dont erase
// const retrieveMajor1 = nums => {
//   let firstNum = nums.split("").slice(0, 2);

//   return firstNum.charAt(0, 1);
// };

// const retrieveMajor2 = num => {
//   return num;
// };

// const retrieveMinor2 = num => {
//   return num;
// };

// const retrievePatch2 = num => {
//   console.log("/////////////////////////////////////////////////////////");
//   let splitNum = num.split("");
//   console.log(splitNum);

//   let sliceNums = splitNum.slice(0, 2);
//   console.log(sliceNums);

//   let stringed = JSON.stringify(sliceNums);
//   console.log(stringed);
//   let findChar1 = stringed.charAt(2);
//   let findChar2 = stringed.charAt(6);
//   console.log(findChar1);
//   console.log(findChar2);
//   let joined = [findChar1, findChar2];
//   console.log(joined.join(""));
// };
// const retrieveMajor = v => v.split(".")[0];
// const retrieveMinor = v => v.split(".")[1];
// const retrievePatch = v => v.split(".")[2];

// (() => {
//   console.log(retrieveMajor("6.1.9"), "6");
//   console.log(retrieveMinor("6.1.9"), "1");
//   console.log(retrievePatch("6.1.9"), "9");
//   // Test group 2
//   console.log(retrieveMajor("2.1.0"), "2");
//   console.log(retrieveMinor("2.1.0"), "1");
//   console.log(retrievePatch("2.1.0"), "0");
//   // Test group 3
//   //////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////
//   console.log(retrieveMajor("55.22.33"), "55");
//   console.log(
//     retrieveMinor("5.12.13"),
//     "12"
//     // "should work with 2-digit version numbers"
//   );
//   console.log(
//     retrievePatch("55.22.33"),
//     "55"

//     // "should work with 2-digit version numbers"
//   );
// })();

// ------- 2

//function that filters out an array to include numbers who only have a certain number of digits.
//If no numbers of the specified digit length exist, return an empty array.
// If all numbers in the array have the specified digit length, return original array.
// The sub-array returned should have the same relative order as the original array.
// const filterDigitLength = (arr, num) =>
//   arr.filter(arr => String(arr).length == num);

// (() => {
//   console.log(filterDigitLength([88, 232, 4, 9721, 555], 3), [232, 555]);
//   console.log(filterDigitLength([2, 7, 8, 9, 1012], 1), [2, 7, 8, 9]);
//   console.log(
//     filterDigitLength([32, 88, 74, 91, 300, 4050], 1),
//     [],
//     "Should return empty array if no numbers of specified length exist."
//   );
//   console.log(
//     filterDigitLength([5, 6, 8, 9], 1),
//     [5, 6, 8, 9],
//     "Should return original array if every digit is that length."
//   );
//   console.log(filterDigitLength([99, 838, 435, 7666, 989, 431], 3), [
//     838,
//     435,
//     989,
//     431
//   ]);
//   console.log(filterDigitLength([99, 838, 435, 7666, 989, 431], 2), [99]);
// })();

//------3
// const spreadNums = nums => String(nums).split(",")[0];

// (() => {
//   console.log(spreadNums([83, 3467678, 76723423]));
//   console.log(spreadNums([868678, 34, 767676]));
//   console.log(spreadNums([812121, 346756765, 767344]));
// })();

//Create a function to extract the name of the subreddit from its URL.

// ----4
// const subReddit = link => link.split("/")[4];

// (() => {
//   console.log(
//     subReddit("https://www.reddit.com/r/relationships/"),
//     "relationships"
//   );
//   console.log(
//     subReddit("https://www.reddit.com/r/mildlyinteresting/"),
//     "mildlyinteresting"
//   );
//   console.log(subReddit("https://www.reddit.com/r/funny/"), "funny");
//   console.log(
//     subReddit("https://www.reddit.com/r/CrappyDesign/"),
//     "CrappyDesign"
//   );
//   console.log(subReddit("https://www.reddit.com/r/confession/"), "confession");
//   console.log(subReddit("https://www.reddit.com/r/AskMen/"), "AskMen");
//   console.log(subReddit("https://www.reddit.com/r/comics/"), "comics");
//   console.log(subReddit("https://www.reddit.com/r/lifehacks/"), "lifehacks");
//   console.log(
//     subReddit("https://www.reddit.com/r/wholesomememes/"),
//     "wholesomememes"
//   );
//   console.log(
//     subReddit("https://www.reddit.com/r/iamverysmart/"),
//     "iamverysmart"
//   );
//   console.log(
//     subReddit("https://www.reddit.com/r/starterpacks/"),
//     "starterpacks"
//   );
//   console.log(subReddit("https://www.reddit.com/r/awww/"), "awww");
// })();

// -----5
//Your task is to create a function that, when fed the inputs below,
// produce the sample outputs shown.

// const mysteryFunc = (arr, num) => arr.map(arr => arr % num);

// (() => {
//   console.log(mysteryFunc([5, 7, 8, 2, 1], 2), [1, 1, 0, 0, 1]);
//   console.log(mysteryFunc([9, 8, 16, 47], 4), [1, 0, 0, 3]);
//   console.log(mysteryFunc([17, 11, 99, 55, 23, 1], 5), [2, 1, 4, 0, 3, 1]);
//   console.log(mysteryFunc([6, 1], 7), [6, 1]);
//   console.log(mysteryFunc([3, 2, 9], 3), [0, 2, 0]);
//   console.log(mysteryFunc([48, 22, 0, 19, 33, 100], 10), [8, 2, 0, 9, 3, 0]);
// })();

//----6
//funtion that returns true if all integers in an array are factors of a number,
//and false otherwise.

// const checkFactors = (x, y) => [...x].every(x => y % x === 0);

// (() => {
//   console.log(checkFactors([2, 3, 4], 12), true);
//   console.log(checkFactors([1, 2, 3, 8], 12), false, "8 is not a factor of 12");
//   console.log(checkFactors([1, 2, 50], 100), true);
//   console.log(checkFactors([1, 9, 81], 81), true);
//   console.log(checkFactors([5, 10, 50], 500), true);
//   console.log(
//     checkFactors([5, 10, 499], 500),
//     false,
//     "499 is not a factor of 500"
//   );
//   console.log(checkFactors([3, 6], 9), false, "6 is not a factor of 9");
// })();

// //------7
// //Create a function that computes the hamming distance between two strings.
// const hammingDistance = (str1, str2) =>
//   [...str1].filter((str1, i) => str1 !== str2[i]).length;

// (() => {
//   console.log(hammingDistance("abcde", "bcdef"), 5);
//   console.log(hammingDistance("abcde", "abcde"), 0);
//   console.log(hammingDistance("strong", "strung"), 1);
// })();

// const sortArr = myArray => {
//   return myArray.sort((a, b) => a - b);
// };
// console.log(sortArr([2, 4, 3, 7, 6, 5, 9, 10, 1]));
//[1, 2, 3, 4, 5, 6, 7, 9,10]

// //sort array from smallest to biggest
// let arr = [2, 4, 3, 7, 6, 5, 9, 10, 1];

// for (let smallest = 1; smallest < arr.length; smallest++)
//   for (let nextNumber = 0; nextNumber < smallest; nextNumber++)
//     if (arr[smallest] < arr[nextNumber]) {
//       let x = arr[smallest];
//       arr[smallest] = arr[nextNumber];
//       arr[nextNumber] = x;
//     }
// console.log(arr);
// //[1, 2, 3, 4, 5, 6, 7, 9, 10]
// //------1
// //Create a function that takes in an initial word and filters out an array
// //to contain words that start with the same letters as the initial word.

// const dictionary = (initial, words) => {
//   let result = [];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].includes(initial)) {
//       result.push(words[i]);
//     }
//   }
//   return result;
// };

// const dictionary = (initial, words) => {
//   return words.filter(words => words.includes(initial));
// };

// (() => {
//   console.log(dictionary("bu", ["button", "breakfast", "border"]), ["button"]);
//   console.log(
//     dictionary("beau", ["pastry", "delicious", "name", "boring"]),
//     []
//   );
// })();

// // //use methods with in a for loop or a filter --- hint
// //-----2
// const isSpecialArray = arr => arr.every((x, y) => x % 2 === y % 2);

// (() => {
//   console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]), true);
//   console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]), false);
// })();

// //----3 ---GOOD JOB! YOURE AMAZING! KEEP GOING
// //Write a function that maps files to their extension names.
// const getExtension = arr => arr.map(arr => arr.split(".")[1]);

// (() => {
//   console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]), [
//     "jpg",
//     "pdf",
//     "mp3"
//   ]);
//   console.log(
//     getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]),
//     ["rb", "cpp", "py", "js"]
//   );
//   console.log(getExtension(["code.html", "code.css"]), ["html", "css"]);
//   console.log(
//     getExtension(["minesweeper.java", "game.java", "my_project.java"]),
//     ["java", "java", "java"]
//   );
// })();

//-----4 -----MASTERED THIS. Great Job !
//Create a function that removes the first and last characters from a string.

// const removeFirstLast = str => str.slice(1, -1) || str;

// (() => {
//   console.log(removeFirstLast("hello"), "ell");
//   console.log(removeFirstLast("benefit"), "enefi");
//   console.log(removeFirstLast("wordy"), "ord");
//   console.log(removeFirstLast("maybe"), "ayb");
//   console.log(removeFirstLast("to"), "to");
//   console.log(removeFirstLast("a"), "a");
//   console.log(removeFirstLast(""), "");
// })();

//------5
//Create a function that takes an integer and returns an array from 1 to the given number, where:
//If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number).
//If the number cannot be divided evenly by 4, simply return the number.

// function amplify(num) {
//   let result = [];

//   for (let i = 1; i <= num; i++) {
//     result.push(i % 4 == 0 ? i * 10 : i);
//   }

//   return result;
// }

// (() => {
//   console.log(amplify(1), [1]);
//   console.log(amplify(4), [1, 2, 3, 40]);
//   // console.log(amplify(25), [
//   //   1,
//   //   2,
//   //   3,
//   //   40,
//   //   5,
//   //   6,
//   //   7,
//   //   80,
//   //   9,
//   10,
//   11,
//   120,
//   13,
//   14,
//   15,
//   160,
//   17,
//   18,
//   19,
//   200,
//   21,
//   22,
//   23,
//   240,
//   25
//   // ]);
// })();

// //---6 ----this one was a pain in the ass
// //Write a function that transforms all letters from [a,m] to 0 and letters from [n,z] to 1 in a string.

// const convertBinary = str => {
//   return str.replace(/[a-m]/gi, "0").replace(/[n-z]/gi, "1");
// };

// (() => {
//   console.log(convertBinary("house"), "01110");
//   console.log(convertBinary("excLAIM"), "0100000");
// })();

/// remember to write regEx like this /[a-m]/gi not /a-m/gi <-- wont work//

// //--7
// //Create a function that takes in two arrays: the array of user-typed words,
// // and the array of correctly-typed words and outputs an array containing 1s
// // (correctly-typed words) and -1s (incorrectly-typed words).

// function correctStream(user, correct) {
//   let result = [];
//   for (let i = 0; i < user.length; i++) {
//     user[i] === correct[i] ? result.push(1) : result.push(-1);
//   }
//   return result;
// }

// (() => {
//   console.log(correctStream(["it", "is", "find"], ["it", "is", "fine"]), [
//     1,
//     1,
//     -1
//   ]);
// })();

// //---8
// const dictionary = (initial, words) =>
//   words.filter(words => words.includes(initial));

// (() => {
//   console.log(dictionary("bu", ["button", "breakfast", "border"]), ["button"]);
// })();

// -------4 -16 -19
///-----refresher on var let and const
//var is a function scope. That means it can be seen anywhere in the function
//its a global variable
//let and const are block scope. They can be seen inside the curly braces
//var is function scope. let and const are block scope. Function scope is within the function. Block scope is within curly brackets.
//
// function checkScope() {
//   "use strict";
//   var i = "function scope";
//   if (true) {
//     let i = "block scope";
//     console.log("Block scope i is: ", i); //really interesting
//   }
//   console.log("Function scope i is: ", i);
//   return i;
// }

// const s = [5, 7, 2];
// function editInPlace() {
//   "use strict";
//   // change code below this line

//   s[0] = 2,
//   s[1] = 5,
//   s[2] = 7;
//   return s;

//   // change code above this line
// }
// console.log(editInPlace());

// function freezeObj() {
//   "use strict";
//   const MATH_CONSTANTS = {
//     PI: 3.14
//   };
//   // change code below this line
//   Object.freeze(MATH_CONSTANTS);

//   // change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99; // cool way to do a try
//   } catch (ex) {
//     console.log("Error");
//   }
//   return MATH_CONSTANTS.PI;
// }

// const PI = freezeObj();

// console.log(PI);

//A higher-order function is a function that can take another function as an argument,
//or that returns a function as a result

// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const squareList = arr => {
//   "use strict";
//   // change code below this line
//   const squaredIntegers = realNumberArray.filter(
//     nums => nums > 0 && nums % parseInt(nums) === 0
//   );

//   //parseInt(x) -- i like the use of parseInt here.

//   // change code above this line
//   return squaredIntegers;
// };
// // test your code
// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

// ---4-17 -19
// let x = 3.13;
// x = parseInt(x);

// let result = 5 % x;

// console.log(x);
// console.log(result);

// const increment = (function() {
//   "use strict";
//   return function increment(number, value = 1) {
//     return number + value;
//   };
// })();
// console.log(increment(5, 2)); // returns 7
// console.log(increment(5)); // returns 6

// const sum = (() => {
//   "use strict";

//   return function sum(...args) {
//     //const args = [ x, y, z ];
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();
// console.log(sum(1, 2, 3)); // 6
//
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// (() => {

//   arr2 = [...arr1]; // change this line
//   return arr2;
// })();
// console.log(arr2);

//
// const AVG_TEMPERATURES = {
//   today: 77.5,
//   tomorrow: 79
// };

// function getTempOfTmrw(avgTemperatures) {

//   const tempOfTomorrow = AVG_TEMPERATURES.tomorrow ;

//   return tempOfTomorrow;
// }

// console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

// -----11-18=19
//-----1

//Use destructuring assignment with the rest operator to perform an
// effective Array.prototype.slice() so that arr is a sub-array of the original
//array source with the first two elements omitted.

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeFirstTwo(list) {
//   const [, , ...arr] = list;

//   return arr;
// }

// const arr = removeFirstTwo(source);
// console.log(arr); // should be [3,4,5,6,7,8,9,10]
// console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

/////////////////////
//----> I learned that you can excule elements in an array using [,,,] cammas..so cool
////////////////////

// const sourceArr = [2, 3, 4, 5, 6, 7, 8];
// const sourceArr2 = [
//   123,
//   9,
//   7,
//   8,
//   9,
//   3,
//   2,
//   8,
//   7,
//   4,
//   6,
//   8,
//   6,
//   1,
//   2,
//   6,
//   3,
//   9,
//   1,
//   2
// ];

// //function that removes the first two elements in the array
// const removeTwo = ([, , ...anyVal]) => anyVal;

// const myArr = removeTwo(sourceArr);
// const myArr2 = removeTwo(sourceArr2);
// console.log(myArr);
// console.log(myArr2);

///----2

// const profileUpdate = ({ name, age, nationality, location }) => {
//   /* do something with these fields */
// };

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };
// const half = (() => {
//   return function ({max, min}){
//     return (max + min) / 2
//   }
// })();
// console.log(stats); // should be object
// console.log(half(stats)); // should be 28.015

//-----3
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["id-blacklist", "no-dup-keys"]
// };
// function makeList(arr) {
//   "use strict";

//   // change code below this line
//   const resultDisplayArray = null;
//   // change code above this line

//   return resultDisplayArray;
// }
// /**
//  * makeList(result.failure) should return:
//  * [ `<li class="text-warning">no-var</li>`,
//  *   `<li class="text-warning">var-on-top</li>`,
//  *   `<li class="text-warning">linebreak</li>` ]
//  **/
// const resultDisplayArray = makeList(result.failure);

///----4
//Use template literal syntax with backticks to display each entry of the
// result object's failure array. Each entry should be wrapped inside an li element
// with the class attribute text-warning, and listed within the resultDisplayArray.
// const person = {
//   name: "Zodiac Hasbro",
//   age: 56
// };

// Template literal with multi-line and string interpolation

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["id-blacklist", "no-dup-keys"]
// };
// const makeList = item => item.map(item => `<li class="text-warning">${item}</li>`, )

// /**
//  * makeList(result.failure) should return:
//  * [ `<li class="text-warning">no-var</li>`,
//  *   `<li class="text-warning">var-on-top</li>`,
//  *   `<li class="text-warning">linebreak</li>` ]
//  **/
// const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray);

/////////this was a hard one but i understand it

//----5
// const createPerson = (name, age, gender) => {
//   "use strict";
//   // change code below this line
//   return {
//     name, age, gender;
//   };
//   // change code above this line
// };
// console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

//----6
// const person = {
//   arms : 2,
//   addArms(num){
//     console.log(num)
//     this.arms = 4
//   }
// }

// person.addArms(4)

// console.log(person)

//-----7
// const makeClass = () => {
//   class Vegetable {
//     constructor(name) {
//       this.name = name;
//     }
//   }
//   return Vegetable;
// };
// const Vegetable = makeClass();
// const carrot = new Vegetable("carrot");
// console.log(carrot.name); // => should be 'carrot'

// const createPerson = () => {
//   class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
//   return Person
// };

// const Person = createPerson();
// const man = new Person('Alex');
// console.log(man.name);
// const woman = new Person('Irina');
// console.log(woman.name)

// const createPerson = () => {
//   class Person {
//     constructor(name, age, sex) {
//       this.name = name;
//       this.age = age;
//       this.sex = sex; ////constructors are complicating to me
//     }
//   }
//   return Person;
// };

// const Person = createPerson();
// const man = new Person("alex");
// console.log(man.name);

//---8
// function makeClass() {
//   class Thermostat {
//     constructor(temp) {
//       this.temp = temp;
//     }
//   }

//   return Thermostat;
// }
// const Thermostat = makeClass();
// const thermos = new Thermostat(76); // setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in C
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in C

// // ---9

// capitalizeString("hello!");

// import { capitalizeString } from "string_functions";

//----10

// export const foo = "bar";
// export const bar = "foo";

// console.log(foo)

//---11

// import * as myModules from "capitalize_strings";

// //* import all the files
// //as ....here i name my where i want to store the importes files
// //last step is where im gettng he files from

// // ---12
// "use strict";
// import subtract from "math_functions"
// subtract(7,4);

// //----13
// //finds the length og the string
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/gi; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;
// console.log(result)

// //----14
// //Use the shorthand character class \W to count the number of
// //non-alphanumeric characters in various quotes and strings.
// //finds all the  none letters in the variable
// let quoteSample2 = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex2 = /\W/gi; // Change this line
// let result2 = quoteSample2.match(nonAlphabetRegex2);
// console.log(result2)
// //----15

//-----4-19-19
//Functional Programming 101

// //-----1
// /**
//  * A long process to prepare tea.
//  * @return {string} A cup of tea.
//  **/
// const prepareTea = () => "greenTea";

// /**
//  * Get given number of cups of tea.
//  * @param {number} numOfCups Number of required cups of tea.
//  * @return {Array<string>} Given amount of tea cups.
//  **/
// const getTea = numOfCups => {
//   const teaCups = [];

//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }

//   return teaCups;
// };

// console.log(getTea(40))

// // Add your code below this line

// const tea4TeamFCC = null; // :(

// // Add your code above this line

// console.log(tea4TeamFCC);

// // //---2
// /**
//  * A long process to prepare green tea.
//  * @return {string} A cup of green tea.
//  **/
// const prepareGreenTea = () => "greenTea";

// /**
//  * A long process to prepare black tea.
//  * @return {string} A cup of black tea.
//  **/
// const prepareBlackTea = () => "blackTea";

// /**
//  * Get given number of cups of tea.
//  * @param {function():string} prepareTea The type of tea preparing function.
//  * @param {number} numOfCups Number of required cups of tea.
//  * @return {Array<string>} Given amount of tea cups.
//  **/
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = [];

//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }

//   return teaCups;
// };
// // console.log(prepareGreenTea(),27);
// // console.log(prepareBlackTea(),13)
// // // Add your code below this line

// const tea4BlackTeamFCC = getTea(prepareBlackTea, 27)
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 13); /////was stuck here for a while....dont have to call the function

// // Add your code above this line

// console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);

//----3

// // tabs is an array of titles of each site open within the window
// var Window = function(tabs) {
//   this.tabs = tabs; // we keep a record of the array inside the object
// };

// // When you join two windows into one window
// Window.prototype.join = function (otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs);
//   return this;
// };

// // When you open a new tab at the end
// Window.prototype.tabOpen = function (tab) {
//   this.tabs.push('new tab'); // let's open a new tab for now
//   return this;
// };

// // When you close a tab
// Window.prototype.tabClose = function (index) {
//   var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
//   var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab

//   this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together
//   return this;
//  };

// // Let's create three browser windows
// var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
// // Your mailbox, drive, and other work sites
// var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
// var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites

// // Now perform the tab opening, closing, and other operations
// var finalTabs = socialWindow
//                     .tabOpen() // Open a new tab for cat memes
//                     .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//                     .join(workWindow.tabClose(1).tabOpen());

// console.log(finalTabs.tabs);

// console.log(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'])

//-----4

// //Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.
// // the global variable
// let fixedValue = 4;

// const incrementer = () => fixedValue + 1;

// let newValue = incrementer(); // Should equal 5

// console.log(newValue);

// console.log(fixedValue); // Should print 4

// //---5
// //Write the incrementer function so it takes an argument, and then increases the value by one.
// // the global variable
// let fixedValue = 4;

// // Add your code below this line
// function incrementer (fixedValue) {

//   return fixedValue + 1;
//   // Add your code above this line
// }

// let newValue = incrementer(fixedValue); // Should equal 5
// console.log(fixedValue, newValue); // Should print 4

// //-----6
// //---count white spaces

// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/gi; // Change this line
// let result = sample.match(countWhiteSpace);

// console.log(result)
// //----7
// //countNonWhiteSpace

// let sentence = 'This really funny person';
// let countWords = /\S/gi;
// let returnThis = sentence.match(countWords);
// console.log(returnThis)

// //---8
// let str = 'Woooow Cool';

// let woRegex = /Wow{3,4}\scool/ ;

// let result = woRegex.test(woRegex);
// console.log(result);

// let ohStr = "Ohhh no";
// let ohRegex = /Oh{3,6}\sno/; // Change this line
// let result2 = ohRegex.test(ohStr);

// // console.log(result2)
// //----9

// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah/; // Change this line
// let result = haRegex.test(haStr);
// console.log(result)

// //----10
// //Change the regex timRegex to match the word "Timber" only when it has four letter m's.

// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/; // Change this line
// let result = (() => {
//   console.log(timRegex.test(timStr));
// })();

// let american = "color";
// let british = "colour";
// let rainbowRegex = /colou?r/;
// (() => {
//   console.log(
//     rainbowRegex.test(american), // Returns true
//     rainbowRegex.test(british) // Returns true
//   );
// })();

// //---11
// //Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);
// (() => {
//   console.log(result);
// })();

// //----12
// //Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long
// //and have two consecutive digits.

// let sampleWord = "astronaut";
// let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
// let result = pwRegex.test(sampleWord);
// console.log(result);

//----13
// let repeatStr = "regex regex";
// let repeatRegex = /(\w+)\s\1/;
// repeatRegex.test(repeatStr); // Returns true
// repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]

// //14
// //Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// const largestSwap = num =>
//   num >=
//   num
//     .toString()
//     .split("")
//     .reverse()
//     .join("");

// (() => {
//   console.log(largestSwap(27), false, "27 < 72, so not largest swap.");
//   console.log(largestSwap(43), true, "43 > 34, so largest swap.");
//   console.log(largestSwap(14), false, "14 < 41, so not largest swap.");
//   console.log(largestSwap(53), true, "53 > 35, so largest swap.");
//   console.log(largestSwap(99), true, "Cannot do better, so largest swap.");
// })();
//----15
// //Create a function that returns the product of all odd elements in an array.
// const oddProduct = arr => [...arr].filter(x => x % 2).reduce((x, i) => x * i);

// (() => {
//   console.log(oddProduct([3, 4, 1, 1, 5]), 15);
//   console.log(oddProduct([5, 5, 8, 2, 4, 32]), 25);
//   console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]), 1);
//   console.log(oddProduct([0, 0, 0, 1]), 1);
//   console.log(oddProduct([1, 2, 2, 5, 2, 0]), 5);
// })();

// //-----16
// //Create a function that returns the next element in an arithmetic sequence.
// //In an arithmetic sequence, each element is formed by adding the same constant to the previous element.
// function nextElement(arr) {
//   //in a rush
//   let difference = [...arr][1] - [...arr][0];

//   let nextElement = arr.slice(-1)[0];

//   return nextElement + difference;
// }

// (() => {
//   console.log(nextElement([3, 5, 7, 9]), 11);
//   console.log(nextElement([-5, -6, -7]), -8);
//   console.log(nextElement([2, 2, 2, 2, 2]), 2);
// })();
// //----17
// //Create a function that returns true if an integer is divisible by 5, and false otherwise.
// const divisibleByFive = num => num % 5 === 0;

// (() => {
//   console.log(divisibleByFive(7), false);
//   console.log(divisibleByFive(5), true);
//   console.log(divisibleByFive(15), true);
//   console.log(divisibleByFive(33), false);
//   console.log(divisibleByFive(-18), false);
//   console.log(divisibleByFive(999), false);
//   console.log(divisibleByFive(2), false);
// })();

// //---18
// //Given two strings and a character, create a function that returns the total
// //number of unique characters from the combined string.
// function countUnique(s1, s2) {
//   let one = [...s1].map(x => x);
//   // console.log(one)
//   let two = [...s2].map(x => x);
//   // console.log(two)
//   for (let i = 0; i < one.length; i++) {
//     for (let j = 0; j < two.length; j++) console.log(one[i]);
//   }
// }

// console.log(countUnique("apple", "play"), 5);
// console.log(countUnique("sore", "zebra"), 7);
// console.log(countUnique("pip", "geeks"), 6);
// console.log(countUnique("a", "soup"), 5);
// console.log(countUnique("maniac", "maniac"), 5);

// // -----1
// //You've got chickens (2 legs),
// //cows (4 legs) and pigs (4 legs) on your farm.
// // Return the total number of legs on your farm.
// const animals = (chickens, cows, pigs) => chickens * 2 + cows * 4 + pigs * 4;

// (() => {
//   console.log(animals(5, 2, 8), 50);
//   console.log(animals(3, 4, 7), 50);
//   console.log(animals(1, 2, 3), 22);
//   console.log(animals(3, 5, 2), 34);
// })();

// // -----2
// //Write a function that returns true if there exists at least one number
// // that is larger than or equal to n.
// const existsHigher = (arr, n) => Math.max(...arr) >= n;

// (() => {
//   console.log(existsHigher([5, 3, 15, 22, 4], 10), true);
//   console.log(existsHigher([1, 2, 3, 4, 5], 8), false);
//   console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4), true);
//   console.log(existsHigher([2, 2, 2, 2], 5), false);
//   console.log(existsHigher([], 0), false);
// })();

// //-------3
// //Write a function to check whether an array contains a particular element.
// const check = (arr, el) => [...arr].includes(el);

// (() => {
//   console.log(check([1, 2, 3, 4, 5], 3), true);
//   console.log(check([1, 1, 2, 1, 1], 3), false);
//   console.log(check([1, 1, 2, 1, 5, 4, 7], 7), true);
//   console.log(check([1, 1, 2, 1, 5, 4, 7], 8), false);
//   console.log(check([5, 5, 5, 6], 5), true);
//   console.log(check([], 5), false);
// })();

// //------4
// //Create a function that returns true if a string is empty and false otherwise.
// const isEmpty = s => s === "";

// (() => {
//   console.log(isEmpty(""), true);
//   console.log(isEmpty(" "), false);
//   console.log(isEmpty("            "), false);
//   console.log(isEmpty("38215"), false);
//   console.log(isEmpty("afjabsdf"), false);
//   console.log(isEmpty("!?@&"), false);
// })();

// // ------5
// //Write a regular expression that matches a string
// //if and only if it contains at least one digit.

// let x = /\d/;

// // --------6
// //Create a function that takes an array and
// //returns the difference between the smallest and biggest numbers.
// const differenceMaxMin = arr => Math.max(...arr) - Math.min(...arr);

// (() => {
//   console.log(differenceMaxMin([10, 4, 1, 2, 8, 91]), 90);
//   console.log(differenceMaxMin([-70, 43, 34, 54, 22]), 124);
// })();

// //------7
// //Write a function that returns true if an object is empty, and false otherwise.
// const isEmpty = obj => Object.keys(obj).length === 0;

// (() => {
//   console.log(isEmpty({}), true);
//   console.log(isEmpty({ a: 1 }), false);
//   console.log(isEmpty({ z: 2, w: 4, y: 5 }), false);
// })();

// // ----1
// //reverse array
// const reverse = (arr) =>  [...arr].reverse();

// (() => {
//   console.log(reverse([1, 2, 3, 4]), [4, 3, 2, 1])
//   console.log(reverse([5, 6, 7]), [7, 6, 5])
//   console.log(reverse([9, 9, 2, 3, 4]), [4, 3, 2, 9, 9])
//   console.log(reverse([3, 3]), [3, 3])
//   console.log(reverse([-1, -1, -1]), [-1, -1, -1])
//   console.log(reverse([]), [])
// })()

// // --- 2
// //Write a function that turns a comma-delimited list into an array of strings.
// function toArray(str) {
//   if(str === '') return [];
//   return str.split(', ')
// }

// (() => {
//   console.log(toArray("watermelon, raspberry, orange"), [
//     "watermelon",
//     "raspberry",
//     "orange"
//   ]);

// })();

// // -----3
// //Write a function that partitions the array into two subarrays:
// //one with all even integers, and the other with all odd integers.
// //Return your result in the following format:
// function evenOddPartition(arr) {
//   // let even = [...arr].filter(x => x % 2 === 0);
//   // let odd = [...arr].filter(x => x % 2 !== 0);
//   // return [[...even], [...odd]];
//   return [[...arr].filter(x => x % 2 === 0), [...arr].filter(x => x % 2 !== 0)];
// }

// (() => {
//   console.log(evenOddPartition([5, 8, 9, 2, 0]), [[8, 2, 0], [5, 9]]);

//   console.log(evenOddPartition([]), [[], []]);
// })();

// //----4
// //Write a function that returns true if the product of an array
// //is divisible by the sum of that same array.

// function divisible(arr) {
//   let sumTotal = arr.reduce((x, y) => x + y);
//   let multiTotal = arr.reduce((x, y) => x * y);
//   return multiTotal % sumTotal === 0;
// }

// (() => {
//   console.log(divisible([4, 4, 4, 4]), true);

//   console.log(divisible([3, 5, 1]), false);
// })();

// //-----5
// //Create a function that returns the smaller number.
// const smallerNum = (x, y) => (Number(x) < Number(y) ? String(x) : String(y));
// (() => {
//   console.log(smallerNum("21", "44"), "21");
//   console.log(smallerNum("153", "367"), "153");
//   console.log(smallerNum("1500", "16"), "16");
//   console.log(smallerNum("100", "23"), "23");
//   console.log(smallerNum("1500", "1"), "1");
//   console.log(smallerNum("5", "5"), "5");
// })();

// -----6
//Create a function to concatenate two integer arrays.
//easy
// //----7
// //Write a regular expression that matches a string if and only if it is a valid zip code.
// // let x = /(^\d{5}$)|(^\d{5}-\d{4}$)/
// let isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test("90210");
// console.log(isValidZip);

// //------8
// //Write a function that returns true if all characters in a string are identical
// //and false otherwise.

// const isIdentical = s => {
//   return [...s].every(x => x === s[0]);
// };
// (() => {
//   console.log(isIdentical("kkkkk"), true);
//   console.log(isIdentical("ckkkk"), false);
//   console.log(isIdentical("kkkkck"), false);
//   console.log(isIdentical("aabc"), false);
//   console.log(isIdentical("ccc"), true);
//   console.log(isIdentical("aabbbb"), false);
//   console.log(isIdentical("bbbbbb"), true);
// })();

// //Write two functions:
// //----9

// // toArray(), which converts a number to an array of its digits.
// // toNumber(), which converts an array of digits back to its number.
// const toArray = num =>
//   String(num)
//     .split("")
//     .map(x => Number(x));

// const toNumber = arr => Number([...arr].join(""));

// (() => {
//   console.log(toArray(235), [2, 3, 5]);
//   console.log(toArray(19), [1, 9]);
//   console.log(toArray(0), [0]);
//   console.log(toNumber([2, 3, 5]), 235);
//   console.log(toNumber([1, 9]), 19);
//   console.log(toNumber([0]), 0);
// })();

// //----10
// //Write a regular expression that matches only an even number. Numbers will be presented as strings.
// let x = /^\d*[02468]$/;
// console.log(x);

// //----11
// //Write a function that returns true if a number is a palindrome.
// const isPalindrome = n =>
//   String([n])
//     .split("")
//     .reverse()
//     .join("") === String([n]);

// (() => {
//   console.log(isPalindrome(838), true);
//   console.log(isPalindrome(77), true);
//   console.log(isPalindrome(95159), true);
//   console.log(isPalindrome(839), false);
//   console.log(isPalindrome(4234), false);
//   console.log(isPalindrome(13), false);
// })();

// //----12
// // Create a function that returns the number of hashes and pluses in a string.

// const hashPlusCount = str => [
//   [...str].filter(x => x === "#").length,
//   [...str].filter(x => x === "+").length
// ];
// (() => {
//   console.log(hashPlusCount("####"), [4, 0]);
//   console.log(hashPlusCount("#"), [1, 0]);
//   console.log(hashPlusCount("+++++++"), [0, 7]);
//   console.log(hashPlusCount("++"), [0, 2]);
//   console.log(hashPlusCount("#+#+"), [2, 2]);
//   console.log(hashPlusCount("###+"), [3, 1]);
//   console.log(hashPlusCount("##+++#"), [3, 3]);
//   console.log(hashPlusCount("#+++#+#++#"), [4, 6]);
//   console.log(hashPlusCount(""), [0, 0]);
// })();

// //----13
// // Create a function that moves all capital letters to the front of a word.
// const capToFront = s => {
//   let upper = [...s].filter(x => x === x.toUpperCase());
//   let lower = [...s].filter(y => y === y.toLowerCase());

//   return [...upper, ...lower].join("");
// };

// (() => {
//   console.log(capToFront("hApPy"), "APhpy");
//   console.log(capToFront("moveMENT"), "MENTmove");
//   console.log(capToFront("aPPlE"), "PPEal");
//   console.log(capToFront("shOrtCAKE"), "OCAKEshrt");
// })();

// //-----14
// //Given two strings and a character, create a function that
// //returns the total number of unique characters from the combined string.
// const countUnique = (s1, s2) => new Set(s1 + s2).size;

// (() => {
//   console.log(countUnique("apple", "play"), 5);
//   console.log(countUnique("sore", "zebra"), 7);
//   console.log(countUnique("pip", "geeks"), 6);
//   console.log(countUnique("a", "soup"), 5);
//   console.log(countUnique("maniac", "maniac"), 5);
// })();

// //----15
// //A set is a collection of unique items.
// // A set can be formed from an array from removing all duplicate items.
// function set(arr) {
//   return [...new Set(arr)];
// }

// (() => {
//   console.log(set([1, 3, 3, 5, 5]), [1, 3, 5]);
// })();

// //----1
// //Write a function that returns the lexicographically first and
// //lexicographically last rearrangements of a string. Output the results in the following manner:

// const firstAndLast = s => [
//   [...s].sort().join(""),
//   [...s]
//     .sort()
//     .reverse()
//     .join("")
// ];
// (() => {
//   console.log(firstAndLast("marmite"), ["aeimmrt", "trmmiea"]);
//   console.log(firstAndLast("bench"), ["bcehn", "nhecb"]);
//   console.log(firstAndLast("scoop"), ["coops", "spooc"]);
//   console.log(firstAndLast("fanatic"), ["aacfint", "tnifcaa"]);
// })();

// //-----2
// // Create a function that returns the index of the first vowel in a string.
// const firstVowel = s => s.search(/[aeiou]/gi);

// (() => {
//   console.log(firstVowel("Happy"), "a");
// })();

// //----3
// //Write a function that returns true if two arrays have the
// //same number of unique elements, and false otherwise.

// const same = (a1, a2) => [...new Set(a1)].length === [...new Set(a2)].length;

// (() => {
//   console.log(same([1, 3, 4, 4, 4], [2, 5, 7]), true);
//   console.log(same([9, 8, 7, 6], [4, 4, 3, 1]), false);
//   console.log(same([2], [3, 3, 3, 3, 3]), true);
//   console.log(same([5, 6, 7, 9], [4, 1]), false);
//   console.log(same([5, 9, 9], [9, 5]), true);
//   console.log(same([1, 1, 1, 4], [1, 4, 4, 4, 4, 4]), true);
//   console.log(same([], []), true);
// })();

//----4
// Given a word, write a function that returns the first index and the last index of a character.

// function charIndex(word, char) {
//   if (!word.includes(char)) {
//     return undefined;
//   }
//     return [word.indexOf(char), word.lastIndexOf(char)]
// }

//cleaner way
// const charIndex = (w, c) => w.includes(c) ? [w.indexOf(c),w.lastIndexOf(c)] : undefined;

// (() => {
//   console.log(charIndex("hello", "l"), [2, 3]);
//   console.log(charIndex("circumlocution", "r"), [2, 2]);
//   console.log(charIndex("circumlocution", "i"), [1, 11]);
//   console.log(charIndex("circumlocution", "c"), [0, 8]);
//   console.log(charIndex("happy", "h"), [0, 0]);
//   console.log(charIndex("happy", "p"), [2, 3]);
//   console.log(charIndex("happy", "e"), undefined);
// })();

// ///----5
// //Create a function that returns true if a string is empty and false otherwise.
// const isEmpty = s => (s === "" ? true : false);

// (() => {
//   console.log(isEmpty(""), true);
//   console.log(isEmpty(" "), false);
//   console.log(isEmpty("            "), false);
//   console.log(isEmpty("38215"), false);
//   console.log(isEmpty("afjabsdf"), false);
//   console.log(isEmpty("!?@&"), false);
// })();

// // ----1
// // return an arrow function

// const helloName = name => `Hello ${name}`;

// console.log(helloName("Alex"));

// // -----2 ------NOT FINISHED
// //Create a function takes all even-indexed characters and odd-indexed
// //characters from a string and concatenates them together.

// const indexShuffle = str => {
//   return [...str].filter(x => x % 2 === 0);
// };

// (() => {
//   console.log(indexShuffle("abcdef"), "acebdf");
//   console.log(indexShuffle("abababab"), "aaaabbbb");
//   console.log(indexShuffle("it was a beautiful day"), "i a  euiu atwsabatfldy");
//   console.log(indexShuffle("maybe"), "myeab");
//   console.log(indexShuffle("holiday"), "hldyoia");
// })();

// ------2

// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".

// greetPeople(["Joe"]) ➞ "Hello Joe"

// greetPeople(["Angela", "Joe"]) ➞ "Hello Angela, Hello Joe"

// greetPeople(["Frank", "Angela", "Joe"]) ➞ "Hello Frank, Hello Angela, Hello Joe"

// const nextEdge = (a, b) => a + b - 1;

// console.log(nextEdge(8, 10)); //➞ 17

// console.log(nextEdge(5, 7)); //➞ 11

// console.log(nextEdge(9, 2)); //➞ 10

//
// function kToK(n, k) {

// }

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// map and filter returns a new array
const mappedArr = arr.map(num => {
  return num + 10;
});

console.log(mappedArr); //[ 11, 12, 13, 14, 15, 16, 17, 18 ]

const filteredArr = arr.filter(num => {
  if (num % 2 === 0) {
    return num;
  }
});
console.log(filteredArr); //[ 2, 4, 6, 8 ]

const mixedArr = [2, 3, 4, 35, 3, 54, 234];
const sortedArr = mixedArr.sort((a, b) => a - b);
console.log(sortedArr); //[ 2, 3, 3, 4, 35, 54, 234 ]

const gayOrStraight = [
  {
    name: 'Alex',
    isPresident: false
  },
  {
    name: 'Trump',
    isPresident: true
  },
  {
    name: 'Irina',
    isPresident: false
  }
];

const result = gayOrStraight.reduce(
  (final, person) => {
    if (person.isPresident === true) {
      final.presidents++;
    } else {
      final.not++;
    }
    return final;
  },
  {
    presidents: 0,
    not: 0
  }
);

console.log(result);
