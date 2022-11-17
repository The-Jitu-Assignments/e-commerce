import { useState, useEffect } from 'react';
import Modal from '../../components/modal/Modal';
import './products.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/products/productSlice';

const Products = () => {
  const { products } = useSelector(state => state.product);
  console.log(products);
  const [open, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);
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