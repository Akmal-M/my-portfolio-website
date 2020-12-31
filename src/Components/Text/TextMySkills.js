import React from 'react';
import './Text.css';
import {Parallax} from 'react-scroll-parallax';

const TextMySkills = () => {

    return (
        <div className='scroll__text' id='skills'>
            <Parallax className="parallax" x={[250, -17]} tagOuter="figure">
                <h1>MY SKILLS</h1>
            </Parallax>
        </div>
    )
}

export default TextMySkills;