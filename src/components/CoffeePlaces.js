import React, { useContext } from 'react';
import CoffeeContext from '../context/coffee-context';
import styled from 'styled-components';

const PlacesStyled = styled.div`
  ul {
    list-style: none;

    & > li {
      margin-bottom: 2rem;
    }
  }

  img {
    width: 100px;
    height: 100px;
  }

  li {
    font-size: 1.6rem;
    border-radius: 7px;
    background-color: white;
    color: black;
    padding: 1rem;
  }
`;

const CoffeePlaces = () => {
  const { places } = useContext(CoffeeContext);

  return (
    <>
      {/* <h2 className="title">Coffee Places</h2> */}
      <PlacesStyled>
        <ul>
          {places.map((place) => {
            return (
              <li key={place.id}>
                <img src={place.image_url} alt={place.name} />
                <h1 className="title">{place.name}</h1>
              </li>
            );
          })}
        </ul>
      </PlacesStyled>
    </>
  );
};

export default CoffeePlaces;
