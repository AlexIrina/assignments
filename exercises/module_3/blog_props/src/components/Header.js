import React from 'react';

const Header = () => {
  return (
    <div>
      <header
        className='header'
        style={{
          backgroundImage:
            "url('https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg')",
        }}
      >
        <div className='container'>
              <div className='site-heading'>
                <h1>Clean Blog</h1>
                <span className='subheading'>
                  A Blog Theme by Start Bootstrap
                </span>
              </div>
            </div>
      </header>
    </div>
  );
};

export default Header;
