import React from 'react';
import temp_img from '../assets/location_1.jpg';

const SalonCard = ({salon}) => {
    return (
        <div className='salon-card'>
            <img
            className='location-img'
            src={temp_img}
            alt='marinellos location'/>
            <div className="salon-data-container">
                <div className="data-container">
                    <i className="fas fa-store-alt"></i>
                    <p className='salon-data'>{salon.city}</p>
                </div>
                <div className="data-container">
                    <i className="fas fa-location-arrow"></i>
                    <p className='salon-data'>{salon.address}</p>
                </div>
               <div className="data-container">
                    <i className="fas fa-phone"></i>
                    <p className='salon-data'>{salon.phone}</p>
               </div>
            </div>
        </div>
    )
}

export default SalonCard
