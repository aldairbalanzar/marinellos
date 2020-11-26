import React from 'react'

const Nav = () => {
    return (
        <nav className='navigator'>
            <div className="logo-container">
                <h3 className="header">Marinellos</h3>
                <h4 className="sub-header">Beauty Salon</h4>
            </div>
            <div className='links-container'>
                <li className='link'>Home</li>
                <li className='link'>Contacto </li>
                <li className='link'>Servicios</li>
                <li className='link'>Galer&iacute;a</li>
            </div>
        </nav>
    )
}

export default Nav;
