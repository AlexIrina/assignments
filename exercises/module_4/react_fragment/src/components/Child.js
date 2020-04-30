import React from 'react';
import GrandChild from './Grandchild';

function Child() {
  return (
    <>
      <h1>I am a Child components</h1>
      <GrandChild />
    </>
  );
}

export default Child;
