import React from 'react';
import './Header.css';
import {Link} from "react-scroll";
import 'aos/dist/aos.css';
import {useTranslation} from "react-i18next";
import Language from "../Language/Language";

const Header = () => {
    const {t} = useTranslation();


    return (
            <header className='nav-header'  id='home'>
                <div className="header-container">
                    <div className="row">
                        <div className="navbar">
                            <ul>
                                <li className='home-li'>{t('Navbar.1')}</li>
                                <li><Link to="about" smooth={true} duration={1000}>{t('Navbar.2')}</Link></li>
                                <li><Link to="portfolio" smooth={true} duration={1000}>{t('Navbar.3')}</Link></li>
                                <li><Link to="skills" smooth={true} duration={1000}>{t('Navbar.4')}</Link></li>
                                <li><Link to="services" smooth={true} duration={1000}>{t('Navbar.5')}</Link></li>
                            </ul>
                        </div>
                        <Language className='language'/>
                    </div>
                </div>
            </header>
    );
};

export default Header;