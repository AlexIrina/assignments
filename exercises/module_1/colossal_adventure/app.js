const readline = require('readline-sync');
const userName = readline.question(
  `Welcome to the DBZ World Tournament. Brave hero, what is your name? `
);
console.log(
  `Greetings ${userName}!! You have chosen to test your skills against the most powerful opponents from the Dragon Ball Z Universe!`
);

// players info
let player = {
  name: userName,
  health: 100,
  weapons: [`KAMEHAMEHA`, `GALICK GUN`, `SPIRIT BOMB`, `DEATH BEAM`],
  acquiredItems: []
};

let enemies = [
  {
    health: 100,
    name: `FRIEZA`,
    specialItem: `Imprisonment Ball`
  },
  {
    health: 100,
    name: `CELL`,
    specialItem: `Absorption`
  },
  {
    health: 100,
    name: `MAJIN BUU`,
    specialItem: `Ki Blast`
  },
  {
    health: 100,
    name: `RADITZ`,
    specialItem: `Chou Makouhou`
  }
];

function pauseGame(milliseconds) {
  let currentTime = new Date().getTime();
  while (currentTime + milliseconds >= new Date().getTime()) {}
}

// gets random number
function getRandomIntMinMax(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// game starts below

// while the player is alive run this while loop
while (player.health > 0) {
  // 3 main options for hero to decide on
  // Choose to walk or check stats
  // if walk, 50% of contact with enemy (Start fight sequence)
  //Start a fight loop, continues until you or the enemy dies
  //Player chooses to fight, or run
  //If fight, then chance of hit, damages enemy
  //Immediately, enemy has chance to hit, damages you
  // if enemy dies, then restart the while loop

  let playerOptions = ['walk', `check inventory`];
  const index = readline.keyInSelect(
    playerOptions,
    'You must choose one of the following? '
  );
  console.log(`You have chosen to ${playerOptions[index]} `);

  // switch
  switch (playerOptions[index]) {
    case 'walk':
      walk();
      break;
    case 'fight':
      enemyAttack(enemies);
      break;
    case 'fly away':
      runAway();
      break;
    default:
      process.exit(0);
  }
}

function walk() {
  let attackOrNot = Math.random() * 10;
  if (Math.ceil(attackOrNot) * 10 <= (1 / 4) * 100) {
    enemyAttack();
  } else {
    console.log(
      `You must be very lucky. The enemy is not interested in fighting you yet.`
    );
  }
}

function enemyAttack() {
  let enemy = enemies[parseInt(getRandomIntMinMax(1, 4))];

  console.log(`${enemy['name']} is attacking you.`);
  pauseGame(3000);
  console.log(`${userName} Do you want to run away or fight back?`);

  // major changes

  let fightOrFlight = ['fight', `fly away`, `check inventory`];
  const index = readline.keyInSelect(
    fightOrFlight,
    'You must choose one of the following? '
  );
  console.log(`You have chosen to ${fightOrFlight[index]} `);

  while (enemy.health > 0) {
    console.log('while');
    let damageDealt = getRandomIntMinMax(1, 25);
    player.health -= damageDealt;
    console.log(`Your health is ${player.health}`);

    if (player.health > 1) {
      console.log(`you have survived!`);
      playerAttacks(enemy);
    }
    if (player.health < 1) {
      console.log('You died. GAME OVER!!');
      process.exit(0);
    }
  }
}

function playerAttacks(enemy) {
  console.log(`Now its your turn to attack back!!`);
  let weapon = player.weapons[getRandomIntMinMax(1, 4)];
  console.log('your weapon is...', weapon);

  let damage = getRandomIntMinMax(1, 100);
  enemy['health'] -= damage;

  console.log(`Enemies health is ${enemy['health']}`);
}

function runAway() {
  console.log(`You have chosen to fly away, will you escape??`);
  let escapeOrNot = Math.random() * 10;
  if (Math.ceil(escapeOrNot) * 10 <= (0 / 4) * 100) {
    console.log('you have escaped');
    player.health += parseInt(getRandomIntMinMax(20, 40));
    console.log('your health is ', player.health);
  } else {
    console.log(`You have not escaped. You must battle the enemy opponent.`);
    enemyAttack();
  }
}

// create a choice for the player to choose another option if he survives the attack
// my hero needs to damage the enemy until the enemy dies
// special item needs to be added to the inventory when the enemy dies
// add a chance that the user will escape when he chooses to escape
// When user clicks 0 to cancel it should add a message that tells the user that you cannot escape this Tournament. And gives the user the options again
