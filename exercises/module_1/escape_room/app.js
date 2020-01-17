let readline = require('readline-sync');
let name = readline.question(`What is your name? `);

const message = `\n WELCOME ${name}!! \n \n Please choose one of the following:`;

let options = [`Put your hand in the hole`, `Find the key`, `Open the door`];
console.log(message);

let index = readline.keyInSelect(options);

console.log(`Okay ${name}, you chose to:`, options[index]);
