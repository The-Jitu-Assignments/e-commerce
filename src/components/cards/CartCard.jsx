import React from 'react';
import { useSelector } from 'react-redux'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

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
            <div>
              <BiUpArrow />
            </div>
            <div>
              <AiOutlineDelete />
            </div>
            <div>
              <BiDownArrow />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CartCard