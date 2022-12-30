import styled from "styled-components"
import rafa from "../../Assets/Images/rafa.jpg"

export default function About(){
    return(
        <>
            <Sobre>
            <Title>Quem sou eu?</Title>
            <Container>
                <Photo rafa={rafa}/>
                <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Description> 
            </Container>
        </Sobre>
        </>
    )
}

const Sobre = styled.div`
    width:100%;
    height:50rem;
    background-color: black;
`
const Title = styled.h1`
 font-family: 'B612 Mono', monospace;
 font-weight:800;
 color: #FFFFFF;
 font-size: 5rem;
 text-align:center;
`
const Container = styled.div`
    display:flex;
    justify-content:start;
`

const Description = styled.h2`
color: #FFFFFF;
width: 50%;
text-align:left;
margin-top:20px;
`
const Photo = styled.div`
    height:20rem;
    background-image:url(${(props)=>props.rafa});
`