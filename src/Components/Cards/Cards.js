import styled from "styled-components"
import javascript from "../../Assets/Images/jaavascript.png"

export default function Cards({tec, tittle,color}) {
    return(
        <>
            <Card color={color}>
              <Logo src={tec}  />
                <p>{tittle}</p>
            </Card> 
        </>            
    )
}

const Card = styled.div`
  background:white ;
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
  
`;

  const Logo = styled.img`
        width:5rem;
        height:5rem;
        border-radius:15px;
        margin-right:10px;
  
  `
