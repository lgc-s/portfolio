import "./Footer.css"
import { ReactComponent as Logo } from "../../images/svg/logo.svg"
import { useLanguage } from "../languages/Languages";

export default function Footer() {
    
    const { language } = useLanguage();

    if (language === "English") {
        return (
            <div id="top" className="footer">
                <Logo className='logo'/>
                <h3 className="footer-text">Website made by myself - 2024-2025</h3>
            </div>
        )
    }
    if (language === "Portuguese") {
        return (
            <div id="top" className="footer">
                <Logo className='logo'/>
                <h3 className="footer-text">Site feito por mim - 2024-2025</h3>
            </div>
        )
    }
}