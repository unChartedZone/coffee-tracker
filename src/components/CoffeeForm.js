import React, { useContext } from 'react';
import CoffeeContext from '../context/coffee-context';
import Btn from './Btn';
import TextField from './TextField';

const CoffeeForm = ({ findCoffee }) => {
  const { location, setLocation } = useContext(CoffeeContext);

  return (
    <div>
      <TextField
        value={location}
        onChange={(value) => setLocation(value)}
        placeholder="City"
        type="text"
      />
      <Btn onClick={findCoffee}>Find Me Coffee</Btn>
    </div>
  );
};

export default CoffeeForm;
