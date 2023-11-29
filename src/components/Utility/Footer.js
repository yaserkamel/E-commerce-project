import React from 'react'
import { Container, Col ,Row} from "react-bootstrap";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import phone from "../../images/phone.png";
import footer_logo from '../../images/Assets/logo_big.png'
import instagram_icon from '../../images/Assets/instagram_icon.png'
import whatsapp_icon from '../../images/Assets/whatsapp_icon.png'
import pinterster_icon from '../../images/Assets/pintester_icon.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo} alt=''/>
                <p className='m-0'></p>
            </div>
            <ul className='footer-links'>
                <a href='/products'>
                    <li>Products</li>
                </a>
                <a href='/allCategory'>
                    <li>Categories</li>
                </a>
                <a href='/allbrand'>
                    <li>Brands</li>
                </a>
                <a href='/'>
                    <li>Contact</li>
                </a>
            </ul>
            <div className='footer-social-icon'>
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt='' />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterster_icon} alt='' />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt='' />
                </div>
            </div>
            <div className="footer-copyriht">
                <hr/>
                <p>Copyright © 2023 - Designed By Yaser Kamel & Mohammed Kashmar</p>
            </div>
        </div>
    )
}

export default Footer
