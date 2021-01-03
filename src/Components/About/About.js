import React from 'react';
import './About.css';
import heroSecond from '../../assets/img/person1.jpg';
import 'aos/dist/aos.css';
import {
    FaTelegramPlane,
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/all";



const About = () => {
    return (
        <section className="about-me">
            <div className="container">
                    <div className="about-content">
                        <div className="row">
                            <div className="about-img" data-aos="fade-right">
                                <img src={heroSecond} alt="about-me" />
                            </div>
                            <div className="text" data-aos="fade-left">
                                <h4>I'm Akmal M</h4>
                                <h6><span>Web</span>  Developer & <span>UI&UX</span> Designer.</h6>
                                <p> React Developer
                                    with hands-on experience in
                                    identifying web-based user
                                    interactions along with designing &
                                    implementing highly-responsive user
                                    interface components by deploying
                                    React concepts.</p>
                                <div className="info">
                                    <div className="list">
                                        <label>Birthday:</label>
                                        <p>6th Feb 1994</p>
                                    </div>


                                    <div className="list">
                                        <label>Email:</label>
                                        <a href="mailto:akmalreact@gmail.com" rel='noreferrer' target='_blank'>akmalreact@gmail.com</a>
                                    </div>

                                    <div className="list">
                                        <label>Age:</label>
                                        <p>27 Yr</p>
                                    </div>

                                    <div className="list">
                                        <label>Phone:</label>
                                        <a href="tel: +998999737445" >+998 99 973 74 45 </a>
                                    </div>


                                    <div className="list">
                                        <label>Freelance:</label>
                                        <p>Available</p>
                                    </div>

                                    <div className="list">
                                        <label>Info</label>
                                        <p>I'm looking for a creative team.</p>
                                    </div>
                                </div>
                                {/*social links*/}
                                <div className="social-links" >
                                    <a href="https://wa.me/998993017445" rel='noreferrer' target='_blank'><FaWhatsapp/> </a>
                                    <a href="https://www.instagram.com/akmal___m/" rel='noreferrer' target='_blank'><FaInstagram/> </a>
                                    <a href="https://t.me/akmalreact" rel='noreferrer' target='_blank'><FaTelegramPlane/> </a>
                                    <a href="https://www.facebook.com/akmalreact/" rel='noreferrer' target='_blank'><FaFacebookF/> </a>
                                    <a href="https://www.linkedin.com/in/akmal-m-a20b4b1ab/" rel='noreferrer' target='_blank'><FaLinkedinIn/> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default About;