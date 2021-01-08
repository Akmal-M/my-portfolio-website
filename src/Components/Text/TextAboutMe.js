import React from 'react';
import './Text.css';
import {useTranslation} from "react-i18next";

const TextAboutMe = () => {
    const { t } = useTranslation();

    return (
        <div id='about'>
            <div className="scroll-text"   data-aos="fade-up">
                <h1>{t('Text.1')}</h1>
            </div>
        </div>

    )
}

export default TextAboutMe;