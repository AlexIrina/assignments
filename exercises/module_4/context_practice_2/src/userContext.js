import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

class UserContextProvider extends Component {
  changeUserName = () => {};

  render() {
    return (
      <div>
        <Provider
          value={{
            changeUserName: this.changeUserName,
          }}
        >
          {this.props.children}
        </Provider>
      </div>
    );
  }
}

export { UserContextProvider, Consumer as UserContextConsumer };
