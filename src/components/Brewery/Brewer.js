import React from "react";
import images from "../../constants/images";
import data from "../../constants/data";
import SubHeading from "../SubHeading";
import MenuItem from "../MenuItem/MenuItem";
import "./Brewer.css";

const Brewery = () => {
  const mapWines = () => {
    return data.wines.map((wine, index) => {
      return (
        <MenuItem
          key={wine.title + index}
          title={wine.title}
          price={wine.price}
          tags={wine.tags}
        />
      );
    });
  };

  const mapBeers = () => {
    return data.beers.map((beer, index) => {
      return (
        <MenuItem
          key={beer.title + index}
          title={beer.title}
          price={beer.price}
          tags={beer.tags}
        />
      );
    });
  };

  return (
    <div className="app__specialMenu app__bg flex__section section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading />
        <h1 className="headtext__cormorant">Brewery and Winery Favorites</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine">
          <h4 className="app__specialMenu-heading">Winery</h4>
          <div className="app__specialMenu-menu_item">{mapWines()}</div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.beerglass} alt="menu_img" />
        </div>

        <div className="app__specialMenu-menu_beer">
          <p className="app__specialMenu-heading">Brewery</p>
          <div className="app__specialMenu-menu_item">{mapBeers()}</div>
        </div>
      </div>
      <div style={{ margin: "15px" }}>
        <button className="custom__button">Read More</button>
      </div>
    </div>
  );
};

export default Brewery;
