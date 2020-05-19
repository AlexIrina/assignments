import React from 'react';
import { ThemeContextConsumer } from './themeContext';
import Button from './Button';

const Main = () => {
  return (
    <ThemeContextConsumer>
      {(theme) => (
        <div>
          <main className={`${theme}-theme`}>
            <h1>Click the button to toggle the Dark theme!</h1>
            <Button />
          </main>
        </div>
      )}
    </ThemeContextConsumer>
  );
};

export default Main;
