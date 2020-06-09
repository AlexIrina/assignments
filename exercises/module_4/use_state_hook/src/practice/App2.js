import React from 'react';
import Form from './Form2';
import Counter from './Counter';

// Convert the class below to a functional component that uses the useState hook to initialize a count variable to 0 and display the count on the screen.

function Practice() {
  return (
    <div>
      <Counter />
      <hr
        style={{
          color: 'red',
          backgroundColor: 'gold',
          height: 10,
          width: '100vw',
        }}
      />
      <h1>My form</h1>
      <Form />
    </div>
  );
}
export default Practice;
