import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../features/user/UserSlice';

const RegisterPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(register(true));
    navigate('/')
  };
  return (
    <div className='login--container'>
      <div className='login--form'>
        <h2>
          Sign up page
        </h2>
        <div className='login--data'>
          <label>Name:</label>
          <input type="text" placeholder='enter a name' />
        </div>
        <div className='login--data'>
          <label>Email:</label>
          <input type="email" placeholder='enter an email' />
        </div>
        <div className='login--data'>
          <label>Password:</label>
          <input  type="password" placeholder='enter your password' />
        </div>
        <div className='auth--btn__container'>
          <button className='login--btn' onClick={handleRegister}>
            Register
          </button>
          <span className='auth--link' onClick={() => navigate('/login')}>
            Already have an account
          </span>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage