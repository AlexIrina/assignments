import React from 'react';
import Pet from './Pet';

const Friend = (props) => {
  // mapping over pets array thats inside friendsInfo
  console.log(props.friendsInfo.pets.map((x, key) => x.name));

  const pets = props.friendsInfo.pets.map((pet, key) => (
    <Pet name={pet.name} key={key} />
  ));
  return <div className='pet-list'>{pets}</div>;
}

export default Friend;


