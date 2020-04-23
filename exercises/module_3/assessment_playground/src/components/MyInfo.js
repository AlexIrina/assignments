import React from 'react';

function MyInfo() {
  const styledList = {
    color: 'red',
    background: 'peach',
    listStyleType: 'none',
  };
  const fName = 'Jack';
  const lName = 'Black';

  const fullName = (fName, lName) => {
    return `${fName} ${lName}`;
  };

  return (
    <div className='App'>
      <h1>My name is {fullName(fName, lName)}</h1>
      <p>About Me: I am from China</p>
      <ul style={styledList}>
        {' '}
        My favorite vacation spots
        <li>Russian</li>
        <li>America</li>
        <li>Tokyo</li>
      </ul>
    </div>
  );
}

export default MyInfo;
