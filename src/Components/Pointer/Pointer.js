import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";
import { Link } from 'react-scroll';

export default function Pointer() {

  return (
    <>
       <Link to="header" smooth={true} duration={500} style={{backgroundColor: "transparent"}}>
            <Scroll>
                <FaArrowUp />
            </Scroll>
        </Link>
    </>
  );
}

const Scroll = styled.div`

  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: #FF4495;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
  :hover {
  opacity: 0.7;
} 
`
