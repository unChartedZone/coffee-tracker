import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
  const { places, loaded, loadingMorePlaces } = useContext(CoffeeContext);

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
                <div className="place__content">
                  <div className="place__header">
                    <Link to={`/${place.alias}`} className="place__title">
                      {place.name}
                    </Link>
                  </div>
                  <div className="place__body">
                    <div className="place__info">
                      <p className="place__address">
                        {place.location.address1}, {place.location.city},{' '}
                        {place.location.state} {place.location.zip_code}
                      </p>
                      <dt className="place__rating">
                        <svg width="16" height="23" fill="currentColor">
                          <path
                            d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07
                      3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588
                      1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07
                      3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0
                      00-1.176 0l-2.8
                      2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0
                      00-.363-1.118L.98
                      9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0
                      00.95-.69L7.05 3.69z"
                          />
                        </svg>
                        <span>{place.rating}</span>
                      </dt>
                    </div>
                    <ul className="place__categories">
                      {place.categories.map((category) => {
                        return (
                          <li key={category.alias} className="place__category">
                            {category.title}
                          </li>
                        );
                      })}
                    </ul>
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
