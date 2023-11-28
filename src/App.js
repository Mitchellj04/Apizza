import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './components/Navbar/Navbar';
import Brewery from './components/SpecialMenu/Brewery';
import Winery from './components/SpecialMenu/Winery';
import OurStory from './components/OurStory';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/brewery' element={<Brewery />}/>
        <Route path='/winery' element={<Winery />}/>
        <Route path='/about' element={<OurStory />}/>
      </Routes>
    </div>
  );
}

export default App;
