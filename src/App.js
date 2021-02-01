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
    let id;

    axios.get('https://www.instagram.com/web/search/topsearch/?context=blended&query=marinellosbeautysalon')
    .then(res => {
      id = res.data.users[0].user.pk;

      axios.get(`https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${id}","first":${8},"after":null}`)
      .then(res => {
        // console.log('res: ', res.data.data)
        setFeed([...res.data.data.user.edge_owner_to_timeline_media.edges])
      })
      .catch(err => console.log('err: ', err));
    })
    .catch(err => console.log('err: ', err));
  };

  useEffect(() => {
    fetchInstagramJSON();
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
