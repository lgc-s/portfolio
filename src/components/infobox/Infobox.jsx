import "./Infobox.css"

export default function Infobox(props) {
    return (
        <div className="infobox">
            {props.children}
        </div>
    )
}