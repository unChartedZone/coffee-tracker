import React, { useContext } from 'react';
import styled from 'styled-components';
import CoffeeContext from '../context/coffee-context';
import TextField from './TextField';
import Btn from './Btn';

const CoffeeFormStyles = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;

  form > * + * {
    margin-top: 2rem;
  }
`;

const CoffeeForm = ({ findCoffee }) => {
  const { location, setLocation, errorMessage, loading } = useContext(
    CoffeeContext
  );

  return (
    <CoffeeFormStyles>
      <div>
        <form onSubmit={findCoffee}>
          <TextField
            value={location}
            onChange={(value) => setLocation(value)}
            placeholder="Location"
            type="text"
            errorMessage={errorMessage}
          />
          <Btn block type="submit" loading={loading}>
            Find Me Coffee
          </Btn>
        </form>
      </div>
    </CoffeeFormStyles>
  );
};

export default CoffeeForm;
