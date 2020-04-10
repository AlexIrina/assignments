import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: 0,
      gender: '',
      destination: '',
      restrictions: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {}

  handleChange() {}

  render() {
    return (
      <div>
        <form className='form'>
          {' '}
          <h1>Please complete all of the information below</h1>
          <hr />
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <label>How old are you{this.state.firstName}?</label>
          <br />
          <input
            type='number'
            name='age'
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />
          <label>Please select your gender</label>
          <br />
          <input
            type='radio'
            name='gender'
            value='male'
            checked={this.state.gender === 'male'}
            onChange={this.state.handleChange}
          />{' '}
          Male
          <br />
          <input
           type='radio' 
           name='gender' 
           value = 'female' 
           checked = {this.state.gender === 'female'} 
           onChange = {this.handleChange} 
           /> Female
          <br />
          <button onClick={this.handleChange}>Submit</button>
        </form>
        <div className='result-container'>
          <h1>
            Your Name is {this.state.firstName} {this.state.lastName}
          </h1>
          <p>You are {this.state.age} years old</p>
          <p>Your gender is {this.state.gender}</p>
          <p>You are flying to {this.state.destination}</p>
          <p>You have food allergies to</p>
        </div>
      </div>
    );
  }
}

export default App;
