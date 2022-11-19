import React from 'react';
import CartCard from '../cards/cartCard/CartCard';
import './cart.css'

const CartOverlay = ({ open, onClose }) => {
  if (!open) return;
  return (
    <div className='overlay'>
      <div className='cart--body'>
        <div className='cart--header'>
          <h2>Your Items</h2>
          <div onClick={onClose} className='closeBtn'>x</div>
        </div>
        <div className='cart--item__container'>
          <CartCard />
        </div>
      </div>
    </div>
  )
}

export default CartOverlay