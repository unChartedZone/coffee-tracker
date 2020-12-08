import React from 'react';
import styled, { css } from 'styled-components';

const ButtonStyles = styled.button`
  font-size: 1.6rem;
  border-radius: 7px;
  border: 1px solid black;
  background: transparent;
  cursor: pointer;
  padding: 0.5rem 1rem;

  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
`;

const Button = ({ children, onClick, type, block }) => {
  return (
    <ButtonStyles block={block} type={type} onClick={onClick}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
