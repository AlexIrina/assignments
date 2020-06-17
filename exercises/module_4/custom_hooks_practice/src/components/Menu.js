import React from 'react';
import useToggler from '../hooks/useToggler';
const Menu = (props) => {
  const [on, toggle] = useToggler();
  return (
    <div>
      <button onClick={toggle}>{on ? 'Hide' : 'Show'} Menu </button>
      <nav style={{ display: on ? 'block' : 'none' }}>
        <h6>Signed in as Coder123</h6>
        <p>
          <a href='/'>Your Profile</a>
        </p>
        <p>
          <a href='/'>Your Repositories</a>
        </p>
        <p>
          <a href='/'>Your Stars</a>
        </p>
        <p>
          <a href='/'>Your Gists</a>
        </p>
      </nav>
    </div>
  );
};

export default Menu;
// refactor component to use my custom toggler hook
