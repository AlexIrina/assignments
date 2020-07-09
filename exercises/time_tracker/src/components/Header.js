import React from 'react';
// import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='card-header'>
      <ion-icon name='alarm-outline'></ion-icon>
      <h1>Time Tracker</h1>
      <button className='work-time'>
        <span className='work'></span>
        Work
      </button>
      <button className='personal-time'>
        <span className='personal'></span>Personal
      </button>
      <button className='break-time'>
        <span className='break'></span> Break
      </button>
    </div>
  );
};

export default Header;
