import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar--header'>
        Bluck
      </div>
      <div className='sidebar--profile'>
        <div>
          Welcome Back...
        </div>
        <div>Name</div>
        <div>
          Email Address
        </div>
      </div>
      <div>
        Links
      </div>
    </div>
  )
}

export default Sidebar