import React from 'react'
import './About.css'
import images from '../../constants/images'


const About = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id={'about'}>
      <div className='app__aboutus-overlay flex__center'>
          <img></img>
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <p>Family owned and run</p>
          <button className='custom__button'>Learn More</button>
        </div>
        <div className='app__wrapper_img'>
          <img src={images.peel}/>
        </div>
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>History</h1>
          <p>Family owned and run</p>
          <button className='custom__button'>Learn More</button>
        </div>
      </div>

    </div>
  )
}

export default About