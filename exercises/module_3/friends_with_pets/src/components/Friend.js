import React from 'react';
import Pets from './Pets';

function Friend(props) {
  console.log(props);
  const pets = props.friendsInfo.pets.map((pet, i) => {
    return <Pets name={pet.name} key={i} />;
  });
  return (
    <div>
      <h1>{props.name}</h1>
      <div>{pets}</div>
    </div>
  );
}

export default Friend;
