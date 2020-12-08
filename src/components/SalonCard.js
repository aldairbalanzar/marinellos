import React from 'react';
import temp_img from '../assets/location_1.jpg';

const SalonCard = () => {
    return (
        <div className='salon-card'>
            <img
            className='location-img'
            src={temp_img}
            alt='marinellos location'/>
            <div className="salon-data-container">
                <div className="data-container">
                    <i class="fas fa-store-alt"></i>
                    <p className='salon-data'>NAME</p>
                </div>
                <div className="data-container">
                    <i class="fas fa-location-arrow"></i>
                    <p className='salon-data'>LOCATION</p>
                </div>
               <div className="data-container">
                    <i class="fas fa-phone"></i>
                    <p className='salon-data'>NUMBER</p>
               </div>
            </div>
        </div>
    )
}

export default SalonCard
