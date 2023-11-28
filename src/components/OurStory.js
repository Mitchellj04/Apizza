import React from 'react'
import SubHeading from './SubHeading'
import images from '../constants/images'
import './OurStory.css'

const OurStory = () => {
  return (
    <div className='app__ourStory app__bg flex__section section__padding'>
      
      <div className='app__ourStory-title'>
        <SubHeading />
        <h1 className="headtext__cormorant">Our Story</h1>
      </div>

      <div className='app__ourStory-img'>
        <img src={images.start}/>
        <img src={images.homemade}/>
      </div>

      <div className='app__ourStory-content'>
        <div className='app__ourStory-content_aboutText'>
        <p className="p__cormorant">
              Our story starts back in the 2000s as kids we would religiously have pizza every Friday of the month.
              We even centered what we were doing that night around having pizza. Over the years we would go from ordering pizza to making it at home. 
              To eventually installing an outdoor pizza oven at our house. The pizza oven allowed our family to perfect a process of making pizza one pie at a time. 
        </p>
        </div>

        <div className='app__ourStory-img2'>
          <img src='' />
        </div>

        <div className='app__ourStory-content_aboutText'>
        <p className="p__cormorant">
        
        </p>
        </div>

      </div>
    </div>
  )
}

export default OurStory