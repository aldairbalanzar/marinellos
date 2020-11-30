import React from 'react'
import SalonCard from './SalonCard';

const Contact = () => {
    return (
        <section className='contact-section' id='contact'>
            <header className='contact-header'>
                <h1 className='contact-title'>CONTACTO</h1>
            </header>
            <div className="cards-container">
                <SalonCard />
                <SalonCard />
                <SalonCard />
            </div>
        </section>
    )
}

export default Contact
