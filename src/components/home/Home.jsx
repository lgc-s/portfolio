import "./Home.css"
import Background from "../background/Background";
import Box from "../box/Box";
import Infobox from "../infobox/Infobox";
import lgcs from "../../images/lgcs.jpeg";
import { useLanguage } from "../languages/Languages";

export default function Home() {

    const { language } = useLanguage();

    if (language === "English") {
        return (
            <div id="home">
                <Background height="86vh" bg="ImgHome">
                    <Box>
                        <img src={lgcs} alt="lgcs" className="Lgcs"/>
                        <div className="Home">
                            <h1>Front-End Developer</h1>
                            <h2>Professional and dedicated, believes in quality and aesthetic as fundamentals of Front-End Development.</h2>
                            <div>
                                <Infobox><h3>Quality means adequate function, structure and polished organization.</h3></Infobox>
                                <Infobox><h3>Aesthetic means project visual appearance, interface and excellence in user's experience.</h3></Infobox>
                                <Infobox><h3>Learning is the root of the knowledge, which together, leads to a better world.</h3></Infobox>
                                <Infobox><h3>Development is the process, and building of a project aiming a dream.</h3></Infobox>
                            </div>
                        </div>
                    </Box>
                </Background>
            </div>
        )
    } else if (language === "Portuguese") {
        return (
            <div id="home">
                <Background height="86vh" bg="ImgHome">
                    <Box>
                        <img src={lgcs} alt="lgcs" className="Lgcs"/>
                        <div className="Home">
                            <h1>Desenvolvedor Front-End</h1>
                            <h2>Profissional e dedicado, acredita em qualidade e estética como fundamentos do Desenvolvimento Front-End.</h2>
                            <div>
                                <Infobox><h3>Qualidade significa função adequada, estrutura e organização refinada.</h3></Infobox>
                                <Infobox><h3>Estética significa projetar aparência visual, interface e excelência na experiência do usuário.</h3></Infobox>
                                <Infobox><h3>Aprender é a raiz do conhecimento, que juntos, levam a um mundo melhor.</h3></Infobox>
                                <Infobox><h3>Desenvolvimento é o processo e a construção de um projeto visando um sonho.</h3></Infobox>
                            </div>
                        </div>
                    </Box>
                </Background>
            </div>
        )
    }
}