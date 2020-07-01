import React from 'react';
// import { Link } from 'react-router-dom';
const Header = () => {
  const green = { backgroundColor: '#72aa62' };
  const blue = { backgroundColor: '#61dafb' };
  const brown = { backgroundColor: '#B5651D' };
  return (
    <div className='card-header'>
      <h1>Time Tracker</h1>
      <button style={green}>Work</button>
      <button style={blue}>Personal Time</button>
      <button style={brown}>Break Time</button>
    </div>
  );
};

export default Header;
