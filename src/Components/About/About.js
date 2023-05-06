import { useContext } from "react";
import styled from "styled-components";
import rafa from "../../Assets/Images/rafa.jpg";



export default function About({ UseRef }){
    

    return(
        <>
        <Sobre data-aos="fade-up">
          <Title id="sobre">Sobre mim</Title>
            <Container>
                <img src={rafa}/>
                <Description>
                Olá, sou um desenvolvedor Full Stack movido por desafios e fascinado por criar soluções inovadoras que impactem a vida das
                 pessoas.<br/><br/>
                 Trabalho principalmente com Javascript/Typescript, com foco em NodeJS, e tenho conhecimento em bancos de dados SQL (PostgreSQL),
                  NoSQL (MongoDB) e de memória primária (Redis), além de usar ORM como o Prisma.<br/><br/>
                Também tenho experiência em testes com Jest/Vitest (Integração, Unitário e Load) e no Front-end, utilizo React, Styled-Components,
                 CSS, SASS, Adonis.js, Elixir e Phoenix. Em relação a Infra/DevOps, possuo conhecimento básico em AWS (EC2) e Docker.<br/><br/>
                  Além disso, busco aprimorar constantemente minhas habilidades, tanto técnicas quanto em soft skills, como proatividade, 
                  resiliência e conhecimento em metodologias ágeis como SCRUM/Kanban.
                </Description> 
          </Container>
        </Sobre>
        </>
    )
}

const Sobre = styled.div`
    width:100%;
    min-height:50rem;
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
        width:15rem;
        height:15rem;
        border-radius:170px;
        margin-bottom:5px;
        -webkit-box-shadow: -12px 14px 5px 3px rgba(0,0,0,0.32);
        -moz-box-shadow: -12px 14px 5px 3px rgba(0,0,0,0.32);
        box-shadow: -12px 14px 5px 3px rgba(0,0,0,0.32);

        @media (max-width: 767px) {
            width: 10rem;
            height: 10rem;
            max-width: 100%;
            overflow: hidden;
        }
    }
`

const Description = styled.p`
    color: #FFFFFF;
    width: 40%;
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



