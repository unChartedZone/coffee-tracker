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
  img {
    height: 30rem;
  }
`;

const CoffeeView = () => {
  const { place } = useContext(CoffeeContext);
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
      };

      fetchPlace();
    }
  }, []);

  return (
    <CoffeeContext.Provider>
      <PlaceStyles>
        <img src={place.image_url} alt="" />
        <Link to="/">Back</Link>
        <h1>{place.name}</h1>
      </PlaceStyles>
    </CoffeeContext.Provider>
  );
};

export default CoffeeView;
