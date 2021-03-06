import React from 'react';
import { Link } from 'react-scroll';

const Nav = ({ isNavOpen, handleNav }) => {
    return (
        <nav className={`navigator ${isNavOpen && 'nav-open'}`}>

            <div className='logo-container'>
                <h3 className="main-logo">Marinellos</h3>
                <h4 className="sub-logo">Beauty Salon</h4>
            </div>
            <div className='links-container'>
                <Link className='link' to='home' smooth={true} duration={500}>Home</Link>
                <Link className='link' to='contact' smooth={true} duration={500}>Contacto </Link>
                <Link className='link' to='services' smooth={true} duration={500}>Servicios</Link>
                <Link className='link' to='gallery' smooth={true} duration={500}>Galer&iacute;a</Link>
            </div>

            <div className={`mobile-nav ${isNavOpen ? 'icon-container-open' : 'icon-container'}`}>
                <i 
                className={`hamburger-times ${isNavOpen ? 'fas fa-times' : 'fas fa-bars'}`}
                onClick={handleNav}
                > 
                </i>
            </div>
            {isNavOpen &&
            <div className='mobile-links-container'>
                <Link className='link' onClick={handleNav} to='home' smooth={true} duration={500}>Home</Link>
                <Link className='link' onClick={handleNav} to='contact' smooth={true} duration={500}>Contacto </Link>
                <Link className='link' onClick={handleNav} to='services' smooth={true} duration={500}>Servicios</Link>
                <Link className='link' onClick={handleNav} to='gallery' smooth={true} duration={500}>Galer&iacute;a</Link>
            </div>
            }
        </nav>
    )
}

export default Nav;
