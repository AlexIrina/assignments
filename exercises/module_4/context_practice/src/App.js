import React, { Component } from 'react';
import UserContext from './userContext';
import Header from './Header';
export default class App extends Component {
  static contextType = UserContext;
  render() {
    const userName = this.context;
    return (
      <div>
        <Header />
        <main>You have no notifications! {userName}</main>
      </div>
    );
  }
}
