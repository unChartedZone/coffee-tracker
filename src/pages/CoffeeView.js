import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import CoffeeContext from '../context/coffee-context';

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
      border: 3px solid black;
      border-radius: 8px;
      width: 100rem;
      height: 40rem;
      object-fit: cover;
      object-position: center;
      margin: 2rem 0;
    }

    &__images {
      display: flex;
      justify-content: space-between;
    }

    &__image {
      border-radius: 8px;
      height: 15rem;
      width: 15rem;
    }
  }

  h1 {
    font-size: 4.8rem;
  }

  .back-link {
    position: absolute;
    color: black;
    top: 1rem;
    left: 1rem;
    font-size: 1.6rem;
    text-decoration: none;
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
    background-color: #6532071f;
    color: #6f5a42;
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
          BACK
        </Link>

        <img className="place__banner" src={place.image_url} alt="" />

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

        <h2>More Images</h2>
        <div className="place__images">
          {place.photos?.map((photo) => (
            <img key={photo} className="place__image" src={photo} />
          ))}
        </div>
      </PlaceStyles>
    </CoffeeContext.Provider>
  );
};

export default CoffeeView;
