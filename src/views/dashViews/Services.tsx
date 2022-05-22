import styled from "styled-components";
import Card from "../../components/reusables/CardServices";
import { GrCertificate } from "react-icons/gr";
import { ContextActions, DataContext } from "../../utils/userContext";
import React from "react";

const ServiceContainer = styled.div`
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

  @media (max-width: 768px) {
    min-width: 0rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }

`;

// const ContainerVertical = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
// `;

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
    justify-content: center;
`;
const ContainerService = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const Services = () => {
  const { user , editHDL } = React.useContext(DataContext) as ContextActions;
  
  const HandleEditHDL = (section: string) =>{
    console.log(section)
    editHDL(section)
  }

  return (
    <>
      <ServiceContainer>
        <ContainerHeader>
          <div>
            <StyledH2>Panel de Servicios</StyledH2>
            <StyledSubH2>
              Aqui se encuentran listadas todas acciones-servicios que puedes
              consumir como usuario en la oficina de instrumentos publicos.
            </StyledSubH2>
          </div>
        </ContainerHeader>

        <ContainerWidget>
          <ContainerService>
            {user?.actions.map((action) => {
              if (action === "Editar información") {
                return <></>;
              } else {
                const actionName = action.split(" ");
                const sectionComponent =
                  actionName[0].substring(0, 3) +
                  "-" +
                  actionName[1].substring(0, 3) + "Form";
                return <>
                <Card key={sectionComponent} title={action} icon={<GrCertificate size={30}/>} onclick={() => HandleEditHDL(sectionComponent)}/>
                </>;
              }
            })}
          </ContainerService>
        </ContainerWidget>
      </ServiceContainer>
    </>
  );
};

export default Services;

