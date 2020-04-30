import React, { Component } from 'react';
import NewJSFeatures from './components/NewJSFeatures';
import Name from './components/Name';

class App extends Component {
  state = {
    firstName: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className='grid-container'>
        <Name name='name' handleChange={this.handleChange} />
        <NewJSFeatures />
      </div>
    );
  }
}

export default App;
