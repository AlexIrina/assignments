import React from 'react';

function Pets(props) {
  console.log(props);
  return (
    <div>
      <p>{`${props.name}`}</p>
    </div>
  );
}

export default Pets;
