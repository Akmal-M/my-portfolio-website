import React from 'react';
import './Skills.css';
import heroSecond from '../../assets/img/hero2.jpg';
import 'aos/dist/aos.css';
import {useTranslation} from "react-i18next";

const Skills = () => {
    const { t } = useTranslation();

    return (
        <section className="skills" >
            <div className="container">
                <div className="align-item-center">
                    <div className="skills-content" data-aos="fade-right">
                        <div className="row">
                            <div className="section-title">
                                <p>{t('Skills.1')}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="skill-box"  id='skills'>
                                <h6>HTML</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in" style={{width: "80%"}}>
                                        {/*<span>90%</span>*/}
                                    </div>
                                </div>
                            </div>

                            <div className="skill-box">
                                <h6>CSS</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in" style={{width: "85%"}}>
                                        {/*<span>80%</span>*/}
                                    </div>
                                </div>
                            </div>

                            <div className="skill-box">
                                <h6>Javascript</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in" style={{width: "80%"}}>
                                        {/*<span>80%</span>*/}
                                    </div>
                                </div>
                            </div>

                            <div className="skill-box">
                                <h6>React</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in" style={{width: "85%"}}>
                                        {/*<span>70%</span>*/}
                                    </div>
                                </div>
                            </div>

                            <div className="skill-box">
                                <h6>UI&UX</h6>
                                <div className="skill-bar">
                                    <div className="skill-bar-in" style={{width: "80%"}}>
                                        {/*<span>95%</span>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img" data-aos="fade-left">
                        <img src={heroSecond} alt=""/>
                    </div>
                </div>
            </div>

        </section>


    );
};

export default Skills;
