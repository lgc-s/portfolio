import "./Main.css"
import AboutMe from "../about-me/AboutMe"
import Contact from "../contact/Contact"
import Experiences from "../experiences/Experiences"
import Home from "../home/Home"
import Projects from "../projects/Projects"
import Skills from "../skills/Skills"
import TopAnchor from "../top-anchor/TopAnchor"

export default function Main() {
    
    return (
        <div className="main">
            <Home/>
            <AboutMe/>
            <Skills/>
            <Experiences/>
            <Projects/>
            <Contact/>
            <TopAnchor/>
        </div>
    )
}