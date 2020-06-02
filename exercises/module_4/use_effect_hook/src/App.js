import React, { useState, useEffect } from 'react';
import randomcolor from 'random-color';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  // useEffect
  useEffect(() => {
    // how to end un interval
    const intervalId = setInterval(() => {
      // setCount((prevCount) => prevCount + 1);
    }, 1000);
    //clean up function
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div className='App'>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
}

export default App;
// useEffect hook replaces the following life cycle methods

// componentDidMount
// componentDidUpdate
// componentWillUnmount

// useEffect() hooks allows me to produce side effects in my components
// What are Side effects?
// things that dong manage state or display content to the screen

// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals
