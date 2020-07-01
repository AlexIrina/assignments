import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className='user-history'>
        <ul className='list'>
          <li>
            <Link to='/'>7/01/2020</Link>
          </li>
          <li>
            <Link to='/'>7/02/2020</Link>
          </li>
          <li>
            <Link to='/'>7/03/2020</Link>
          </li>
          <li>
            <Link to='/'>7/04/2020</Link>
          </li>
          <li>
            <Link to='/'>7/05/2020</Link>
          </li>
          <li>
            <Link to='/'>7/06/2020</Link>
          </li>
          <li>
            <Link to='/'>7/07/2020</Link>
          </li>
          <li>
            <Link to='/'>7/08/2020</Link>
          </li>
          <li>
            <Link to='/'>7/09/2020</Link>
          </li>
          <li>
            <Link to='/'>7/10/2020</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
