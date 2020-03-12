import React from 'react';
import './App.css';
import friendList from './data/friendList';
import Friend from './components/Friend';

function FriendList() {
  const friends = friendList.map(friend => {
    const usersName = `${friend.name} `;
    const usersAge = `${friend.age}`;

    return (
      <div className='card'>
        <div className='container' key={friend.id}>
          <div className='owner'>
            <h1 className='info-header'>Owner Info</h1>
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
