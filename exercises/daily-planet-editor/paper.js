/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/

// Written by Kent, Clark

let enemies = [
  "Lex",
  "Batman",
  "Darkseid",
  "Brainiac",
  "General Zod",
  "Doomsday"
];

const whoWins = (isThereKryptonite, enemyName) => {
  return !isThereKryptonite
    ? `Superman beats ${enemyName} of course`
    : `Depends on how quick Superman can get rid of the Kryptonite.
  ${enemyName}
   could possibly win this one.`;
};
console.log(whoWins(false, `Lex`));

for (let i = 0; i < enemies.length; i++) {
  let isThereKryptonite;
  i % 2 === 0 ? (isThereKryptonite = true) : (isThereKryptonite = false);
  console.log(whoWins(isThereKryptonite, enemies[i]));
}

// 1 is not at all attracted, 10 is "super" attracted...
const howAttractedIsLoisLaneToMe = () => Math.floor(Math.random() * 10 + 1);

console.log(howAttractedIsLoisLaneToMe());

let clarkKent = true;
let superMan = false;

while (clarkKent) {
  console.log("I'm just a nerdy columnist");
  let phoneBoothQuickChange = Math.random();
  if (phoneBoothQuickChange >= 0.5) {
    clarkKent = false;
    superman = true;
    console.log("Now I'm Superman!");
  }
}
