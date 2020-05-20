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
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p onClick={toggleMenu}>
            Theme
            <div style={{ display: isToggled ? 'inline-block' : 'none' }}>
              <p onClick={(e) => toggleTheme('dark')}>Dark theme</p>
              <p onClick={(e) => toggleTheme('light')}>Light Theme</p>
            </div>
          </p>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

export default Header;
