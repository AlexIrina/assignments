// const readlineSync = require("readline-sync");
// let name = readlineSync.question("What is your name? ");
// console.log(name);
const readlineSync = require("readline-sync");

const availableActions = [];
if (!blockExists()) {
  availableActions.push("jump");
}
if (isLarge(place)) {
  availableActions.push("run");
}
if (isNew(shoes)) {
  availableActions.push("kick");
}
if (isNearby(enemy)) {
  availableActions.push("punch");
}
let action = readlineSync.prompt({ limit: availableActions });

// const readlineSync = require("readline-sync");
// let animals = ["Lion", "Elephant", "Crocodile", "Giraffe", "Hippo"];
// let index = readlineSync.keyInSelect(animals, "Which animal?");
// console.log("Ok, " + animals[index] + " goes to your room.");

// Which animal? [1...5 / 0]: 2
// Ok, Elephant goes to your room.
// const readlineSync = require("readline-sync");

// // lets me work with the downloaded 'readline-sync' folder
// const readlineSync = require("readline-sync");
// // my array of names
// let names = [`alex`, `jason`, `jordan`, `smith`];
// // lets me sellect which name to output
// let index = readlineSync.keyInSelect(names, "what is your name?");
// console.log(`My name is ${names[index]}`);
