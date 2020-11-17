import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
  font-size: 1.6rem;
  border-radius: 7px;
  border: 1px solid white;
  color: white;
  background: transparent;
  cursor: pointer;
  padding: 0.5rem 1rem;
`;

const Button = ({ children, onClick, type }) => {
  return (
    <ButtonStyles type={type} onClick={onClick}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
