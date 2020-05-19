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
        <Provider
          value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
        >
          {this.props.children}
        </Provider>
      </div>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
