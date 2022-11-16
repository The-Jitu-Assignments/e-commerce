import React from 'react';
import './modal.css';

const Modal = ({ open }) => {
  if (!open) return null;
  return (
    <div className='overlay'>
      <div className='modal--container'>
        Modal Container
      </div>
    </div>
  )
}

export default Modal