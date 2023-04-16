import React, { useState } from 'react';
import styled from 'styled-components';
import { GrReactjs } from "react-icons/gr"
import { ImEarth } from "react-icons/im"
import { BsGithub } from "react-icons/bs"


export default function Projects({ images, descriptions, sectionRef, projects }) {
const [selectedImage, setSelectedImage] = useState(null);


const handleImageClick = (index) => {
setSelectedImage(index);
};

const closeModal = () => {
setSelectedImage(null);
};

return (
    <>
    <Title ref={ sectionRef }>PROJETOS</Title>
        <GalleryContainer>
            {projects.map((project, index) => (
            <ImageContainer key={index} onClick={() => handleImageClick(index)}>
            <img src={project.image} />
            </ImageContainer>
            ))}
        </GalleryContainer>
        {selectedImage !== null && (
        <ModalContainer onClick={closeModal}>
        <div className="modal-content">
        <div className="left-side">
        <h3>Image Description</h3>
        <p>{projects.description[selectedImage]}</p>
        <h3>Tecnologias</h3>
        <span>
            <GrReactjs fontSize={'2.5rem'}/>
            <GrReactjs fontSize={'2.5rem'}/>
        </span>
        <h3>Links</h3>
        <span>
            <ImEarth fontSize={'2.5rem'}/>
            <BsGithub fontSize={'2.5rem'}/>
        </span>
        </div>
        <div className="right-side">
        <img src={projects.image[selectedImage]} />
        
        </div>
        </div>
        </ModalContainer>
        )}
    </>
);
};

const Title = styled.h1`
    font-family: 'B612 Mono', monospace;
    font-weight:800;
    color: #FFFFFF;
    font-size: 5rem;
    text-align:center;
    background-color: #343541;
    border: 2px solid  #343541;

    @media (max-width: 767px) {
        font-size: 2.5rem;
    }
`

const GalleryContainer = styled.div`
 display: flex; 
 flex-wrap: wrap; 
 justify-content: space-between; 
 padding: 10rem;
 background-color: #343541;
 border: 2px solid  #343541;

 @media (max-width: 767px) {
  align-items:center;
  padding:2.5rem; 
  width: 80%;

 }
`
 

const ImageContainer = styled.div`
width: 30%;
height: 300px;
overflow: hidden;
margin-bottom: 20px;
border-radius: 10px;
cursor: pointer;

@media (max-width: 767px) {
  height: 150px;
        width: 150px;
    overflow: hidden;
}

img {
width: 100%;
height: 100%;
object-fit: cover;
}
`;

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.7);
display: flex;
align-items: center;
justify-content: center;
z-index: 1;
color: #FFFFFF;
font-family: 'B612 Mono', monospace;
.modal-content {

width: 60%;
height: 80%;
display: flex;
justify-content: space-between;
padding: 20px;
border-radius: 20px;

@media (max-width: 767px) {
  flex-direction:column-reverse;
   justify-content:start;
    width: 80%;
    height: 70%;
    padding: 10px;
}

.left-side {
  width: 50%;
  padding-right: 20px;
  background-color:#b21abd;
  padding-left:30px;
  padding-top: 15px;
  box-shadow:30px;
  
  h3 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight:700;
    text-align:color-interpolation-filters;
  }
  
  p {
    font-size: 1.8rem;
    margin-bottom:10px;
  }
  span{
    width:20%;
    display:flex;
    justify-content:space-between;
    margin-bottom:20px;
  }
  @media (max-width: 767px) {
    height:60%;
    width:80%;
    overflow-y: scroll;
    h3 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
    margin-bottom:10px;
  }
  span{
    width:40%;
  }

  }
}

.right-side {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #343541;
  img {
    width: 70%;
    height: 40%;
    object-fit: cover;
  }
  @media (max-width: 767px) {
    width: 96%;
    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  }
}
}
`;


