import React from 'react';
import styled, { css } from 'styled-components';

import { device } from '../helpers/device';

const ButtonStyled = styled.button`
  display: inline-block;
  border: none;
  padding: 0.5rem;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--white);
  color: var(--black);
  font-size: 2rem;
  z-index: 100;

  // Kinda dumb but makes it look nice
  @media ${device.mobile} {
    background-color: var(--black);
    color: var(--white);
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${(props) =>
    props.absolute &&
    css`
      position: absolute;
    `}

  ${(props) =>
    props.top &&
    css`
      top: 0;
    `};
`;

const FloatingButton = ({ children, onClick, absolute, className, top }) => {
  return (
    <ButtonStyled
      type="button"
      className={className}
      onClick={onClick}
      absolute={absolute}
      top={top}
    >
      <div>{children}</div>
    </ButtonStyled>
  );
};

export default FloatingButton;
