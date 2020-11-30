import React from 'react'
import wavy_hair from '../assets/wavy_hair.jpg'

const Home = () => {
    return (
        <main className='home' id='home'>
            <header className='logo'>
                <h1 className='title'>Marinellos</h1>
                <h2 className='sub-title'>Beauty Salon</h2>
            </header>

            <section className="about-us">
                <h3 className='about-us-title'>&#191;Quienes Somos?</h3>
                <div className='about-us-content-container'>
                    <p className='about-us-content'>Somos estilistas especializados en estilos para damas, caballeros, y niños.</p>
                    <p className='about-us-content'>Visite una de nuestras tres ubicaciones hoy y descubra su nuevo look.</p>
                </div>
                <div className="button-container">
                    <button className="about-us-btn">LLAMA AHORA</button>
                </div>
                <div className="social-media-container">
                    <a href="#"><i class='fab fa-facebook-square social-media-icon'></i></a>
                    <a href="#"><i class='fab fa-instagram-square social-media-icon'></i></a>
                </div>
            </section>

            <section className='instagram-feed'>
                <img 
                src={wavy_hair}
                alt='girl with blonde hair tilting her head'
                className='instagram-img'
                />
            </section>
        </main>
    )
}

export default Home
