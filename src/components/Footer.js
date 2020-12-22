import React from 'react'

const Footer = () => {
    return (
        <footer className='footer-section'>
            <p className="copyright-statement">
                    &#169; Marinellos Beauty Salon 2020 | All Rights Reserved.
            </p>
            <div className="footer-social-links">
                <h3 className="social-footer-header">Redes Sociales</h3>
                <button className='footer-social-media-btn'>
                    <i className='footer-social-icon fab fa-facebook-square social-media-icon'></i>
                </button>
                <button className='footer-social-media-btn'>
                    <a href="https://www.instagram.com/marinellosbeautysalon/">
                        <i className='footer-social-icon fab fa-instagram-square social-media-icon'></i>
                    </a>
                </button>
            </div>
        </footer>
    )
}

export default Footer
