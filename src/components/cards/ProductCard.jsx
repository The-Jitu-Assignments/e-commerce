import React from 'react';
import './cards.css';

const ProductCard = ({ data, selectItem }) => {
  return (
    <div className='product--card'>
      <div className='product--card__top'>
        <img src={data.image} alt="product--img" />
      </div>
      <div className='product--card__bottom'>
        <div className='product--card__header'>
          <div>{data.name}</div>
          <div>Ksh.{data.price}</div>
        </div>
        <div className='product--description'>
          {data.description}
        </div>
        <div className='product--card__header'>
          <div className='product--rate'>
            {data.discount}%
          </div>
          <div className='product--cart' onClick={selectItem}>
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard