import React, { Component } from 'react';
import Square from './components/Square';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: ['white', 'white', 'white', 'white']
    };
    this.smallTimeDj = this.smallTimeDj.bind(this);
  }

  // Small time DJ:
  // You will have one button that will change all four squares either black or white. White if the first one is not white. Black if the first square is white.
  smallTimeDj() {
    this.setState(prevState => {
      return {
        colors: prevState.colors.map(color => {})
      };
    });
  }

  render() {
    return (
      <div>
        <Square color={this.state.colors[0]} />
        <Square color={this.state.colors[1]} />
        <Square color={this.state.colors[2]} />
        <Square color={this.state.colors[3]} />
      </div>
    );
  }
}

export default App;
