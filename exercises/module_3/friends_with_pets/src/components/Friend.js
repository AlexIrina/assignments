import React from 'react';
import Pets from './Pets';

function Friend(props) {
  const pets = props.friendsInfo.pets.map((pet, key) => (
    <Pets name={pet.name} key={key} />
  ));
  return <div className='pet-list'>{pets}</div>;
}

export default Friend;
