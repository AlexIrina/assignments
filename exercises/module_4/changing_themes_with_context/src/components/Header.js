import React from 'react';
import {ThemeContextConsumer} from './themeContext';

function Header() {
  return (
    <ThemeContextConsumer>
      {(theme) => (
        <header className={`${theme}-theme`}>
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Contact</h1>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

export default Header;
