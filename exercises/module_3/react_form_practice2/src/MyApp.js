import React from 'react';

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      isFriendly: true,
      favColor: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <form className='form-container'>
        <input
          type='text'
          value={this.state.firstName}
          name='firstName'
          placeholder='First Name'
          onChange={this.handleChange}
        />
        <br />
        <input
          type='text'
          value={this.state.lastName}
          name='lastName'
          placeholder='Last Name'
          onChange={this.handleChange}
        />
        <br />
        {/*   *  <textarea /> element */}
        <textarea value={'Some default value'} />
        <br />
        {/*  <input type="checkbox" />*/}
        <input
          type='checkbox'
          name='isFriendly'
          checked={this.state.isFriendly === true}
          onChange={this.handleChange}
        />{' '}
        Is friendly?
        <br />
        {/*  <input type="radio" />*/}
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
        <select
          name='favColor'
          value={this.state.favColor}
          onChange={this.handleChange}
        >
          <option value='red'>Red</option>
          <option value='blue'>Blue</option>
        </select>
        <h1>
          full name: {this.state.firstName} {this.state.lastName}
        </h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>your favorite color is {this.state.favColor} </h2>
        <button>Submit</button>
      </form>
    );
  }
}

export default MyApp;
