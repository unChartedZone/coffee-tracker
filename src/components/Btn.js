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

const Button = (props) => {
  return (
    <ButtonStyles onClick={() => props.onClick()}>
      {props.children}
    </ButtonStyles>
  );
};

export default Button;
