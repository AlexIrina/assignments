import React from 'react';

function Nav(props) {
  return (
    <div className='nav-container'>
      <h2 className='heading'>{props.heros.header}</h2>
      <ul className='list'>
        <li className='list-item'>{props.heros.hero1}</li>
        <li className='list-item'>{props.heros.hero2}</li>
        <li className='list-item'>{props.heros.hero3}</li>
        <li className='list-item'>{props.heros.hero4}</li>
      </ul>
    </div>
  );
}

export default Nav;
