import React, { useState, useEffect, useRef } from 'react'
import wavy_hair from '../assets/wavy_hair.jpg'
import blowout from '../assets/blowout_hair.jpg';
import child_cut from '../assets/child_cut_1.jpg';
import { Link } from 'react-scroll';

const Home = ({ feed }) => {
    const images = [wavy_hair, blowout, child_cut];

    const useInterval = (callback, delay) => {

        const savedCallback = useRef();
      
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          let id = setInterval(() => {
            savedCallback.current();
          }, delay);
          return () => clearInterval(id);
        }, [delay]);
    };

    const [counter, setCounter] = useState(0);

    useInterval(() => {
        if(feed[0]) {
            if(counter === feed.length - 1) {
                setCounter(0)
            } else {
                setCounter(counter + 1);
            }
        } else {
            if(counter === images.length - 1) {
                setCounter(0)
            } else {
                setCounter(counter + 1);
            }
        }
    }, 2800);

    return (
        <main className='home' id='home'>
            <header className='logo'>
                <h1 className='title'>Marinellos</h1>
                <h2 className='sub-title'>Beauty Salon</h2>
            </header>

            <section className="about-us-section">
                <h3 className='about-us-title'>&#191;Quienes Somos?</h3>
                <div className='about-us-content-container'>
                    <p className='about-us-content'>Somos estilistas especializados en estilos para damas, caballeros, y niños.</p>
                    <p className='about-us-content'>Visite una de nuestras tres ubicaciones hoy y descubra su nuevo look.</p>
                </div>
                <div className="button-container">
                    <Link to='contact' smooth={true} duration={500}><button className="about-us-btn">LLAME AHORA</button></Link>
                </div>
                <div className="social-media-container">
                    <button className='social-media-btn'>
                        <i className='fab fa-facebook-square social-media-icon'></i>
                    </button>
                    <button className='social-media-btn'>
                        <a href="https://www.instagram.com/marinellosbeautysalon/">
                            <i className='fab fa-instagram-square social-media-icon'></i>
                        </a>
                    </button>
                </div>
            </section>

            <section className='instagram-feed'>
                <img 
                src={feed[0] ? feed[counter].node.thumbnail_src : images[counter]}
                alt='girl with blonde hair tilting her head'
                className='instagram-img'
                />
            </section>
        </main>
    )
}

export default Home
