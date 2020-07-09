import React from 'react';
import productsData from '../data/productsData';
import { Link } from 'react-router-dom';
const Products = () => {
  const products = productsData.map((product, key) => (
    <div className='products-card'>
      <h2 key={key}>
        <Link to='/products'>{product.name}</Link> - ${product.price}
      </h2>
      <h5>{product.description}</h5>
    </div>
  ));

  return (
    <div className='products-container'>
      <h1>Products Page</h1>
      {products}
    </div>
  );
};

export default Products;