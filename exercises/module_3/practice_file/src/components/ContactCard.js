import React from 'react';
// PROPS 101
function ContactCard(props) {
  console.log(props);
  return (
    <div className='contact-card'>
      <h1>{props.title}</h1>
      <img src={props.imgUrl} alt='cat' />
      <h3> {props.name}</h3>
      <p>Age:{props.age}</p>
      <p style={{ color: props.sex === 'male' ? 'blue' : 'red' }}>
        Sex:{props.sex}
      </p>
      <p>Occupation: {props.occupation}</p>
      <p>Email:{props.email}</p>
    </div>
  );
}

export default ContactCard;
