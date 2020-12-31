import React from 'react';
import './Text.css';
import {Parallax} from 'react-scroll-parallax';

const TextAboutMe = () => {
    return (
        <div className='scroll__text' id='about'>
            <Parallax className="parallax" x={[250, -20]} tagOuter="figure">
                <h1>ABOUT ME</h1>
            </Parallax>
        </div>
    )
}

export default TextAboutMe;