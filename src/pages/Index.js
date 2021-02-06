import React, { useEffect, useRef, useCallback, useContext } from 'react';
import axios from 'axios';

import CoffeeContext from '../context/coffee-context';

// Components
import Header from '../components/Header';
import CoffeeForm from '../components/CoffeeForm';
import CoffeePlaces from '../components/CoffeePlaces';

const baseURL = process.env.REACT_APP_BASE_API_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const Index = () => {
  const {
    places,
    setPlaces,
    location,
    setErrorMessage,
    setLoaded,
    loading,
    setLoading,
    setLoadingMorePlaces,
    offset,
    setOffset,
  } = useContext(CoffeeContext);

  const isMounted = useRef(true);

  // set isMounted to false when we unmount the component
  useEffect(() => {
    console.log('MOUNTED');
    // console.log('MOUNTED & PLACES', places);

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

      // don't send again while we are sending
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
        // once the request is sent, update the state again
        if (isMounted.current) setLoading(false); // only update if we are still mounted
      }
    },
    [
      loading,
      location,
      setErrorMessage,
      setLoaded,
      setLoading,
      setOffset,
      setPlaces,
    ] // update the callback if the state changes
  );

  const findMoreCoffee = useCallback(async () => {
    try {
      setLoadingMorePlaces(true);
      let response = await instance.get('/.netlify/functions/places', {
        params: {
          term: 'coffee',
          location,
          limit: 9,
          offset,
        },
      });

      let data = JSON.parse(response.data.res.body);
      setPlaces([...places, ...data.businesses]);
      setOffset(offset + 9);
    } catch (e) {
      console.log('Errors fetching more coffee places', e);
    } finally {
      setLoadingMorePlaces(false);
    }
  }, [location, offset, places, setLoadingMorePlaces, setOffset, setPlaces]);

  return (
    <main>
      <Header />
      <CoffeeForm findCoffee={findCoffee} />
      <CoffeePlaces findMoreCoffee={findMoreCoffee} />
    </main>
  );
};

export default Index;