import React, { useState } from 'react';
import GalleryImg from './GalleryImg';

const Gallery = ({ width, feed }) => {
    console.log('feed: ', feed)
    const [postNum, setPostNum] = useState(0);

    const handlePostNum = (action) => {
        if(action === 'plus') {
            postNum === feed.length - 1
            ? setPostNum(0)
            : setPostNum(postNum + 1) 
        }
        else if(action === 'minus') {
            postNum === 0
            ? setPostNum(feed.length - 1)
            : setPostNum(postNum - 1)
        } else {
            return
        }
    }

    return (
        <section className='gallery-section' id='gallery'>
            <header className='gallery-header'>
                <h1 className='gallery-title'>GALER&Iacute;A</h1>
            </header>
            {width > 764
            ? 
            <div className='image-container'>
            {feed.map((post, i) => {
                return(
                <GalleryImg 
                key={post.node.id || i}
                post={post} 
                />
                )
            })}
            </div>
            :
            <>
            <div className='image-container'>
                <GalleryImg post={feed.length > 1 ? feed[postNum] : null} />
            </div>
            <div className="arrows-container">
                <button className='arrow-btn' onClick={() => {handlePostNum('minus')}}>
                    <i className='fas fa-less-than'></i>
                </button>
                <p className='img-position'>
                {feed.length > 0
                ?
                `${postNum + 1} / ${feed.length}`
                :
                '1/1'
                }
                </p>
                <button className='arrow-btn' onClick={() => {handlePostNum('plus')}}>
                    <i className='fas fa-greater-than'></i>
                </button>
            </div>
            </>
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
