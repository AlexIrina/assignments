import React from 'react';
import { ThemeContextConsumer } from './themeContext';
function Button() {
  return (
    <ThemeContextConsumer>
      {(theme) => (
        <button
          style={{
            color: theme === 'light' ? 'black' : 'white',
          }}
          className={`${theme}-theme`}
        >
          Switch Theme
        </button>
      )}
    </ThemeContextConsumer>
  );
}

export default Button;
