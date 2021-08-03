import React, { useEffect, useContext, useCallback, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AiFillStar as Star } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { FaDirections } from 'react-icons/fa';

import CoffeeContext from '../context/coffee-context';

// Components
import Btn from '../components/Btn';
import Categories from '../components/Categories';
import RingLoader from '../components/LoadingIcons/RingLoader';

const baseURL = process.env.REACT_APP_BASE_API_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const PlaceStyled = styled.div`
  padding: 20rem 0 10rem 0;
  margin: 0 30rem;
`;

const PlaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 8rem;
  min-height: 45rem;

  img {
    position: absolute;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0% 10%;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05), 0px -2px 20px 3px rgb(0, 0, 0, 0.1);
  }
`;

const PlaceDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 4.8rem;
  }
`;

const Rating = styled.p`
  border-radius: 7px;
  color: var(--black);
  padding: 0.3rem 0.5rem;
  display: flex;
  align-items: center;
  margin: 2rem 0;

  span {
    padding-left: 0.5rem;
    color: var(--dark-gray);

    &:first-of-type {
      color: var(--black);
    }
  }
`;

const Actions = styled.div`
  display: flex;
  margin-top: 10rem;

  & > * {
    margin-right: 2rem;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  height: 100%;
  width: 100%;
`;

const CoffeeView = () => {
  const [loading, setLoading] = useState(false);
  const { place, setPlace } = useContext(CoffeeContext);
  let { id } = useParams();

  const fetchPlace = useCallback(async () => {
    setLoading(true);
    let response = await instance.get('/.netlify/functions/places', {
      params: {
        context: 'alias',
        alias: id,
      },
    });

    setPlace(response.data);
    setLoading(false);
  }, [id, setPlace]);

  useEffect(() => {
    fetchPlace();
  }, [fetchPlace]);

  const Place = () => (
    <PlaceStyled>
      <PlaceGrid>
        <PlaceDetails>
          <h1>{place?.name}</h1>
          <Rating>
            <Star />
            <span>{place?.rating}</span>
            <span>({place.review_count})</span>
            <span>&middot;</span>
            {place?.location?.display_address.map((detail, index) => (
              <span key={index}>{detail}</span>
            ))}
          </Rating>
          <Categories categories={place.categories} />
          <Actions>
            <Btn>
              <FaDirections />
              Get Directions
            </Btn>
            <a href={place.url} target="_blank" rel="noopener noreferrer">
              <Btn>
                <FaDirections />
                Website
              </Btn>
            </a>
            <a href={`tel:${place.display_phone}`}>
              <Btn>
                <FiPhone />
                {place.display_phone}
              </Btn>
            </a>
          </Actions>
        </PlaceDetails>
        <ImageGrid>
          <div
            style={{
              position: 'relative',
              gridColumn: 'span 2 / span 2',
              gridRow: 'span 2 / span 2',
            }}
          >
            <img src={place.image_url} alt="" />
          </div>
          {place.photos &&
            place.photos.map((photo, index) => {
              // Don't return first photo because it's the same one as the
              // image_url property
              if (index === 0) return undefined;

              return (
                <div key={photo} style={{ position: 'relative' }}>
                  <img src={photo} alt="" />
                </div>
              );
            })}
        </ImageGrid>
      </PlaceGrid>
    </PlaceStyled>
  );

  if (loading) {
    return <RingLoader />;
  }

  return (
    <>
      <Place />
    </>
  );
};

export default CoffeeView;
