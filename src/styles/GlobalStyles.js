import { createGlobalStyle } from 'styled-components';
import bgImg from '../assets/images/coffee-shop-bg.jpg';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-size: 62.5%;
    font-family: Arial, Helvetica, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    /* background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${bgImg}); */
    background-size: cover;
  }

`;

export default GlobalStyles;
