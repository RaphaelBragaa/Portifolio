import styled from "styled-components"
import javascript from "../../Assets/Images/jaavascript.png"

export default function Cards({tec, tittle,color, size}) {
    return(
        <>
            
            <div  style={{ fontSize: '4.5rem', color: '#FF4495' }}>
              {tec} 
            </div>
          
        </>            
    )
}

const Card = styled.div`
  background:#FF4495 ;
  border-radius: 10px;
  margin-bottom:20px;
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease-out;
  color: #FFFFFF;
  transition: background-color 0.9s ease;
  
  &:hover {
    transform: translateY(-5px) scale(1.005);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.50);
    background-color:${(props)=>props.color}
  }
  
  &:active {
    transform: scale(1);
    box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11);
  }

  p{
    text-align: center;
    font-family:'B612 Mono', monospace;
    margin-top:50px;
  }
  
  @media (max-width: 800px) {
        height: 150px;
        width: 150px;
    }
`;

  const Logo = styled.div`
        width:5rem;
        height:5rem;
        border-radius:15px;
        margin-right:10px;
  
    @media (max-width: 800px) {
        width: 3rem;
        height: 3rem;
    }
  `

