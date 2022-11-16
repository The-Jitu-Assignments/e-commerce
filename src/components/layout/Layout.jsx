import React from 'react';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div className='layout--left'>
        A
      </div>
      <div className='layout--right'>
        {children}
      </div>
    </div>
  )
}

export default Layout