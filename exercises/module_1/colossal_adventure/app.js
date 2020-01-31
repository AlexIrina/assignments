const readline = require('readline-sync');

/////////////////Global variables////////////////////
// let gameOver = false

let player = {
  name: '',
  health: 100
};

let inventoryItems = [`KAMEHAMEHA`, `SPIRIT BOMB`, `DEATH BEAM `];

//////////////////Games functions /////////////////////

function characterCreation() {
  const character = Math.floor(Math.random() * 2);
  if (character === 0) {
    return `Sayan`;
  } else {
    return `Super Sayan`;
  }
}

function Enemy(name, health) {
  this.name = name;
  this.health = health;
}

function enemyCreation() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return new Enemy('Frieza', 100);
  } else if (randomNum === 1) {
    return new Enemy('Cell', 100);
  } else {
    return new Enemy('Vageta', 100);
  }
}

function walk() {
  const userChoice = readline.keyInSelect(
    ['walk', 'inventory'],
    `What would you like to do? `
  );
  if (userChoice === 0) {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
      fight();
    } else {
      //tell user they didn't run into an opponent
      //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
      console.log(
        `Continue walking ${player.name}. The enemies must be close by.`
      );
    }
  } else if (userChoice === 1) {
    //tell user what's in their inventory, and their health, and then tell them to push w to walk
    inventory();
    console.log(`
        Here are some special moves you can use against your enemies: ${inventoryItems}.
        Your health is: ${player.health}/100.
        Press walk to continue saving the planet`);
  } else {
    console.log(
      `${currentEnemy} is causing havoc on Earth. You musk keep fighting him!`
    );
  }
}

function run() {
  const escapeChance = Math.floor(Math.random() * 2);
  if (escapeChance === 0) {
    //tell user that they successfully got away and can continue walking
    //****THIS PART IS IMPORTANT. DO NOT CALL WALK()****
    console.log(`Great!! You've successfully escaped. Continue walking.`);
  } else {
    //tell user they were not able to run
    //****THIS PART IS IMPORTANT. DO NOT CALL fight() You could, however, call one of the attack functions****
    console.log(`The opponent didn't let you escape. You must fight back!`);
    enemyAttack(player);
  }
}

function fight() {
  let currentEnemy = enemyCreation();
  // console.log(currentEnemy) // shows enemy object here
  console.log(`${currentEnemy.name} is challenging you to a fight!!!!`);
  const defenseChoice = readline.keyInSelect(
    ['fight the enemy', 'run from the fight'],
    `Do you want to keep fighting or do you choose to run away?`
  );
  if (defenseChoice === 1) {
    run();
  } else {
    encounterLoop(currentEnemy);
  }
}

function encounterLoop(currentEnemy) {
  while (currentEnemy.health > 0 && player.health > 0) {
    enemyAttack(player);
    let continueFightChoice = readline.keyInSelect(
      ['keep fighting', 'run away'],
      `What would you like to do??`
    );
    if (continueFightChoice === 0) {
      console.log(
        `Great!! You decided to keep fighting. The people of Earth are cheering your name. Good luck ${player.name} !!

        People on Earth: ${player.name}, ${player.name}, ${player.name}!!
        `
      );
      attackEnemy(currentEnemy);
    } else {
      console.log(`Run for your life ${player.name}!!!`);
      run();
    }
  }
}
// delete current enemy
function enemyAttack(player) {
  function randomDeduction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10; //The maximum is inclusive and the minimum is inclusive
  }
  player.health = player.health - randomDeduction();
  console.log(`The enemy is attacking you, `, player);
  if (player.health <= 0) {
    console.log(
      `You fought well. But you didn't have what it takes to save the planet!`
    );
    die();
  }
}

function attackEnemy(currentEnemy) {
  function randomDeduction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (100 - 98 + 1)) + 98; //The maximum is inclusive and the minimum is inclusive
  }
  currentEnemy.health = currentEnemy.health - randomDeduction();
  console.log(
    `${player.name}, You are doing great! ${currentEnemy.name} is taking damage.`,
    currentEnemy
  );
  if (currentEnemy.health <= 0) {
    enemyDie();
  }
}

function die() {
  console.log('Frieza, Cell, and Vageta took over the planet. GAME OVER!!!!!');
  player.health = 0;
}

function enemyDie() {
  inventoryItems.push(`Super Sayan 2`);
  player.health = player.health + 10;
  console.log(`
    The enemy is dead and you are victorious. You've earned a new special ability. You can see it in your inventory. 
    Here is your inventory list: ${inventoryItems}
    You received a senzu bean from Gohan. Your health is restored 10 points.`);
}

function inventory() {
  return `${inventoryItems}`;
}

console.log(
  'Welcome to Earth! Earth is currently under attack by enemies from different parts of the universe. You must protect the people!'
);

player.name = readline.question(`What name should we call you by? `);

console.log(
  `Welcome ${
    player.name
  }! You are a ${characterCreation()}. Select walk to keep saving Earth. `
);
while (player.health > 0) {
  walk();
}
