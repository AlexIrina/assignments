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
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // Submit button
  submitForm(e) {
    e.preventDefault();
    console.log(e.target, 'form submitted');
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className='container'>
          <input
            className='name'
            type='text'
            name='firstName'
            placeholder='First Name'
            minLength='3'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            className='name'
            type='text'
            name='lastName'
            placeholder='Last Name'
            minLength='3'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            className='email'
            type='text'
            name='email'
            placeholder='Email'
            minLength='3'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            className='pob'
            type='text'
            name='placeOfBirth'
            placeholder='Place of Birth'
            minLength='3'
            value={this.state.placeOfBirth}
            onChange={this.handleChange}
          />
          <br />
          <input
            className='number'
            type='number'
            name='phone'
            placeholder='Phone'
            minLength='10'
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <input
            className='food'
            type='text'
            name='favoriteFood'
            placeholder='Favorite Food'
            minLength='3'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <textarea
            placeholder='Tell us about yourself'
            minLength='3'
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
