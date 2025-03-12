import "./Contact.css"
import Background from "../background/Background"
import Box from "../box/Box"
import github from "../../images/github.png"
import gmail from "../../images/gmail.png"
import Infobox from "../infobox/Infobox"
import linkedin from "../../images/linkedin.png"
import whatsapp from "../../images/whatsapp.png"
import { useLanguage } from "../languages/Languages";

export default function Contact() {
    
    const { language } = useLanguage();

    if (language === "English") {
        return (
            <div id="contact">
                <Background bg="ImgContact">
                    <Box>
                        <div className="ContactContent">
                            <h1>Contact</h1>
                            <h2 className="ContactDescription">To contact me, there are those options available to message, you can freely choose from any of those despite the recommendations as I'm aware of all of them</h2>
                            <div>
                                <div className="Contact">
                                    <img src={gmail} alt="gmail" className="Icon"/><h2><a rel="noopener noreferrer" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=luisguilhermecs3@gmail.com&su=Contato+para+LGCS&body=Digite+sua+mensagem+aqui.">Gmail</a></h2>
                                </div>
                                <Infobox>
                                    <h3>Use the Gmail if this is an important message or to send a proposal for me</h3>
                                </Infobox>
                            </div>
                            <div>
                                <div className="Contact">
                                    <img src={linkedin} alt="linkedin" className="Icon"/><h2><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/lgc-s/">Linkedin</a></h2>
                                </div>
                                <Infobox>
                                    <h3>Use the Linkedin if you want to discuss professional subjects.</h3>
                                </Infobox>
                            </div>
                            <div>
                                <div className="Contact">
                                    <img src={github} alt="github" className="Icon"/><h2><a rel="noopener noreferrer" target="_blank" href="https://github.com/lgc-s">GitHub</a></h2>
                                </div>
                                <Infobox>
                                    <h3>Use the GitHub if you want to discuss about technical issues or you're help wanted on Front-End Development</h3>
                                </Infobox>
                            </div>
                            <div>
                                <div className="Contact">
                                    <img src={whatsapp} alt="whatsapp" className="Icon"/><h2><a rel="noopener noreferrer" target="_blank" href="https://wa.me/558197278307">Whatsapp</a></h2>
                                </div>
                                <Infobox>
                                    <h3>Use the WhatsApp if you want to message me on a personal basis</h3>
                                </Infobox>
                            </div>
                        </div>
                    </Box>
                </Background>
            </div>
        )
    } else if (language === "Portuguese") {
        return (
            <div id="contact">
                <Background bg="ImgContact">
                    <Box>
                        <div className="ContactContent">
                            <h1>Contato</h1>
                            <h2 className="ContactDescription">Para entrar em contato comigo, existem essas opções disponíveis para mensagem, você pode escolher livremente qualquer uma delas, apesar das recomendações, pois estou ciente de todas elas</h2>
                            <div>
                                <div className="Contact">
                                    <img src={gmail} alt="gmail" className="Icon"/><h2><a rel="noopener noreferrer" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=luisguilhermecs3@gmail.com&su=Contato+para+LGCS&body=Digite+sua+mensagem+aqui.">Gmail</a></h2>
                                </div>
                                <Infobox>
                                    <h3>Use o Gmail se esta for uma mensagem importante ou para enviar uma proposta para mim</h3>
                                </Infobox>
                            </div>
                            <div>
                                <div className="Contact">
                                    <img src={linkedin} alt="linkedin" className="Icon"/><h2><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/lgc-s/">Linkedin</a></h2>
                                </div>
                                <Infobox>
                                    <h3>Use o Linkedin se quiser discutir assuntos profissionais.</h3>
                                </Infobox>
                            </div>
                            <div>
                                <div className="Contact">
                                    <img src={github} alt="github" className="Icon"/><h2><a rel="noopener noreferrer" target="_blank" href="https://github.com/lgc-s">GitHub</a></h2>
                                </div>
                                <Infobox>
                                    <h3>Use o GitHub se quiser discutir sobre questões técnicas ou se precisar de ajuda no Desenvolvimento Front-End</h3>
                                </Infobox>
                            </div>
                            <div>
                                <div className="Contact">
                                    <img src={whatsapp} alt="whatsapp" className="Icon"/><h2><a rel="noopener noreferrer" target="_blank" href="https://wa.me/558197278307">Whatsapp</a></h2>
                                </div>
                                <Infobox>
                                    <h3>Use o WhatsApp se quiser me enviar uma mensagem pessoal</h3>
                                </Infobox>
                            </div>
                        </div>
                    </Box>
                </Background>
            </div>
        )
    }
}