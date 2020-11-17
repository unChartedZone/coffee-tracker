import React, { useContext } from 'react';
import styled from 'styled-components';
import CoffeeContext from '../context/coffee-context';
import Btn from './Btn';
import TextField from './TextField';

const CoffeeFormStyles = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;

  form > * + * {
    margin-top: 2rem;
  }
`;

const CoffeeForm = ({ findCoffee, getCoffee }) => {
  const { location, setLocation } = useContext(CoffeeContext);

  return (
    <CoffeeFormStyles>
    <div>
      <TextField
        value={location}
        onChange={(value) => setLocation(value)}
        placeholder="City"
        type="text"
      />
      <Btn onClick={findCoffee}>Find Me Coffee</Btn>
    </div>
    </CoffeeFormStyles>
  );
};

export default CoffeeForm;
