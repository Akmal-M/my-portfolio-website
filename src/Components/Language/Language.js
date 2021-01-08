import React from 'react';
import './Language.css';
import i18next from 'i18next';

const Language = () => {
    function handleClick(lang) {
        i18next.changeLanguage(lang);
    }
    return (
        <div className='language'>
            <h3 onClick={()=>handleClick('en')}>EN</h3>
            <h3 onClick={()=>handleClick('uz')}>UZ</h3>
            <h3  onClick={()=>handleClick('ru')}>RU</h3>
        </div>
    );
};

export default Language;