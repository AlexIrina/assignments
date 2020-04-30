import React from 'react';

function Name(props) {
  return (
    <>
      <form>
        <input
          type='text'
          name='firstName'
          value={props.firstName}
          onChange={props.handleChange}
          placeholder='First Name'
        />
      </form>
      <h1>Name:{props.firstName}</h1>
    </>
  );
}

export default Name;
