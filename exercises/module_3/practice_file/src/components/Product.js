import React from 'react';

function Product(props) {
  return (
    <div>
      <h2>Name: {props.product.name}</h2>
      <h3>Price: ${props.product.price}</h3>
      <h3>Description: {props.product.description}</h3>
    </div>
  );
}

export default Product;
