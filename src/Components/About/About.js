import React from 'react';
import './About.css';
import heroSecond from '../../assets/img/hero2.jpg';
import 'aos/dist/aos.css';
import {
    FaTelegramPlane,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaWhatsapp,
    FaSadTear,
    FaYoutube
} from "react-icons/fa";



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
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, voluptate natus
                                    eveniet rem, delectus quis alias maiores provident maxime necessitatibus.</p>
                                <div className="info">
                                    <div className="list">
                                        <label>Birthday:</label>
                                        <p>6th Feb 1994</p>
                                    </div>


                                    <div className="list">
                                        <label>Email:</label>
                                        <a href="mailto:akmalreact@gmail.com">akmalreact@gmail.com</a>
                                    </div>

                                    <div className="list">
                                        <label>Age:</label>
                                        <p>27 Yr</p>
                                    </div>

                                    <div className="list">
                                        <label>Phone:</label>
                                        <a href="tel: +998999737445">+998 99 973 74 45 </a>
                                    </div>


                                    <div className="list">
                                        <label>Freelance:</label>
                                        <p>Available</p>
                                    </div>

                                    <div className="list">
                                        <label>Info</label>
                                        <p>Write onts whatsapp or telegram.</p>
                                    </div>
                                </div>
                                {/*social links*/}
                                <div className="social-links" >
                                    <a href=""><FaWhatsapp/> </a>
                                    <a href=""><FaInstagram/> </a>
                                    <a href=""><FaTelegramPlane/> </a>
                                    <a href=""><FaFacebookF/> </a>
                                    <a href=""><FaYoutube/> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default About;