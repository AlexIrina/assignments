import React from 'react';
import { ThemeContextConsumer } from './themeContext';

const Footer = () => {
  return (
    <ThemeContextConsumer>
      {(theme) => (
        <footer className={`${theme}-theme`}>
          <h1>The amazing Footer</h1>
        </footer>
      )}
    </ThemeContextConsumer>
  );
};

export default Footer;
