import React from 'react';
import GalleryImg from './GalleryImg';
import MyCarousel from './MyCarousel';
import placeholderImg from '../assets/wavy_hair.jpg';
import blowout from '../assets/blowout_hair.jpg';
import child_cut from '../assets/child_cut_1.jpg';

const Gallery = ({ width, feed }) => {
//     console.log('feed: ', feed)

    return (
        <section className='gallery-section' id='gallery'>
            <header className='gallery-header'>
                <h1 className='gallery-title'>GALER&Iacute;A</h1>
            </header>

            {/*DESKTOP & TABLET VIEW */}
            <div className='image-container'>
                {feed.length > 0
                ?
                feed.map((post, i) => (
                    <GalleryImg 
                    key={i}
                    post={post} 
                    placeholderImg={placeholderImg}
                    />
                ))
                :
                <>
                <img src={placeholderImg} alt="placeholder" className='gallery-img'/>
                <img src={blowout} alt="placeholder" className='gallery-img'/>
                <img src={child_cut} alt="placeholder" className='gallery-img'/>
                </>
                }
            </div>

            {/* // MOBILE VIEW */}
            <MyCarousel
            width={width}
            feed={feed}
            placeholderImg={placeholderImg}
            />

            <div className="instagram-container">
                <button className="instagram-link" >
                    <a className='instagram-link' href="https://www.instagram.com/marinellosbeautysalon/">
                    Siganos en Instagram <i className='fab fa-instagram'></i>
                    </a>
                </button>
            </div>
        </section>
    )
}

export default Gallery
