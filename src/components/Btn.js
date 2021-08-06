import React from 'react';
import styled, { css } from 'styled-components';
import { device } from '../helpers/device';

import { spinAnimation } from '../styles/Animation';

const ButtonStyles = styled.button`
  display: inline-block;
  font-size: 1.2rem;
  border-radius: 7px;
  border: none;
  background-color: var(--yellow);
  color: var(--black);
  cursor: pointer;
  padding: 0.25rem 0.75rem;
  transition: all 0.2s ease-in-out;
  min-height: 3.5rem;
  min-width: 5rem;
  width: initial;
  outline: none;
  position: relative;

  @media ${device.laptop} {
    font-size: 1.6rem;
    padding: 0.5rem 1rem;
  }

  svg {
    font-size: 1.4rem;
    margin-right: 0.75rem;

    @media ${device.laptop} {
      font-size: 1.6rem;
    }
  }

  &:hover {
    background-color: var(--black);
    color: var(--white);
  }

  &:hover .icon {
    border: 2px solid black;
    border-color: black transparent black transparent;
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

      &:hover .icon {
        border: 2px solid white;
        border-color: white transparent white transparent;
      }
    `} 

  ${(props) =>
    props.rounded &&
    css`
      padding: 1rem 1.5rem;
      border-radius: 20px;
    `}

  ${(props) =>
    props.text &&
    css`
      border: none;
      background-color: transparent;
      padding: 0;
      color: var(--black);

      &:hover {
        background-color: transparent;
        color: var(--yellow);
        text-decoration: underline;
      }
    `}
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 auto;
  animation: ${spinAnimation} infinite 0.5s linear;

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
  rounded,
  loading,
  text,
  className,
  outlined,
}) => {
  return (
    <ButtonStyles
      className={className}
      block={block}
      rounded={rounded}
      text={text}
      type={type}
      onClick={onClick}
      outlined={outlined}
      loading={loading ? 1 : 0}
    >
      {loading ? (
        <LoadingIcon className="icon" color={outlined ? 'black' : 'white'} />
      ) : (
        <Container>{children}</Container>
      )}
    </ButtonStyles>
  );
};

export default Button;
