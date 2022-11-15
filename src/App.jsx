import React from 'react'
import AppRoutes from './AppRoutes'
import './App.css';
import { useSelector } from 'react-redux';

const App = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
      <AppRoutes />
  )
}

export default App