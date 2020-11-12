import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-size: 62.5%;
    font-family: Arial, Helvetica, sans-serif;
  }

  .header {
    &__display {
      font-size: 4rem;
    }
  }

  .title {
    font-size: 2rem;
  }
`;

export default GlobalStyles;
