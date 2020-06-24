import React from 'react';
import person from '../images/alex.jpg';
const User = (props) => {
  return (
    <div className='user'>
      <img src={person} alt='person' />
      <div className='user-info'>
        <h5>Alex George</h5>
        <small>2hrs ago</small>
      </div>
    </div>
  );
};

export default User;
