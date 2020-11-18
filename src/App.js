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
  const [location, setLocation] = useState('');

  const findCoffee = async (e) => {
    e.preventDefault();

    if (location === '') {
      console.log("Location can't be empty!");
      return;
    }

    try {
      let response = await instance.get('/.netlify/functions/places', {
        params: {
          term: 'coffee',
          location,
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
    <CoffeeContext.Provider
      value={{ places, setPlaces, location, setLocation }}
    >
      <GlobalStyles />
      <main>
        <Header />
        <CoffeeForm findCoffee={findCoffee} />
        <CoffeePlaces />
      </main>
    </CoffeeContext.Provider>
  );
};

export default App;
