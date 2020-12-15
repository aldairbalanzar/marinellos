import React from 'react'
import wavy_hair from '../assets/wavy_hair.jpg'

const GalleryImg = ({ post }) => {
    console.log('post: ', post)
    return (
        <>
            <img 
            className='gallery-img'
            src={post ? post.node.thumbnail_src : wavy_hair}
            alt={post ? post.node.accessibility_caption : 'placeholder'}
            />
        </>
    )
}

export default GalleryImg
