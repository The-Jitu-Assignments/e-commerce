import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BsCart } from 'react-icons/bs';
import { TfiLayoutMenuV } from 'react-icons/tfi';
import './header.css'
import CartOverlay from '../cartOverlay/CartOverlay';

const iconStyles = {
  cursor: 'pointer',
  color: 'var(--darkBlue)'
}

const Header = () => {
  const [open, setIsOpen] = useState(false)
  const { cart } = useSelector((state) => state.product);
  return (
    <div className='header'>
      <div>
        <TfiLayoutMenuV size={"1.5em"} style={iconStyles} />
      </div>
      <div className='header--cart' onClick={() => setIsOpen(true)}>
        <BsCart size={"1.5em"}  style={iconStyles} />
        <span className='cart--count'>
          {cart.length}
        </span>
      </div>
      <CartOverlay open={open} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export default Header