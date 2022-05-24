import React, { useState } from "react";
import styled from "styled-components";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-scroll";
import Button from "../reusables/Button";
import logo from "../../assets/svgs/logo.svg";


const MenuLink = styled(Link)`
  padding: 0 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: rgba(81, 81, 81, 0.7);
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #4d8ae5;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 5px;
  }
  
`;
const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #e5eaff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  @media (max-width: 768px) {
    background: white;
  }
  z-index: 10;
`;
interface OpenProps {
  readonly isOpen: boolean;
}
const Menu = styled.div<OpenProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;
const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #4d8ae5;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavLinkBtn = styled.a`
padding: 0 4rem 0 0;
  @media (max-width: 768px) {

    padding: 5px;
  }
`;

const LogoName = styled.div`
  padding-top: 10px;
  padding-left: 10px;
`;

const Img = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 55px;
  height: 51px;
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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Nav>
          <NavLinkLogo to="header" smooth={true} duration={1000}>
            <Img src={logo} />
            <LogoName>
              eORIP <br /> OFFICE
            </LogoName>
          </NavLinkLogo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink to="header" smooth={true} duration={1000} onClick={() => setIsOpen(!isOpen)}>Inicio</MenuLink>
          <MenuLink to="services" smooth={true} duration={1000} onClick={() => setIsOpen(!isOpen)}>Servicios</MenuLink>
          <MenuLink to="about" smooth={true} duration={1000} onClick={() => setIsOpen(!isOpen)}>Nosotros</MenuLink>
          <MenuLink to="information" smooth={true} duration={1000} onClick={() => setIsOpen(!isOpen)}>Contactanos</MenuLink>
          <NavLinkBtn>
            <Button name="Iniciar Sesión" path="/login"></Button>
          </NavLinkBtn>
          
          {/* <Button name="Iniciar Sesión" path="/login"></Button> */}

        </Menu>
      </Nav>
    </>
  );
};

export default NavBar;
