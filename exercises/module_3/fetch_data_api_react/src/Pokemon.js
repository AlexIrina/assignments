import React, { Component } from 'react';

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      pokemon: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://pokeapi.co/api/v2/pokemon/4')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          loading: false,
          pokemon: data,
        });
      });
  }

  render() {
    const name = this.state.loading ? 'Loading...' : this.state.pokemon.name;

    const image =
      this.state.pokemon.sprites && this.state.pokemon.sprites.front_default;
    const weight = this.state.pokemon.weight;

    return (
      <div className='container'>
        <div className='child'>
          <h1>Name: {name}</h1>
          <img src={image} alt='wait for it ...' />
          <h2>weight: {weight} </h2>
        </div>
      </div>
    );
  }
}

export default Pokemon;
