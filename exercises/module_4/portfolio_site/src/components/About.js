import React from 'react';
import abstractImg from '../images/abstract.jpg';
const About = () => {
  return (
    <div className='about-section'>
      <h1>About</h1>
      <div className='about-paras'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          iure.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          iure.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          iure.
        </p>
      </div>
      <img src={abstractImg} alt='abstract' />
    </div>
  );
};

export default About;
