import React from 'react';
import { ThemeContextConsumer } from './themeContext';
function Button(props) {
  const darkStyles = {
    padding: '20px',
    backgroundColor: 'white',
    marginTop: '80px',
    color: 'black',
  };

  const lightStyles = {
    padding: '20px',
    backgroundColor: 'black',
    marginTop: '80px',
    color: 'white',
  };
  return (
    <ThemeContextConsumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          className={`${theme}-theme `}
          style={theme === 'dark' ? darkStyles : lightStyles}
        >
          Toggle Theme
        </button>
      )}
    </ThemeContextConsumer>
  );
}

export default Button;
