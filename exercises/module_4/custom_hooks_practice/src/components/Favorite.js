import React from 'react';
import useToggler from '../hooks/useToggler';

const Favorite = (props) => {
  const [isFavoriteOn, toggle] = useToggler();

  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={toggle}>{isFavoriteOn ? '❤️' : '♡'}</span>
      </h1>
    </div>
  );
};

export default Favorite;
// refactor Favorite component so it uses my custom hook instead of the Toggler component
