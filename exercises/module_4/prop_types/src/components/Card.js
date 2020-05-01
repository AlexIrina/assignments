import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width,
  };

  return (
    <div>
      <div style={styles}></div>
    </div>
  );
}

Card.protoTypes = {
  cardColor: PropTypes.oneOf(['red', 'blue', 'green', 'purple']).isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

Card.defaultProps = {
  cardColor: 'pink',
  height: 100,
  width: 100,
};

export default Card;
