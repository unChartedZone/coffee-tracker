import React from 'react';
import styled, { css } from 'styled-components';

const ButtonStyles = styled.button`
  font-size: 1.6rem;
  border-radius: 7px;
  border: 1px solid black;
  background: transparent;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  min-height: 3rem;
  width: initial;
  outline: none;
  position: relative;

  /* &:hover {
    transform: scale(1.05) translateY(-0.2rem);
  } */

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
  display: inline-block;
  position: absolute;
  width: 90%;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: white;

  &:after {
    content: '';
    display: block;
    /* position: absolute; */
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    border: 2px solid black;
    /* this breaks up the icon into 2 pieces */
    border-color: black transparent black transparent;
    user-select: none;
    animation: 1s spinning infinite linear;
  }

  @keyframes spinning {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Button = ({ children, onClick, type, block, loading, text }) => {
  return (
    <ButtonStyles block={block} text={text} type={type} onClick={onClick}>
      {loading ? <LoadingIcon /> : null}
      {children}
    </ButtonStyles>
  );
};

export default Button;
