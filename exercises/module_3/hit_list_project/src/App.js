import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json'
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          characters: data,
        });
      });
  }

  render() {
    const characters = this.state.characters.map((character) => {
      return (
        <div className='child'>
          <img src={character.image} alt='character' />
          <div className='image'></div>
          <p style={{ color: 'white', background: 'blue' }}>
            Name: {character.name}
          </p>
        </div>
      );
    });

    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Don Corleone's Hit List</h1>
        <div className='parent'>{characters}</div>
      </>
    );
  }
}

export default App;
