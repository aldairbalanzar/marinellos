import React, { useState } from 'react'
import salons from '../assets/salons';
import SalonCard from './SalonCard';

const Contact = ({ width }) => {
    const [salonNum, setSalonNum] = useState(0)

    const handleSalonNum = (action) => {
        if(action === 'plus') {
            salonNum === salons.length - 1
            ? setSalonNum(0)
            : setSalonNum(salonNum + 1) 
        }
        else if(action === 'minus') {
            salonNum === 0
            ? setSalonNum(salons.length - 1)
            : setSalonNum(salonNum - 1)
        } else {
            return
        }
    };

    return (
        <section className='contact-section' id='contact'>
            <header className='contact-header'>
                <h1 className='contact-title'>CONTACTO</h1>
            </header>
            {width > 764
            ?
            <div className="cards-container">
                {salons.map(salon => {
                    return(
                        <SalonCard salon={salon}/>
                    )
                })}
            </div>
            :
            <div className="cards-container">
                <SalonCard salon={salons[salonNum]}/>
                <div className="arrows-container">
                    <button className='arrow-btn' onClick={() => {handleSalonNum('minus')}}>
                        <i className='fas fa-less-than'></i>
                    </button>
                    <p className='img-position'>{salonNum + 1} / {salons.length}</p>
                    <button className='arrow-btn' onClick={() => {handleSalonNum('plus')}}>
                        <i className='fas fa-greater-than'></i>
                    </button>
                </div>
            </div>
            }
        </section>
    )
}

export default Contact
