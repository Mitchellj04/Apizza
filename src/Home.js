import React from 'react'
import About from './components/About/About';
import Drinks from './components/SpecialMenu/Drinks';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer'


const Home = () => {
  return (
    <div className='App'>

      <Header />

      <About />
      <Drinks />
      <Menu />
      <Footer />
    </div>
  )
}

export default Home