import React from 'react'
import styled from 'styled-components'
import { FaAlignJustify } from "react-icons/fa";

export const NavBarMenu = styled.nav`
  display: flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-between;
  background-color:#fff; 
  padding:15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavLink = styled.a`
  text-decoration:none;
  color:inherit;
  
`;
export const Logo = styled.div`
  margin-right:50px;
`;
export const List = styled.ul`
  list-style:none;
  display:flex;
  gap:25px;
  @media screen and (max-width: 600px) {
   flex-direction:column;
   align-items:center;
   padding:20px;
  }
`;

export const Label = styled(FaAlignJustify)`
  display: none;
  color: #fff;
  @media screen and (max-width: 600px) {
    display: inline-flex;
    position: absolute;
    align-items:center;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  @media screen and (max-width: 600px) {
    width:100%;
    max-height:0;
    overflow:hidden;
  }
`;



const NavBar = () => {

  return (
    <>
    <NavBarMenu>
        <NavLink>
            <Logo>
            LOGO
            </Logo>
            
        </NavLink>
    </NavBarMenu>
    </>
  )
}

export default NavBar