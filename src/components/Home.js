import React from 'react'
import wavy_hair from '../assets/wavy_hair.jpg'
import { Link } from 'react-scroll';

const Home = ({width}) => {
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
                    <button className='social-media-btn'><i className='fab fa-facebook-square social-media-icon'></i></button>
                    <button className='social-media-btn'><i className='fab fa-instagram-square social-media-icon'></i></button>
                </div>
            </section>

            {width > 764 &&
                <section className='instagram-feed'>
                    <img 
                    src={wavy_hair}
                    alt='girl with blonde hair tilting her head'
                    className='instagram-img'
                    />
                </section>
            }
        </main>
    )
}

export default Home
