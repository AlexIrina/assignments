import React, { useState } from 'react';
import Form from './components/Form';
const App = () => {
  // 1
  const [answer] = useState('Yesssss');
  // 2
  const [count, setCount] = useState(0);
  // '+'
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  //'-'
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  // 'X2'
  function doubleCount() {
    setCount((prevCount) => prevCount * 2);
  }

  return (
    <div>
      {/* 1 */}
      <p>Is state important to know? {answer}</p>
      {/* 2 */}
      <br />
      {count}
      <button onClick={incrementCount}> + </button>
      <button onClick={decrementCount}> - </button>
      <button onClick={doubleCount}> x2 </button>

      <>
        <Form />
      </>
    </div>
  );
};

export default App;
//       {/* 1 */}
//       {/* make the answer show up */}
//       <p>Is state important to know ? {answer}</p>

//       {/* 2 */}
//       {/* // Convert the class below to a functional component that uses the
//       useState hook to initalize a count vartiable to 0 and display the count on
//       the screen. Increment,decrement,double count on click
