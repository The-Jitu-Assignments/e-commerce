import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/user/UserSlice';
import './pages.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(true));
    navigate('/')
  }
  return (
    <div className='login--container'>
      <div className='login--form'>
        <h2>
          Login Page
        </h2>
        <div className='login--data'>
          <label>Email:</label>
          <input type="email" placeholder='enter your name' />
        </div>
        <div className='login--data'>
          <label>Password:</label>
          <input  type="password" placeholder='enter your password' />
        </div>
        <div className='auth--btn__container'>
          <button className='login--btn' onClick={handleLogin}>
            Login
          </button>
          <span className='auth--link' onClick={() => navigate('/register')}>
            I don't have an account yet
          </span>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;