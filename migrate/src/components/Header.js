import React from 'react';
import styled from 'styled-components';
import { device } from '../helpers/device';

const HeaderStyled = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

  text-align: center;

  .header {
    border: 5px solid black;
    border-radius: 50%;
    width: 30rem;
    height: 30rem;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.tablet} {
      width: 45rem;
      height: 45rem;
    }

    &__display {
      position: absolute;
      font-family: Lobster;
      font-size: 6rem;
      transform: rotate(-10deg);

      @media ${device.tablet} {
        font-size: 8rem;
      }
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
