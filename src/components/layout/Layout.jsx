import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import './layout.css';

const Layout = ({ children }) => {
  const { user } = useSelector(state => state.user);
  if (!user) {
    return <Navigate to={"/login"} />
  }
  return (
    <div className='layout'>
      <div className='layout--left'>
        <Sidebar />
      </div>
      <div className='layout--right'>
        <div className='layout--right__top'> 
          <Header />
        </div>
        <div className='layout--right__bottom'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout