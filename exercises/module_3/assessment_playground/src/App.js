import React, { Component } from 'react';
// import MyInfo from './components/MyInfo';
// import Header from './components/Header';
// import Joke from './components/Joke';
// import jokesData from './data/jokesData';
// import schoolProducts from './data/schoolProducts';
// import Product from './components/Product';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
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

        <div>
          <h1 style={{ color: !this.state.isLoggedIn && 'red' }}>
            You are currently logged {this.state.isLoggedIn ? 'in' : 'out'}
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
