import React from 'react';
import './Service.css';
import {
    AiOutlineFullscreen,
     GiDiamondHard,
    IoRocketOutline,
} from "react-icons/all";

const Service = () => {
    return (
        <div className='service' id='services'>
            <div className='service-card' data-aos="fade-left">
                <GiDiamondHard className='ico'/>
                <h1>Unique <span>design</span></h1>
                <p>If we think outside the box, we can come up with the most creative and the most unique websites that won’t be forgotten in a hurry, especially in this sea of consistency.</p>
            </div>
            <div className='service-card' data-aos="fade-up">
                <IoRocketOutline className='ico'/>
                <h1>Fast <span>loading</span></h1>
                <p>Designed with performance in mind and support for the virtual DOM, React is an excellent framework when you require speed and performance in your application.</p>
            </div>
            <div className='service-card' data-aos="fade-right">
                <AiOutlineFullscreen className='ico'/>
                <h1>Fully <span>responsive</span></h1>
                <p>Responsive web design has become more important as the amount of mobile traffic has come to account for more than half of total internet traffic.</p>
            </div>
        </div>
    );
};

export default Service;