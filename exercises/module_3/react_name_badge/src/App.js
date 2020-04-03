import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      placeOfBirth: '',
      favoriteFood: [],
      email: '',
      phone: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event);
  }

  render() {
    return (
      <form>
        <div className='container'>
          <input
            className='name'
            type='text'
            name='firstName'
            placeholder='First Name'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            className='name'
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            className='email'
            type='text'
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            className='pob'
            type='text'
            name='placeOfBirth'
            placeholder='Place of Birth'
            value={this.state.placeOfBirth}
            onChange={this.handleChange}
          />
          <br />
          <input
            className='number'
            type='number'
            name='phone'
            placeholder='Phone'
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <input
            className='food'
            type='text'
            name='favoriteFood'
            placeholder='Favorite Food'
            value={this.state.value}
            onChange={this.handleChange}
          />

          <br />

          <textarea
            value={'Tell me about yourself'}
            onChange={this.handleChange}
          />

          <br />
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default App;
