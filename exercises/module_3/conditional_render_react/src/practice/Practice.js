import React, { Component } from 'react';

class Practice extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // button click
  handleClick() {
    // change the state to true or false when button is clicked
    this.setState((prevState) => {
      return {
        // give me the opposite of what STATE use to be
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }

  render() {
    let buttonText = this.state.isLoggedIn ? 'Log Out' : 'Log In';
    let displayText = this.state.isLoggedIn ? 'Logged In' : 'Logged Out';

    return (
      <div className='card'>
        <h1>You are currently {displayText}</h1>
        <button
          style={{ color: this.state.isLoggedIn ? 'red' : 'green' }}
          onClick={this.handleClick}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default Practice;
