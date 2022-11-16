import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar--header'>
        Bluck
      </div>
      <div className='sidebar--profile'>
        <div className='profile--intro'>
          Welcome Back...
        </div>
        <div>
          John Katua
        </div>
        <div className='profile--email'>
          johnkatua99@gmail.com
        </div>
      </div>
      <div className='sidebar--links'>
        <h3>Application</h3>
        <div className='sidebar--links__item'>
          <div>Home</div>
          <div>Products</div>
          <div>About</div>
          <div>Contact</div>
          <div>Logout</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar