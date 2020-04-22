import React from 'react';
import Navbar from './Navbar';
const Header = () => {
  return (
    <div className='header-container'>
      <Navbar />
      <div className='site-heading'>
        <h1>Clean Blog</h1>
        <span className='subheading'>A Blog Theme by Start Bootstrap</span>
      </div>
    </div>
  );
};

export default Header;
