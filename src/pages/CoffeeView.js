import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import CoffeeContext from '../context/coffee-context';

const CoffeeView = () => {
  let { id } = useParams();

  useEffect(() => {
    console.log('COFFEE VIEW MOUNTED');
  }, []);

  return (
    <CoffeeContext.Provider>
      <div>
        <Link to="/">Back</Link>
        <h1>Coffee Place: {id}</h1>
      </div>
    </CoffeeContext.Provider>
  );
};

export default CoffeeView;
