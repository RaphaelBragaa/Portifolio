import styled from "styled-components"

export default function Header(){
    return(
        <Main>
        <h1>
            <strong>&lt;</strong>RaphaelBraga<strong>/&gt;</strong>
        </h1>
        <div>
            <h2>Sobre</h2>
            <h2>Projetos</h2>
            <h2>Contatos</h2>
        </div>
        </Main>
    )
}

const Main=styled.div`
    width:100%;
    height:4rem;
    display:flex;
    align-items:center;
    justify-content:space-around;
    

    background-color:black;
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
        }
       }
       h2{
        font-family: 'B612 Mono', monospace;
        font-weight:400;
        color: white;
        font-size:1.5rem;
       }
        
`