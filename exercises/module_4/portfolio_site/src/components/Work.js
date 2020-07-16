import React from 'react';
import testImg from '../images/test2.jpg';
const Work = () => {
  return (
    <div className='work-section'>
      <h1>Work</h1>
      <div className='work-btns-container'>
        <button>Web Design</button>
        <button>??? Projects</button>
        <button>React Projects</button>
      </div>
      <div className='image-container'>
        <img src={testImg} alt='test' />
        <img src={testImg} alt='test' />
        <img src={testImg} alt='test' />
        <img src={testImg} alt='test' />
        <img src={testImg} alt='test' />
        <img src={testImg} alt='test' />
      </div>
    </div>
  );
};

export default Work;
