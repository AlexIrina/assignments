import React from 'react';

function ContactCard() {
  return (
    <div className='contact-card'>
      <h1>Users Information</h1>
      <img src='http://placekitten.com/300/200' alt='cat' />
      <h3>Name: </h3>
      <p>Age:</p>
      <p>Sex:</p>
      <p>Occupation:</p>
      <p>Email:</p>
    </div>
  );
}

export default ContactCard;
