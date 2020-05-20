import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: 'dark',
    isToggled: true,
  };

  toggleMenu = () => {
    this.setState((prevState) => {
      return {
        isToggled: !prevState.isToggled,
      };
    });
  };

  toggleTheme = (theme) => {
    this.setState((prevState) => {
      if (theme) {
        return { theme };
      }
      return {
        theme: prevState.theme === 'light' ? 'dark' : 'light',
      };
    });
  };

  render() {
    return (
      <div>
        <Provider
          value={{
            theme: this.state.theme,
            toggleTheme: this.toggleTheme,
            isToggled: this.state.isToggled,
            toggleMenu: this.toggleMenu,
          }}
        >
          {this.props.children}
        </Provider>
      </div>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
