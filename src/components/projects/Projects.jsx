import "./Projects.css"
import Background from "../background/Background"
import Box from "../box/Box"
import climatech from "../../images/climatech.png"
import especivia from "../../images/especivia.png"
import games from "../../images/games.png"
import Infobox from "../infobox/Infobox"
import newvia from "../../images/newvia.png"
import { useLanguage } from "../languages/Languages";

export default function Projects() {

    const { language } = useLanguage();

    if (language === "English") {
        return (
            <div id="projects">
                <Background bg="ImgProjects">
                    <Box>
                        <div className="ProjectsContent">
                            <h1>Projects</h1>
                            <div className="Projects">
                                <div className="ProjectButton">
                                    <h2>Especivia</h2>
                                    <div className="Project">
                                        <img src={especivia} alt="especivia" />
                                        <div>
                                            <Infobox>
                                                <h3>Especivia is a start-up project idea made along <a href="https://www.linkedin.com/in/phc-s/"><b>Pedro Henrique Costa Silva</b></a> that focuses on a platform that people with any disability can connect with drivers and caretakers for transport related-issues in a safe and free ecosystem, the project was made under the Technician at System Development / Post-High School period.</h3>
                                            </Infobox>
                                        </div>
                                    </div>
                                </div>
                                <div className="ProjectButton">
                                    <h2>Games</h2>
                                    <div className="Project">
                                        <img src={games} alt="games" />
                                        <div>
                                            <Infobox>
                                                <h3>Under the Technician at System Development / High School period, I participated in group to the creation of three games on Unity Game Engine, those ones are <i>Historiadores do Vazio</i>, <i>Ride of Bohr</i> and <i>Voyance Charge</i>.</h3>
                                            </Infobox>
                                        </div>
                                    </div>
                                </div>
                                <div className="ProjectButton">
                                    <h2>Climatech</h2>
                                    <div className="Project">
                                        <img src={climatech} alt="climatech" />
                                        <div>
                                            <Infobox>
                                                <h3>In my first freelance job, using skills to repair some graphics problems that <a href="https://climatechbr.com/">Climatech</a>, a local company of air conditioning repair had, making the already made site stable again.</h3>
                                            </Infobox>
                                        </div>
                                    </div>
                                </div>
                                <div className="ProjectButton">
                                    <h2>Newvia</h2>
                                    <div className="Project">
                                        <img src={newvia} alt="climatech" />
                                        <div>
                                            <Infobox>
                                                <h3>After the first freelance job, this freelance job was the first major showcase of the skills, with the entire site of this local company of technical assistance on computers being fully remade from zero on programming, with the new design being made by <a href="https://www.linkedin.com/in/phc-s/">Pedro Henrique Costa Silva</a>, even in the footer, there is a special thanks for the work was made with my username.</h3>
                                            </Infobox>
                                        </div>
                                    </div>
                                </div>
                                <div className="ProjectButton">
                                    <h2>Other</h2>
                                    <Infobox>
                                        <h3>Beyond this site, during the elementary school, I made part of the NAAH/S Recife, a place for gifted students where I learned text production, document scripting and the production of videos, beyond the high-school, I made a course on learning ReactJS and additionally I was awarded 3 honorable mentions at the OBMEP (Olímpiada Brasileira de Matemática das Escolas Públicas), where I carried out the Programação de Iniciativa Ciêntifica Júnior (Exclusive to award people on the OBMEP) on two occasions.</h3>
                                    </Infobox>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Background>
            </div>
        )
    } else if (language === "Portuguese") {
        return (
            <div id="projects">
                <Background bg="ImgProjects">
                    <Box>
                        <div className="ProjectsContent">
                            <h1>Projetos</h1>
                            <div className="Projects">
                                <div className="ProjectButton">
                                    <h2>Especivia</h2>
                                    <div className="Project">
                                        <img src={especivia} alt="especivia" />
                                        <div>
                                            <Infobox>
                                                <h3>Especivia é um projeto de startup feito junto com <a href="https://www.linkedin.com/in/phc-s/"><b>Pedro Henrique Costa Silva</b></a> que se concentra em uma plataforma onde pessoas deficiência se conectam com motoristas e cuidadores em relação ao transporte em um ecossistema seguro e gratuito. O projeto foi desenvolvido no Técnico em Desenvolvimento de Sistemas / Ensino Subsequente.</h3>
                                            </Infobox>
                                        </div>
                                    </div>
                                </div>
                                <div className="ProjectButton">
                                    <h2>Jogos</h2>
                                    <div className="Project">
                                        <img src={games} alt="games" />
                                        <div>
                                            <Infobox>
                                                <h3>No período de Técnico em Desenvolvimento de Jogos / Ensino Médio, participei de um grupo para a criação de três jogos na Game Engine do Unity, esses são: <i>Historiadores do Vazio</i>, <i>Ride of Bohr</i> and <i>Voyance Charge</i>.</h3>
                                            </Infobox>
                                        </div>
                                    </div>
                                </div>
                                <div className="ProjectButton">
                                    <h2>Climatech</h2>
                                    <div className="Project">
                                        <img src={climatech} alt="climatech" />
                                        <div>
                                            <Infobox>
                                                <h3>No meu primeiro trabalho freelancer, usei minhas habilidades para consertar alguns problemas gráficos que a <a href="https://climatechbr.com/">Climatech</a>, uma empresa local de conserto de ar condicionado tinha, deixando o site já pronto estável novamente.</h3>
                                            </Infobox>
                                        </div>
                                    </div>
                                </div>
                                <div className="ProjectButton">
                                    <h2>Newvia</h2>
                                    <div className="Project">
                                        <img src={newvia} alt="climatech" />
                                        <div>
                                            <Infobox>
                                                <h3>Depois do primeiro trabalho freelancer, este trabalho freelancer foi a primeira grande vitrine das minhas habilidades, com todo o site desta empresa local de assistência técnica em computadores sendo totalmente refeito do zero na programação, com o novo design sendo feito por <a href="https://www.linkedin.com/in/phc-s/">Pedro Henrique Costa Silva</a>, inclusive no rodapé, há um agradecimento especial pelo trabalho feito com meu nome de usuário.</h3>
                                            </Infobox>
                                        </div>
                                    </div>
                                </div>
                                <div className="ProjectButton">
                                    <h2>Other</h2>
                                    <Infobox>
                                        <h3>Além deste site, durante o ensino fundamental, fiz parte do NAAH/S Recife, um espaço para alunos superdotados, onde aprendi produção de texto, script de documentos e produção de vídeos, além do ensino médio, fiz um curso sobre aprendizagem de ReactJS e ainda fui premiado com 3 menções honrosas na OBMEP (Olímpiada Brasileira de Matemática das Escolas Públicas), onde realizei a Programação de Iniciativa Ciêntifica Júnior (Exclusivo para premiar pessoas na OBMEP) em duas ocasiões.</h3>
                                    </Infobox>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Background>
            </div>
        )
    }
}