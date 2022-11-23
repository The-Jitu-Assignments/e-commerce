import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { decreaseItemQuantity } from '../../../features/products/productSlice';
import { removeItemFromCart, increaseItemQuantity } from '../../../features/cart/cartSlice';

const CartCard = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cart);
  console.log(cart);

  const handleRemove = (data, id) => {
    if (data.count <= 1) {
      dispatch(removeItemFromCart(id))
    }
    dispatch(decreaseItemQuantity(id))
  }

  const cartItem = useMemo(() => (
    <>
      {cart.map((item) => (
        <div key={item.productId} className='cart--card'>
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
            <div onClick={() => dispatch(increaseItemQuantity({id: item.id, value: {
              ...item,
              // name: item.name,
              count: item.count + 1,
              // id: item.id,
              // imageUrl: item.imageUrl,
              // price: item.price
            }}))}>
              <BiUpArrow />
            </div>
            <div onClick={() => dispatch(removeItemFromCart(item.id))}>
              <AiOutlineDelete />
            </div>
            <div onClick={() => handleRemove(item, item.id)}>
              <BiDownArrow />
            </div>
          </div>
        </div>
      ))}
    </>
  ), [cart]);

  return (
    <>
      {cart.length ? cartItem : 'Your cart is empty'}
    </>
  )
}

export default CartCard