import React, { Component } from 'react';
import UserContext from './userContext';

export default class Header extends Component {
  static contextType = UserContext;
  render() {
    const userName = this.context;
    return (
      <div>
        <header>Welcome {userName} !</header>
      </div>
    );
  }
}
