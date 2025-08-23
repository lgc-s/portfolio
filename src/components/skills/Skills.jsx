import "./Skills.css"
import Background from "../background/Background"
import Box from "../box/Box"
import SkillsBox from "../skills-box/SkillsBox";
import { ReactComponent as CSharp} from "../../images/svg/csharp.svg"
import { ReactComponent as Css} from "../../images/svg/css.svg"
import { ReactComponent as Excel} from "../../images/svg/excel.svg"
import { ReactComponent as Html} from "../../images/svg/html5.svg"
import { ReactComponent as Js} from "../../images/svg/js.svg"
import { ReactComponent as ReactJs} from "../../images/svg/react.svg"
import { ReactComponent as Svg} from "../../images/svg/svg.svg"
import { ReactComponent as VsCode} from "../../images/svg/vscode.svg"
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
                                <SkillsBox className="skill-button"><CSharp/><h3>C#</h3></SkillsBox>
                                <SkillsBox className="skill-button"><ReactJs/><h3>ReactJS</h3></SkillsBox>
                                <SkillsBox className="skill-button"><Html/><h3>HTML</h3></SkillsBox>
                                <SkillsBox className="skill-button"><Css/><h3>CSS</h3></SkillsBox>
                                <SkillsBox className="skill-button"><Js/><h3>JS</h3></SkillsBox>
                                <SkillsBox className="skill-button"><Svg/><h3>SVG</h3></SkillsBox>
                                <SkillsBox className="skill-button"><VsCode/><h3>VS Code</h3></SkillsBox>
                                <SkillsBox className="skill-button"><Excel/><h3>Excel</h3></SkillsBox>
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
                                <SkillsBox className="skill-button"><CSharp/><h3>C#</h3></SkillsBox>
                                <SkillsBox className="skill-button"><ReactJs/><h3>ReactJS</h3></SkillsBox>
                                <SkillsBox className="skill-button"><Html/><h3>HTML</h3></SkillsBox>
                                <SkillsBox className="skill-button"><Css/><h3>CSS</h3></SkillsBox>
                                <SkillsBox className="skill-button"><Js/><h3>JS</h3></SkillsBox>
                                <SkillsBox className="skill-button"><Svg/><h3>SVG</h3></SkillsBox>
                                <SkillsBox className="skill-button"><VsCode/><h3>VS Code</h3></SkillsBox>
                                <SkillsBox className="skill-button"><Excel/><h3>Excel</h3></SkillsBox>
                            </div>
                        </div>
                    </Box>
                </Background>    
            </div>
        )
    }
}