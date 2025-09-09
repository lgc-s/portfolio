import "./Skills.css"
import Background from "../background/Background"
import Box from "../box/Box"
import SkillsBox from "../skills-box/SkillsBox";
import { useLanguage } from "../languages/Languages";

export default function Skills() {

    const { language } = useLanguage();

    if (language === "English") {
        return (
            <div id="skills">
                <Background bg="img-skills">
                    <Box>
                        <div className="skills-content">
                            <h1>Skills</h1>
                            <div className="skills">
                                <SkillsBox><h3>HTML</h3></SkillsBox>
                                <SkillsBox><h3>CSS</h3></SkillsBox>
                                <SkillsBox><h3>ReactJS</h3></SkillsBox>
                                <SkillsBox><h3>C#</h3></SkillsBox>
                                <SkillsBox><h3>TypeScript</h3></SkillsBox>
                                <SkillsBox><h3>Tailwind CSS</h3></SkillsBox>
                                <SkillsBox><h3>JavaScript</h3></SkillsBox>
                                <SkillsBox><h3>UI/UX</h3></SkillsBox>
                                <SkillsBox><h3>Git</h3></SkillsBox>
                                <SkillsBox><h3>Node.js</h3></SkillsBox>
                                <SkillsBox><h3>IA</h3></SkillsBox>
                                <SkillsBox><h3>Data Analysis</h3></SkillsBox>
                                <SkillsBox><h3>Visual Studio Code</h3></SkillsBox>
                                <SkillsBox><h3>GitHub</h3></SkillsBox>
                                <SkillsBox><h3>LibreOffice</h3></SkillsBox>
                                <SkillsBox><h3>Excel</h3></SkillsBox>
                                <SkillsBox><h3>PowerPoint</h3></SkillsBox>
                                <SkillsBox><h3>Blender</h3></SkillsBox>
                                <SkillsBox><h3>Linux</h3></SkillsBox>
                                <SkillsBox><h3>Google Earth</h3></SkillsBox>
                                <SkillsBox><h3>GIMP</h3></SkillsBox>
                            </div>
                        </div>
                    </Box>
                </Background>    
            </div>
        )
    } else if (language === "Portuguese") {
        return (
            <div id="skills">
                <Background bg="img-skills">
                    <Box>
                        <div className="skills-content">
                            <h1>Habilidades</h1>
                            <div className="skills">
                                <SkillsBox><h3>HTML</h3></SkillsBox>
                                <SkillsBox><h3>CSS</h3></SkillsBox>
                                <SkillsBox><h3>ReactJS</h3></SkillsBox>
                                <SkillsBox><h3>C#</h3></SkillsBox>
                                <SkillsBox><h3>TypeScript</h3></SkillsBox>
                                <SkillsBox><h3>Tailwind CSS</h3></SkillsBox>
                                <SkillsBox><h3>JavaScript</h3></SkillsBox>
                                <SkillsBox><h3>UI/UX</h3></SkillsBox>
                                <SkillsBox><h3>Git</h3></SkillsBox>
                                <SkillsBox><h3>Node.js</h3></SkillsBox>
                                <SkillsBox><h3>IA</h3></SkillsBox>
                                <SkillsBox><h3>Análise de Dados</h3></SkillsBox>
                                <SkillsBox><h3>Visual Studio Code</h3></SkillsBox>
                                <SkillsBox><h3>GitHub</h3></SkillsBox>
                                <SkillsBox><h3>LibreOffice</h3></SkillsBox>
                                <SkillsBox><h3>Excel</h3></SkillsBox>
                                <SkillsBox><h3>PowerPoint</h3></SkillsBox>
                                <SkillsBox><h3>Blender</h3></SkillsBox>
                                <SkillsBox><h3>Linux</h3></SkillsBox>
                                <SkillsBox><h3>Google Earth</h3></SkillsBox>
                                <SkillsBox><h3>GIMP</h3></SkillsBox>
                            </div>
                        </div>
                    </Box>
                </Background>    
            </div>
        )
    }
}