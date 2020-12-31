import React, {useState} from 'react';
import './Header.css';
import {Link} from "react-scroll";
import 'aos/dist/aos.css';
import {CgMenuHotdog} from "react-icons/all";

const Header = () => {

    const [showMenu, setShowMenu] = useState(true);

    return (
        <>
            <header className='nav-header' data-aos="fade-down">
                <div className="header-container">
                    <div className="row">
                        <div className="brand-name">
                            <Link to="/">Akmal</Link>
                        </div>
                        <div className="navbar">
                            <ul>
                                <li className='home-li'>Home</li>
                                <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
                                <li><Link to="services" smooth={true} duration={1000}>Services</Link></li>
                                <li><Link to="portfolio" smooth={true} duration={1000}>Portfolio</Link></li>
                                <li><Link to="skills" smooth={true} duration={1000}>Skills</Link></li>
                                <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <div className='menu-wrapper'>
                <div className="hamburger">
                    <div className='menuIcon' onClick={() => setShowMenu(!showMenu)}><CgMenuHotdog/></div>
                </div>
                {showMenu ?
                    <div className="hamburger-menu">
                        <ul>
                            <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
                            <li><Link to="services" smooth={true} duration={1000}>Services</Link></li>
                            <li><Link to="portfolio" smooth={true} duration={1000}>Portfolio</Link></li>
                            <li><Link to="skills" smooth={true} duration={1000}>Skills</Link></li>
                            <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
                        </ul>
                    </div>
                    : null}
            </div>

        </>
    );
};

export default Header;