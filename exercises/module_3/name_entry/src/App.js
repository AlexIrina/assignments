import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: ''
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

  // working here
  // When the user clicks the button, the value of the input box should be added to a running list of names that have been previous entered. (Hint: you'll need to set state and map over an array to do this).
  handleSubmit = event => {
    const { type, value } = event.target;
    this.setState({
      [type]: value
    });
  };

  render() {
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
          <ol className='usersNames'></ol>
          <button className='submitBtn'>Submit</button>
        </form>
      </main>
    );
  }
}
export default App;
