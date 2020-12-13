import React from 'react';
import GalleryImg from './GalleryImg';

const Gallery = ({ feed }) => {
    return (
        <section className='gallery-section' id='gallery'>
            <header className='gallery-header'>
                <h1 className='gallery-title'>GALER&Iacute;A</h1>
            </header>
            <div className='image-container'>
                {feed.map(post => {
                    return(
                        <GalleryImg post={post} />
                    )
                })}
            </div>
            <div className="instagram-container">
                <button className="instagram-link">
                    Siganos en Instagram <i className='fab fa-instagram'></i>
                </button>
            </div>
        </section>
    )
}

export default Gallery
