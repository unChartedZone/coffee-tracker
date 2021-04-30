import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CoffeeContext from '../context/coffee-context';
import styled from 'styled-components';

import http from '../http';
import { device } from '../helpers/device';
import Btn from './Btn';
import Image from './Image';
import Categories from './Categories';
import { AiFillStar as Star } from 'react-icons/ai';

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
  min-height: 40rem;
  width: 35rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media ${device.tablet} {
    width: 47.5rem;
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

    &__content {
      padding: 1rem 0.95rem;
    }

    &__title {
      color: black;
      font-size: 3rem;
      text-decoration: none;
    }

    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__address {
      color: rgba(107, 114, 128);
    }

    &__rating {
      background-color: #f2d024;
      border-radius: 7px;
      color: black;
      padding: 0.3rem 0.5rem;
      display: flex;
      align-items: center;

      span {
        padding-left: 0.5rem;
      }
    }

    &__categories {
      display: flex;
    }
  }
`;

const CoffeePlaces = ({ findMoreCoffee }) => {
  const { setPlace, places, loaded, loadingMorePlaces } = useContext(
    CoffeeContext
  );
  const history = useHistory();

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
          <Btn onClick={findMoreCoffee} loading={loadingMorePlaces}>
            Load More Places
          </Btn>
        </div>
      );
    } else return null;
  };

  const goToPlaceView = (place) => {
    history.push(`/${place.alias}`);
    setPlace({ ...place });
  };

  return (
    <>
      <PlacesStyled>
        <ul>
          {places.map((place) => {
            return (
              <Place key={place.id}>
                <div className="place__img">
                  <Image
                    height={250}
                    src={place.image_url}
                    alt={place.name}
                    offset={200}
                  />
                </div>
                <div className="place__content">
                  <div className="place__header">
                    <Btn text onClick={() => goToPlaceView(place)}>
                      <h1 className="place__title">{place.name}</h1>
                    </Btn>
                  </div>
                  <div className="place__body">
                    <div className="place__info">
                      <p className="place__address">
                        {place.location.address1}, {place.location.city},{' '}
                        {place.location.state} {place.location.zip_code}
                      </p>
                      <dt className="place__rating">
                        <Star />
                        <span>{place.rating}</span>
                      </dt>
                    </div>
                    <Categories categories={place.categories} />
                  </div>
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
