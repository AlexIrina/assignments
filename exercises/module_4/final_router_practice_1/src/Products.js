import React from 'react';
import productsData from './productsData';
import { Link } from 'react-router-dom';
const Products = () => {
  const products = productsData.map((product, key) => (
    <h1 key={key}>
      <Link to={`/products/${product._id}`}>{product.name}</Link> - $
      {product.price}
    </h1>
  ));
  return <div>{products}</div>;
};

export default Products;
