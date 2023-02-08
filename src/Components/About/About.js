import styled from "styled-components"
import rafa from "../../Assets/Images/rafa.jpg"

export default function About(){
    return(
        <>
        <Sobre>
          <Title>Sobre mim</Title>
            <Container>
                <img src={rafa}/>
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
    height:40rem;
    background-color: #343541;

    @media (max-width: 767px) {
        height: auto;
    }
`

const Title = styled.h1`
    font-family: 'B612 Mono', monospace;
    font-weight:800;
    color: #FFFFFF;
    font-size: 5rem;
    text-align:center;

    @media (max-width: 767px) {
        font-size: 2.5rem;
    }
`

const Container = styled.div`
    height:20rem;
    display:flex;
    justify-content:center;
    margin-top:40px;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }

    img{
        border-radius:15px;
        width:20rem;
        height:20rem;
        border: 5px solid #b21abd;

        @media (max-width: 767px) {
            width: 10rem;
            height: 10rem;
        }
    }
`

const Description = styled.h2`
    color: #FFFFFF;
    width: 30%;
    text-align:left;
    margin-left:20px;
    font-family: 'B612 Mono', monospace;
    font-size: 1.5rem;

    @media (max-width: 767px) {
        width: 80%;
        text-align: center;
        margin: 0;
    }
`



// const Sobre = styled.div`
//     width:100%;
//     height:40rem;
//     background-color: #343541;

//     @media (max-width: 767px) {
//         height: auto;
//     }
// `

// const Title = styled.h1`
//     font-family: 'B612 Mono', monospace;
//     font-weight:800;
//     color: #FFFFFF;
//     font-size: 5rem;
//     text-align:center;

//     @media (max-width: 767px) {
//         font-size: 2.5rem;
//     }
// `

// const Container = styled.div`
//     height:20rem;
//     display:flex;
//     justify-content:center;
//     margin-top:40px;

//     @media (max-width: 767px) {
//         flex-direction: column;
//         align-items: center;
//     }

//     img{
//         border-radius:15px;
//         width:20rem;
//         height:20rem;
//         border: 5px solid #b21abd;

//         @media (max-width: 767px) {
//             width: 10rem;
//             height: 10rem;
//         }
//     }
// `

// const Description = styled.h2`
//     color: #FFFFFF;
//     width: 30%;
//     text-align:left;
//     margin-left:20px;
//     font-family: 'B612 Mono', monospace;
//     font-size: 1.5rem;

//     @media (max-width: 767px) {
//         width: 80%;
//         text-align: center;
//         margin: 0;
//     }
// `



