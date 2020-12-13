import React from 'react'

const GalleryImg = ({ post }) => {
    return (
        <>
            <img 
            key={post.node.id}
            className='gallery-img'
            src={post.node.thumbnail_src}
            alt={post.node.accessibility_caption}
            />
        </>
    )
}

export default GalleryImg
