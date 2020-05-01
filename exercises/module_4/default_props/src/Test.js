import React, { Component } from 'react';
import Child from './components/Child';

class Test extends Component {
  state = {
    count: 0,
    greeting: 'Hi Alex',
  };

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    const styles = {
      border: '2px solid red',
      padding: '15px',
      textAlign: 'center',
      color: 'white',
      fontSize: '20px',
    };

    const { count, greeting } = this.state;
    return (
      <div style={styles}>
        <h1>{greeting}</h1>
        <h1>Current Count : {count}</h1>
        <button onClick={this.increment}> + </button>
        <button onClick={this.decrement}> - </button>

        <div>
          <Child text='Hi i am a child component' height='100' width='100' />
        </div>
      </div>
    );
  }
}

export default Test;
