import React from 'react'
// import {GiHamburgerMenu} from 'react-icon/gi'
// import {MdOutlineRestaurantMenu} from 'react-icon/md'
import images from '../../constants/images'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='app_navbar'>
        <div className='app_navbar_logo'>
          <img src={images.logo_no_background}/>
        </div>
        <ul className='app_navbar_ul'>
          <li className='app_navbar_links'><a href='#home'>Home</a></li>
          <li className='app_navbar_links'><a href='#home'>Menu</a></li>
          <li className='app_navbar_links'><a href='#home'>Brews</a></li>
          <li className='app_navbar_links'><a href='#home'>About</a></li>
          <li className='app_navbar_links'><a href='#home'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar