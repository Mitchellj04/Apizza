import React from "react";
import SubHeading from "../SubHeading";
import images from "../../constants/images";
import "./Brewery.css";

const Brewery = () => {

  return (
    <div className="app__menuBrewery app__bg flex__section section__padding">
      <div className="app__menuBrewery-title">
        <SubHeading />
        <h1 className="headtext__cormorant">Welcome to our Brewery</h1>
      </div>
      <div className="app__menuBrewery_image-brew">
        <img src={images.brewery} />
      </div>
      <div className="app__menuBrewery_content">

        <div className="app__menuBrewery_content-title">
          <SubHeading title={"Our Story"} />
          <h1 className="headtext__cormorant">About Us</h1>
        </div>

        <div className="app__menuBrewery_content-about">
          <div className="app__menuBrewery_content-aboutText">
            <p className="p__cormorant">
              We have been crafting our signature beer for over 5 years which
              started out as a home hobby for our founders. Over the years they
              have perfected the balance of flavors to perfectly match any
              pallet.
            </p>
          </div>
          <div className="app__menuBrewery_content-aboutImg">
            <img src={images.brewerykegs} />
          </div>
        </div>

        <div className="app__menuBrewery_content-about">          
        <div className="app__menuBrewery_content-aboutImg">
            <img src={images.brewing} />
          </div>
        <div className="app__menuBrewery_content-aboutText">
            <p className="p__cormorant">
              We have been crafting our signature beer for over 5 years which
              started out as a home hobby for our founders. Over the years they
              have perfected the balance of flavors to perfectly match any
              pallet.
            </p>
          </div>
        </div>

        <div className="app__menuBrewery_content-about">
          <div className="app__menuBrewery_content-aboutText">
            <p className="p__cormorant">
            With a variety of beers from light lagers to dark stouts you will 
              find the perfect beer to match your pallet to go with the amazing pizza servered. 
              We are consistantly adding new beers to our menu so always check in on the latest on tap.
            </p>
          </div>
          <div className="app__menuBrewery_content-aboutImg">
            <img src={images.taps} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Brewery;
