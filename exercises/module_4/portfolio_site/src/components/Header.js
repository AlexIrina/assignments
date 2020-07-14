import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className='nav-header'>
      <ul>
        <li id='title'>
          <Link>Alex</Link>
        </li>
        <li className='list'>
          <Link>ABOUT ME</Link>
        </li>
        <li className='list'>
          <Link>SKILLS</Link>
        </li>
        <li className='list'>
          <Link>MY WORK</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
