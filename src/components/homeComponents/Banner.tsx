import React from 'react'
import styled from "styled-components";
import Button from '../reusables/Button';
import BannerImg from '../../assets/svgs/BitcoinP2P.svg';
import BannnerStars from '../../assets/svgs/Rectangle.svg';

const Header = styled.header`
    width: 100%;
    height: 75vh;
    background-color: #E5EAFF;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
`;
const Container = styled.div`
width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Row = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 768px) {
        flex-wrap: nowrap;
        height: auto;
      }

`;
const Col6 = styled.div`
    width: 40%;

`;
const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    height: 50vh;
    width: 100%;
    color: #150C01;
`;
const HeaderTitle = styled.h1`
    margin-top: 150px;
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 20px;
    font-style: normal;
    line-height: 78px;
    @media (max-width: 768px) {
        font-size: 35px;
        font-weight: 700;
        margin-bottom: 20px;
      }
`;
const HeaderSubtitle = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 20px;
    color: #515151;
    width: 372px;
    height: 52px;
    @media (max-width: 768px) {
        font-size: 20px;
        font-weight: 300;
        line-height: 30px;
        margin-bottom: 20px;
        width: 372px;
        height: 52px;
      }
`;
const Img = styled.img`
    padding: 0 1px;
    @media (max-width: 768px) {
        width: 290px;
        height: 360px; 
      }
      overflow:hidden;
`;
const Headerstars = styled.img`

    width: 236px;
    height: 236px;
    position:absolute;
    left:90%;
    top:33%;
    max-width: 10%;
    // @media (max-width: 1190px) {
    //     display: none; 
    //   }
    @media (max-width: 768px) {
        display: none; 
      }
`;
const HeaderElement = styled.div`
    position: absolute;
    width: 22px;
    height: 22px;
    left: 468px;
    top: 505px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    @media (max-width: 768px) {
        // display: none; 
      }
`;
const HeaderElement2 = styled.div`
    position: absolute;
    width: 26px;
    height: 26px;
    left: 229px;
    top: 187px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    @media (max-width: 768px) {
        // display: none; 
      }
`;
const HeaderElement3 = styled.div`
    position: absolute;
    width: 45px;
    height: 33px;
    left: 631px;
    top: 171px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    @media (max-width: 768px) {
        display: none; 
      }
`;

const Banner = () => {
  return (
    <>
    <Header id='header'>
        <Container>
            <Row>
                <Col6>
                    <HeaderContent>
                        <div>
                            <HeaderTitle>Confianza, Transparecia</HeaderTitle>
                            <HeaderSubtitle>Modelo de oficina de instrumentos publicos, Tranpararencia para todos.</HeaderSubtitle>      
                            <Button name='Vamos' path='/login'></Button>
                        </div>
                    </HeaderContent>

                </Col6>
                <Col6>
                    <Img src={BannerImg} alt="banner-img"></Img>
                </Col6>
            </Row>
        </Container>
        
    </Header>
        <Headerstars src={BannnerStars} />
        <HeaderElement />
        <HeaderElement2 />
        <HeaderElement3 />
    </>
    
  )
}

export default Banner