import React from 'react'
import { BsToggles } from 'react-icons/bs';
import { TfiLayoutMenuV } from 'react-icons/tfi';
import './header.css'

const iconStyles = {
  cursor: 'pointer',
  color: 'var(--darkBlue)'
}

const Header = () => {
  return (
    <div className='header'>
      <div>
        <TfiLayoutMenuV size={"1.5em"} style={iconStyles} />
      </div>
      <div>
        <BsToggles size={"1.5em"}  style={iconStyles} />
      </div>
    </div>
  )
}

export default Header