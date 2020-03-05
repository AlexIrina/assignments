import React from 'react';
import Pets from './Pets';

function Friend(props) {
  const pets = props.friendsInfo.pets.map((pet, i) => {
    return <Pets name={pet.name} key={i} />;
  });
  return (
    <div>
      <div>{pets}</div>
    </div>
  );
}

export default Friend;
