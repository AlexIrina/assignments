import React, { Component } from 'react';

class NewJSFeatures extends Component {
  state = {
    count: 0,
    greeting: 'Hi',
    age: 23,
  };

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className='counter'>
        <h1>{count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default NewJSFeatures;
