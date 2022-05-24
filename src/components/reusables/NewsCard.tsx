import React from "react";
import styled from "styled-components";
import gray from "../../assets/pngs/gray.png";

const NewsContainer = styled.div`
  width: 90%;
  max-width: 1240px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 60em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Container = styled.div`
  @media (min-width: 60em) {
    grid-column: 1 / span 2;
  }
`;

const StyledLink = styled.a`
  background: white;
  text-decoration: none;
  color: rgb(68, 68, 68);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  top: 0px;
  transition: all 0.1s ease-in 0s;
  top: -2px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 5px;
`;

const ImageBackground = styled.div`
  padding-bottom: 60%;
  background-size: cover;
  background-position: center center;
`;

const StyledArticle = styled.article`
  padding: 20px;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0px;
  color: rgb(51, 51, 51);
  @media (min-width: 60em) {
    font-size: 24px;
  }
`;

const Content = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: rgb(153, 153, 153);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 2em 0px 0px;
`;

const NewsCard = (props: any) => {
  return (
    <>
      <NewsContainer>
      <Container>
        <StyledLink href={props.news.source}>
          <ImageBackground style={{backgroundImage: `${props.news.image !== null ? `${props.news.image}` : `${gray}`}` }} />
          <StyledArticle>
            <Title>{props.news.title}</Title>

            <Content>We’ll be putting things together so that as you scroll down from the top of the page you’ll see an “Alien Lander” making its way to touch down.</Content>
          </StyledArticle>
        </StyledLink>
      </Container>
    </NewsContainer>
    </>
  );
};

export default NewsCard;
