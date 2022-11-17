import React from 'react'
import './forms.css';

const AddProductForm = () => {
  return (
    <div className='add--product__form'>
      <div className='product--form__item'>
        <label>Name</label>
        <input type="text" placeholder="enter product name" />
      </div>
      <div className='product--form__item'>
        <label>Image</label>
        <input type="text" placeholder='enter an image url' />
      </div>
      <div className='product--form__item'>
        <label htmlFor="">Description</label>
        <textarea type="text" placeholder='enter a short description for the product' />
      </div>
      <div className='product--form__item'>
        <label htmlFor="">
          Price
        </label>
        <input type="number" placeholder='enter product price' />
      </div>
      <div className='product--form__item'>
        <label htmlFor="">
          Discount Rate
        </label>
        <input type="number" placeholder='enter the discount rate' />
      </div>
      <button type="submit" className='product--submit__btn'>
        Submit
      </button>
    </div>
  )
}

export default AddProductForm