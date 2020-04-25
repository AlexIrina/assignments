import React, { Component } from 'react';
// import MyInfo from './components/MyInfo';
// import Header from './components/Header';
// import Joke from './components/Joke';
// import jokesData from './data/jokesData';
// import schoolProducts from './data/schoolProducts';
// import Product from './components/Product';
import randomcolor from 'randomcolor';
class App extends Component {
  constructor() {
    super();
    this.state = {
      // isLoggedIn: true,
      // count: 0,
      count: 0,
      color: '',
    };
    // this.handleClick = this.handleClick.bind(this);
    this.increment = this.increment.bind(this);
  }

  // handleClick() {
  //   this.setState((prevState) => {
  //     return {
  //       count: prevState.count + 1,
  //     };
  //   });
  // }

  increment() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const newColor = randomcolor();
      this.setState({ color: newColor });
    }
  }

  render() {
    // const jokeComponent = jokesData.map((joke, key) => {
    //   return (
    //     <Joke key={key} question={joke.question} punchLine={joke.punchLine} />
    //   );
    // });

    // const productComponent = schoolProducts.map((item, key) => {
    //   return <Product key={key} product={item} />;
    // });

    return (
      <div className='grid-container'>
        {/* <div>{productComponent}</div> */}
        {/* <div className='jokes'>{jokeComponent}</div> */}

        {/* <div>
          <h1 style={{ color: !this.state.isLoggedIn && 'red' }}>
            You are currently logged {this.state.isLoggedIn ? 'in' : 'out'}
          </h1>
        </div> */}
        {/* <div className='counter'>
          <h2>{this.state.count}</h2>
          <button onClick={this.handleClick}>Change</button>
        </div> */}

        {/* increment count */}

        <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
        <button onClick={this.increment}>Increment!</button>
      </div>
    );
  }
}

export default App;
