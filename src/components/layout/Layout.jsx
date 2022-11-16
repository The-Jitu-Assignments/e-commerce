import React from 'react';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div>
        A
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout