import React, { useContext } from 'react';
import styled from 'styled-components';
import CoffeeContext from '../context/coffee-context';
import TextField from './TextField';

const CoffeeFormStyles = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;

  form > * + * {
    margin-top: 2rem;
  }
`;

const CoffeeForm = ({ findCoffee }) => {
  const { location, setLocation } = useContext(CoffeeContext);

  return (
    <CoffeeFormStyles>
      <div>
        <form onSubmit={findCoffee}>
          <TextField
            value={location}
            onChange={(value) => setLocation(value)}
            placeholder="Location"
            type="text"
          />
        </form>
        {/* <Btn type="submit" onClick={getCoffee}>
          Find Me Coffee
        </Btn> */}
      </div>
    </CoffeeFormStyles>
  );
};

export default CoffeeForm;
