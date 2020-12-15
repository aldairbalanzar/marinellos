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
  const [feed, setFeed] = useState([]);

  const handleNav = () => {
      setIsNavOpen(!isNavOpen);
  };

  const fetchInstagramJSON = () => {
    axios.get(`https://www.instagram.com/marinellosbeautysalon/?__a=1`)
    .then(res => {
      setFeed([...res.data.graphql.user.edge_owner_to_timeline_media.edges.slice(0,8)])
    })
    .catch(err => {
      console.log('err: ', err)
    })
  }

  useEffect(() => {
    fetchInstagramJSON()
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
      <Contact 
      width={width}
      />
      <Services
      width={width} 
      />
      <Gallery
      width={width}
      feed={feed}/>
    </div>
  );
}

export default App;
