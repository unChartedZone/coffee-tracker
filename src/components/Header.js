import React from 'react';
import { GiCoffeeBeans } from 'react-icons/gi';
import { SiBuymeacoffee } from 'react-icons/si';
import styled from 'styled-components';
import { device } from '../helpers/device';

const HeaderStyled = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

  text-align: center;

  .header {
    margin: 0rem auto 5rem;
    font-family: Lobster;
    font-size: 2.5rem;

    @media ${device.tablet} {
      font-size: 3rem;
    }

    &__logo {
      border-radius: 50%;
      position: relative;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30rem;
      height: 30rem;

      @media ${device.tablet} {
        width: 40rem;
        height: 40rem;
      }

      &:before,
      &:after {
        content: '';
        width: 0.5rem;
        height: 100%;
        background-color: black;
      }

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
    }

    &__display--1,
    &__display--2 {
      position: absolute;
      /* transform: rotate(-10deg); */

      @media ${device.tablet} {
        font-size: 7rem;
      }
    }

    &__display--1 {
      left: 6rem;

      @media ${device.tablet} {
        left: 9rem;
      }
    }

    &__display--2 {
      right: 6rem;

      @media ${device.tablet} {
        right: 9rem;
      }
    }

    &__icon--1,
    &__icon--2 {
      position: absolute;
      font-size: 5rem;
    }

    &__icon--1 {
      top: 5rem;

      @media ${device.tablet} {
        top: 9rem;
      }
    }

    &__icon--2 {
      bottom: 5rem;

      @media ${device.tablet} {
        bottom: 9rem;
      }
    }
  }

  .half-circle {
    font-size: 3rem;
    height: 40rem;

    path {
      fill: transparent;
    }

    text {
      text-align: center;
    }
  }
`;

const Header = () => (
  <HeaderStyled>
    <div className="header">
      <div className="header__logo">
        <h1 className="header__display--1">C</h1>
        <h1 className="header__display--2">T</h1>
        <GiCoffeeBeans className="header__icon--1" />
        <SiBuymeacoffee className="header__icon--2" />
      </div>
      <h1>Coffee Tracker</h1>
    </div>
  </HeaderStyled>
);

export default Header;
