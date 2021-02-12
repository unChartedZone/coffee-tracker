import React, { useContext } from 'react';
import styled from 'styled-components';
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

const CoffeeForm = ({ findCoffee }) => {
  const { location, setLocation, errorMessage, loading } = useContext(
    CoffeeContext
  );

  // const handleClick = (e) => {
  //   console.log(e);
  //   console.log('Using Location!');

  //   navigator.permissions.query({ name: 'geolocation' }).then((result) => {
  //     console.log('Result: ', result);
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       console.log(position);
  //     });
  //   });

  //   navigator.permissions.query({name:'geolocation'}).then(function(result) {
  // if (result.state == 'granted') {
  //   report(result.state);
  //   geoBtn.style.display = 'none';
  // } else if (result.state == 'prompt') {
  //   report(result.state);
  //   geoBtn.style.display = 'none';
  //   navigator.geolocation.getCurrentPosition(revealPosition,positionDenied,geoSettings);
  // } else if (result.state == 'denied') {
  //   report(result.state);
  //   geoBtn.style.display = 'inline';
  // }
  // result.onchange = function() {
  //   report(result.state);
  // }
  // };

  return (
    <CoffeeFormStyles>
      <div>
        <form onSubmit={findCoffee}>
          <TextField
            value={location}
            onChange={(value) => setLocation(value)}
            placeholder="Location"
            type="text"
            errorMessage={errorMessage}
          />
          <Btn block type="submit" loading={loading}>
            Find Me Coffee
          </Btn>
        </form>
        <div>
          {/* <p */}
          {/*   className="text text-center" */}
          {/*   style={{ fontFamily: 'Lobster', margin: '1rem 0' }} */}
          {/* > */}
          {/*   OR */}
          {/* </p> */}
          {/* <Btn block onClick={(event) => handleClick(event)}> */}
          {/*   Use My Location */}
          {/* </Btn> */}
        </div>
      </div>
    </CoffeeFormStyles>
  );
};

export default CoffeeForm;
