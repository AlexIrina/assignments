import React from 'react';
import { ThemeContextConsumer } from './themeContext';
import { lightFooterStyles, darkFooterStyles } from './themeStyles';
const Footer = () => {
  return (
    <ThemeContextConsumer>
      {({ theme }) => (
        <footer
          className={`${theme}-theme`}
          style={theme === 'dark' ? darkFooterStyles : lightFooterStyles}
        >
          <h3>The amazing Footer</h3>
        </footer>
      )}
    </ThemeContextConsumer>
  );
};

export default Footer;
