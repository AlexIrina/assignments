import React from 'react';
import { ThemeContextConsumer } from './themeContext';

function Header() {
  const darkStyles = {
    backgroundColor: 'black',
    color: '#89cff0',
  };

  const lightStyles = {
    backgroundColor: '#89cff0 ',
    color: 'black',
  };

  return (
    <ThemeContextConsumer>
      {({ theme }) => (
        <header
          className={`${theme}-theme`}
          style={theme === 'dark' ? darkStyles : lightStyles}
        >
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Contact</h1>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

export default Header;
