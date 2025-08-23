import "./Box.css"

export default function Box(props) {

    return (
        <button className="box">
            {props.children}
        </button>
    )
}