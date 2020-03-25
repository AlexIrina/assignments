import React from 'react';
import Square from './components/Square';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ['white', 'white', 'white', 'white']
    };
    this.smallTimeDj = this.smallTimeDj.bind(this);
    this.partyDj = this.partyDj.bind(this);
    this.proDjLeft = this.proDjLeft.bind(this);
    this.proDjRight = this.proDjRight.bind(this);
  }

  // Small time DJ:
  // You will have one button that will change all four squares either black or white.
  smallTimeDj() {
    this.setState(prevState => {
      return {
        colors: prevState.colors.map(color => {
          if (color === 'white' || color === 'purple' || color === 'blue') {
            return 'black';
          } else if (color === 'black' || color === 'purple') {
            return 'white';
          } else {
            return color;
          }
        })
      };
    });
  }
  
  // Party DJ:// Add a second button. The second will turn the top half (both squares) of the grid purple.
  partyDj() {
    this.setState(prevState => {
      return {
        colors: ['purple', 'purple', prevState.colors[2], prevState.colors[3]]
      };
    });
  }

  //  Professional DJ:
  // will change the colors of the bottom left square to blue,
  proDjLeft() {
    this.setState(prevState => {
      return {
        colors: [
          prevState.colors[0],
          prevState.colors[1],
          'blue',
          prevState.colors[3]
        ]
      };
    });
  }
  // will change the colors of the bottom right square to blue,
  proDjRight() {
    this.setState(prevState => {
      return {
        colors: [
          prevState.colors[0],
          prevState.colors[1],
          prevState.colors[2],
          'blue'
        ]
      };
    });
  }

  render() {
    const mappedSquares = this.state.colors.map((color, i) => (
      <Square key={i} color={color} />
    ));

    return (
      <div id='container'>
        <h1 className='main-heading'>React Dj</h1>

        <div className='box-container'>{mappedSquares}</div>

        <div id='btn-container'>
          <button className='small-time' onClick={this.smallTimeDj}>
            Small Time Dj
          </button>
          <button className='party-dj' onClick={this.partyDj}>
            Party Dj
          </button>
          <button className='pro-dj-left-btn' onClick={this.proDjLeft}>
            Professional Dj left
          </button>
          <button className='pro-dj-right-btn' onClick={this.proDjRight}>
            Professional Dj Right
          </button>
        </div>
      </div>
    );
  }
}

export default App;
// Small time DJ:
// You will have one button that will change all four squares either black or white. White if the first one is not white. Black if the first square is white.

// Party DJ:
// Add a second button. The second will turn the top half (both squares) of the grid purple.

// Professional DJ:
// Add two more buttons, for a total of four. These next two will change the colors of the bottom squares blue, but individually. One will be linked to the bottom left, and the other to the bottom right.

// Big Time DJ:
// Your next four buttons will each be linked to one of the squares. These buttons can have any affect on those squares that you wish.
