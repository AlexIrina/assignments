import React from 'react';
import { ThemeContextConsumer } from './themeContext';

const Footer = () => {
  const darkStyles = {
    backgroundColor: '#333',
    color: 'white',
  };

  const lightStyles = {
    backgroundColor: '#E6E5E7',
    color: 'black',
  };
  return (
    <ThemeContextConsumer>
      {({ theme }) => (
        <footer
          className={`${theme}-theme`}
          style={theme === 'dark' ? darkStyles : lightStyles}
        >
          <h1>The amazing Footer</h1>
        </footer>
      )}
    </ThemeContextConsumer>
  );
};

export default Footer;
