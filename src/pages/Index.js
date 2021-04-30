import React, { useEffect, useRef, useCallback, useContext } from 'react';
import axios from 'axios';

import CoffeeContext from '../context/coffee-context';

// Components
import Header from '../components/Header';
import CoffeeForm from '../components/CoffeeForm';
import CoffeePlaces from '../components/CoffeePlaces';

const Index = () => {
  return (
    <main>
      <Header />
      <CoffeeForm findCoffee={findCoffee} />
      <CoffeePlaces findMoreCoffee={findMoreCoffee} />
    </main>
  );
};

export default Index;
