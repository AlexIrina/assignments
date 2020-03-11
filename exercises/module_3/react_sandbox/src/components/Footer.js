import React from 'react';

function Footer(props) {
  console.log(props);
  return (
    <footer>
      <div className='footer-container'>
        <img src={props.contact.imgUrl} alt='cat' id='cat' />
        <p>{props.contact.name}</p>
        <p>Phone:{props.contact.phone} </p>
        <p>Email:{props.contact.email} </p>
      </div>
    </footer>
  );
}

export default Footer;
