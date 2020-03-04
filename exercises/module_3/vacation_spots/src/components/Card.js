import React from 'react';

function Card(props) {
  
  return (
    <div className='main-container'>

      <div className='place'>
        <h3>Place</h3>
        <p className='location'>{props.card.place}</p>
      </div>

      <div className='price'>
        <h3>Price</h3>
        <p className='money'>${props.card.price}</p>
      </div>

      <div className='time'>
        <h3>Time to go</h3>
        <p className='season'>{props.card.timeToGo}</p>
      </div>

    </div>
  );
}

export default Card;
