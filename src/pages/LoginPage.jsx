import React from 'react';
import './pages.css';

const LoginPage = () => {
  return (
    <div className='login--container'>
      <div className='login--form'>
        <h2>
          Login Page
        </h2>
        <div className='login--data'>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className='login--data'>
          <label>Password:</label>
          <input  type="password" />
        </div>
        <button className='login--btn'>
          Login
        </button>
      </div>
    </div>
  )
}

export default LoginPage;