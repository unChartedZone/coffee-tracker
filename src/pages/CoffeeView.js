import React, { useEffect, useContext, useCallback, useState } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { AiFillStar as Star } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { FaDirections } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import { VscArrowLeft as LeftArrow } from 'react-icons/vsc';

import client from '../http';
import { device } from '../helpers/device';
import CoffeeContext from '../context/coffee-context';

// Components
import Btn from '../components/Btn';
import Categories from '../components/Categories';
import RingLoader from '../components/LoadingIcons/RingLoader';
import FloatingButton from '../components/FloatingButton';
import Container from '../components/Container';

const PlaceGrid = styled.div`
  display: grid;
  column-gap: 4rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: minmax(10rem, 30rem) 4fr;

  @media ${device.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 10rem;
    padding: 0 2rem;
  }

  @media ${device.mobile} {
    pading: 0 16rem;
  }
`;

const PlaceDetails = styled.div`
  position: relative;
  grid-row-start: 2;
  padding: 1rem;

  @media ${device.mobile} {
    grid-row-start: 1;
    padding: 0;
  }
`;

const PlaceTitle = styled.h1`
  position: absolute;
  top: -4rem;
  z-index: 15;
  color: var(--white);
  padding: 0 1rem;
  font-size: 2.5rem;

  @media ${device.mobile} {
    color: var(--black);
    position: relative;
    top: 0;
    font-size: 2.75rem;
    padding: 0;
  }

  @media ${device.tablet} {
    font-size: 3rem;
  }
`;

const PlaceInfo = styled.div`
  display: flex;
  align-items: center;
  color: var(--dark-gray);
  margin: 1.5rem 0;

  span {
    padding-left: 0.5rem;
    color: var(--dark-gray);
    &:first-of-type {
      color: var(--black);
    }
  }
`;

const PlaceActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 10rem;

  @media ${device.tablet} {
    gap: 2rem;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  position: relative;
  gap: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media ${device.laptop} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ImageItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05), 0px -2px 20px 3px rgb(0, 0, 0, 0.1);
  overflow: hidden;

  @media ${device.mobile} {
    border-radius: 8px;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PrimaryImage = styled(ImageItem)`
  @media ${device.mobile} {
    grid-row: span 2 / span 2;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.4)
  );

  @media ${device.mobile} {
    display: none;
  }
`;

const SecondaryImage = styled(ImageItem)`
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;

const CoffeeView = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { place, setPlace } = useContext(CoffeeContext);
  let { id } = useParams();

  const fetchPlace = useCallback(async () => {
    setLoading(true);
    let response = await client.get('/.netlify/functions/places', {
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
    <div>
      <Container className="mx-auto">
        <PlaceGrid>
          <PlaceDetails>
            <PlaceTitle>{place.name}</PlaceTitle>
            <PlaceInfo>
              <Star />
              <span>{place.rating}</span>
              <span>({place.review_count})</span>
              <span>&middot;</span>
              <span>{place?.location?.display_address.join(' ')}</span>
              {/* {place?.location?.display_address.map((detail, index) => (
                <span key={index}>{detail}</span>
              ))} */}
            </PlaceInfo>
            <Categories categories={place.categories} />
            <PlaceActions>
              <Btn>
                <FaDirections />
                Directions
              </Btn>
              <a href={place.url} target="_blank" rel="noopener noreferrer">
                <Btn>
                  <FiGlobe />
                  Website
                </Btn>
              </a>
              <a href={`tel:${place.display_phone}`}>
                <Btn>
                  <FiPhone />
                  {place.display_phone}
                </Btn>
              </a>
            </PlaceActions>
          </PlaceDetails>
          <ImageGrid>
            <PrimaryImage>
              <Overlay />
              <img src={place.image_url} alt="" />
            </PrimaryImage>
            {place.photos &&
              place.photos.map((src, index) => {
                if (index === 0) return undefined;

                return (
                  <SecondaryImage key={index}>
                    <img src={src} alt="" />
                  </SecondaryImage>
                );
              })}
          </ImageGrid>
        </PlaceGrid>
      </Container>
    </div>
  );

  if (loading) {
    return <RingLoader />;
  }

  return (
    <>
      <FloatingButton
        onClick={() => history.push('/')}
        absolute
        className="mx-1 my-1"
      >
        <LeftArrow />
      </FloatingButton>
      {place && <Place />}
    </>
  );
};

export default CoffeeView;
