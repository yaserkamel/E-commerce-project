import React from 'react'
import prod3 from "../../images/slider/shopping-removebg.png";
import arrow from "../../images/Assets/arrow.png";
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Slider = () => {

    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <FontAwesomeIcon icon={faHandsClapping} size="2xl" style={{color: "#e4cb11"}} />
                    </div>
                    <p>collections</p>
                    <p>for every one</p>
                </div>
                <Link to='/products' style={{textDecoration: 'none',}}>
                    <div className='hero-latest-btn'>
                        <div>latest collection</div>   
                        <img src={arrow} alt='arrow'/>
                    </div>
                </Link>
            </div>
            <div className='hero-right'>
                <img src={prod3} alt=''/>
            </div>
        </div>
    )
}

export default Slider
