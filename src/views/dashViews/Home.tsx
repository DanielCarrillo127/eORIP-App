import React from "react";
import styled from "styled-components";

const StyledMenuIcon = styled.a`
  background-color: transparent;

  border: 0px solid rgb(226, 232, 240);
  color: inherit;
  text-decoration: inherit;
`;

const HomeContainer = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: 56rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const ContainerVertical = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ContainerHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const StyledH2 = styled.h2`
  margin: 0px;
  border: 0px solid rgb(226, 232, 240);
  font-size: inherit;
  font-weight: inherit;
  font-size: 1.125rem;
`;

const StyledSubH2 = styled.div`
  border: 0px solid rgb(226, 232, 240);
  margin-top: 0.5rem;
  color: rgb(74, 85, 104);
  font-size: 0.875rem;
`;

const ContainerWidget = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const StyledContact = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 0.875rem;
  text-transform: uppercase;
`;
const StyledP = styled.p``;

const StyledContactCel = styled.div`
  font-weight: 600;
  margin-left: 0.75rem;
  color: rgb(113, 128, 150);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const HomeSection = () => {
  return (
    <>
      <HomeContainer>
        <ContainerHeader>
          <div>
            <StyledH2>¡Bienvenido al Panel de control de ORIP Online!</StyledH2>
            <StyledSubH2>
              Consulte los servicios disponibles para ti, tu historial de
              transacciones y nuestros canales de atención directa.
            </StyledSubH2>
          </div>
        </ContainerHeader>
        <ContainerVertical>
        <ContainerWidget>Widget 1</ContainerWidget>

        <ContainerWidget>Widget 2</ContainerWidget>
        </ContainerVertical>
        <ContainerWidget>
        <StyledContact>
            <StyledP>Transacciones Recientes</StyledP>
          </StyledContact>

        </ContainerWidget>
       

        <ContainerWidget>
          <StyledContact>
            <StyledP>Atención al Ciudadano</StyledP>
          </StyledContact>
          <StyledContactCel>
            <StyledMenuIcon href="#">57+(601) 328 2121</StyledMenuIcon>
          </StyledContactCel>
        </ContainerWidget>
      </HomeContainer>
    </>
  );
};

export default HomeSection;
