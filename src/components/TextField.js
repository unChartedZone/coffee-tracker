import React from 'react';
import styled from 'styled-components';

const TextFieldStyles = styled.div`
  font-size: 2rem;

  input {
    padding: 1rem;
    border: 1px solid #aaa;
    border-radius: 7px;
  }
`;

const TextField = ({ type, placeholder, value, onChange }) => {
  return (
    <TextFieldStyles>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </TextFieldStyles>
  );
};

export default TextField;
