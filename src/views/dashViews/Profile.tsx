import React from "react";
import styled from "styled-components";
import { ContextActions, DataContext } from "../../utils/userContext";

const ProfileContainer = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: 56rem;
  min-width: 36rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: auto;
  padding-right: auto;
  @media (max-width: 908px) {
    min-width: 0rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
`;
const ContainerWidget = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
`;
const ProfileBox = styled.div`
  box-sizing: border-box;
  list-style: none;
  display: flex;
  box-shadow: rgba(69, 90, 100, 0.08) 0px 1px 20px 0px;
`;
const LeftContainer = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  list-style: none;
  width: 35%;
  background: rgb(26, 32, 44);
  padding: 30px 25px;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  text-align: center;
  color: rgb(255, 255, 255);
  @media (max-width: 908px) {
    display: none;
  }
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: columnn;
  justify-content: center;
  align-items: center;
  padding: 14px;
  width: 62px;
  height: 62px;
  background: #d4d5d6;
  border-radius: 50px;
  font-size: 34px;
  margin: 0 auto;
`;

const UserNameLeft = styled.h4`
  padding: 0px;
  box-sizing: border-box;
  list-style: none;
  margin-bottom: 5px;
  margin-top: 10px;
  color: #fff;
`;
const InformationData = styled.p`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  list-style: none;
  font-size: 12px;
  margin-bottom: 10px;
  color: rgb(145, 154, 163);
  text-overflow: clip;
  overflow: hidden;
  white-space: initial;
  &:hover {
    white-space: initial;
    overflow: scroll;
  }
`;
const InformationContainer = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  list-style: none;
  width: 65%;
  background: rgb(255, 255, 255);
  padding: 30px 25px;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  @media (max-width: 908px) {
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
`;
const Section = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  list-style: none;
  margin-bottom: 25px;
`;
const Header = styled.h3`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  list-style: none;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(224, 224, 224);
  color: rgb(53, 60, 78);
  text-transform: uppercase;
  letter-spacing: 5px;
`;
const ContainerColumns = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
const ContainerInformation = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  list-style: none;
  width: 45%;
`;
const TitleInformation = styled.h4`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  list-style: none;
  margin-bottom: 10px;
  color: rgb(53, 60, 78);
  margin-bottom: 5px;
`;

const Profile = () => {
  const { user } = React.useContext(DataContext) as ContextActions;
  return (
    <>
      <ProfileContainer>
        <ContainerWidget>
          <ProfileBox>
            <LeftContainer>
              <IconContainer>
                {user?.name
                  ? `${user?.name.substring(0, 1).toUpperCase()}${user?.surnames
                      .substring(0, 1)
                      .toUpperCase()}`
                  : "JD"}
              </IconContainer>
              <UserNameLeft>{user?.username?.toUpperCase()}</UserNameLeft>
              <InformationData>
                {user?.role === "ADMIN" ? "Administrador" : "Ciudadano"}
              </InformationData>
            </LeftContainer>

            <InformationContainer>
              <Section>
                <Header>Información Base</Header>

                <ContainerColumns>
                  <ContainerInformation>
                    <TitleInformation>Nombre</TitleInformation>

                    <InformationData>{user?.name}</InformationData>
                  </ContainerInformation>

                  <ContainerInformation>
                    <TitleInformation>Apellido</TitleInformation>

                    <InformationData>{user?.surnames}</InformationData>
                  </ContainerInformation>
                </ContainerColumns>
                <ContainerColumns>
                  <ContainerInformation>
                    <TitleInformation>Email</TitleInformation>

                    <InformationData>{user?.email}</InformationData>
                  </ContainerInformation>

                  <ContainerInformation>
                    <TitleInformation>Cedula</TitleInformation>

                    <InformationData>{user?.cedula}</InformationData>
                  </ContainerInformation>
                </ContainerColumns>
              </Section>

              <Section>
                <Header>Información Complementaria</Header>

                <ContainerColumns>
                  <ContainerInformation>
                    <TitleInformation>Peticiones activas</TitleInformation>
                    <InformationData>{user?.numOfPQRSD}</InformationData>
                  </ContainerInformation>
                  <ContainerInformation>
                    <TitleInformation>
                      Certificados en posesión{" "}
                    </TitleInformation>
                    <InformationData>{user?.numOfCertificates}</InformationData>
                  </ContainerInformation>
                </ContainerColumns>
                <ContainerColumns>
                  <ContainerInformation>
                    <TitleInformation>WalletID</TitleInformation>
                    <InformationData>
                    {user?.walletPublicAddress}
                    </InformationData>
                  </ContainerInformation>
                </ContainerColumns>
              </Section>
            </InformationContainer>
          </ProfileBox>
        </ContainerWidget>
      </ProfileContainer>
    </>
  );
};

export default Profile;
