import React from 'react';
import instagram from '../img/instagram.svg';
import snapchat from '../img/snapchat-ghost.svg';
import airbnb from '../img/airbnb.svg';
import styled from 'styled-components';

const Footer = () => {
  return (
    <footer>
      <div className='social-links'>
        <a href='/' className='social-link' area-label=''>
          <Image src={snapchat} alt='' className='social-image' />
        </a>
        <a href='/' className='social-link' area-label=''>
          <Image src={instagram} alt='' className='social-image' />
        </a>
        <a href='/' className='social-link' area-label=''>
          <Image src={airbnb} alt='' className='social-image' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

const Image = styled.img`
  /* so images stay on the page */
  max-width: 100%;
`;
