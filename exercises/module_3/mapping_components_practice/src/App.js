/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from 'react';
import './App.css';
import Product from './components/Product';
import productData from './vschoolProducts';

function App() {
  // create a product component from the vsProducts
  const productComponent = productData.map(item => {
    return (
      <div>
        <Product key={item.id} product={item} />
      </div>
    );
  });
  return <div className='App'>{productComponent}</div>;
}

export default App;
