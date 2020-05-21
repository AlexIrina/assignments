import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    uglyThings: [],
    imageURL: '',
    title: '',
    description: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const newUglyThing = {
        imageURL: prevState.imageURL,
        title: prevState.title,
        description: prevState.description,
      };
      return {
        uglyThings: [newUglyThing, ...prevState.uglyThings],
        imageURL: '',
        title: '',
        description: '',
      };
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };

// Must display a list of posted images with their associated titles and descriptions
// Must store the array of ugly thing objects in the Context store
