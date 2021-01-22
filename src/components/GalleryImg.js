import React from 'react'

const GalleryImg = ({ post, placeholderImg }) => {
    return (
        <>
            <img 
            className='gallery-img'
            src={post ? post.node.thumbnail_src : placeholderImg}
            alt={post ? post.node.accessibility_caption : 'placeholder'}
            />
        </>
    )
}

export default GalleryImg
