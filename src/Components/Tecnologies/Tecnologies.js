import styled from "styled-components"
import Cards from "../Cards/Cards"
import { 
    SiJavascript, 
    SiHtml5, 
    SiCss3, 
    SiReact,
    SiMongodb,
    SiPostgresql,
    SiTypescript,
    SiJest,
    SiPrisma,
    SiFigma,
    SiRedis,
    SiCypress,
    SiExpress,
    SiLinux,
    SiGit,
    SiVisualstudiocode,
    SiVite
 } from 'react-icons/si'




export default function Tecnololgies() {
    const DataCards = [
        {tec: <SiJavascript/>,  size: '4.5rem', tittle: "Javascript", color: "yellow"}, 
        {tec: <SiHtml5/>, tittle: "Html", color: "#E65738"}, 
        {tec: <SiCss3/>, tittle: "CSS3", color: "#0C74BE"},
        {tec: <SiFigma/>, tittle: "CSS3", color: "#0C74BE"},
        {tec: <SiReact/>, tittle: "React", color: "#282C34"},
        {tec: <SiMongodb/>, tittle: "Styled Components", color: "#DDA0CB"},
        {tec: <SiPostgresql/>, tittle: "MongoDB", color: "#52AD4D"},
        {tec: <SiTypescript/>, tittle: "PostgreSQL", color: "white"},
        {tec: <SiJest/>, tittle: "Typescript", color: "#2D79C7"},
        {tec: <SiRedis/>, tittle: "Typescript", color: "#2D79C7"},
        {tec: <SiCypress/>, tittle: "Typescript", color: "#2D79C7"},
        {tec: <SiExpress/>, tittle: "Typescript", color: "#2D79C7"},
        {tec: <SiLinux/>, tittle: "Typescript", color: "#2D79C7"},
        {tec: <SiGit/>, tittle: "Typescript", color: "#2D79C7"},
        {tec: <SiVisualstudiocode/>, tittle: "Typescript", color: "#2D79C7"},
        {tec: <SiPrisma/>, tittle: "Typescript", color: "#2D79C7"},
        {tec: <SiVite/>, tittle: "Typescript", color: "#2D79C7"}
    ]


    return(
        <Tec>
            <Title>Tecnologias & Ferramentas</Title>
        <Deck>
            {DataCards.map((DataCard)=>{return(<Cards tec={DataCard.tec} tittle={DataCard.tittle} color={DataCard.color} size={DataCard.size}/>)})}
        </Deck>
        </Tec>
    )
}

const Tec = styled.div`
    width:100%;
    height:30rem;
    background-color: #343541;
    border: 2px solid  #343541;
    @media (max-width: 800px) {
    height:auto;
  }
  
`
const Title = styled.h1`
width:50%;
 font-family: 'B612 Mono', monospace;
 font-weight:800;
 color:white;
 font-size: 2.8rem;
 text-align:center;
 padding-top:20px;
 margin:auto;
 margin-bottom: 30px;

  @media (max-width: 800px) {
    width:70%;
  }
 
`

const Deck = styled.div`
    display: flex;
    margin:auto;
    width:90%;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
    min-height: 20rem;
    background-color: #343541;

    @media (max-width: 800px) {
        width: 80%;
    }
`

