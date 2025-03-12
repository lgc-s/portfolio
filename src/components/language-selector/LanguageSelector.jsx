import "./LanguageSelector.css";
import { useLanguage } from "../languages/Languages";

export default function Languages() {
    
    const { language, setLanguageEnUs, setLanguagePtBr } = useLanguage();

    return (
        <div className="Languages">
            <button onClick={setLanguageEnUs} className="LanguageButton">
                <h3 className={language === "English" ? "EnglishTrue" : "EnglishFalse"}>🇺🇸 EN-US</h3>
            </button>
            <button onClick={setLanguagePtBr} className="LanguageButton">
                <h3 className={language === "Portuguese" ? "PortugueseTrue" : "PortugueseFalse"}>🇧🇷 PT-BR</h3>
            </button>
        </div>
    );
}