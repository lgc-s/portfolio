import "./Education.css"
import Background from "../background/Background"
import Box from "../box/Box"
import Infobox from "../infobox/Infobox"
import { useLanguage } from "../languages/Languages";

export default function Education() {
    
    const { language } = useLanguage();

    if (language === "English") {
        return (
            <div id="education">
                <Background bg="img-education">
                    <Box>
                        <div className="education-content">
                            <h1>Education</h1>
                            <div>
                                <div className="edu-box">
                                    <div className="edu-container">
                                        <div className="edu-title">
                                            <h2>Technician at Game Development / High School</h2>
                                            <h3>January 2022 - December 2022, ETE Cícero Dias, Recife, Pernambuco, Brazil.</h3>
                                        </div>
                                        <div className="edu-info">
                                            <Infobox><h4>Here is where I learned about the Unity essentials.</h4></Infobox>
                                            <Infobox><h4>My first steps in Web Design were there.</h4></Infobox>
                                            <Infobox><h4>Beyond this experience, I also got three additional courses in Game Design, 3D Model Reading and .html Basics.</h4></Infobox>
                                        </div>
                                    </div>
                                </div>
                                <div className="edu-box">
                                    <div className="edu-container">
                                        <div className="edu-title">
                                            <h2>Technician at System Development / Post-High School</h2>
                                            <h3>August 2023 - December 2024, ETE Cícero Dias, Recife, Pernambuco, Brazil.</h3>
                                        </div>
                                        <div className="edu-info">
                                            <Infobox><h4>Here is where I got ready to get my first job.</h4></Infobox>
                                            <Infobox><h4>I learned SQL, Business Intelligence, Project Planning and Java Programming.</h4></Infobox>
                                            <Infobox><h4>I got the certification in December 2024.</h4></Infobox>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </Box>
                </Background>
            </div>
        )
    } else if (language === "Portuguese") {
        return (
            <div id="education">
                <Background bg="img-education">
                    <Box>
                        <div className="education-content">
                            <h1>Formação Acadêmica</h1>
                            <div>
                                <div className="edu-box">
                                    <div className="edu-container">
                                        <div className="edu-title">
                                            <h2>Técnico em Desenvolvimento de Jogos / Ensino Médio</h2>
                                            <h3>Janeiro de 2022 - Dezembro de 2022, ETE Cícero Dias, Recife, Pernambuco, Brasil.</h3>
                                        </div>
                                        <div className="edu-info">
                                            <Infobox><h4>Foi aqui que aprendi sobre os fundamentos do Unity.</h4></Infobox>
                                            <Infobox><h4>Meus primeiros passos em Web Design foram aqui.</h4></Infobox>
                                            <Infobox><h4>Além dessa experiência, também fiz três eletivass em Design de Jogos, Leitura de Modelos 3D e Noções Básicas de .html.</h4></Infobox>
                                        </div>
                                    </div>
                                </div>
                                <div className="edu-box">
                                    <div className="edu-container">
                                        <div className="edu-title">
                                            <h2>Técnico de Desenvolvimento de Sistemas / Ensino Subsequente</h2>
                                            <h3>Agosto de 2023 - Dezembro de 2024, ETE Cícero Dias, Recife, Pernambuco, Brasil.</h3>
                                        </div>
                                        <div className="edu-info">
                                            <Infobox><h4>Foi aqui que fiquei preparado conseguir meu primeiro emprego.</h4></Infobox>
                                            <Infobox><h4>Aprendi SQL, Business Intelligence, Planejamento de Projetos e Programação Java.</h4></Infobox>
                                            <Infobox><h4>Recebi a certificação em dezembro de 2024.</h4></Infobox>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </Box>
                </Background>
            </div>
        )
    }
}