import React from 'react';
import './modal.css';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className='overlay'>
      <div className='modal--container'>
        <div className='modal--header'>
          <h2>Create new product</h2>
          <div className="closeBtn" onClick={onClose}>X</div>
        </div>
        <div className="modal--body">
          <div className='add--product__form'>
            <div>
              <label>Name</label>
              <input type="text" placeholder="enter product name" />
            </div>
            <div>
              <label>Image</label>
              <input type="text" placeholder='enter an image url' />
            </div>
            <div>
              <label htmlFor="">Description</label>
              <textarea type="text" placeholder='enter a short description for the product' />
            </div>
            <div>
              <label htmlFor="">
                Price
              </label>
              <input type="number" placeholder='enter product price' />
            </div>
            <div>
              <label htmlFor="">
                Discount Rate
              </label>
              <input type="number" placeholder='enter the discount rate' />
            </div>
            <button type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal