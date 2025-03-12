import "./Infobox.css"

export default function Infobox(props) {
    return (
        <div className="Infobox">
            {props.children}
        </div>
    )
}