import React from 'react';

function Square(props) {
  return (
    <div className='main-container'>
      <div className='box' color={props.color}>
        box 1
      </div>
    </div>
  );
}

export default Square;
