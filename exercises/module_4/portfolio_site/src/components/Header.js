import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className='nav-header'>
      <ul>
        <li id='title'>
          <Link to='/'>Alex</Link>
        </li>
        <li className='list'>
          <Link to='/about'>ABOUT ME</Link>
        </li>
        <li className='list'>
          <Link to='/skills'>SKILLS</Link>
        </li>
        <li className='list'>
          <Link to='/work'>MY WORK</Link>
        </li>
        <li className='list'>
          <Link to='/contact'>CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
