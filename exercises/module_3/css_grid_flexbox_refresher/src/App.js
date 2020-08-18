import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          characters: data.results,
        });
      });
  }

  render() {
    const characters = this.state.characters.map((character, i) => {
      return (
        <div className='child' key={i}>
          <img src={character.image} alt='character' />

          <div>
            {' '}
            <p style={{ color: 'white', background: 'blue' }}>
              Name: {character.name}
            </p>
            <div className='character-info'>
              <p>Specie: {character.species}</p>
              <p>Origin: {character.origin.name}</p>
            </div>
          </div>

          <p></p>
        </div>
      );
    });

    return (
      <>
        <div className='grid-container'>{characters}</div>
      </>
    );
  }
}

export default App;
