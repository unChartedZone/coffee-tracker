import React, { useContext } from 'react';
import CoffeeContext from '../context/coffee-context';
import styled from 'styled-components';

const PlacesStyled = styled.div`
  ul {
    list-style: none;
  }

  li {
    font-size: 1.6rem;
    border: 1px solid white;
    border-radius: 7px;
  }
`;

const CoffeePlaces = () => {
  const { places } = useContext(CoffeeContext);

  return (
    <>
      <h2 className="title">Coffee Places</h2>
      <PlacesStyled>
        <ul>
          {places.map((place) => {
            return <li key={place.id}>{place.name}</li>;
          })}
        </ul>
      </PlacesStyled>
    </>
  );
};

export default CoffeePlaces;
