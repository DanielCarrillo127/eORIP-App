import React from 'react'
import styled from "styled-components";
import Card from './ reusables/Card';
import { GrCertificate } from "react-icons/gr";
import { GrDocumentPpt } from "react-icons/gr";

const ServicesC = styled.div`
    background: #fff;
    padding: 40px 0;
    color: #000;
`;
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Common = styled.div`
    width: 33.33333333333333%;
    margin: 20px auto;
    text-align: center;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
const MainHeader = styled.h1`
    font-size: 32px;
    margin-bottom: 20px;
    color: #000;
`;
const MainContent = styled.p`
    color: #515151;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

`;
const CommonBorder = styled.div`
    background: #4d8ae5;
    height: 3px;
    width: 100px;
    margin: 30px auto;
`;
const Row = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
      }
`;

const Services = () => {

  return (
    <ServicesC id='services'>
        <Container>
            <div>
                <Common>
                    <MainHeader>Nuestros Servicios</MainHeader>
                    <MainContent>La eORIP cuenta con varios servicios entre los cuales destacan los que se listan a co ntinuación.</MainContent>
                    <CommonBorder></CommonBorder>
                </Common>
            </div>
            <Row>
                <Card title="Certificados de tradición y libertad" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque augue." icon={<GrCertificate size={30}/>} />
                <Card title="PQRSD" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque augue." icon={<GrDocumentPpt size={30}/>} />
            </Row>
        </Container>
    </ServicesC>
  )
}

export default Services