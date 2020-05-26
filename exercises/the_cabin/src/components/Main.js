import React from 'react';
import cabin from '../img/cabin.jpg';
import inside1 from '../img/inside.jpg';
import bed from '../img/bed.jpg';

const Main = () => {
  return (
    <main>
      <h1 className='title'>The Cabin</h1>
      <p className='location'>Richmond,Montana</p>

      <img src={cabin} alt='' className='primary-image' />

      <div className='secondary-images'>
        <img src={inside1} alt='inside the cabin' className='secondary-image' />
        <img src={bed} alt='bed' className='secondary-image' />
      </div>
      <p className='description'>
        Nestled on 5 wooded acres, this artistically designed two story
        treehouse has all the luxury amenities. Within 30 minutes to Glacier
        National Park, minutes from Whitefish Mtn Ski Resort. Best of both
        worlds if you want to experience Montana nature as well have access to
        activities in Whitefish and Columbia Falls (within a 5 min drive).
        Glacier Park International Airport is 10 miles away.
      </p>
      <button className='btn'>Book it</button>
    </main>
  );
};

export default Main;
