import React from 'react'
import images from "../../constants/images";
import data from "../../constants/data";
import SubHeading from "../SubHeading";
import MenuItem from "../MenuItem/MenuItem";
import PizzaItem from '../MenuItem/PizzaItem';
import './Menu.css'

const Menu = () => {

  const meats = ['Bacon', 'Meatball', 'Chicken', 'Sausage', 'Pepporoni', 'Prescuto']
  const cheese = ['Extra', 'Buff Mozzerella', 'Feta', 'Goat']
  const veggies = ['Olives', 'Broccoli', 'Onion', 'Peppers', 'Mushrooms', 'Eggplant', 'Tomato']

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

 const mapMeat = () => {
  return meats.map((meat) => {
    return <p className='p__opensans' style={{color: '#AAA'}}>{meat} |</p>
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

        <div className="app__specialMenu-menu-toppings">
          <h4 className="app__specialMenu-heading">Toppings</h4>
          <div className='app__menuitem'>
            <p className='p__cormorant' style={{color: '#DCCA87'}}>Meat</p>
          <div className='app__menuitem-dash-topping'></div>
           <p className='p__cormorant'>Sm $2  Md $3  Lg $4</p> 
           <p className='p__opensans' style={{color: '#AAA'}}>Bacon | Meatball | Chicken | Sausage | Pepporoni | Prescuto</p>
          </div>

          <div className='app__menuitem'>
          <p className='p__cormorant' style={{color: '#DCCA87'}}>Cheese</p>
          <div className='app__menuitem-dash-topping'></div>
           <p className='p__cormorant'>Sm $2  Md $3  Lg $4</p> 
           <p className='p__opensans' style={{color: '#AAA'}}>Extra | Buff Mozzerella | Feta | Goat</p>
          </div>

          <div className='app__menuitem'>
          <p className='p__cormorant' style={{color: '#DCCA87'}}>Vegetables</p>
          <div className='app__menuitem-dash-topping'></div>
           <p className='p__cormorant'>Sm $2  Md $3  Lg $4</p> 
           <p className='p__opensans' style={{color: '#AAA'}}>Olives | Broccoli | Onion | Peppers | Mushrooms | Eggplant | Tomato</p>
          </div>
          

          <div className="app__menuitem-img">
            <img src={images.pizza}/>
          </div>
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