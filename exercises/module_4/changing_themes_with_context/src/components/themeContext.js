import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: 'dark',
  };

  toggleTheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === 'light' ? 'dark' : 'light',
      };
    });
  };

  render() {
    return (
      <div>
        <Provider value={this.state.theme}>{this.props.children}</Provider>
      </div>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
