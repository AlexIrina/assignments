import React from 'react';
import Form from './components/Form';
import { ThemeContextConsumer } from './themeContext';

const App = () => {
  return (
    <div>
      <Form />
      <ThemeContextConsumer>
        {(theme) => {
          console.log(theme);
          return theme.uglyThings.map((item) => (
            <>
              <h2>Title: {item.title}</h2>
              <h2>Description: {item.description}</h2>
              <img src={item.imageURL} alt='ugly' />
            </>
          ));
        }}
      </ThemeContextConsumer>
    </div>
  );
};

export default App;
