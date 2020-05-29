import React, { useState } from 'react';
import Form from './components/Form';
import Toggle from './components/Toggle';
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

  // 4
  const [name, setName] = useState('');

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
        {/* 4 */}
        <Toggle />
        <hr />
        <p>Submit form</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formSubmit(name, setName);
          }}
        >
          <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button>Submit</button>
        </form>
      </>
    </div>
  );
};

// sends email and clears form
const formSubmit = (value, setValue) => {
  console.log(`email sent to ${value} !`);
  setValue('');
};

export default App;

//       {/* 1 */}
//       {/* make the answer show up */}
//       <p>Is state important to know ? {answer}</p>

//       {/* 2 */}
//       {/* // Convert the class below to a functional component that uses the
//       useState hook to initalize a count vartiable to 0 and display the count on
//       the screen. Increment,decrement,double count on click
