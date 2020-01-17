let readline = require('readline-sync');
let name = readline.question(`What is your name? `);



let options = [
  `\n 1) Put your hand in the hole`,
  `\n 2) Find the key`,
  `\n 3) Open the door`
];

let message = readline.question(
  `\n WELCOME ${name}!! \n \n Choose one of the following: ${options}`
);
