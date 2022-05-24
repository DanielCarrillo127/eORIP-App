import React from "react";
import styled from "styled-components";
import CardProfile from "../reusables/CardProfile";

import DanielProfile from "../../assets/pngs/DanielC.png";
import JaimeProfile from "../../assets/pngs/JaimeS.png";
import FabricioProfile from "../../assets/pngs/FabricioP.png";

const AboutC = styled.div`
  background: #fff;
  padding: 20px 0;
  color: #000;
`;
const Container = styled.div`
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Common = styled.div`
  width: 33.33333333333333%;
  margin: 20px auto;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const MainHeader = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: #000;
`;
const CommonBorder = styled.div`
  background: #4d8ae5;
  height: 3px;
  width: 100px;
  margin: 30px auto;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const About = () => {
  return (
    <AboutC id="about">
      <Container>
        <div>
          <Common>
            <MainHeader>Acerca de nosotros</MainHeader>
            <CommonBorder></CommonBorder>
          </Common>
        </div>
        <Row>
          <CardProfile
            Profilename="Jaime Sierra H."
            subtitle="Estudiante"
            git="https://github.com/jhadechni"
            profile={JaimeProfile}
          />
          <CardProfile
            Profilename="Fabricio Puche G."
            subtitle="Estudiante"
            git="https://github.com/fabrixiop26"
            profile={FabricioProfile}
          />
          <CardProfile
            Profilename="Daniel Carrillo G."
            subtitle="Estudiante"
            git="https://github.com/DanielCarrillo127"
            profile={DanielProfile}
          />
        </Row>
      </Container>
    </AboutC>
  );
};

export default About;
