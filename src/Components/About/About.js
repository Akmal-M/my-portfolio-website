import React from 'react';
import './About.css';
import heroSecond from '../../assets/img/person1.jpg';
import 'aos/dist/aos.css';
import {
    FaTelegramPlane,
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaLinkedinIn,
} from "react-icons/fa";
import {useTranslation} from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="about-me" >
            <div className="container">
                    <div className="about-content">
                        <div className="row">
                            <div className="about-img" data-aos="fade-right">
                                <img src={heroSecond} alt="about-me" />
                            </div>
                            <div className="text" data-aos="fade-left">
                                <h4>{t('About.1')}</h4>
                                <h6> <span>{t('About.2')}</span>  {t('About.3')} <span>{t('About.4')}</span> {t('About.5')}</h6>
                                <p>{t('About.6')}</p>
                                <div className="info">
                                    <div className="list">
                                        <label>{t('About.7')}</label>
                                        <p>{t('About.8')}</p>
                                    </div>


                                    <div className="list">
                                        <label>{t('About.9')}</label>
                                        <a href="mailto:akmalreact@gmail.com" rel='noreferrer' target='_blank'>akmalreact@gmail.com</a>
                                    </div>

                                    <div className="list">
                                        <label>{t('About.10')}</label>
                                        <p>{t('About.11')}</p>
                                    </div>

                                    <div className="list">
                                        <label>{t('About.12')}</label>
                                        <a href="tel: +998999737445" >+998 99 973 74 45 </a>
                                    </div>


                                    <div className="list">
                                        <label>{t('About.13')}</label>
                                        <p>{t('About.14')}</p>
                                    </div>

                                    <div className="list">
                                        <label>{t('About.15')}</label>
                                        <p>{t('About.16')}</p>
                                    </div>
                                </div>
                                {/*social links*/}
                                <div className="social-links" >
                                    <a href="https://wa.me/998993017445" rel='noreferrer' target='_blank'><FaWhatsapp/> </a>
                                    <a href="https://www.instagram.com/akmal___m/" rel='noreferrer' target='_blank'><FaInstagram/> </a>
                                    <a href="https://t.me/akmalreact" rel='noreferrer' target='_blank'><FaTelegramPlane/> </a>
                                    <a href="https://www.facebook.com/akmalreact/" rel='noreferrer' target='_blank'><FaFacebookF/> </a>
                                    <a href="https://www.linkedin.com/in/akmal-m-a20b4b1ab/" rel='noreferrer' target='_blank'><FaLinkedinIn/> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default About;
