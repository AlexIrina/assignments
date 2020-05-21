import React from 'react';
import { ThemeContextConsumer } from '../themeContext';
const Form = () => {
  return (
    <ThemeContextConsumer>
      {(props) => (
        <form onSubmit={props.handleSubmit} className='form'>
          <input
            name='title'
            value={props.title}
            type='text'
            placeholder='Title'
            onChange={props.handleChange}
          />
          <input
            name='description'
            value={props.description}
            type='text'
            placeholder='Description'
            onChange={props.handleChange}
          />
          <input
            name='imageURL'
            value={props.imageURL}
            type='text'
            placeholder='Img URL'
            onChange={props.handleChange}
          />
          <button>Submit</button>
        </form>
      )}
    </ThemeContextConsumer>
  );
};

export default Form;
