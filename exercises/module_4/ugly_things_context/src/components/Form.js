import React from 'react';

const Form = () => {
  return (
    <div>
      <form className='form'>
        <input type='text' name placeholder='Title' />
        <input type='text' name placeholder='Description' />
        <input type='text' name placeholder='Img URL' />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;

// Must have 3 input fields:
// Img url field (A url to an image of an ugly thing)
// Title field (The title of the image that the user wants to give)
// Description field (why the user thinks it is ugly)
