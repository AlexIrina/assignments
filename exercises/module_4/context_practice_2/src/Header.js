import React from 'react';
import { Consumer } from './userContext';

function Header() {
  return (
    <header>
      <Consumer>{(username) => <p>Welcome, {username}!</p>}</Consumer>
    </header>
  );
}

export default Header;
