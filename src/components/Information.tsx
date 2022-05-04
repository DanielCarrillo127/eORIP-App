import React from "react";
import styled from "styled-components";
import SNR from "../assets/svgs/snr.svg";
import Button from "./ reusables/Button";

const InformationC = styled.div`
  background: #fff;
  color: #000;
`;
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 50px;
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

const Col6 = styled.div`
  width: 50%;
  margin: 10px 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImgContainer = styled.div`
  padding: 30px;
  @media (max-width: 768px) {
  }
`;
const Img = styled.img`
  width: 500px;
  height: 495px;
  @media (max-width: 768px) {
    width: 300px;
    height: 400px;
  }
`;

const Strong = styled.strong`
    color: #515151;
`;
const TextTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #150c01;
`;
const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #515151;
`;
const TextSeparator = styled.div`
    padding-top: 30px;
`;

const Information = () => {
  return (
    <InformationC id="information">
      <Container>
        <Row>
          <Col6>
            <ImgContainer>
              <Img src={SNR} />
            </ImgContainer>
          </Col6>
          <Col6>

            <TextTitle>Sede Principal y Atención al Ciudadano</TextTitle>
            <Text>Calle 26 No. 13-49 Interior 201, Bogotá D.C. Colombia.</Text>
            <TextSeparator/>
            <Text>
              {" "}
              <Strong>Código postal: </Strong># 110311 – 110311000
            </Text>
            <Text>
              {" "}
              <Strong>Nit:</Strong>899.999.007-0
            </Text>
            <Text>
              {" "}
              <Strong>Horario de Atención: </Strong>08:00 a.m a 05:00 p.m.{" "}
            </Text>
            <Text>
              {" "}
              <Strong>Telefono – Conmutador: </Strong>57+(1) 328 2121
            </Text>
            <Text>
              {" "}
              <Strong>Correo Institucional: </Strong>correspondencia@supernotariado.gov.co
              2121{" "}
            </Text>
            <TextSeparator/>
            <Text>
              {" "}
              <Strong>Conmutador Atención al Ciudadano: </Strong>57+(601) 328
              2121{" "}
            </Text>
            <TextSeparator/>
            <Strong>Correo Notificaciones Judiciales: </Strong>
            <Text>notificaciones.juridica@supernotariado.gov.co </Text>
            <TextSeparator/>
            <Strong>Recibo de correspondencia horario de Atención: </Strong>
            <Text>08:00 a.m. a 05:00 p.m.</Text>
            <TextSeparator/>
            <Button name='Contactar'></Button>
          </Col6>
        </Row>
      </Container>
    </InformationC>
  );
};

export default Information;
