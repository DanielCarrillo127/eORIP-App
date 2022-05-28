import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logovur from "../../assets/pngs/gov_offices/logo-vur.png";
import logoigac from "../../assets/pngs/gov_offices/logo-igac.jpeg";
import logopro from "../../assets/pngs/gov_offices/logo-Pro.png";
import logosisg from "../../assets/pngs/gov_offices/logo-sisg.png";
import logoant from "../../assets/pngs/gov_offices/logo-ant.png";
import { toast } from "react-toastify";
import { consultNews } from "../../utils/request";
import NewsCard from "../../components/reusables/NewsCard";

const StyledMenuIcon = styled.a`
  background-color: transparent;

  border: 0px solid rgb(226, 232, 240);
  color: inherit;
  text-decoration: inherit;
`;

const HomeContainer = styled.div`
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
  @media (max-width: 1200px) {
    min-width: 0rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
`;

const ContainerVertical = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

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
`;

const ContainerWidgetNews = styled.div`
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
  overflow-y: scroll;
  max-height: 26rem;
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
`;

const ScrollContainerH = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: auto;
  height: auto;
  overflow-x: auto;
  white-space: nowrap;
`;
const ScrollItem = styled.div`
  width: 145px;
  height: 70px;
  background: transparent;
  display: inline-block;
  padding: 10px;
`;
const ScrollItemImages = styled.img`
  width: 145px;
  height: 71px;
`;

const NewsContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em 1em;
  grid-auto-flow: row dense;
  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;


const HomeSection = () => {
  const [news, setNews] = useState([]);
  

  useEffect(() => {
   if(news.length === 0){
    handleNews()
   }
  }, []);

  const handleNews = async () => {
    const req = await consultNews();
    if (req.status === 200) {
      setNews(req.data.articles);
    } else {
      toast.info(`No data for news.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <HomeContainer>
        <ContainerHeader>
          <div>
            <StyledH2>¡Bienvenido al Panel de control de ORIP Online!</StyledH2>
            <StyledSubH2>
              Consulte los servicios disponibles para ti, tu historial de
              transacciones y nuestros canales de atención directa.
            </StyledSubH2>
          </div>
        </ContainerHeader>
        <ContainerVertical>
          <ContainerWidgetNews>
            <div>
              <StyledContact onClick={() => handleNews()}>
                <StyledP>Noticias De Interés</StyledP>
              </StyledContact>
              {news?.length !== 0 ? (
                <>
                  <NewsContainer>
                    {news.map((value, index) => {
                      return (
                        <>
                          <NewsCard key={index} news={value} />
                        </>
                      );
                    })}
                  </NewsContainer>
                </>
              ) : (
                <>
                  <StyledContact>
                    <StyledP>
                      Por el momento no tenemos Noticias que mostrarte.
                    </StyledP>
                  </StyledContact>
                </>
              )}
            </div>
          </ContainerWidgetNews>
        </ContainerVertical>
        <ContainerWidget>
          <div>
            <StyledContact>
              <StyledP>Enlaces De Interés</StyledP>
            </StyledContact>

            <ScrollContainerH>
              <ScrollItem>
                <ScrollItemImages src={logovur} />
              </ScrollItem>
              <ScrollItem>
                <ScrollItemImages src={logopro} />
              </ScrollItem>
              <ScrollItem>
                <ScrollItemImages src={logosisg} />
              </ScrollItem>
              <ScrollItem>
                <ScrollItemImages src={logoant} />
              </ScrollItem>
              <ScrollItem>
                <ScrollItemImages src={logoigac} />
              </ScrollItem>
            </ScrollContainerH>
          </div>
        </ContainerWidget>

        <ContainerWidget>
          <StyledContact>
            <StyledP>Atención al Ciudadano</StyledP>
          </StyledContact>
          <StyledContactCel>
            <StyledMenuIcon href="#">57+(601) 328 2121</StyledMenuIcon>
          </StyledContactCel>
        </ContainerWidget>
      </HomeContainer>
    </>
  );
};

export default HomeSection;
