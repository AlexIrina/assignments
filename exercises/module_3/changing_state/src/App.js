import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    // bind methods to the App class for setState to work
    // anytime you use a method that uses setState i need to bind it with the class
    this.handleClick = this.handleClick.bind(this);
  }
  // methods
  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClick}>Change!</button>
        </header>
      </div>
    );
  }
}

export default App;
