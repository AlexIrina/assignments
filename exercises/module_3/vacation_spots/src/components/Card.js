import React from 'react';

function Card(props) {
  return (
    <div className='card'>
      <div className='place'>
        <h3>Place: </h3>
        <p>{props.card.place}</p>
        <hr />
      </div>
      <div className='price'>
        <p className='price-text'>
          Price:
          <br />
          {props.card.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })}{' '}
        </p>
        <hr />
      </div>
      <div>
        <h3>Time to go:</h3>
        <p>{props.card.timeToGo}</p>
      </div>
    </div>
  );
}

export default Card;
