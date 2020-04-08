import React from 'react';
import Pets from './Pets';

function Friend(props) {
  const pets = props.friendsInfo.pets.map((pet) => (
    <Pets name={pet.name} key={pet.id} />
  ));
  return <div className='pet-list'>{pets}</div>;
}

export default Friend;
