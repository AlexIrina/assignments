import React from 'react';
// PROPS 101
function ContactCard(props) {
  console.log(props);
  return (
    <div className='contact-card'>
      <h1>{props.person.title}</h1>
      <img src={props.person.imgUrl} alt='cat' />
      <h3> {props.person.name}</h3>
      <p>Age:{props.person.age}</p>
      <p style={{ color: props.person.sex === 'male' ? 'blue' : 'red' }}>
        Sex:{props.person.sex}
      </p>
      <p>Occupation: {props.person.occupation}</p>
      <p>Email:{props.person.email}</p>
    </div>
  );
}

export default ContactCard;
