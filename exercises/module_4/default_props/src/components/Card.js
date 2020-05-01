import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const style = {
    background: props.cardColor,
    height: props.height,
    width: props.width,
  };

  return (
    <div>
      <div style={style}></div>
    </div>
  );
}
// if no props specified in the App component then this is the default
Card.defaultProps = {
  cardColor: 'yellow',
  height: 100,
  width: 100,
};

// gives the dev warning messages if the props types are not matching below
Card.propTypes = {
  cardColor: PropTypes.string.isRequired,
};

export default Card;
