import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Intouch from "./Components/InTouch/Intouch";
import React, {useEffect} from "react";
import Aos from "aos";
import Works from "./Components/Works/Works";
import TextAboutMe from "./Components/Text/TextAboutMe";
import TextMySkills from "./Components/Text/TextMySkills";
import Service from "./Components/Service/Service";

const App = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className="App">
            <Header/>
            <Home/>
            <TextAboutMe/>
            <About/>
            <Intouch/>
            <Works/>
            <TextMySkills/>
            <Skills/>
            <Service/>
        </div>
    );
}

export default App;
