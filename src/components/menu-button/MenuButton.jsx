import "./MenuButton.css"

export default function MenuButton(props) {

    switch(props.name) {
        default:
            return (
                <button className="menu-button">                   
                    <h2>{props.name}</h2>
                </button>
            )

        case "Home":
        case "Início":
            return (
                <button className="menu-button" onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>           
                    <h2>{props.name}</h2>
                </button>
            )

        case "About Me":
        case "Sobre Mim":
            return (
                <button className="menu-button" onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>       
                    <h2>{props.name}</h2>
                </button>
            )

        case "Skills":
        case "Habilidades":
            return (
                <button className="menu-button" onClick={() => document.getElementById("skills").scrollIntoView({ behavior: "smooth" })}>        
                    <h2>{props.name}</h2>
                </button>
            )

        case "Education":
        case "Formação":
            return (
                <button className="menu-button" onClick={() => document.getElementById("education").scrollIntoView({ behavior: "smooth" })}>
                    <h2>{props.name}</h2>
                </button>
            )

        case "Professional":
        case "Profissional":
            return (
                <button className="menu-button" onClick={() => document.getElementById("professional").scrollIntoView({ behavior: "smooth" })}>
                    <h2>{props.name}</h2>
                </button>
            )

        case "Projects":
        case "Projetos":
            return (
                <button className="menu-button" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
                    <h2>{props.name}</h2>
                </button>
            )

        case "Contact":
        case "Contato":
            return (
                <button className="menu-button" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
                    <h2>{props.name}</h2>
                </button>
            )
    }
}