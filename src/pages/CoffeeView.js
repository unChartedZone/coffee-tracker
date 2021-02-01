import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CoffeeView = () => {
  let { id } = useParams();

  useEffect(() => {
    console.log('COFFEE VIEW MOUNTED');
    console.log('Coffee Place ID: ', id);
  }, []);

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Coffee Place: {id}</h1>
    </div>
  );
};

export default CoffeeView;
