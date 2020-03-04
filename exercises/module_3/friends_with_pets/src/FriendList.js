import React from 'react';
import './App.css';
import friendList from './data/friendList';
import Friend from './components/Friend';

function FriendList() {
  const friends = friendList.map((friend, i) => {
    return (
      <div key={i} >
        <Friend friendsInfo={friend} />
      </div>
    );
  });

  return <div className='App'>{friends}</div>;
}

export default FriendList;
