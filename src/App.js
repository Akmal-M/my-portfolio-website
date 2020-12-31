import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Intouch from "./Components/InTouch/Intouch";
import React, {useEffect} from "react";
import Aos from "aos";
import TextAboutMe from "./Components/Text/TextAboutMe";
import TextMySkills from "./Components/Text/TextMySkills";
import Burger from "./Components/Nav/Burger";

const App = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className="App">
            <Burger/>
            {/*<Header/>*/}
            <Home/>
            <TextAboutMe/>
            <About/>
            <Intouch/>
            <TextMySkills/>
            <Skills/>

        </div>
    );
}

export default App;
