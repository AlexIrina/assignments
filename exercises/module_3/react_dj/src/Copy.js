import React from 'react';
import Square from './components/Square';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ['white', 'white', 'white', 'white']
    };
    this.smallTimeDj = this.smallTimeDj.bind(this);
  }

  smallTimeDj() {
    console.log('small time dj');
    this.setState(prevState => {
      return {
        colors: prevState.colors.map(color => {
          if (color === 'white') {
            return 'black';
          } else if (color === 'black') {
            return 'white';
          } else {
            return color;
          }
        })
      };
    });
  }

  render() {
    return (
      <div id='container'>
        <h1>DJ React </h1>

        <div>
          <Square color={this.state.colors[0]} />
        </div>

        <div>
          <Square color={this.state.colors[1]} />
        </div>

        <div>
          <Square color={this.state.colors[2]} />
        </div>

        <div>
          <Square color={this.state.colors[3]} />
        </div>

        <div id='btn-container'>
          <button onClick={this.smallTimeDj}>Click me</button>
        </div>
      </div>
    );
  }
}

export default App;
