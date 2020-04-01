import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: null,
      gender: '',
      destination: '',
      restrictions: 'None'
    };
  }

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  render() {
    return (
      <main>
        <form>
          <input
            // First Name
            type='text'
            placeholder='First Name'
            value={this.state.firstName}
          />
          <br />
          <input
            // Last Name
            type='text'
            placeholder='Last Name'
            value={this.state.lastName}
          />
          <br />
          <input
            // Age
            type='number'
            placeholder='Age'
            value={this.state.age}
            name='age'
          />
          <br />
          <input
            // Gender Male
            type='radio'
            placeholder='gender'
            name='gender'
            value='male'
            // checked={(this.state.gender = 'male')}
          />{' '}
          Male
          <br />
          <input
            // Gender Female
            type='radio'
            placeholder='gender'
            name='gender'
            value='female'
            // checked={(this.state.gender = 'female')}
          />{' '}
          Female
          <br />
          <select
            value={this.state.destination}
            onChange={this.handleChange}
            name={this.state.destination}
          >
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
          <button>Submit</button>
          <div className='usersInfo'>
            <h1>Entered Information </h1>
            <h2>Your First Name : {this.state.firstName} </h2>
            <h2>Your Last Name: {this.state.lastName}</h2>
            <h2>Your Age: {this.state.age}</h2>
            <h2>Your Gender: {this.state.gender}</h2>
            <h2>Your Destination: {this.state.destination}</h2>
            <h2>Your food restrictions are: {this.state.restrictions}</h2>
          </div>
        </form>
      </main>
    );
  }
}

export default App;
