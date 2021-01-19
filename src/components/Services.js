import React from 'react';
import purple_hair from '../assets/purple_hair.jpg';
import child_cut from '../assets/child_cut_1.jpg';
import blowout_hair from '../assets/blowout_hair.jpg';
import curly_hair from '../assets/curly_hair.jpg';

const Services = () => {
    return (
        <section className='services-section' id='services'>
            <header className='services-header'>
                <h1 className="services-title">SERVICIOS</h1>
            </header>
            
            <div className="services-container">
                <div className='images-container'>
                    <img className='service-img' src={purple_hair} alt=""/>
                    <img className='service-img' src={child_cut} alt=""/>
                    <img className='service-img' src={curly_hair} alt=""/>
                    <img className='service-img' src={blowout_hair} alt=""/>
                </div>

                <div className='text-container'>
                    <p className='statement'>Nosotros hacemos cortes para damas, caballeros, y ni&ntilde;os, tambi&eacute;n nos especializamos en tintes, enlacies, lavados de cabello, arregle de cejas, barba, y m&aacute;s</p>
                    <ul className="list">
                        <li className="service">Tintes</li>
                        <li className="service">Cortes para damas</li>
                        <li className="service">Cortes para caballeros</li>
                        <li className="service">Cortes para ni&ntilde;os</li>
                        <li className="service">Enlacie de cabello</li>
                        <li className="service">Lavado de cabello</li>
                    </ul>
                </div>

                <div className='text-container-mobile'>
                    <img className='service-img' src={purple_hair} alt='girl with purple hair'/>
                    <p className='statement'>Nosotros hacemos cortes para damas, caballeros, y ni&ntilde;os. Tambi&eacute;n, nos especializamos en tintes, enlacies, lavados de cabello, arregle de cejas, barba, y m&aacute;s.</p>
                    <img className='service-img' src={blowout_hair} alt='guy with blowout haircut'/>
                    <ul className="list">
                        <li className="service">Tintes de cabello</li>
                        <li className="service">Cortes para damas</li>
                        <li className="service">Cortes para caballeros</li>
                        <li className="service">Cortes para ni&ntilde;os</li>
                        <li className="service">Enlacie de cabello</li>
                        <li className="service">Lavado de cabello</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Services
