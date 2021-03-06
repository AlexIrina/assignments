import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div>2020 Copyright by Alex George.</div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>|</li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>|</li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
