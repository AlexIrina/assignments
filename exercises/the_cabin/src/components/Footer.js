import React from 'react';
import instagram from '../img/instagram.svg';
import snapchat from '../img/snapchat-ghost.svg';
import airbnb from '../img/airbnb.svg';

const Footer = () => {
  return (
    <footer>
      <div className='social-links'>
        <a href='/' className='social-link' area-label=''>
          <img src={snapchat} alt='' className='social-image' />
        </a>
        <a href='/' className='social-link' area-label=''>
          <img src={instagram} alt='' className='social-image' />
        </a>
        <a href='/' className='social-link' area-label=''>
          <img src={airbnb} alt='' className='social-image' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
