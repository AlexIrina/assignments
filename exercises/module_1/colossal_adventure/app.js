const readlineSync = require('readline-sync');

//hero section
// ************************************************************************
//enemies
const hero = {
  name: '',
  health: 0,
};

let inventoryItems = [`KAMEHAMEHA`, `SPIRIT BOMB`, `DEATH BEAM`];

let enemies = [
  new Enemy('Frieza', 100),
  new Enemy('Cell', 100),
  new Enemy('Vageta', 100),
];

const remainingEnemies = enemies.map((enemy) => enemy.name);

startGame();

function characterCreation() {
  const character = Math.floor(Math.random() * 4);
  if (character === 0) {
    hero.health += 110;
    return `Saiyan`;
  } else if (character === 1) {
    hero.health += 120;
    return `Super Saiyan`;
  } else if (character === 2) {
    hero.health += 150;
    return `Super Saiyan God`;
  } else if (character === 3) {
    hero.health += 100;
    return `Human`;
  }
}

//enemy section
// ************************************************************************
function Enemy(name, health) {
  this.name = name;
  this.health = health;
}

//************************************************************************
//Games starting message
function startGame() {
  console.log(
    'Welcome to Earth! Earth is currently under attack by enemies from different parts of the universe. You must protect the people!'
  );

  // heros name
  hero.name = readlineSync.question('What name should we call you by? ');
  hero.health = 0;
  console.log(` Welcome ${
    hero.name
  }! You are a ${characterCreation()}. Select WALK to start saving our planet! 
  `);

  while (hero.health > 0) {
    walk();
  }
}

// walk, inventory, fight,
//*************************************************************************
function walk() {
  if (!enemies.length) winGame();
  const userChoice = readlineSync.keyInSelect(
    ['walk', 'inventory'],
    'what would you like to do?'
  );

  if (userChoice === 0) {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
      fight();
    } else {
      console.log(`Continue walking ${hero.name}. The enemies are near by.`);
    }
  } else if (userChoice === 1) {
    inventory();
    console.log(
      `${hero.name} Here's some special moves you can use against your enemies: ${inventoryItems}.
      Your health is ${hero.health}/100.
      Press WALK to continue saving the planet.
      `
    );
  } else {
    console.log(
      `There are still enemies causing havoc on Earth. You must keep fighting!`
    );
  }
}

function run() {
  const chanceOfEscape = Math.floor(Math.random() * 2);
  if (chanceOfEscape === 0) {
    console.log(`Great!! You've successfully escaped. Continue walking.`);
  } else {
    console.log(`The opponent didn't let you escape. You must fight back!`);
    enemyAttack(hero);
  }
}

function fight() {
  let indexOfEnemy = Math.floor(Math.random() * enemies.length);
  let currentEnemy = enemies[indexOfEnemy];
  console.log(
    `${enemies[indexOfEnemy].name} is challenging you to a fight!!!!`
  );
  const defenseChoice = readlineSync.keyInSelect(
    ['fight the enemy', 'run from the fight'],
    `Do you want to keep fighting or do you choose to run away?`
  );
  if (defenseChoice === 1) {
    run();
  } else {
    encounterLoop(currentEnemy, indexOfEnemy);
  }
}

function inventory() {
  return `${inventoryItems}`;
}

//****************************************************************************
function encounterLoop(currentEnemy, indexOfEnemy) {
  console.log(currentEnemy);
  while (currentEnemy.health > 0) {
    enemyAttack(hero);
    let continueFighting = readlineSync.keyInSelect(
      ['keep fighting', 'run away'],
      'What would you like to do now?'
    );
    if (continueFighting === 0) {
      console.log(
        `Great!! You decided to keep fighting. The people of Earth are cheering your name. Good luck ${hero.name} !!

        People on Earth: ${hero.name}, ${hero.name}, ${hero.name}!!
        `
      );
      attackEnemy(currentEnemy, indexOfEnemy);
    } else {
      console.log(`You decided to run away`);
      run();
    }
  }
}

function enemyAttack(hero) {
  function randomDeduction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive
  }
  hero.health = hero.health - randomDeduction(0, 25);
  console.log(
    `The enemy is attacking you. ${hero.name}, your health level is`,
    hero.health
  );
  if (hero.health <= 0) {
    console.log(
      `You fought well. But you didn't have what it takes to save the planet!`
    );
    die();
  }
}

function attackEnemy(currentEnemy, indexOfEnemy) {
  function randomDeduction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive
  }
  currentEnemy.health = currentEnemy.health - randomDeduction(0, 100);
  console.log(
    `${hero.name}, You are doing great! ${currentEnemy.name} is taking damage.`,
    currentEnemy
  );
  if (currentEnemy.health <= 0) {
    enemyDie(currentEnemy, indexOfEnemy);
  }
}

function die() {
  hero.health = 0;
  console.log(`Frieza, Cell, and Vageta took over the planet.
  
                    GAME OVER!!!!!'`);
  let playerOption = readlineSync.keyInSelect(
    ['play again', 'quit game'],
    `Would you like to try to save the planet again or you've had enough ?`
  );

  if (playerOption === 0) {
    inventoryItems = [`KAMEHAMEHA`, `SPIRIT BOMB`, `DEATH BEAM`];
    return startGame();
  } else {
    return endGame();
  }
}

function enemyDie(currentEnemy, indexOfEnemy, remainingEnemies) {
  currentEnemy.health = 0;
  const enemyItems = [
    `Super Sayan 1`,
    `Super Sayan 2`,
    `Super Sayan 3`,
    `Super Sayan 4`,
  ];

  inventoryItems.push(enemyItems[Math.floor(Math.random() * 4)]);
  hero.health = hero.health + 10;
  enemies.splice(indexOfEnemy, 1);

  console.log(`You only have ${enemies.length} enemies left to fight.`);

  console.log(`
    The enemy is dead and you are victorious. You've earned a new special ability. You can see it in your inventory. 

    Here is your inventory list: ${inventoryItems}

    You've also received a senzu bean from Gohan. Your health is restored 10 points.`);
}

function winGame() {
  console.log(`CONGRATS YOU SAVED THE PLANET!!!`);
  process.exit(0);
}
//****************************************************************************
function endGame() {
  console.log(`The game is OVER!!!! You lost!!`);
  process.exit(0);
}
