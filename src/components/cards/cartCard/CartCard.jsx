import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { decreaseItemQuantity, increaseItemQuantity } from '../../../features/products/productSlice';

const CartCard = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.product);
  console.log(cart);
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
            <div className='cart--item__count'>
              Quantity: {item.count}
            </div>
            <div>
              Ksh. {item.price}
            </div>
          </div>
          <div className='cart--card__icons'>
            <div onClick={() => dispatch(increaseItemQuantity(item.id))}>
              <BiUpArrow />
            </div>
            <div>
              <AiOutlineDelete />
            </div>
            <div onClick={() => dispatch(decreaseItemQuantity(item.id))}>
              <BiDownArrow />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CartCard