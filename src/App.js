import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Gallery from './components/Gallery';
import './App.css';

function App() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [width, setWidth] = useState(window.screen.width);
  const [feed, setFeed] = useState([])

  const handleNav = () => {
      setIsNavOpen(!isNavOpen);
  };

  const fetchInstagramAccessToken = () => {
    axios.get(`https://api.instagram.com/oauth/authorize
    ?client_id=${process.env.APP_ID}
    &redirect_uri=${process.env.REDIRECT_URI}
    &scope=user_profile,user_media
    &response_type=code`)
    .then( res => {
      console.log('response: ', res)
    })
  }

  useEffect(() => {
    // handleInstagramFeed()
    fetchInstagramAccessToken()
  }, []);

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
