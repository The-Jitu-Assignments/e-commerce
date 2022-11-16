import React from 'react';
import './products.css'

const Products = () => {
  return (
    <div className='products--page'>
      <div className='products--page__header'>
        <button className='add--product__btn'>
          Add Product
        </button>
      </div>
      <div className='products--page__body'>
        Main
      </div>
    </div>
  )
}

export default Products;