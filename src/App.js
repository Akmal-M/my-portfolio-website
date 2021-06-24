import './App.css';
import React, {useEffect} from "react";
import Aos from "aos";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Intouch from "./Components/InTouch/Intouch";
import Works from "./Components/Works/Works";
import TextAboutMe from "./Components/Text/TextAboutMe";
import Service from "./Components/Service/Service";
import Footer from "./Components/Footer/Footer";
import TextMySkills from "./Components/Text/TextMySkills";
import MobileHeader from "./Components/MobileHeader/MobileHeader";

const App = () => {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);

    return (
        <div className='App'>
            <MobileHeader/>
            <Header/>
            <Home/>
            <TextAboutMe/>
            <About/>
            <Intouch/>
            <Works/>
            <TextMySkills/>
            <Skills/>
            <Service/>
            <Footer/>

        </div>
    )
}

export default App;
