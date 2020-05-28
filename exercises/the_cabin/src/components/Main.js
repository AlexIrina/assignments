import React from 'react';
import cabin from '../img/cabin.jpg';
import inside1 from '../img/inside.jpg';
import bed from '../img/bed.jpg';
import styled from 'styled-components';

const Main = () => {
  return (
    <Container>
      <h1 className='title'>The Cabin</h1>
      <p className='location'>Richmond,Montana</p>

      <Image src={cabin} alt='' className='primary-image' />

      <div className='secondary-images'>
        <Image src={inside1} alt='inside the cabin' className='secondary-image' />
        <Image src={bed} alt='bed' className='secondary-image' />
      </div>
      <p className='description'>
        Nestled on 5 wooded acres, this artistically designed two story
        treehouse has all the luxury amenities. Within 30 minutes to Glacier
        National Park, minutes from Whitefish Mtn Ski Resort. Best of both
        worlds if you want to experience Montana nature as well have access to
        activities in Whitefish and Columbia Falls (within a 5 min drive).
        Glacier Park International Airport is 10 miles away.
      </p>
      <button className='btn'>Book now</button>
    </Container>
  );
};

export default Main;

const Container = styled.main`
  @media (min-width: 800px) {
    grid-column: 2/-1;
    display: grid;
    /* moving to the left side  subgrid of the parent grid*/
    grid-template-columns: subgrid;
    /* makes rows as small as possible */
    grid-auto-rows: min-content;
    /* fills in missing spaces */
    grid-auto-flow: dense;
    ::after {
      content: '';
      position: absolute;
      background-color: var(--clr-bg-light);
      top: 0;
      bottom: 0;
      left: -2em;
      right: -2em;
      grid-column: 3/5;
      z-index: -10;
    }
  }
  @media (min-width: 1200px) {
    ::after {
      /* shrink down */
      grid-column: 3/4;
    }
  }
`;

const Image = styled.img`
  /* so images stay on the page */
  max-width: 100%;
`;

