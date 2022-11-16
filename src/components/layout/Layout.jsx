import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div className='layout--left'>
        <Sidebar />
      </div>
      <div className='layout--right'>
        <div className='layout--right__top'> 
          Header
        </div>
        <div className='layout--right__bottom'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout