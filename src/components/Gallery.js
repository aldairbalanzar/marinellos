import React from 'react';
import moustache from '../assets/moustache.jpg';

const Gallery = () => {
    return (
        <section className='gallery-section' id='gallery'>
            <header className='gallery-header'>
                <h1 className='gallery-title'>GALER&Iacute;A</h1>
            </header>
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