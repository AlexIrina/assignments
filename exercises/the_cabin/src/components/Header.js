import React from 'react';
import logo from '../img/TB.svg';

const Header = () => {
  return (
    <header>
      <img className='logo' src={logo} alt='Companies Logo' />
      <nav className='nav'>
        <a href='#' className='nav__link'>
          Contact
        </a>
        <a href='#' className='nav__link'>
          About
        </a>
        <a href='#' className='nav__link'>
          Add guests
        </a>
        <a href='#' className='nav__link'>
          Add dates
        </a>
      </nav>
    </header>
  );
};

export default Header;
