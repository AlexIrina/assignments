import React from 'react';
import Form from './components/Form';
import { ThemeContextConsumer } from './themeContext';

const App = () => {
  return (
    <div>
      <Form />
      <ThemeContextConsumer>
        {(theme) => {
          return theme.uglyThings.map((item) => (
            <div className='ugly'>
              <h2 className='title'>{item.title}</h2>
              <h5 className='desc'>{item.description}</h5>
              <div className='img-container'>
                <img src={item.imageURL} alt='ugly-thing' />
              </div>
            </div>
          ));
        }}
      </ThemeContextConsumer>
    </div>
  );
};

export default App;
