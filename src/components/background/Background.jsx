import "./Background.css";
import About from "../../images/about.jpg"
import Contact from "../../images/contact.jpg"
import Experiences from "../../images/experiences.jpg"
import Home from "../../images/home.jpg"
import Projects from "../../images/projects.jpg"
import Skills from "../../images/skills.jpg"

let BgImg = null

function setVw() {
    let vw = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
}
  
setVw();
window.addEventListener('resize', setVw);

export default function Background(props) {

    BgImg = props.bg

    switch (BgImg) {
        case "Home":
            BgImg = Home
            break;
        case "About":
            BgImg = About
            break;
        case "Skills":
            BgImg = Skills
            break;
        case "Experiences":
            BgImg = Experiences
            break;
        case "Projects":
            BgImg = Projects
            break;
        case "Contact":
            BgImg = Contact
            break;
        default:
            BgImg = null
            break;
    }
    
    return (
        <div className={`Background ${props.bg}`}>
            {props.children}
        </div>
    );
}