import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { BsCart } from 'react-icons/bs';
import { TfiLayoutMenuV } from 'react-icons/tfi';
import { MdOutlineMenuOpen } from 'react-icons/md'
import './header.css'
import CartOverlay from '../cartOverlay/CartOverlay';
import { SidebarContext } from '../../context/SidebarContext';

const iconStyles = {
  cursor: 'pointer',
  color: 'var(--darkBlue)'
}

const Header = () => {
  const [sidebarContext, setSidebarContext] = useContext(SidebarContext);
  const [open, setIsOpen] = useState(false)
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className='header'>
      <div onClick={() => setSidebarContext(!sidebarContext)}>
        <MdOutlineMenuOpen size={"1.8em"} style={iconStyles} />
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