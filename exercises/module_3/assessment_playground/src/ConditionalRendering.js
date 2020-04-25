import React, { Component } from 'react';
import Conditional from './components/Conditional';

class Example extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    // fake api call
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }
  render() {
    return (
      // example of a conditional
      <div>
        {this.state.isLoading ? <h1>Is Loading...</h1> : <Conditional />}
      </div>
    );
  }
}

export default Example;
