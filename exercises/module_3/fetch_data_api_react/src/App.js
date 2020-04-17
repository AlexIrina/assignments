import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      character: {},
    };
  }

  // fetch Promise based way to perform HTTP requests so i can get any kind of data that i need
  // https://swapi.co/     //starwars API

  // .then() resolves a promise
  // first .then() receives the data from an api
  //  via json() it turns the huge string of data into an js object that i can use
  // second .then() is the actual data that i want
  // console.log(data) to text it if it worked
  // to use the data you need to save it in state as an object
  // Example: character : {}
  // and in the last .then() i need to access that data
  // Example:       .then((data) => {  });

  componentDidMount() {
    fetch('https://swapi.co/api/people/1')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          character: data,
        });
      });
  }

  render() {
    return <div>{this.state.character}</div>;
  }
}

export default App;
