let readline = require(`readline-sync`);

// ask the name
let name = readline.question(
  '\n \n                                                  <-------- What is your name? ---------> \n'
);
console.log(
  `\n\n                                          <---------  Hello ${name}! Welcome to the Escape Room! ----------> \n`
);

let isDead = false;
let hasKey = false;

// User options
let options = [
  `\n Put hand in hole \n---------------------|`,
  `\n Find the key \n------------------|`,
  `\n Open door \n--------------|`
];

// Game loop continues until the game ends
while (!isDead) {
  let userChoice = readline.keyInSelect(
    options,
    ` \n                                <---------- Choose one of the following: ---------->\n \n \n`
  );
  if (userChoice === 0) {
    console.log(
      `  \n\n                 <------------  ${name}, your hand is stuck. You will be dead soon.  ------------>\n`
    );
    isDead = true;
    break;
  } else if (userChoice === 1) {
    console.log(
      `\n \n \n                              <---------- You found the key! Now you need to find the door  -----------> \n`
    );
    hasKey = true;
  } else if (userChoice === 2 && !hasKey) {
    console.log(
      `     \n                  <--------------- You found the door. It's locked! You don't have the key to open it  ----------> \n`
    );
  } else if (userChoice === 2 && hasKey) {
    console.log(
      `\n                          <---------- ${name} you've managed to escape. CONGRATULATIONS!! --------------> \n`
    );
    break;
  } else if (userChoice === -1) {
    console.log(
      `\n                                <------------ You are trapped in the Escape Room. Cancelling is not an option.  ---------> \n`
    );
  }
}
if (isDead) {
  console.log(
    `\n                             <--------- You're dead. GAME OVER!! Please Try again. --------->  \n`
  );
}
