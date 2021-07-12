import React, { useContext } from 'react';
import CoffeeContext from '../context/coffee-context';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../helpers/device';
import { AiFillStar as Star } from 'react-icons/ai';

// Components
import Btn from './Btn';
import Categories from './Categories';
import Image from './Image';

const Place = styled.li`
  font-size: 1.6rem;
  border-radius: 7px;
  background-color: var(--black);
  color: var(--white);
  min-height: 40rem;
  width: 35rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  // Change color in react icons used in place component
  svg {
    color: var(--yellow);
  }

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
      display: flex;
      flex-direction: column;
      padding: 1rem 0.95rem;
    }

    &__body {
      flex-grow: 1;
    }

    &__title {
      font-size: 3rem;
      text-decoration: none;
    }

    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__address {
      color: var(--dark-gray);
    }

    &__rating {
      border-radius: 7px;
      color: var(--white);
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

const ReviewCount = styled.span`
  color: var(--dark-gray);
`;

const CoffeePlaceCard = ({ place }) => {
  const { setPlace } = useContext(CoffeeContext);
  const history = useHistory();

  const goToPlaceView = (place) => {
    history.push(`/${place.alias}`);
    setPlace({ ...place });
  };

  return (
    <Place>
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
          <h1 className="place__title">{place.name}</h1>
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
              <ReviewCount>({place.review_count})</ReviewCount>
            </dt>
          </div>
          <Categories categories={place.categories} />
        </div>
        <Btn className="mt-2" block onClick={() => goToPlaceView(place)}>
          View More
        </Btn>
      </div>
    </Place>
  );
};

export default CoffeePlaceCard;
