import React from 'react';
import image from '../images/test.jpg';
const Main = () => {
  return (
    <div className='main-container'>
      <h1>
        Hi,
        <br />
        Im Alex,
        <br />
        Web Developer.
      </h1>
      <p>HTML / CSS / JS / React</p>
      <img src={image} alt='me' />
      <br />
      <button>Contact Me</button>
    </div>
  );
};

export default Main;
