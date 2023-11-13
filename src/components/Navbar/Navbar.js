import React from 'react'
// import {GiHamburgerMenu} from 'react-icon/gi'
// import {MdOutlineRestaurantMenu} from 'react-icon/md'
import {useNavigate} from 'react-router-dom'
import images from '../../constants/images'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  return (   
    <div className='app__navbar app__bg'>
  <div className='app__navbar_logo'>
          <img src={images.logo_no_background}/>
        </div>
    <nav className='app__navbar'>

        <div className='app__navbar_menu'>
        <ul className='app__navbar_ul'>
          <li className='app__navbar_links' onClick={() => navigate('/')}><a href='#home'>Home</a></li>
          <li className='app__navbar_links'><a href='#menu'>Menu</a></li>
          <li className='app__navbar_links'><a href='#brews'>Brews</a></li>
          <li className='app__navbar_links'><a href='#about'>About</a></li>
          <li className='app__navbar_links'><a href='#contact'>Contact</a></li>
        </ul>
        </div>
    </nav>
    </div>
  
  )
}

export default Navbar