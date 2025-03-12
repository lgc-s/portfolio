import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    
    const [language, setLanguage] = useState("English");

    function setLanguageEnUs() {
        setLanguage("English");
    }

    function setLanguagePtBr() {
        setLanguage("Portuguese");
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguageEnUs, setLanguagePtBr }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {

    return useContext(LanguageContext);
}
