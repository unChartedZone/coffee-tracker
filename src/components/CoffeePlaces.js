import React, { useContext } from 'react';
import CoffeeContext from '../context/coffee-context';
import styled from 'styled-components';

const PlacesStyled = styled.div`
  ul {
    display: grid;
    grid-template-columns: auto auto auto;
    flex-direction: column;
    list-style: none;

    & > li {
      margin-bottom: 2rem;
    }
  }
`;

const Place = styled.li`
  font-size: 1.6rem;
  border-radius: 7px;
  background-color: white;
  color: black;
  height: 15rem;
  width: 40rem;
  display: grid;
  grid-template-columns: 30% 40%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  .place {
    &__img {
      overflow: hidden;
      background-color: purple;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    &__info {
      padding: 0.4rem;
    }
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
              <Place key={place.id}>
                <div className="place__img">
                  <img src={place.image_url} alt={place.name} />
                </div>
                <div className="place__info">
                  <h1 className="place__title title">{place.name}</h1>
                  <p>{place.rating}</p>
                </div>
              </Place>
            );
          })}
        </ul>
      </PlacesStyled>
    </>
  );
};

export default CoffeePlaces;
