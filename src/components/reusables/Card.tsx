import React from 'react'
import styled from "styled-components";


const CardContainer = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
    border-radius: 14px;
    padding: 40px;
    margin: 20px;
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
    width: 40px;
    height: 40px;
    background: #D4D5D6;
    border-radius: 40px;
    margin: 0 auto;
`;
const Title = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    margin-bottom: 20px;
    color: #000;
    width: 202px;
    height: 52px;
    @media (max-width: 768px) {
        width: 202px;
        height: 52px;
      }
`;
const Content = styled.p`
    color: #515151;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    width: 202px;
    height: 52px;
    @media (max-width: 768px) {
        width: 202px;
        height: 52px;
      }
`;


const Card = (props: any) => {
  return (
    <CardContainer>
        <IconContainer>
            {props.icon}
        </IconContainer>
        <Title>{props.title}</Title>
        <Content>{props.content}</Content>
    </CardContainer>
  )
}

export default Card