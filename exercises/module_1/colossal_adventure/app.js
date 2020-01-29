const readline = require('readline-sync');

console.log(`Hello fellow traveler! Welcome to the Colossal Adventure!`);
const userName = readline.question(`What is your name? `);
console.log(`Nice to meet you ${userName}.`);

// player
let player = {
  name: userName,
  health: 100
};

function pause(milliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + milliseconds >= new Date().getTime()) {}
}

// enemies
let enemies = [
  {
    health: 100,
    name: `FRIEZA`
  },
  {
    health: 100,
    name: `CELL`
  },
  {
    health: 100,
    name: `MAJIN BUU`
  },
  {
    health: 100,
    name: `RADITZ`
  }
];
// weapons
let weapons = [`KAMEHAMEHA`, `GALICK GUN`, `SPIRIT BOMB`, `DEATH BEAM`];
let progress = 0;

let playerOptions = ['walk', 'fight', 'run away'],
  index = readline.keyInSelect(playerOptions, 'Which option do you choose');

console.log(`Ok, you chose to ${playerOptions[index]} `);

switch (playerOptions[index]) {
  case 'walk':
    walk();
  case 'fight':
    console.log('you have chosen to fight');
    enemyAttack(enemies);
  case 'run away':
    runAway();
  default:
    process.exit(0);
}

// random number
function getRandomIntMinMax(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function walk() {
  let attackOrNot = Math.random() * 10;
  if (Math.ceil(attackOrNot) * 10 <= (1 / 4) * 100) {
    enemyAttack();
  } else {
    console.log('you have not been attacked, for now');
    progress += 20;
  }
}

function enemyAttack() {
  let enemy = enemies[parseInt(getRandomIntMinMax(1, 4))];

  console.log(`The ${enemy['name']} is attacking you.`);

  pause(4000);

  let damageDealt = getRandomIntMinMax(1, 100);
  player.health -= damageDealt;
  console.log('Player health is ', player.health);

  if (player.health > 1) {
    console.log('you have survived');

    return playerAttacks(enemy);
  }
  if (player.health < 1) {
    console.log('you have died');
    process.exit(0);
  }
}

function playerAttacks(enemy) {
  console.log('now its your turn to attack back');
  let weapon = weapons[parseInt(getRandomIntMinMax(1, 4))];
  console.log('your weapon is', weapon);

  let damage = getRandomIntMinMax(1, 100);
  enemy['health'] -= damage;

  console.log('health', enemy['health']);
}

function runAway() {
  console.log('you have chosen to run away, will you escape');
  let escapeOrNot = Math.random() * 10;
  if (Math.ceil(escapeOrNot) * 10 <= (0 / 4) * 100) {
    console.log('you have escaped');
    player.health += parseInt(getRandomIntMinMax(20, 40));
    console.log('your health is ', player.health);
  } else {
    console.log('you have not escaped, now you must fight the wild animal');
    enemyAttack();
  }
}

// // can be changed if enemy appears
// let wildEnemy = false;

// // walking function
// function walk() {
//   // Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
//   // need to write if statements here
// }
// // get random number from 0 to 3
