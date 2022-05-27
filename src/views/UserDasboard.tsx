import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ContextActions, DataContext } from "../utils/userContext";
import Home from "./dashViews/Home";
import Services from "./dashViews/Services";
import Profile from "./dashViews/Profile";
import History from "./dashViews/History";
import ConsultForm from "../components/forms/ConsultForm";
import CreatePQRForm from "../components/forms/CreatePQRForm";
import logo from "../assets/svgs/logo.svg";

import {
  VscBriefcase,
  VscDebugBreakpointLogUnverified,
  VscHome,
  VscPerson,
  VscPersonAdd,
  VscRepo,
  VscSignOut,
} from "react-icons/vsc";
import ModPQRForm from "../components/forms/ModPQRForm";
import ModCertForm from "../components/forms/ModCertForm";
import CreateCertForm from "../components/forms/CreateCertForm";
import ConsultPQRForm from "../components/forms/ConsultPQRForm";
import AdminForm from "../components/forms/AdminForm";

const Dasboard = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  font-family: Nunito, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: rgb(26, 32, 44);
  -webkit-font-smoothing: antialiased;
`;
const DashboardContainer = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  background-color: rgb(237, 242, 247);
  display: flex;
  min-height: 100vh;
`;
const SideBarContainer = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  background-color: rgb(26, 32, 44);
  flex-shrink: 0;
  width: 16rem;
  @media (max-width: 768px) {
    width: 5rem;
  }
`;
const StyledMenuItem = styled.a`
  background-color: transparent;
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  color: inherit;
  text-decoration: inherit;
  cursor: pointer;
  &:hover {
    color: #4d8ae5;
  }
  @media (max-width: 768px) {
    font-size: 0;
  }
`;
const ListNavItemLogOut = styled.a`
  background-color: transparent;
  box-sizing: inherit;

  color: inherit;
  text-decoration: inherit;
  cursor: pointer;
  position: absolute;
  bottom: -25px;
  margin-bottom: 15px;
  &:hover {
    color: #4d8ae5;
  }
  &:active {
    color: #4d8ae5;
  }
`;
const HomeSection = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  color: rgb(255, 255, 255);
`;

const MenuContainer = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  border-color: rgb(74, 85, 104);
  border-top-width: 1px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;
const StyledH4 = styled.h4`
  box-sizing: inherit;
  margin: 0px;
  border: 0px solid rgb(226, 232, 240);
  font-size: inherit;
  font-weight: inherit;
  font-weight: 700;
  color: rgb(113, 128, 150);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  @media (max-width: 768px) {
    font-size: 0;
  }
`;
const ListItems = styled.ul`
  box-sizing: inherit;
  margin: 0px;
  padding: 0px;
  list-style: none;
  border: 0px solid rgb(226, 232, 240);
  margin-top: 0.75rem;
  color: rgb(255, 255, 255);
`;
const ListNavItem = styled.li`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  margin-top: 0.75rem;
`;
const ListNavItemSection = styled.li`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  margin-top: 0.75rem;
  margin-left: 0.95rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
const PanelContainer = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const TopBarContainer = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  background-color: rgb(255, 255, 255);
  flex-shrink: 0;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;
const ContainerName = styled.div`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding-left: 3rem;
  padding-right: 3rem;
  float: right;
`;
const StyledSvg = styled.svg`
  height: 1.5rem;
  fill: currentcolor;
  color: rgb(113, 128, 150);
  margin: 0 5px -3px 0;
  width: 1.5rem;
  &:hover {
    color: #4d8ae5;
  }
  &:active {
    color: #4d8ae5;
  }
`;
const StyledButtonName = styled.button`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0px;
  overflow: visible;
  text-transform: none;
  appearance: button;
  box-sizing: inherit;
  background: transparent;
  padding: 0px;
  outline: -webkit-focus-ring-color auto 5px;
  border: 0px solid rgb(226, 232, 240);
  cursor: pointer;
  padding: 0px;
  line-height: inherit;
  color: inherit;
  display: block;
  outline: 0px;
  width: 100%;
`;
const StyledSpan = styled.span`
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  display: flex;
  align-items: center;
  margin-left: 0.75rem;
