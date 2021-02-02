import React, { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import CoffeeContext from '../context/coffee-context';

const CoffeeView = () => {
  const { places } = useContext(CoffeeContext);

  let { id } = useParams();

  useEffect(() => {
    console.log('COFFEE VIEW MOUNTED');
    console.log('Coffee Place ID: ', id);
    console.log('Places: ', places);
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
