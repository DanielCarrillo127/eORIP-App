import React from "react";
import styled from "styled-components";
// import {
//   ContainerHorizontal,
//   ContainerVertical,
//   NavLink,
//   NavPanel,
//   NavSection,
//   NavSectionTitle,
//   ScrollArea,
//   TopBar,
//   TopBarLink,
//   TopBarLinkContainer,
//   TopBarSection,
//   TopBarTitle,
//   Widget,
//   WidgetContainer,
// } from "@duik/it";
import { useLocation } from "react-router-dom";

const Bb = styled.div`
  @media (max-width: 768px) {
  }
`;


const UserDasboard = () => {
  const sampleLocation = useLocation();
  const { match } = sampleLocation.pathname;
  return (
    //add here the DashNav and the topBar
    //{map cases by the opcion selected}
    //{map action by the request of the backend}
    <>
      <div
        // style={{
        //   background: "var(--bg-base)",
        //   border: "1px solid var(--border-color-base)",
        //   height: "100%",
        // }}
      >
        {/* <ContainerVertical>
          {/* topBar */}
          {/* <TopBar>
            <TopBarSection>
              <TopBarTitle>{sampleLocation.pathname}</TopBarTitle>
            </TopBarSection>
            <TopBarSection>
              
              <TopBarLinkContainer>
                <TopBarLink>Menu item 1</TopBarLink>
                <TopBarLink className="active" href="#">
                  Menu item 1
                </TopBarLink>
              </TopBarLinkContainer>
            </TopBarSection>
          </TopBar> */}
{/* SideBar menu */}
          {/* <ContainerHorizontal> */}
            
            {/* <NavPanel>
              <NavSection>
                <NavSectionTitle>User Menu</NavSectionTitle>
                add {} action per users
                <NavLink highlighted >Hello item</NavLink>
                <NavLink>Title for link</NavLink>
              </NavSection>
            </NavPanel> */}
{/* 
            <ScrollArea>
              <WidgetContainer>
                <Widget padding>
                  <h2>Title</h2>
                </Widget>
                <Widget padding>
                  <h2>Title</h2>
                </Widget>
                <Widget padding>
                  <h2>Title</h2>
                </Widget>
              </WidgetContainer>
            </ScrollArea>

          </ContainerHorizontal> */}

        {/* </ContainerVertical>  */}
      </div>
    </>
  );
};

export default UserDasboard;
