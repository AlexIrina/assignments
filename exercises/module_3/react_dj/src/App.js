import React from 'react';
import Square from './components/Square';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ['white', 'white', 'white', 'white']
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor = () => {
    this.setState(prevState => {
      return {
        colors: prevState.colors === 'white' ? 'black' : 'white'
      };
    });
  };

  render() {
    return (
      <div id='container'>
        <h1>DJ React </h1>
        <div>
          <Square color={this.state.colors[0]} />
          <Square color={this.state.colors[1]} />
          <Square color={this.state.colors[2]} />
          <Square color={this.state.colors[3]} />
        </div>
        <div id='btn-container'>
          <button>Click me</button>
        </div>
      </div>
    );
  }
}

export default App;
