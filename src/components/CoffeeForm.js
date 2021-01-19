import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import CoffeeContext from '../context/coffee-context';
import TextField from './TextField';
import Btn from './Btn';
import { gql } from '@apollo/client';
import apolloClient from '../apollo/';

const CoffeeFormStyles = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;

  form > * + * {
    margin-top: 2rem;
  }
`;

const CoffeeForm = ({ findCoffee }) => {
  const { location, setLocation, errorMessage } = useContext(CoffeeContext);

  useEffect(() => {
    console.log('Loaded!');

    const loadPlaces = async () => {
      try {
        let result = await apolloClient.query({
          query: gql`
            query myQuery {
              business(id: "garaje-san-francisco") {
                name
                id
              }
            }
          `,
        });

        console.log(result);
      } catch (e) {
        console.log(e);
      }
    };

    loadPlaces();
  }, []);

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
          <Btn block type="submit">
            Find Me Coffee
          </Btn>
        </form>
      </div>
    </CoffeeFormStyles>
  );
};

export default CoffeeForm;
