import React from 'react';

export default function Footer() {
  return (
    <div className='footer-container'>
      <ul className='list-items'>
        <li className='list-item'>
          <a href='.'>
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li className='list-item'>
          <a href='.'>
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li className='list-item'>
          <a href='.'>
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
      <p className='copyright'>Copyright &copy; Your Website 2020</p>
    </div>
  );
};


