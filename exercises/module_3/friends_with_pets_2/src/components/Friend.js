import React from 'react';
import Pet from './Pet';

export default function Friend(props){
  // mapping over pets array thats inside the friendsInfo prop
  const pets = props.friendsInfo.pets.map((pet, key) => (
    <Pet name={pet.name} key={key} />
  ));
  
  return <div className='pet-list'>{pets}</div>;
}



