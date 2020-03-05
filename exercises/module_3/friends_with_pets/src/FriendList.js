import React from 'react';
import './App.css';
import friendList from './data/friendList';
import Friend from './components/Friend';

function FriendList() {
  const friends = friendList.map((friend, i) => {
    const usersName = `${friend.name} `;
    const usersAge = `${friend.age}`;
    return (
      <div className='container' key={i}>
        <h1>Owner Info</h1>
        <h3>Name: {usersName}</h3>
        <h3>Age: {usersAge}</h3>
        <h1>Owners pets</h1>
        <Friend friendsInfo={friend} />
      </div>
    );
  });

  return <div className='App'>{friends}</div>;
}

export default FriendList;
