import React from 'react'
import SubHeading from "../SubHeading";
import images from "../../constants/images";
import './Winery.css'

const Winery = () => {
    return (
    <div className="app__menuWinery app__bg flex__section section__padding">
      <div className="app__menuWinery-title">
        <SubHeading />
        <h1 className="headtext__cormorant">Welcome to our Vineyard</h1>
      </div>
      
      <div className="app__menuWinery_image-vineyard">
        <img src={images.winery} />
      </div>

      <div className="app__menuWinery_content">

        <div className="app__menuWinery_content-title">
          <SubHeading title={"Our Story"} />
          <h1 className="headtext__cormorant">About Us</h1>
        </div>

        <div className="app__menuWinery_content-about">
          <div className="app__menuWinery_content-aboutText">
            <p className='p__cormorant'>
              Our vineyard is situated in upstate New York in the Adirondack Mountains. We have over 40 acres of prestine vineyard land. 
              Creating some of the best grapes that you can grow in the east coast. Our grapes are sustainable produced and are completely organic. 
              The high mountain altitude creates a unique taste from the grapes cultivated on our land.
            </p>
          </div>
          <div className="app__menuWinery_content-aboutImg">
            <img src={images.vineyard} />
          </div>
        </div>

        <div className="app__menuWinery_content-about">          
        <div className="app__menuWinery_content-aboutImg">
            <img src={images.winemaking} />
          </div>
        <div className="app__menuWinery_content-aboutText">
            <p className='p__cormorant'>
              The story of Dunbar Hill Vineyard started back in Connecticut in the basement of my parents house. My dad and his dad started creating wine
              back in 2011 from start to end every year there would be a new wine that was fermenting in a carboy waiting to be bottled. Some came out great others 
              still needed to be perfected. Over the years the recipes were starting to be perfected to a point where we had to share it with the rest of the world. 
              Why move it to Upstate New York? Well the Adirondack's holds a special place in our families tradition and hearts so it was really the only option. 
            </p>
          </div>
        </div>

        <div className="app__menuWinery_content-about">
          <div className="app__menuWinery_content-aboutText">
            <p className='p__cormorant'>
              Our vineyard is situated in upstate New York in the Adirondack Mountains. We have over 40 acres of prestine vineyard land. 
              Creating some of the best grapes that you can grow in the east coast. Our grapes are sustainable produced and are completely organic. 
              The high mountain altitude creates a unique taste from the grapes cultivated on our land.
            </p>
          </div>
          <div className="app__menuWinery_content-aboutImg">
            <img src={images.winebarrels} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Winery