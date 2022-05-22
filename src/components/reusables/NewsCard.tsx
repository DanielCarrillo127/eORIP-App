import React from "react";
import styled from "styled-components";
import gray from "../../assets/pngs/gray.png"


const CardContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 40px;
  width: 220px;
  height: 200px;
  background: white;
  border-radius: 10px;
  box-shadow: rgb(217, 219, 223) 0px 20px 50px;
`;

const Img = styled.img`
  clip: rect(0px, 460px, 220px, 0px);
  border-radius: 10px;
  position: absolute;
  width: 100px;
`;

const Header = styled.div`
  margin: auto;
  text-align: left;
  padding-left: 125px;
  padding-top: 10px;
  font-size: 11px;
`;

const AuthorDate = styled.p`
  text-align: justify;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 12px;
  color: rgb(200, 200, 200);
  line-height: 18px;
`;

const Source = styled.p`
  padding-left: 30px;
  padding-right: 30px;
  font-size: 12px;
  color: rgb(200, 200, 200);
  line-height: 18px;
  float: right;
`;

const Description = styled.p`
  text-align: justify;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 12px;
  color: rgb(200, 200, 200);
  line-height: 18px;
`;

const ButtonMore = styled.a`
  background-color: rgb(62, 221, 132);
  color: white;
  width: 90px;
  padding: 10px 18px;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  display: block;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 70px;
  font-size: 12px;
  cursor: pointer;
`;

const NewsCard = (props: any) => {
  return (
    <>
      <CardContainer>
     
        <Img src={props.news.image !== null ? `${props.news.image}` : `${gray}`} />
        <Header>
          {props.news.title}
          <div>
          <AuthorDate>{props.news.author}</AuthorDate>
          <AuthorDate>{props.news.published_at.substring(0,10)}</AuthorDate>
          </div>
        </Header>

        <Description>
          {props.news.description.substring(0,80)}...
        </Description>

        <div>
          <ButtonMore
            href="#"
            target="_"
          >
            More
          </ButtonMore>
        </div>
        <Source>{props.news.source}</Source> 
      </CardContainer>
    </>
  );
};

export default NewsCard;
