import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

  text-align: center;

  .header {
    border: 5px solid black;
    border-radius: 50%;
    width: 45rem;
    height: 45rem;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &__display {
      position: absolute;
      font-size: 8rem;
      font-family: Lobster;
      transform: rotate(-10deg);
    }
  }
`;

const Header = () => (
  <HeaderStyled>
    <div className="header">
      <h1 className="header__display">Coffee Tracker</h1>
    </div>
  </HeaderStyled>
);

export default Header;