`;

const Img = styled.img`
  margin-top: 10px;
  padding-top: 5px;
  width: 55px;
  height: 51px;
  @media (max-width: 768px) {
    width: 35px;
    height: 31px;
  }
`;
const ContainerNameLogo = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #4d8ae5;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding-left: 20px;
`;
const LogoName = styled.div`
  padding-top: 20px;
  padding-left: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const HeaderInformation = styled.div`
  box-sizing: inherit;
  display: flex;
  align-items: center;
  margin: 0;
  width: 50%;
  position: absolute;
  top: 35%;
  margin-left: 0.75rem;
  justify-content: start;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6vw;
  line-height: 18px;
  color: #4d8ae5;
  @media (max-width: 768px) {
    font-size: 3vw;
    line-height: 16px;
  }
`;
const ContainerHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: columnn;
  justify-content: center;
  align-items: center;
  padding: 14px;
  width: 12px;
  height: 12px;
  background: #d4d5d6;
  border-radius: 40px;
  margin: 0 10px 0 0;
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
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;
const StyledMenuIcon = styled.a`
  background-color: transparent;
  border: 0px solid rgb(226, 232, 240);
  color: inherit;
  text-decoration: inherit;
  padding-left: 18px;
`;
const ContainerFooter = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 1px;
`;

type HeaderProps = {
  children: React.ReactElement[] | JSX.Element[];
};

const Panel: React.FC<any> = (props: HeaderProps) => {
  return <PanelContainer>{props.children}</PanelContainer>;
};

