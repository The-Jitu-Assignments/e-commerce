import React from 'react';
import './cards.css';

const ProductCard = ({ data }) => {
  return (
    <div className='product--card'>
      <div className='product--card__top'>
        <img src={data.image} alt="product--img" />
      </div>
      <div className='product--card__bottom'>
        <div>A</div>
        <div>B</div>
        <div>C</div>
      </div>
    </div>
  )
}

export default ProductCard