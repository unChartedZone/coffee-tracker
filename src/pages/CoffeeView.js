import React, { useEffect, useContext, useCallback } from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { VscArrowLeft as LeftArrow } from 'react-icons/vsc';

import CoffeeContext from '../context/coffee-context';
import Categories from '../components/Categories';

const baseURL = process.env.REACT_APP_BASE_API_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const PlaceStyles = styled.div`
  /* border: 1px solid red; */
  width: 100rem;
  margin: 0 auto;

  .place {
    &__banner {
      border-radius: 8px;
      box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.3);
      width: 100rem;
      height: 40rem;
      object-fit: cover;
      object-position: center;
      margin: 2rem 0;
    }

    &__images {
      display: flex;
      justify-content: start;
    }

    &__image {
      border-radius: 8px;
      height: 15rem;
      width: 15rem;
      margin: 0 1.75rem 0 0;
    }
  }

  h1 {
    font-size: 4.8rem;
  }

  .back-link {
    position: absolute;
    color: #555;
    top: 1rem;
    left: 1rem;
    font-size: 2.6rem;
    text-decoration: none;

    &:hover {
      color: #000000;
    }
  }

  .address {
    color: #676464;
    margin: 0.5rem 0 1rem 0;
  }
`;

const CoffeeView = () => {
  const { place, setPlace } = useContext(CoffeeContext);
  let { id } = useParams();

  const fetchPlace = useCallback(async () => {
    console.log('Fetching Place');
    let response = await instance.get('/.netlify/functions/places', {
      params: {
        context: 'alias',
        alias: id,
      },
    });

    setPlace(response.data);
  }, [id, setPlace]);

  useEffect(() => {
    fetchPlace();
  }, [fetchPlace]);

  return (
    <PlaceStyles>
      <Link className="back-link" to="/">
        <LeftArrow height="2rem" />
      </Link>

      <LazyLoad height={400} once>
        <img className="place__banner" src={place.image_url} alt="" />
      </LazyLoad>

      <h1>{place.name}</h1>

      <p className="address">
        {place.location?.display_address[0]},{' '}
        {place.location?.display_address[1]}
      </p>
      <Categories categories={place?.categories} />
      <div className="place__images my-2">
        {place.photos?.map((photo) => (
          <LazyLoad height={150} once key={photo}>
            <img className="place__image" src={photo} alt="A coffe shop" />
          </LazyLoad>
        ))}
      </div>
    </PlaceStyles>
  );
};

export default CoffeeView;
