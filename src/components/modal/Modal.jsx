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
      </div>
    </div>
  )
}

export default Modal