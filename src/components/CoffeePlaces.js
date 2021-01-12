import React, { useContext } from 'react';
import CoffeeContext from '../context/coffee-context';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import fallbackImage from '../assets/images/coffee-shop-bg.jpg';
import { device } from '../helpers/device';
import Btn from './Btn.js';

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

const Place = styled.li`
  font-size: 1.6rem;
  border: 1px solid #fafafa;
  border-radius: 7px;
  background-color: white;
  color: black;
  height: 40rem;
  width: 35.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media ${device.tablet} {
    width: 45rem;
  }

  &:hover img {
    transform: scale(1.25);
  }

  .place {
    &__img {
      height: 25rem;
      overflow: hidden;
      position: relative;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: transform 0.4s;
      }
    }

    &__header,
    &__body {
      padding: 0.5rem;
    }

    &__body {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__address {
      color: #4c4e4c;
    }

    &__rating {
      background-color: #f2d024;
      border-radius: 7px;
      color: black;
      display: inline-block;
      padding: 0.3rem 0.5rem;
    }
  }
`;

const CoffeePlaces = ({ findMoreCoffee }) => {
  const { places, loaded } = useContext(CoffeeContext);

  const MoreLocations = () => {
    if (loaded) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '2rem 0',
          }}
        >
          <Btn onClick={findMoreCoffee}>Load More Places</Btn>
        </div>
      );
    } else return null;
  };

  return (
    <>
      <PlacesStyled>
        <ul>
          {places.map((place) => {
            return (
              <Place key={place.id}>
                <div className="place__img">
                  <LazyLoad height={250}>
                    <img
                      src={place.image_url}
                      alt={place.name}
                      onError={(el) => (el.currentTarget.src = fallbackImage)}
                    />
                  </LazyLoad>
                </div>
                <div className="place__header">
                  <h1 className="place__title title">{place.name}</h1>
                </div>
                <div className="place__body">
                  <p className="place__address">
                    {place.location.address1}, {place.location.city},
                    {place.location.zip_code}
                  </p>
                  <p className="place__rating">{place.rating}</p>
                </div>
              </Place>
            );
          })}
        </ul>
        <MoreLocations />
      </PlacesStyled>
    </>
  );
};

export default CoffeePlaces;
