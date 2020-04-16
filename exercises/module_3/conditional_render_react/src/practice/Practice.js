import React, { Component } from 'react';

/*
Challenge:

3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class Practice extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Clicked');
  }

  render() {
    return (
      <div className='card'>
        <h1>You are currently logged {this.state.isLoggedIn}</h1>
        <button style={{ backgroundColor: 'green' }} onClick={this.handleClick}>
          Log In
        </button>
        <button style={{ backgroundColor: 'red' }} onClick={this.handleClick}>
          Log out
        </button>
      </div>
    );
  }
}

export default Practice;
