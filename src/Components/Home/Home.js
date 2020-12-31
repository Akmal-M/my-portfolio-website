import React from 'react';
import './Home.css';
import person from '../../assets/img/person2.png';
import pattern from '../../assets/img/pattern.png';
import 'aos/dist/aos.css';
import Typical from 'react-typical';
import {Link} from "react-scroll";

const Home = () => {

    return (
        <div className='home'>
            <section className="content-section" data-aos="fade-up">
                        <div className="home-content">
                            <div className="block">
                                <h6>Hello, My name is</h6>
                                <h1>Akmal M</h1>
                                <Typical
                                    steps={['Web Developer', 3000,
                                        'UI & UX Designer', 3000]}
                                    loop={Infinity}
                                    wrapper="h2"
                                    className='typical'/>

                                <div className="cv-btn">
                                    <a href="">Download CV</a>
                                </div>
                            </div>
                        </div>
            </section>
            <section className='person-section' data-aos="fade-down">
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