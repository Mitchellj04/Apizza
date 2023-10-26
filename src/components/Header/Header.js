import React from 'react'
import images from '../../constants/images'
import SubHeading from '../SubHeading'
import './Header.css'

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
        <div className='app__wrapper_info'>
            <SubHeading title={"Authenitcly Italian"}/>
            <h1 className='app__header-h1'>The Best Brickover Pizza You Will Try</h1>
            <p className='p__opensans'>Made from the freshest ingredients imported directly from Italy to your plate. Cooked to perfection with the best wood in the east coast on imported bricks from Sicily.</p>
        </div>
        <div className='app__wrapper_img'>
            <img src={images.brickoven}/>
        </div>
    </div>
  )
}

export default Header