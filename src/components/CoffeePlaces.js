import React from 'react';

const CoffeePlaces = (props) => {
  return (
    <>
      <h2 className="title">Coffee Places</h2>
      <ul>
        {props.places.map((place) => {
          return <li key={place.id}>{place.alias}</li>;
        })}
      </ul>
    </>
  );
};

export default CoffeePlaces;
