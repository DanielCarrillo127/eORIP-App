import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ContextActions, DataContext } from "../utils/userContext";
import Home from "./dashViews/Home";
import Services from "./dashViews/Services";
import Profile from "./dashViews/Profile";
import History from "./dashViews/History";
import ConsultForm from "../components/forms/ConsultForm";
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
`;
const StyledMenuItem = styled.a`
  background-color: transparent;
  box-sizing: inherit;
  border: 0px solid rgb(226, 232, 240);
  color: inherit;
  text-decoration: inherit;
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
  const [Handleonclick, setHDL] = useState("");
  const { logOutUser, user } = React.useContext(DataContext) as ContextActions;

  // const editHDL = (section: string) =>{
  //   setHDL(section);
  // }

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
            <Profile />
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
            <Home />
          </>
        );

      case "Mod-cerForm":
        return (
          <>
            <Home />
          </>
        );

      case "Cre-PQRForm":
        return (
          <>
            <Home />
          </>
        );

      case "Mod-PQRForm":
        return (
          <>
            <Home />
          </>
        );
      default:
        return <Home />;
    }
  };

  return (
    //add here the DashNav and the topBar
    //{map cases by the opcion selected}
    //{map action by the request of the backend}
    <>
      <Dasboard>
        <DashboardContainer>
          <SideBarContainer>
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
              <StyledMenuItem onClick={() => setHDL("home")}>
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
                  <StyledMenuItem onClick={() => setHDL("services")}>
                    <StyledSvg>
                      <VscBriefcase size={24} />
                    </StyledSvg>
                    Servicios
                  </StyledMenuItem>
                </ListNavItem>

                <ListItems>
                  {user?.actions.map((action) => {
                    if (
                      action === "Editar información" ||
                      action === "Hacer administradores a otros usuarios"
                    ) {
                      return(<>
                      </>)
                    } else {
                      const actionName = action.split(" ");
                      const sectionComponent =
                        actionName[0].substring(0, 3) +
                        "-" +
                        actionName[1].substring(0, 3);
                      return (
                        <>
                          <ListNavItemSection>
                            <StyledMenuItem
                              onClick={() => setHDL(`${sectionComponent}Form`)}
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
                {user?.actions.includes(
                  "Hacer administradores a otros usuarios"
                ) ? (
                  <>
                    <ListNavItem>
                      <StyledMenuItem onClick={() => setHDL("adminForm")}>
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
                  <StyledMenuItem onClick={() => setHDL("history")}>
                    <StyledSvg>
                      <VscRepo size={22} />
                    </StyledSvg>
                    Historial Transacciones
                  </StyledMenuItem>
                </ListNavItem>

                <ListNavItem>
                  <StyledMenuItem onClick={() => setHDL("profile")}>
                    <StyledSvg>
                      <VscPerson size={27} />
                    </StyledSvg>
                    Usuario
                  </StyledMenuItem>
                </ListNavItem>
                
                  <ListNavItem>
                    <StyledMenuItem onClick={() => HandleLogOut()}>
                      <StyledSvg>
                        <VscSignOut size={25} />
                      </StyledSvg>
                      Cerrar Sesión
                    </StyledMenuItem>
                  </ListNavItem>
              
              </ListItems>
            </MenuContainer>
          </SideBarContainer>

          <Panel>
            <TopBarContainer>
              ffee
              <ContainerName>
                {/* add action to display profile page */}
                <StyledButtonName type="button">
                  <StyledSpan>
                    {/* add circle with initial letter names */}
                    {user?.name + " " + user?.surnames}
                  </StyledSpan>
                </StyledButtonName>
              </ContainerName>
            </TopBarContainer>

            <Ifclause />
          </Panel>
        </DashboardContainer>
      </Dasboard>
    </>
  );
};

export default UserDasboard;
