import React from 'react';
import UserContext from './userContext';

export default function Header() {
  return (
    <header>
      <UserContext.Consumer>
        {(username) => <p>Welcome, {username}!</p>}
      </UserContext.Consumer>
    </header>
  );
}
