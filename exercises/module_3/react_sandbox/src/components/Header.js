import React from 'react';
import logo from '../logo.svg';

function Header() {
  const userName = 'Alex';

  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='Hello' />
      <p>You're going to be an awesome engineer, {userName}! </p>
    </header>
  );
}

export default Header;
