import React, { useState } from 'react';
import axios from 'axios';
import CoffeeContext from './context/coffee-context';

import GlobalStyles from './styles/GlobalStyles';

// Components
import Header from './components/Header';
import CoffeeForm from './components/CoffeeForm';
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
    <CoffeeContext.Provider value={{ places, setPlaces }}>
      <GlobalStyles />
      <main>
        <Header />
        <CoffeeForm findCoffee={handleClick} />
        <CoffeePlaces />
      </main>
    </CoffeeContext.Provider>
  );
};

export default App;
