import styled from "styled-components"
import Cards from "../Cards/Cards"
import javascript from "../../Assets/Images/jaavascript.png"
import html from "../../Assets/Images/html5.png"
import css from "../../Assets/Images/logo-css-3-2048.png"
import mongodb from "../../Assets/Images/mongodb.png"
import postgreSQL from "../../Assets/Images/Postgresql.svg.png"
import react from "../../Assets/Images/React-icon.svg.png"
import typescript from "../../Assets/Images/Typescript_logo_2020.svg.png"
import styledC from "../../Assets/Images/style.png"
import jest from "../../Assets/Images/jest.png"
import prisma from "../../Assets/Images/prisma-3.svg"




export default function Tecnololgies() {

    const DataCards = [
        {tec: javascript, tittle: "Javascript", color: "yellow"}, 
        {tec: html, tittle: "Html", color: "#E65738"}, 
        {tec: css, tittle: "CSS3", color: "#0C74BE"},
        {tec: react, tittle: "React", color: "#282C34"},
        {tec: styledC, tittle: "Styled Components", color: "#DDA0CB"},
        {tec: mongodb, tittle: "MongoDB", color: "#52AD4D"},
        {tec: postgreSQL, tittle: "PostgreSQL", color: "white"},
        {tec: typescript, tittle: "Typescript", color: "#2D79C7"},
        {tec: jest, tittle: "Jest", color: "red"},
        {tec: prisma, tittle: "Prisma", color: "#2D79C7"},


    ]


    return(
        <Tec>
            <Title>Tecnologias & Ferramentas</Title>
        <Deck>
            {DataCards.map((DataCard)=>{return(<Cards tec={DataCard.tec} tittle={DataCard.tittle} color={DataCard.color}/>)})}
        </Deck>
        </Tec>
    )
}

const Tec = styled.div`
    width:100%;
    height:60rem;
    background-color: #343541;

  
`
const Title = styled.h1`
width:30%;
 font-family: 'B612 Mono', monospace;
 font-weight:800;
 color:white;
 font-size: 2.5rem;
 text-align:center;
 padding-top:20px;
 margin:auto;
 margin-bottom: 30px;

 
`

const Deck = styled.div`
    display: flex;
    margin:auto;
    width:50%;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
    min-height: 40rem;
    background-color: #343541;

    @media (max-width: 800px) {
        width: 80%;
    }
`

