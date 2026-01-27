import "./Main.css"
import AboutMe from "../about-me/AboutMe"
import Contact from "../contact/Contact"
import Education from "../education/Education"
import Home from "../home/Home"
import Projects from "../projects/Projects"
import Skills from "../skills/Skills"
import TopAnchor from "../top-anchor/TopAnchor"
import Professional from "../professional/Professional"

export default function Main() {
    
    return (
        <div className="main">
            <Home/>
            <AboutMe/>
            <Skills/>
            <Education/>
            <Professional/>
            <Projects/>
            <Contact/>
            <TopAnchor/>
        </div>
    )
}