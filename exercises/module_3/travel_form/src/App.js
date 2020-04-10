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
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

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
          <label>Select your gender:</label>
          <br />
          <input
            type='radio'
            name='gender'
            value='male'
            checked={this.state.gender === 'male'}
            onChange={this.handleChange}
          />{' '}
          Male
          <br />
          <input
            type='radio'
            name='gender'
            value='female'
            checked={this.state.gender === 'female'}
            onChange={this.handleChange}
          />{' '}
          Female
          <br />
          {/* destination */}
          <label> Flying to:</label>
          <br />
          <select
            name='destination'
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option value='Moscow'>Moscow</option>
            <option value='New York'>New York</option>
            <option value='California'>California</option>
          </select>
          <br />
          {/* food restrictions */}
          <label>Are you allergic to anything?</label>
          <br />
          <label>
            <input
              type='checkbox'
              name='isVegan'
              checked={this.state.isVegan}
              onChange={this.handleChange}
            />
          </label>{' '}
          Vegan?
          <br />
          <label>
            <input
              type='checkbox'
              name='isKosher'
              checked={this.state.isKosher}
              onChange={this.handleChange}
            />
          </label>{' '}
          Kosher?
          <br />
          <label>
            <input
              type='checkbox'
              name='isLactoseFree'
              checked={this.state.isLactoseFree}
              onChange={this.handleChange}
            />
          </label>{' '}
          Lactose?
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
          <p>vegan:{this.state.isVegan ? 'yes' : 'no'}</p>
          <p> kosher: {this.state.isKosher ? 'yes' : 'no'}</p>
          <p>LactoseFree: {this.state.isLactoseFree ? 'yes' : 'no'}</p>
        </div>
      </div>
    );
  }
}

export default App;
