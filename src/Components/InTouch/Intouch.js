import React from 'react';
import './Intouch.css';
import 'aos/dist/aos.css';
import {useTranslation} from "react-i18next";

const Intouch = () => {
    const { t } = useTranslation();

    return (
        <section className="message-text" data-aos="fade-up">
            <div className="container">
                <div className="row align-items-center">
                    <div className="text">
                        <h2>{t('InTouch.1')}</h2>
                    </div>
                    <div className="button">
                        <a href="http://akmalreact@gmail.com" rel='noreferrer' target='_blank'>{t('InTouch.2')}</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intouch;