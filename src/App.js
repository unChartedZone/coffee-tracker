import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Styles
import GlobalStyles from './styles/GlobalStyles';
import Typograhpy from './styles/Typography';

// Context
import CoffeeContext from './context/coffee-context';

// Pages
import Index from './pages/Index';
import CoffeeView from './pages/CoffeeView';

const App = () => {
  // TODO: Use a reducer to simply all of this
  const [place, setPlace] = useState({});
  const [places, setPlaces] = useState([]);
  const [location, setLocation] = useState('');
  const [offset, setOffset] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [loadingMorePlaces, setLoadingMorePlaces] = useState(false);

  return (
    <CoffeeContext.Provider
      value={{
        place,
        setPlace,
        places,
        setPlaces,
        location,
        setLocation,
        loaded,
        setLoaded,
        loadingMorePlaces,
        setLoadingMorePlaces,
        offset,
        setOffset,
      }}
    >
      <Router>
        <GlobalStyles />
        <Typograhpy />
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/:id">
            <CoffeeView />
          </Route>
        </Switch>
      </Router>
    </CoffeeContext.Provider>
  );
};

export default App;
