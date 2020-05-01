import React from 'React';

function Card(props) {
  const styles = {
    background: props.cardColor,
    height: 200,
    width: 200,
  };

  return (
    <div>
      <div style={styles}>1</div>
      <div style={styles}>2</div>
      <div style={styles}>3</div>
    </div>
  );
}

export default Card;
