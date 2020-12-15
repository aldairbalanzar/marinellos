import React from 'react'
import wavy_hair from '../assets/wavy_hair.jpg'

const GalleryImg = ({ post }) => {
    return (
        <>
            <img 
            className='gallery-img'
            src={post.thumbnail_src || wavy_hair}
            alt={post.accessibility_caption || 'placeholder'}
            />
        </>
    )
}

export default GalleryImg
