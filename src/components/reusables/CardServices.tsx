import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 30px;
  margin: 10px;
  @media (max-width: 768px) {
    width: 202px;
    height: 192px;
    justify-content: center;
    align-items: center;
  }
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: columnn;
  justify-content: center;
  align-items: center;
  padding: 14px;
  width: 25px;
  height: 25px;
  background: #d4d5d6;
  border-radius: 40px;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  margin: 10px auto;
  margin-bottom: 20px;
  color: #000;
  width: 152px;
`;

const Button = styled.button`
background: linear-gradient(305.36deg, #226FE1 10.86%, rgba(34, 111, 225, 0.4) 93.49%);
color: white;            
border-radius: 10px;
outline: none;
border: none;
height: 42px;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 12px;
cursor: pointer;
display:block;
  margin-left: auto;
  margin-right: auto;
&:hover {
    transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;
    color: #fff;
    text-decoration: none;
  }
`;

const Card = (props: any) => {
  return (
    <CardContainer>
      <IconContainer>{props.icon}</IconContainer>
      <Title>{props.title}</Title>
      <Button onClick={props.onclick}>Llenar Formulario</Button> 
    </CardContainer>
  );
};

export default Card;
