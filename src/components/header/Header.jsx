import React from 'react';
import { useSelector } from 'react-redux';
import { BsCart } from 'react-icons/bs';
import { TfiLayoutMenuV } from 'react-icons/tfi';
import './header.css'

const iconStyles = {
  cursor: 'pointer',
  color: 'var(--darkBlue)'
}

const Header = () => {
  const { cart } = useSelector((state) => state.product);
  return (
    <div className='header'>
      <div>
        <TfiLayoutMenuV size={"1.5em"} style={iconStyles} />
      </div>
      <div>
        <BsCart size={"1.5em"}  style={iconStyles} />
        <span className='cart--count'>
          {cart.length}
        </span>
      </div>
    </div>
  )
}

export default Header