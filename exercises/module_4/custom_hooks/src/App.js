import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className='container'>
      <h1>Click the button to increment count.</h1>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Add 1</button>
    </div>
  );
};

export default App;
