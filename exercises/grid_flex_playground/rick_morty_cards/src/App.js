import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  // https://rickandmortyapi.com/api/character/
  // image /center
  // results.name   /center below the image
  // results.species   /bottom left 50%
  // results.origin   /bottom right 50%

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          // whats the end point to reach the data...name, species, location...
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
            <p className='char-name'>Name: {character.name}</p>
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
