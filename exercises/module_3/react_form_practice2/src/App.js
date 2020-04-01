import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState(prevState => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked
            }
          };
        })
      : this.setState({
          [name]: value
        });
  }

  render() {
    return (
      <main className='App'>
        <form>
          <input
            // First Name
            name='firstName'
            type='text'
            placeholder='First Name'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            // Last Name
            name='lastName'
            type='text'
            placeholder='Last Name'
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            // Age
            name='age'
            type='number'
            placeholder='Age'
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />
          {/* /////////////////Male or Female///////////////////////// */}
          <label>
            <input
              // Gender Male
              type='radio'
              placeholder='gender'
              name='gender'
              value='male'
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            />{' '}
            Male
            <br />
            <input
              // Gender Female
              type='radio'
              placeholder='gender'
              name='gender'
              value='female'
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            />{' '}
            Female
          </label>
          <br />
          <select
            //                              Destination
            value={this.state.destination}
            name='destination'
            onChange={this.handleChange}
          >
            <option value=''>--Please Choose A Destination</option>
            <option value='russia'>Russia</option>
            <option value='thailand'>Thailand</option>
            <option value='japan'>Japan</option>
            <option value='india'>India</option>
          </select>{' '}
          <br />
          {/* //////////////Dietary restrictions */}
          <label>
            <input
              type='checkbox'
              name='isVegan'
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isVegan}
            />{' '}
            Vegan?
          </label>
          <br />
          <br />
          <label>
            <input
              type='checkbox'
              name='isKosher'
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isKosher}
            />{' '}
            Kosher?
          </label>
          <br />
          <br />
          <label>
            <input
              type='checkbox'
              name='isLactoseFree'
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isLactoseFree}
            />{' '}
            Lactose Free?
          </label>
          <br />
          <br />
          {/* button */}
          <button>Submit</button>
          <hr />
          {/* users info */}
          <div className='usersInfo'>
            <h1>Entered Information </h1>
            <h2>
              Your Name : {this.state.firstName} {this.state.lastName}{' '}
            </h2>

            <h2>Your Age: {this.state.age}</h2>
            <h2>Your Gender: {this.state.gender}</h2>
            <h2>Your Destination: {this.state.destination}</h2>
            <p>
              Your food restrictions are: Vegan:{' '}
              {this.state.dietaryRestrictions.isVegan ? 'Yes' : 'NO'}
              Kosher: {this.state.dietaryRestrictions.isKosher ? 'Yes' : 'NO'}
              Lactose Free:{' '}
              {this.state.dietaryRestrictions.isLactoseFree ? 'Yes' : 'NO'}
            </p>
          </div>
        </form>
      </main>
    );
  }
}

export default App;
