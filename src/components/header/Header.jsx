import React from 'react'
import { BsToggles } from 'react-icons/bs';
import { TfiLayoutMenuV } from 'react-icons/tfi';
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div>
        <TfiLayoutMenuV />
      </div>
      <div>
        <BsToggles />
      </div>
    </div>
  )
}

export default Header