import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from './productsData';
const ProductDetails = () => {
  const { productsId } = useParams();
  const foundProduct = productsData.find(
    (product) => product._id === productsId
  );
  return (
    <div>
      <h1>
        {foundProduct.name} - ${foundProduct.price}
      </h1>
      <h2>{foundProduct.description}</h2>
    </div>
  );
};

export default ProductDetails;
