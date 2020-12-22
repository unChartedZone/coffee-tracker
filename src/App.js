import React, { useState } from 'react';
import axios from 'axios';
import CoffeeContext from './context/coffee-context';

import GlobalStyles from './styles/GlobalStyles';

// Components
import Header from './components/Header';
import CoffeeForm from './components/CoffeeForm';
import CoffeePlaces from './components/CoffeePlaces';

const baseURL = process.env.REACT_APP_BASE_API_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const App = () => {
  const [places, setPlaces] = useState([]);
  const [location, setLocation] = useState('');
  const [offset, setOffset] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const findCoffee = async (e) => {
    e.preventDefault();
    setLoaded(false);

    if (location === '') {
      console.log("Location can't be empty!");
      return;
    }

    try {
      let response = await instance.get('/.netlify/functions/places', {
        params: {
          term: 'coffee',
          location,
          limit: 9,
        },
      });

      let data = JSON.parse(response.data.res.body);
      setPlaces(data.businesses);
      setLoaded(true);
      setOffset(9);
    } catch (e) {
      console.log('Error fetching coffee places', e);
    }
  };

  const findMoreCoffee = async () => {
    try {
      let response = await instance.get('/.netlify/functions/places', {
        params: {
          term: 'coffee',
          location,
          limit: 9,
          offset,
        },
      });

      let data = JSON.parse(response.data.res.body);
      console.log('Dat: ', data);
      setPlaces([...places, ...data.businesses]);
      setOffset(offset + 9);
    } catch (e) {
      console.log('Errors fetching more coffee places', e);
    }
  };

  return (
    <CoffeeContext.Provider
      value={{
        places,
        setPlaces,
        location,
        setLocation,
        loaded,
      }}
    >
      <GlobalStyles />
      <main>
        <Header />
        <CoffeeForm findCoffee={findCoffee} />
        <CoffeePlaces findMoreCoffee={findMoreCoffee} />
      </main>
    </CoffeeContext.Provider>
  );
};

export default App;
