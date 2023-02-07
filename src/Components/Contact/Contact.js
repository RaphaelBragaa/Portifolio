import styled from "styled-components"
import React, { useState } from 'react';
import Forms from "../Forms/Forms";

export default function Contact(){
    
    return (
     <Container>
        <h1 className="Title">Contate-me</h1>
     <Forms/>
     </Container>
    )
}

const Container = styled.div`
    background-color: #343541;
    font-family: 'B612 Mono', monospace;
    .Title{
        width:30%;
        font-family: 'B612 Mono', monospace;
        font-weight:800;
        color:white;
        font-size: 5rem;
        text-align:center;
        padding-top:20px;
        margin:auto;
    }
`