import React from 'react';
import image from '../images/test.jpg';
const Main = () => {
  return (
    <div className='main-container'>
      <div className='intro'>
        <h1>
          Hi,
          <br />
          Im Alex,
          <br />
          Web Developer.
        </h1>
        <p>HTML / CSS / JS / React</p>

        <button className='contact-btn'>Contact Me</button>
        <img src={image} alt='me' />
      </div>
    </div>
  );
};

export default Main;
