import React, { useContext } from 'react';
import CoffeeContext from '../context/coffee-context';

const CoffeePlaces = () => {
  const { places } = useContext(CoffeeContext);

  return (
    <>
      <h2 className="title">Coffee Places</h2>
      <ul>
        {places.map((place) => {
          return <li key={place.id}>{place.alias}</li>;
        })}
      </ul>
    </>
  );
};

export default CoffeePlaces;
