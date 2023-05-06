import styled from "styled-components";
import Cards from "../Cards/Cards";
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
    SiVite,
    SiDocker,
    SiSpringboot,
    SiNextdotjs
 } from 'react-icons/si';
 import { FaJava, FaAws } from 'react-icons/fa';





export default function Tecnololgies() {
    const Tools = [
        {tec: <SiVisualstudiocode/>, tittle: "Visual Studio Code"},
        {tec: <SiLinux/>, tittle: "Linux"},
        {tec: <SiGit/>, tittle: "Git"},
        {tec: <SiDocker/>, tittle: "Docker"},
        {tec: <FaAws/>, tittle: "AWS"},
        {tec: <SiFigma/>, tittle: "Figma"}
    ]
    const FrontEnd = [ 
        {tec: <SiHtml5/>, tittle: "Html"}, 
        {tec: <SiCss3/>, tittle: "CSS3"},
        {tec: <SiReact/>, tittle: "ReactJS"},
        {tec: <SiVite/>, tittle: "Vite"},
        {tec: <SiNextdotjs/>, tittle: "NextJS"}
    ]
    const Languages = [
        {tec: <FaJava/>, tittle: "Java"},
        {tec: <SiJavascript/>,  size: '4.5rem', tittle: "Javascript"},
        {tec: <SiTypescript/>, tittle: "TypeScript"}
    ]
    const BackEnd = [
        {tec: <SiMongodb/>, tittle: "MongoDB"},
        {tec: <SiPostgresql/>, tittle: "PostgreSQL"},
        {tec: <SiRedis/>, tittle: "Redis"},
        {tec: <SiExpress/>, tittle: "ExpressJS"},
        {tec: <SiPrisma/>, tittle: "Prisma"},
        {tec: <SiSpringboot/>, tittle: "Spring Boot"}
    ]
    const Test = [
        {tec: <SiJest/>, tittle: "Jest"},
        {tec: <SiCypress/>, tittle: "Cypress"}
    ]


    return(
        <>
         <Title data-aos="fade-up" id="tecnologias">Tecnologias</Title>
        <Tec data-aos="fade-up">
         <Container >
            <h1>Linguages:</h1>
            <Deck data-aos="fade-right">
                {Languages.map((DataCard)=>{return(<Cards tec={DataCard.tec} tittle={DataCard.tittle} color={DataCard.color} size={DataCard.size}/>)})}
            </Deck>
        </Container>   
        <Container>
            <h1>Front End:</h1>
          <Deck data-aos="fade-right">
            {FrontEnd.map((DataCard)=>{return(<Cards tec={DataCard.tec} tittle={DataCard.tittle} color={DataCard.color} size={DataCard.size}/>)})}
          </Deck>  
        </Container>
        <Container>
            <h1>Back End:</h1>
            <Deck data-aos="fade-right">
                {BackEnd.map((DataCard)=>{return(<Cards tec={DataCard.tec} tittle={DataCard.tittle} color={DataCard.color} size={DataCard.size}/>)})}
            </Deck>
        </Container>
        <Container >
            <h1>Teste:</h1>
            <Deck data-aos="fade-right">
                {Test.map((DataCard)=>{return(<Cards tec={DataCard.tec} tittle={DataCard.tittle} color={DataCard.color} size={DataCard.size}/>)})}
            </Deck>
        </Container>
        <Container>
            <h1>Ferramentas:</h1>
            <Deck data-aos="fade-right">
                {Tools.map((DataCard)=>{return(<Cards tec={DataCard.tec} tittle={DataCard.tittle} color={DataCard.color} size={DataCard.size}/>)})}
            </Deck>
        </Container>
       
        </Tec>
        </>
    )
}

const Tec = styled.div`
    width:100%;
    height:70rem;
    
   
    background-color: #343541;
    @media (max-width: 800px) {
    height: 100%; 
    flex-direction: row; 
    flex-wrap: nowrap; 
    overflow-x: auto; 
  }
  
`
const Title = styled.h1`
width:50%;
 font-family: 'B612 Mono', monospace;
 font-weight:800;
 color:white;
 font-size: 5rem;
 text-align:center;
 padding-top:20px;
 margin:auto;
 margin-bottom: 30px;
 background-color:#343541; 

  @media (max-width: 800px) {
    width:70%;
    font-size: 2.5rem;

  }
 
`

const Deck = styled.div`
    display: flex;

    width:70%;
    flex-wrap:wrap;
    justify-content:space-around;
    text-align:center;
    background-color: #343541;
    margin-bottom:10px;
    .card{
        
        :hover{ 
            transform: scale(1.1); 
            cursor:pointer;
         }
         .p{
            :hover{
                display: inline;
            }
         }
         .test{
            font-size:1.2rem;
            align-items:center;
            margin:auto;
            margin-top:5px;
         }
    }


    @media (max-width: 800px) {
    width: auto; 
    flex-grow: 1; 
    align-items: center;
    .card {
      margin: 0 10px; 
    }
  }
`

const Container = styled.div`
    font-family: 'B612 Mono', monospace;
    color: #FFFFFF;
    padding-left:12rem;
    margin: auto;
    display:flex;
    flex-direction:column;
    height:12rem;
    h1{
        font-size:2rem;
        margin-bottom:10px;
    }
    @media (max-width: 800px) {
    overflow-x: scroll;
    padding-left: 0;
    height: auto; 
    width: auto; 
    flex-shrink: 0; 
  }
`

