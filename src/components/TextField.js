import React from 'react';
import styled from 'styled-components';

const TextFieldStyles = styled.div`
  font-size: 2rem;

  &:focus-within input {
    border-color: var(--black);
  }

  input {
    background-color: var(--bg-color);
    padding: 1rem 1.5rem;
    border: 1px solid #aaa;
    border-radius: 20px;
    font-size: 1.6rem;
    outline: none;

    &::placeholder {
      color: var(--black);
    }
  }

  .textfield {
    &__error {
      color: red;
      margin: 0.75rem 0 0 0;
      text-align: center;
    }
  }
`;

const TextField = ({ type, placeholder, value, onChange, errorMessage }) => {
  return (
    <TextFieldStyles>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <p className="textfield__error text">{errorMessage}</p>
    </TextFieldStyles>
  );
};

export default TextField;
