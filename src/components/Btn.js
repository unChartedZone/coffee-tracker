import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  font-size: 1.6rem;
  border-radius: 7px;
  border: 1px solid black;
  background: transparent;
  cursor: pointer;
`;

const Button = (props) => {
  return <ButtonStyles>{props.children}</ButtonStyles>;
};

export default Button;
