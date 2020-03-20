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
    console.log('small time dj');
    this.setState(prevState => {
      return {
        colors: prevState.colors.map(color => {
          if (color === 'white') {
            return 'black';
          } else if (color === 'black') {
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
    console.log(`party dj test`);
  }

  render() {
    const mappedSquares = this.state.colors.map(color => (
      <Square color={color} />
    ));

    return (
      <div id='container'>
        <h1>DJ React </h1>

        <div className='box-container'>{mappedSquares}</div>

        <div id='btn-container'>
          <button className='small-time' onClick={this.smallTimeDj}>
            Small Time Dj
          </button>
          <button className='party-dj' onClick={this.partyDj}>
            Party Dj
          </button>
        </div>
      </div>
    );
  }
}

export default App;
