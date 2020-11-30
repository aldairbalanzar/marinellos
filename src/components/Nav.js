import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <nav className='navigator'>
            <div className="logo-container">
                <h3 className="main-logo">Marinellos</h3>
                <h4 className="sub-logo">Beauty Salon</h4>
            </div>
            <div className='links-container'>
                <Link className='link' to='home' smooth={true} duration={500}>Home</Link>
                <Link className='link' to='contact' smooth={true} duration={500}>Contacto </Link>
                <Link className='link' to='services' smooth={true} duration={500}>Servicios</Link>
                <Link className='link' to='gallery' smooth={true} duration={500}>Galer&iacute;a</Link>
            </div>
        </nav>
    )
}

export default Nav;
