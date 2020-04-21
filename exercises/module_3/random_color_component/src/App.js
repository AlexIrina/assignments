import React, { Component } from 'react';
import HeaderImage from './images/carandash.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: '',
    };
    this.refreshPage = this.refreshPage.bind(this);
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

  refreshPage() {
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
    const matchColor = {
      color: this.state.color,
    };
    return (
      <div className='parent' style={{ backgroundColor: newColor }}>
        <div className='child'>
          <img src={HeaderImage} alt='pic' />
          <p style={matchColor}>{this.state.color}</p>
          <button onClick={this.refreshPage}>Change Color</button>
        </div>
      </div>
    );
  }
}

export default App;
