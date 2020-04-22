// ES6 - ECMAScript6
​
// Const & Let
​
  // 1: Treated differently
    // const name = "steve"
​
    // name = 20
    // console.log(name)
​
    // for(let i = 0; i < 10; i++){
​
    // }
​
  // 2: Scoped
    // Scopes before const/let(es6)
      // Global
      // Local
      // Bracket/Block
  
​
  // function testingVarScope(){
  //   const name
  //   if(2 + 2 === 4){
  //     name = "steve"
  //   }
  //   console.log(name)
  // }
​
  // testingVarScope()
​
​
​
​
// function testingConstLetScope(){
//   if(2 + 2 === 4){
//     const name = "steve"
//     let age = 20
//   }
//   console.log("My name is " + name + ", and I am " + age + " years old!")
// }
​
// testingConstLetScope()
​
​
// closure
​
  // is created when a function returns another function
​
  // function func1(){
  //   let counter = 0
​
  //   return function(){
  //     counter++
  //     console.log(counter)
  //   }
​
  // }
​
  // const counter1 = func1()
  // const counter2 = func1()
  // counter1()
  // counter1()
  // counter2()
  // counter2()
  // counter2()
​
​
​
// Arrow functions
  // either expressions or anonymous functions
​
  // convert to arrow function
  // arrow has implicit return statement
​
​
  // Declaration
  // function sum(num1, num2){
  //   return num1 + num2
  // }
​
  // Pre - es6 function expression
  // const sum1 = function(num1, num2){
  //   return num1 + num2
  // }
​
  // es6 arrow function
  // const timesBy2 = num1 => num1 * 2
  
  // console.log(timesBy2(20))
​
  // // `this` 
  // const user = {
  //   name: "morty",
  //   speak: () => {
  //     console.log("Hi I am " + this.name)
  //   }  
  // }
​
  // user.speak()
​
  // const isEven = num => num % 2 === 0 
  //   ? "It is even!" 
  //   : "It is odd!" 
    
  // console.log(isEven(10))
​
  // dooooary
  // 2 * 2 === 5 && console.log("It is four!")
​
​
​
​
// Spread & Rest (...)
​
// Math.max(10, 20, 40, 38, 100, 40)
// Math.max(10, 20)
​
// REST
​
// function myMathMax(...nums){
//   console.log(arguments)
//   console.log(nums)
// }
​
// myMathMax(10, 20, 30 ,40)
// myMathMax(10, 20, 30 ,40, 50, 60)
​
// SPREAD = objects and arrays
​
// const colors1 = ["blue", "red"]
// const colors2 = ["pink", "green"]
​
// console.log([...colors1, ...colors2])
​
​
// const user = {
//   name: "Rick",
//   age: 20
// }
​
// const newUser = {
//   ...user,
//   hobby: "Mad Scientist/alcoholic"
// }
​
// console.log(user)
// console.log(newUser)
​
​
​
// String Templates
// let num1 = 20
// let num2 = 20
​
// console.log(`${num1} 
//       plus ${num2} 
//           equals ${10 + 20}`)
​
​
​
// Object and Array destructuring
​
// const user = {
//   username: "harry potter",
//   hobby: "spells and broom stuff",
//   age: 20,
//   owl: true
// }
​
// const { username, hobby } = user
​
// function userGreeting(user){
  // const {age, hobby, username} = user
//   console.log(`Hi I am ${username}, and my fav hobby is ${hobby}, and I am ${age}`)
// }
​
// userGreeting(user)
​
​
// const colors = ["blue", "green", "purple"]
// const [color1, color2, color3] = colors
​
// console.log(color2)
​
​
​
​
​
// Object Literals - building objects without repetition
​
// const name = "hermione"
// const age = 14
// const hobby = "spells"
​
// DRY
​
// const witch = {
//   name,
//   age,
//   hobby
// }
​
// console.log(witch)
​
// These don't work in Node
// Import/export (export default) = es6 modules
// module === file/
​
// require()  === import
// module.exports  === export
