import React from 'react';

function Card(props) {
  // console.log(props.card.price);
  let money;
  if (props.card.price <= 500) {
    money = `$`;
  } else if (props.card.price <= 1000) {
    money = `$$`;
  } else {
    money = `$$$`;
  }

  return (
    <div className='main-container'>
      <div className='place'>
        <h3>Place</h3>
        <p className='location'>{props.card.place}</p>
        <h1 className='cash'>{`${money}`}</h1>
      </div>

      <div className='price'>
        <h3>Price</h3>
        <p className='money'>${props.card.price}</p>
      </div>

      <div className='time'>
        <div className={props.card.timeToGo}>
          <h3>Time to go</h3>
          <p className='season'>{props.card.timeToGo}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
