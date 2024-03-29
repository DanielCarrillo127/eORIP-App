import React from 'react'
import styled from 'styled-components';
import { FaQuoteRight } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";



const ComentsC = styled.div`
    background: #fff;
    padding: 30px 0 90px 0 ;
    color: #000;
`;
const Container = styled.div`
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
    flex-wrap: wrap;
    flex-direction: row; 
    justify-content: center;
`;


const TestimonialTitle = styled.h3`
    margin-bottom: 5px;
    color: #C1C1C1;
    font-style: normal;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
`;
const TestimonialSubTitle = styled.p`
    margin-bottom: 5px;
    color: #C1C1C1;
    font-style: normal;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
`;

const TestimonialContent = styled.p`
    margin-bottom: 20px;
    color: #515151;
    font-style: normal;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    width: 202px;

`;
const Card = styled.div`
    border-bottom: 3px #90CAF9 solid !important;
    transition: 0.5s;
    margin-top: 10px;
    background: #edf2f8;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.08);
    border-radius: 14px;
    padding: 30px;
    margin: 20px;
    
`;
const TestimonialIcon = styled.div`
    background-color: #90CAF9;
    color: #ffffff;
    width: 75px;
    height: 75px;
    line-height: 75px;
    border-radius: 40px;
    margin: -60px auto 0 auto;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: columnn;
	z-index: 1;

`;


const Coments = () => {
  return (
    <ComentsC id='comments'>
        <Container>
            <div>
                <Common>
                    <MainHeader>¿Qué dicen las personas?</MainHeader>
                    <MainContent>Que esta pasando últimamente alrededor de la oficina de instrumentos públicos alrededor del pais.</MainContent>
                    <CommonBorder></CommonBorder>
                </Common>
            </div>
            <Row>
                <Card>  
                    <TestimonialIcon>
                        <FaQuoteRight size={34} color='#fff'/>
                    </TestimonialIcon>
                    <TestimonialContent>Con éxito la Superintendente @fergar80 cerró el #CongresoNotariadoyRegistro, un espacio académico dirigido a notarios.</TestimonialContent>
                    <TestimonialTitle>~@Supernotariado</TestimonialTitle>
                    <TestimonialSubTitle><BsTwitter size={15} color='C1C1C1'/></TestimonialSubTitle>
                </Card>
                <Card>  
                    <TestimonialIcon>
                        <FaQuoteRight size={34} color='#fff'/>
                    </TestimonialIcon>
                    <TestimonialContent>Los usuarios podrán programar virtualmente su cita para ser atendidos, de forma presencial, en la Oficina de Registro de Instrumentos Públicos donde requieran realizar el trámite.</TestimonialContent>
                    <TestimonialTitle>~ORIP Cali</TestimonialTitle>
                </Card>
                <Card>  
                    <TestimonialIcon>
                        <FaQuoteRight size={34} color='#fff'/>
                    </TestimonialIcon>
                    <TestimonialContent>El IGAC y la Superintendencia de Notariado y Registro habilitarán una plataforma para el registro masivo de predios en el país.</TestimonialContent>
                    <TestimonialTitle>~@Supernotariado</TestimonialTitle>
                    <TestimonialSubTitle><BsTwitter size={15} color='C1C1C1'/></TestimonialSubTitle>
                </Card>
                
            </Row>

        </Container>
    </ComentsC>
  )
}

export default Coments