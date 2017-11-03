import React from 'react';
import PropTypes from 'prop-types';

function ProductList (props) {
  return (
    <ul>
    {
      props.products.map(product => (
        <li key={product.id} onClick={() => props.onProductSelect(product)}>
         {product.name} ({product.brand})
        </li>
      ))
    }
    </ul>
  )
}

export default ProductList;
