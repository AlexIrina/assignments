import React from 'react';

function Product(props) {
  return (
    <div>
      <h1>Name: {props.product.name}</h1>
      <h2>Price: ${props.product.price}</h2>
      <p>Product Description{props.product.description}</p>
    </div>
  );
}

export default Product;