const UserDasboard = () => {
  // const sampleLocation = useLocation();
  const navigate = useNavigate();

  const [headerRoute, setHeaderRoute] = useState("Inicio");
  const { logOutUser, user, Handleonclick, editHDL, handelSession } =
    React.useContext(DataContext) as ContextActions;

  useEffect(() => {
    handelSession();
    editHDL("home");
  }, []);

  const HandleLogOut = () => {
    logOutUser();
    navigate("/login");
  };

  const Ifclause = () => {
    switch (Handleonclick) {
      case "home":
        return <Home />;

      case "services":
        return (
          <>
            <Services />
          </>
        );

      case "history":
        return (
          <>
            <History />
          </>
        );

      case "profile":
        return (
          <>
            <Profile />
          </>
        );

      case "adminForm":
        return (
          <>
            <AdminForm />
          </>
        );

      case "Con-cerForm":
        return (
          <>
            <ConsultForm />
          </>
        );

      case "Cre-cerForm":
        return (
          <>
            <CreateCertForm />
          </>
        );

      case "Mod-cerForm":
        return (
          <>
            <ModCertForm />
          </>
        );

      case "Cre-PQRForm":
        return (
          <>
            <CreatePQRForm />
          </>
        );

      case "Mod-PQRForm":
        return (
          <>
            <ModPQRForm />
          </>
        );

      case "Con-PQRForm":
        return (
          <>
            <ConsultPQRForm />
          </>
        );
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Dasboard>
        <DashboardContainer>
          <SideBarContainer>
            <StickyContainer>
              <StyledMenuItem href="#">
                <ContainerNameLogo>
                  {/* <Link onClick={() => scroll.scrollToTop()}>
                    </Link> */}
                  <Img src={logo} />
                  <LogoName>
                    eORIP <br /> Online Panel
                  </LogoName>
                </ContainerNameLogo>
              </StyledMenuItem>
              <HomeSection>
                <StyledMenuItem
                  onClick={() => {
                    editHDL("home");
                    setHeaderRoute("Inicio");
                  }}
                >
                  <StyledSvg>
                    <VscHome size={25} />
                  </StyledSvg>
                  Inicio
                </StyledMenuItem>
              </HomeSection>
              <MenuContainer>
                <StyledH4>Recursos</StyledH4>

                <ListItems>
                  <ListNavItem>
                    <StyledMenuItem
                      onClick={() => {
                        editHDL("services");
                        setHeaderRoute("Portafolio de Servicios");
                      }}
                    >
                      <StyledSvg>
                        <VscBriefcase size={24} />
                      </StyledSvg>
                      Servicios
                    </StyledMenuItem>
                  </ListNavItem>

                  <ListItems>
                    {user?.actions?.map((action) => {
                      if (
                        action === "Editar información" ||
                        action === "Hacer administradores a otros usuarios"
                      ) {
                        return <></>;
                      } else {
                        const actionName = action.split(" ");
                        const sectionComponent =
                          actionName[0].substring(0, 3) +
                          "-" +
                          actionName[1].substring(0, 3);
                        return (
                          <>
                            <ListNavItemSection key={sectionComponent}>
                              <StyledMenuItem
                                onClick={() => {
                                  editHDL(`${sectionComponent}Form`);
                                  setHeaderRoute(`Portafolio de Servicios`);
                                }}
                              >
                                <StyledSvg>
                                  <VscDebugBreakpointLogUnverified size={25} />
                                </StyledSvg>
                                {action}
                              </StyledMenuItem>
                            </ListNavItemSection>
                          </>
                        );
                      }
                    })}
                  </ListItems>
                  {user?.actions?.includes(
                    "Hacer administradores a otros usuarios"
                  ) ? (
                    <>
                      <ListNavItem>
                        <StyledMenuItem
                          onClick={() => {
                            editHDL("adminForm");
                            setHeaderRoute(
                              "Formulario de Solicitud Nuevos Adminintradores"
                            );
                          }}
                        >
                          <StyledSvg>
                            <VscPersonAdd size={25} />
                          </StyledSvg>
                          Solicitar Adminintrador
                        </StyledMenuItem>
                      </ListNavItem>
                    </>
                  ) : (
                    <></>
                  )}

                  <ListNavItem>
                    <StyledMenuItem
                      onClick={() => {
                        editHDL("history");
                        setHeaderRoute("Historial de Transacciones");
                      }}
                    >
                      <StyledSvg>
                        <VscRepo size={22} />
                      </StyledSvg>
                      Historial Transacciones
                    </StyledMenuItem>
                  </ListNavItem>

                  <ListNavItem>
                    <StyledMenuItem
                      onClick={() => {
                        editHDL("profile");
                        setHeaderRoute("Perfil de Usuario");
                      }}
                    >
                      <StyledSvg>
                        <VscPerson size={27} />
                      </StyledSvg>
                      Usuario
                    </StyledMenuItem>
                  </ListNavItem>
                  <ListNavItemLogOut>
                    <StyledMenuItem onClick={() => HandleLogOut()}>
                      <StyledSvg>
                        <VscSignOut size={25} />
                      </StyledSvg>
                      Cerrar Sesión
                    </StyledMenuItem>
                  </ListNavItemLogOut>
                </ListItems>
              </MenuContainer>
            </StickyContainer>
          </SideBarContainer>

          <Panel>
            <TopBarContainer>
              <ContainerHeader>
                <HeaderInformation>{headerRoute}</HeaderInformation>
              </ContainerHeader>
  
              <ContainerName>
                <StyledButtonName
                  type="button"
                  onClick={() => {
                    editHDL("profile");
                    setHeaderRoute("Perfil de Usuario");
                  }}
                >
                  <StyledSpan>
                    {/* add circle with initial letter names */}
                    <IconContainer>
                      {user?.name
                        ? `${user?.name
                            .substring(0, 1)
                            .toUpperCase()}${user?.surnames
                            .substring(0, 1)
                            .toUpperCase()}`
                        : "JD"}
                      {/* {user?.name.substring(0,1) + " " + user?.surnames.substring(0,1)} */}
                    </IconContainer>
                    {user?.name + " " + user?.surnames}
                  </StyledSpan>
                </StyledButtonName>
              </ContainerName>
            </TopBarContainer>

            <Ifclause />
            <ContainerFooter>
              <StyledContact>
                <StyledP>© 2022, copyright all rights reserved by JFD </StyledP>
              </StyledContact>
              <StyledContactCel>
                <StyledMenuIcon href="#">About office </StyledMenuIcon>

                <StyledMenuIcon href="#">License</StyledMenuIcon>
              </StyledContactCel>
            </ContainerFooter>
          </Panel>
        </DashboardContainer>
      </Dasboard>
    </>
  );
};

export default UserDasboard;
