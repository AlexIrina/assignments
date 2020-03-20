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
  }

  smallTimeDj() {
    this.setState(prevState => {
      return {
        colors: prevState.colors.map(color => {
          if (color === 'white' || color === 'purple') {
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

  // Party DJ:
  // Add a second button. The second will turn the top half (both squares) of the grid purple.
  partyDj() {
    this.setState(prevState => {
      return {
        colors: ['purple', 'purple', prevState.colors[2], prevState.colors[3]]
      };
    });
  }

  //  Professional DJ:
  // Add two more buttons, for a total of four. These next two will change the colors of the bottom squares blue, but individually. One will be linked to the bottom left, and the other to the bottom right.

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
