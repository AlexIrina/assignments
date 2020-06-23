import React from 'react';
import Nav from './Nav';
import logo from '../images/toolbox.png';

const Header = () => {
  return (
    <div className='top-header'>
      <header>
        <img className='logo' alt='' src={logo} />
        <Nav />
      </header>
    </div>
  );
};

export default Header;
