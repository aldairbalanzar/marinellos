import React from 'react';
import GalleryImg from './GalleryImg';
import MobileGallery from './MobileGallery';
import placeholderImg from '../assets/wavy_hair.jpg'

const Gallery = ({ width, feed }) => {
    console.log('feed: ', feed)

    return (
        <section className='gallery-section' id='gallery'>
            <header className='gallery-header'>
                <h1 className='gallery-title'>GALER&Iacute;A</h1>
            </header>

            {width > 764
            ? 
            <div className='image-container'>
                {
                feed.length > 0
                ?
                feed.map((post, i) => {
                    console.log('mobile')
                    return(
                    <GalleryImg 
                    key={i}
                    post={post} 
                    placeholderImg={placeholderImg}
                    />
                    )
                })
                :
                <>
                <img src={placeholderImg} alt="placeholder" className='gallery-img'/>
                <img src={placeholderImg} alt="placeholder" className='gallery-img'/>
                <img src={placeholderImg} alt="placeholder" className='gallery-img'/>
                </>
                }
            </div>
            :
            <MobileGallery
            feed={feed}
            placeholderImg={placeholderImg}
            />
            }

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
