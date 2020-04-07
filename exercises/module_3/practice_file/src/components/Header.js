import React from 'react';

function Header() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const name = 'Alex';

  const styles = {
    color: 'red',
  };

  if (hours < 12) {
    timeOfDay = 'Morning';
    styles.color = 'green';
  } else if (hours >= 12 && hours < 19) {
    timeOfDay = 'Afternoon';
    styles.color = 'pink';
  } else {
    timeOfDay = 'Night';
    styles.color = 'orange';
  }
  return (
    <div className='header'>
      <h1>Good {`${timeOfDay}, ${name}!`}</h1>
    </div>
  );
}

export default Header;
