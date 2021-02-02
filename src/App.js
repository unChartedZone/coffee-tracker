import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Styles
import GlobalStyles from './styles/GlobalStyles';

// Context
import CoffeeContext from './context/coffee-context';

// Pages
import Index from './pages/Index';
import CoffeeView from './pages/CoffeeView';

const App = () => {
  // TODO: Use a reducer to simply all of this
  const [places, setPlaces] = useState([]);
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [offset, setOffset] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false); // Controls wether to show loading animation or not
  const [loadingMorePlaces, setLoadingMorePlaces] = useState(false);

  return (
    <CoffeeContext.Provider
      value={{
        places,
        setPlaces,
        location,
        setLocation,
        errorMessage,
        setErrorMessage,
        loaded,
        setLoaded,
        loading,
        setLoading,
        loadingMorePlaces,
        setLoadingMorePlaces,
        offset,
        setOffset,
      }}
    >
      <Router>
        <GlobalStyles />
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
