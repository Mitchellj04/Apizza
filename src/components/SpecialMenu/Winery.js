import React from 'react'
import SubHeading from "../SubHeading";
import images from "../../constants/images";

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
            <p>
              We have been crafting our signature beer for over 5 years which
              started out as a home hobby for our founders. Over the years they
              have perfected the balance of flavors to perfectly match any
              pallet.
            </p>
          </div>
          <div className="app__menuWinery_content-aboutImg">
            <img src={images.brewerykegs} />
          </div>
        </div>

        <div className="app__menuWinery_content-about">          
        
        <div className="app__menuWinery_content-aboutImg">
            <img src={images.brewing} />
          </div>
        <div className="app__menuWinery_content-aboutText">
            <p>
              We have been crafting our signature beer for over 5 years which
              started out as a home hobby for our founders. Over the years they
              have perfected the balance of flavors to perfectly match any
              pallet.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Winery