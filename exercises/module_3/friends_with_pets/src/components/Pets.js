import React from 'react';

function Pets(props) {
  return (
    <div>
      <h2>Pets name</h2>
      <p>{props.name}</p>;
    </div>
  );
}

export default Pets;
