let intervalID;

let message = '';

class Player {
  constructor(name, totalCoins, status, hasStar, gameActive) {
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
    this.gameActive = gameActive;
  }

  setName() {
    this.name = namePicked;
  }

  gotHit() {
    if (this.hasStar) {
      message = `You just got hit! But you're protected by your star`;
      this.hasStar = false;
    } else {
      message = `You got hit!`;
      if (this.status === 'Powered Up') {
        this.status = 'Big';
      } else if (this.status === 'Big') {
        this.status = 'Small';
      } else if (this.status === 'Small') {
        this.status = 'Dead';
        message = `Game over! ${this.name} died.`;
        this.gameActive = false;
      }
    }
  }
  gotPowerup() {
    message = `You found a Star!`;
    if (this.hasStar === true) {
    } else if (this.status === 'Small') {
      this.status = 'Big';
    } else if (this.status === 'Big') {
      this.status = 'Powered Up';
      message = `Congrats! You found a star!`;
      this.hasStar = true;
    }
  }

  addCoin() {
    message = `You found a coin!`;
    this.totalCoins += 1;
  }
  print(str = ``) {
    if (str !== ``) {
      console.log(message);
    }
    console.log(
      `Name: ${this.name} /n Total Coins: ${this.totalCoins} /n Status: ${this.status} /n  `
    );
    if (this.hasStar) {
      console.log(`You have a star`);
    }
    console.log(`/n`);
  }
}

// create  a start game function
const startGame = () => {
  const playerPicker = Math.random(Math.floor() * 3);

  if (playerPicker === 1) {
    myPlayer.setName('Luigi');
  }
  message = `The game has started`;
  gameLoop();
};

const gameLoop = () => {
  intervalID = setInterval(randomRange, 2000);
};

const randomRange = () => {
  if (myPlayer.gameActive === true) {
    myPlayer.print(message);

    const random = Math.random(Math.floor() * 3);

    if (random === 0) {
      myPlayer.gotHit();
    }
    if (random === 1) {
      myPlayer.gotPowerup();
    }
    if (random === 2) {
      myPlayer.gotAdd();
    } else {
      myPlayer.print(`Your final score is ${this.totalCoins}`);
      clearInterval(intervalID);
    }
  }
};

const myPlayer = new Player(`Mario`, 0, `Big`, false, true);
