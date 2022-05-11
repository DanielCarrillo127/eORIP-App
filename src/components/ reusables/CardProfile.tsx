import React from 'react'
import styled from "styled-components";

const CardContainer = styled.div`
    padding: 1em;
`;

interface ImgProps {
    readonly img: string;
  }

const CardImg= styled.img<ImgProps>`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 53.95%, rgba(0, 0, 0, 0.82) 100%), url(${(props) => props.img});
    border-radius: 14px;
`;

const CardContent= styled.div`
    position: relative;
    top: -110px; 
	z-index: 1;
    padding-right: 10px;
`;


const Cardtitle = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: right;
    color: #fff;
`;
const CardSubtitle = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    text-align: right;
    color: #fff;
`;
const CardButton = styled.button`
    border: none;
    font-size: 12px;
    width: 102px;
    height: 30px;
    background: #fff;
    border-radius: 20px;
    color: #000;
    float: right;   
    cursor: pointer;
`;



const CardProfile = (props: any) => {
  return (
    <CardContainer>
        <CardImg img={props.profile} width="272" height="312"/>
        <CardContent >
            <Cardtitle>{props.Profilename}</Cardtitle>
            <CardSubtitle>{props.subtitle}</CardSubtitle>
            <a href={props.git}>
                <CardButton>Ver</CardButton>
            </a>
        </CardContent>
    </CardContainer>
  )
}

export default CardProfile