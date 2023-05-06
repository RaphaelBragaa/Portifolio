import styled from "styled-components";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Forms(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const TemplateParams = {
        from_name: name,
        message,
        email
      }
     emailjs.send("service_6xkn3je","template_p7c4fpp", TemplateParams, "xlDl4zoTkHzp40WBX")
     .then((response)=> {
      console.log(response.status)
      setEmail('')
      setMessage('')
      setName('')
     }).catch((err) => {
      console.log(err)
     })
    };
  
    return (
     <ContainerForm>
        <h1>Me envie um email</h1>
        <h2>Será um prazer atende-lo !</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="nome"
            value={name}
            placeholder="Nome"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <textarea
            id="mensagem"
            value={message}
            placeholder="Mensagem"
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      </ContainerForm>
    )
}
const ContainerForm = styled.div`
  width:30%;
  height:40rem;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;

  h1 {
    font-size: 2rem;
    color:white;
    font-weight:600;
    margin-bottom:5px;
  }
  h2 {
    font-size: 1rem;
    color:white;
    font-weight:400;
    color:#FF4495;
    margin-bottom:5px;
  }
  form {
    width:50%;
    height:20rem;
    align-items:center;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    div {
      width:100%;
      text-align:center;
      margin:auto;
    }
    input {
      border-radius:5px;
      border:none;
      width:100%;
      height:2.5rem;
      padding-left:10px;
    }
    textarea {
      border-radius:5px;
      border:none;
      width:100%;
      height:4.5rem;
      padding-left:10px;
      padding-top:5px;
    }
    button {
      margin:auto;
      border:none;
      border-radius:5px;
      height:2.5rem;
      width:50%;
      font-weight:700;
      color:#FFFFFF;
      background-color:#FF4495;
      font-family: 'B612 Mono', monospace;
      cursor: pointer;
      :active{
        background-color:#FFFFFF;
        color:#FF4495;
      }
    }
  }

  @media (max-width: 768px) {
    width:90%;
    height:auto;
    form {
      width:80%;
    }
  }
`
