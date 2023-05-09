import styled from "styled-components";
import { useRef } from "react";
import { Link } from 'react-scroll';



  
export default function Header() {

    return(
        <>
            <Container id="header">
            <h1>
                <strong>&lt;</strong>RaphaelBraga<strong>/&gt;</strong>
            </h1>
            <div>
                <Link to="sobre" smooth={true} duration={500} style={{backgroundColor: "transparent"}}><h2>Sobre</h2></Link>
                <Link to="tecnologias" smooth={true} duration={500} style={{backgroundColor: "transparent"}}><h2 >Tecnologias</h2></Link>
                <Link to="projetos" smooth={true} duration={500} style={{backgroundColor: "transparent"}}><h2>Projetos</h2></Link>
                <Link to="contatos" smooth={true} duration={500} style={{backgroundColor: "transparent"}}><h2>Contatos</h2></Link>
            </div>
            </Container>
        </>
    )
}

const Container=styled.div`
width:100%;
height:4rem;
display:flex;
align-items:center;
justify-content:space-around;
background-color:black;
    h1, h2, div,strong{
        background-color: transparent;
    }
   h1{
    font-family: 'B612 Mono', monospace;
    font-weight:700;
    color: white;
    font-size:1.5rem;
   }
   strong{
    color: #b21abd;
    font-size:1.6rem;
    font-weight:800;
   }
   div{
    width:40%;
    display:flex;
    justify-content: space-around;

    h2:hover{
        text-decoration: underline #b21abd 5px;
        font-weight:500;
        cursor:pointer;
    }
   }
   h2{
    font-family: 'B612 Mono', monospace;
    font-weight:400;
    color: white;
    font-size:1.5rem;
   }

@media (max-width:768px){
    flex-direction:column;
    height:5rem;
    h1{
        font-size:1.2rem;
        margin-top:1rem;
    }
    strong{
        font-size:1.2rem;
    }
    div{
        width:100%;
        margin-top:1rem;
        h2{
            font-size:1rem;
        }
    }
}`
