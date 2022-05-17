import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaAlignJustify } from "react-icons/fa";
// import { animateScroll as scroll } from "react-scroll";
import Button from "./reusables/Button";
import logo from "../assets/svgs/logo.svg";

export const NavBar = styled.nav`
  background: #e5eaff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  justify-content: flex-start;
`;

export const NavLink = styled(Link)`
  color: rgba(81, 81, 81, 0.7);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;
export const NavLinkBtn = styled.div`
  color: rgba(81, 81, 81, 0.7);
  display: flex;
  justify-content: center;
  padding: 10px 0 0 0 ;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const NavLinkLogo = styled(Link)`
  color: #4d8ae5;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaAlignJustify)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  // width: 100vw;
  // white-space: nowrap;

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

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Nav = () => {
  return (
    <>
      <NavBar>
        <ContainerName>
          <NavLinkLogo to="header" smooth={true} duration={1000}>
            <Img src={logo} />
            <LogoName>
              eORIP <br /> OFFICE
            </LogoName>
          </NavLinkLogo>
        </ContainerName>
        <Bars />
        <NavMenu>
          <NavLink to="header" smooth={true} duration={1000}>
            Inicio
          </NavLink>
          <NavLink to="services" smooth={true} duration={1000}>
            Servicios
          </NavLink>
          <NavLink to="about" smooth={true} duration={1000}>
            Nosotros
          </NavLink>
          <NavLink to="information" smooth={true} duration={1000}>
            Contactanos
          </NavLink>
          <NavLinkBtn>
            <Button name="Iniciar Sesión" path="/login"></Button>
          </NavLinkBtn>
        </NavMenu>
      </NavBar>
    </>
  );
};

export default Nav;
