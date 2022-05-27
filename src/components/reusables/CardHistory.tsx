import React from "react";
import styled from "styled-components";

const ContainerWidget = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const OwnerName = styled.p`
  color: #d4d5d6;
`;

const ContainerColumns = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  list-style: none;
  display: flex;
`;
const ContainerInformation = styled.div`
  box-sizing: border-box;
  list-style: none;
  width: 45%;
  display: flex;
  flex:column;
`;

const Line = styled.div`
height: 1px;
width: 100%;
margin-top: 10px;
margin-bottom: 10px;
background: #ddd;
`;
const LineContainer = styled.div`
display: flex;
flex:column;
justify-content: space-around;
`;
const Line2 = styled.div`
height: 1px;
width: 40%;
margin-top: 10px;
margin-bottom: 10px;
background: #ddd;
`;
const TitleInformation = styled.h5`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  list-style: none;
  margin-bottom: 5px;
  color: rgb(53, 60, 78);
`;
const InformationData = styled.p`
  box-sizing: border-box;
  list-style: none;
  font-size: 12px;

  padding-left: 5px;
  color: rgb(145, 154, 163);
  text-overflow: clip;
  overflow: hidden;
  white-space: initial;
  &:hover {
    white-space: initial;
    overflow: scroll;
  }
`;

const CardHistory = (props:any) => {
  return (
    <ContainerWidget>
      <ContainerColumns>
        <ContainerInformation>
          <TitleInformation>Ciudad - Fecha</TitleInformation>
          <InformationData>{props.data[`city`]} {props.data[`timeStamp`]}</InformationData>
        </ContainerInformation>

        <ContainerInformation>
        <TitleInformation>Status</TitleInformation>
        <InformationData>{props.data[`status`]}</InformationData>
        </ContainerInformation>
        <ContainerInformation>
          <TitleInformation>Tipo</TitleInformation>
          <InformationData>{props.data[`type`] == "CTRA" ? "Cert.Transacciones" : "PQRSD"}</InformationData>
        </ContainerInformation>
      </ContainerColumns>
<Line/>
      <ContainerColumns>
        <ContainerInformation>
          <TitleInformation>Dueño</TitleInformation>
          <InformationData>{props.data[`actualOwner`]}</InformationData>
        </ContainerInformation>
        <ContainerInformation>
        <TitleInformation>Cedula</TitleInformation>
        <InformationData>{props.data[`cedula`]}</InformationData>
        </ContainerInformation>
      </ContainerColumns>
  
      <ContainerColumns>
        {
           props.data[`prevOwner`] === null ? <></> : <ContainerInformation>
            <TitleInformation>Dueño Anterior</TitleInformation>
            <InformationData>{props.data[`prevOwner`]}</InformationData>
          </ContainerInformation>
        }
      </ContainerColumns>
      <LineContainer>
      <Line2/>  <Line2/>
      </LineContainer>
      
      <ContainerColumns>
        <ContainerInformation>
          <TitleInformation>Costo Transacción interna</TitleInformation>
          <InformationData>{props.data[`price`]}</InformationData>
        </ContainerInformation>
        <ContainerInformation>
          <TitleInformation>Valor del acto</TitleInformation>
          <InformationData>{props.data[`actValor`]}</InformationData>
        </ContainerInformation>
      </ContainerColumns>

    </ContainerWidget>
  );
};

export default CardHistory;
