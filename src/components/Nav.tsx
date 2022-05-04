import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaAlignJustify } from "react-icons/fa";
// import { animateScroll as scroll } from "react-scroll";
import Button from "./ reusables/Button";
import logo from '../assets/svgs/logo.svg'

const NavBar = styled.nav`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  background: #E5EAFF;
  z-index: 10;
  //box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 50px;
  }
`;
const NavbarContainer = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
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

const ListLinks = styled.ul`
  display: flex;
  list-style-type: none;
  padding-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    background: #1f2235;
    position: fixed;
    top: 0;
    left: 0;
  }
`;
const ListItems = styled.li`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 15px;
  padding: 0 15px;
  @media (max-width: 768px) {
    display: block;
    padding: 20px 0;
    font-size: 14px;
  }
`;

const Toggle = styled.div`
  position: fixed;
  top: 20px;
  right: 25px;
  background: #226FE1;
  color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 10%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <div>
      <NavBar>
        <Container>
          <NavbarContainer>
            <ul>
              <ContainerName>
                {/* <Link onClick={() => scroll.scrollToTop()}>
                </Link> */}
                <Img src={logo} />
                <LogoName>
                  eORIP <br/> OFFICE
                </LogoName>
                
              </ContainerName>
            </ul>
            {state === true ? (
              <ListLinks>
                <ListItems>
                  <Link to="header" smooth={true} duration={1000}>
                    Inicio
                  </Link>
                </ListItems>
                <ListItems>
                  <Link to="services" smooth={true} duration={1000}>
                    Servicios
                  </Link>
                </ListItems>
                <ListItems>
                  <Link to="about" smooth={true} duration={1000}>
                    Acerca de nosotros
                  </Link>
                </ListItems>
                <ListItems>
                  <Link to="information" smooth={true} duration={1000}>
                    Contactanos
                  </Link>
                </ListItems>
                <ListItems>
                  <Button name='Iniciar Sesión' onclick='/login'></Button>
                </ListItems>
              </ListLinks>
            ) : (
              ""
            )}
          </NavbarContainer>
        </Container>
        <Toggle onClick={() => setState(!state)}>
          <FaAlignJustify />
        </Toggle>
      </NavBar>
    </div>
  );
};

export default Nav;
