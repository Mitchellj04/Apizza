import './App.css';
import About from './components/About/About';
import Brewery from './components/Brewery/Brewer';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Brewery />
    </div>
  );
}

export default App;
