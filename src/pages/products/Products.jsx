import { useState } from 'react';
import Modal from '../../components/modal/Modal';
import './products.css'

const Products = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div className='products--page'>
      <div className='products--page__header'>
        <button className='add--product__btn' onClick={() => setIsOpen(!open)}>
          Add Product
        </button>
        <Modal open={open} onClose={() => setIsOpen(false)} />
      </div>
      <div className='products--page__body'>
        Main
      </div>
    </div>
  )
}

export default Products;