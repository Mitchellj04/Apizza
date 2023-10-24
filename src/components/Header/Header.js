import React from 'react'
import {images} from "../../constants/images"

const Header = () => {
  return (
    <div className='app_header app_wrapper section__padding' id='home'>
        <div className='app_wrapper_info'>
            <SubHeading />
            <h1 className='app__header-h1'>The Best Brickover Pizza You Will Try</h1>
        </div>
        <div className='app__wrapper_img'>
            <img src={images.brickoven}/>
        </div>
    </div>
  )
}

export default Header