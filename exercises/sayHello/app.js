let sayHello = function() {
  console.log("Hello Class");
};
sayHello();

// 1)
function sayHello1() {
  return "Hello Alex!";
}
console.log(sayHello1());

// 2 & 3
function sayHello2(name, age) {
  return "Hello " + name + "," + "how do you like being " + age + "?";
}
console.log(sayHello2("Alex", 31));

// OR es6 way

const sayHello3 = (name = "Alex", age = 31) =>
  `Hello ${name},how do you like being ${age}?`;

console.log(sayHello3());
