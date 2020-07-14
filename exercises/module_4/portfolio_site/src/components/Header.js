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
          <Link>About me</Link>
        </li>
        <li className='list'>
          <Link>Skills</Link>
        </li>
        <li className='list'>
          <Link>Work</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
