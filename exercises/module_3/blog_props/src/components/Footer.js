import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <ul className='list-items'>
          <li className='list-item'>
            <a href='.'>
              <span>Facebook logo</span>
            </a>
          </li>
          <li className='list-item'>
            <a href='.'>
              <span>Twitter logo</span>
            </a>
          </li>
          <li className='list-item'>
            <a href='.'>
              <span>Github logo</span>
            </a>
          </li>
        </ul>
        <p className='copyright'>Copyright &copy; Your Website 2020</p>
      </div>
    </div>
  );
};

export default Footer;
