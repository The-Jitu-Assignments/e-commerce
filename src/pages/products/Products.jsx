import { useState, useEffect } from 'react';
import Modal from '../../components/modal/Modal';
import './products.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/products/productSlice';
import ProductCard from '../../components/cards/ProductCard';

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
        {products?.map((data) => (
          <ProductCard data={data} />
        ))}
        {/* <div className="test--item">item1</div>
        <div className="test--item">item2</div>
        <div className="test--item">item3</div>
        <div className="test--item">item4</div>
        <div className="test--item">item5</div>
        <div className="test--item">item6</div>
        <div className="test--item">item7</div>
        <div className="test--item">item8</div> */}
      </div>
    </div>
  )
}

export default Products;