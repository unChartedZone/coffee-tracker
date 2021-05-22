import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const spinning = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const ButtonStyles = styled.button`
  font-size: 1.6rem;
  border-radius: 7px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  min-height: 3.5rem;
  min-width: 5rem;
  width: initial;
  outline: none;
  position: relative;

  &:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
  }

  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}

  ${(props) =>
    props.outlined &&
    css`
      background: transparent;
      border: 1px solid black;
      color: black;

      &:hover {
        background-color: black;
        color: white;
      }
    `} 

  ${(props) =>
    props.text &&
    css`
      border: none;
      padding: 0;

      &:hover {
        background-color: black;
        text-decoration: underline;
      }

      &:hover .icon {
        border: 2px solid white;
        border-color: white transparent white transparent;
      }
    `}
`;

const LoadingIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 auto;
  animation: ${spinning} infinite 0.5s linear;

  ${(props) =>
    props.color &&
    css`
      border: 2px solid ${props.color};
      border-color: ${props.color} transparent ${props.color} transparent;
    `}
`;

const Button = ({
  children,
  onClick,
  type,
  block,
  loading,
  text,
  className,
  outlined,
}) => {
  return (
    <ButtonStyles
      className={className}
      block={block}
      text={text}
      type={type}
      onClick={onClick}
      outlined={outlined}
      loading={loading ? 1 : 0}
    >
      {loading ? (
        <LoadingIcon className="icon" color={outlined ? 'black' : 'white'} />
      ) : (
        children
      )}
    </ButtonStyles>
  );
};

export default Button;
