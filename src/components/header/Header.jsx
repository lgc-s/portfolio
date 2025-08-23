import "./Header.css"
import LanguageSelector from "../language-selector/LanguageSelector";
import MenuTab from '../menu-tab/MenuTab';
import { ReactComponent as Logo } from "../../images/svg/logo.svg"

export default function Header() {

    return (
        <div id="top" className="header">
            <Logo className='logo'/>
            <MenuTab/>
            <LanguageSelector/>
        </div>
    )
}