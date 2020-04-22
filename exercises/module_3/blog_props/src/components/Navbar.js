import React from 'react';

function Navbar() {
  return (
    <nav className='navbar' id='mainNav'>
      <div className='container'>
        <a className='navbar-brand' href='index.html'>
          Start Bootstrap
        </a>
        <button className='navbar-btn' type='button'>
          Menu
        </button>
        <div className='navbar-items-container' id='navbarResponsive'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <a className='nav-link' href='index.html'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='about.html'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='post.html'>
                Sample Post
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='contact.html'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
