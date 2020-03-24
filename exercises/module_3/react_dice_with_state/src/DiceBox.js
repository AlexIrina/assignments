import React, { Component } from 'react';
import Die from './components/Die';
import './App.css';

class DiceBox extends Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0
    };
  }

  handleClick() {
    // randomly change the 5 numbers to a number between 1 - 6.
    console.log(Math.floor(Math.random() * 6));
  }

  render() {
    return (
      <div className='App-container'>
        <main className='App-main'>
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />

          <div className='button-container'>
            <button className='button' onClick={this.handleClick}>
              Click Me
            </button>
          </div>
        </main>
      </div>
    );
  }
}

export default DiceBox;

/*
Create a class component called <DiceBox />
Write a method in that class that produces 5 random numbers between 1 and 6 and saves them in state.
Display the 5 random numbers in your <DiceBox /> JSX.
Provide a button the user can click on that will redo step 2 and present the new numbers to the user.
*/
