import React from 'react';
import Square from './components/Square';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'red'
    };
  }

  handleClick() {
    console.log('Clicked');
  }

  render() {
    return (
      <div>
        <Square onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
