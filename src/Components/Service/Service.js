import React from 'react';
import './Service.css';
import {
    AiOutlineFullscreen,
    GiCutDiamond, GiDiamondHard,
    IoRocketOutline, RiVipDiamondFill, RiVipDiamondLine,
} from "react-icons/all";

const Service = () => {
    return (
        <div className='service' id='services'>
            <div className='service-card' data-aos="fade-left">
                <GiDiamondHard className='ico'/>
                <h1>Unique <span>design</span></h1>
                <p>You can choose every single, even small details of your website.</p>
            </div>
            <div className='service-card' data-aos="fade-up">
                <IoRocketOutline className='ico'/>
                <h1>Fast <span>loading</span></h1>
                <p>You can choose every single, even small details of your website.</p>
            </div>
            <div className='service-card' data-aos="fade-right">
                <AiOutlineFullscreen className='ico'/>
                <h1>Fully <span>responsive</span></h1>
                <p>You can choose every single, even small details of your website.</p>
            </div>
        </div>
    );
};

export default Service;