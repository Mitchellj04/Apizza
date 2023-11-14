import React from 'react'
import images from "../../constants/images";
import data from "../../constants/data";
import SubHeading from "../SubHeading";
import MenuItem from "../MenuItem/MenuItem";
import PizzaItem from '../MenuItem/PizzaItem';

const Menu = () => {

 const mapClassic = () => {
    return data.pizza.map((pie, index) => {
        return <PizzaItem 
        key={pie.title + index}
        title={pie.title}
        small={pie.small}
        medium={pie.medium}
        large={pie.large}
        tags={pie.tags}/>
    })
 }

 const mapToppings = () => {
    return data.toppings.map((topping) => {
        return <PizzaItem 
        key={topping.title}
        title={topping.title}
        small={topping.small}
        medium={topping.medium}
        large={topping.large}
        tags={topping.tags}/>
    })
 }

 const mapSpecialty = () => {
    return data.specialty.map((pie, index) => {
        return <PizzaItem 
        key={pie.title + index}
        title={pie.title}
        small={pie.small}
        medium={pie.medium}
        large={pie.large}
        tags={pie.tags}/>
    })
 }

  return (
    <div className="app__specialMenu app__bg flex__section section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading />
        <h1 className="headtext__cormorant">Brick Oven Pizza's</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_classic">
          <h4 className="app__specialMenu-heading">Classic Pies</h4>
          <div className="app__specialMenu-menu_item">{mapClassic()}</div>
        </div>

        <div className="app__specialMenu-menu_toppings">
          <h4 className="app__specialMenu-heading">Toppings</h4>
          
          <div className="app__specialMenu-menu_item">{mapToppings()}</div>
        </div>

        <div className="app__specialMenu-menu_specialty">
          <p className="app__specialMenu-heading">Specialty Pies</p>
          <div className="app__specialMenu-menu_item">{mapSpecialty()}</div>
        </div>
      </div>
      <div style={{ margin: "15px" }}>
        <button className="custom__button" onClick={() => {}}>Order Online</button>
      </div>
    </div>
  )
}

export default Menu