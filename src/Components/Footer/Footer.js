import React from 'react';
import {Link} from "react-scroll";
import './Footer.css';
import {FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp, FaLinkedinIn} from "react-icons/fa";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className='footer'>
            <div>
                <div className="footer-navbar">
                    <ul>
                        <li><Link to="home" smooth={true} duration={1000}>{t('Navbar.1')}</Link></li>
                        <li><Link to="about" smooth={true} duration={1000}>{t('Navbar.2')}</Link></li>
                        <li><Link to="portfolio" smooth={true} duration={1000}>{t('Navbar.3')}</Link></li>
                        <li><Link to="skills" smooth={true} duration={1000}>{t('Navbar.4')}</Link></li>
                        <li><Link to="services" smooth={true} duration={1000}>{t('Navbar.5')}</Link></li>
                    </ul>
                </div>
            </div>

            <div className='footer-ico'>
                <div className="footer-links" >
                    <a href="https://wa.me/998993017445" rel='noreferrer' target='_blank'><FaWhatsapp/> </a>
                    <a href="https://www.instagram.com/akmal___m/" rel='noreferrer' target='_blank'><FaInstagram/> </a>
                    <a href="https://t.me/akmalreact" rel='noreferrer' target='_blank'><FaTelegramPlane/> </a>
                    <a href="https://www.facebook.com/akmalreact/" rel='noreferrer' target='_blank'><FaFacebookF/> </a>
                    <a href="https://www.linkedin.com/in/akmal-m-a20b4b1ab/" rel='noreferrer' target='_blank'><FaLinkedinIn/> </a>
                </div>
            </div>

            <div className='footer-author'>
                <p>Akmal M 2021. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
