import styled from "styled-components"
import background from "../../Assets/Images/5927911.gif"


export default function Main(){

    return(
      <>
        <Home background2={background}>
              <h1>
                Olá, meu nome é
                <strong> Raphael Braga, </strong>
               
                <a href="https://git.io/typing-svg"> 
                  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&duration=2000&pause=1000&color=FFFFFF&width=435&lines=Desenvolvedor+Full+Stack;Freelancer" alt="Typing SVG" />
                </a>
                
            </h1> 
        
        </Home>
        </>
    )
}

const Cursor = styled.span`
  display: inline-block;
  width: 6px;
  height: 1em;
  margin-left:5px;
  background-color: #b21abd;
  animation: blink 1s linear infinite;

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
const Home = styled.div`
    height:50rem;
    
  background-image:
  linear-gradient(to bottom, rgba(2,0,36, 1), rgba(128,13,109, 0.53),rgba(229,0,255,0.60)),
  url(${(props)=> props.background2});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align:center;
  align-items:center;
  display:flex;
  justify-content:center;
  width:100%;
  h1{
    text-align:left;
    white-space: normal;
    width: 25%;
    height: 20%;
    color:white;
    font-size:3rem;
    font-family: 'B612 Mono', monospace;
    background-color: transparent;
    a, img, strong{
      background-color: transparent;
    }
    strong{
        color: #b21abd;
        font-size:3.5rem;
        font-weight:800;
    }
  }
  @media (max-width: 767px) { 
     height: 40rem; 
        h1 { width: 70%; 
             font-size: 2rem; 
        strong { font-size: 2.5rem; } 
        img{
          width: 95%;
        }
      } 
      
      } 
  
`


