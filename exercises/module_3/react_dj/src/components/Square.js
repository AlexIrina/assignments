import React from 'react';

function Square(props) {
  return (
    <div className='box-container'>
      <div className='box' color={props.color}></div>
    </div>
  );
}

export default Square;
