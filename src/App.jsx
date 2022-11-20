import React from 'react'
import AppRoutes from './AppRoutes'
import './App.css';
import { SidebarContext } from './context/SidebarContext';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [sidebarContext, setSidebarContext] = React.useState(true);
  return (
    <SidebarContext.Provider value={[sidebarContext, setSidebarContext]}>
      <AppRoutes />
    </SidebarContext.Provider>
  )
}

export default App