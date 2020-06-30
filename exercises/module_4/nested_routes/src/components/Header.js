import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/profile'>
          <li>Profile</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
