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

const Main = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: black;
  
    h1 {
        font-family: 'B612 Mono', monospace;
        font-weight: 700;
        color: white;
        font-size: 1.5rem;
    }
    strong {
        color: #b21abd;
        font-size: 1.6rem;
        font-weight: 800;
    }
    div {
        width: 40%;
        display: flex;
        justify-content: space-around;
    }
    h2 {
        font-family: 'B612 Mono', monospace;
        font-weight: 400;
        color: white;
        font-size: 1.5rem;
        transition: all 0.5s ease-in-out;
        &:hover {
            font-weight: 600;
            animation: neon 1s ease-in-out infinite;
            text-shadow: 0 0 5px #b21abd, 0 0 10px #b21abd, 0 0 15px #b21abd;
           
        }
    }
    @keyframes neon {
        to {
            text-shadow: 0 0 5px #b21abd, 0 0 10px #b21abd, 0 0 15px #b21abd;
        }
    }
`;
