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
  }

  handleChange = event => {
    this.setState({});
  };

  render() {
    return (
      <main className='App'>
        <form>
          <h1>List of Names</h1>
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
          <ol className='usersNames'>
            <li></li>
            <br />
            <li></li>
            <br />
            <li></li>
            <br />
            <li></li>
            <br />
            <li></li>
            <br />
            <li></li>
          </ol>
          <button className='submitBtn'>Submit</button>
        </form>
      </main>
    );
  }
}
export default App;
