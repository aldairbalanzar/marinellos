import React from 'react'
import SalonCard from './SalonCard';

const Contact = () => {
    return (
        <section className='contact-section'>
            <h1 className='contact-title'>CONTACTO</h1>
            <div className="cards-container">
                <SalonCard />
                <SalonCard />
                <SalonCard />
            </div>
        </section>
    )
}

export default Contact
