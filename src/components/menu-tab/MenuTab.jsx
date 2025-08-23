import "./MenuTab.css"
import MenuButton from '../menu-button/MenuButton';
import { useLanguage } from "../languages/Languages";

export default function MenuTab() {
    
    const { language } = useLanguage();

    if (language === "English") {
        return (
            <div className='menu-tab'>
                <MenuButton name="Home"/>
                <MenuButton name="About Me"/>
                <MenuButton name="Skills"/>
                <MenuButton name="Experiences"/>
                <MenuButton name="Projects"/>
                <MenuButton name="Contact"/>
            </div>
        )
    } else if (language === "Portuguese") {
        return (
            <div className='menu-tab'>
                <MenuButton name="Início"/>
                <MenuButton name="Sobre Mim"/>
                <MenuButton name="Habilidades"/>
                <MenuButton name="Experiências"/>
                <MenuButton name="Projetos"/>
                <MenuButton name="Contato"/>
            </div>
        )
    }
}