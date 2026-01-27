import "./Professional.css"
import Background from "../background/Background"
import Box from "../box/Box"
import Infobox from "../infobox/Infobox"
import { useLanguage } from "../languages/Languages";

export default function Professional() {
    
    const { language } = useLanguage();

    if (language === "English") {
        return (
            <div id="professional">
                <Background bg="img-professional">
                    <Box>
                        <div className="professional-content">
                            <h1>Professional Experience</h1>
                            <div>
                                <div className="pro-box">
                                    <div className="pro-container">
                                        <div className="pro-title">
                                            <h2>Tomkulak Consortium</h2>
                                            <h3>Front-End Developer (From 01/2026)</h3>
                                        </div>
                                        <div className="pro-info">
                                            <Infobox><h4>Unpaid volunteer work performing a Front-end role using a React and D3.js stack to collaboratively develop an interactive application mapping critical infrastructure that flows across British Columbia, Alberta, and The Yukon.</h4></Infobox>
                                        </div>
                                    </div>
                                </div>
                                <div className="pro-box">
                                    <div className="pro-container">
                                        <div className="pro-title">
                                            <h2>Freelancer</h2>
                                            <h3>Front-End Developer (From 12/2024)</h3>
                                        </div>
                                        <div className="pro-info">
                                            <Infobox><h4>Freelancing on Site Development, using HTML/CSS with .js scripts on some works and the ReactJS framework on another personal duties.</h4></Infobox>
                                            <Infobox><h4>Those duties have the goal of build fully responsive websites using Design, UI/UX, bug fixing, problem solving skills, usage functions and use of git environment from GitHub.</h4></Infobox>
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
            <div id="professional">
                <Background bg="img-professional">
                    <Box>
                        <div className="professional-content">
                            <h1>Experiência Profissional</h1>
                            <div>
                                <div className="pro-box">
                                    <div className="pro-container">
                                        <div className="pro-title">
                                            <h2>Tomkulak Consortium</h2>
                                            <h3>Desenvolvedor Front-End (Início: 01/2026)</h3>
                                        </div>
                                        <div className="pro-info">
                                            <Infobox><h4>Trabalho Voluntário e sem renumeração na qual é exercida a função sobre uma stack Front-end de React e D3.js para em equipe, criar um aplicativo que mostra de forma interativa, um mapa de infraestrutura crítica e seus fluxos baseado na Colúmbia Britânica, Alberta e Yukon.</h4></Infobox>
                                        </div>
                                    </div>
                                </div>
                                <div className="pro-box">
                                    <div className="pro-container">
                                        <div className="pro-title">
                                            <h2>Trabalho Autônomo</h2>
                                            <h3>Desenvolvedor Front-End (Início: 12/2024)</h3>
                                        </div>
                                        <div className="pro-info">
                                            <Infobox><h4>Trabalho Freelancer em Desenvolvimento de Sites, utilizando HTML/CSS com scripts .js em certos trabalhos e a framework ReactJS em outras atribuições pessoais.</h4></Infobox>
                                            <Infobox><h4>A atribuição possuí finalidade de construir sites completamente responsivos utilizando Design, UI/UX, correção de bugs, solução de problemas, utilização de funções e ambientação com git a partir do GitHub.</h4></Infobox>
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