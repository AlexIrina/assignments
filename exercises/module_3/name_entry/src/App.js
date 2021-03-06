/*jshint esversion: 6 */
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      enteredNames: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName } = this.state;

    this.setState(prevState => {
      return {
        firstName: '',
        lastName: '',
        enteredNames: [...prevState.enteredNames, { firstName, lastName }]
      };
    });
  };

  render() {
    const names = this.state.enteredNames.map((name, i) => {
      return (
        <li key={i}>
          {name.firstName} {name.lastName}
        </li>
      );
    });
    return (
      <main className='App'>
        <form onSubmit={this.handleSubmit}>
          <h1>
            {this.state.firstName}
            {this.state.lastName}
          </h1>

          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <h2>Entered Information:</h2>
          <ol className='usersNames'>{names}</ol>
          <button className='submitBtn'>Submit</button>
        </form>
      </main>
    );
  }
}
export default App;
