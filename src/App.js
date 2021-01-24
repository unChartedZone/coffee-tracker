import React, { useEffect, useState, useRef, useCallback } from 'react';
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
  const [errorMessage, setErrorMessage] = useState('');
  const [offset, setOffset] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false); // Controls wether to show loading animation or not

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const findCoffee = useCallback(
    async (e) => {
      e.preventDefault();
      setLoaded(false);

      if (location === '') {
        console.log("Location can't be empty!");
        setErrorMessage("Location can't be empty!");
        return;
      }

      if (loading) return;

      setLoading(true);

      try {
        setErrorMessage('');
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
      } finally {
        if (isMounted.current) setLoading(false);
      }
    },
    [loading]
  );

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
        errorMessage,
        loaded,
        loading,
        setLoading,
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
