import React from 'react';
import './Service.css';
import {
    AiOutlineFullscreen,
     GiDiamondHard,
    IoRocketOutline,
} from "react-icons/all";
import {useTranslation} from "react-i18next";

const Service = () => {
    const { t } = useTranslation();

    return (
        <div className='service' id='services'>
            <div className='service-card' data-aos="fade-left">
                <GiDiamondHard className='ico'/>
                <h1>{t('Services.1')} <span>{t('Services.2')}</span></h1>
                <p>{t('Services.3')}</p>
            </div>
            <div className='service-card' data-aos="fade-up">
                <IoRocketOutline className='ico'/>
                <h1>{t('Services.4')} <span>{t('Services.5')}</span></h1>
                <p>{t('Services.6')}</p>
            </div>
            <div className='service-card' data-aos="fade-right">
                <AiOutlineFullscreen className='ico'/>
                <h1>{t('Services.7')} <span>{t('Services.8')}</span></h1>
                <p>{t('Services.9')}</p>
            </div>
        </div>
    );
};

export default Service;