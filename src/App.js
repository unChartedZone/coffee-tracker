import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// Styles
import GlobalStyles from './styles/GlobalStyles';
import Typograhpy from './styles/Typography';

// Context
import CoffeeContext from './context/coffee-context';

// Pages
import Index from './pages/Index';
import CoffeeView from './pages/CoffeeView';

// Components
import Footer from './components/Footer';

const AppStyled = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentStyled = styled.div`
  flex: 1;
`;

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
      <GlobalStyles />
      <AppStyled>
        <ContentStyled>
          <Router>
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
        </ContentStyled>
        <Footer />
      </AppStyled>
    </CoffeeContext.Provider>
  );
};

export default App;
