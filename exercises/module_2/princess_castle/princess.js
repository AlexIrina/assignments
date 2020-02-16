let intervalsID;
// message to the user
let message = '';

class Player {
  constructor(name, totalCoins, status, hasStar, gameActive) {
    this.name = name; // String: 'Mario' or 'Luigi'
    this.totalCoins = totalCoins; // number
    this.status = status; // Options are 'Powered Up', 'Big', 'Small' or 'Dead'
    this.hasStar = hasStar; // Boolean (Is a star active?)
    this.gameActive = gameActive; // boolean: 'true' by default, 'false' when 'dead'
  }

  // sets name to Mario or Luigi
  setName(namePicked) {
    this.name = namePicked;
  }
  // gotHit of type function - this is called whenever the player is hit by an enemy. gotHit() will set the status property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)
  gotHit() {
    if (this.hasStar) {
      message = `You got hit but your star protected you`;
      // star gets taken away
      this.hasStar = false;
    } else {
      message = `You got hit`;
      if (this.status === 'Powered Up') {
        this.status = `Big`;
      } else if (this.status === `Big`) {
        this.status = `Small`;
      } else if (this.status === 'Small') {
        this.status = 'Dead';
        this.gameActive = false;
      }
    }
  }

  // gotPowerup of type function - called when a powerup is received and sets the status accordingly. (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)

  gotPowerup() {
    message = `You got a Power Up!`;
    if (this.status === 'Small') {
      this.status = 'Big';
    } else if (this.status === 'Big') {
      this.status = 'Powered Up';
    } else if (this.status === 'Powered Up') {
      message = `Congrats! You got a star!`;
      this.hasStar = true;
    }
  }
  // addCoin of function - adds a coin to totalCoins
  addCoin() {
    message = `You found a coin!`;
    this.totalCoins += 1;
  }
  //   print of type function - prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:

  // Name: Luigi,
  // Status: Small, etc, etc

  print(str = '') {
    if (str !== '') {
      console.log(message);
    }
    console.log(`Name: ` + this.name);
    console.log(`Status: ` + this.status);
    console.log(`Total Coins ` + this.totalCoins);
    // has star?
    if (this.hasStar) {
      console.log(`You have a star!`);
    }
    console.log(`\n`);
  }
}

// Create a random range function that returns either 0, 1, or 2.
const startGame = () => {
  // randomly selects a player
  const playerPicker = Math.floor(Math.random() * 3);

  if (playerPicker === 1) {
    myPlayer.setName('Luigi');
  }
  message = `The game has started`;
  gameLoop();
};

const gameLoop = () => {
  // sets a 2 second delay
  intervalsID = setInterval(randomRange, 2000);
};

// Create a random range function that returns either 0, 1, or 2.
// If the value is 0 call the gotHit() function on the object.
// If the value is 1 call the gotPowerup() function on the object
// If the value is 2 call the addCoin() function
// Then call the print method on the object.
// Now put the random range function inside a setInterval() function that ends after gameActive === false

const randomRange = () => {
  if (myPlayer.gameActive) {
    myPlayer.print(message);

    const result = Math.floor(Math.random() * 3);

    if (result === 0) {
      myPlayer.gotHit();
    } else if (result === 1) {
      myPlayer.gotPowerup();
    } else {
      myPlayer.addCoin();
    }
  } else {
    // else the player is dead ..clears local storage
    myPlayer.print(`Your final score is:` + this.totalCoins);
    clearInterval(intervalsID);
  }
};

// My player defaults to Mario
const myPlayer = new Player('mario', 0, 'Big', false, true);

startGame();
