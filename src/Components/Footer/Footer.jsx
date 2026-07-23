import React from 'react'
import logo from '../../assets/logo.png'
import './Footer.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink, useNavigate } from 'react-router-dom';


const Footer = () => {

    const navigate = useNavigate();

    return (
        <div id='foot'>
            <div className='footer-div'>
                <div className='resort-info'>
                    <img src={logo} alt="" />
                    <p>Serenity Resort & Spa offers a unique blend of luxury, nature and comfort for a perfect escape.</p>
                    <div className='s-link'>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-whatsapp"></i></a>
                    </div>
                </div>

                <div className='q-links'>
                    <ul className='q-ul'>
                        <p><b>Quick Links</b></p>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'about'}>About Us</NavLink>
                        <NavLink to={'rooms'}>Room & Suites</NavLink>
                        <NavLink to={'amenities'}>Amenities</NavLink>
                        <NavLink to={'gallery'}>Gallery</NavLink>
                        <NavLink to={'contact'}>Contact Us</NavLink>
                    </ul>
                </div>

                <div className='amenities-links'>
                        <ul>
                            <p><b>Amenities </b></p>
                            <li>Infinite Pool</li>
                            <li>Spa & Wellness</li>
                            <li>Restaurant</li>
                            <li>Bar & Lounge</li>
                            <li>Free Wi-Fi</li>
                            <li>Nature Walks</li>
                        </ul>
                </div>

                <div className='contact-info'>
                    <p><b>Contact Us</b></p>
                    <div className='contact-way'>
                        <i className="bi bi-telephone"></i>
                        <p>+1 234 567 8900</p>
                    </div>

                    <div className='contact-way'>
                        <i className="bi bi-envelope"></i>
                        <p>info@armoiaresort.com</p>
                    </div>

                    <div className='contact-way'>
                        <i className="bi bi-geo-alt"></i>
                        <p>123 Ocean Drive, Paradise Island Bail, Indonesia</p>
                    </div>

                    <button onClick={() => {navigate('rooms')}}>Book Your Stay <i className="bi bi-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Footer
