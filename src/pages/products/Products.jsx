import { useState, useEffect } from 'react';
import Modal from '../../components/modal/Modal';
import './products.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchProducts } from '../../features/products/productSlice';
import ProductCard from '../../components/cards/ProductCard';

const Products = () => {
  const { products } = useSelector(state => state.product);
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
        {products?.map((data) => (
          <ProductCard key={data.id} data={data} selectItem={() => dispatch(addToCart(data.id))} />
        ))}
      </div>
    </div>
  )
}

export default Products;