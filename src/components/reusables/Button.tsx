import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const ButtonBlue = styled.button`
    background: linear-gradient(305.36deg, #226FE1 10.86%, rgba(34, 111, 225, 0.4) 93.49%);
    color: white;            
    border-radius: 10px;
    outline: none;
    border: none;
    position: absolute;
    height: 42px;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    cursor: pointer;
    &:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
      }
`;



const Button = (props: any) => {
  return (
    <Link to={`${props.path}`}>
    <ButtonBlue>{props.name}</ButtonBlue>
    </Link>
    
  )
}

export default Button