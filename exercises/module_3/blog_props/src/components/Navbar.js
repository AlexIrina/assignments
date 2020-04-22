import React from 'react';

function Navbar() {
  return (
    <div className='navbar-container'>
      <a className='navbar-brand' href='index.html'>
        Start Bootstrap
      </a>
      {/* <button className='navbar-btn' type='button'>
        Menu
      </button> */}
      <a className='nav-link' href='index.html'>
        Home
      </a>
      <a className='nav-link' href='about.html'>
        About
      </a>
      <a className='nav-link' href='post.html'>
        Sample Post
      </a>
      <a className='nav-link' href='contact.html'>
        Contact
      </a>
    </div>
  );
}
export default Navbar;
