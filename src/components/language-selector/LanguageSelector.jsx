import "./LanguageSelector.css";
import { useLanguage } from "../languages/Languages";

export default function Languages() {
    
    const { language, setLanguageEnUs, setLanguagePtBr } = useLanguage();

    return (
        <div className="languages">
            <button onClick={setLanguageEnUs} className="language-button">
                <h4 className={language === "English" ? "english-true" : "english-false"}>🇺🇸 EN-US</h4>
            </button>
            <button onClick={setLanguagePtBr} className="language-button">
                <h4 className={language === "Portuguese" ? "portuguese-true" : "portuguese-false"}>🇧🇷 PT-BR</h4>
            </button>
        </div>
    );
}