import styled from "styled-components"
import React, { useState } from 'react';
import Forms from "../Forms/Forms";
import rafa from "../../Assets/Images/rafa.jpg"
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs'



export default function Contact(){
    
    return (
        <>
        <Tittle>Contate-me</Tittle>
     <Container>
        <ContactBox>
        <img src={rafa}/>
        <div className="Contacts">
            <BsLinkedin fontSize={'2.8rem'} color={'#FF4495'} />
            <BsGithub fontSize={'2.8rem'} color={'#FF4495'}/>
            <BsWhatsapp fontSize={'2.8rem'} color={'#FF4495'}/>
        </div>
        <div className="Email">
            <h2>rbragamouraa@gmail.com</h2>
        </div>
        </ContactBox>
     <Forms/>
     </Container>
     </>
    )
}

const Container = styled.div`
    background-color: #343541;
    font-family: 'B612 Mono', monospace;
    display:flex;
    justify-content:space-around;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`

const ContactBox = styled.div`
    width:40%;
    height:40rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media (max-width: 767px) {
        margin-top:20px;
        width: 90%;
        height: auto;
    }

    img{
        width:11rem;
        height:11rem;
        border-radius:5rem;
    }
    .Contacts{
        margin-top:20px;
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:40%;
        height: 4rem;

        @media (max-width: 767px) {
            width: 80%;
        }
    }
    .Email{
        margin-top:1rem;
        width:30%;
        height: 2.5rem;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:10px;
        border:2px solid #FF4495; 
        color: white;
        font-family: 'B612 Mono', monospace;

        @media (max-width: 767px) {
            width: 70%;
            height: 2rem;
            margin-bottom:1rem;
        }

        h2{
            margin:auto;
            text-align:center;
        }
    }
`

const Tittle = styled.h1`
    background-color: #343541;
    width:100%;
    font-family: 'B612 Mono', monospace;
    font-weight:800;
    color:white;
    font-size: 5rem;
    text-align:center;
    padding-top:20px;
    margin:auto;

    @media (max-width: 767px) {
        font-size: 3rem;
    }
`


// const Container = styled.div`
//     background-color: #343541;
//     font-family: 'B612 Mono', monospace;
//     display:flex;
//     justify-content:space-around;

// `

// const ContactBox = styled.div`
//     width:40%;
//     height:40rem;
//     display:flex;
//     flex-direction:column;
//     align-items:center;
//     justify-content:center;

//     img{
//         width:11rem;
//         height:11rem;
//         border-radius:5rem;
//     }
//     .Contacts{
//         margin-top:20px;
//         display:flex;
//         justify-content:space-around;
//         align-items:center;
//         width:40%;
//         height: 4rem;
//     }
//     .Email{
//         margin-top:1rem;
//         width:30%;
//         height: 2.5rem;
//         display:flex;
//         justify-content:center;
//         align-items:center;
//         border-radius:10px;
//         border:2px solid #FF4495; 
//         color: white;
//         font-family: 'B612 Mono', monospace;
//         h2{
//             margin:auto;
//             text-align:center;
//         }
//     }
// `

// const Tittle = styled.h1`
//     background-color: #343541;
//     width:100%;
//     font-family: 'B612 Mono', monospace;
//     font-weight:800;
//     color:white;
//     font-size: 5rem;
//     text-align:center;
//     padding-top:20px;
//     margin:auto;
// `