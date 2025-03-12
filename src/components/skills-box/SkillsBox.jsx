import "./SkillsBox.css"

export default function SkillsBox(props) {

    return (
        <div className="SkillsBox">
            {props.children}
        </div>
    )
}