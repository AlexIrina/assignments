const readlineSync = require('readline-sync');
console.clear();
//hero
const hero = {
  name: '',
  health: 0,
  humanOrSayan: '',
};
let herosItems = [`KAMEHAMEHA`];
//enemy section
function Enemy(name, health, specialMove) {
  this.name = name;
  this.health = health;
  this.specialMove = specialMove;
}
let enemies = [
  new Enemy('Frieza', 110, `FINAL FLASH`),
  new Enemy('Cell', 120, `HUMAN EXTINCTION ATTACK`),
  new Enemy('Vageta', 130, `SPECIAL BEAM CANNON`),
];

const enemyNames = `${enemies[0].name}, ${enemies[1].name}, and ${enemies[2].name}`;

const startGame = () => {
  console.log(
    `Welcome to Earth! Earth is currently under attack by ${enemyNames}. You must protect the people!`
  );
  // heros name
  hero.name = readlineSync.question('What name should we call you by? ');
  createCharacter();
  console.log(` Welcome ${hero.name}! You are a ${hero.humanOrSayan}. Select WALK to start saving our planet!
  `);

  while (hero.health > 0) {
    walk();
  }
};

startGame();

function createCharacter() {
  const character = Math.floor(Math.random() * 4);
  if (character === 0) {
    hero.health += 110;
    hero.humanOrSayan = `Saiyan`;
  } else if (character === 1) {
    hero.health += 120;
    hero.humanOrSayan = `Super Saiyan`;
  } else if (character === 2) {
    hero.health += 150;
    hero.humanOrSayan = `Super Saiyan God`;
  } else if (character === 3) {
    hero.health += 100;
    hero.humanOrSayan = `Human`;
  }
}

// walk, inventory, fight,
function inventory() {
  console.log(
    `${hero.name} Here's some special moves you can use against your enemies: ${herosItems}.
        Your health is ${hero.health}/100.
        Press WALK to continue saving the planet.
        `
  );
}

function walk() {
  if (!enemies.length) winGame();
  const userChoice = readlineSync.keyInSelect(
    ['walk', 'inventory'],
    'what would you like to do?'
  );

  switch (userChoice) {
    case 0:
      const randomNumber = Math.floor(Math.random() * 3);
      randomNumber === 0
        ? fight()
        : console.log(
            `Continue walking ${hero.name}. The enemies are near by.`
          );
      return walk();
      break;
    case 1:
      inventory();
      return walk();
      break;
    default:
      console.log(
        `${enemyNames} are causing havoc on Earth. You must keep fighting!`
      );
      return walk();
  }
}
function fight() {
  let indexOfEnemy = Math.floor(Math.random() * enemies.length);
  console.log(
    `${enemies[indexOfEnemy].name} is challenging you to a fight!!!!`
  );
  const defenseChoice = readlineSync.keyInSelect(
    ['fight the enemy', 'run from the fight'],
    `Do you want to keep fighting or do you choose to run away?`
  );
  defenseChoice === 1
    ? run(enemies[indexOfEnemy])
    : encounterLoop(indexOfEnemy);
}
function run(enemy) {
  const chanceOfEscape = Math.floor(Math.random() * 2);
  chanceOfEscape === 0
    ? console.log(`Great!! You've successfully escaped. Continue walking.`)
    : console.log(`The enemy didn't let you escape. You must fight back!`);
  enemyAttack(hero, enemy);
}
function encounterLoop(indexOfEnemy) {
  while (enemies[indexOfEnemy].health > 0) {
    enemyAttack(hero, enemies[indexOfEnemy]);
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
      attackEnemy(indexOfEnemy);
    } else {
      console.log(`You decided to run away`);
      run(enemies[indexOfEnemy]);
    }
  }
}

function randomDeduction(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive
}

function enemyAttack(hero, enemy) {
  hero.health = hero.health - randomDeduction(0, 25);
  console.log(
    `The ${enemy.name} is attacking you. 
  -> ${hero.name}, your health level is`,
    hero.health
  );
  if (hero.health <= 0) {
    console.log(
      `You fought well. But you didn't have what it takes to save the planet!`
    );
    die();
  }
}
function attackEnemy(indexOfEnemy) {
  enemies[indexOfEnemy].health =
    enemies[indexOfEnemy].health - randomDeduction(0, 100);

  console.log(
    `${hero.name}, You are doing great! Enemy is taking damage.`,
    `\n ->  ${enemies[indexOfEnemy].name}s health is`,
    enemies[indexOfEnemy].health
  );
  if (enemies[indexOfEnemy].health <= 0) {
    enemyDie(indexOfEnemy);
  }
}

function die() {
  const enemiesLeft = enemies.reduce((acc, curr) => {
    return acc.concat(curr.name, ',');
  }, '');

  console.log(`${enemiesLeft} took over the planet.
                    GAME OVER!!!!!'`);
  let playerOption = readlineSync.keyInSelect(
    ['play again', 'quit game'],
    `Would you like to try to save the planet again or you've had enough ?`
  );
  if (playerOption === 0) {
    herosItems = [`KAMEHAMEHA`];
    return startGame();
  } else {
    return endGame();
  }
}
function enemyDie(indexOfEnemy) {
  enemies[indexOfEnemy].health = 0;
  herosItems.push(enemies[indexOfEnemy].specialMove);
  hero.health = hero.health + 10;
  enemies.splice(indexOfEnemy, 1);
  console.log(`
    The enemy is dead and you are victorious. You've earned a new special ability. You can see it in your inventory.
    Here is your inventory list: ${herosItems}
    You've also received a senzu bean from Gohan. Your health is restored 10 points.`);

  enemies.length > 1
    ? console.log(`You only have ${enemies.length} enemies left to fight.`)
    : enemies.length === 1
    ? console.log(`${enemies.length} enemy left to fight!! Don't give up!`)
    : console.log(`${enemyNames} are defeated!`);

  enemies.length === 0 ? winGame() : walk();
}
function winGame() {
  console.log(`CONGRATS YOU SAVED THE PLANET!!!`);
  process.exit(0);
}

function endGame() {
  console.log(`The game is OVER!!!! You lost!!`);
  process.exit(0);
}
