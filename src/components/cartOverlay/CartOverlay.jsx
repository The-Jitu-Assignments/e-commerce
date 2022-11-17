import React from 'react';
import './cart.css'

const CartOverlay = ({ open, onClose }) => {
  if (!open) return;
  return (
    <div className='overlay'>
      <div className='cart--body'>
        <div className='cart--header'>
          <div>My products</div>
          <div onClick={onClose} className='closeBtn'>x</div>
        </div>
        Cart Products
      </div>
    </div>
  )
}

export default CartOverlay