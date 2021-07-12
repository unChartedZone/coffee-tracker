import { createGlobalStyle } from 'styled-components';
import bgImg from '../assets/images/coffee-shop-bg.jpg';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: #EADBCC;
    --gray: #DACABD;
    --dark-gray: #7A7E82;
    --white: #F4E8DB;
    --light-black: #433c37;
    --black: #212325;
    --yellow: #D4A056;
  }

  html,
  body {
    font-size: 62.5%;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    font-size: 1.6rem;
    background-color: var(--bg-color);
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

  // Utilities Classes
  .m {
    &x-1 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    &x-2 {
      margin-left: 2rem;
      margin-right: 2rem;
    }
    &x-3 {
      margin-left: 3rem;
      margin-right: 3rem;
    }

    &y-1 {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    &y-2 {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    &y-3 {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }

    &t-1 {
      margin-top: 1rem;
    }
    &t-2 {
      margin-top: 2rem;
    }
    &t-3 {
      margin-top: 3rem;
    }
  }

`;

export default GlobalStyles;
