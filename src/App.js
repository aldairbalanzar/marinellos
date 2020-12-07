import React, { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Gallery from './components/Gallery';
import './App.css';

function App() {

  const [isNavOpen, setIsNavOpen] = useState(false);
    const [width, setWidth] = useState(window.screen.width);

    const handleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

  return (
    <div className="App">
      <Nav 
      isNavOpen={isNavOpen} 
      setIsNavOpen={setIsNavOpen} 
      width={width} 
      setWidth={setWidth} 
      handleNav={handleNav}
      />
      <Home 
      width={width}
      />
      <Contact />
      <Services
      width={width} 
      />
      <Gallery />
    </div>
  );
}

export default App;
