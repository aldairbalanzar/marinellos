import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Contact />
      <Services />
      <Gallery />
    </div>
  );
}

export default App;
