import React from 'react'
import About from './components/About/About';
import Drinks from './components/SpecialMenu/Drinks';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';


const Home = () => {
  return (
    <div className='App'>

      <Header />

      <About />
      <Drinks />
      <Menu />
    </div>
  )
}

export default Home