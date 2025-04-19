import "./AboutMe.css"
import Background from "../background/Background";
import Box from "../box/Box";
import Infobox from "../infobox/Infobox"
import { useLanguage } from "../languages/Languages";

export default function AboutMe() {
    
    const { language } = useLanguage();

    if (language === "English") {
        return (
            <div id="about">
                <Background bg="ImgAbout">
                    <Box>     
                        <div className="About">
                            <h1>About Me</h1>
                            <Infobox><h3>I'm Luis Guilherme Costa Silva, but you can call me Luis, I'm 20 years old and i'm from Recife, Pernambuco, Brazil, where I had my entire life, I have autism spectrum disorder, also known simply as autism.</h3></Infobox>
                            <Infobox><h3>I'm always inside into the world of technology since my childhood, with an immediate passion since the first moment, from playing Adobe Flash games, Explore the world in the Google Maps, watch videos on YouTube, and discover facts and curiosities of the world on sites including Wikipedia.</h3></Infobox>
                            <Infobox><h3>With more of 10 years of internet usage, i witnessed it's evolution of the through the years, from the site logos to the new usage standards and new technology trends. Later, I found myself in the easy decision to follow a website development career for being the most efficient gateway to the world of computing and the other careers in the this area, like Cybersecurity, Software Development, Data Analyst and Back-end Developer.</h3></Infobox>
                        </div>
                    </Box>    
                </Background>
            </div>
        )
    } else if (language === "Portuguese") {
        return (
            <div id="about">
                <Background bg="ImgAbout">
                    <Box>     
                        <div className="About">
                            <h1>Sobre Mim</h1>
                            <Infobox><h3>Eu sou Luis Guilherme Costa Silva, mas pode me chamar de Luis, tenho 20 Anos e sou de Recife, Pernambuco, Brasil, onde vivi toda a minha vida. Tenho transtorno do espectro autista, também conhecido simplesmente como autismo.</h3></Infobox>
                            <Infobox><h3>Estou sempre envolvido no mundo da tecnologia desde a infância, com uma paixão imediata desde o primeiro momento, desde jogar jogos em Adobe Flash, explorar o mundo no Google Maps, assistir a vídeos no YouTube e descobrir fatos e curiosidades do mundo em sites como a Wikipédia.</h3></Infobox>
                            <Infobox><h3>Com mais de 10 anos de uso da internet, testemunhei asua evoulução ao longo dos anos, desde os logotipos dos sites até os novos padrões de uso e novas tendências tecnológicas. Mais tarde, me vi na decisão fácil de seguir uma carreira de desenvolvimento de sites por ser a porta de entrada mais eficiente para o mundo da computação e outras carreiras na área, como Segurança Cibernética, Desenvolvimento de Software, Analista de Dados e Desenvolvedor Back-end.</h3></Infobox>
                        </div>
                    </Box>    
                </Background>
            </div>
        )
    }
}