import React, { useContext, useCallback } from 'react';
import CoffeeContext from '../context/coffee-context';
import styled from 'styled-components';
import { device } from '../helpers/device';
import http from '../http';

import Btn from './Btn';
import CoffeePlaceCard from './CoffeePlaceCard';

const PlacesStyled = styled.div`
  margin: 8rem 0;

  ul {
    display: grid;
    justify-items: center;
    grid-template-columns: auto;
    flex-direction: column;
    list-style: none;
    row-gap: 2rem;

    @media ${device.laptop} {
      grid-template-columns: auto auto;
    }

    @media ${device.laptopL} {
      grid-template-columns: auto auto auto;
    }

    & > li {
      margin-bottom: 2rem;
    }
  }
`;

const CoffeePlaces = () => {
  const {
    location,
    places,
    setPlaces,
    offset,
    setOffset,
    loaded,
    loadingMorePlaces,
    setLoadingMorePlaces,
  } = useContext(CoffeeContext);

  const findMoreCoffee = useCallback(async () => {
    try {
      setLoadingMorePlaces(true);
      let response = await http.get('/.netlify/functions/places', {
        params: {
          term: 'coffee',
          location,
          limit: 9,
          offset,
        },
      });

      let data = JSON.parse(response.data.res.body);
      setPlaces([...places, ...data.businesses]);
      setOffset(offset + 9);
    } catch (e) {
      console.log('Errors fetching more coffee places', e);
    } finally {
      setLoadingMorePlaces(false);
    }
  }, [location, offset, places, setLoadingMorePlaces, setOffset, setPlaces]);

  const MoreLocations = () => {
    if (loaded && places.length < 27) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '2rem 0',
          }}
        >
          <Btn onClick={findMoreCoffee} loading={loadingMorePlaces}>
            Load More Places
          </Btn>
        </div>
      );
    } else return null;
  };

  return (
    <>
      <PlacesStyled>
        <ul>
          {places.map((place) => {
            return <CoffeePlaceCard key={place.id} place={place} />;
          })}
        </ul>
        <MoreLocations />
      </PlacesStyled>
    </>
  );
};

export default CoffeePlaces;
