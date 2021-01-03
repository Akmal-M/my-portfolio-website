import React from 'react';
import './Skills.css';
import heroSecond from '../../assets/img/hero2.jpg';
import 'aos/dist/aos.css';

const Skills = () => {

    return (
        <section className="skills" >
            <div className="container">
                <div className="row align-item-center">
                    <div className="skills-content" data-aos="fade-right">
                        <div className="row">
                            <div className="section-title">
                                <p>Progressive web applications (PWAs) will replace some native mobile apps.
                                    PWAs enable websites to load quickly and still
                                    work offline. They recreate the in-app experience
                                    within a browser and make things easier and cheaper
                                    than building native applications for every device.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="skill-box"  id='skills'>
                                <h6>HTML5</h6>
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