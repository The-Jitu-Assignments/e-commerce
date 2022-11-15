import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate('/login')}>
        Go To Login Page
      </div>
      <div onClick={() => navigate('/register')}>
        Go To Sign Up Page
      </div>
    </div>
  )
}

export default Homepage;