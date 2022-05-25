import React from "react";
import styled from "styled-components";
import gray from "../../assets/pngs/gray.png";


const Container = styled.div`

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

interface ImgProps {
  readonly img: string;
}



const ImageBackground = styled.div<ImgProps>`
  padding-bottom: 60%;
  background-size: cover;
  background-position: center center;
  background-Image: url(${(props) => props.img});
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
      <Container>
        <StyledLink href={props.news.url}>
          <ImageBackground img={props.news.image !== null ? `${props.news.image}` : `${gray}`}  style={{backgroundImage: `${props.news.image !== null ? `${props.news.image}` : `${gray}`}` }} />
          <StyledArticle>
          <Content>{props.news.author !== null ? props.news.author : "Anonimo"}</Content><Content>{props.news.published_at?.substring(0,10)}</Content>
            <Title>{props.news.title}</Title>

            <Content>{props.news.description?.substring(0,150)}...</Content>
          
            <Content>{props.news.source}</Content>
          </StyledArticle>
        </StyledLink>
      </Container>
   
    </>
  );
};

export default NewsCard;
