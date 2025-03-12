import "./Box.css"

export default function Box(props) {

    return (
        <button className="Box">
            {props.children}
        </button>
    )
}