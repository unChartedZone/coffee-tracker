import React, { useState } from 'react';
import Btn from './Btn';
import TextField from './TextField';

const CoffeeForm = ({ findCoffee }) => {
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleCityChange = (value) => {
    setCity(value);
  };

  const handleZipCodeChange = (value) => {
    setZipCode(value);
  };

  return (
    <div>
      <h1>City: {city}</h1>
      <h1>Zip Code: {zipCode}</h1>
      <TextField
        value={city}
        onChange={handleCityChange}
        placeholder="City"
        type="text"
      />
      <TextField
        value={zipCode}
        onChange={handleZipCodeChange}
        placeholder="Zip Code"
        type="text"
      />
      <Btn onClick={findCoffee}>Find Me Coffee</Btn>
    </div>
  );
};

export default CoffeeForm;
