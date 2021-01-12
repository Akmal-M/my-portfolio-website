import React from 'react';
import './Home.css';
import person from '../../assets/img/person2.png';
import pattern from '../../assets/img/pattern.png';
import 'aos/dist/aos.css';
import Typical from 'react-typical';
import {Link} from "react-scroll";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className='home'>
            <section className="content-section" >
                            <div className="home-content">
                                <div className="block">
                                    <h6>{t('Home.1')}</h6>
                                    <h1>Akmal M</h1>
                                    <Typical
                                        steps={[ `${t('Home.2')}` , 5000,
                                            `${t('Home.3')}`, 5000]}
                                        loop={Infinity}
                                        wrapper="h2"
                                        className='typical'/>

                                    <div className="cv-btn">
                                        <a href="https://drive.google.com/file/d/1Azr4n1ZRoG8S9cZVLV9-jlolTLyL6WW9/view?usp=sharing" rel='noreferrer' target='_blank'>{t('Home.4')}</a>
                                    </div>
                                </div>
                            </div>
            </section>
            <section className='person-section' >
                <Link className="main-image-link" to='about' smooth={true} duration={1000} style={{cursor:'pointer'}}>
                    <img className="main-image"  src={person} alt='person'/>
                </Link>
                <img className="back-image" src={pattern}
                     alt='person'/>
            </section>
        </div>
    );
};

export default Home;
