import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const spinning = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const ButtonStyles = styled.button`
  font-size: 1.6rem;
  border-radius: 7px;
  border: 1px solid black;
  background: transparent;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  min-height: 3.5rem;
  min-width: 5rem;
  width: initial;
  outline: none;
  position: relative;

  ${(props) =>
    props.text &&
    css`
      border: none;
      padding: 0;

      &:hover {
        //background-color: red;
        text-decoration: underline;
      }
    `}

  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
`;

const LoadingIcon = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid black;
  border-radius: 50%;
  border-color: black transparent black transparent;
  margin: 0 auto;
  animation: ${spinning} infinite 0.5s linear;
`;

const Button = ({ children, onClick, type, block, loading, text }) => {
  return (
    <ButtonStyles block={block} text={text} type={type} onClick={onClick}>
      {loading ? <LoadingIcon /> : children}
    </ButtonStyles>
  );
};

export default Button;
