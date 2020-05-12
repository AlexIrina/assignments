import React from 'react';
import { UserContextConsumer } from './userContext';

const Header = () => {
  return (
    <header>
      <UserContextConsumer>
        {({ username }) => <p>Welcome, {username}</p>}
      </UserContextConsumer>
    </header>
  );
};

export default Header;
