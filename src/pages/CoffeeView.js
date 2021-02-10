import React, { useEffect, useContext } from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import CoffeeContext from '../context/coffee-context';
import { ReactComponent as LeftArrow } from '../assets/icons/LeftArrow.svg';

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
    color: #676464;
    top: 1rem;
    left: 1rem;
    font-size: 1.6rem;
    text-decoration: none;

    &:hover {
      color: #000000;
    }
  }

  .address {
    color: #676464;
    margin: 0.5rem 0 1rem 0;
  }

  .categories {
    display: flex;
  }

  .category {
    border: 1px solid #653207bf;
    border-radius: 20px;
    background-color: #fef3c7;
    color: #b45309;
    padding: 0.6rem 1rem;
    margin-right: 1rem;
  }
`;

const CoffeeView = () => {
  const { place, setPlace } = useContext(CoffeeContext);
  let { id } = useParams();

  useEffect(() => {
    if (Object.entries(place).length === 0) {
      // console.log('GONNA DO AN API CALL!');
      const fetchPlace = async () => {
        let response = await instance.get('/.netlify/functions/places', {
          params: {
            context: 'alias',
            alias: id,
          },
        });

        console.log('Response: ', response);

        setPlace(response.data);
      };

      fetchPlace();
    }
  }, [id, place, setPlace]);

  return (
    <CoffeeContext.Provider>
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

        <div className="categories">
          {place.categories?.map((category) => {
            return (
              <div className="category" key={category.title}>
                {category.title}
              </div>
            );
          })}
        </div>

        <div className="place__images my-2">
          {place.photos?.map((photo) => (
            <LazyLoad height={150} once>
              <img
                key={photo}
                className="place__image"
                src={photo}
                alt="A coffe shop"
              />
            </LazyLoad>
          ))}
        </div>
      </PlaceStyles>
    </CoffeeContext.Provider>
  );
};

export default CoffeeView;
