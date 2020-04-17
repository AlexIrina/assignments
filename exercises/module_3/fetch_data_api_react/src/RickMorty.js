import React, { Component } from 'react';

class RickMorty extends Component {
  constructor() {
    super();
    this.state = {
      // loading feature tells the user if its currently loading the data or not
      loading: false,
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
  // Example:       .then((data) => {    this.setState({ character: data, });
  // now render the characters name by doing {this.state.character.name}

  // use componentDidMount() to fetch data from an external API
  //so that this component can display one of the characters name from the starwars api
  componentDidMount() {
    // 1) changing state to TRUE. loading to true so the user can see the loading message
    this.setState({ loading: true });
    fetch('https://rickandmortyapi.com/api/character/1')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          // 4) set the state of loading back to false so that i can see the characters name
          loading: false,
          character: data,
        });
      });
  }

  render() {
    // 2) creating a variable to store the loading message if loading is false in the state
    //otherwise display the characters name

    const name = this.state.loading ? 'Loading...' : this.state.character.name;
    const image = this.state.character.image;
    const gender = this.state.character.gender;
    return (
      <div>
        {/*  3) text is displayed only if the ternary is done checking if the current state of my loading variable is true or not*/}
        <h1>Name: {name}</h1>
        <img src={image} alt='wait for it ...' />
        <h2>Gender: {gender}</h2>
      </div>
    );
  }
}

export default RickMorty;
