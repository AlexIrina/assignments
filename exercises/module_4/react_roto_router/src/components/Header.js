import React from 'react';
import Nav from './Nav';
const Header = () => {
  return (
    <div className='top-header'>
      <header>
        <span className='no-display'>Handyman Services</span>
        <Nav />
      </header>
    </div>
  );
};

export default Header;
