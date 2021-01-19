import React from 'react';
import blowout from '../assets/blowout_hair.jpg';
import child_cut from '../assets/child_cut_1.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const MobileGallery = ({ feed, placeholderImg }) => {
    return (
        feed.length > 0
        ?
        <Carousel showThumbs={false}>
            {feed.map((post, i) => (
                <div key={i}>
                    <img src={post.node.thumbnail_src} alt={post.node.accessibility_caption}/>
                </div>
            ))}
        </Carousel>
        :
        <Carousel showThumbs={false}>
            <div><img className='gallery-img' src={placeholderImg} alt='placeholder'/></div>
            <div><img className='gallery-img' src={blowout} alt='placeholder'/></div>
            <div><img className='gallery-img' src={child_cut} alt='placeholder'/></div>
        </Carousel>
    )
}

export default MobileGallery
