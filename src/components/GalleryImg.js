import React from 'react'
import wavy_hair from '../assets/wavy_hair.jpg'

const GalleryImg = ({ post }) => {
    let { thumbnail_src, accessibility_caption } = post
    return (
        <>
            <img 
            className='gallery-img'
            src={thumbnail_src || wavy_hair}
            alt={accessibility_caption || 'placeholder'}
            />
        </>
    )
}

export default GalleryImg
