// In <FriendList />, .map() through an array of friends. Each friend will have an array of pets.
//In your .map(), render a <Friend /> component, passing through the name, age, and pets of each friend as props.

import React from 'react';
import friendsData from './data/friendsData';
import Friend from './components/Friend';

export default function FriendList() {
  const friends = friendsData.map((friend, key) => {
    const usersName = `${friend.name} `;
    const usersAge = `${friend.age}`;
    return (
        <div className='container' key={key}>
          <div className='owner'>
            <h1 className='info-header'>Owners Info</h1>
            <h3>Name: {usersName}</h3>
            <h3>Age: {usersAge}</h3>
          </div>
          <div className='pets'>
            <h1 className='pets-header'>Owners pets</h1>
            <Friend friendsInfo={friend} />
          </div>
        </div>
    );
  });

  return <div className='App'>{friends}</div>;
}

;
