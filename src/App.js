import React, { useState } from 'react';
import axios from 'axios';
import GlobalStyles from './styles/GlobalStyles';

// Components
import Header from './components/Header';
import CoffeePlaces from './components/CoffeePlaces';

const instance = axios.create({
  baseURL: 'http://localhost:9000/',
});

const App = () => {
  const [places, setPlaces] = useState([]);

  const handleClick = async () => {
    try {
      let response = await instance.get('/.netlify/functions/places', {
        params: {
          term: 'coffee',
          location: 'San Diego',
          limit: 10,
        },
      });

      let data = JSON.parse(response.data.res.body);
      setPlaces(data.businesses);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <GlobalStyles />
        <Header />
  );
};

export default App;
