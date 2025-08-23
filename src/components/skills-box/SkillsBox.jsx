import "./SkillsBox.css"

export default function SkillsBox(props) {

    return (
        <div className="skills-box">
            {props.children}
        </div>
    )
}