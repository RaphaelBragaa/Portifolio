import React, { useState } from 'react';
import styled from 'styled-components';
import { GrReactjs } from "react-icons/gr";
import { ImEarth } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

export default function Projects({ projects }) {
const [selectedImage, setSelectedImage] = useState(null);



const handleImageClick = (index) => {
  setSelectedImage({ image: projects[index].image,
                     title: projects[index].title, 
                     description: projects[index].description, 
                     tecnologies: projects[index].tecnologies, 
                     deploy: projects[index].deploy,
                     repo:[projects[index].repo]
                    });
};


const closeModal = () => {
setSelectedImage(null);
};

return (
    <>
    <Title data-aos="fade-up" id="projetos">Projetos</Title>
        <GalleryContainer>
            {projects.map((project, index) => (
            <ImageContainer data-aos="zoom-in" key={index} onClick={() => handleImageClick(index)}> 
            <img src={project.image} />
            </ImageContainer>
            ))}
        </GalleryContainer>
        {selectedImage !== null && (
        <ModalContainer onClick={closeModal}>
        <div className="modal-content">
        <div className="left-side">
         <h2>{selectedImage.title}</h2>
         <br/>
        <p>{selectedImage.description}</p>
        <h3>Tecnologias</h3>
        <span style={{ fontSize: '3rem'}}>
            {selectedImage.tecnologies}
          </span>
        <h3>Links</h3>
        <span style={{width:'20%'}}>
        <a href={selectedImage.deploy} target="_blank">
          <ImEarth fontSize={'2.5rem'}  color={'#FFFFFF'} />
        </a>
        <a href={selectedImage.repo[0]} target="_blank">
          <BsGithub fontSize={'2.5rem'} color={'#FFFFFF'} />
        </a>
            
        </span>
        </div>
        <div className="right-side">
        <img src={selectedImage.image} />
  
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

    border: 2px solid  #343541;
    @media (max-width: 767px) {
      font-size: 3rem;
    }
`

const GalleryContainer = styled.div`
 display: flex; 
 flex-wrap: wrap; 
 justify-content: space-between; 
 padding: 10rem;
 border: 2px solid  #343541;
 @media (max-width: 767px) {
  align-items:center;
  padding:2.5rem; 
  width: 76%;

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
        width: 48%;
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
  border-radius:5px;
  padding-right: 20px;
  background-color:#b21abd;
  padding-left:30px;
  padding-top: 15px;
  box-shadow:30px;
  border:1px solid;
  h2{
    background-color:transparent;
    font-size:1.2rem;
    font-weight:700;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    
    text-align:color-interpolation-filters;
    background-color:transparent;
    
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom:10px;
    background-color:transparent;
  }
  span{
    min-width:20%;
    max-width:50%;
    display:flex;
    justify-content:space-between;
    margin-bottom:20px;
    background-color:transparent;
  }
  a{
  background-color:transparent;  
  }
  @media (max-width:1280px){
  
      
      overflow-x: scroll;
    
    
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


