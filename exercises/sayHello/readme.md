Tasks Level One

call the function
change this function expression to a function declaration

Tasks Level Two

Give the function a name parameter
Pass the function call a string (preferably a name) as an argument.
Return a cool string, like: "Hello Fred!"!

Tasks Level Three

Give the function a age parameter
Pass the function call a string (preferably a age) as an argument.
Return a cool string, like: "Hello Fred, how do you like being 27?"

var name = "Alex";
var age = "31";

ORIGINAL function expression:
var sayHello = function(){
console.log("hello class")
}

CHANGED to a function declaration with
added name parameter
added age parameter

2 & 3
function sayHello2(name, age) {
return "Hello " + name + "," + "how do you like being " + age + "?";
}
console.log(sayHello2("Alex", 31));

OR es6 way

const sayHello3 = (name = "Alex", age = 31) =>
`Hello ${name},how do you like being ${age}?`;

console.log(sayHello3());
