import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  text-align: center;

  .header {
    &__display {
      font-size: 6rem;
    }
  }
`;

const Header = () => (
  <HeaderStyled>
    <h1 className="header__display">Coffee Tracker</h1>
  </HeaderStyled>
);

export default Header;
