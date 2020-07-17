import React from 'react';
import image from '../images/test.jpg';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className='main-container'>
      <div className='intro'>
        <div className='left'>
          <h1>
            Hi,
            <br />
            Im Alex,
            <br />
            Web Developer.
          </h1>
          <p>HTML / CSS / JS / React</p>
          <button className='contact-btn'>
            <Link to='/contact'>Contact Me </Link>
          </button>
        </div>
        <img src={image} alt='me' />
      </div>
    </div>
  );
};

export default Main;
