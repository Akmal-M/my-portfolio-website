import React from 'react';
import './Header.css';
import {Link} from "react-scroll";
import 'aos/dist/aos.css';

const Header = () => {

    return (
        <>
            <header className='nav-header' data-aos="fade-down" id='home'>
                <div className="header-container">
                    <div className="row">
                        <div className="brand-name">
                            <Link to="/">Portfolio</Link>
                        </div>
                        <div className="navbar">
                            <ul>
                                <li className='home-li'>Home</li>
                                <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
                                <li><Link to="portfolio" smooth={true} duration={1000}>Portfolio</Link></li>
                                <li><Link to="skills" smooth={true} duration={1000}>Skills</Link></li>
                                <li><Link to="services" smooth={true} duration={1000}>Services</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;