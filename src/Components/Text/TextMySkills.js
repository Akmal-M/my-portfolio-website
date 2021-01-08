import React from 'react';
import './Text.css';
import {useTranslation} from "react-i18next";

const TextMySkills = () => {
    const { t } = useTranslation();

    return (
        <div id='skills'>
            <div className='scroll-text' id='skills' data-aos="fade-up">
                <h1>{t('Text.2')}</h1>
            </div>
        </div>

    )
}

export default TextMySkills;