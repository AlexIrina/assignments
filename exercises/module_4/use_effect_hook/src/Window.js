import React, { useState, useEffect } from 'react';

const Window = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // clean up
    // whenever this component gets unmounted this return runs
    // this return runs first and cleans up whatever ran before it
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='container'>
      <h1>{windowWidth}</h1>
    </div>
  );
};

export default Window;
