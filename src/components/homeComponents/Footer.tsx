import React from "react";
import styled from "styled-components";
import logo from "../../assets/svgs/logo.svg";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import gov from "../../assets/svgs/gov.svg";
const FooterC = styled.div`
  background: #fff;
  padding: 10px 0;
  color: #000;
  width: 100%;
  height: 50vh;
  background-color: #e5eaff;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const RowLast = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const Col3 = styled.div`
  width: 40%;
  margin: 10px 0;
  @media (max-width: 768px) {
    width: 50%;
    margin: 10px 0;
  }
`;
const Col7 = styled.div`
  width: 60%;
  margin: 10px 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InformationContainer = styled.div`
    @media (max-width: 768px) {
      display: none; 
    }
`;
const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`;
const ContainerName = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #4d8ae5;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 30px 0;
`;
const LogoName = styled.div`
  padding-top: 20px;
  padding-left: 10px;
`;
const Img = styled.img`
  margin-top: 10px;
  padding-top: 5px;
  width: 55px;
  height: 51px;
`;
const TextLeft = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #515151;
  width: 289px;
  height: 72px;
`;
const MediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  float: left;
`;
const MediaIcon = styled.a`
  padding: 10px;
  width: 20px;
  height: 20px;
  background: #c2ceff;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  flex-direction: columnn;
  margin: 20px 0 20px 10px;
`;
const ImgGov = styled.img`
  float: left;
`;

const CopyRight = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #515151;
  padding: 0 90px 0 50px;
`;

const Footer = () => {
  return (
    <FooterC id="footer">
      <Container>
        <Row>
          <Col3>
            <ContainerName>
              {/* <Link onClick={() => scroll.scrollToTop()}>
                    </Link> */}
              <Img src={logo} />
              <LogoName>
                eORIP <br /> OFFICE
              </LogoName>
            </ContainerName>
            <TextLeft>
            El Supernotariado es una entidad pública, reconocida como una unidad administrativa especial con personería jurídica y patrimonio autónomo, adscrita al Ministerio de Justicia.
            </TextLeft>
            <MediaContainer>
              <MediaIcon target="_blank" href="https://www.facebook.com/superintendenciadenotariadoyregistrodecolombia/?ref=stream">
                <BsFacebook size={23} color="#515151" />
              </MediaIcon>
              <MediaIcon target="_blank" href="https://www.instagram.com/supernotariado/">
                <BsInstagram size={23} color="#515151" />
              </MediaIcon>
              <MediaIcon target="_blank" href="https://twitter.com/Supernotariado"> 
                <BsTwitter size={23} color="#515151" />
              </MediaIcon>
              <MediaIcon target="_blank" href="https://www.linkedin.com/company/superintendencia-de-notariado-y-registro/">
                <BsLinkedin size={23} color="#515151" />
              </MediaIcon>
            </MediaContainer>
          </Col3>
          <Col7>
            <InformationContainer>
              <Text>Asesoría Jurídica</Text>
              <Text>
                Oficina de Registro de Instrumentos Públicos Bogotá Zona Centro
              </Text>
              <Text>Dias de Atención: Martes y Jueves</Text>
              <Text>Horario de Atención : 8:00 a.m. a 12:00 p.m</Text>
              <Text>
                Reparto Notarial Distrito Capital: 8:00 a.m. a 2:00 p.m.
              </Text>
              <Text>
                {" "}
                Oficinas de Registro de Instrumentos Públicos de 8 a.m. a 12
                p.m.
              </Text>
            </InformationContainer>
          </Col7>
        </Row>
      </Container>
      <RowLast>
        <ImgGov src={gov} />
        <CopyRight>© Copyright.all right reserved.</CopyRight>
        <CopyRight>Privacy Policy Term & Conditions</CopyRight>
      </RowLast>
    </FooterC>
  );
};

export default Footer;
