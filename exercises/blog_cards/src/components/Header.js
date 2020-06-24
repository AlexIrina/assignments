import React from 'react';
import image from '../images/react.png';
const Header = (props) => {
  return (
    <div className='card-header'>
      <img src={image} alt='react' />
    </div>
  );
};

export default Header;
