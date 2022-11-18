import React from 'react';
import { useSelector } from 'react-redux'
import { BiUpArrow } from 'react-icons/bi'

const CartCard = () => {
  const { cart } = useSelector(state => state.product);
  if (!cart.length) return 'Your cart is empty';
  return (
    <>
      {cart.map((item) => (
        <div key={item.id} className='cart--card'>
          <div className='cart--card__img'>
            <img src={item.image} alt="cart-item" />
          </div>
          <div className='cart--card__details'>
            <div>
              {item.name}
            </div>
            <div>
              Ksh. {item.price}
            </div>
          </div>
          <div className='cart--card__icons'>
            <div>A</div>
            <div>B</div>
            <div>C</div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CartCard