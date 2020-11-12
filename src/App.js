import React, { useState } from 'react';
import axios from 'axios';
import GlobalStyles from './components/GlobalStyles';
import Btn from './components/Btn';
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
      <header className="header">
        <h1 className="header__display">Coffee Tracker</h1>
      </header>
      <Btn text={'Find Me Coffee'} onClick={handleClick}>
        Find Me Coffee
      </Btn>
      <CoffeePlaces places={places} />
    </>
  );
};

export default App;
