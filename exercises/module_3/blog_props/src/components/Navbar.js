import React from 'react';

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <a className='navbar-brand' href='index.html'>
        Start Bootstrap
      </a>
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

