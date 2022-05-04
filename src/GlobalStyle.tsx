import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'inter';
    src: local('inter'), url(./fonts/Inter-VariableFont_slnt,wght.ttf) format('truetype');
}  

body{
    font-family: 'inter', sans-serif;
    font-size:'16px';
    margin: 0;
  }
  p{
    margin:0 ;
   }
   `;

export default GlobalStyle;
