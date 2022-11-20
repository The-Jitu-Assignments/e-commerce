import React from 'react';
import { useSelector } from 'react-redux';
import '../cards.css';

const ProductCard = ({ data, selectItem, id }) => {
  const { cart } = useSelector((state) => state.product);
  return (
    <div className='product--card'>
      <div className='product--card__top'>
        <img src={data.image} alt="product--img" />
      </div>
      <div className='product--card__bottom'>
        <div className='product--card__header'>
          <div className='product--name'>{data.name}</div>
          <div>Ksh.{data.price}</div>
        </div>
        <div className='product--description'>
          {data.description}
        </div>
        <div className='product--card__header'>
          <div className='product--rate'>
            {data.discount}%
          </div>
          <button className='product--cart' onClick={selectItem} disabled={cart.some(cartItem => cartItem.id === id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard