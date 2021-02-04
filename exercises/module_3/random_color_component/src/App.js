import React, { Component } from 'react';
import HeaderImage from './images/carandash.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: '',
    };
    // this.refreshPage = this.refreshPage.bind(this);
  }

  componentDidMount() {
    fetch('http://www.colr.org/json/color/random')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.colors[0]);
        this.setState({
          color: `#${data.colors[0].hex}`
        })
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
    const colorInState = this.state.color;
    // console.log(colorInState);
    const matchColorInState = {
      color: colorInState,
    };

    return (
      <div className='parent' style={{ backgroundColor: colorInState }}>
        <div className='child'>
          <img src={HeaderImage} alt='pic' />
          <p style={matchColorInState}>{this.state.color}</p>
          <button onClick={this.refreshPage}>Change Color</button>
        </div>
      </div>
    );
  }
}

export default App;
