import React from 'react';
import temp_img from '../assets/location_1.jpg';

const SalonCard = () => {
    return (
        <div className='salon-card'>
            <img
            className='location-img'
            src={temp_img}
            alt='marinellos location'/>
            <div className="info-container">
                <p className='salon-info'>NAME</p>
                <p className='salon-info'>LOCATION</p>
                <p className='salon-info'>NUMBER</p>
            </div>
        </div>
    )
}

export default SalonCard
