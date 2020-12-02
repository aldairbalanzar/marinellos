import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Nav = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [width, setWidth] = useState(window.screen.width);

    const handleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.screen.width));
    }, []);

    return (
        <nav className={`navigator ${isNavOpen && 'nav-open'}`}>
            {width > 1024
            ?<>
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
             </>
             :<>
                <div className={`${isNavOpen ? 'icon-container-open' : 'icon-container'}`}>
                    <i className={`hamburger-times ${isNavOpen ? 'fas fa-times' : 'fas fa-bars'}`}
                     onClick={handleNav}
                     > 
                     </i>
                </div>
                {isNavOpen &&
                <div className='links-container'>
                    <Link className='link' onClick={handleNav} to='home' smooth={true} duration={500}>Home</Link>
                    <Link className='link' onClick={handleNav} to='contact' smooth={true} duration={500}>Contacto </Link>
                    <Link className='link' onClick={handleNav} to='services' smooth={true} duration={500}>Servicios</Link>
                    <Link className='link' onClick={handleNav} to='gallery' smooth={true} duration={500}>Galer&iacute;a</Link>
                </div>
                }
                
             </>
            }
        </nav>
    )
}

export default Nav;
