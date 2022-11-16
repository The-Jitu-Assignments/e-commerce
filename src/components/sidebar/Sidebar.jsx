import React from 'react'
import './sidebar.css';
import { BiHomeSmile, BiShoppingBag, BiLogOutCircle } from 'react-icons/bi';
import { GrContact } from 'react-icons/gr';
import { FcAbout } from 'react-icons/fc';


const iconData = [
  {
    icon: <BiHomeSmile />,
    name: 'Home',
    path: '/'
  },
  {
    icon: <BiShoppingBag />,
    name: 'Products',
    path: '/products'
  },
  {
    icon: <FcAbout />,
    name: 'About',
    path: '/about'
  },
  {
    icon: <GrContact />,
    name: 'Contact Us',
    path: '/contact'
  },
  {
    icon: <BiLogOutCircle />,
    name: 'Logout',
    path: '/logout'
  }
]

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
          <ul>
            {iconData.map((item, i) => (
              <li key={i}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar