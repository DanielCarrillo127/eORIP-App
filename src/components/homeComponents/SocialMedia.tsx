import React from 'react'
import styled from 'styled-components'
import { BsFacebook,BsTwitter,BsInstagram,BsYoutube,BsLinkedin } from "react-icons/bs";



const SocialC = styled.div`
    background: #fff;
    padding: 50px 0;
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
const MainContent = styled.p`
    color: #515151;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
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
`;

const MediaContainer = styled.a`
    flex-direction: row; 
    display: flex;
    padding: 0.5em;
    text-decoration: none;
    
`;
const MediaName= styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    width: 102px;
    color: #163966;
    padding-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const MediaIcon= styled.div`
    padding: 12px;
    width: 20px;
    height: 20px;
    background: #163966;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: columnn;
    cursor:pointer;

`;

const SocialMedia = () => {
  return (
    <SocialC id='socialmedia'>
        <Container>
            <div>
                <Common>
                    <MainHeader>Redes Sociales</MainHeader>
                    <MainContent>Para más información, contáctate con los canales informales de la superintendencia de notariado y registro de colombia.
</MainContent>
                    <CommonBorder></CommonBorder>
                </Common>
            </div>
            <Row>
                <MediaContainer target="_blank" href='https://www.facebook.com/superintendenciadenotariadoyregistrodecolombia/?ref=stream'>
                    <MediaIcon>
                    <BsFacebook color='#FFF' size={34}/>
                    </MediaIcon>
                    <MediaName>Superintendencia de notariado y registro de colombia</MediaName>
                </MediaContainer>
                <MediaContainer target="_blank" href='https://twitter.com/Supernotariado'>
                    <MediaIcon>
                    <BsTwitter color='#FFF' size={34}/>
                    </MediaIcon>
                    <MediaName>@supernotariado</MediaName>
                </MediaContainer>
                <MediaContainer target="_blank" href='https://www.instagram.com/supernotariado/'>
                    <MediaIcon>
                    <BsInstagram color='#FFF' size={34}/>
                    </MediaIcon>
                    <MediaName>@supernotariado</MediaName>
                </MediaContainer>
                <MediaContainer target="_blank" href='https://www.youtube.com/user/Supernotariado'>
                    <MediaIcon>
                    <BsYoutube color='#FFF' size={34}/>
                    </MediaIcon>
                    <MediaName>Superintendencia de notariado y registro de colombia</MediaName>
                </MediaContainer>
                <MediaContainer target="_blank" href='https://www.linkedin.com/company/superintendencia-de-notariado-y-registro/'>
                    <MediaIcon>
                    <BsLinkedin color='#FFF' size={34}/>
                    </MediaIcon>
                    <MediaName>Superintendencia de notariado y registro de colombia</MediaName>
                </MediaContainer>
            </Row>
        </Container>
    </SocialC>
  )
}

export default SocialMedia