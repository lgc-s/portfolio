import "./Background.css";
import About from "../../images/about.jpg"
import Contact from "../../images/contact.jpg"
import Education from "../../images/education.jpg"
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
        case "home":
            BgImg = Home
            break;
        case "about":
            BgImg = About
            break;
        case "skills":
            BgImg = Skills
            break;
        case "experiences":
            BgImg = Education
            break;
        case "projects":
            BgImg = Projects
            break;
        case "contact":
            BgImg = Contact
            break;
        default:
            BgImg = null
            break;
    }
    
    return (
        <div className={`background ${props.bg}`}>
            {props.children}
        </div>
    );
}