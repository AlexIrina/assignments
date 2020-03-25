import React, { Component } from 'react';
import Die from './Die';

class DiceBox extends Component {
  constructor() {
    super();
    this.state = {
      dice: [{ cube: 0 }, { cube: 0 }, { cube: 0 }, { cube: 0 }, { cube: 0 }]
    };
    this.randomNumber = this.randomNumber.bind(this);
    this.rollDice = this.rollDice.bind(this);
  }

  randomNumber = () => {
    // randomly change the 5 numbers to a number between 1 - 6. + 1 != 0
    return Math.floor(Math.random() * 6 + 1);
  };

  // rollDice = () => {
  //   this.forceUpdate();
  // };

  rollDice = () => {
    this.setState({
      dice: [{ cube: 0 }, { cube: 0 }, { cube: 0 }, { cube: 0 }, { cube: 0 }]
    });
  };

  render() {
    const dice = this.state.dice.map((die, i) => {
      return <Die key={i} num={this.randomNumber()} />;
    });

    return (
      <main className='App-main'>
        {dice}
        <div className='button-container'>
          <button className='button' onClick={this.rollDice}>
            Roll Dice
          </button>
        </div>
      </main>
    );
  }
}

export default DiceBox;
