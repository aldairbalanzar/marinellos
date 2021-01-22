import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [feed, setFeed] = useState([]);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const fetchInstagramJSON = () => {
    axios.get(`https://www.instagram.com/marinellosbeautysalon/?__a=1`)
    .then(res => {
      // console.log('response: ', res)
      
      if(res.data.graphql) {
        setFeed([...res.data.graphql.user.edge_owner_to_timeline_media.edges.slice(0,8)])
      }
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
      handleNav={handleNav}
      />
      <Home 
      feed={feed}
      />
      <Contact />
      <Services />
      <Gallery
      feed={feed}
      />
      <Footer />
    </div>
  );
}

export default App;
