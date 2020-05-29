import React, { useState } from 'react';

import './App.css';

function App() {
  // 1
  const [answer] = useState('Yes');
  // 2
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      {/* 1 */}
      {/* make the answer show up */}
      <p>Is state important to know ? {answer}</p>

      {/* 2 */}
      {/* // Convert the class below to a functional component that uses the
      useState hook to initalize a count vartiable to 0 and display the count on
      the screen. // Don't worry about the part where the button changes the
      count quite yet, that's what you're here to learn about! */}

      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default App;
