import React from 'react'
import { useNavigate } from 'react-router-dom';
import './sidebar.css';
import { BiHomeSmile, BiShoppingBag, BiLogOutCircle } from 'react-icons/bi';
import { GrContact } from 'react-icons/gr';
import { FcAbout } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user/UserSlice';


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
  }
]

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
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
              <li key={i} onClick={() => navigate(item.path)}>
                <span className='sidebar--icons'>
                  {item.icon}
                </span>
                <span>
                  {item.name}
                </span>
              </li>
            ))}
            <li onClick={() => dispatch(login(false))}>
              <span className='sidebar--icons'>
                <BiLogOutCircle />
              </span>
              <span>
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar