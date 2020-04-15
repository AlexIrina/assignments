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
      notes: '',
      // badges stored here
      badges: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  // Submit button
  submitForm(event) {
    event.preventDefault();
    const newBadge = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      placeOfBirth: this.state.placeOfBirth,
      favoriteFood: this.state.favoriteFood,
      email: this.state.email,
      phone: this.state.phone,
      notes: this.state.notes,
    };
    this.setState((prevState) => {
      return {
        badges: [...prevState.badges, newBadge],
      };
    });
  }

  render() {
    const mappedBadges = this.state.badges.map((badge, i) => {
      return (
        <div className='output' key={i}>
          <div className='badge'>
            <h3>Badge: </h3>
          </div>
          <div className='usersInfo'>
            <div className='left-items'>
              <p>
                Name:{badge.firstName} {badge.lastName}
              </p>
              <p>Place of Birth: {badge.placeOfBirth}</p>
              <p>Email: {badge.email}</p>
            </div>
            <div className='right-items'>
              <p>Phone: {badge.phone}</p>
              <p>Favorite Food: {badge.favoriteFood}</p>
            </div>
            <br />
            <div className='text-area'>
              <p>About Me:{badge.notes}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
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
              value={this.state.notes}
              name='notes'
              placeholder='Tell us about yourself'
              minLength='3'
              onChange={this.handleChange}
            />
            <br />
            <button>Submit</button>
          </div>
        </form>
        {mappedBadges}
      </div>
    );
  }
}

export default App;
