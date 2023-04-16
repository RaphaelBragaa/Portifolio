import { useContext } from "react";
import styled from "styled-components";
import rafa from "../../Assets/Images/rafa.jpg";



export default function About({ UseRef }){
    

    return(
        <>
        <Sobre >
          <Title>Sobre mim</Title>
            <Container>
                <img src={rafa}/>
                <Description>
                Olá! Meu nome é Raphael Braga, sou um desenvolvedor Full Stack apaixonado por inovação e criatividade. Eu nasci em Aracaju, tenho 24 anos e estou sempre buscando maneiras de utilizar minha paixão para criar soluções eficazes e inovadoras.

Acredito que minha formação sólida em desenvolvimento web Full Stack e minha vontade de aprender e me adaptar constantemente, me permitem criar um impacto real no mundo digital. Completei recentemente o Bootcamp da Driven em desenvolvimento web Full Stack, onde trabalhei em projetos práticos, colaborando com colegas de turma e desenvolvendo habilidades de comunicação e trabalho em equipe utilizando metodologias ágeis como o SCRUM.

Ao longo do Bootcamp, aprendi a construir aplicativos web completos, utilizando as tecnologias mais recentes e tendências do mercado, como Node.js, TypeScript, Express.js, MongoDB e PostgreSQL. Além disso, adotei a importância da utilização de uma arquitetura de software bem definida e práticas de clean code, visando sempre a melhor qualidade de entrega do código e facilitando sua manutenção.

Estou muito animado para continuar minha jornada como desenvolvedor web e procurando oportunidades para colaborar e me engajar em projetos impactantes e desafiadores.
                </Description> 
          </Container>
        </Sobre>
        </>
    )
}

const Sobre = styled.div`
    width:100%;
    height:60rem;
    background-color: #343541;
    padding-top:15px;
    @media (max-width: 767px) {
        height: auto;
    }
`

const Title = styled.h1`
    font-family: 'B612 Mono', monospace;
    font-weight:800;
    color: #FFFFFF;
    font-size: 5rem;
    text-align:center;


    @media (max-width: 767px) {
        font-size: 2.5rem;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`

const Container = styled.div`
    height:20rem;
    display:flex;
    justify-content:center;
    margin-top:40px;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        height: auto;
    }

    img{
        border-radius:15px;
        width:20rem;
        height:20rem;
        border: 5px solid #b21abd;
        margin-bottom:5px;

        @media (max-width: 767px) {
            width: 10rem;
            height: 10rem;
            max-width: 100%;
            overflow: hidden;
        }
    }
`

const Description = styled.h2`
    color: #FFFFFF;
    width: 50%;
    text-align:left;
    margin-left:20px;
    font-family: 'B612 Mono', monospace;
    font-size: 1.5rem;

    @media (max-width: 767px) {
        width: 80%;
        text-align: center;
        margin: 0;
        /* max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; */
    }
`



// const Sobre = styled.div`
//     width:100%;
//     height:40rem;
//     background-color: #343541;

//     @media (max-width: 767px) {
//         height: auto;
//     }
// `

// const Title = styled.h1`
//     font-family: 'B612 Mono', monospace;
//     font-weight:800;
//     color: #FFFFFF;
//     font-size: 5rem;
//     text-align:center;

//     @media (max-width: 767px) {
//         font-size: 2.5rem;
//     }
// `

// const Container = styled.div`
//     height:20rem;
//     display:flex;
//     justify-content:center;
//     margin-top:40px;

//     @media (max-width: 767px) {
//         flex-direction: column;
//         align-items: center;
//     }

//     img{
//         border-radius:15px;
//         width:20rem;
//         height:20rem;
//         border: 5px solid #b21abd;

//         @media (max-width: 767px) {
//             width: 10rem;
//             height: 10rem;
//         }
//     }
// `

// const Description = styled.h2`
//     color: #FFFFFF;
//     width: 30%;
//     text-align:left;
//     margin-left:20px;
//     font-family: 'B612 Mono', monospace;
//     font-size: 1.5rem;

//     @media (max-width: 767px) {
//         width: 80%;
//         text-align: center;
//         margin: 0;
//     }
// `



