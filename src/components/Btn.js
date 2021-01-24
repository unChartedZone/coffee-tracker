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
  outline: none;

  /* &:hover {
    background-color: black;
    color: white; */
  /* transform: translateY(-0.5rem); */
  /* } */

  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
`;

const LoadingIcon = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 1s spinning infinite linear;
  user-select: none;

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 2px solid black;
    border-color: black transparent black transparent;
    user-select: none;
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

const Button = ({ children, onClick, type, block, loading }) => {
  return (
    <ButtonStyles block={block} type={type} onClick={onClick}>
      {!loading ? children : <LoadingIcon />}
    </ButtonStyles>
  );
};

export default Button;
