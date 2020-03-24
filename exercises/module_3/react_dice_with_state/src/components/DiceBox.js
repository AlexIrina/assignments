import React, { Component } from 'react';
import Die from './Die';

class DiceBox extends Component {
  constructor() {
    super();
    this.state = {
      cube1: this.randomNumber(),
      cube2: this.randomNumber(),
      cube3: this.randomNumber(),
      cube4: this.randomNumber(),
      cube5: this.randomNumber()
    };
    this.randomNumber = this.randomNumber.bind(this);
    this.rollDice = this.rollDice.bind(this);
  }

  randomNumber = () => {
    // randomly change the 5 numbers to a number between 1 - 6. + 1 != 0
    return Math.floor(Math.random() * 6 + 1);
  };

  rollDice = () => {
    this.setState({
      cube1: this.randomNumber(),
      cube2: this.randomNumber(),
      cube3: this.randomNumber(),
      cube4: this.randomNumber(),
      cube5: this.randomNumber()
    });
  };

  render() {
    return (
      <main className='App-main'>
        <Die num={this.state.cube1} />
        <Die num={this.state.cube2} />
        <Die num={this.state.cube3} />
        <Die num={this.state.cube4} />
        <Die num={this.state.cube5} />
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
