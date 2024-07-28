import React, { useContext } from 'react'
import ProductItem from './ProductItem';
import EcomContext from '../context/EcomContext';

function Product() {
  const { product } =useContext(EcomContext);
  return (
    <div>
        <div className="container max-w-6xl mt-24 mb-24 m-auto">
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {product.map((items, index) => (
                    <ProductItem key={index} product_item_prop={items}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Product;
