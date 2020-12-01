import React from 'react';
import moustache from '../assets/moustache.jpg';

const Gallery = () => {
    return (
        <section className='gallery-section'>
            <div className='image-container'>
                <img src={moustache} alt="" className="gallery-img"/>
                <img src={moustache} alt="" className="gallery-img"/>
                <img src={moustache} alt="" className="gallery-img"/>
                <img src={moustache} alt="" className="gallery-img"/>
                <img src={moustache} alt="" className="gallery-img"/>
                <img src={moustache} alt="" className="gallery-img"/>
                <img src={moustache} alt="" className="gallery-img"/>
                <img src={moustache} alt="" className="gallery-img"/>
            </div>
        </section>
    )
}

export default Gallery
