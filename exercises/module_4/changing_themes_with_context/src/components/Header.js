import React from 'react';
import { ThemeContextConsumer } from './themeContext';
import { darkStyles, lightStyles } from './themeStyles';
function Header() {
  return (
    <ThemeContextConsumer>
      {({ theme, isToggled, toggleMenu, toggleTheme }) => (
        <header
          className={`${theme}-theme`}
          style={theme === 'dark' ? darkStyles : lightStyles}
        >
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Contact</h2>
          <h3 style={{ color: 'white' }} onClick={toggleMenu}>
            Switch Theme
            <br />
            <div style={{ display: isToggled ? 'inline-block' : 'none' }}>
              <p
                style={{ color: '#ed623b' }}
                onClick={(e) => toggleTheme('dark')}
              >
                Dark theme
              </p>
              <p
                style={{ color: 'yellow' }}
                onClick={(e) => toggleTheme('light')}
              >
                Light Theme
              </p>
            </div>
          </h3>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

export default Header;
