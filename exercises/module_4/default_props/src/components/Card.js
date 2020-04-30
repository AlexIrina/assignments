import React from 'react';

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

export default Card;
