import React from 'react';
import friendsData from './data/friendsData';
import Friend from './components/Friend';

const FriendList = () => {
  const friends = friendsData.map(friend => {
    const usersName = `${friend.name} `;
    const usersAge = `${friend.age}`;

    return (
      <div className='card' key={friend.id}>
        <div className='container'>
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
      </div>
    );
  });

  return <div className='App'>{friends}</div>;
}

export default FriendList;
