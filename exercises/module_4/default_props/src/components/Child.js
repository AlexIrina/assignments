import React from 'react';

function Child(props) {
  const style = {
    background: 'red',
    height: props.height,
    width: props.width,
  };

  return (
    <div className='child-container'>
      <h1 style={style}>{props.text}</h1>
    </div>
  );
}



export default Child;
