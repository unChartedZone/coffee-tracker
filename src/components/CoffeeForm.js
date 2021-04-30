import React, {
  useContext,
  useEffect,
  useCallback,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

import http from '../http';
import CoffeeContext from '../context/coffee-context';
import TextField from './TextField';
import Btn from './Btn';

const CoffeeFormStyles = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;

  form > * + * {
    margin-top: 2rem;
  }
`;

const CoffeeForm = () => {
  const {
    location,
    setLocation,
    setPlaces,
    errorMessage,
    setErrorMessage,
    setLoaded,
    setOffset,
  } = useContext(CoffeeContext);

  const [loading, setLoading] = useState(false);
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
        let response = await http.get('/.netlify/functions/places', {
          params: {
            context: 'search',
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
    [loading, location, setErrorMessage, setLoaded, setOffset, setPlaces] // update the callback if the state changes
  );

  return (
    <CoffeeFormStyles>
      <div>
        <form onSubmit={findCoffee}>
          <TextField
            value={location}
            onChange={(value) => setLocation(value)}
            errorMessage={errorMessage}
            placeholder="Location"
            type="text"
          />
          <Btn block type="submit" loading={loading}>
            Find Me Coffee
          </Btn>
        </form>
      </div>
    </CoffeeFormStyles>
  );
};

export default CoffeeForm;
