import React, { Component } from 'react';
import HeaderImage from './images/carandash.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: '',
    };
  }

  componentDidMount() {
    fetch('http://www.colr.org/json/color/random')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.colors[0]);
        this.setState({
          color: `#${data.colors[0].hex}`,
        });
      });
  }

  render() {
    const newColor = this.state.color;
    return (
      <div className='parent' style={{ backgroundColor: newColor }}>
        <div className='child'>
          <img src={HeaderImage} alt='pic' />
          <h1>Refresh page</h1>
          <p style={{ color: this.state.color }}>{this.state.color}</p>
        </div>
      </div>
    );
  }
}

export default App;
