import React, {useState} from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {Link} from "react-scroll";
import Language from "../Language/Language";
import {useTranslation} from "react-i18next";
import './MobileHeader.css';

const MobileHeader = () => {
    const {t} = useTranslation();
    const [menu, setMenu] = useState(false);

    return (
            <div className='mobile-menu'>
                <div className="hamburger" onClick={() => setMenu(!menu)}>
                    <div className="line"><GiHamburgerMenu/></div>
                </div>

                <ul className={`nav-links  ${menu ? "open" : ""}`} style={{overflowY:'hidden'}}>
                    <li className='home-li'><Link to="home" smooth={true} duration={1000} onClick={() => setMenu(!menu)}>{t('Navbar.1')}</Link></li>
                    <li><Link to="about" smooth={true} duration={1000} onClick={() => setMenu(!menu)}>{t('Navbar.2')}</Link></li>
                    <li><Link to="portfolio" smooth={true} duration={1000} onClick={() => setMenu(!menu)}>{t('Navbar.3')}</Link></li>
                    <li><Link to="skills" smooth={true} duration={1000} onClick={() => setMenu(!menu)}>{t('Navbar.4')}</Link></li>
                    <li><Link to="services" smooth={true} duration={1000} onClick={() => setMenu(!menu)}>{t('Navbar.5')}</Link></li>
                    <Language/>
                </ul>
            </div>
    );
};

export default MobileHeader;
